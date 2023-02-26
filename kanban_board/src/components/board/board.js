import {Column} from "./column/column";
import css from './board.module.scss';
import {useTasks} from "../../hooks/tasks/use-tasks";

export const Board = () => {
    const {states} = useTasks();

    return (
        <div className={css.board}>
            {states.map(
                (state) =>
                    <Column key={state.id} name={state.name} state={state.state}/>
            )}
        </div>
    )
}
