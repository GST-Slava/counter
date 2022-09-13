import React, {FC} from 'react';
import s from './CounterButtons.module.css'
import {Button} from "@material-ui/core";
import {
    Delete,
    ExpandLess,
    GetApp,
    KeyboardArrowDown,
    LayersClear,
    PlaylistAddCheck,
    RotateLeft,
    Settings
} from "@material-ui/icons";

export type ButtonsPropsType = {
    increment: () => void
    decrement: () => void
    reset: () => void
    settings: () => void
    maxValue: number
    minValue: number
    count: number
    setToLocalStorageHandler: () => void
    getFromLocalStorageHandler: () => void
    clearLocalStorageHandler: () => void
    removeItemFromLocalStorageHandler: () => void
}

export const CounterButtons: FC<ButtonsPropsType> = (props) => {


    return (
        <div className={s.button}>
            <div>
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
            <div>
                <div>
                    <Button
                        onClick={props.setToLocalStorageHandler}
                        variant="contained"
                        size="small"
                        startIcon={<PlaylistAddCheck/>}
                    >
                        Set-----LS
                    </Button>
                    <Button
                        onClick={props.getFromLocalStorageHandler}
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<GetApp/>}
                    >
                        Get-----LS
                    </Button>
                </div>
                <div>
                    <Button
                        onClick={props.clearLocalStorageHandler}
                        variant="contained"
                        size="small"
                        color={"secondary"}
                        startIcon={<LayersClear/>}
                    >
                        Clear LS
                    </Button>
                    <Button
                        onClick={props.removeItemFromLocalStorageHandler}
                        variant="contained"
                        size="small"
                        color={"secondary"}
                        startIcon={<Delete/>}
                    >
                        Del Item +1
                    </Button>
                </div>
            </div>
        </div>
    );
};