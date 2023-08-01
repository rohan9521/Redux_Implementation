import React from 'react'
import { connect } from 'react-redux'

function Component2(props) {
  return (
    <div style={{ padding:'4%', border: 'solid red 2px', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <h1 style={{ margin: '2%' }}>Component 2</h1>
      <div style={{ width: '20%' }}>
        <h1 style={{ margin: '2%' }}>Bat Count : {props.bat.bat}</h1>
        <h1 style={{ margin: '2%' }}>Ball Count : {props.ball.ball}</h1>
      </div>
      <button style={{ margin: '2%', height: '6%', width: '6%' }} onClick={() => { props.sell_ball() }}>Sell</button>
      <button style={{ margin: '2%', height: '3%', width: '6%' }} onClick={() => { props.buy_ball() }}>Buy</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ball: state.ball,
    bat: state.bat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buy_ball: () => { dispatch({ type: 'BUY_BALL' }) },
    sell_ball: () => { dispatch({ type: 'SELL_BALL' }) }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Component2)