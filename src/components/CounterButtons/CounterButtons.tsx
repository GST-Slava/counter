import React, {FC} from 'react';
import s from './CounterButtons.module.css'
import {Button} from "@material-ui/core";
import {ExpandLess, KeyboardArrowDown, RotateLeft, Settings} from "@material-ui/icons";

export type ButtonsPropsType = {
    increment: () => void
    decrement: () => void
    reset: () => void
    settings: () => void
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
                    size="small"
                    startIcon={<ExpandLess/>}
            >
                inc
            </Button>
            <Button disabled={props.count === props.minValue}
                    onClick={props.decrement}
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<KeyboardArrowDown/>}
            >
                dec
            </Button>
            <Button disabled={props.count === 0}
                    onClick={props.reset}
                    variant="contained"
                    size="small"
                    startIcon={<RotateLeft/>}
            >
                Reset
            </Button>
            <Button onClick={props.settings}
                    variant="contained"
                    size="small"
                    startIcon={<Settings/>}
            >
                Settings
            </Button>
        </div>
    );
};