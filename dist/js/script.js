var Hoge = /** @class */ (function() {
  function Hoge() {}
  Hoge.prototype.fuga = function(str) {
    return str;
  };
  return Hoge;
})();
var hoge = new Hoge();
hoge.fuga("fugafuga");
