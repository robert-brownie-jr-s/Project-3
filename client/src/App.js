import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Form from '../src/components/Form/index.js';

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

// {goalRank : 1, goalName : goalName, goalLike : 10}

// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
//   id += 1;
//   return { id, name, calories, fat, carbs, protein };
// }

const data = [
  tableComponent(1, 'Lose Weight', 10),
  tableComponent(2, 'Get a Job', 8),
  tableComponent(3, 'Visit Korea', 6),
  tableComponent(4, 'Win life', 4),
  tableComponent(5, 'Quit Job', 2),
];

class GoalTable extends React.Component {
  // const { classes } = props;
  constructor(props) {
    super(props)
    this.state = {}
  }

  //this function accepts parameter events
handleLike (event) {
event.preventDefault()
console.log(event.target.name)
}

//------------------------------
//set up AXIOS
//set up Routes
//set up sequelize
//send to DB (mySQL)
//response back to front end
//------------------------------
incrementMe = () => {
  let newCount = this.state.count + 1
  this.setState({
    count: newCount
  })
}

  render() {
    return (
      <Paper>
        <Form />
        <Table>
          <TableHead>
            <TableRow>
              {/* <TableCell>Dessert (100g serving)</TableCell> */}
              <TableCell>Rank</TableCell>
              <TableCell>Goal</TableCell>
              <TableCell>Likes</TableCell>
              {/* <TableCell align="right">Protein (g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => (
              <TableRow key={n.goalName}>
                <TableCell key={n.id}>{n.goalRank}</TableCell>
                <TableCell key={n.id}>{n.goalName}</TableCell>
                <TableCell key={n.id}>{n.goalLike}</TableCell>
                <TableCell key={n.id}><button name={n.goalLike} onClick={this.incrementMe}>Like {this.newCount}</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}


GoalTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoalTable);