const DiaryItem = ({it}) => {
    return (
        <div className="DiaryItem">
            <div key={it.id}>
                <div>작성자: {it.author}</div>
                <div>일기: {it.content}</div>
                <div>감정: {it.emotion}</div>
                <div>작성 시간(ms): {it.created_date}</div>
            </div>
        </div>
    )
    
}

export default DiaryItem;