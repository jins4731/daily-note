import { useState } from "react";

const DiaryItem = ({id, author, emotion, created_date, content, onRemove}) => {
    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => {setIsEdit(!isEdit)};

    const handleRemove = () => {
        if(window.confirm(`${id} 번째 일기를 정말 삭제하시겠습니까?`)){
            onRemove(id);
        }
    }

    return (
        <div className="DiaryItem">
            <div className="info">
                <span>
                    작성자 : {author} | 감정점수 : {emotion}
                </span>
                <br/>
                <span className="date">
                    {new Date(created_date).toLocaleString()}
                </span>
            </div>
            <div className="content">
                {isEdit ? <><textarea/></> : <>{content}</>}
            </div>
            <button onClick={handleRemove}>삭제하기</button>
            <button onClick={toggleIsEdit}>수정하기</button>
        </div>
    )
    
}

export default DiaryItem;