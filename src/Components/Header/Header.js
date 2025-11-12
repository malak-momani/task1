import TODO from '../../assests/to-do-list.png';
import './header.css'

const Header = () => {
    return (
        <div className='logo-text amaranth-bold'>
            <img src={TODO} className="logo margin25" alt='Logo'/>
            <h3>To-Do List</h3>
        </div>
    );
}

export default Header;