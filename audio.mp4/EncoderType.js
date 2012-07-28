(function(lib){
var audio = lib.extendNamespace("audio.mp4");
/**
 * Encoder Type actually identifies the format of the audio within the mp4. This is because
 * mp4 container can be used to hold different types of files.
 */
function EncoderType(description) {
    this.description = description;
}

EncoderType.AAC = "AAC";
EncoderType.DRM_AAC = "DRM AAC";
EncoderType.APPLE_LOSSLESS = "Apple Lossless";

EncoderType.prototype.getDescription = function() {
   return this.description;
}

audio.EncoderType = EncoderType;
})(AudioTagger);
