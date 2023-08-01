# Redux
  ### What is Redux?
  ### What are components of Redux?
  ### What is CombineRedcucer ?
  ### Why use Redux instead of Context API?




## What is Redux?
   Redux is a state management javascript library that can be used in a web app. 
   It is Predictable - All state values defined inside redux are consitent through out the Components (functional or class based) wherever                           they these states are used. So their behaviour and values are predictable throughout the application.
   It is Centralized - All the states are defined at one place and they are modified at one centeralized place only.
   It is Debuggable - Since its predictable, this makes redux easy to debug.
   
   It provides a container or a store for taking care of states. There can be one or more states available inside the store. Moreover no   
   state know about the other state how they will change or what action will trigger the change. We can make our own action and define the 
   behaviour of the state when those actions are dispatched.
   They are very useful in web apps for large sizes. Although context api can also be used but Redux is more suitable for large 
   applications.
   We will discuss about that in later part of the discussion.

## What are components of Redux ?

  * Reducers - These are the state that are defined inside the store. They can have action and initial value also.

                 ....
                  const initialState = {
                      product: 10
                  }
                  const ProductReducer = (state = initialState)=>{
                        return state
                  }

                ....
    This is a reducer with a state which has initial value 10. But this reducer alone will not work. We need to put it in a                    Store.
    
* Store -  This is the place where all the reducers gets stored , the value of the state is read from here and modified from here.
           Creating a store

           ...
             import { legacy_createStore as createStore  } from 'redux'; // createStore is deprecated so we need to use legacy_createStore.
              import { composeWithDevTools} from 'redux-devtools-extension' // extension for monitoring states in redux
              const store = createStore(productReducer,composeWithDevTools()) 
            ...
 * Actions - These are the values which define the behaviour of a state or how the state will be modified when the action gets dispatched.

             ...
               const initialState = {
                      product: 10
                  }
                  const ProductReducer = (state = initialState,action)=>{
                       switch(action.type){
                           case 'INC' :
                           return {...state, product: product+1}
                           case 'DEC' :
                           return {...state, product: product-1}
                           default:               
                          return state
                     }
                  }

   
             ...

Now lets see how we dispatch an action 

    ...
       functiona Component() {
              return (
                <div >
                   
                    <div>
                        <h1 >Product : {props.product}</h1>
                    </div>
                    <button  onClick={() => { props.inc() }}>Inc </button>
                    <button  onClick={() => { props.dec() }}>Dec</button>
                </div>
            )
       
           }

           const mapStateToProps = (state)=>{ 
                 // we get state here (as parameter) from the store and this function returns a json object to the props.
                 // inside our functional component we use access this object as props.product.
               return {
                   product : state.product
                  }
           }

           const mapDispatchToProps = (dispatch) =>{
               // we get dispatch as a paramenter value we can use dispatch to send actions to modify state.
               // make sure the action you specify here has some meaning defined inside the reducer.
                 return {
                     inc : ()=>{ dispatch( { type: 'INC'} )}
                     dec : ()=>{ dispatch( { type: 'DEC'} )}
                 }
           }
            // connecting both states and dispatch to functional component.
           export default connect(mapStateToProps,mapDispatchToProps)(Component) 
    ...



  ### What are combine Reducers?
   The above implementation works when there is only one reducer what if there are more than one reducer then we cant just put a all the 
   reducers as arguments in create store function the createStore is not defined like that, it can have only one reducer as an argument .
   So in order to solve this problem we need to make a reducer which have all the reducers in it.

         ...
         import { combineReducers } from "redux";
        import Product from "./Reducer1";
        import Product1 from "./Reducer2";
        
        export default combineReducers({
          product : Product,
          product1 : Product1
        })
         ...
    
  Now we have to make a small change inside our components that is
          
          ...
            Instead of 
            <p> props.product</p>

            we have to get value of product as
            <p>props.product.product</p>

              because now state we are getting is
      
            {
              product: {
                    product: value
              },
              product1: {
                    product1: value1
              }

            }    
         ...


[screen-capture (1).webm](https://github.com/rohan9521/Redux_Implementation/assets/43091846/99adbe36-8a9a-4333-bbc5-290ef541c285)

### Actions with Payload

 So far we have seen that using actions we can modify the state , but the modification is not just restricted to some fixed number we can customise this at runtime using payload

             ...
             const productAction= ( type,qty) => {
                return {
                    payLoad: qty,
                    type: type
                }
                  }
              export default productAction
                         
                const ProductReducer = (state = initialState, action) => {
                switch (action.type) {
                    case 'BUY_PRODUCT':
                        return { ...state, ball: state.product + parseInt(action.payLoad) }
                    case 'SELL_PRODUCT':
                        return { ...state, ball: state.product - parseInt(action.payLoad) }
                    default :
                        return state
                }
            }

            //Component
            {
               const [qty,setQty] = useState(0)
                return (
                    <div >
                       
                     
                            <h1 >Product : {props.product.product}</h1>
                 
                        <input  type='number' value={qty} onChange={(e)=>{ setQty(e.target.value) }}/>
                        <button onClick={() => { props.sell_product(qty) }}>Sell</button>
                        <button  onClick={() => { props.buy_product(qty) }}>Buy</button>
                    </div>
                )
              }


                 const mapDispatchToProps = (dispatch) => {
                  return {
                      buy_product: (qty) => { dispatch(batAction('BUY_PRODUCT',qty))},
                      sell_product:(qty) => { dispatch(batAction('SELL_PRODUCT',qty))}
              
                  }
              }
             
             ...
[screen-capture (2).webm](https://github.com/rohan9521/Redux_Implementation/assets/43091846/2e8f158e-db57-4397-9dd9-0dc2c3da6f2b)

### Why use Redux instead of contextApi?
Context Api is more suited for small application but when the application size grows it becomes difficult to manage state and the manner in which they are modified.
But in Redux , we have a dedicated action , reducer and a store for modifying and storing the state for large application.
Basically Redux offers more organised way of managing state which is more suited for large applications.

In the end, use Redux for large applications and almost all webapps use some kind of state management library and not context api.
             
