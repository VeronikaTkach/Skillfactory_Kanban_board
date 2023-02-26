import css from './card.module.scss'
import {useTasks} from "../../../../hooks/tasks/use-tasks";
import {useNavigate} from "react-router-dom";
import {Button} from "../../../shared/buttons/button/button";
import {IconRemove} from "../../../shared/icons/icon-remove";

export const Card = (props) => {

    const navigate = useNavigate();

    return (
        <div className={css.card} onClick={() => navigate(`/tasks/${props.id}`)}>
            <span>{props.name}</span>
            <Button className={css['button-remove']} onClick={
                (e) =>
                {
                    props.onRemove(props.id)
                    e.stopPropagation();
                }}>
                <IconRemove/>
            </Button>
        </div>
    )
}
