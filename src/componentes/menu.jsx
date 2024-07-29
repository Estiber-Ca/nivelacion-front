import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>Inicio</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/lugares'>Ver Lugares</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
