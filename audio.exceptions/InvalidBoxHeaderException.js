(function(lib){
var audio = lib.util.extendNamespace("audio.exceptions");
    
/**
 * Thrown if when trying to read box id the length doesn't make any sense
 */
function InvalidBoxHeaderException(message) {
    this.message = message;
}

InvalidBoxHeaderException.prototype = new Error();  
InvalidBoxHeaderException.prototype.constructor = InvalidBoxHeaderException;  
})(AudioTagger);
