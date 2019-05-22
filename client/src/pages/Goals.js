import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import  Input from "../components/Form";
import  TextArea from "../components/Form";
import  FormBtn from "../components/Form";

class Goals extends Component {
  state = {
    goals: []
  };

  // componentDidMount() {
  //   this.loadGoals();
  // }

  // loadGoals = () => {
  //   API.getGoals()
  //     .then(res =>
  //       this.setState({ goals: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };


  
}

export default Goals;
