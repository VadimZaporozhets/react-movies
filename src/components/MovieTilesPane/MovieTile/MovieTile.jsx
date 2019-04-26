import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/index';
import Card from '@material-ui/core/Card/index';
import CardContent from '@material-ui/core/CardContent/index';
import CardMedia from '@material-ui/core/CardMedia/index';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { string, arrayOf, object, number } from 'prop-types';

import { emptyImageUrl } from '../../../constants';
import { MovieTileStyles as styles } from './MovieTileStyles';

export class MovieTileComponent extends Component {
    renderGenres = () => {
        const { classes, genres } = this.props;
        return (
            genres &&
            genres.map(genre => (
                <Typography
                    key={genre}
                    variant="button"
                    inline
                    className={classes.marginRight}
                >
                    {genre}
                </Typography>
            ))
        );
    };

    render() {
        const {
            poster_path,
            title,
            releaseYear,
            classes,
            id,
            vote_average
        } = this.props;

        return (
            <Grid item sm={6} md={4} lg={3}>
                <Link className={classes.link} to={`/details/${id}`}>
                    <Card className="movie-tile">
                        <CardMedia
                            className={classes.media}
                            image={poster_path || emptyImageUrl}
                            title={title}
                        />
                        <CardContent>
                            <Grid container spacing={24}>
                                <Grid xs={9} item>
                                    <Typography variant="h5">
                                        {title}
                                    </Typography>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    justify="flex-end"
                                    xs={3}
                                    item
                                >
                                    <Typography className="release">
                                        {releaseYear}
                                    </Typography>
                                    <Typography>
                                        {vote_average > 0 &&
                                            `Rating ${vote_average}`}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderGenres()}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Link>
            </Grid>
        );
    }
}

MovieTileComponent.propTypes = {
    poster_path: string,
    title: string.isRequired,
    releaseYear: string,
    genres: arrayOf(string),
    classes: object.isRequired,
    id: number.isRequired,
    vote_average: number.isRequired
};

export const MovieTile = withStyles(styles)(MovieTileComponent);
