import React, {FC} from 'react';
import s from './CounterDisplay.module.css'

export type CounterDisplayPropsType = {
    count: number
}

export const CounterDisplay: FC<CounterDisplayPropsType> = (props) => {
    return (
        <div className={s.display}>
            {props.count}
        </div>
    );
};