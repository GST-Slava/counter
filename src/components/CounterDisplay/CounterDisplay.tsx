import React, {FC} from 'react';
import s from './CounterDisplay.module.css'

export type CounterDisplayPropsType = {
    count: number
    maxValue: number
}

export const CounterDisplay: FC<CounterDisplayPropsType> = (props) => {
    const displayErrorRed = props.count ===  props.maxValue ? s.displayError : s.display

    return (
        <div className={s.displayExternal}>
            <div className={displayErrorRed}>
                {props.count }
            </div>
        </div>

    );
};