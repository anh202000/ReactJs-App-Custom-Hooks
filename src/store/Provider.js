import { useReducer } from "react";
import reducer, { initState } from "./reducer";
import { StoreContext } from ".";

function Provider(props) {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default Provider