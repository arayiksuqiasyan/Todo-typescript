import React, {useEffect} from 'react';
import {useDispatch} from "react-redux"
import {getCats} from './redux/catAction/catAction';
import Card from "./componet/Card";
import NavBar from "./componet/NavBar";


function App() {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCats())
    }, [dispatch])
    return (
        <div className="App">
            <NavBar/>
            <Card/>
        </div>
    );
}

export default App;
