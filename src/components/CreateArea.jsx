import React, { useState } from "react";

function CreateArea(props) {

    const [task, setTask] = useState({
        title: "",
        content: ""
    });


    function handleChange(event) {
        const { name, value } = event.target;

        setTask(prevTask => {
            return {
                ...prevTask,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.addTask(task);
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" value={task.title} placeholder="Title" />
                <textarea onChange={handleChange} name="content" value={task.content} placeholder="Take a note..." rows="3" />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
