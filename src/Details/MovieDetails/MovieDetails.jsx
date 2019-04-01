import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { emptyImageUrl } from '../../data/Movies/mockData';
import { withStyles } from '@material-ui/core/styles';
import { object, string, number, arrayOf } from '../../propTypes';
import { MovieDetailsStyles as styles } from './MovieDetailsStyles';

const MovieDetailsComponent = ({
    classes,
    imageUrl,
    title,
    rating,
    releaseYear,
    genres,
    description
}) => (
    <Grid className={classes.marginBottom} container spacing={40}>
        <Grid item xs={12}>
            <Paper elevation={1} className={classes.wrapper}>
                <Grid container spacing={40}>
                    <Grid item xs={12} md={4}>
                        <img
                            className={classes.image}
                            src={imageUrl ? imageUrl : emptyImageUrl}
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
                            <Typography variant="h4">{title}</Typography>
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
                                    {rating}
                                </Typography>
                            </Badge>
                        </Grid>
                        <Grid item container spacing={40} xs={12}>
                            <Grid item>
                                <Typography variant="button">
                                    {releaseYear}
                                </Typography>
                            </Grid>
                            <Grid item>
                                {genres &&
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
                                    })}
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>{description}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
);

MovieDetailsComponent.propTypes = {
    classes: object.isRequired,
    imageUrl: string,
    title: string.isRequired,
    rating: number,
    releaseYear: string,
    genres: arrayOf(string),
    description: string
};

export const MovieDetails = withStyles(styles)(MovieDetailsComponent);
