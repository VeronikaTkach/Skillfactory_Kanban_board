import {useContext} from "react";
import {TaskContext} from "./task-context";

export const useTasks = () => useContext(TaskContext);
