import React, {useState} from 'react'
import {Slider} from "@mui/material";
import {on} from "cluster";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number], e: any) => void
    value: [number, number]
    // min, max, step, disable, ...
    min: (e: any) => void

}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
        min
    }
) => {
    // сделать самому, можно подключать библиотеки


    return (
        <>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                valueLabelDisplay="auto"
                onChange={(e) => onChangeRange ? onChangeRange([0, 100], e) : {}}
                disableSwap


            />
        </>
    )
}

export default SuperDoubleRange
