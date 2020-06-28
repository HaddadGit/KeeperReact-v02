import React, { useState } from "react";
function CreateArea(props) {
  const [textArea, setTextArea] = useState({ title: "", content: "" });

  function handlerChange(event) {
    const { name, value } = event.target;
    setTextArea(preValue => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }
  function afterSubmission(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={afterSubmission}>
        <input
          onChange={handlerChange}
          name="title"
          placeholder="Title"
          value={textArea.title}
        />
        <textarea
          onChange={handlerChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={textArea.content}
        />
        <button
          type="submit"
          onClick={() => {
            props.onAdd(textArea.title, textArea.content);
            setTextArea({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
