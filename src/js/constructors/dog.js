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

//^I feel like this is an unneccessary else statment,
//but it is running false without it.
//this.hungry = (options.hungry === false)? false: true;
//ternary** <-- look it up

export { Dog };
