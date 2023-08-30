import React, { useState } from 'react';
import './AddGoal.css'; // Import your CSS file for styling

export const AddGoal = () => {
    const [goal, setGoal] = useState('');
    const [goalList, setGoalList] = useState([]);

    const goalHandler = (event) => {
        setGoal(event.target.value);
    };

    const addGoalHandler = (event) => {
        event.preventDefault();
        if (goal === '') {
            alert('Please enter a goal first');
        } else {
            setGoalList((prevList) => [...prevList, goal]);
            setGoal('');
        }
    };

    const removeHandler = (index) => {
        const updatedList = goalList.filter((item, i) => i !== index);
        setGoalList(updatedList);
    };

    const removeAll = () => {
        setGoalList([]);
    };

    return (
        <div className="todo-app">
            <div className="todo-container">
                <h1>To Do List</h1>
                <form>
                    <input type="text" value={goal} onChange={goalHandler} />
                    <button type="submit" onClick={addGoalHandler} className="add-button">
                        Add Goal
                    </button>
                </form>
                {goalList.length === 0 ? (
                    <h4>Empty array</h4>
                ) : (
                    <div className="goal-list">
                        {goalList.map((data, index) => (
                            <div key={index} className="goal-item">
                                <span>{data}</span>
                                <button onClick={() => removeHandler(index)} className="remove-button">
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                {goalList.length >= 1 && (
                    <button onClick={removeAll} className="remove-all-button">
                        Remove All Goals
                    </button>
                )}
            </div>
        </div>
    );
};
