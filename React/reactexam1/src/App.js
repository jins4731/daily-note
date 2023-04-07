import './App.css';

import MyHeader from './MyHeader'
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';
function App() {
  return (
    <Container>
      <div className="App">
        <MyHeader/>
        <Counter a={1} initialValue={5}/>
        <h2>안녕 리엑트</h2>
        <MyFooter/>
      </div>
    </Container> 
  );
}

export default App;
