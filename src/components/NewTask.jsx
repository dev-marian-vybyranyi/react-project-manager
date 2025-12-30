import { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [enteredText, setEnteredText] = useState("");

  const handleChange = (event) => {
    setEnteredText(event.target.value);
  };

  const handleClick = () => {
    if (enteredText.trim() === "") {
      return;
    }
    onAddTask(enteredText);
    setEnteredText("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredText}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
