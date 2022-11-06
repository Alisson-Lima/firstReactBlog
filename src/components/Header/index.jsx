import Logo from "../../svg/logo.svg"

export default function Header(){
    const descLogo = "Essa é a logo do blog"
    return (
        <header className="flex-space-between">
            <div className="header-logo">
                <img src={Logo} alt={descLogo} />
            </div>
            <div className="header-search">
                <input type="text" className="input-search" name="search" id="" placeholder="Buscar artigos" />
            </div>
            <ul className="header-menu">
                <li><a href="#" className="nav-link">Categories</a></li>
                <li><a href="#" className="nav-link">About</a></li>
                <li><a href="#" className="nav-link">Contact</a></li>
            </ul>
        </header>
    )
}