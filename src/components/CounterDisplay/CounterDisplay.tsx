import React, {FC} from 'react';
import s from './CounterDisplay.module.css'
import {
    createStyles,
    FormControl,
    FormHelperText,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    Theme
} from "@material-ui/core";

export type CounterDisplayPropsType = {
    count: number
    maxValue: number
    minValue: number
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export const CounterDisplay: FC<CounterDisplayPropsType> = (props) => {
    const displayErrorRed = props.count === props.maxValue
        ? s.displayError
        : s.display

    const classes = useStyles();
    const [selection, setSelection] = React.useState('');


    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelection(event.target.value as string);
    };

    return (
        <>
            <div className={s.displayForm}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="simple-select-helper-label">Value</InputLabel>
                    <Select
                        color={"secondary"}
                        labelId="simple-select-helper-label"
                        id="simple-select-helper"
                        value={selection}
                        onChange={handleChange}
                    >
                        <MenuItem value="" color={"secondary"}>
                            <em>None-Any</em>
                        </MenuItem>
                        <MenuItem value={'Passengers'}>Passengers</MenuItem>
                        <MenuItem value={'Sheep'}>Sheep</MenuItem>
                        <MenuItem value={'Stars'}>Stars</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>
                    <FormHelperText>Count object</FormHelperText>
                </FormControl>
            </div>

            <div className={s.settingsInput}>
                <form className={s.textField} noValidate autoComplete="off">
                    <TextField
                        id="standard-number"
                        type="number"
                        label="MaxValue"
                        variant="outlined"
                        size={"small"}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </div>
            <div className={s.displayExternal}>
                <div className={displayErrorRed}>
                    {props.count}
                </div>
            </div>
        </>
    );
};