import styles from "./Navbar.module.css" 

const Navbar = () =>{
    return (
        <div className ={styles.container} >
            <div className={styles.leftside}>
                <img src="https://flowbite.com/docs/images/logo.svg" /> 
                <h3>GeeksFoods</h3>
            </div>
            <div className= {styles.middleside}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Quote</a></li>
                    <li><a href="#">Resturant</a></li>
                    <li><a href="#">Food</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className= {styles.rightside}>
                <button className= {styles.navbtn}> Get Started</button>
            </div>
        </div>
    )
}

export default Navbar;