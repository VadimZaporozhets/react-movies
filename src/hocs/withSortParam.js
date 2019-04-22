import React, { Component } from 'react';
import { SORT_PARAMS } from '../constants';

export const withSortParam = ChildComponent => {
    return class WithSortParam extends Component {
        state = {
            sortParam: SORT_PARAMS.releaseDate
        };

        changeSortParam = ({ currentTarget: { value } }) => {
            this.setState({
                sortParam: value
            });
        };

        render() {
            const { sortParam } = this.state;

            return (
                <ChildComponent
                    onSortParamChange={this.changeSortParam}
                    sortParam={sortParam}
                />
            );
        }
    };
};
