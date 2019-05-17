import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Form from '../src/components/Form/index.js';
import { UID } from 'react-uid';

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
// let goalLike = 0;

const data = [
  tableComponent(1, 'Lose Weight', 10),
  tableComponent(2, 'Get a Job', 8),
  tableComponent(3, 'Visit Korea', 6),
  tableComponent(4, 'Find a Wife', 4),
  tableComponent(5, 'Quit Smoking', 2),
];

class GoalTable extends React.Component {
  // const { classes } = props;
  constructor(props) {
    super(props)
    this.state = {
      goalLike: 0,
      show: true
    }
  }

  IncrementItem = () => {
    this.setState({ goalLike: this.state.goalLike += 1 });
    console.log(this.state.goalLike)
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  //this function accepts parameter events
  handleLike(event) {
    event.preventDefault()
    console.log(event)
  }

  //------------------------------
  //set up AXIOS
  //set up Routes
  //set up sequelize
  //send to DB (mySQL)
  //response back to front end
  //------------------------------


  render() {
    return (
      <Paper>
        <Form />
        <UID>
          {id => (
            <Fragment>
              <input id={id} />
              <label htmlFor={id} />
            </Fragment>
          )}

        </UID>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Rank</TableCell>
              <TableCell align="center">Goal</TableCell>
              <TableCell align="center">Likes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => (
              <TableRow key={n.goalName}>
                {/* <TableCell key={n.id} component="th" scope="row">
                  {n.name}
                </TableCell> */}
                <TableCell key={n.id} align="center">{n.goalRank}</TableCell>
                <TableCell key={n.id} align="center">{n.goalName}</TableCell>
                <TableCell key={n.id} align="center">{n.goalLike}</TableCell>
                <TableCell key={n.id} align="center">
                  <button name={n.goalLike} onClick={this.IncrementItem}>Like</button>

                </TableCell>

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