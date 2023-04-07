const DiaryItem = ({it}) => {
    return (
        <div className="DiaryItem">
            <div className="info">
                <span>
                    작성자 : {it.author} | 감정점수 : {it.emotion}
                </span>
                <br/>
                <span className="date">
                    {new Date(it.created_date).toLocaleString()}
                </span>
            </div>
            <div className="content">

            </div>
        </div>
    )
    
}

export default DiaryItem;