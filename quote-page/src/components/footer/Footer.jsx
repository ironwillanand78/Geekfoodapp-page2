import styles from "./Footer.module.css"

const Footer = () =>{
    return (
        <div className = {styles.footerdiv}>
    <div className= {styles.footerImg}>
        <img src="./src\components\footer\Footer-assets\footerimg-removebg-preview.png" />
    </div>
    <div className = {styles.footerPara}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
    </div>
    <div className= {styles.footerList}>
        <ul>
            <li><a href="">About</a></li>
            <li><a href="">Carrers</a></li>
            <li><a href="">History</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Project</a></li>
            <li><a href="">Blog</a></li>
        </ul>
    </div>
    <div className= {styles.footerIcons}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
    )
}





export default Footer;