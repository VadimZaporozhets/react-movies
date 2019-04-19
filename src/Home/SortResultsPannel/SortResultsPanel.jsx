import React from 'react';
import { object, string, func, number } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { sortResultsPanelStyles as styles } from './SortResultsPanelStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { SORT_PARAMS } from '../../constants';

export const SortResultsPanelComponent = ({
    classes,
    onSortParamChange,
    currentSortParam,
    total
}) => (
    <Grid className={classes.marginBottom} container spacing={40}>
        <Grid item xs={12}>
            <Paper className={classes.paperWrapper} elevation={1}>
                <Grid container spacing={40}>
                    <Grid container alignItems="center" item sm={12} md={6}>
                        <Typography className="margin-right" variant="button">
                            {total > 0 && `Found ${total} movies`}
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Typography
                            className={classes.marginRight}
                            inline
                            gutterBottom
                            variant="button"
                        >
                            Sort by:
                        </Typography>
                        <Button
                            className={classes.marginRight}
                            variant={
                                currentSortParam === SORT_PARAMS.releaseDate
                                    ? 'contained'
                                    : 'outlined'
                            }
                            size="small"
                            color="primary"
                            onClick={() => {
                                onSortParamChange(SORT_PARAMS.releaseDate);
                            }}
                        >
                            Release date
                        </Button>
                        <Button
                            variant={
                                currentSortParam === SORT_PARAMS.rating
                                    ? 'contained'
                                    : 'outlined'
                            }
                            size="small"
                            color="primary"
                            onClick={() => {
                                onSortParamChange(SORT_PARAMS.rating);
                            }}
                        >
                            Rating
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
);

SortResultsPanelComponent.propTypes = {
    classes: object.isRequired,
    onSortParamChange: func.isRequired,
    currentSortParam: string.isRequired,
    total: number.isRequired
};

export const SortResultsPanel = withStyles(styles)(SortResultsPanelComponent);
