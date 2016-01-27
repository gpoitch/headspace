(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Headspace = factory());
}(this, function () { 'use strict';

  function Headspace(element) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (!(this instanceof Headspace)) {
      return new (Function.prototype.bind.apply(Headspace, [null].concat(Array.prototype.slice.call(arguments))))();
    }

    this.element = element;
    this.startOffset = optionOrDefault(opts.startOffset, element && element.offsetHeight);
    this.tolerance = optionOrDefault(opts.tolerance, 8);
    this.showAtBottom = optionOrDefault(opts.showAtBottom, true);
    this.classNames = opts.classNames || {
      base: 'headspace',
      fixed: 'headspace--fixed',
      hidden: 'headspace--hidden'
    };

    this._scrollLast = 0;
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  Headspace.prototype = {
    init: function init() {
      var _this = this;

      this.addClass(this.classNames.base);
      window.addEventListener('scroll', function () {
        return _this.debounce(function () {
          return handleScroll(_this);
        });
      });
    },
    reset: function reset() {
      var classNames = this.classNames;
      this.removeClass(classNames.fixed, classNames.hidden);
    },
    fix: function fix() {
      var classNames = this.classNames;
      this.addClass(classNames.fixed);
      this.removeClass(classNames.hidden);
    },
    hide: function hide() {
      this.addClass(this.classNames.hidden);
    },

    // Accessible for shimming
    addClass: function addClass() {
      var _element$classList;

      (_element$classList = this.element.classList).add.apply(_element$classList, arguments);
    },
    removeClass: function removeClass() {
      var _element$classList2;

      (_element$classList2 = this.element.classList).remove.apply(_element$classList2, arguments);
    },
    debounce: function debounce(callback) {
      window.requestAnimationFrame(callback);
    }
  };

  function optionOrDefault(opt, def) {
    return typeof opt !== 'undefined' ? opt : def;
  }

  function handleScroll(instance) {
    var scrollCurrent = window.pageYOffset;
    var scrollLast = instance._scrollLast;

    if (scrollCurrent <= 0) {
      instance.reset();
    } else if (instance.showAtBottom && window.innerHeight + scrollCurrent >= document.body.offsetHeight) {
      instance.fix();
    } else if (scrollCurrent > instance.startOffset && Math.abs(scrollCurrent - scrollLast) >= instance.tolerance) {
      instance[scrollCurrent > scrollLast ? 'hide' : 'fix']();
    }

    instance._scrollLast = scrollCurrent;
  }

  return Headspace;

}));