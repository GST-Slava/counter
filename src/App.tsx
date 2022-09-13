import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [count, setCount] = useState<number>(0)
    const minValue = 0;
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (minValue === count) {
        }
        setCount(count - 1)
    }
    const reset = () => setCount(0)
    const settings = () => {
        //
    }

    useEffect(() => {
       localStorage.setItem("counterValue", JSON.stringify(count))
    }, [count])//так как есть зависимость, отработает столько раз сколько раз изменится зависимость


    useEffect(() => {
        let countAsString = localStorage.getItem("counterValue")
        if (countAsString) {
            let newValueCount = JSON.parse(countAsString)
            setCount(newValueCount)
        }
    }, [])//передав пустой массив huk отработает только 1 раз для получения данных из localStorage


    /*const setToLocalStorageHandler = () => {
        localStorage.setItem("counterValue", JSON.stringify(count))
        localStorage.setItem("counterValue +1", JSON.stringify(count + 1))
    }*/
    /*const getFromLocalStorageHandler = () => {
        let countAsString = localStorage.getItem("counterValue")
        if (countAsString) {
            let newValueCount = JSON.parse(countAsString)
            setCount(newValueCount)
        }
    }*/
    /*const clearLocalStorageHandler = () => {
        localStorage.clear()
    }
    const removeItemFromLocalStorageHandler = () => {
        localStorage.removeItem("counterValue +1")
    }*/
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
                    /*getFromLocalStorageHandler={getFromLocalStorageHandler}
                    setToLocalStorageHandler={setToLocalStorageHandler}
                    clearLocalStorageHandler={clearLocalStorageHandler}
                    removeItemFromLocalStorageHandler={removeItemFromLocalStorageHandler}*/
                />
            </header>
        </div>
    );
}

export default App;
