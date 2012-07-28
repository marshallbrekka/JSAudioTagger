(function(lib){
var audio = lib.util.extendNamespace("audio.exceptions");
    
/**
 * Thrown if when trying to read box id the length doesn't make any sense
 */
function NullBoxIdException(message) {
    this.message = message;
}

NullBoxIdException.prototype = new Error();  
NullBoxIdException.prototype.constructor = NullBoxIdException;  
})(AudioTagger);
