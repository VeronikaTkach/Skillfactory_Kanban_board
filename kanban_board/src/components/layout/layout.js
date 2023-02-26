import css from './layout.module.scss'
import {LayoutProvider} from "../../hooks/layout/layout-provider";
import {TaskProvider} from "../../hooks/tasks/task-provider";
export const Layout = (props) => {
    return (
        <TaskProvider>
            <LayoutProvider>
                <div className={css.layout}>{props.children}</div>
            </LayoutProvider>
        </TaskProvider>
    )
}
