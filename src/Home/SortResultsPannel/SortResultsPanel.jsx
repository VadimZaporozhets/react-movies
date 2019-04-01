import React from 'react';
import { object } from '../../propTypes';
import { withStyles } from '@material-ui/core/styles';
import { sortResultsPanelStyles as styles } from './SortResultsPanelStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const SortResultsPanelComponent = ({ classes }) => (
    <Grid className={classes.marginBottom} container spacing={40}>
        <Grid item xs={12}>
            <Paper className={classes.paperWrapper} elevation={1}>
                <Grid container spacing={40}>
                    <Grid container alignItems="center" item sm={12} md={6}>
                        <Typography className="margin-right" variant="button">
                            Found 20 movies
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
                            variant="outlined"
                            size="small"
                            color="primary"
                        >
                            Release date
                        </Button>
                        <Button variant="outlined" size="small" color="primary">
                            Rating
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
);

SortResultsPanelComponent.propTypes = {
    classes: object.isRequired
};

export const SortResultsPanel = withStyles(styles)(SortResultsPanelComponent);
