import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button/index';
import TextField from '@material-ui/core/TextField';
import { object, func, string } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { SearchInputSubmitStyles as styles } from './SearchInputSubmitStyles';
import { routes } from '../../../routes';

export class SearchInputSubmitComponent extends Component {
    state = {
        search: ''
    };

    onSubmit = () => {
        const { onSubmit, searchBy } = this.props;
        const { search } = this.state;

        const finalRoute = routes.SEARCH.replace(
            ':searchQuery',
            search
        ).replace(':searchBy', searchBy);

        onSubmit(finalRoute);
    };

    handleSearchChange = ({ target: { value } }) => {
        this.setState({
            search: value
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={40}>
                <Grid sm={12} md={8} lg={10} item>
                    <TextField
                        onChange={this.handleSearchChange}
                        placeholder="Search"
                        fullWidth
                    />
                </Grid>
                <Grid sm={12} md={4} lg={2} item className={classes.alignRight}>
                    <Button
                        onClick={this.onSubmit}
                        variant="contained"
                        color="primary"
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

SearchInputSubmitComponent.propTypes = {
    classes: object.isRequired,
    onSubmit: func.isRequired,
    searchBy: string.isRequired
};

export const SearchInputSubmit = withStyles(styles)(SearchInputSubmitComponent);
