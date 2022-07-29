import React from 'react'
import Header from './Header'
import RoutesHW5 from './RoutesHW5'
import {BrowserRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <BrowserRouter>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <Header/>

            <RoutesHW5/>

            {/*</HashRouter>*/}
            </BrowserRouter>
        </div>
    )
}

export default HW5
