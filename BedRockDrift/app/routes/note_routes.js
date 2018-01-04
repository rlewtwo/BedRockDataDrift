
const optionsOBJ  =
{
  options1 :
    {
      method: 'GET',
      json: true,
      uri: 'https://driftapi.com/contacts'
    }
};


const request = require('request')
const rp = require('request-promise')
module.exports = function(app, db) {

  app.get('/wordsTest', async (req, res, next) => {

    try {
      const data = await rp(optionsOBJ.options1);

      res.json(data);
    } catch (e) {

      console.log('this is error', e);
      next(e)
    }
  })
};




//  this python json
// h = {'Authorization':'Bearer <<YOUR TOKEN>>'}
// 
// startQuery = 'https://driftapi.com/contacts'
// count = 0
// allContacts = []
// start = time.time()
// 
// next = {'url':startQuery}
// while next:
// 	r = requests.get(next.get("url"),headers=h)
// 	next = r.links.get("next") 
//   // request (if null make another call)
//   //make a call if get next, means good make naither call if there 
//   // extend 
//   // links something that allows (reponse http response diffrent on diffrent )
// 	allContacts.extend(r.json())
// 	count+=1
// 
// finish = time.time()
// 
// print('Queried '+str(count)+' times')
// print('Retrieved '+str(len(allContacts))+' contacts') 
// print('Total time: '+str((finish-start)))
