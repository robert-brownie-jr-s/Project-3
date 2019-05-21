import React from 'react';
import Iframe from 'react-iframe'

// import PropTypes from 'prop-types';

var youTubeKey = 'AIzaSyCLoFEbhSlB0abkW_Ipic1I18qD7-mtHa0'





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
        return (

            <div>
                <h1>Here are some search results to help achieving your goal, {this.props.passData}.</h1>
                <Iframe src={`https://www.youtube.com/embed/?listType=search&list=${this.props.passData}`}
                    
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />
            </div>


        )
    }
}
// -------Below-----youtube------------

//-------Above------Youtube-------------------

export default GoalSearch;