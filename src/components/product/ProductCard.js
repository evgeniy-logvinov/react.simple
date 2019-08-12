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

const ProductCard = ({ item, match }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.logoImage}
                    title={item.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" variant="contained" color="secondary">
                    Buy
                </Button>
                <Button size="small" color="primary" component={Link} to={`${match.url}/${item.id}`}>
                    Learn More
                </Button>
                {/* <Button size="small" color="primary" component={Link} to={`${match.url}/${item.id}`}>
                    Share
                </Button> */}

                {/* <Button size="small" color="primary">
                    Learn More
                </Button> */}
            </CardActions>
            <Route path={`${match.url}/:productId`} component={ProductPage} />
        </Card>
    );
}

export default withRouter(ProductCard);
