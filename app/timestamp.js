'use strict';

exports.module = function(app){
    app.get('/:date', function(req, res) {
        var date = req.params.date;
        var unix = null;
        var natural = null;
        
        // Check for initial unix time
        if (+date >= 0) {
            unix = +date;
            natural = unixToNat(unix);
        } 
        
        // Check for initial natural time
        if (isNaN(+date) && (date, "MMMM D, YYYY").isValid()) {
            unix = natToUnix(date);
            natural = unixToNat(unix);
        }
        
        var dateObj = { "unix": unix, "natural": natural };
        res.send(JSON.stringify(dateObj));
        
    });
    
    function natToUnix(date) {
        // Conver from natural date to unix timestamp
        return {
        unixtime: date.getTime()
    };
    }
    
    function unixToNat(unix) {
        // Convert unix timestamp to natural date
        return {
        hour: unix.getHours(),
        minute: unix.getMinutes(),
        second: unix.getSeconds()
    };
    }
};