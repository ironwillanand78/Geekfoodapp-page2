
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from "./App.module.css"
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Card from './components/card/Card'
const Mycomponent = () =>{
  return(
    <div>
  <Navbar/>
  <div className={styles.carddiv}>
  <Card/></div>
  <Footer/>
    </div>
  )
}
const App = () => {
return (
  <>
  <Mycomponent/>
  </>
)
}




export default App;
