import React, {Component} from 'react';
import Iframe from 'react-iframe'
import axios from 'axios'
// import { PinterestGrid, PinterestPinWidget } from 'react-pinterest';
// import { url } from 'inspector';
// import PropTypes from 'prop-types';
var Twitter = require('twitter');
var youTubeKey = 'AIzaSyCLoFEbhSlB0abkW_Ipic1I18qD7-mtHa0'
var instaKey = '8bc650352bce4f45831a898d357dc164'
var pinKey = 'a30fc569909bb1d90dc5cec8eeff4a0a290c2f78a212a1dba96bc3b1eecc0081'


var client = new Twitter({
    consumer_key: 'sgbYZpPhKo6tjBa4bSTpJ7XYM',
    consumer_secret: 'TgRqtxuTOHDk6bSNVCIuB3j9h5LO5NK6HGTNCW0MiK2jiZVmJ0',
    access_token_key: '233737072-ORLbhr2ZOObPPsanRGeEyi1Mt3upi908z9wNCnjV',
    access_token_secret: 'ob74j3cc8RbkH2sjdCdVgXLOs5pF4ioPIn7XuZnFB0ytH'
});

class Tweeter extends Component {
    state = {
        tweets: [],
        tweetsToShow: [],
        username: "",
        tweetsShown: false,
        statsRequested: false,

        isSortedByDate: false,
        isSortedByLikes: false,
        sortedBy: "Sort",

        isFiltered: false,
        filteredBy: "",
        filteringQuery: "",
        filteredTweets: []
    };
}





class GoalSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: "search",
            photos: null
        }


    }
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
                    {/* <PinterestGrid gutter="1">
                        <PinterestPinWidget pin="530158187357124374" />
                        <PinterestPinWidget pin="356417757989339525" />
                        <PinterestPinWidget pin="356417757986524080" />
                        <PinterestPinWidget pin="356417757986724718" />
                        <PinterestPinWidget pin="356417757988564358" />
                        <PinterestPinWidget pin="356417757988206582" />
                        <PinterestPinWidget pin="202802789445693269" />
                        <PinterestPinWidget pin="89438742571585339" />
                        <PinterestPinWidget pin="232850243203755319" />
                        <PinterestPinWidget pin="137008013639035297" />
                        <PinterestPinWidget pin="264797653065817757" />
                        <PinterestPinWidget pin="144467100519920447" />
                    </PinterestGrid> */}
                    
                    
                    <Iframe src={`https://www.instagram.com/explore/tags/${this.props.passData}`}
                        width="100%"
                        height="450px"
                        id="googleFrame"
                        className="myClassname"
                        display="initial"
                        position="relative" />
                    {
                        this.state.photos ? this.state.photos.map(photo => <img src={photo.previewURL}></img>) : null
                    }

                </div>
                
                <Iframe src={`https://api.twitter.com/1.1/search/tweets.json?q=%23cat&src=typd`}
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
// -------Below-----youtube------------

//-------Above------Youtube-------------------

export default GoalSearch;