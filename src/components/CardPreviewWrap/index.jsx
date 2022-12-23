import "./styles.css";
import CardPreview from "../CardPreview";

export const PREVIEW_CC_NUMBER = "0000 0000 0000 0000";
export const PREVIEW_CC_NAME = "Jane AppleSeed";
export const PREVIEW_CC_DATE = "00";
export const PREVIEW_CC_CVC = "000";

function CardPreviewWrap(props) {
  return (
    <section className="cardPreviewWrap" data-testid="CardPreview">
      <CardPreview
        num={props.num ? props.num : PREVIEW_CC_NUMBER}
        cardholderName={
          props.cardholderName ? props.cardholderName : PREVIEW_CC_NAME
        }
        dateMonth={props.dateMonth ? props.dateMonth : PREVIEW_CC_DATE}
        dateYear={props.dateYear ? props.dateYear : PREVIEW_CC_DATE}
      />
      <CardPreview
        variant="back"
        cvc={props.cvc ? props.cvc : PREVIEW_CC_CVC}
      />
    </section>
  );
}

export default CardPreviewWrap;
