describe('Berlinuhr', function(){
  beforeEach(function(){
    this.berlinuhr = new Berlinuhr()
  })

  describe('#getSeconds', function(){
    describe('initialized with an even seconds number', function(){

      beforeEach(function(){
        this.berlinuhr.setTime('12:34:56')
      })

      it('should display seconds', function(){
        expect(this.berlinuhr.getSeconds()).toBe('Y')
      })
    })

    describe('initialized with an odd seconds number', function(){

      beforeEach(function(){
        this.berlinuhr.setTime('12:34:55')
      })

      it('should display seconds', function(){
        expect(this.berlinuhr.getSeconds()).toBe('O')
      })

    })
  })

  describe('#getHours', function(){
    describe('initialized with 5 A.M.', function(){

      beforeEach(function(){
      })

      it('should display hours on two lines', function(){
        this.berlinuhr.setTime('05:00:00')
        expect(this.berlinuhr.getHours())
          .toEqual(['ROOO','OOOO'])
      })

      it('should display hours on two lines', function(){

        this.berlinuhr.setTime('06:00:00')
        expect(this.berlinuhr.getHours())
          .toEqual(['ROOO','ROOO'])
      })

    })
  })
  describe('#getMinutes', function(){
    describe('initialized with 05:16:00', function() {
      it('should display minutes', function() {
        this.berlinuhr.setTime('05:16:00')
        expect(this.berlinuhr.getMinutes()).toEqual(
            ['YYROOOOOOOO', 'YOOO']
          )
      })
    })
  })
  
  describe('#setTime', function(){
    it('should return valid Date.get* segments', function() {
        this.berlinuhr.setTime('13:37:42')
        expect(this.berlinuhr.timeObj.getHours()).toEqual(13)
        expect(this.berlinuhr.timeObj.getMinutes()).toEqual(37)
        expect(this.berlinuhr.timeObj.getSeconds()).toEqual(42)
    })  
  })
  

  describe('#setTime invalid hour segments', function(){
    it('should throw invalid hour error', function() {
        expect(this.berlinuhr.setTime.bind(this.berlinuhr, '24:00:00')).toThrow()
    })
  });
  
  describe('#setTime invalid minute segments', function(){
    it('should throw invalid minute error', function() {
        expect(this.berlinuhr.setTime.bind(this.berlinuhr, '00:60:00')).toThrow()
    })
  });
  
  describe('#setTime invalid second segments', function(){
    it('should throw invalid hour error', function() {
        expect(this.berlinuhr.setTime.bind(this.berlinuhr, '00:00:60')).toThrow()
    })
  })

  describe('#setTime can accept a Date object', function(){
    it('should return the time we gave it', function() {
        var d = new Date()
        d.setHours(0,0,1)
        this.berlinuhr.setTime(d)
        expect(this.berlinuhr.timeObj.getSeconds()).toBe(1)
    })
  })
  describe('#setTime can accept a Date object, but not just any object', function(){
    it('should return the time we gave it', function() {
        var o = {}
        expect(this.berlinuhr.setTime.bind(this.berlinuhr, o)).toThrow()
    })
  })
  
  describe('#getTime returns correctly formatted time', function(){
    it('should return "Y\nROOO\nROOO\nYYROOOOOOOO\nYOOO"', function(){
        var d = new Date()
        d.setHours(6,16,0)
        this.berlinuhr.setTime(d)
        expect(this.berlinuhr.getTime()).toBe('Y\nROOO\nROOO\nYYROOOOOOOO\nYOOO')
    })
  })
})
