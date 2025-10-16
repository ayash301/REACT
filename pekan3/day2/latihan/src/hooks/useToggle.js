import { useState } from "react";

export function useToggle(initial = false) {
    const [state,setState] = useState(initial)

    const toggle = () => setState(prev => !prev)
    const setOn = () => setState(true)
    const setOff = () => setState(false)

return {state, toggle, setOn, setOff}
}