'use strict';

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    exports.time = function(req, res, next){
        var reqdate = req.params.date;
        if(isNaN(reqdate)){
          var date = new Date(reqdate);
        } else {
          date = new Date(Number(reqdate) * 1000); 
        }
        var natural = months[date.getUTCMonth()] + ' ' + date.getUTCDate() + ', ' + date.getUTCFullYear();
        //  } else {
        //    natural = null;
        //    res.status(422); // unprocessable
        //  }

	res.send(JSON.stringify({unix: Math.floor(date.getTime()/1000), natural: natural }));
    };

    
    