var squareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.square();
};


squareDancer.prototype = Object.create(Dancer.prototype);

squareDancer.prototype.constructor = squareDancer;

/*squareDancer.prototype.oldStep = function () {
  Dancer.prototype.step.call(this);
};*/

squareDancer.prototype.square = function() { 
  var styleSettings = {
    'border-radius': 0,
    'border-color': 'blue',
    'border-width': '15px'
  };
  this.$node.css(styleSettings);
};