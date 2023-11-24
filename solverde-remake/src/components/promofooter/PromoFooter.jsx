/**
 * A React component that renders a promotional footer for an online casino website.
 * @returns The JSX code for the promotional footer.
 */
import './promofooter.scss';

const PromoFooter = () => {
  return (
    <div className="promo-wrapper">
      {/* Title */}
      <h3 className="text-bold">
        As Melhores Ofertas e Bónus de Casino Online
      </h3>
      
      {/* Description */}
      <p className="text-white">
        Na Solverde.pt, fazemos questão de complementar a nossa extensa gama
        de <a href="#" className="promo-link">slot machines</a>,{" "}
        <a href="#" className="promo-link">blackjack</a>,{" "}
        <a href="#" className="promo-link">banca francesa</a>, e{" "}
        <a href="#" className="promo-link">roleta</a> com uma grande variedade de ofertas e promoções.
      </p>
      <p className="sv-text-regular sv-text-14 sv-text-white-500">
        Desde <a href="#" className="promo-link">bónus de depósito</a> a bónus de cashback, não te vai faltar nada no teu casino online de eleição. E, claro, não nos podemos esquecer das eternamente populares jogadas grátis - a oferta favorita dos fãs de slots.
      </p>
      
      {/* Exclusive Promotions */}
      <h3>Promoções Exclusivas Solverde.pt</h3>
      <p className="text-white">
        Estamos sempre a introduzir novas e recompensantes campanhas de casino online e <a href="#" className="promo-link">mercados exclusivos para apostar</a>. Está com atenção a esta página para não perderes nenhuma oferta especial de apostas ou bónus de casino!
      </p>
      
      {/* Tip */}
      <p className="text-white">
        <strong>Dica:</strong> faz login para ver as promoções exclusivas que estão disponíveis só para ti.
      </p>
      
      {/* Register Bonus */}
      <p className="text-white">
        Ainda não és nosso cliente? Então experimenta os nossos jogos com um <a href="#" className="promo-link">bónus de registo de 25 jogadas grátis</a> e <a href="#" className="promo-link">até 100€ em bónus de boas-vindas.</a>
      </p>
    </div>
  );
};

export default PromoFooter;