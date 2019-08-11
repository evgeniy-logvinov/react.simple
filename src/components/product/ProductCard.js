import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProductPage from './ProductPage';
import { Link, Route } from "react-router-dom";
import { withRouter } from 'react-router';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        borderColor: 'red',
        borderSize: '1px',
    },
    media: {
        height: 140,
    },
});

const ProductCard = (props) => {
    console.log('props', props)
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.item.img}
                    title={props.item.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.item.author}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" variant="contained" color="secondary">
                    Buy
                </Button>
                <Button size="small" color="primary" component={Link} to={`${props.match.url}/${props.item.id}`}>
                    Share
                </Button>

                {/* <Button size="small" color="primary">
                    Learn More
                </Button> */}
            </CardActions>
            <Route path={`${props.match.url}/:productId`} component={ProductPage} />
        </Card>
    );
}

export default withRouter(ProductCard);
