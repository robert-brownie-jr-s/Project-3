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

        </Table>
      </Paper>
    )
  }
}


GoalTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoalTable);