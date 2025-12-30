import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd }) => {
  const modalRef = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    const projectData = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };

    console.log("Saving project:", projectData);

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd(projectData);
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2>Invalid Input</h2>
        <p>Please enter a valid title, description, and due date.</p>
      </Modal>
      <div className="w-[35rem] mt-60">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={title} />
          <Input label="Description" textarea ref={description} />
          <Input label="Due Date" type="date" ref={dueDate} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
