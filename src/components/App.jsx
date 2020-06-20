import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {




    const [newTask, setNewTask] = useState([]);

    function addTask(note) {
        setNewTask(newNote => {
            return [...newNote, note]
        })
    }

    return (
        <div>
            <Header />
            <CreateArea
                addTask={addTask}
            />
            {newTask.map((noteItem, index) => {
                return <Note key={index} title={noteItem.title} content={noteItem.content} />
            })
            }
            <Footer />
        </div>
    );
}

export default App;
