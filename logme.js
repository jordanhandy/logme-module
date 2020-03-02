// Logger

module.exports.log = function(data) {

    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
  
    return console.log(data + " - " + hours + ":" + minutes);
  
  }
  