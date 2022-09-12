import React, {FC} from 'react';
import s from './CounterButtons.module.css'
import {Button} from "@material-ui/core";
import {ExpandLess, KeyboardArrowDown, RotateLeft} from "@material-ui/icons";

export type ButtonsPropsType = {
    increment: () => void
    decrement: () => void
    reset: () => void
    maxValue: number
    minValue: number
    count: number
}

export const CounterButtons: FC<ButtonsPropsType> = (props) => {


    return (
        <div className={s.button}>
            <Button disabled={props.count === props.maxValue}
                    onClick={props.increment}
                    variant="contained"
                    color={props.count === props.maxValue ? "secondary" : "primary"}
                    size="large"
                    startIcon={<ExpandLess/>}
            >
                inc
            </Button>
            <Button disabled={props.count === props.minValue}
                    onClick={props.decrement}
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<KeyboardArrowDown/>}
            >
                dec
            </Button>
            <Button disabled={props.count === 0}
                    onClick={props.reset}
                    variant="contained"
                    size="large"
                    startIcon={<RotateLeft/>}
            >
                Reset
            </Button>
        </div>
    );
};