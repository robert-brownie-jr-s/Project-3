import React from 'react';
import Iframe from 'react-iframe'
import axios from 'axios'
// import { url } from 'inspector';
// import PropTypes from 'prop-types';

var youTubeKey = 'AIzaSyCLoFEbhSlB0abkW_Ipic1I18qD7-mtHa0'





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
            
            this.setState({photos: data.data.hits})
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
                    {/* <Iframe src={`https://pixabay.com/api/?key=12567755-3fe439b0b1b4e0a26917f9257&q=${this.props.passData}`}
                    width="100%"
                    height="450px"
                    id="googleFrame"
                    className="myClassname"
                    display="initial"
                    position="relative" /> */}
                    {
                        this.state.photos ? this.state.photos.map(photo => <img src={photo.previewURL}></img>):null
                    }

                </div>
                <Iframe src={`https://api.twitter.com/1.1/search/tweets.json?q=%23superbowl&result_type=recent`}
                    width="100%"
                    height="450px"
                    id="instaFrame"
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