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

// export default Example;



// Goal Rank Table component
function tableComponent(goalRank, goalName, goalLike, likeBtn) {
  return { goalRank, goalName, goalLike, likeBtn };
}

const data = [


  tableComponent(1, 'Lose Weight', 0),
  tableComponent(2, 'Gain Weight', 0),
  tableComponent(3, 'Visit Korea', 0),
  tableComponent(4, 'Win life', 0),
  tableComponent(5, 'Quit Job', 0),
  tableComponent(6, 'Find a job', 0),
  tableComponent(7, 'Travel', 0),
  tableComponent(8, 'Learn Data Structures', 0),
  tableComponent(9, 'Become rich', 0),
  tableComponent(10, 'Invest in stocks', 0),


];

class GoalTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data,
      show: true,
      view: "app",
      passData: [],

    }
  }


  IncrementItem = index => () => {
    const data = this.state.data.map((item, i) => {
      if (i !== index) {
        return item;
      }
      return {
        ...item,
        goalLike: item.goalLike + 1
      }
    });
    data.sort((a, b) => b.goalLike - a.goalLike);
    this.setState({ data });
    console.log(data)

    axios.post("/api/likes", this.state.data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
    var state = this.state.view
    console.log(this.state)


    {
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

                        <TableRow key={n.goalName}>
                          <TableCell key={n.id} align="center">{goalRank}</TableCell>
                          <TableCell key={n.id} align="center"><a onClick={() => this.setState({ passData: n.goalName, view: "search" })}>{n.goalName}</a></TableCell>
                          <TableCell key={n.id} align="center">{n.goalLike}</TableCell>
                          <TableCell key={n.id} align="center">
                            <button name={n.goalLike} onClick={this.IncrementItem(index)}>Like</button>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>
              <Iframe url="https://kiwiirc.com/client/irc.kiwiirc.com/?nick=tyler|?#project1"
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
}
GoalTable.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(GoalTable);
