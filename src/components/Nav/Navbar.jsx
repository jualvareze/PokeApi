import { NavLink } from "react-router-dom"
const Navbar = () => {
    const setActiveClass = ({isActive}) => (isActive ? "activo"+ " nav-link" : "nav-link")
    return (
        <>
        <link rel="stylesheet" href="./nav.css" />
            <nav className="navbar navbar-expand-lg bg-danger p-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">PokeApi</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className={setActiveClass}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Pokemones" className={setActiveClass}>Pokemones</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar