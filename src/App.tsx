import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
    const settings = () => {
        setCount(maxValue)
    }

    const [maxValue, setMaxValue] = useState(5)

    /*const maxValue = 5;*/
    const minValue = 0;

    const [count, setCount] = useState(0)
    const increment = () => {
        if (maxValue === count) {
        }
        setCount(count + 1)
    }

    const decrement = () => {
        if (minValue === count) {
        }
        setCount(count - 1)
    }
    const reset = () => setCount(0)

    return (
        <div className="App">
            <header className="App-header">
                <Counter
                    count={count}
                    increment={increment}
                    decrement={decrement}
                    maxValue={maxValue}
                    reset={reset}
                    minValue={minValue}
                    settings={settings}
                />
            </header>
        </div>
    );
}

export default App;
