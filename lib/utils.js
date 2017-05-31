'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

//
exports.default = {
  get: get,
  set: set,
  takeRight: takeRight,
  last: last,
  orderBy: orderBy,
  range: range,
  remove: remove,
  clone: clone,
  getFirstDefined: getFirstDefined,
  sum: sum,
  makeTemplateComponent: makeTemplateComponent,
  groupBy: groupBy,
  isArray: isArray,
  splitProps: splitProps,
  compactObject: compactObject,
  isSortingDesc: isSortingDesc,
  normalizeComponent: normalizeComponent
};


function get(obj, path, def) {
  if (!path) {
    return obj;
  }
  var pathObj = makePathArray(path);
  var val = void 0;
  try {
    val = pathObj.reduce(function (current, pathPart) {
      return current[pathPart];
    }, obj);
  } catch (e) {}
  return typeof val !== 'undefined' ? val : def;
}

function set() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments[1];
  var value = arguments[2];

  var keys = makePathArray(path);
  var keyPart = void 0;
  var cursor = obj;
  while ((keyPart = keys.shift()) && keys.length) {
    if (!cursor[keyPart]) {
      cursor[keyPart] = {};
    }
    cursor = cursor[keyPart];
  }
  cursor[keyPart] = value;
  return obj;
}

function takeRight(arr, n) {
  var start = n > arr.length ? 0 : arr.length - n;
  return arr.slice(start);
}

function last(arr) {
  return arr[arr.length - 1];
}

function range(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(n);
  }
  return arr;
}

function orderBy(arr, funcs, dirs, indexKey) {
  return arr.sort(function (rowA, rowB) {
    for (var i = 0; i < funcs.length; i++) {
      var comp = funcs[i];
      var desc = dirs[i] === false || dirs[i] === 'desc';
      var sortInt = comp(rowA, rowB);
      if (sortInt) {
        return desc ? -sortInt : sortInt;
      }
    }
    // Use the row index for tie breakers
    return dirs[0] ? rowA[indexKey] - rowB[indexKey] : rowB[indexKey] - rowA[indexKey];
  });
}

function remove(a, b) {
  return a.filter(function (o, i) {
    var r = b(o);
    if (r) {
      a.splice(i, 1);
      return true;
    }
    return false;
  });
}

function clone(a) {
  try {
    return JSON.parse(JSON.stringify(a, function (key, value) {
      if (typeof value === 'function') {
        return value.toString();
      }
      return value;
    }));
  } catch (e) {
    return a;
  }
}

function getFirstDefined() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] !== 'undefined') {
      return args[i];
    }
  }
}

function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

function makeTemplateComponent(compClass) {
  return function (_ref) {
    var children = _ref.children,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ['children', 'className']);

    return _react2.default.createElement(
      'div',
      _extends({
        className: (0, _classnames2.default)(compClass, className)
      }, rest),
      children
    );
  };
}

function groupBy(xs, key) {
  return xs.reduce(function (rv, x, i) {
    var resKey = typeof key === 'function' ? key(x, i) : x[key];
    rv[resKey] = isArray(rv[resKey]) ? rv[resKey] : [];
    rv[resKey].push(x);
    return rv;
  }, {});
}

function isArray(a) {
  return Array.isArray(a);
}

// ########################################################################
// Non-exported Helpers
// ########################################################################

function makePathArray(obj) {
  return flattenDeep(obj).join('.').replace('[', '.').replace(']', '').split('.');
}

function flattenDeep(arr) {
  var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!isArray(arr)) {
    newArr.push(arr);
  } else {
    for (var i = 0; i < arr.length; i++) {
      flattenDeep(arr[i], newArr);
    }
  }
  return newArr;
}

function splitProps(_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      rest = _objectWithoutProperties(_ref2, ['className', 'style']);

  return {
    className: className,
    style: style,
    rest: rest
  };
}

