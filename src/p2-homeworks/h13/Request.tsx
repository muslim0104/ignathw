import React, {ChangeEvent, useState} from 'react';
import {RequestAPI} from "./RequestAPI";

const Request = () => {

    const[state,setState]=useState<boolean>(true)


    function onChange(e:ChangeEvent<HTMLInputElement>) {
     RequestAPI.makeRequest(e.currentTarget.checked)
         .then(response=>{
  setState(response.data.yourBody.success)
         })
         .catch(error=>{
             console.log({...error});
             console.log(error.response ? error.response.data.errorText : error.message);
             setState(error.response.data.yourBody.success)
         })
    }
    return (
        <div>
            <span>

                <input type={"checkbox"} onChange={onChange}/>
            </span>

            <h5>{state.toString()}</h5>


        </div>
    );
};

export default Request;