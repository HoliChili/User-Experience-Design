import { BrowserRouter as Router, Routes, Route, Link}
 from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'
import RcHobbyPage from './components/RcHobbyPage/RcHobbyPage'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import VehiclesPage from './components/VehiclesPage/VehiclesPage';
import styles from './components/Header.module.css';



function App() {

  return (
    <Router>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.title}>
            <Link to="/"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/365e80352032d40932364352ac9bba1126569571c009d88241a60339c066cd3e?placeholderIfAbsent=true&apiKey=e2809fcf8a8249a5a890320535b1076d" alt="Logo" className={styles.logo} /></Link>
            <div className={styles.subtitle}><Link to="/" style={{ color: 'inherit' ,textDecoration: 'none'}}>Arngren</Link></div>
          </div>
         <nav className={styles.navLinks}>
            <Link to="/vehicles" style={{ color: 'inherit' ,textDecoration: 'none'}} className={styles.navLink}>Vehicles</Link>
            <Link to="/"style={{ color: 'inherit' ,textDecoration: 'none'}} className={styles.navLink}>Tools</Link>
            <Link to="/rchobby" style={{ color: 'inherit' ,textDecoration: 'none' }} className={styles.navLink}>RC & Hobby</Link>
            <Link to="/cart"><button className={styles.cartButton}>Basket ({3})</button></Link>
         </nav>
       </div>
      </header>
          <Routes>
            <Route index element={<Homepage />}></Route>
            <Route path="/rchobby" element={<RcHobbyPage />}></Route>
            <Route path="/cart" element={<ShoppingCart />}></Route>
            <Route path="/vehicles" element={<VehiclesPage />}></Route>
          </Routes>
    </Router>
  )
}

export default App
