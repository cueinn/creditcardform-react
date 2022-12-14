import cardLogo from '../../img/card-logo.svg';

function CardPreview(props) {

  let showLogo, showCardNumber, showCardHolderName, showDate, showCVC, componentClass
  const variant = props.variant

  if (variant === "back") {
    showCVC = true
    componentClass = "cardPreview back"
  } else {
    showLogo = true
    showCardNumber = true
    showCardHolderName = true
    showDate = true
    componentClass = "cardPreview front"
  }

  return (
    <div className={componentClass}>
      {showLogo && <img src={cardLogo} alt="Fake credit card logo" />}
      {showCardNumber && <span className="cardPreview_number" id="cardPreview_number">{props.num}</span>}
      {showCardHolderName && <span className="cardPreview_name" id="cardPreview_name">{props.cardholderName}</span>}
      {showDate && <p className="cardPreview_date" id="cardPreview_date"><span id="cardPreview_dateMonth">{props.dateMonth}</span>/<span id="cardPreview_dateYear">{props.dateYear}</span></p>}
      {showCVC && <span className="cardPreview_cvc" id="cardPreview_cvc">{props.cvc}</span>}
    </div>
  )

}

export default CardPreview