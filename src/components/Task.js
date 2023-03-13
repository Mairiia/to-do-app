import React from 'react';
import './Task.css'

const Task = (props) => {
    const capitalisedTask = props.title[0].toUpperCase() + props.title.slice(1).toLowerCase();

    return (
        <>
            {props.isCompleted
                ?
                <div className={'Task'}>
                    <span className="material-symbols-outlined"> check </span>
                    <p>{capitalisedTask}</p>
                </div>
                :
                <div className={'Task'}>
                    <input
                        type="checkbox"
                        checked={props.isCompleted}
                        onChange={() => props.onChange(props.id)}
                    />
                    <label htmlFor="">{capitalisedTask}</label>
                </div>
            }

        </>
    )
};

export default Task;