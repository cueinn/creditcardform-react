import "./styles.css";
import TextField from "../TextField";

export const FORM_CC_NAME = "Cardholder Name";
export const FORM_CC_NUMBER = "Card Number";
export const FORM_CC_DATE = "Exp. Date (MM/YY)";
export const FORM_CC_CVC = "CVC";
export const FORM_CC_SUBMIT = "Confirm";

export default function Form({
  nameValue,
  onChangeNameValue,
  numberValue,
  onChangeNumberValue,
  monthValue,
  onChangeMonthValue,
  yearValue,
  onChangeYearValue,
  cvcValue,
  onChangeCvcValue,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} id="form" noValidate autoComplete="off">
      <TextField
        name={FORM_CC_NAME}
        type="text"
        placeholder="e.g. Jane Appleseed"
        id="inputCardholderName"
        value={nameValue}
        onChange={onChangeNameValue}
        pattern="^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$"
      />

      <TextField
        name={FORM_CC_NUMBER}
        type="text"
        placeholder="e.g. 1234 5678 9123 0000"
        id="inputCardNumber"
        value={numberValue}
        onChange={onChangeNumberValue}
        max="19"
        pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
      />

      <TextField
        name={FORM_CC_DATE}
        type="number"
        doubleField
        placeholder="MM"
        secondaryPlaceholder="YY"
        id="inputExpDateMonth"
        secondaryId="inputExpDateYear"
        value={monthValue}
        onChange={onChangeMonthValue}
        min="2"
        max="2"
        secondaryValue={yearValue}
        secondaryOnChange={onChangeYearValue}
        pattern="\d{2}"
      />

      <TextField
        name={FORM_CC_CVC}
        type="text"
        placeholder="e.g. 123"
        id="inputCVC"
        value={cvcValue}
        onChange={onChangeCvcValue}
        min="3"
        max="4"
        pattern="\d{3,4}"
      />

      <button id="buttonConfirm">{FORM_CC_SUBMIT}</button>
    </form>
  );
}
