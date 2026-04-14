import MenuPrincipal from "../Components/Menus/menuPrincipal";
import styles from '../Pages/home.module.css'




function Home(){
  return (

    <>
    <MenuPrincipal/>
    <div className={styles.container}>
      <div className={styles.post1}>
        <h1 className={styles.titulo}>
          Alertas!
        </h1>

        <p>
          Text
        </p>


      </div>
      

    </div>
    
    </>
  
  );
};

export default Home;