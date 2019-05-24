const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var Twitter = require('twitter');
const config =require('./config.js');  

// API Routes
router.use("/api", apiRoutes);

router.get("/api/twitter/:search", function (req, res) {
  // console.log(config)
  var T = new Twitter(config);

  // Set up your search parameters
  var params = {
    q: '#cat',
    count: 1,
    result_type: 'recent',
    lang: 'en'
  }

  // Initiate your search using the above paramaters
  T.get('search/tweets', params, function (err, data, response) {
    // If there is no error, proceed
    // console.log(data)
    
    console.log(data.statuses[4].text)
    if (!err) {
      // Loop through the returned tweets
      
      for (let i = 0; i < data.statuses.length; i++) {
        // Get the tweet Id from the returned data
        let id = { id: data.statuses[i].id_str }
        

      }
    } else {
      console.log(err);
    }
  })
  // res.send(
  //   console.log("hello world")
  // )
})

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
