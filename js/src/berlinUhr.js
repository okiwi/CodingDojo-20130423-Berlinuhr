function Berlinuhr (){
    this.timeObj = null;
}
Berlinuhr.prototype = {}

Berlinuhr.prototype.setTime = function(time){
    this.time = time
    var timeSeg = this.validateTimeString(time);
    this.timeObj = new Date();
    this.timeObj.setHours(timeSeg[0], timeSeg[1], timeSeg[2])
}

Berlinuhr.prototype.validateTimeString = function(time){
    var timeSegments = time.split(':');
    if (timeSegments.length != 3){
        throw new Error('Invalid time string: must have 3 segments separated by 2 colons');
    }
    var validators = [validateSegment(23, 'hour'),
                        validateSegment(59, 'minute'),
                        validateSegment(59, 'second')];
    for(var i = 0; i < timeSegments.length; i++){
        validators[i](timeSegments[i]);
    }
    
    return timeSegments;
    
    function validateSegment(maxValue, segName, actualValue){
        var errMsg = 'invalid time segment: ';
        // partial application
        if (typeof actualValue === 'undefined'){
            return function(newValue){
                if(newValue > maxValue){
                    throw new Error(errMsg + segName);
                }
            };
        }
        // actual work
        if(actualValue > maxValue){
            throw new Error(errMsg + segName);
        }
    }
}
Berlinuhr.prototype.getSeconds = function(){

    var seconds = this.timeObj.getSeconds()
    if((seconds%2) == 0)
    {
        return 'Y'
    }
    return 'O'
}
Berlinuhr.prototype.getLine = function(value, len, colorFunction) {
    len = len || 4
    var returnString = ""
    for (var i=0;i<len;i++){
        returnString += i < value ? (colorFunction ? colorFunction(i,len) : 'R') : 'O'
    }
    return returnString
}
Berlinuhr.prototype.getHours = function(){

    var hours = this.timeObj.getHours()
    var firstLineHours = Math.floor(hours / 5)
    var secondLineHours = hours - firstLineHours * 5

    return [this.getLine(firstLineHours),
            this.getLine(secondLineHours)]
}
Berlinuhr.prototype.getMinutes = function(){
    var minutes = this.timeObj.getMinutes()
    var firstLineMinutes = Math.floor(minutes / 5)
    var secondLineMinutes = minutes - firstLineMinutes * 5

    return [this.getLine(firstLineMinutes, 11, function(i,l){
                return (i+1) % 3 ? 'Y' : 'R'}),
            this.getLine(secondLineMinutes, 4, function(){ return 'Y'})]
}


