import React, { useMemo, useState } from "react";

export default function StudentResult() {
    const [marks, setMarks] = useState([78, 85, 92, 88, 76]);
    const [themeCount, setThemeCount] = useState(0);
    const [marksInput, setMarksInput] = useState(0);

    const totalMarks = useMemo(() => {
        console.log("Calculating total marks");


        let totalMarks = 0;


        marks.forEach(i => totalMarks += i);
        return totalMarks;
    }, [marks]);

    const addMarks = (e) => {
        e.preventDefault();
        if (marksInput.trim() === "") return;
        const newNumber = Number(marksInput);
        if (isNaN(newNumber)) {alert("Put a number");
            return;
        }
        setMarks([...marks, Number(marksInput)])
        setMarksInput("")
    }

    return (
        <div>
            <h2>Student Result Portal</h2>

            <h3>Subject Marks</h3>

            {marks.map((mark, index) => (
                <p key={index}>
                    Subject {index + 1}: {mark}
                </p>
            ))}

            <form>
                <input
                    type="text"
                    value={marksInput}
                    onChange={(e) => setMarksInput(e.target.value)}
                /> <button onClick={addMarks}>
                    Add Marks
                </button></form>

            <h3>Total Marks: {totalMarks}</h3>

            <button
                onClick={() =>
                    setThemeCount(themeCount + 1)
                }
            >
                Change Theme
            </button>

            <h3>Theme Change Count: {themeCount}</h3>

        </div>
    );
}