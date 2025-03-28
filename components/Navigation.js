import { NavLink } from 'react-router-dom';
import React from 'react';
import bg from './aa.jpeg'
import img from './uyt.png';

const Navigation = () => {
    return ( <
        div class = "topnav" >
        <
        img src = { img }
        className = "App-uyt"
        alt = "uyt" /
        >

        <
        button > < NavLink to = "/" > Home < i class = "fa fa-heart" > < /i></NavLink > < /button>         <
        button > < NavLink to = "/Contact" > Contact < i class = "fa fa-heart" > < /i></NavLink > < /button> < 
        button > < NavLink to = "/About" > Appointments < i class = "fa fa-heart" > < /i></NavLink > < /button>        <
        button > < NavLink to = "/Profile" > Profile < i class = "fa fa-heart" > < /i></NavLink > < /button>    <   
        button > < NavLink to = "/Reviews" > Reviews < i class = "fa fa-heart" > < /i></NavLink > < /button> 

        <
        div class = "login-container" >


        <
        button type = "submit" > < a href = "/signup" > Sign up < /a>< /button >
        <
        button type = "submit" > < a href = "/login" > Login < /a></button >


        <
        /div> 

        <
        /div>



    );
}

export default Navigation;