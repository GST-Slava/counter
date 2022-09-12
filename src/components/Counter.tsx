import React, {FC} from 'react';
import s from './Counter.module.css'
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterButtons} from "./CounterButtons/CounterButtons";

export type CounterPropsType = {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
    maxValue: number
    minValue: number
}

export const Counter: FC<CounterPropsType> = (props) => {
    return (
        <div className={s.counter}>
            <CounterDisplay count={props.count} maxValue={props.maxValue}/>
            <CounterButtons
                increment={props.increment}
                decrement={props.decrement}
                reset={props.reset}
                maxValue={props.maxValue}
                count={props.count}
                minValue={props.minValue}
            />
        </div>
    );
};

