import React, { useState } from "react"

const App = () => {
  // Using set state to manage the chosen decision
  const [chosenDecision, setChosenDecision] = useState("");
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState("");
  const chooseActivity = () => {
    setChosenDecision(activities[Math.floor(Math.random() * activities.length)]);
  }
  const addActivity = (e) => {
    e && e.preventDefault();
    setActivities([...activities, newActivity]);
  }

  // Using set state to adjust views for adding activities
  const [showAddActivity, setShowAddActivity] = useState(false);

  return (
    <div className="root">
      <div className="g_padding g_font chosen-decision">{chosenDecision}</div>
      <div className="g_padding decision-buttons">
        <button className="g_font-family g_font-size-regular g_border-radius g_button" onClick={chooseActivity}>Choose an activity</button>
      </div>
      <div className="g_width-full g_padding add-activity">
        <button className="g_width-full g_font-family g_font-size-large add-activity-button" onClick={() => setShowAddActivity(!showAddActivity)}>
          <div className="separator">Add activity</div>
        </button>
        {
          showAddActivity &&
          <form onSubmit={addActivity}>
            <label className="g_font-family">
              What activity would you like to add?
              <br />
              <input className="g_font-family g_font-size-regular g_border-radius g_input" type="text" value={newActivity} onChange={e => setNewActivity(e.target.value)} />
            </label>
            <input className="g_font-family g_font-size-regular g_border-radius g_button" type="submit" value="Add" />
          </form>
        }
      </div>
      <div className="g_padding g_font-family decorative-quote">
        "Existence was really very simple when you did what you were told."
        - The Princess Bride, William Goldman
      </div>
    </div>
  );
};

export default App
