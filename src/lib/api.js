'use strict';

const router = require('../lib/router.js');

function theHeader(res) {
  res.statusCode = 200;
  res.statusMessage = 'All is well';



  router.get('/api/v1/ducks', (req, res) => {
    
    const id = req.query.id;
    if(id) {
      res.statusCode = 200;
      let message =`ID =${req.query.id}`;
      res.write(message);
    }else{
      res.statusCode = 400;
      res.statusMessage = 'you are a failure';
    }
    res.end();
  });

  //more class demo
  //router.get('/api/v1/dogs', (req, res) => {
  //res.write('all the dogs');
  //res.end();
  //send back all dogs

    
  //}

  /**
 * POST Route (/data)
 * Accepts a JSON object and simply regurgitates it back to the browser
 * test with httpie:
 *     echo '{"title":"Go Home","content":"foobar"}' | http post http://localhost:8080/data
 */
  router.post('/api/v1/ducks', (req,res) => {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write( JSON.stringify(req.body) );
    res.end();
  });


  router.put('/api/v1/ducks', (req, res) => {
    const id = req.query.id;
    if (id) {
      res.statusCode = 200;
      res.statusMessage = 'OK';
      res.write(JSON.stringify(req.body));
    } else {
      res.statusCode = 400;
      res.write('you are a failure');
    }
    res.end();
  });

  router.delete('/api/v1/ducks', (req, res) => {
    const id = req.query.id;
    if (id) {
      res.statusCode = 200;
      res.statusMessage = 'OK';
      res.write(`id: ${id} was removed`);
    } else {
      res.statusCode = 400;
      res.write('you are a failure');
    }
    res.end();
  });
}


