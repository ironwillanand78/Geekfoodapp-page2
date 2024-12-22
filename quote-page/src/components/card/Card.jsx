import styles from "./Card.module.css"
import Data from './Data';
const Card = () =>{
    return (
        <div className = {styles.parentcontainer} >
            {
               Data.map((ele) =>(
                <div className={styles.quotediv} key={ele.id}>
                    <h4 className={styles.quote}> {ele.Quote}</h4>
                    <h3>{ele.Name}</h3>
                </div>
               ))
            }
        </div>
    )
}

export default Card;