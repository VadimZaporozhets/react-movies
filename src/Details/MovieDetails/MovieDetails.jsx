import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import { emptyImageUrl } from '../../data/Movies/mockData';

export const MovieDetails = ({
    imageUrl,
    title,
    rating,
    releaseYear,
    genres,
    description
}) => (
    <Grid style={{ marginBottom: 20 }} container spacing={40}>
        <Grid item xs={12}>
            <Paper elevation={1} style={{ padding: 20 }}>
                <Grid container spacing={40}>
                    <Grid item xs={12} md={4}>
                        <img
                            style={{ maxWidth: '100%' }}
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
                                    style={{ paddingRight: 20 }}
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
                                                style={{ marginRight: 10 }}
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

MovieDetails.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    releaseYear: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string
};
