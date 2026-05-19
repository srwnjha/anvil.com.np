
import useSideMenu from '../hooks/useSideMenu';

const HeaderPopupSearch = () => {
    useSideMenu('.popup-search-box', '.searchBoxToggler', '.searchClose', 'show');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your search logic here
        const searchValue = e.target.elements[0].value;
        console.log('Search for:', searchValue);
    };

    return (
        <div className="popup-search-box d-none d-lg-block">
            <button className="searchClose">
                <i className="fal fa-times"></i>
            </button>
            <div className="sidemenu-content">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="What are you looking for?"
                    />
                    <button type="submit">
                        <i className="fal fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HeaderPopupSearch;