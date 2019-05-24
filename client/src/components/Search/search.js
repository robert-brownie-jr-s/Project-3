import React from 'react';
import Iframe from 'react-iframe'
import axios from 'axios'
// var express = require('express');
// import { PinterestGrid, PinterestPinWidget } from 'react-pinterest';
// import { url } from 'inspector';
// import PropTypes from 'prop-types';


var config = require('../Config/config.js');
// var youTubeKey = 'AIzaSyCLoFEbhSlB0abkW_Ipic1I18qD7-mtHa0'
// var instaKey = '8bc650352bce4f45831a898d357dc164'
// var pinKey = 'a30fc569909bb1d90dc5cec8eeff4a0a290c2f78a212a1dba96bc3b1eecc0081'

// var T = new Twitter(config);

// Set up your search parameters
// var cors = require ('cors')
// var app = express();
// app.use(cors())



class GoalSearch extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            view: "search",
            photos: null,
            // q: '#' + this.props.passData,
            // count: 10,
            // result_type: 'recent',
            // lang: 'en'
        }
    
    }

    // componentDidMount() {
    //     T.get('search/tweets', this.state, (err, data, response) =>  {
    //         // If there is no error, proceed
    //         if (!err) {
    //             // Loop through the returned tweets
    //             for (let i = 0; i < data.statuses.length; i++) {
    //                 // Get the tweet Id from the returned data
    //                 let id = { id: data.statuses[i].id_str }
                    
    //             }
    //             console.log(this.state)
    //         } else {
    //             console.log(err);
    //         }
    //     })
    // }
    

    componentWillMount() {
        console.log(this.props.passData.split(" ").join("+"))
        axios.get(`https://pixabay.com/api/?key=12567755-3fe439b0b1b4e0a26917f9257&q="${this.props.passData.split(" ").join("+")}"`).then((data) => {

            this.setState({ photos: data.data.hits })
            console.log(this.state)

        })
    }

    handleSearch(props) {
        console.log("search")

    }



    render() {
        return (

            <div>
                <h1>Here are some search results to help achieving your goal, {this.props.passData}.</h1>
                

                <button onClick={() => this.setState({ view: "app" })}>Back</button>
                <Iframe src={`https://www.youtube.com/embed/?listType=search&list=${this.props.passData}`}
                    width="100%"
                    height="450px"
                    id="youtubeFrame"
                    className="myClassname"
                    display="initial"
                    position="relative" />
                <div>


                    {
                        // using pixabay.com
                        this.state.photos ? this.state.photos.map(photo => <img src={photo.previewURL}></img>) : null
                    }

                </div>

                <Iframe src={`https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2search?q=%23cat&src=typd`}
                    width="100%"
                    height="450px"
                    id="twitterFrame"
                    className="myClassname"
                    display="initial"
                    position="relative" />

            </div>


        )
    }
}
// -------Below-----tweeter------------







//-------Above------tweeter-------------------

export default GoalSearch;