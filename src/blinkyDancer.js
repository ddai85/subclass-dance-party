/*var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still 
  // want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any 
    // call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};

*/

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  //var oldStep = makeBlinkyDancer.prototype.step;
  
};


makeBlinkyDancer.prototype = Object.create(Dancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//makeBlinkyDancer.prototype.oldStep = Dancer.prototype.step;

makeBlinkyDancer.prototype.oldStep = function () {
  Dancer.prototype.step.call(this);
};

console.log(makeBlinkyDancer.prototype.oldStep, 'here');

makeBlinkyDancer.prototype.step = function() {
  //debugger;
  //console.log(this.oldStep); 
  this.oldStep();
  this.$node.toggle();
};


//console.log(makeBlinkyDancer.prototype);
//console.log(makeBlinkyDancer);

/*var freddie =  new Dancer(100, 100, 1000);
console.log(freddie);

var sally =  new makeBlinkyDancer(100, 100, 1000);
console.log(sally);*/