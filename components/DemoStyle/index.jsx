import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import cyan from '@material-ui/core/colors/cyan';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: cyan[300],
            main: cyan[500],
            dark: cyan[700],
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[700],
        },
    },
    typography: {
        useNextVariants: true,
    },
});

function DemoStyle(Component) {
    function DemoStyle(props) {
        return ( <
            MuiThemeProvider theme = { theme } >
            <
            CssBaseline / >
            <
            Component {...props }
            /> <
            /MuiThemeProvider>
        );
    }
    return DemoStyle;
}

export default DemoStyle;