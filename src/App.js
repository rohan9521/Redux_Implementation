import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import { Provider } from 'react-redux';
import GlobalStore from './redux/store/GlobalStore';

function App() {
  return (
   <Provider store={GlobalStore}>
     <Component1/> 
    <Component2/>
   </Provider>
  );
}

export default App;
