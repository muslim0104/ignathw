import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, StateType} from "./bll/loadingReducer";
type LoadingType={
    isLoading:boolean
}
function HW10() {

let isLoading=useSelector<AppStoreType,StateType>(state =>state.loading)
   let dispatch= useDispatch()


    const loading = false

    const setLoading = () => {

        dispatch(loadingAC(!isLoading.isLoading))
      setTimeout(()=>{
         dispatch(loadingAC(isLoading.isLoading))
      },2000)

    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading.isLoading
                ? (
                    <div>загрузка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
