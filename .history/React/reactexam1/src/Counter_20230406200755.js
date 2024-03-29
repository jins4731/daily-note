import React, {useState} from 'react';
import OddEvenResult from './OddEvenResult';

const Counter = (props) => {
    console.log(props);
    const [count, setCount] = useState(props.initialValue);

    const onIncrease = () => {
        setCount(count+1);
    }
    
    const onDecrease = () => {
        setCount(count-1);
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={}/>
        </div>
    )
}

export default Counter;