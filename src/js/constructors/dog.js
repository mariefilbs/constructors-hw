function Dog (options) {
  var options = options || {};
  this.status = 'normal' || options.status;
  this.color = options.color;

  //moonshine doesn't have a hungry option
  if (options.hungry === undefined) {
      this.hungry = true;
    } else {
      this.hungry = options.hungry;
  }
 }



export { Dog };
