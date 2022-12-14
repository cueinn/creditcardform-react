import "./styles.css"

function TextField(props) {

  const { name, type, id, placeholder, value, secondaryValue, secondaryPlaceholder, secondaryId, error, onChange, secondaryOnChange, min, max, pattern } = props

  let doubleField = props.doubleField || false

  return (
    <div className="inputGroup">
      <label htmlFor={id}>
        {name}
      </label>
      <div className="inputWrap">
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          pattern={pattern}
          minLength={min}
          maxLength={max}
          required
        />
        {doubleField &&
          <input
            type={type}
            placeholder={secondaryPlaceholder}
            id={secondaryId}
            value={secondaryValue}
            onChange={secondaryOnChange}
            pattern={pattern}
            minLength={min}
            maxLength={max}
            required
          />}
      </div>
      <span className="feedbackError" aria-live="polite">{error || "Can't be blank"}</span>
    </div>
  )

}

export default TextField