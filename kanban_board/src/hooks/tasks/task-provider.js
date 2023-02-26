import {TaskContext} from "./task-context";
import {useEffect, useState} from "react";

/*

State
{
 id: number,
 name: string,
 state: string
}

{

Task
{
    id: number,
    name: string,
    description: string | undefined
    state: string => state.state
}

 */

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [idCounter, setIdCounter] = useState(0);

    const [states] = useState([
        {id: 1, name: 'backlog', state: 'backlog'},
        {id: 2, name: 'ready', state: 'ready'},
        {id: 3, name: 'in progress', state: 'inProgress'},
        {id: 4, name: 'finished', state: 'finished'}
    ]);

    const findById = (id) => tasks.find((task) => task.id === parseInt(id));


    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    }, [tasks, isLoaded])

    useEffect(() => {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            setTasks(JSON.parse(tasks))
        }
        setIsLoaded(true);
    }, [])

    const context = {
        states,
        addTask: (name) => {
            const id = idCounter + 1;
            const task = {
                id,
                name,
                state: 'backlog'
            }

            setIdCounter(id);
            setTasks([...tasks, task])
        },
        updateTask: (item) => {
            const task = findById(item.id);
            task.name = item.name;
            task.description = item.description;
            setTasks([...tasks])
        },
        removeTask: (id) => {
            const task = findById(id);
            if (task) {
                setTasks([...tasks.filter(item => item.id !== task.id)])
            }
        },
        getTaskById: findById,
        getTasksByState: (state) => {
            return tasks.filter(task => task.state === state);
        },
        getTasksByExcludedState: (state) => {
            return tasks.filter(task => task.state !== state);
        },
        moveTask: (id, state) => {
            const task = findById(id);
            if (task) {
                task.state = state;
            }
            setTasks([...tasks]);
        },
        getActiveTaskCount: () =>
            tasks.filter(task => task.state === 'ready' || task.state === 'inProgress').length,
        getFinishedTaskCount: () =>
            tasks.filter(task => task.state === 'finished').length,
    }

    return <TaskContext.Provider value={context}>{isLoaded && props.children}</TaskContext.Provider>
}
