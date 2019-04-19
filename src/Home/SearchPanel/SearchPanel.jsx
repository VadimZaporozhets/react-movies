import React, { Component } from 'react';
import { SearchInputSubmit } from './SearchInputSubmit';
import { SearchCategories } from './SearchCategories';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { object, func } from 'prop-types';
import { SearchPanelStyles as styles } from './SearchPannelStyles';
import { SEARCH_BY_PARAMS } from '../../constants';

export class SearchPanelComponent extends Component {
    state = {
        searchBy: SEARCH_BY_PARAMS.title
    };

    handleSearchByChange = searchBy => {
        this.setState({ searchBy });
    };

    render() {
        const { classes, onSubmit } = this.props;
        const { searchBy } = this.state;

        return (
            <Grid className={classes.marginBottom} container spacing={40}>
                <Grid xs={12} item>
                    <Paper elevation={1} className={classes.panel}>
                        <SearchInputSubmit
                            searchBy={searchBy}
                            onSubmit={onSubmit}
                        />
                        <SearchCategories
                            handleSearchByChange={this.handleSearchByChange}
                            searchBy={searchBy}
                        />
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

SearchPanelComponent.propTypes = {
    classes: object.isRequired,
    onSubmit: func.isRequired
};

export const SearchPanel = withStyles(styles)(SearchPanelComponent);
