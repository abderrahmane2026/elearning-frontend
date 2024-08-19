import Button from "../../../components/Button/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <div className="recommended-container">
      <div className="recommended-title">Recommended</div>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="الكل" />
        <Button onClickHandler={handleClick} value="ابتذائي" title="ابتذائي" />
        <Button onClickHandler={handleClick} value="متوسط" title="متوسط" />
        <Button onClickHandler={handleClick} value="ثانوي" title="ثانوي" />
        <Button onClickHandler={handleClick} value="جامعي" title="جامعي" />
       
      </div>
    </div>
  );
};

export default Recommended;
