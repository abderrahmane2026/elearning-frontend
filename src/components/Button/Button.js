import "./Button.css"

const Button = ({ onClickHandler, value, title }) => {
  return (
    <div className="catigory-butten">
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
    </div>
  );
};

export default Button;
