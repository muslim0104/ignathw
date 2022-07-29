import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'

import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    HW_1: "/HW1",
    HW_2: "/HW2",
    HW_3:"/HW3",
    HW_4:"/HW4"
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
                // add routes

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

</Routes>
        </div>
    )
}

export default Pages
