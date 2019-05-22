import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Form from '../src/components/Form/index.js';
import Card from '@material-ui/core/Card';
// import CardPrimaryContent from '@material-ui/core/CardPrimaryContent'
import CardMedia from '@material-ui/core/CardMedia'
import axios from 'axios';
import Iframe from 'react-iframe'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import GoalSearch from './components/Search/search.js'
// jumbotron
import { Jumbotron, Button } from 'reactstrap';
import API from "./utils/API";

// import Navbar from '../src/components/Nav/index.js'
// import "@material/card/mdc-card";


// import TableSortLabel from '@material-ui/core/TableSortLabel';


const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};
// jumbotron

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Come Achieve Your Goals Bitches!</h1>
        <p className="lead">This site is dedicated to ensuring your goals are met, linking you with others progressing toward the same goal!</p>
        <hr className="my-2" />
        <p>Make Sure You Track Your Goals!</p>
        <p className="lead">
          <Button color="primary">Get After It!</Button>
        </p>
      </Jumbotron>
    </div>
  );
};



// Goal Rank Table component
function tableComponent(goalRank, goalName, goalLike, likeBtn) {
  return { goalRank, goalName, goalLike, likeBtn };
}

class GoalTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      show: true,
      view: "app",
      passData: [],

    }
  }


  componentDidMount() {
    this.loadGoals();
    
  }

  loadGoals = () => {
    API.getGoals()
      .then(res => {
        console.log(res.data)
        const data = res.data;
        data.sort((a, b) => b.likes - a.likes);
        this.setState({ data })
      }
      )
      .catch(err => console.log(err));
  }

  IncrementItem = (index, id) => () => {



    API.likeGoal(id)
    .then(res => {
      this.loadGoals();
      // console.log(res.data)
      // const data = this.state.data.map((item, i) => {
      //   if (i !== index) {
      //     return item;
      //   }
      //   return {
      //     ...item,
      //     likes: res.data.likes
      //   }
      // });
      // data.sort((a, b) => b.likes - a.likes);
      // this.setState({ data });
      // console.log(data)
      // const data = res.data;
      // data.sort((a, b) => b.likes - a.likes);
      // this.setState({ data })
    })
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }




  //------------------------------
  //set up AXIOS
  //set up Routes
  //set up sequelize
  //send to DB (mySQL)
  //response back to front end
  //------------------------------




  render() {
    console.log(this.state)


      if (this.state.view === "app") {
        return (
          <Router>
            <Paper>
              <Form />
              <div>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Rank</TableCell>
                      <TableCell align="center">Goal</TableCell>
                      <TableCell align="center">Likes</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.data.map((n, index) => {

                      const goalRank = index + 1;
                      return (


                        <TableRow key={n._id}>
                          <TableCell  align="center">{goalRank}</TableCell>
                          <TableCell  align="center"><a style={{cursor:'pointer'}} onClick={() => this.setState({ passData: n.goal, view: "search" })}>{n.goal}</a></TableCell>
                          <TableCell align="center">{n.likes}</TableCell>
                          <TableCell align="center">
                            <button name={n.likes} onClick={this.IncrementItem(index, n._id)}>Like</button>

                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>
              <Iframe url="https://kiwiirc.com/client/irc.kiwiirc.com/?nick="
                width="100%"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />
            
            </Paper>
            


          </Router >
          
        )

      } else {

        return (



          <GoalSearch
            passData={this.state.passData}
          />

        )



      }
    



  



  }
}
GoalTable.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(GoalTable);
