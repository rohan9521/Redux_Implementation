const initialState = {
    ball: 40
}
const BallReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_BALL':
            return { ...state, ball: state.ball + 1 }
        case 'SELL_BALL':
            return { ...state, ball: state.ball - 1 }
        default :
            return state
    }
}


export default BallReducer;