import React from 'react'
import { connect } from 'react-redux'

function Component1(props) {
    return (
        <div style={{ padding:'4%',border: 'solid blue 2px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <h1 style={{ margin: '2%' }}>Component 1</h1>
            <div style={{ width: '20%' }}>
                <h1 style={{ margin: '2%' }}>Bat Count : {props.bat.bat}</h1>
                <h1 style={{ margin: '2%' }}>Ball Count : {props.ball.ball}</h1>
            </div>
            <button style={{ margin: '2%', height: '6%', width: '6%' }} onClick={() => { props.sell_bat() }}>Sell</button>
            <button style={{ margin: '2%', height: '6%', width: '6%' }} onClick={() => { props.buy_bat() }}>Buy</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bat: state.bat,
        ball: state.ball
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buy_bat: () => { dispatch({ type: 'BUY_BAT' }) },
        sell_bat: () => { dispatch({ type: 'SELL_BAT' }) }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component1)