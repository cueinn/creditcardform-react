import './styles.css'
import CardPreview from '../CardPreview';

function CardPreviewWrap(props) {



  return (
    <section className="cardPreviewWrap">
      <CardPreview
        num={props.num ? props.num : '0000 0000 0000 0000'}
        cardholderName={props.cardholderName ? props.cardholderName : 'Jane AppleSeed'}
        dateMonth={props.dateMonth ? props.dateMonth : '00'}
        dateYear={props.dateYear ? props.dateYear : '00'}
      />
      <CardPreview
        variant="back"
        cvc={props.cvc ? props.cvc : '000'}
      />
    </section>
  )
}

export default CardPreviewWrap