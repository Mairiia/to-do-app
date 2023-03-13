import './App.css';
import axios from "axios";
import UsersList from "./components/UsersList";
import TaskList from "./components/TaskList";
import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";


const getData = (setState, link) => {
    axios.get(`https://jsonplaceholder.typicode.com/${link}`)
        .then(function (response) {
            setState(response.data);
        })
        .catch(function (error) {
        })
};


function App() {
    const [usersData, setUsersData] = useState([]);
    const [tasksData, setTasksData] = useState([]);


    useEffect(() => getData(setTasksData, 'todos'), []);

    useEffect(() => getData(setUsersData, 'users'), []);


    //???
    // const setTaskCompleted = async (taskId) => {
    //     const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {});
    //     if (response) {
    //         setTasksData(
    //             tasksData.map(task => {
    //                 if (task.id === taskId) {
    //                     return {
    //                         ...task,
    //                         completed: true
    //                     };
    //                 }
    //                 return task;
    //             })
    //         )
    //     }
    // };


    const setTaskCompleted = (taskId) => {
        setTasksData(
            tasksData.map(task => {
                if (task.id === taskId) {
                    return {
                        ...task,
                        completed: true
                    };
                }
                return task;
            })
        );
    };


    return (
        <div className="App">

            <div className={'Container'}>
                <div className={'UsersModule'}>
                    <UsersList users={usersData}/>
                </div>
                <div className={'TasksModule'}>
                    <TaskList tasks={tasksData} setTaskCompleted={setTaskCompleted}>
                        <Outlet/>
                    </TaskList>
                </div>
            </div>

        </div>
    );
}

export default App;
