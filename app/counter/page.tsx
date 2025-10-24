'use client';

import {useState} from "react";

export default function Posts() {
    const [counter, setCounter] = useState(0);
    const [initialCount, setInitialCount] = useState(0);
    const handleInitialCountChange = (event) => {
        setInitialCount(Number(event.target.value));
    };
    const handleReset = () => {
        setCounter(initialCount);
    };

    const handleClick1 = () => {
        setCounter(counter + 1);
    };
    const handleClick2 = () => {
        setCounter(counter - 1);
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h1>Counter</h1>

                    <p>{counter}</p>
                    <button
                        type="submit"
                        className="px-6
                       py-2
                       my-4
                       bg-blue-500
                       text-white
                       rounded-lg
                       hover:bg-blue-600
                       focus:outline-none
                       focus:ring-2
                       focus:ring-blue-500"
                        onClick={handleClick1}>
                        Count +
                    </button>
                    <button
                        type="submit"
                        className="px-6
                       py-2
                       my-4
                       bg-blue-500
                       text-white
                       rounded-lg
                       hover:bg-blue-600
                       focus:outline-none
                       focus:ring-2
                       focus:ring-blue-500"
                        onClick={handleClick2}>
                        Count -
                    </button>
                    <input
                        type="number"
                        value={initialCount}
                        onChange={handleInitialCountChange}
                        style={{ padding: "1rem",
                            fontSize: "1rem",
                            borderRadius: "8px" }}
                    />
                    <button
                        onClick={handleReset}
                        style={{
                            padding: "1rem",
                            fontSize: "1rem",
                            marginLeft: "1rem",
                            borderRadius: "5px",
                            cursor: "pointer",
                            color: "#fff",
                            background: "blue",
                            border: "none",
                            outline: "none",
                            boxShadow: "0px 0px 20px 0px grey",
                        }}
                    >
                        Set Initial Count
                    </button>
                </div>
            </div>

        </div>
    )
}
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f8f8f8",
    },
    header: {
        fontSize: "1.4rem",
        margin: "1rem 0",
        color: "#333",
        textTransform: "uppercase",
    },
    heading: {
        color: "green",
        fontSize: "2rem",
    },
    counterValue: {
        fontSize: "3rem",
        fontWeight: "bold",
        margin: "1rem 0",
        color: "#007bff",
    },
    buttons: {
        display: "flex",
        justifyContent: "center",
    },
    button: {
        fontSize: "1rem",
        padding: "1rem",
        margin: "0.5rem",
        borderRadius: "5px",
        cursor: "pointer",
        color: "#fff",
        background: "green",
        border: "none",
        outline: "none",
        transition: "background 0.3s",
        boxShadow: "0px 0px 20px 0px grey",
    },
};

