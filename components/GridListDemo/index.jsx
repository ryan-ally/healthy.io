import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ListSubheader from '@material-ui/core/ListSubheader';
import PropTypes from 'prop-types';
import React from 'react';
import four from './img/pop.jpeg';
import one from './img/tod.jpeg';
import three from './img/uta.jpeg';
import two from './img/git.jpeg';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 500,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});



const tileData = [{
        img: one,
        title: 'Test1',
        author: 'Data for test1',
    },
    {
        img: two,
        title: 'Test2',
        author: 'Data for test2',
    },
    {
        img: three,
        title: 'Test3',
        author: 'Data for test3',
    },
    {
        img: four,
        title: 'Test4',
        author: 'Data for test4',
    },
];

function GridListDemo(props) {
    const { classes } = props;

    return ( <
        div className = { classes.root } >
        <
        GridList cellHeight = { 200 }
        cellWidth = { 200 }
        className = { classes.gridList } >
        <
        GridListTile key = "Subheader"
        cols = { 2 }
        style = {
            { height: 'auto' }
        } >
        <
        ListSubheader component = "div" > Image gridlist < /ListSubheader> < /
        GridListTile > {
            tileData.map(tile => ( <
                    GridListTile key = { tile.img } >
                    <
                    img src = { tile.img }
                    alt = { tile.title }
                    /> <
                    GridListTileBar title = { tile.title }
                    subtitle = { < span > by: { tile.author } < /span>}
                        actionIcon = { <
                            IconButton className = { classes.icon } >
                            <
                            InfoIcon / >
                            <
                            /IconButton>
                        }
                        /> < /
                        GridListTile >
                    ))
            } <
            /GridList> < /
            div >
        );
    }

    GridListDemo.propTypes = {
        classes: PropTypes.object.isRequired,
    };

    export default withStyles(styles)(GridListDemo);