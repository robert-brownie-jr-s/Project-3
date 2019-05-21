import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import App from '../../../../client/src/App.js'

class GoalSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
    
        }

    }
    handleSearch(props) {
        console.log("search")
        
    }
    
    render() {
        return(

            <div>
                <h1>`Hello, this is {this.props.passData}`</h1>
                
            </div>
        )
    }
}


export default GoalSearch;