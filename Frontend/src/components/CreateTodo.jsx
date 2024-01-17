import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTodo = async () => {
        try {
            const response = await fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Failed to add todo");
            }

            // const json = await response.json();
            alert("Todo added");
        } catch (error) {
            console.error("Error adding todo:", error.message);
            alert("Failed to add todo. Please try again.");
        }
    };

    return (
        <div>
            <input
                id="title"
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
                id="desc"
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <button
                style={{ padding: 10, margin: 10, cursor: "pointer" }}
                onClick={handleAddTodo}
            >
                Add a todo
            </button>
        </div>
    );
}
