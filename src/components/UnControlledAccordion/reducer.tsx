const TOGGLE_ACCORDION = "TOGGLE_ACCORDION"

type ActionsType = ReturnType<typeof toogleAccordionAC>

export const toogleAccordionAC = () => ({type: TOGGLE_ACCORDION}) as const

export const reducer = (state: boolean, action: ActionsType) => {
    switch (action.type) {
        case TOGGLE_ACCORDION: {
            return !state
        }
        default:
            return state
    }
}