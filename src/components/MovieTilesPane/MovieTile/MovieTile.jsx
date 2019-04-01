import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/index';
import Card from '@material-ui/core/Card/index';
import CardContent from '@material-ui/core/CardContent/index';
import CardMedia from '@material-ui/core/CardMedia/index';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { string, arrayOf, object } from '../../../propTypes';
import { emptyImageUrl } from '../../../data/Movies/mockData';
import { MovieTileStyles as styles } from './MovieTileStyles';

const MovieTileComponent = ({
    imageSrc,
    title,
    releaseYear,
    genres,
    classes
}) => (
    <Grid item sm={6} md={4} lg={3}>
        <Link className={classes.link} to={'/details'}>
            <Card>
                <CardMedia
                    className={classes.media}
                    image={imageSrc ? imageSrc : emptyImageUrl}
                    title={title}
                />
                <CardContent>
                    <Grid container spacing={24}>
                        <Grid xs={9} item>
                            <Typography variant="h5">{title}</Typography>
                        </Grid>
                        <Grid
                            container
                            alignItems="center"
                            justify="flex-end"
                            xs={3}
                            item
                        >
                            <Typography>{releaseYear}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {genres &&
                                genres.map(genre => (
                                    <Typography
                                        key={genre}
                                        variant="button"
                                        inline
                                        className={classes.marginRight}
                                    >
                                        {genre}
                                    </Typography>
                                ))}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Link>
    </Grid>
);

MovieTileComponent.propTypes = {
    imageSrc: string,
    title: string.isRequired,
    releaseYear: string,
    genres: arrayOf(string),
    classes: object.isRequired
};

export const MovieTile = withStyles(styles)(MovieTileComponent);
