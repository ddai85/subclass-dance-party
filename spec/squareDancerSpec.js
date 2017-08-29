describe('squareDancer', function() {

  var squareDancer1, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    //clock = sinon.useFakeTimers();
    squareDancer1 = new squareDancer(10, 20, timeBetweenSteps);
    //squareDancer = new makeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(squareDancer1.$node).to.be.an.instanceof(jQuery);
  });

  it('should be square (border-radius of 0)', function() {
    // sinon.spy(squareDancer.$node, 'toggle');
    squareDancer1.square();
    expect(squareDancer1.$node.css('border-radius')).to.be.equal('0px');
  });

  // describe('dance', function() {
  //   it('should call step at least once per second', function() {
  //     sinon.spy(squareDancer, 'step');
  //     expect(squareDancer.step.callCount).to.be.equal(0);
  //     clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
  //     clock.tick(timeBetweenSteps);

  //     expect(squareDancer.step.callCount).to.be.equal(1);

  //     clock.tick(timeBetweenSteps);
  //     expect(squareDancer.step.callCount).to.be.equal(2);
  //   });
  // });
});
