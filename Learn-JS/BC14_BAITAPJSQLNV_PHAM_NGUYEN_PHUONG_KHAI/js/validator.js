const Validator = function () {
  this.errors = {};
};

Validator.prototype.isRequired = function (name, value) {
  if (!value) {
    this.errors[name] = "Please";
    return false;
  }
  return true;
};
