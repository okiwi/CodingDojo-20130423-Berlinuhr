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
})
