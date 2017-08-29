var squareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.square();
  this.promenade();
};


squareDancer.prototype = Object.create(Dancer.prototype);

squareDancer.prototype.constructor = squareDancer;

/*squareDancer.prototype.oldStep = function () {
  Dancer.prototype.step.call(this);
};*/

squareDancer.prototype.square = function() { 
  var styleSettings = {
    'border-radius': 0,
    'border-color': 'yellow',
    'border-width': '15px',
    'display': 'block',
  };
  this.$node.css(styleSettings);
};

squareDancer.prototype.promenade = function() {
  
  var context = this;

  var takeAStep = function() {

    setInterval(function() {
      setTimeout(function() {
        context.$node.css({'transform': 'translateX(40px)'});
      }, 1500);
      setTimeout(function() {
        context.$node.css({'transform': 'translateY(40px)'});
      }, 3000);
      setTimeout(function() {
        context.$node.css({'transform': 'translateX(-40px)'});
      }, 4500);
      setTimeout(function() {
        context.$node.css({'transform': 'translateY(-40px)'});
      }, 6000);
      // var translations = {
      //   1: 'translateX(40)',
      //   2: 'translateY(40)',
      //   3: 'translateX(-40)',
      //   4: 'translateY(-40)'
      // };

    }, 7500);
  };
  takeAStep();
};