function compactObject(obj) {
  var newObj = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== undefined && typeof obj[key] !== 'undefined') {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function isSortingDesc(d) {
  return !!(d.sort === 'desc' || d.desc === true || d.asc === false);
}

function normalizeComponent(Comp) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Comp;

  return typeof Comp === 'function' ? Object.getPrototypeOf(Comp).isReactComponent ? _react2.default.createElement(Comp, params) : Comp(params) : fallback;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJnZXQiLCJzZXQiLCJ0YWtlUmlnaHQiLCJsYXN0Iiwib3JkZXJCeSIsInJhbmdlIiwicmVtb3ZlIiwiY2xvbmUiLCJnZXRGaXJzdERlZmluZWQiLCJzdW0iLCJtYWtlVGVtcGxhdGVDb21wb25lbnQiLCJncm91cEJ5IiwiaXNBcnJheSIsInNwbGl0UHJvcHMiLCJjb21wYWN0T2JqZWN0IiwiaXNTb3J0aW5nRGVzYyIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsIm9iaiIsInBhdGgiLCJkZWYiLCJwYXRoT2JqIiwibWFrZVBhdGhBcnJheSIsInZhbCIsInJlZHVjZSIsImN1cnJlbnQiLCJwYXRoUGFydCIsImUiLCJ2YWx1ZSIsImtleXMiLCJrZXlQYXJ0IiwiY3Vyc29yIiwic2hpZnQiLCJsZW5ndGgiLCJhcnIiLCJuIiwic3RhcnQiLCJzbGljZSIsImkiLCJwdXNoIiwiZnVuY3MiLCJkaXJzIiwiaW5kZXhLZXkiLCJzb3J0Iiwicm93QSIsInJvd0IiLCJjb21wIiwiZGVzYyIsInNvcnRJbnQiLCJhIiwiYiIsImZpbHRlciIsIm8iLCJyIiwic3BsaWNlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwia2V5IiwidG9TdHJpbmciLCJhcmdzIiwiY29tcENsYXNzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJyZXN0IiwieHMiLCJydiIsIngiLCJyZXNLZXkiLCJBcnJheSIsImZsYXR0ZW5EZWVwIiwiam9pbiIsInJlcGxhY2UiLCJzcGxpdCIsIm5ld0FyciIsInN0eWxlIiwibmV3T2JqIiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJkIiwiYXNjIiwiQ29tcCIsInBhcmFtcyIsImZhbGxiYWNrIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJpc1JlYWN0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7a0JBQ2U7QUFDYkEsVUFEYTtBQUViQyxV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U0FBT2tCLE1BQVA7QUFDRDs7QUFFRCxTQUFTNUQsYUFBVCxDQUF3QitELENBQXhCLEVBQTJCO0FBQ3pCLFNBQU8sQ0FBQyxFQUFFQSxFQUFFcEMsSUFBRixLQUFXLE1BQVgsSUFBcUJvQyxFQUFFaEMsSUFBRixLQUFXLElBQWhDLElBQXdDZ0MsRUFBRUMsR0FBRixLQUFVLEtBQXBELENBQVI7QUFDRDs7QUFFRCxTQUFTL0Qsa0JBQVQsQ0FBNkJnRSxJQUE3QixFQUFpRTtBQUFBLE1BQTlCQyxNQUE4Qix1RUFBckIsRUFBcUI7QUFBQSxNQUFqQkMsUUFBaUIsdUVBQU5GLElBQU07O0FBQy9ELFNBQU8sT0FBT0EsSUFBUCxLQUFnQixVQUFoQixHQUNMRyxPQUFPQyxjQUFQLENBQXNCSixJQUF0QixFQUE0QkssZ0JBQTVCLEdBQ0UsOEJBQUMsSUFBRCxFQUNNSixNQUROLENBREYsR0FJSUQsS0FBS0MsTUFBTCxDQUxDLEdBTUhDLFFBTko7QUFPRCIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuLy9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldCxcclxuICBzZXQsXHJcbiAgdGFrZVJpZ2h0LFxyXG4gIGxhc3QsXHJcbiAgb3JkZXJCeSxcclxuICByYW5nZSxcclxuICByZW1vdmUsXHJcbiAgY2xvbmUsXHJcbiAgZ2V0Rmlyc3REZWZpbmVkLFxyXG4gIHN1bSxcclxuICBtYWtlVGVtcGxhdGVDb21wb25lbnQsXHJcbiAgZ3JvdXBCeSxcclxuICBpc0FycmF5LFxyXG4gIHNwbGl0UHJvcHMsXHJcbiAgY29tcGFjdE9iamVjdCxcclxuICBpc1NvcnRpbmdEZXNjLFxyXG4gIG5vcm1hbGl6ZUNvbXBvbmVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQgKG9iaiwgcGF0aCwgZGVmKSB7XHJcbiAgaWYgKCFwYXRoKSB7XHJcbiAgICByZXR1cm4gb2JqXHJcbiAgfVxyXG4gIGNvbnN0IHBhdGhPYmogPSBtYWtlUGF0aEFycmF5KHBhdGgpXHJcbiAgbGV0IHZhbFxyXG4gIHRyeSB7XHJcbiAgICB2YWwgPSBwYXRoT2JqLnJlZHVjZSgoY3VycmVudCwgcGF0aFBhcnQpID0+IGN1cnJlbnRbcGF0aFBhcnRdLCBvYmopXHJcbiAgfSBjYXRjaCAoZSkge31cclxuICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgPyB2YWwgOiBkZWZcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0IChvYmogPSB7fSwgcGF0aCwgdmFsdWUpIHtcclxuICBjb25zdCBrZXlzID0gbWFrZVBhdGhBcnJheShwYXRoKVxyXG4gIGxldCBrZXlQYXJ0XHJcbiAgbGV0IGN1cnNvciA9IG9ialxyXG4gIHdoaWxlICgoa2V5UGFydCA9IGtleXMuc2hpZnQoKSkgJiYga2V5cy5sZW5ndGgpIHtcclxuICAgIGlmICghY3Vyc29yW2tleVBhcnRdKSB7XHJcbiAgICAgIGN1cnNvcltrZXlQYXJ0XSA9IHt9XHJcbiAgICB9XHJcbiAgICBjdXJzb3IgPSBjdXJzb3Jba2V5UGFydF1cclxuICB9XHJcbiAgY3Vyc29yW2tleVBhcnRdID0gdmFsdWVcclxuICByZXR1cm4gb2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRha2VSaWdodCAoYXJyLCBuKSB7XHJcbiAgY29uc3Qgc3RhcnQgPSBuID4gYXJyLmxlbmd0aCA/IDAgOiBhcnIubGVuZ3RoIC0gblxyXG4gIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxhc3QgKGFycikge1xyXG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmdlIChuKSB7XHJcbiAgY29uc3QgYXJyID0gW11cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgYXJyLnB1c2gobilcclxuICB9XHJcbiAgcmV0dXJuIGFyclxyXG59XHJcblxyXG5mdW5jdGlvbiBvcmRlckJ5IChhcnIsIGZ1bmNzLCBkaXJzLCBpbmRleEtleSkge1xyXG4gIHJldHVybiBhcnIuc29ydCgocm93QSwgcm93QikgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmdW5jcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjb21wID0gZnVuY3NbaV1cclxuICAgICAgY29uc3QgZGVzYyA9IGRpcnNbaV0gPT09IGZhbHNlIHx8IGRpcnNbaV0gPT09ICdkZXNjJ1xyXG4gICAgICBjb25zdCBzb3J0SW50ID0gY29tcChyb3dBLCByb3dCKVxyXG4gICAgICBpZiAoc29ydEludCkge1xyXG4gICAgICAgIHJldHVybiBkZXNjID8gLXNvcnRJbnQgOiBzb3J0SW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFVzZSB0aGUgcm93IGluZGV4IGZvciB0aWUgYnJlYWtlcnNcclxuICAgIHJldHVybiBkaXJzWzBdXHJcbiAgICAgID8gcm93QVtpbmRleEtleV0gLSByb3dCW2luZGV4S2V5XVxyXG4gICAgICA6IHJvd0JbaW5kZXhLZXldIC0gcm93QVtpbmRleEtleV1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmUgKGEsIGIpIHtcclxuICByZXR1cm4gYS5maWx0ZXIoZnVuY3Rpb24gKG8sIGkpIHtcclxuICAgIHZhciByID0gYihvKVxyXG4gICAgaWYgKHIpIHtcclxuICAgICAgYS5zcGxpY2UoaSwgMSlcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb25lIChhKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGEsIChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIGFcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpcnN0RGVmaW5lZCAoLi4uYXJncykge1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHR5cGVvZiBhcmdzW2ldICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gYXJnc1tpXVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3VtIChhcnIpIHtcclxuICByZXR1cm4gYXJyLnJlZHVjZSgoYSwgYikgPT4ge1xyXG4gICAgcmV0dXJuIGEgKyBiXHJcbiAgfSwgMClcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZVRlbXBsYXRlQ29tcG9uZW50IChjb21wQ2xhc3MpIHtcclxuICByZXR1cm4gKHtjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0fSkgPT4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY29tcENsYXNzLCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBncm91cEJ5ICh4cywga2V5KSB7XHJcbiAgcmV0dXJuIHhzLnJlZHVjZSgocnYsIHgsIGkpID0+IHtcclxuICAgIGNvbnN0IHJlc0tleSA9IHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicgPyBrZXkoeCwgaSkgOiB4W2tleV1cclxuICAgIHJ2W3Jlc0tleV0gPSBpc0FycmF5KHJ2W3Jlc0tleV0pID8gcnZbcmVzS2V5XSA6IFtdXHJcbiAgICBydltyZXNLZXldLnB1c2goeClcclxuICAgIHJldHVybiBydlxyXG4gIH0sIHt9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5IChhKSB7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSlcclxufVxyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIE5vbi1leHBvcnRlZCBIZWxwZXJzXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuZnVuY3Rpb24gbWFrZVBhdGhBcnJheSAob2JqKSB7XHJcbiAgcmV0dXJuIGZsYXR0ZW5EZWVwKG9iailcclxuICAgICAgLmpvaW4oJy4nKVxyXG4gICAgICAucmVwbGFjZSgnWycsICcuJylcclxuICAgICAgLnJlcGxhY2UoJ10nLCAnJylcclxuICAgICAgLnNwbGl0KCcuJylcclxufVxyXG5cclxuZnVuY3Rpb24gZmxhdHRlbkRlZXAgKGFyciwgbmV3QXJyID0gW10pIHtcclxuICBpZiAoIWlzQXJyYXkoYXJyKSkge1xyXG4gICAgbmV3QXJyLnB1c2goYXJyKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmbGF0dGVuRGVlcChhcnJbaV0sIG5ld0FycilcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG5ld0FyclxyXG59XHJcblxyXG5mdW5jdGlvbiBzcGxpdFByb3BzICh7Y2xhc3NOYW1lLCBzdHlsZSwgLi4ucmVzdH0pIHtcclxuICByZXR1cm4ge1xyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgc3R5bGUsXHJcbiAgICByZXN0XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wYWN0T2JqZWN0IChvYmopIHtcclxuICBjb25zdCBuZXdPYmogPSB7fVxyXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSAmJiBvYmpba2V5XSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvYmpba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU29ydGluZ0Rlc2MgKGQpIHtcclxuICByZXR1cm4gISEoZC5zb3J0ID09PSAnZGVzYycgfHwgZC5kZXNjID09PSB0cnVlIHx8IGQuYXNjID09PSBmYWxzZSlcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChDb21wLCBwYXJhbXMgPSB7fSwgZmFsbGJhY2sgPSBDb21wKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBDb21wID09PSAnZnVuY3Rpb24nID8gKFxyXG4gICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbXApLmlzUmVhY3RDb21wb25lbnQgPyAoXHJcbiAgICAgIDxDb21wXHJcbiAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgLz5cclxuICAgICkgOiBDb21wKHBhcmFtcylcclxuICApIDogZmFsbGJhY2tcclxufVxyXG4iXX0=