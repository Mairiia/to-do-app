import React from 'react';
import Task from "./Task";
import {useParams} from "react-router";


const TaskList = ({tasks, setTaskCompleted}) => {
    const {usersId} = useParams();
    const filteredTasks = tasks.filter(task => task.userId === +(usersId));
    const completedPercentage = (100 / filteredTasks.length) * (filteredTasks.filter(task => task.completed === true).length);


    return (
        <div className={'TasksList'}>
            <div className={'StatBar'}>
                <div
                    className={'Completed'}
                    style={{width: `${completedPercentage}%`}}
                >
                    {completedPercentage} %
                </div>
                <div
                    className={'Uncompleted'}
                    style={{width: `${100 - completedPercentage}%`}}
                >
                </div>
            </div>
            {filteredTasks.map(task =>
                <Task
                    key={task.id}
                    title={task.title}
                    isCompleted={task.completed}
                    onChange={() => setTaskCompleted(task.id)}
                />
            )}
        </div>
    );
};

export default TaskList;