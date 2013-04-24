function Berlinuhr (){

}
Berlinuhr.prototype = {}

Berlinuhr.prototype.setTime = function(time){
    this.time = time

}
Berlinuhr.prototype.getSeconds = function(){

    var seconds = this.time.split(':')[2]
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

    var hours = this.time.split(':')[0]
    var firstLineHours = Math.floor(hours / 5)
    var secondLineHours = hours - firstLineHours * 5

    return [this.getLine(firstLineHours),
            this.getLine(secondLineHours)]
}
Berlinuhr.prototype.getMinutes = function(){
    var minutes = this.time.split(':')[1]
    var firstLineMinutes = Math.floor(minutes / 5)
    var secondLineMinutes = minutes - firstLineMinutes * 5

    return [this.getLine(firstLineMinutes, 11, function(i,l){
                return (i+1) % 3 ? 'Y' : 'R'}),
            this.getLine(secondLineMinutes, 4, function(){ return 'Y'})]
}


