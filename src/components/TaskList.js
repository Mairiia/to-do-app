import React from 'react';
import Task from "./Task";


const TaskList = ({tasks, taskId, setCheckBox}) => {
    const filteredTasks = tasks.filter(task => task.userId === taskId);
    const completedPercentage = (100 / filteredTasks.length) * (filteredTasks.filter(task => task.completed === true).length);


    return (
        <div className={'TasksList'}>
            <div className={'StatBar'}>
                <div
                    className={'Completed'}
                    style={{width: `${completedPercentage}%`}}>
                    {completedPercentage} %
                </div>
                <div
                    className={'Uncompleted'}
                    style={{width: `${100 - completedPercentage}%`}}>
                </div>
            </div>
            {filteredTasks.map(task =>
                <Task
                    key={task.id}
                    title={task.title}
                    isCompleted={task.completed}
                    onChange={() => setCheckBox(task.id)}
                />
            )}
        </div>
    );
};

export default TaskList;