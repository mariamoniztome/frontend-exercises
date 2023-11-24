import "./copyfooter.scss";

const CopyFooter = () => {
  return (
    <div className="copy-footer">
      <span className="text-regular">
        Joga com moderação. Se tiveres problemas com o jogo ou conheças alguém
        nessa situação, contacta a{" "}
        <a href="#" className="text-subtitle" target="_blank">
          Linha Vida
        </a>
        .
      </span>
    </div>
  );
};

export default CopyFooter;
