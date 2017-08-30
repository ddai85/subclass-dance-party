var BlueBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.blue();
};


BlueBlinkyDancer.prototype = Object.create(makeBlinkyDancer.prototype);

BlueBlinkyDancer.prototype.constructor = BlueBlinkyDancer;

/*BlueBlinkyDancer.prototype.oldStep = function () {
  Dancer.prototype.step.call(this);
};*/

BlueBlinkyDancer.prototype.blue = function() { 
  var styleSettings = {
    'border-color': 'blue',
    'border-width': '0px'
  };
  this.$node.css(styleSettings);
};