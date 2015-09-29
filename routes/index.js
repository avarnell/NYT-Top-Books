var express = require('express');
var router = express.Router();
var unirest = require('unirest')



router.get('/', function(req, res, next) {
  unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + process.env.NYT_API)
  .end(function (response) {
    res.render('index', { 
      title: 'NYT Reading List', 
      books: response.body.results.books
    });
  })
});

router.get('/new', function(req,res,next){
  unirest.get('http://api.nytimes.com/svc/books/v3/lists/' + req.query.section +'.json?api-key='+ process.env.NYT_API)
  .end(function (response){
    res.render('update', {
      title: 'Uncle Andys Reading List', 
      books: response.body.results.books
    });
  })
})

module.exports = router;
