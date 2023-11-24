/**
 * A functional component that represents a tab in a user interface.
 * @param {{Function}} onClose - The function to be called when the tab is closed.
 * @param {{string}} title - The title of the tab.
 * @param {{string}} imageSrc - The source URL of the image displayed in the tab.
 * @param {{string}} text - The text content of the tab.
 * @param {{string}} category - The category of the tab.
 * @param {{string}} description - The description of the tab.
 * @returns The JSX code representing the tab component.
 */
import "./tab.scss";

const Tab = ({ onClose, title, imageSrc, text, category, description }) => {
  console.log("Tab props:", { title, imageSrc, text, category, description });

  return (
    <div className="pop-tab">
      <div className="pop-tab-content">
        <div className="circle" onClick={onClose}></div>

        <img src={imageSrc} alt={`Image for ${title}`}/>
        <h1>{title}</h1>
        <p>Ganha 30€ em free bets</p>
        <h3>Como funciona?</h3>
        <div className="wrapper-list">
          <ol>
            <li>
              <span>
                {" "}
                Faz a tua primeira aposta de 10€ (ou mais) em qualquer mercado
                na Solverde.pt. A aposta tem de ficar resolvida nas primeiras 72
                horas seguintes ao registo para ser elegível.{" "}
              </span>
            </li>
            <li>
              <span>
                {" "}
                Faz a tua primeira aposta de 10€ (ou mais) em qualquer mercado
                na Solverde.pt. A aposta tem de ficar resolvida nas primeiras 72
                horas seguintes ao registo para ser elegível.{" "}
              </span>
            </li>
            <li>
              <span>
                {" "}
                Assim que a aposta inicial estiver resolvida, recebes{" "}
                <strong>3 free bets de 10€</strong>!{" "}
              </span>
            </li>
            <li>
              <span>
                Uma <strong>Free Bet Livre</strong> para usares numa aposta de
                10€ em qualquer mercado disponível na Solverde.pt, com odd igual
                ou superior a 2.00.
              </span>
            </li>
            <li>
              <span>
                Uma <strong>Free Bet Múltipla</strong> para usares numa aposta
                múltipla de 10€, com 3 ou mais seleções de qualquer mercado
                disponível na Solverde.pt e com odd igual ou superior a 2.00.
              </span>
            </li>
            <li>
              <span>
                Uma <strong>Free Bet Ao Vivo</strong> para usares em qualquer
                mercado Ao Vivo disponível na Solverde.pt, numa aposta de 10€,
                com odd igual ou superior a 2.00.
              </span>
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button className="btn btn-primary btn-primary--bet">Registar</button>
        </div>
        <div className="col-6">
          <button className="btn btn-secondary btn-primary--bet">
            Termos e Condições
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tab;
