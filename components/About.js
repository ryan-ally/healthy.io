import Quote from './Quote.js';
import QuoteAndAuthor from './QuoteAndAuthor.js';
import QuotesDatabase from './QuotesDatabase.js';
import React from 'react';
import bg from './lol.png';
import img from './uuu.jpeg';

const About = () => {
    return ( <
        body >

        <
        h1 > Doctors < / h1 >   <
        img src = { img }
        className = "App-uuu"
        alt = "uuu" / > <
        img src = { bg }
        className = "App-lol"
        alt = "lol" / >



        <
        button className = "form-input-btn"
        type = "submit"
        color = "ghostwhite" > Sign up < /button> <
        Quote / >


        <
        /body> 

    );
}

export default About;