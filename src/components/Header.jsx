import "./Header.scss";


const Header = () => {

    return (
        <div className="navbar">
            <div className="navbar__container">
                <img src="/imgs/Logo.png" alt="Logo" className="navbar__logo" />
                <div className="navbar__info">
                    <p className="navbar__info-title">¡Compra por este medio!</p>
                    <div className="navbar__info-phone">
                        <img
                            src="/imgs/phone.png"
                            alt="Phone Icon"
                            className="navbar__info-phone-icon"
                        />
                        <span className="navbar__info-phone-number">(01) 411 6001</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
