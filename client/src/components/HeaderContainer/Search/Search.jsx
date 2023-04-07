import SearchIcon from '@mui/icons-material/Search';
import './Search.css'

const Search = () => {
    return (
        <div className="container-search">
            <input type="text" className="input-search" placeholder='Busca tu capsulita' />
            <SearchIcon id="icon-search" />
        </div>
    )
}

export default Search