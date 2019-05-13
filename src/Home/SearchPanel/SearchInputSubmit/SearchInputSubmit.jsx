import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button/index';
import TextField from '@material-ui/core/TextField';
import { object, func, string } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { SearchInputSubmitStyles as styles } from './SearchInputSubmitStyles';

export class SearchInputSubmitComponent extends Component {
    state = {
        searchQuery: ''
    };

    onSubmit = () => {
        const { onSubmit, searchBy, pathname } = this.props;
        const { searchQuery } = this.state;

        onSubmit({ pathname, searchBy, searchQuery });
    };

    handleSearchChange = ({ target: { value } }) => {
        this.setState({
            searchQuery: value
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
    searchBy: string.isRequired,
    pathname: string.isRequired
};

export const SearchInputSubmit = withStyles(styles)(SearchInputSubmitComponent);
