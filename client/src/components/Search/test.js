var Twitter = require('twitter');
var config = require('../Config/config.js');
var T = new Twitter(config);

// Set up your search parameters
var params = {
  q: '#cat',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

// Initiate your search using the above paramaters
T.get('search/tweets', params, function(err, data, response) {
  // If there is no error, proceed
  console.log(data)
  if(!err){
    // Loop through the returned tweets
    for(let i = 0; i < data.statuses.length; i++){
      // Get the tweet Id from the returned data
      let id = { id: data.statuses[i].id_str }
      // Try to Favorite the selected Tweet
      
    }
  } else {
    console.log(err);
  }
})