import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import img from './try.jpeg';
export default function App() {
    return ( < div > <
        div id = "ball" >

        <
        img src = { img }
        className = "App-try"
        alt = "try" / >
        <
        /div><
        div >




        <
        Typography > Styled slider powered by styled - components < /Typography>    <Slider defaultValue={30}
        color = "primary" / >


        <
        Slider defaultValue = { 30 }
        color = "secondary" / >


        <
        Slider defaultValue = { 30 }
        disabled / >


        <
        Slider defaultValue = { 30 }
        valueLabelDisplay = "auto"
        step = { 10 }
        marks min = { 10 }
        max = { 110 }
        /> < /
        div > < / div>


    );
}