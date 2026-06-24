import { useDispatch } from "react-redux";
import { setFilter } from "./ticketsSlice";

export default function FilterPanel() {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => dispatch(setFilter("All"))}
            > All
            </button>

            <button
                onClick={() => dispatch(setFilter("Open"))}
            >
                Open
            </button>

            <button
                onClick={() => dispatch(setFilter("In Progress"))}
            > In Progress
            </button>

            <button
                onClick={() => dispatch(setFilter("Resolved"))}>
                Resolved
            </button>
        </div>
    );
}