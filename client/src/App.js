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
import Navbar from '../src/components/Nav/index.js';
// import { UID } from 'react-uid';
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

// Goal Rank Table component
function tableComponent(goalRank, goalName, goalLike, likeBtn) {
  return { goalRank, goalName, goalLike, likeBtn };
}

const data = [
  tableComponent(1, 'Lose Weight', 10),
  tableComponent(2, 'Get a Job', 8),
  tableComponent(3, 'Visit Korea', 6),
  tableComponent(4, 'Find a Wife', 4),
  tableComponent(5, 'Quit Smoking', 2),
];

class GoalTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data,
      show: true

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
    this.setState({ data });
    console.log(data)
    
    axios.post("/api/likes",this.state.data)
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
    console.log(this.state)
    return (
      <Paper>
        <Form />


        <div>

          {this.state.data.sort((a, b) => b.goalLike - a.goalLike).map((n, index) => {
            n.goalRank = index + 1;
            return (
              <Card>
                <p>
                  Rank: {n.goalRank}
                </p>
                <p>
                  Goal: {n.goalName}
                </p>
                <p>
                  Like: {n.goalLike}
                </p>
                <button name={n.goalLike} onClick={this.IncrementItem(index)}>Like</button>
              </Card>)
          })}
        </div>

        {/* Table Version */}
        {/* <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Rank</TableCell>
              <TableCell align="center">Goal</TableCell>
              <TableCell align="center">Likes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map((n, index) => (
              <TableRow key={n.goalName}>
                <TableCell key={n.id} align="center">{n.goalRank}</TableCell>
                <TableCell key={n.id} align="center">{n.goalName}</TableCell>
                <TableCell key={n.id} align="center">{n.goalLike}</TableCell>
                <TableCell key={n.id} align="center">
                  <button name={n.goalLike} onClick={this.IncrementItem(index)}>Like</button>
                </TableCell>

              </TableRow>

            ))}
          </TableBody>

        </Table> */}
      </Paper>
    )
  }
}


GoalTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoalTable);