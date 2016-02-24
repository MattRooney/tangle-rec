function Rectangle(x, y, width, height) {

  if(!(this instanceof Rectangle)) {
    throw new Error('You cannot call this function without the "new" keyword.');
  }

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

}

Rectangle.prototype.perimeter = function() {
  return 2 * (this.width + this.height);
}

Rectangle.prototype.area = function() {
  return this.width * this.height;
}

module.exports = Rectangle;
