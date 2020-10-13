var JumpingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<img class="jump" width="64" src="https://i.postimg.cc/hGGg39PZ/albie.png" alt="" />');

  this.step();
};

JumpingDancer.prototype = Object.create(Dancer.prototype);
JumpingDancer.prototype.constructor = JumpingDancer;
JumpingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};