import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id:1,
//     author: '이정환',
//     content: '하이1',
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
//   {
//     id:2,
//     author: '이정b환',
//     content: '하이2',
//     emotion: 3,
//     created_date: new Date().getTime()
//   },{
//     id:3,
//     author: '홍길동',
//     content: '하이3',
//     emotion: 1,
//     created_date: new Date().getTime()
//   },
//   {
//     id:4,
//     author: '이a정환',
//     content: '하이4',
//     emotion: 2,
//     created_date: new Date().getTime()
//   }

// ]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={}/>
    </div>
  );
}

export default App;
