
const request = require('request')
const rp = require('request-promise')


const options = {
    uri: 'https://driftapi.com/contacts',
    headers: {
        'Authorization': 'Bearer <<USE_YOUR_TOKEN>>' 
    },
    method: 'GET',
    json: true // Automatically parses the JSON string in the response
};
  
  
  


module.exports = function(app) {
  
  app.get('/wordsTest', async (req, res, next) => {
    console.log('test');
  
    try {
      const data = await rp(options);
  
      res.json(data);
    } catch (e) {
  
      console.log('this is error', e);
      next(e)
    }
  })
};
