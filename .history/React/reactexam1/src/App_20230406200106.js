import './App.css';

import MyHeader from './MyHeader'
import MyFooter from './MyFooter';
import Counter from './Counter';
function App() {
  return (
    <div className="App">
      <MyHeader/>
      <Counter initialValue={5}/>
      <h2>안녕 리엑트</h2>
      <MyFooter/>
    </div>
  );
}

export default App;
