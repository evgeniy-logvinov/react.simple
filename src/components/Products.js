import React from "react";
import { Route, Link } from "react-router-dom";
import ProductCard from './ProductCard';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import tileData from '../tileData';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flex: 1,
    },
    gridItem: {
        width: 180,
        maxWidth: 345,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function Products() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Products</ListSubheader>
                </GridListTile>
                {tileData.map(tile => (
                    <GridListTile key={tile.id} className={classes.gridItem} style={{ height: 'auto' }}>
                        <ProductCard item={tile}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};