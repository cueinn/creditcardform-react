import iconComplete from "../../img/icon-complete.svg";

export default function Feedback({ onClick }) {
  return (
    <div
      className="formComplete"
      id="formComplete"
      data-testid="feedbackMessage"
    >
      <img src={iconComplete} alt="Checked icon" />
      <h2>Thank you!</h2>
      <p>We've added your card details</p>
      <button onClick={onClick}>Continue</button>
    </div>
  );
}
