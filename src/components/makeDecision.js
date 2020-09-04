import PropTypes from "prop-types"
import React, { useState } from "react"

const MakeDecision = ({
    defaultOptions,
    chooseButtonLabel,
    addOptionLabel
}) => {
  // Using set state to manage the chosen decision
  const [chosenDecision, setChosenDecision] = useState("");
  const [options, setOptions] = useState(defaultOptions);
  const [newOption, setNewOption] = useState("");
  const chooseOption = () => {
    setChosenDecision(options[Math.floor(Math.random() * options.length)]);
  }
  const addOption = (e) => {
    e && e.preventDefault();
    setOptions([...options, newOption]);
    setNewOption("");
  }
  const removeOption = (option) => {
      setOptions(options.filter(o => o !== option));
  }

  // Using set state to adjust views for adding options
  const [showAddOption, setShowAddOption] = useState(false);

  return (
    <>
      <div className="decorative-quote">
        {chosenDecision}
      </div>
      <div className="container">
        <button className="default-button" onClick={chooseOption}>{chooseButtonLabel}</button>
      </div>
      <div className="container">
        <button className="add-option-section-label" onClick={() => setShowAddOption(!showAddOption)}>
          <div className="separator">Edit options</div>
        </button>
        {
          showAddOption &&
          <>
            <form className="add-form" onSubmit={addOption}>
                <label className="add-label">
                    {addOptionLabel}
                    <br />
                    <input className="add-input" type="text" value={newOption} onChange={e => setNewOption(e.target.value)} />
                </label>
                <input className="add-button" type="submit" value="Add" />
            </form>
            <ul className="options-list">
                {options.map((option, index) =>
                    <li key={`${index}-${option}`}>{option}<button className="remove-button" onClick={() => removeOption(option)}>x</button></li>)}
            </ul>
          </>
        }
      </div>
    </>
  );
}

MakeDecision.propTypes = {
    defaultOptions: PropTypes.array,
    chooseButtonLabel: PropTypes.string,
    addOptionLabel: PropTypes.string
}

MakeDecision.defaultProps = {
    defaultOptions: [],
    chooseButtonLabel: "Choose an option",
    addOptionLabel: "What option would you like to add?"
}

export default MakeDecision