import { useRef, useState } from 'react';
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
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  }

  const onRemove = (targetId) => {
    console.log(`${targetId} 가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
