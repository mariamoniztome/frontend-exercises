/**
 * Represents the HeroSection component that displays promotions.
 * @returns {JSX.Element} - The rendered HeroSection component.
 */
import './hero.scss';

const HeroSection = () => {
    return (
      <>
        <div className="wrapper-promotions">
          <h1 className="text-title">Promoções</h1>
          <p className="section_description">
            Conhece todas as ofertas, promoções e bónus disponíveis
          </p>
        </div>
      </>
    );
  };
  
  export default HeroSection;
  