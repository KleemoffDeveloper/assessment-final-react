import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to={'/'} className='logo'>
                <img src='https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg' />
            </Link>
            <Link to={'/movies'}>Movies</Link>
            <Link to={'/people'}>People</Link>
            <Link to={'/locations'}>Locations</Link>
        </nav>
    );
}