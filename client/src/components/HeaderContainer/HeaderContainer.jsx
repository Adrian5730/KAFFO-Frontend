import Filter from './Filter/Filter.jsx'
import IconUser from './IconUser/IconUser'
import Search from './Search/Search'
import './HeaderContainer.css'


const Header = () => {
    return (
        <div className='navigation'>
            <IconUser />
            <Search />
            <Filter />
        </div>
    )
}

export default Header