function Person (options) {
  var options = options || {};

//
 if (options.cool === undefined) {
    this.cool = false;
  } else {
    this.cool = options.cool;
  }
}

Person.prototype.pet = function (dog) {
  dog.status = "happy";
};

Person.prototype.feed = function (dog) {
  dog.hungry = false;
};

export { Person };
