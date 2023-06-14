import React,{useState} from 'react';

const Button = ({value}) => {
    const [count, setCounter ] = useState(1);

    const clickHandler = () => {
        setCounter(count * value);
    }
    return (
         <button onClick={() => clickHandler() }>Count: {count}</button>
    )
}

export default Button;
