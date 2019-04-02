import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { emptyImageUrl } from '../../constants';
import { withStyles } from '@material-ui/core/styles';
import { object, string, number, arrayOf } from 'prop-types';
import { MovieDetailsStyles as styles } from './MovieDetailsStyles';

class MovieDetailsComponent extends Component {
    renderGenres = () => {
        const { genres, classes } = this.props;
        return (
            genres &&
            genres.map(genre => {
                return (
                    <Typography
                        key={genre}
                        className={classes.genre}
                        variant="button"
                        inline
                    >
                        {genre}
                    </Typography>
                );
            })
        );
    };

    render() {
        const {
            classes,
            poster_path,
            title,
            vote_average,
            releaseYear,
            overview
        } = this.props;

        return (
            <Grid className={classes.marginBottom} container spacing={40}>
                <Grid item xs={12}>
                    <Paper elevation={1} className={classes.wrapper}>
                        <Grid container spacing={40}>
                            <Grid item xs={12} md={4}>
                                <img
                                    className={classes.image}
                                    src={poster_path || emptyImageUrl}
                                    alt={title}
                                />
                            </Grid>
                            <Grid
                                container
                                spacing={40}
                                item
                                alignContent="flex-start"
                                xs={12}
                                md={8}
                            >
                                <Grid
                                    container
                                    alignItems="center"
                                    item
                                    xs={12}
                                    md={10}
                                >
                                    <Typography variant="h4">
                                        {title}
                                    </Typography>
                                </Grid>
                                <Grid
                                    xs={12}
                                    md={2}
                                    container
                                    item
                                    alignItems="center"
                                    justify="flex-end"
                                >
                                    <Badge badgeContent={4.5} color="primary">
                                        <Typography
                                            className={classes.badge}
                                            variant="button"
                                        >
                                            Rating {vote_average}
                                        </Typography>
                                    </Badge>
                                </Grid>
                                <Grid item container spacing={40} xs={12}>
                                    <Grid item>
                                        <Typography variant="button">
                                            {releaseYear}
                                        </Typography>
                                    </Grid>
                                    <Grid item>{this.renderGenres()}</Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>{overview}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

MovieDetailsComponent.propTypes = {
    classes: object.isRequired,
    poster_path: string,
    title: string.isRequired,
    vote_average: number,
    releaseYear: string,
    genres: arrayOf(string),
    overview: string
};

export const MovieDetails = withStyles(styles)(MovieDetailsComponent);
