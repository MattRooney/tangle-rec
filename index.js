function Rectangle(x, y, width, height) {

  if(!(this instanceof Rectangle)) {
    throw new Error('You cannot call this function without the "new" keyword.');
  }

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

}

Object.defineProperty(Rectangle.prototype, 'perimeter', {
  get: function() {
    return 2 * (this.width + this.height);
  }
});

Object.defineProperty(Rectangle.prototype, 'area', {
  get: function() {
    return this.width * this.height;
  }
});

module.exports = Rectangle;
