'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
// import _ from './utils'

var defaultButton = function defaultButton(props) {
  return _react2.default.createElement(
    'button',
    _extends({ type: 'button' }, props, { className: '-btn' }),
    props.children
  );
};

var ReactTablePagination = function (_Component) {
  _inherits(ReactTablePagination, _Component);

  function ReactTablePagination(props) {
    _classCallCheck(this, ReactTablePagination);

    var _this = _possibleConstructorReturn(this, (ReactTablePagination.__proto__ || Object.getPrototypeOf(ReactTablePagination)).call(this));

    _this.getSafePage = _this.getSafePage.bind(_this);
    _this.changePage = _this.changePage.bind(_this);
    _this.applyPage = _this.applyPage.bind(_this);

    _this.state = {
      page: props.page
    };
    return _this;
  }

  _createClass(ReactTablePagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ page: nextProps.page });
    }
  }, {
    key: 'getSafePage',
    value: function getSafePage(page) {
      if (isNaN(page)) {
        page = this.props.page;
      }
      return Math.min(Math.max(page, 0), this.props.pages - 1);
    }
  }, {
    key: 'changePage',
    value: function changePage(page) {
      page = this.getSafePage(page);
      this.setState({ page: page });
      if (this.props.page !== page) {
        this.props.onPageChange(page);
      }
    }
  }, {
    key: 'applyPage',
    value: function applyPage(e) {
      e && e.preventDefault();
      var page = this.state.page;
      this.changePage(page === '' ? this.props.page : page);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          pages = _props.pages,
          page = _props.page,
          showPageSizeOptions = _props.showPageSizeOptions,
          pageSizeOptions = _props.pageSizeOptions,
          pageSize = _props.pageSize,
          showPageJump = _props.showPageJump,
          canPrevious = _props.canPrevious,
          canNext = _props.canNext,
          onPageSizeChange = _props.onPageSizeChange,
          className = _props.className,
          _props$PreviousCompon = _props.PreviousComponent,
          PreviousComponent = _props$PreviousCompon === undefined ? defaultButton : _props$PreviousCompon,
          _props$NextComponent = _props.NextComponent,
          NextComponent = _props$NextComponent === undefined ? defaultButton : _props$NextComponent;


      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(className, '-pagination'),
          style: this.props.paginationStyle
        },
        _react2.default.createElement(
          'div',
          { className: '-previous' },
          _react2.default.createElement(
            PreviousComponent,
            {
              onClick: function onClick(e) {
                if (!canPrevious) return;
                _this2.changePage(page - 1);
              },
              disabled: !canPrevious
            },
            this.props.previousText
          )
        ),
        _react2.default.createElement(
          'div',
          { className: '-center' },
          _react2.default.createElement(
            'span',
            { className: '-pageInfo' },
            this.props.pageText,
            ' ',
            showPageJump ? _react2.default.createElement(
              'div',
              { className: '-pageJump' },
              _react2.default.createElement('input', {
                type: this.state.page === '' ? 'text' : 'number',
                onChange: function onChange(e) {
                  var val = e.target.value;
                  var page = val - 1;
                  if (val === '') {
                    return _this2.setState({ page: val });
                  }
                  _this2.setState({ page: _this2.getSafePage(page) });
                },
                value: this.state.page === '' ? '' : this.state.page + 1,
                onBlur: this.applyPage,
                onKeyPress: function onKeyPress(e) {
                  if (e.which === 13 || e.keyCode === 13) {
                    _this2.applyPage();
                  }
                }
              })
            ) : _react2.default.createElement(
              'span',
              { className: '-currentPage' },
              page + 1
            ),
            ' ',
            this.props.ofText,
            ' ',
            _react2.default.createElement(
              'span',
              { className: '-totalPages' },
              pages || 1
            )
          ),
          showPageSizeOptions && _react2.default.createElement(
            'span',
            { className: 'select-wrap -pageSizeOptions' },
            _react2.default.createElement(
              'select',
              {
                onChange: function onChange(e) {
                  return onPageSizeChange(Number(e.target.value));
                },
                value: pageSize
              },
              pageSizeOptions.map(function (option, i) {
                return _react2.default.createElement(
                  'option',
                  {
                    key: i,
                    value: option },
                  option,
                  ' ',
                  _this2.props.rowsText
                );
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: '-next' },
          _react2.default.createElement(
            NextComponent,
            {
              onClick: function onClick(e) {
                if (!canNext) return;
                _this2.changePage(page + 1);
              },
              disabled: !canNext
            },
            this.props.nextText
          )
        )
      );
    }
  }]);

  return ReactTablePagination;
}(_react.Component);

