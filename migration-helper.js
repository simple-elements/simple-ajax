var Polymerfill = {
  configure: function (target) {
    var defaults = target.defaults || {};

    Object.keys(defaults).forEach(function (key) {
      var value = defaults[key];

      if (Array.isArray(value)) {
        value = value.slice();
      } else if (value instanceof Object) {
        value = Object.create(value);
      }

      if (target[key] === undefined) {
        target[key] = value;
      }
    });
  }
};
