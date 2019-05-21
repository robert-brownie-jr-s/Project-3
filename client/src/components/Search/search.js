import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class GoalSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
    handleSearch() {
        console.log("search")
    }
    render() {
        return(
            <div>
                <h1>Hello World!!!</h1>
            </div>
        )
    }
}


export default GoalSearch;