exports.default = ReactTablePagination;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRCdXR0b24iLCJwcm9wcyIsImNoaWxkcmVuIiwiUmVhY3RUYWJsZVBhZ2luYXRpb24iLCJnZXRTYWZlUGFnZSIsImJpbmQiLCJjaGFuZ2VQYWdlIiwiYXBwbHlQYWdlIiwic3RhdGUiLCJwYWdlIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJpc05hTiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJwYWdlcyIsIm9uUGFnZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNob3dQYWdlU2l6ZU9wdGlvbnMiLCJwYWdlU2l6ZU9wdGlvbnMiLCJwYWdlU2l6ZSIsInNob3dQYWdlSnVtcCIsImNhblByZXZpb3VzIiwiY2FuTmV4dCIsIm9uUGFnZVNpemVDaGFuZ2UiLCJjbGFzc05hbWUiLCJQcmV2aW91c0NvbXBvbmVudCIsIk5leHRDb21wb25lbnQiLCJwYWdpbmF0aW9uU3R5bGUiLCJwcmV2aW91c1RleHQiLCJwYWdlVGV4dCIsInZhbCIsInRhcmdldCIsInZhbHVlIiwid2hpY2giLCJrZXlDb2RlIiwib2ZUZXh0IiwiTnVtYmVyIiwibWFwIiwib3B0aW9uIiwiaSIsInJvd3NUZXh0IiwibmV4dFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQ3BCO0FBQUE7QUFBQSxlQUFRLE1BQUssUUFBYixJQUEwQkEsS0FBMUIsSUFBaUMsV0FBVSxNQUEzQztBQUFtREEsVUFBTUM7QUFBekQsR0FEb0I7QUFBQSxDQUF0Qjs7SUFJcUJDLG9COzs7QUFDbkIsZ0NBQWFGLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFHbEIsVUFBS0csV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsTUFB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LENBQVcwQztBQUh2QixpQkFERjtBQU9ELGVBUkE7QUFKSDtBQURGO0FBNUJKLFNBZkY7QUE2REU7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQ0U7QUFBQyx5QkFBRDtBQUFBO0FBQ0UsdUJBQVMsaUJBQUN6QixDQUFELEVBQU87QUFDZCxvQkFBSSxDQUFDTyxPQUFMLEVBQWM7QUFDZCx1QkFBS25CLFVBQUwsQ0FBZ0JHLE9BQU8sQ0FBdkI7QUFDRCxlQUpIO0FBS0Usd0JBQVUsQ0FBQ2dCO0FBTGI7QUFPRyxpQkFBS3hCLEtBQUwsQ0FBVzJDO0FBUGQ7QUFERjtBQTdERixPQURGO0FBMkVEOzs7Ozs7a0JBbklrQnpDLG9CIiwiZmlsZSI6InBhZ2luYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbi8vXHJcbi8vIGltcG9ydCBfIGZyb20gJy4vdXRpbHMnXHJcblxyXG5jb25zdCBkZWZhdWx0QnV0dG9uID0gKHByb3BzKSA9PiAoXHJcbiAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIHsuLi5wcm9wc30gY2xhc3NOYW1lPSctYnRuJz57cHJvcHMuY2hpbGRyZW59PC9idXR0b24+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VGFibGVQYWdpbmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICB0aGlzLmdldFNhZmVQYWdlID0gdGhpcy5nZXRTYWZlUGFnZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmNoYW5nZVBhZ2UgPSB0aGlzLmNoYW5nZVBhZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5hcHBseVBhZ2UgPSB0aGlzLmFwcGx5UGFnZS5iaW5kKHRoaXMpXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcGFnZTogcHJvcHMucGFnZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtwYWdlOiBuZXh0UHJvcHMucGFnZX0pXHJcbiAgfVxyXG5cclxuICBnZXRTYWZlUGFnZSAocGFnZSkge1xyXG4gICAgaWYgKGlzTmFOKHBhZ2UpKSB7XHJcbiAgICAgIHBhZ2UgPSB0aGlzLnByb3BzLnBhZ2VcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChwYWdlLCAwKSwgdGhpcy5wcm9wcy5wYWdlcyAtIDEpXHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYWdlIChwYWdlKSB7XHJcbiAgICBwYWdlID0gdGhpcy5nZXRTYWZlUGFnZShwYWdlKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFnZX0pXHJcbiAgICBpZiAodGhpcy5wcm9wcy5wYWdlICE9PSBwYWdlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlKHBhZ2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHBseVBhZ2UgKGUpIHtcclxuICAgIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBwYWdlID0gdGhpcy5zdGF0ZS5wYWdlXHJcbiAgICB0aGlzLmNoYW5nZVBhZ2UocGFnZSA9PT0gJycgPyB0aGlzLnByb3BzLnBhZ2UgOiBwYWdlKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgLy8gQ29tcHV0ZWRcclxuICAgICAgcGFnZXMsXHJcbiAgICAgIC8vIFByb3BzXHJcbiAgICAgIHBhZ2UsXHJcbiAgICAgIHNob3dQYWdlU2l6ZU9wdGlvbnMsXHJcbiAgICAgIHBhZ2VTaXplT3B0aW9ucyxcclxuICAgICAgcGFnZVNpemUsXHJcbiAgICAgIHNob3dQYWdlSnVtcCxcclxuICAgICAgY2FuUHJldmlvdXMsXHJcbiAgICAgIGNhbk5leHQsXHJcbiAgICAgIG9uUGFnZVNpemVDaGFuZ2UsXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgUHJldmlvdXNDb21wb25lbnQgPSBkZWZhdWx0QnV0dG9uLFxyXG4gICAgICBOZXh0Q29tcG9uZW50ID0gZGVmYXVsdEJ1dHRvblxyXG4gICAgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzTmFtZSwgJy1wYWdpbmF0aW9uJyl9XHJcbiAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMucGFnaW5hdGlvblN0eWxlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9Jy1wcmV2aW91cyc+XHJcbiAgICAgICAgICA8UHJldmlvdXNDb21wb25lbnRcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIWNhblByZXZpb3VzKSByZXR1cm5cclxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBhZ2UocGFnZSAtIDEpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshY2FuUHJldmlvdXN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnByZXZpb3VzVGV4dH1cclxuICAgICAgICAgIDwvUHJldmlvdXNDb21wb25lbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9Jy1jZW50ZXInPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSctcGFnZUluZm8nPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5wYWdlVGV4dH0ge3Nob3dQYWdlSnVtcCA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nLXBhZ2VKdW1wJz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXt0aGlzLnN0YXRlLnBhZ2UgPT09ICcnID8gJ3RleHQnIDogJ251bWJlcid9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSB2YWwgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtwYWdlOiB2YWx9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYWdlOiB0aGlzLmdldFNhZmVQYWdlKHBhZ2UpfSlcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFnZSA9PT0gJycgPyAnJyA6IHRoaXMuc3RhdGUucGFnZSArIDF9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5hcHBseVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5UGFnZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9Jy1jdXJyZW50UGFnZSc+e3BhZ2UgKyAxfTwvc3Bhbj5cclxuICAgICAgICAgICAgKX0ge3RoaXMucHJvcHMub2ZUZXh0fSA8c3BhbiBjbGFzc05hbWU9Jy10b3RhbFBhZ2VzJz57cGFnZXMgfHwgMX08L3NwYW4+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICB7c2hvd1BhZ2VTaXplT3B0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2VsZWN0LXdyYXAgLXBhZ2VTaXplT3B0aW9ucyc+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvblBhZ2VTaXplQ2hhbmdlKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwYWdlU2l6ZU9wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb259IHt0aGlzLnByb3BzLnJvd3NUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nLW5leHQnPlxyXG4gICAgICAgICAgPE5leHRDb21wb25lbnRcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIWNhbk5leHQpIHJldHVyblxyXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGFnZShwYWdlICsgMSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5OZXh0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5uZXh0VGV4dH1cclxuICAgICAgICAgIDwvTmV4dENvbXBvbmVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ==