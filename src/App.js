import './App.css';
import axios from "axios";
import UsersList from "./components/UsersList";
import TaskList from "./components/TaskList";
import {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";

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
    const [taskId, setTaskId] = useState(1);
    // const navigate = useNavigate();


    useEffect(() => getData(setTasksData, 'todos'), []);
    // console.log(tasksData);

    useEffect(() => getData(setUsersData, 'users'), []);
    // console.log(usersData);

    const displayTasks = (user) => {
        setTaskId(user.id);
    };

    //???
    // useEffect(() => {
    //     navigate(`/`);
    // }, []);

    //???
    // const setCheckBox = async (taskId) => {
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
    //
    // };


    const setCheckBox = (taskId) => {
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
                    <UsersList
                        users={usersData}
                        change={displayTasks}
                        taskId={taskId}
                    />
                </div>
                <div className={'TasksModule'}>
                    <TaskList
                        tasks={tasksData}
                        taskId={taskId}
                        setCheckBox={setCheckBox}
                    >
                        <Outlet context={[taskId, setTaskId]}/>
                    </TaskList>
                </div>
            </div>

        </div>
    );
}

export default App;
