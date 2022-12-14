import Form from '../Form'
import Feedback from '../Feedback'

export default function Content({
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
  formSubmitted,
  handleClick
}) {

  return (
    <section className="content" id="content">

      {!formSubmitted && <Form
        nameValue={nameValue}
        onChangeNameValue={onChangeNameValue}
        numberValue={numberValue}
        onChangeNumberValue={onChangeNumberValue}
        monthValue={monthValue}
        onChangeMonthValue={onChangeMonthValue}
        yearValue={yearValue}
        onChangeYearValue={onChangeYearValue}
        cvcValue={cvcValue}
        onChangeCvcValue={onChangeCvcValue}
        handleSubmit={handleSubmit}
      />}

      {formSubmitted && <Feedback onClick={handleClick} />}

    </section>
  )
}