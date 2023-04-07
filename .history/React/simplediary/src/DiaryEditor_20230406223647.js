import { useState } from "react";

const DiaryEditor = () => {
    const [author, setAuthor] = useState("이정환");

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input 
                    name="author"
                    value={author} 
                    onChange={
                        (e)=>{
                            console.log(e.target.value);
                            console.log(e.target.name);
                            setAuthor(e.target.value);
                        }
                    }/>
            </div>
        </div>
    )
}

export default DiaryEditor;