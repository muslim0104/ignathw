import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'

import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";
import HW6 from "../h6/HW6";
import HW7 from "../h7/HW7";
import HW8 from "../h8/HW8";
import HW9 from "../h9/HW9";
import HW10 from "../h10/HW10";
import HW11 from "../h11/HW11";
import HW12 from "../h12/HW12";
import HW13 from "../h13/HW13";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    HW_1: "/HW1",
    HW_2: "/HW2",
    HW_3: "/HW3",
    HW_4: "/HW4",
    HW_6: "/HW6",
    HW_7: "/HW7",
    HW_8: "/HW8",
    HW_9: "/HW9",
    HW_10: "/HW10",
    HW_11:"/HW11",
    HW_12:"/HW12",
    HW_13:"/HW13"
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.HW_1} element={<HW1/>}/>
                <Route path={PATH.HW_2} element={<HW2/>}/>
                <Route path={PATH.HW_3} element={<HW3/>}/>
                <Route path={PATH.HW_4} element={<HW4/>}/>
                <Route path={PATH.HW_6} element={<HW6/>}/>
                <Route path={PATH.HW_7} element={<HW7/>}/>
                <Route path={PATH.HW_8} element={<HW8/>}/>
                <Route path={PATH.HW_9} element={<HW9/>}/>
                <Route path={PATH.HW_10} element={<HW10/>}/>
                <Route path={PATH.HW_11} element={<HW11/>}/>
                <Route path={PATH.HW_12} element={<HW12/>}/>
                <Route path={PATH.HW_13} element={<HW13/>}/>
                // add routes

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
