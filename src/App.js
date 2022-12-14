import './App.css';
import { Fragment } from 'react';
import CardPreviewWrap from './components/CardPreviewWrap'
import Content from './components/Content'
import Attribution from './components/Attribution';
import { useState } from 'react';

function App() {
  const [ccName, setCcName] = useState('')
  const [ccNumber, setCcNumber] = useState('')
  const [dateMonth, setDateMonth] = useState('')
  const [dateYear, setDateYear] = useState('')
  const [cvc, setCvc] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)

  function showError(input) {
    input.parentNode.parentNode.querySelector('.feedbackError').classList.add('active')
    input.classList.add('error')
  }

  function clearError(input) {
    input.parentNode.parentNode.querySelector('.feedbackError').classList.remove('active')
    input.classList.remove('error')
  }

  function isEmpty(input) {
    if (input.value.length === 0) return true
    else return false
  }

  function handleError(input) {
    if (isEmpty(input) || !input.validity.valid) {
      showError(input)
    } else {
      clearError(input)
    }
  }

  function handleChangeNameValue(e) {
    setCcName(e.target.value)

    handleError(e.target)
  }
  function handleChangeNumberValue(e) {
    setCcNumber(e.target.value)
    handleError(e.target)

    if (ccNumber.length === 4 || ccNumber.length === 9 || ccNumber.length === 14) {
      setCcNumber(ccNumber + " ")
    }
  }
  function handleChangeMonthValue(e) {
    setDateMonth(e.target.value)
    handleError(e.target)
  }
  function handleChangeYearValue(e) {
    setDateYear(e.target.value)
    handleError(e.target)
  }
  function handleChangeCvcValue(e) {
    setCvc(e.target.value)
    handleError(e.target)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const inputs = document.querySelectorAll("input")
    let invalidInputs = false

    inputs.forEach(input => {
      if (!input.validity.valid) {
        showError(input)
        invalidInputs = true
      }
    })

    if (!invalidInputs) {
      setFormSubmitted(true)
    }

    console.log(`
    Cardholder name: ${ccName}
    Card number: ${ccNumber}
    Exp. Date: ${dateMonth}/${dateYear}
    CVC: ${cvc}
    `)
  }

  function handleClick(event) {
    event.preventDefault()

    setFormSubmitted(false)
  }

  return (
    <>
      <CardPreviewWrap
        num={ccNumber}
        cardholderName={ccName}
        dateMonth={dateMonth}
        dateYear={dateYear}
        cvc={cvc}
      />

      <Content
        nameValue={ccName}
        onChangeNameValue={handleChangeNameValue}
        numberValue={ccNumber}
        onChangeNumberValue={handleChangeNumberValue}
        monthValue={dateMonth}
        onChangeMonthValue={handleChangeMonthValue}
        yearValue={dateYear}
        onChangeYearValue={handleChangeYearValue}
        cvcValue={cvc}
        onChangeCvcValue={handleChangeCvcValue}
        handleSubmit={handleSubmit}
        formSubmitted={formSubmitted}
        handleClick={handleClick}
      />

      <Attribution />
    </>
  );
}

export default App;
