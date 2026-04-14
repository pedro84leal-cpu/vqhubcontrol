import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { artigosAPI } from '../../../../../backend-php/api/artigos.php';
import { authAPI } from '../../../../services/api';
import styles from '../../../Pages/Troubleshooting/Artigos/artigos.module.css';


function NovoArtigo() {
    const [formData, setFormData] = useState({
        codigoArtigo: '',
        designacaoArtigo: ''
    });
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Verificar autenticação ao carregar (equivalente ao PHP session check)
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const auth = await authAPI.check();
            if (auth.authenticated) {
                setUser(auth);
            } else {
                navigate('/login');
            }
        } catch (err) {
            navigate('/login');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError(''); // Limpa erro ao digitar
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await artigosAPI.criar(formData);
            
            if (response.success) {
                alert('Artigo criado com sucesso!');
                navigate('/troubleshooting'); // Voltar para a página anterior
            } else {
                setError(response.error || 'Erro ao criar artigo');
            }
        } catch (err) {
            setError('Erro de conexão com o servidor');
            console.error('Erro:', err);
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return <div className={styles.loading}>A carregar...</div>;
    }

    return (
        <>
            {/* Header - Igual ao PHP */}
            <div className={styles.tableResponsive}>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td className={styles.company}>i-charging</td>
                            <td className={styles.title}>Quality Verification</td>
                            <td className={styles.userInfo}>
                                Olá {user.username}
                                <img 
                                    src={`/assets/img/${user.username}.png`} 
                                    alt={user.username}
                                    className={styles.avatar}
                                    onError={(e) => {
                                        e.target.src = '/assets/img/default.png';
                                    }}
                                />
                            </td>
                            <td className={styles.emptyCell}></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Botão Voltar */}
            <div className={styles.buttonContainer}>
                <button 
                    type="button" 
                    className={styles.backButton}
                    onClick={() => navigate('/troubleshooting')}
                >
                    ⬅️ Voltar
                </button>
            </div>

            {/* Formulário - Igual ao PHP */}
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.colMd5}>
                        <div className={styles.card}>
                            <div className={styles.cardBody}>
                                <h4 className={styles.cardTitle}>
                                    Novo Artigo
                                </h4>

                                {error && (
                                    <div className={styles.errorAlert}>
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="codigoArtigo" className={styles.label}>
                                            Código do Artigo
                                        </label>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            id="codigoArtigo"
                                            name="codigoArtigo"
                                            value={formData.codigoArtigo}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="designacaoArtigo" className={styles.label}>
                                            Designação do Artigo
                                        </label>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            id="designacaoArtigo"
                                            name="designacaoArtigo"
                                            value={formData.designacaoArtigo}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                        />
                                    </div>

                                    <div className={styles.submitWrapper}>
                                        <button 
                                            type="submit" 
                                            className={styles.submitButton}
                                            disabled={loading}
                                        >
                                            {loading ? 'A guardar...' : 'Guardar'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NovoArtigo;