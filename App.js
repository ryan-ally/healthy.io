import './App.css';
import './super.css';
import './typography.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import About from './components/About';
import AddCommentIcon from '@material-ui/icons/AddComment';
import BorderClearIcon from '@material-ui/icons/BorderClear';
import Contact from './components/Contact';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DateTimePickersDemo from './components/DateTimePickersDemo';
import Error from './components/Error';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Footer from './components/Footer.js';
import GridListDemo from './components/GridListDemo'
import Home from './components/Home';
import HomeIcon from '@material-ui/icons/Home';
import ModalDemo from './components/ModalDemo';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews';
import TabsDemo from './components/TabsDemo';
import login from './components/login';
import png from './tw.png';
import signup from './components/signup';

class App extends Component {
    render() {
        return ( <
            div className = "App" >
            <
            BrowserRouter >
            <
            Navigation / >



            <
            Switch >
            <
            Route path = "/About"
            component = { About }
            /> <
            Route path = "/Contact"
            component = { Contact }
            /> <
            Route path = "/Profile"
            component = { Profile }
            /> <
            Route path = "/Reviews"
            component = { Reviews }
            /> <
            Route path = "/signup"
            component = { signup }
            /><
            Route path = "/login"
            component = { login }
            /><
            Route path = "/"
            component = { Home }
            /> <
            TabsDemo tabs = { tabs }
            /> <
            Route component = { Error }
            /> < /
            Switch > <
            TabsDemo tabs = { tabs }
            />




            <
            /BrowserRouter>


            <
            /
            div >

        );
    }
}

export default App;

const tabs = [{
        id: 1,
        label: 'Home',
        component: < TabsDemo tabs = {
            [{
                    id: 2,
                    label: 'Modal',
                    component: < ModalDemo / > ,
                    icon: < AddCommentIcon / >
                },
                {
                    id: 3,
                    label: 'GridList',
                    component: < GridListDemo / > ,
                    icon: < BorderClearIcon / >
                },
            ]
        }
        />,
        icon: < HomeIcon / >
    },
    {
        id: 2,
        label: 'Modal',
        component: < ModalDemo / > ,
        icon: < AddCommentIcon / >
    },
    {
        id: 3,
        label: 'GridList',
        component: < GridListDemo / > ,
        icon: < BorderClearIcon / >
    },
    {
        id: 4,
        label: 'Set appointment Date & Time ',
        component: < DateTimePickersDemo / > ,
        icon: < DateRangeIcon / >
    },
]