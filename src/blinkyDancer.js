var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  
};


makeBlinkyDancer.prototype = Object.create(Dancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.oldStep = function () {
  Dancer.prototype.step.call(this);
};

console.log(makeBlinkyDancer.prototype.oldStep, 'here');

makeBlinkyDancer.prototype.step = function() { 
  this.oldStep();
  this.$node.toggle();
};
