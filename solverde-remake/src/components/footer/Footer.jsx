// Import necessary components
import PromoFooter from '../promofooter/PromoFooter';
import IntroFooter from '../introfooter/IntroFooter';
import Sponsors from '../sponsors/Sponsors';
import CopyFooter from '../copyfooter/CopyFooter';

// Import styling
import './footer.scss';

// Define Footer component
const Footer = () => {
    return (
        <footer>
            {/* Render PromoFooter component */}
            <PromoFooter />

            {/* Render IntroFooter component */}
            <IntroFooter />

            {/* Render Sponsors component */}
            <Sponsors />
            <div className="footer">

           
            <div className="row">
                <div className="col-4">
                    <h3 className="h4">Info</h3>
                    <ul>
                        <li><a href="#">Perguntas Frequentes</a></li>
                        <li><a href="#">Jogo Responsável</a></li>
                        <li><a href="#">Contactos</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Política de Bónus</a></li>
                        <li><a href="#">Política de Privacidade e Cookies</a></li>
                    </ul>
                    
                </div>
                <div className="col-4">
                    <ul>
                        <li><a href="#">Jogo Responsável</a></li>
                        <li><a href="#">Termos e Condições</a></li>
                        <li><a href="#">Direito à informação</a></li>
                        <li><a href="#">Afiliados</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <h3 className="h4">Disponível em Android e iOS</h3>
                    <button className='btn btn-quaternary'>Descarregar App Oficial</button>
                    <h3 className="h4">Siga-nos em</h3>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><i className="facebook-f"></i></a>
                        <a href="#" aria-label="Twitter"><i className="x-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i className="instagram"></i></a>
                        <a href="#" aria-label="Linkedin"><i className="linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            </div>

             {/* Render CopyFooter component */}
            <CopyFooter />
        </footer>
    );
};

// Export Footer component
export default Footer;