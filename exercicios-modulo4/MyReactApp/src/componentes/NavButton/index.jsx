import Style from './NavButton.module.css'

const NavButton =({children, onClick})=>{
    return(
        <button onClick={onClick} className={Style.button}>
            {children}
        </button>
    )
}

export default NavButton