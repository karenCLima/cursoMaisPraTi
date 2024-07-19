import Style from './Header.module.css'
import logo from '../../assets/react.svg'

const Header = ()=>{
    return (
        <div className={Style.header}>
            <img src={logo} alt="" className={Style.logo}/>
            <nav className={Style.container}>
                <ul className={Style.navListContainer}>
                    <li className={Style.navList}><a href="#">Serviços</a></li>
                    <li className={Style.navList}><a href="#">Canais</a></li>
                    <li className={Style.navList}><a href="#" className={Style.login}>Login</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header