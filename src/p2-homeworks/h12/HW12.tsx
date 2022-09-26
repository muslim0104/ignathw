import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";

import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC, StateType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";



const themes = ['dark', 'red', 'some', "pink"];

function HW12() {
    const theme = useSelector<AppStoreType,StateType>(state => state.theme)

    // useDispatch,
    //
    //
    function onChangeCallback(e: ChangeEvent<HTMLSelectElement> ) {
        dispatch(changeThemeC(e.currentTarget.value))
        console.log(e.currentTarget.value)
    }


        let dispatch = useDispatch()

        let mapThemes = themes.map(t => {

            return t


        })
        return (
            <div className={s[theme.theme]}>
                <hr/>
                <span className={s[theme.theme + '-text']}>
                homeworks 12
                    <SuperSelect options={mapThemes} onChange={onChangeCallback}/>




            </span>


                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}

                <hr/>
            </div>
        );
    }

export default HW12;
