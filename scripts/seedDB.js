const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const goalSeed = [
  {
    
    goal: "Lose Weight",
    likes: 3,
  },
  {
    
    goal: "Gain Weight",
    likes: 4,
  },
  {
    
    goal: "Visit Korea",
    likes: 5,
  },
  {
    
    goal: "Win life",
    likes: 2,
  },
  {
    
    goal: "Quit job",
    likes: 1,
  },
  {
    
    goal: "Find a job",
    likes: 0,
  },
  {
   
    goal: "Travel",
    likes: 6,
  },
  {
    
    goal: "Learn Data Structures",
    likes: 8,
  },
  {
    
    goal: "Become rich",
    likes: 5,
  },
  {
    
    goal: "Invest in stocks",
    likes: 9,
  }
];


db.Goal
  .remove({})
  .then(() => db.Goal.collection.insertMany(goalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
