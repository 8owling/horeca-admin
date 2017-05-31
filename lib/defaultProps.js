'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _pagination = require('./pagination');

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


var emptyObj = function emptyObj() {
  return {};
};

exports.default = {
  // General
  data: [],
  loading: false,
  showPagination: true,
  showPageSizeOptions: true,
  pageSizeOptions: [5, 10, 20, 25, 50, 100],
  defaultPageSize: 20,
  showPageJump: true,
  collapseOnSortingChange: true,
  collapseOnPageChange: true,
  collapseOnDataChange: true,
  freezeWhenExpanded: false,
  sortable: true,
  resizable: true,
  filterable: false,
  defaultSorted: [],
  defaultFiltered: [],
  defaultResized: [],
  defaultExpanded: {},
  defaultFilterMethod: function defaultFilterMethod(filter, row, column) {
    var id = filter.pivotId || filter.id;
    return row[id] !== undefined ? String(row[id]).startsWith(filter.value) : true;
  },
  defaultSortMethod: function defaultSortMethod(a, b) {
    // force null and undefined to the bottom
    a = a === null || a === undefined ? '' : a;
    b = b === null || b === undefined ? '' : b;
    // force any string values to lowercase
    a = typeof a === 'string' ? a.toLowerCase() : a;
    b = typeof b === 'string' ? b.toLowerCase() : b;
    // Return either 1 or -1 to indicate a sort priority
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // returning 0, undefined or any falsey value will use subsequent sorts or the index as a tiebreaker
    return 0;
  },

  // Controlled State Props
  // page: undefined,
  // pageSize: undefined,
  // sorted: [],
  // filtered: [],
  // resized: [],
  // expanded: {},

  // Controlled State Callbacks
  onPageChange: undefined,
  onPageSizeChange: undefined,
  onSortedChange: undefined,
  onFilteredChange: undefined,
  onResizedChange: undefined,
  onExpandedChange: undefined,

  // Pivoting
  pivotBy: undefined,

  // Key Constants
  pivotValKey: '_pivotVal',
  pivotIDKey: '_pivotID',
  subRowsKey: '_subRows',
  aggregatedKey: '_aggregated',
  nestingLevelKey: '_nestingLevel',
  originalKey: '_original',
  indexKey: '_index',
  groupedByPivotKey: '_groupedByPivot',

  // Server-side Callbacks
  onFetchData: function onFetchData() {
    return null;
  },

  // Classes
  className: '',
  style: {},

  // Component decorators
  getProps: emptyObj,
  getTableProps: emptyObj,
  getTheadGroupProps: emptyObj,
  getTheadGroupTrProps: emptyObj,
  getTheadGroupThProps: emptyObj,
  getTheadProps: emptyObj,
  getTheadTrProps: emptyObj,
  getTheadThProps: emptyObj,
  getTheadFilterProps: emptyObj,
  getTheadFilterTrProps: emptyObj,
  getTheadFilterThProps: emptyObj,
  getTbodyProps: emptyObj,
  getTrGroupProps: emptyObj,
  getTrProps: emptyObj,
  getTdProps: emptyObj,
  getTfootProps: emptyObj,
  getTfootTrProps: emptyObj,
  getTfootTdProps: emptyObj,
  getPaginationProps: emptyObj,
  getLoadingProps: emptyObj,
  getNoDataProps: emptyObj,
  getResizerProps: emptyObj,

  // Global Column Defaults
  column: {
    // Renderers
    Cell: undefined,
    Header: undefined,
    Footer: undefined,
    Aggregated: undefined,
    Pivot: undefined,
    PivotValue: undefined,
    Expander: undefined,
    Filter: undefined,
    // All Columns
    sortable: undefined, // use table default
    resizable: undefined, // use table default
    filterable: undefined, // use table default
    show: true,
    minWidth: 100,
    // Cells only
    className: '',
    style: {},
    getProps: emptyObj,
    // Pivot only
    aggregate: undefined,
    // Headers only
    headerClassName: '',
    headerStyle: {},
    getHeaderProps: emptyObj,
    // Footers only
    footerClassName: '',
    footerStyle: {},
    getFooterProps: emptyObj,
    filterMethod: undefined,
    sortMethod: undefined
  },

  // Global Expander Column Defaults
  expanderDefaults: {
    sortable: false,
    resizable: false,
    filterable: false,
    width: 35
  },

  pivotDefaults: {
    // extend the defaults for pivoted columns here
  },

  // Text
  previousText: 'Previous',
  nextText: 'Next',
  loadingText: 'Loading...',
  noDataText: 'No rows found',
  pageText: 'Page',
  ofText: 'of',
  rowsText: 'rows',

  // Components
  TableComponent: _utils2.default.makeTemplateComponent('rt-table'),
  TheadComponent: _utils2.default.makeTemplateComponent('rt-thead'),
  TbodyComponent: _utils2.default.makeTemplateComponent('rt-tbody'),
  TrGroupComponent: _utils2.default.makeTemplateComponent('rt-tr-group'),
  TrComponent: _utils2.default.makeTemplateComponent('rt-tr'),
  ThComponent: function ThComponent(_ref) {
    var toggleSort = _ref.toggleSort,
        className = _ref.className,
        children = _ref.children,
        rest = _objectWithoutProperties(_ref, ['toggleSort', 'className', 'children']);

    return _react2.default.createElement(
      'div',
      _extends({
        className: (0, _classnames2.default)(className, 'rt-th'),
        onClick: function onClick(e) {
          toggleSort && toggleSort(e);
        }
      }, rest),
      children
    );
  },
  TdComponent: _utils2.default.makeTemplateComponent('rt-td'),
  TfootComponent: _utils2.default.makeTemplateComponent('rt-tfoot'),
  FilterComponent: function FilterComponent(_ref2) {
    var filter = _ref2.filter,
        _onChange = _ref2.onChange;
    return _react2.default.createElement('input', { type: 'text',
      style: {
        width: '100%'
      },
      value: filter ? filter.value : '',
      onChange: function onChange(event) {
        return _onChange(event.target.value);
      }
    });
  },
  ExpanderComponent: function ExpanderComponent(_ref3) {
    var isExpanded = _ref3.isExpanded;
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('rt-expander', isExpanded && '-open') },
      '\u2022'
    );
  },
  PivotValueComponent: function PivotValueComponent(_ref4) {
    var subRows = _ref4.subRows,
        value = _ref4.value;
    return _react2.default.createElement(
      'span',
      null,
      value,
      ' ',
      subRows && '(' + subRows.length + ')'
    );
  },
  AggregatedComponent: function AggregatedComponent(_ref5) {
    var subRows = _ref5.subRows,
        column = _ref5.column;

    var previewValues = subRows.filter(function (d) {
      return typeof d[column.id] !== 'undefined';
    }).map(function (row, i) {
      return _react2.default.createElement(
        'span',
        { key: i },
        row[column.id],
        i < subRows.length - 1 ? ', ' : ''
      );
    });
    return _react2.default.createElement(
      'span',
      null,
      previewValues
    );
  },
  PivotComponent: undefined, // this is a computed default generated using
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: _pagination2.default,
  PreviousComponent: undefined,
  NextComponent: undefined,
  LoadingComponent: function LoadingComponent(_ref6) {
    var className = _ref6.className,
        loading = _ref6.loading,
        loadingText = _ref6.loadingText,
        rest = _objectWithoutProperties(_ref6, ['className', 'loading', 'loadingText']);

    return _react2.default.createElement(
      'div',
      _extends({ className: (0, _classnames2.default)('-loading', { '-active': loading }, className)
      }, rest),
      _react2.default.createElement(
        'div',
        { className: '-loading-inner' },
        loadingText
      )
    );
  },
  NoDataComponent: _utils2.default.makeTemplateComponent('rt-noData'),
  ResizerComponent: _utils2.default.makeTemplateComponent('rt-resizer')
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0UHJvcHMuanMiXSwibmFtZXMiOlsiZW1wdHlPYmoiLCJkYXRhIiwibG9hZGluZyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2VTaXplT3B0aW9ucyIsInBhZ2VTaXplT3B0aW9ucyIsImRlZmF1bHRQYWdlU2l6ZSIsInNob3dQYWdlSnVtcCIsImNvbGxhcHNlT25Tb3J0aW5nQ2hhbmdlIiwiY29sbGFwc2VPblBhZ2VDaGFuZ2UiLCJjb2xsYXBzZU9uRGF0YUNoYW5nZSIsImZyZWV6ZVdoZW5FeHBhbmRlZCIsInNvcnRhYmxlIiwicmVzaXphYmxlIiwiZmlsdGVyYWJsZSIsImRlZmF1bHRTb3J0ZWQiLCJkZWZhdWx0RmlsdGVyZWQiLCJkZWZhdWx0UmVzaXplZCIsImRlZmF1bHRFeHBhbmRlZCIsImRlZmF1bHRGaWx0ZXJNZXRob2QiLCJmaWx0ZXIiLCJyb3ciLCJjb2x1bW4iLCJpZCIsInBpdm90SWQiLCJ1bmRlZmluZWQiLCJTdHJpbmciLCJzdGFydHNXaXRoIiwidmFsdWUiLCJkZWZhdWx0U29ydE1ldGhvZCIsImEiLCJiIiwidG9Mb3dlckNhc2UiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwib25Tb3J0ZWRDaGFuZ2UiLCJvbkZpbHRlcmVkQ2hhbmdlIiwib25SZXNpemVkQ2hhbmdlIiwib25FeHBhbmRlZENoYW5nZSIsInBpdm90QnkiLCJwaXZvdFZhbEtleSIsInBpdm90SURLZXkiLCJzdWJSb3dzS2V5IiwiYWdncmVnYXRlZEtleSIsIm5lc3RpbmdMZXZlbEtleSIsIm9yaWdpbmFsS2V5IiwiaW5kZXhLZXkiLCJncm91cGVkQnlQaXZvdEtleSIsIm9uRmV0Y2hEYXRhIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJnZXRQcm9wcyIsImdldFRhYmxlUHJvcHMiLCJnZXRUaGVhZEdyb3VwUHJvcHMiLCJnZXRUaGVhZEdyb3VwVHJQcm9wcyIsImdldFRoZWFkR3JvdXBUaFByb3BzIiwiZ2V0VGhlYWRQcm9wcyIsImdldFRoZWFkVHJQcm9wcyIsImdldFRoZWFkVGhQcm9wcyIsImdldFRoZWFkRmlsdGVyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRoUHJvcHMiLCJnZXRUYm9keVByb3BzIiwiZ2V0VHJHcm91cFByb3BzIiwiZ2V0VHJQcm9wcyIsImdldFRkUHJvcHMiLCJnZXRUZm9vdFByb3BzIiwiZ2V0VGZvb3RUclByb3BzIiwiZ2V0VGZvb3RUZFByb3BzIiwiZ2V0UGFnaW5hdGlvblByb3BzIiwiZ2V0TG9hZGluZ1Byb3BzIiwiZ2V0Tm9EYXRhUHJvcHMiLCJnZXRSZXNpemVyUHJvcHMiLCJDZWxsIiwiSGVhZGVyIiwiRm9vdGVyIiwiQWdncmVnYXRlZCIsIlBpdm90IiwiUGl2b3RWYWx1ZSIsIkV4cGFuZGVyIiwiRmlsdGVyIiwic2hvdyIsIm1pbldpZHRoIiwiYWdncmVnYXRlIiwiaGVhZGVyQ2xhc3NOYW1lIiwiaGVhZGVyU3R5bGUiLCJnZXRIZWFkZXJQcm9wcyIsImZvb3RlckNsYXNzTmFtZSIsImZvb3RlclN0eWxlIiwiZ2V0Rm9vdGVyUHJvcHMiLCJmaWx0ZXJNZXRob2QiLCJzb3J0TWV0aG9kIiwiZXhwYW5kZXJEZWZhdWx0cyIsIndpZHRoIiwicGl2b3REZWZhdWx0cyIsInByZXZpb3VzVGV4dCIsIm5leHRUZXh0IiwibG9hZGluZ1RleHQiLCJub0RhdGFUZXh0IiwicGFnZVRleHQiLCJvZlRleHQiLCJyb3dzVGV4dCIsIlRhYmxlQ29tcG9uZW50IiwibWFrZVRlbXBsYXRlQ29tcG9uZW50IiwiVGhlYWRDb21wb25lbnQiLCJUYm9keUNvbXBvbmVudCIsIlRyR3JvdXBDb21wb25lbnQiLCJUckNvbXBvbmVudCIsIlRoQ29tcG9uZW50IiwidG9nZ2xlU29ydCIsImNoaWxkcmVuIiwicmVzdCIsImUiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50Iiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIkV4cGFuZGVyQ29tcG9uZW50IiwiaXNFeHBhbmRlZCIsIlBpdm90VmFsdWVDb21wb25lbnQiLCJzdWJSb3dzIiwibGVuZ3RoIiwiQWdncmVnYXRlZENvbXBvbmVudCIsInByZXZpZXdWYWx1ZXMiLCJkIiwibWFwIiwiaSIsIlBpdm90Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIlByZXZpb3VzQ29tcG9uZW50IiwiTmV4dENvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7O0FBRkE7OztBQUlBLElBQU1BLFdBQVcsU0FBWEEsUUFBVztBQUFBLFNBQU8sRUFBUDtBQUFBLENBQWpCOztrQkFFZTtBQUNiO0FBQ0FDLFFBQU0sRUFGTztBQUdiQyxXQUFTLEtBSEk7QUFJYkMsa0JBQWdCLElBSkg7QUFLYkMsdUJBQXFCLElBTFI7QUFNYkMsbUJBQWlCLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksRUFBWixFQUFnQixFQUFoQixFQUFvQixHQUFwQixDQU5KO0FBT2JDLG1CQUFpQixFQVBKO0FBUWJDLGdCQUFjLElBUkQ7QUFTYkMsMkJBQXlCLElBVFo7QUFVYkMsd0JBQXNCLElBVlQ7QUFXYkMsd0JBQXNCLElBWFQ7QUFZYkMsc0JBQW9CLEtBWlA7QUFhYkMsWUFBVSxJQWJHO0FBY2JDLGFBQVcsSUFkRTtBQWViQyxjQUFZLEtBZkM7QUFnQmJDLGlCQUFlLEVBaEJGO0FBaUJiQyxtQkFBaUIsRUFqQko7QUFrQmJDLGtCQUFnQixFQWxCSDtBQW1CYkMsbUJBQWlCLEVBbkJKO0FBb0JiQyx1QkFBcUIsNkJBQUNDLE1BQUQsRUFBU0MsR0FBVCxFQUFjQyxNQUFkLEVBQXlCO0FBQzVDLFFBQU1DLEtBQUtILE9BQU9JLE9BQVAsSUFBa0JKLE9BQU9HLEVBQXBDO0FBQ0EsV0FBT0YsSUFBSUUsRUFBSixNQUFZRSxTQUFaLEdBQXdCQyxP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QUFPQyxFQUFULENBQVAsS0FBd0IsV0FBN0I7QUFBQSxLQURZLEVBRW5Cd0csR0FGbUIsQ0FFZixVQUFDMUcsR0FBRCxFQUFNMkcsQ0FBTjtBQUFBLGFBQ0g7QUFBQTtBQUFBLFVBQU0sS0FBS0EsQ0FBWDtBQUFlM0csWUFBSUMsT0FBT0MsRUFBWCxDQUFmO0FBQStCeUcsWUFBSU4sUUFBUUMsTUFBUixHQUFpQixDQUFyQixHQUF5QixJQUF6QixHQUFnQztBQUEvRCxPQURHO0FBQUEsS0FGZSxDQUF0QjtBQUtBLFdBQ0U7QUFBQTtBQUFBO0FBQU9FO0FBQVAsS0FERjtBQUdELEdBN01ZO0FBOE1iSSxrQkFBZ0J4RyxTQTlNSCxFQThNYztBQUMzQjtBQUNBeUcsMkNBaE5hO0FBaU5iQyxxQkFBbUIxRyxTQWpOTjtBQWtOYjJHLGlCQUFlM0csU0FsTkY7QUFtTmI0RyxvQkFBa0I7QUFBQSxRQUFFcEYsU0FBRixTQUFFQSxTQUFGO0FBQUEsUUFBYS9DLE9BQWIsU0FBYUEsT0FBYjtBQUFBLFFBQXNCK0YsV0FBdEIsU0FBc0JBLFdBQXRCO0FBQUEsUUFBc0NjLElBQXRDOztBQUFBLFdBQ2hCO0FBQUE7QUFBQSxpQkFBSyxXQUFXLDBCQUNkLFVBRGMsRUFFZCxFQUFDLFdBQVc3RyxPQUFaLEVBRmMsRUFHZCtDLFNBSGM7QUFBaEIsU0FLTThELElBTE47QUFPRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGdCQUFmO0FBQ0dkO0FBREg7QUFQRixLQURnQjtBQUFBLEdBbk5MO0FBZ09icUMsbUJBQWlCLGdCQUFFL0IscUJBQUYsQ0FBd0IsV0FBeEIsQ0FoT0o7QUFpT2JnQyxvQkFBa0IsZ0JBQUVoQyxxQkFBRixDQUF3QixZQUF4QjtBQWpPTCxDIiwiZmlsZSI6ImRlZmF1bHRQcm9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuLy9cclxuaW1wb3J0IF8gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uJ1xyXG5cclxuY29uc3QgZW1wdHlPYmogPSAoKSA9PiAoe30pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gR2VuZXJhbFxyXG4gIGRhdGE6IFtdLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIHNob3dQYWdpbmF0aW9uOiB0cnVlLFxyXG4gIHNob3dQYWdlU2l6ZU9wdGlvbnM6IHRydWUsXHJcbiAgcGFnZVNpemVPcHRpb25zOiBbNSwgMTAsIDIwLCAyNSwgNTAsIDEwMF0sXHJcbiAgZGVmYXVsdFBhZ2VTaXplOiAyMCxcclxuICBzaG93UGFnZUp1bXA6IHRydWUsXHJcbiAgY29sbGFwc2VPblNvcnRpbmdDaGFuZ2U6IHRydWUsXHJcbiAgY29sbGFwc2VPblBhZ2VDaGFuZ2U6IHRydWUsXHJcbiAgY29sbGFwc2VPbkRhdGFDaGFuZ2U6IHRydWUsXHJcbiAgZnJlZXplV2hlbkV4cGFuZGVkOiBmYWxzZSxcclxuICBzb3J0YWJsZTogdHJ1ZSxcclxuICByZXNpemFibGU6IHRydWUsXHJcbiAgZmlsdGVyYWJsZTogZmFsc2UsXHJcbiAgZGVmYXVsdFNvcnRlZDogW10sXHJcbiAgZGVmYXVsdEZpbHRlcmVkOiBbXSxcclxuICBkZWZhdWx0UmVzaXplZDogW10sXHJcbiAgZGVmYXVsdEV4cGFuZGVkOiB7fSxcclxuICBkZWZhdWx0RmlsdGVyTWV0aG9kOiAoZmlsdGVyLCByb3csIGNvbHVtbikgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBmaWx0ZXIucGl2b3RJZCB8fCBmaWx0ZXIuaWRcclxuICAgIHJldHVybiByb3dbaWRdICE9PSB1bmRlZmluZWQgPyBTdHJpbmcocm93W2lkXSkuc3RhcnRzV2l0aChmaWx0ZXIudmFsdWUpIDogdHJ1ZVxyXG4gIH0sXHJcbiAgZGVmYXVsdFNvcnRNZXRob2Q6IChhLCBiKSA9PiB7XHJcbiAgICAvLyBmb3JjZSBudWxsIGFuZCB1bmRlZmluZWQgdG8gdGhlIGJvdHRvbVxyXG4gICAgYSA9IChhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZCkgPyAnJyA6IGFcclxuICAgIGIgPSAoYiA9PT0gbnVsbCB8fCBiID09PSB1bmRlZmluZWQpID8gJycgOiBiXHJcbiAgICAvLyBmb3JjZSBhbnkgc3RyaW5nIHZhbHVlcyB0byBsb3dlcmNhc2VcclxuICAgIGEgPSB0eXBlb2YgYSA9PT0gJ3N0cmluZycgPyBhLnRvTG93ZXJDYXNlKCkgOiBhXHJcbiAgICBiID0gdHlwZW9mIGIgPT09ICdzdHJpbmcnID8gYi50b0xvd2VyQ2FzZSgpIDogYlxyXG4gICAgLy8gUmV0dXJuIGVpdGhlciAxIG9yIC0xIHRvIGluZGljYXRlIGEgc29ydCBwcmlvcml0eVxyXG4gICAgaWYgKGEgPiBiKSB7XHJcbiAgICAgIHJldHVybiAxXHJcbiAgICB9XHJcbiAgICBpZiAoYSA8IGIpIHtcclxuICAgICAgcmV0dXJuIC0xXHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm5pbmcgMCwgdW5kZWZpbmVkIG9yIGFueSBmYWxzZXkgdmFsdWUgd2lsbCB1c2Ugc3Vic2VxdWVudCBzb3J0cyBvciB0aGUgaW5kZXggYXMgYSB0aWVicmVha2VyXHJcbiAgICByZXR1cm4gMFxyXG4gIH0sXHJcblxyXG4gIC8vIENvbnRyb2xsZWQgU3RhdGUgUHJvcHNcclxuICAvLyBwYWdlOiB1bmRlZmluZWQsXHJcbiAgLy8gcGFnZVNpemU6IHVuZGVmaW5lZCxcclxuICAvLyBzb3J0ZWQ6IFtdLFxyXG4gIC8vIGZpbHRlcmVkOiBbXSxcclxuICAvLyByZXNpemVkOiBbXSxcclxuICAvLyBleHBhbmRlZDoge30sXHJcblxyXG4gIC8vIENvbnRyb2xsZWQgU3RhdGUgQ2FsbGJhY2tzXHJcbiAgb25QYWdlQ2hhbmdlOiB1bmRlZmluZWQsXHJcbiAgb25QYWdlU2l6ZUNoYW5nZTogdW5kZWZpbmVkLFxyXG4gIG9uU29ydGVkQ2hhbmdlOiB1bmRlZmluZWQsXHJcbiAgb25GaWx0ZXJlZENoYW5nZTogdW5kZWZpbmVkLFxyXG4gIG9uUmVzaXplZENoYW5nZTogdW5kZWZpbmVkLFxyXG4gIG9uRXhwYW5kZWRDaGFuZ2U6IHVuZGVmaW5lZCxcclxuXHJcbiAgLy8gUGl2b3RpbmdcclxuICBwaXZvdEJ5OiB1bmRlZmluZWQsXHJcblxyXG4gIC8vIEtleSBDb25zdGFudHNcclxuICBwaXZvdFZhbEtleTogJ19waXZvdFZhbCcsXHJcbiAgcGl2b3RJREtleTogJ19waXZvdElEJyxcclxuICBzdWJSb3dzS2V5OiAnX3N1YlJvd3MnLFxyXG4gIGFnZ3JlZ2F0ZWRLZXk6ICdfYWdncmVnYXRlZCcsXHJcbiAgbmVzdGluZ0xldmVsS2V5OiAnX25lc3RpbmdMZXZlbCcsXHJcbiAgb3JpZ2luYWxLZXk6ICdfb3JpZ2luYWwnLFxyXG4gIGluZGV4S2V5OiAnX2luZGV4JyxcclxuICBncm91cGVkQnlQaXZvdEtleTogJ19ncm91cGVkQnlQaXZvdCcsXHJcblxyXG4gIC8vIFNlcnZlci1zaWRlIENhbGxiYWNrc1xyXG4gIG9uRmV0Y2hEYXRhOiAoKSA9PiBudWxsLFxyXG5cclxuICAvLyBDbGFzc2VzXHJcbiAgY2xhc3NOYW1lOiAnJyxcclxuICBzdHlsZToge30sXHJcblxyXG4gIC8vIENvbXBvbmVudCBkZWNvcmF0b3JzXHJcbiAgZ2V0UHJvcHM6IGVtcHR5T2JqLFxyXG4gIGdldFRhYmxlUHJvcHM6IGVtcHR5T2JqLFxyXG4gIGdldFRoZWFkR3JvdXBQcm9wczogZW1wdHlPYmosXHJcbiAgZ2V0VGhlYWRHcm91cFRyUHJvcHM6IGVtcHR5T2JqLFxyXG4gIGdldFRoZWFkR3JvdXBUaFByb3BzOiBlbXB0eU9iaixcclxuICBnZXRUaGVhZFByb3BzOiBlbXB0eU9iaixcclxuICBnZXRUaGVhZFRyUHJvcHM6IGVtcHR5T2JqLFxyXG4gIGdldFRoZWFkVGhQcm9wczogZW1wdHlPYmosXHJcbiAgZ2V0VGhlYWRGaWx0ZXJQcm9wczogZW1wdHlPYmosXHJcbiAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzOiBlbXB0eU9iaixcclxuICBnZXRUaGVhZEZpbHRlclRoUHJvcHM6IGVtcHR5T2JqLFxyXG4gIGdldFRib2R5UHJvcHM6IGVtcHR5T2JqLFxyXG4gIGdldFRyR3JvdXBQcm9wczogZW1wdHlPYmosXHJcbiAgZ2V0VHJQcm9wczogZW1wdHlPYmosXHJcbiAgZ2V0VGRQcm9wczogZW1wdHlPYmosXHJcbiAgZ2V0VGZvb3RQcm9wczogZW1wdHlPYmosXHJcbiAgZ2V0VGZvb3RUclByb3BzOiBlbXB0eU9iaixcclxuICBnZXRUZm9vdFRkUHJvcHM6IGVtcHR5T2JqLFxyXG4gIGdldFBhZ2luYXRpb25Qcm9wczogZW1wdHlPYmosXHJcbiAgZ2V0TG9hZGluZ1Byb3BzOiBlbXB0eU9iaixcclxuICBnZXROb0RhdGFQcm9wczogZW1wdHlPYmosXHJcbiAgZ2V0UmVzaXplclByb3BzOiBlbXB0eU9iaixcclxuXHJcbiAgLy8gR2xvYmFsIENvbHVtbiBEZWZhdWx0c1xyXG4gIGNvbHVtbjoge1xyXG4gICAgLy8gUmVuZGVyZXJzXHJcbiAgICBDZWxsOiB1bmRlZmluZWQsXHJcbiAgICBIZWFkZXI6IHVuZGVmaW5lZCxcclxuICAgIEZvb3RlcjogdW5kZWZpbmVkLFxyXG4gICAgQWdncmVnYXRlZDogdW5kZWZpbmVkLFxyXG4gICAgUGl2b3Q6IHVuZGVmaW5lZCxcclxuICAgIFBpdm90VmFsdWU6IHVuZGVmaW5lZCxcclxuICAgIEV4cGFuZGVyOiB1bmRlZmluZWQsXHJcbiAgICBGaWx0ZXI6IHVuZGVmaW5lZCxcclxuICAgIC8vIEFsbCBDb2x1bW5zXHJcbiAgICBzb3J0YWJsZTogdW5kZWZpbmVkLCAvLyB1c2UgdGFibGUgZGVmYXVsdFxyXG4gICAgcmVzaXphYmxlOiB1bmRlZmluZWQsIC8vIHVzZSB0YWJsZSBkZWZhdWx0XHJcbiAgICBmaWx0ZXJhYmxlOiB1bmRlZmluZWQsIC8vIHVzZSB0YWJsZSBkZWZhdWx0XHJcbiAgICBzaG93OiB0cnVlLFxyXG4gICAgbWluV2lkdGg6IDEwMCxcclxuICAgIC8vIENlbGxzIG9ubHlcclxuICAgIGNsYXNzTmFtZTogJycsXHJcbiAgICBzdHlsZToge30sXHJcbiAgICBnZXRQcm9wczogZW1wdHlPYmosXHJcbiAgICAvLyBQaXZvdCBvbmx5XHJcbiAgICBhZ2dyZWdhdGU6IHVuZGVmaW5lZCxcclxuICAgIC8vIEhlYWRlcnMgb25seVxyXG4gICAgaGVhZGVyQ2xhc3NOYW1lOiAnJyxcclxuICAgIGhlYWRlclN0eWxlOiB7fSxcclxuICAgIGdldEhlYWRlclByb3BzOiBlbXB0eU9iaixcclxuICAgIC8vIEZvb3RlcnMgb25seVxyXG4gICAgZm9vdGVyQ2xhc3NOYW1lOiAnJyxcclxuICAgIGZvb3RlclN0eWxlOiB7fSxcclxuICAgIGdldEZvb3RlclByb3BzOiBlbXB0eU9iaixcclxuICAgIGZpbHRlck1ldGhvZDogdW5kZWZpbmVkLFxyXG4gICAgc29ydE1ldGhvZDogdW5kZWZpbmVkXHJcbiAgfSxcclxuXHJcbiAgLy8gR2xvYmFsIEV4cGFuZGVyIENvbHVtbiBEZWZhdWx0c1xyXG4gIGV4cGFuZGVyRGVmYXVsdHM6IHtcclxuICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgIHJlc2l6YWJsZTogZmFsc2UsXHJcbiAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcclxuICAgIHdpZHRoOiAzNVxyXG4gIH0sXHJcblxyXG4gIHBpdm90RGVmYXVsdHM6IHtcclxuICAgIC8vIGV4dGVuZCB0aGUgZGVmYXVsdHMgZm9yIHBpdm90ZWQgY29sdW1ucyBoZXJlXHJcbiAgfSxcclxuXHJcbiAgLy8gVGV4dFxyXG4gIHByZXZpb3VzVGV4dDogJ1ByZXZpb3VzJyxcclxuICBuZXh0VGV4dDogJ05leHQnLFxyXG4gIGxvYWRpbmdUZXh0OiAnTG9hZGluZy4uLicsXHJcbiAgbm9EYXRhVGV4dDogJ05vIHJvd3MgZm91bmQnLFxyXG4gIHBhZ2VUZXh0OiAnUGFnZScsXHJcbiAgb2ZUZXh0OiAnb2YnLFxyXG4gIHJvd3NUZXh0OiAncm93cycsXHJcblxyXG4gIC8vIENvbXBvbmVudHNcclxuICBUYWJsZUNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXRhYmxlJyksXHJcbiAgVGhlYWRDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10aGVhZCcpLFxyXG4gIFRib2R5Q29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGJvZHknKSxcclxuICBUckdyb3VwQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdHItZ3JvdXAnKSxcclxuICBUckNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXRyJyksXHJcbiAgVGhDb21wb25lbnQ6ICh7dG9nZ2xlU29ydCwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucmVzdH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NOYW1lLCAncnQtdGgnKX1cclxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgIHRvZ2dsZVNvcnQgJiYgdG9nZ2xlU29ydChlKVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH0sXHJcbiAgVGRDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10ZCcpLFxyXG4gIFRmb290Q29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGZvb3QnKSxcclxuICBGaWx0ZXJDb21wb25lbnQ6ICh7ZmlsdGVyLCBvbkNoYW5nZX0pID0+IChcclxuICAgIDxpbnB1dCB0eXBlPSd0ZXh0J1xyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgICAgfX1cclxuICAgICAgdmFsdWU9e2ZpbHRlciA/IGZpbHRlci52YWx1ZSA6ICcnfVxyXG4gICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgLz5cclxuICApLFxyXG4gIEV4cGFuZGVyQ29tcG9uZW50OiAoe2lzRXhwYW5kZWR9KSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncnQtZXhwYW5kZXInLCBpc0V4cGFuZGVkICYmICctb3BlbicpfT5cclxuICAgICAgJmJ1bGw7XHJcbiAgICA8L2Rpdj5cclxuICApLFxyXG4gIFBpdm90VmFsdWVDb21wb25lbnQ6ICh7c3ViUm93cywgdmFsdWV9KSA9PiAoXHJcbiAgICA8c3Bhbj57dmFsdWV9IHtzdWJSb3dzICYmIGAoJHtzdWJSb3dzLmxlbmd0aH0pYH08L3NwYW4+XHJcbiAgKSxcclxuICBBZ2dyZWdhdGVkQ29tcG9uZW50OiAoe3N1YlJvd3MsIGNvbHVtbn0pID0+IHtcclxuICAgIGNvbnN0IHByZXZpZXdWYWx1ZXMgPSBzdWJSb3dzXHJcbiAgICAgIC5maWx0ZXIoZCA9PiB0eXBlb2YgZFtjb2x1bW4uaWRdICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgLm1hcCgocm93LCBpKSA9PiAoXHJcbiAgICAgICAgPHNwYW4ga2V5PXtpfT57cm93W2NvbHVtbi5pZF19e2kgPCBzdWJSb3dzLmxlbmd0aCAtIDEgPyAnLCAnIDogJyd9PC9zcGFuPlxyXG4gICAgICApKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4+e3ByZXZpZXdWYWx1ZXN9PC9zcGFuPlxyXG4gICAgKVxyXG4gIH0sXHJcbiAgUGl2b3RDb21wb25lbnQ6IHVuZGVmaW5lZCwgLy8gdGhpcyBpcyBhIGNvbXB1dGVkIGRlZmF1bHQgZ2VuZXJhdGVkIHVzaW5nXHJcbiAgLy8gdGhlIEV4cGFuZGVyQ29tcG9uZW50IGFuZCBQaXZvdFZhbHVlQ29tcG9uZW50IGF0IHJ1bi10aW1lIGluIG1ldGhvZHMuanNcclxuICBQYWdpbmF0aW9uQ29tcG9uZW50OiBQYWdpbmF0aW9uLFxyXG4gIFByZXZpb3VzQ29tcG9uZW50OiB1bmRlZmluZWQsXHJcbiAgTmV4dENvbXBvbmVudDogdW5kZWZpbmVkLFxyXG4gIExvYWRpbmdDb21wb25lbnQ6ICh7Y2xhc3NOYW1lLCBsb2FkaW5nLCBsb2FkaW5nVGV4dCwgLi4ucmVzdH0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAnLWxvYWRpbmcnLFxyXG4gICAgICB7Jy1hY3RpdmUnOiBsb2FkaW5nfSxcclxuICAgICAgY2xhc3NOYW1lXHJcbiAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9Jy1sb2FkaW5nLWlubmVyJz5cclxuICAgICAgICB7bG9hZGluZ1RleHR9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKSxcclxuICBOb0RhdGFDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC1ub0RhdGEnKSxcclxuICBSZXNpemVyQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtcmVzaXplcicpXHJcbn1cclxuIl19