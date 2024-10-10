import "./Footer.scss"
const Footer = ()=>{
    return (
        <footer className="footer">
            <div className="footer__container">
                <img src="/imgs/rimac_black.png" alt="Footer Logo" className="footer__image"/>
                <div className="footer__separator"></div>
                <p className="footer__text">© 2023 RIMAC Seguros y Reaseguros.</p>
            </div>
        </footer>

    )
}

export default Footer;