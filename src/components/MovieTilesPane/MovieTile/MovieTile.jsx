import React from 'react';
import Grid from '@material-ui/core/Grid/index';
import Card from '@material-ui/core/Card/index';
import CardContent from '@material-ui/core/CardContent/index';
import CardMedia from '@material-ui/core/CardMedia/index';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { emptyImageUrl } from '../../../data/Movies/mockData';

export const MovieTile = ({ imageSrc, title, releaseYear, genres }) => (
    <Grid item sm={6} md={4} lg={3}>
        <Link style={{ textDecoration: 'none' }} to={'/details'}>
            <Card>
                <CardMedia
                    style={{ paddingTop: '56.25%' }}
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
                                        style={{ marginRight: 10 }}
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

MovieTile.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string)
};
