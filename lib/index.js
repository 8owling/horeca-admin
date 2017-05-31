'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactTableDefaults = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _lifecycle = require('./lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _methods = require('./methods');

var _methods2 = _interopRequireDefault(_methods);

var _defaultProps = require('./defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var ReactTableDefaults = exports.ReactTableDefaults = _defaultProps2.default;

var ReactTable = function (_Methods) {
  _inherits(ReactTable, _Methods);

  function ReactTable(props) {
    _classCallCheck(this, ReactTable);

    var _this = _possibleConstructorReturn(this, (ReactTable.__proto__ || Object.getPrototypeOf(ReactTable)).call(this));

    _this.getResolvedState = _this.getResolvedState.bind(_this);
    _this.getDataModel = _this.getDataModel.bind(_this);
    _this.getSortedData = _this.getSortedData.bind(_this);
    _this.fireFetchData = _this.fireFetchData.bind(_this);
    _this.getPropOrState = _this.getPropOrState.bind(_this);
    _this.getStateOrProp = _this.getStateOrProp.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.sortData = _this.sortData.bind(_this);
    _this.getMinRows = _this.getMinRows.bind(_this);
    _this.onPageChange = _this.onPageChange.bind(_this);
    _this.onPageSizeChange = _this.onPageSizeChange.bind(_this);
    _this.sortColumn = _this.sortColumn.bind(_this);
    _this.filterColumn = _this.filterColumn.bind(_this);
    _this.resizeColumnStart = _this.resizeColumnStart.bind(_this);
    _this.resizeColumnEnd = _this.resizeColumnEnd.bind(_this);
    _this.resizeColumnMoving = _this.resizeColumnMoving.bind(_this);

    _this.state = {
      page: 0,
      pageSize: props.defaultPageSize,
      sorted: props.defaultSorted,
      expanded: props.defaultExpanded,
      filtered: props.defaultFiltered,
      resized: props.defaultResized,
      currentlyResizing: false,
      skipNextSort: false
    };
    return _this;
  }

  _createClass(ReactTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var resolvedState = this.getResolvedState();
      var children = resolvedState.children,
          className = resolvedState.className,
          style = resolvedState.style,
          getProps = resolvedState.getProps,
          getTableProps = resolvedState.getTableProps,
          getTheadGroupProps = resolvedState.getTheadGroupProps,
          getTheadGroupTrProps = resolvedState.getTheadGroupTrProps,
          getTheadGroupThProps = resolvedState.getTheadGroupThProps,
          getTheadProps = resolvedState.getTheadProps,
          getTheadTrProps = resolvedState.getTheadTrProps,
          getTheadThProps = resolvedState.getTheadThProps,
          getTheadFilterProps = resolvedState.getTheadFilterProps,
          getTheadFilterTrProps = resolvedState.getTheadFilterTrProps,
          getTheadFilterThProps = resolvedState.getTheadFilterThProps,
          getTbodyProps = resolvedState.getTbodyProps,
          getTrGroupProps = resolvedState.getTrGroupProps,
          getTrProps = resolvedState.getTrProps,
          getTdProps = resolvedState.getTdProps,
          getTfootProps = resolvedState.getTfootProps,
          getTfootTrProps = resolvedState.getTfootTrProps,
          getTfootTdProps = resolvedState.getTfootTdProps,
          getPaginationProps = resolvedState.getPaginationProps,
          getLoadingProps = resolvedState.getLoadingProps,
          getNoDataProps = resolvedState.getNoDataProps,
          getResizerProps = resolvedState.getResizerProps,
          showPagination = resolvedState.showPagination,
          manual = resolvedState.manual,
          loadingText = resolvedState.loadingText,
          noDataText = resolvedState.noDataText,
          sortable = resolvedState.sortable,
          resizable = resolvedState.resizable,
          filterable = resolvedState.filterable,
          pivotIDKey = resolvedState.pivotIDKey,
          pivotValKey = resolvedState.pivotValKey,
          pivotBy = resolvedState.pivotBy,
          subRowsKey = resolvedState.subRowsKey,
          aggregatedKey = resolvedState.aggregatedKey,
          originalKey = resolvedState.originalKey,
          indexKey = resolvedState.indexKey,
          groupedByPivotKey = resolvedState.groupedByPivotKey,
          loading = resolvedState.loading,
          pageSize = resolvedState.pageSize,
          page = resolvedState.page,
          sorted = resolvedState.sorted,
          filtered = resolvedState.filtered,
          resized = resolvedState.resized,
          expanded = resolvedState.expanded,
          pages = resolvedState.pages,
          onExpandedChange = resolvedState.onExpandedChange,
          TableComponent = resolvedState.TableComponent,
          TheadComponent = resolvedState.TheadComponent,
          TbodyComponent = resolvedState.TbodyComponent,
          TrGroupComponent = resolvedState.TrGroupComponent,
          TrComponent = resolvedState.TrComponent,
          ThComponent = resolvedState.ThComponent,
          TdComponent = resolvedState.TdComponent,
          TfootComponent = resolvedState.TfootComponent,
          PaginationComponent = resolvedState.PaginationComponent,
          LoadingComponent = resolvedState.LoadingComponent,
          SubComponent = resolvedState.SubComponent,
          NoDataComponent = resolvedState.NoDataComponent,
          ResizerComponent = resolvedState.ResizerComponent,
          ExpanderComponent = resolvedState.ExpanderComponent,
          PivotValueComponent = resolvedState.PivotValueComponent,
          PivotComponent = resolvedState.PivotComponent,
          AggregatedComponent = resolvedState.AggregatedComponent,
          FilterComponent = resolvedState.FilterComponent,
          resolvedData = resolvedState.resolvedData,
          allVisibleColumns = resolvedState.allVisibleColumns,
          headerGroups = resolvedState.headerGroups,
          hasHeaderGroups = resolvedState.hasHeaderGroups,
          sortedData = resolvedState.sortedData,
          currentlyResizing = resolvedState.currentlyResizing;

      // Pagination

      var startRow = pageSize * page;
      var endRow = startRow + pageSize;
      var pageRows = manual ? resolvedData : sortedData.slice(startRow, endRow);
      var minRows = this.getMinRows();
      var padRows = _utils2.default.range(Math.max(minRows - pageRows.length, 0));

      var hasColumnFooter = allVisibleColumns.some(function (d) {
        return d.Footer;
      });
      var hasFilters = filterable || allVisibleColumns.some(function (d) {
        return d.filterable;
      });

      var recurseRowsViewIndex = function recurseRowsViewIndex(rows) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

        return [rows.map(function (row, i) {
          index++;
          var rowWithViewIndex = _extends({}, row, {
            _viewIndex: index
          });
          var newPath = path.concat([i]);
          if (rowWithViewIndex[subRowsKey] && _utils2.default.get(expanded, newPath)) {
            var _recurseRowsViewIndex = recurseRowsViewIndex(rowWithViewIndex[subRowsKey], newPath, index);

            var _recurseRowsViewIndex2 = _slicedToArray(_recurseRowsViewIndex, 2);

            rowWithViewIndex[subRowsKey] = _recurseRowsViewIndex2[0];
            index = _recurseRowsViewIndex2[1];
          }
          return rowWithViewIndex;
        }), index];
      };

      var _recurseRowsViewIndex3 = recurseRowsViewIndex(pageRows);

      var _recurseRowsViewIndex4 = _slicedToArray(_recurseRowsViewIndex3, 1);

      pageRows = _recurseRowsViewIndex4[0];


      var canPrevious = page > 0;
      var canNext = page + 1 < pages;

      var rowMinWidth = _utils2.default.sum(allVisibleColumns.map(function (d) {
        var resizedColumn = resized.find(function (x) {
          return x.id === d.id;
        }) || {};
        return _utils2.default.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
      }));

      var rowIndex = -1;

      var finalState = _extends({}, resolvedState, {
        startRow: startRow,
        endRow: endRow,
        pageRows: pageRows,
        minRows: minRows,
        padRows: padRows,
        hasColumnFooter: hasColumnFooter,
        canPrevious: canPrevious,
        canNext: canNext,
        rowMinWidth: rowMinWidth
      });

      // Visual Components

      var makeHeaderGroups = function makeHeaderGroups() {
        var theadGroupProps = _utils2.default.splitProps(getTheadGroupProps(finalState, undefined, undefined, _this2));
        var theadGroupTrProps = _utils2.default.splitProps(getTheadGroupTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-headerGroups', theadGroupProps.className),
            style: _extends({}, theadGroupProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadGroupProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadGroupTrProps.className,
              style: theadGroupTrProps.style
            }, theadGroupTrProps.rest),
            headerGroups.map(makeHeaderGroup)
          )
        );
      };

      var makeHeaderGroup = function makeHeaderGroup(column, i) {
        var resizedValue = function resizedValue(col) {
          return (resized.find(function (x) {
            return x.id === col.id;
          }) || {}).value;
        };
        var flex = _utils2.default.sum(column.columns.map(function (col) {
          return col.width || resizedValue(col) ? 0 : col.minWidth;
        }));
        var width = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.minWidth);
        }));
        var maxWidth = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.maxWidth);
        }));

        var theadGroupThProps = _utils2.default.splitProps(getTheadGroupThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadGroupThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadGroupThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadGroupThProps.rest, columnHeaderProps.rest);

        var flexStyles = {
          flex: flex + ' 0 auto',
          width: width + 'px',
          maxWidth: maxWidth + 'px'
        };

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, flexStyles)
          }, rest),
          _utils2.default.normalizeComponent(column.Header, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeHeaders = function makeHeaders() {
        var theadProps = _utils2.default.splitProps(getTheadProps(finalState, undefined, undefined, _this2));
        var theadTrProps = _utils2.default.splitProps(getTheadTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-header', theadProps.className),
            style: _extends({}, theadProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadTrProps.className,
              style: theadTrProps.style
            }, theadTrProps.rest),
            allVisibleColumns.map(makeHeader)
          )
        );
      };

      var makeHeader = function makeHeader(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var sort = sorted.find(function (d) {
          return d.id === column.id;
        });
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadThProps = _utils2.default.splitProps(getTheadThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadThProps.rest, columnHeaderProps.rest);

        var isResizable = _utils2.default.getFirstDefined(column.resizable, resizable, false);
        var resizer = isResizable ? _react2.default.createElement(ResizerComponent, _extends({
          onMouseDown: function onMouseDown(e) {
            return _this2.resizeColumnStart(column, e, false);
          },
          onTouchStart: function onTouchStart(e) {
            return _this2.resizeColumnStart(column, e, true);
          }

        }, resizerProps)) : null;

        var isSortable = _utils2.default.getFirstDefined(column.sortable, sortable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, 'rt-resizable-header', sort ? sort.desc ? '-sort-desc' : '-sort-asc' : '', isSortable && '-cursor-pointer', !show && '-hidden', pivotBy && pivotBy.slice(0, -1).includes(column.id) && 'rt-header-pivot'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: width + 'px',
              maxWidth: maxWidth + 'px'
            }),
            toggleSort: function toggleSort(e) {
              isSortable && _this2.sortColumn(column, e.shiftKey);
            }
          }, rest),
          _react2.default.createElement(
            'div',
            { className: 'rt-resizable-header-content' },
            _utils2.default.normalizeComponent(column.Header, {
              data: sortedData,
              column: column
            })
          ),
          resizer
        );
      };

      var makeFilters = function makeFilters() {
        var theadFilterProps = _utils2.default.splitProps(getTheadFilterProps(finalState, undefined, undefined, _this2));
        var theadFilterTrProps = _utils2.default.splitProps(getTheadFilterTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-filters', theadFilterProps.className),
            style: _extends({}, theadFilterProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadFilterProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadFilterTrProps.className,
              style: theadFilterTrProps.style
            }, theadFilterTrProps.rest),
            allVisibleColumns.map(makeFilter)
          )
        );
      };

      var makeFilter = function makeFilter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadFilterThProps = _utils2.default.splitProps(getTheadFilterThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadFilterThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadFilterThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadFilterThProps.rest, columnHeaderProps.rest);

        var filter = filtered.find(function (filter) {
          return filter.id === column.id;
        });

        var ResolvedFilterComponent = column.Filter || FilterComponent;

        var isFilterable = _utils2.default.getFirstDefined(column.filterable, filterable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: width + 'px',
              maxWidth: maxWidth + 'px'
            })
          }, rest),
          isFilterable ? _utils2.default.normalizeComponent(ResolvedFilterComponent, {
            column: column,
            filter: filter,
            onChange: function onChange(value) {
              return _this2.filterColumn(column, value);
            }
          }, _defaultProps2.default.column.Filter) : null
        );
      };

      var makePageRow = function makePageRow(row, i) {
        var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var rowInfo = {
          original: row[originalKey],
          row: row,
          index: row[indexKey],
          viewIndex: ++rowIndex,
          level: path.length,
          nestingPath: path.concat([i]),
          aggregated: row[aggregatedKey],
          groupedByPivot: row[groupedByPivotKey],
          subRows: row[subRowsKey]
        };
        var isExpanded = _utils2.default.get(expanded, rowInfo.nestingPath);
        var trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, rowInfo, undefined, _this2));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({
            key: rowInfo.nestingPath.join('_')
          }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(trProps.className, row._viewIndex % 2 ? '-even' : '-odd'),
              style: trProps.style
            }, trProps.rest),
            allVisibleColumns.map(function (column, i2) {
              var resizedCol = resized.find(function (x) {
                return x.id === column.id;
              }) || {};
              var show = typeof column.show === 'function' ? column.show() : column.show;
              var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
              var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
              var tdProps = _utils2.default.splitProps(getTdProps(finalState, rowInfo, column, _this2));
              var columnProps = _utils2.default.splitProps(column.getProps(finalState, rowInfo, column, _this2));

              var classes = [tdProps.className, column.className, columnProps.className];

              var styles = _extends({}, tdProps.style, column.style, columnProps.style);

              var cellInfo = _extends({}, rowInfo, {
                isExpanded: isExpanded,
                column: _extends({}, column),
                value: rowInfo.row[column.id],
                pivoted: column.pivoted,
                expander: column.expander,
                resized: resized,
                show: show,
                width: width,
                maxWidth: maxWidth,
                tdProps: tdProps,
                columnProps: columnProps,
                classes: classes,
                styles: styles
              });

              var value = cellInfo.value;

              var interactionProps = void 0;
              var isBranch = void 0;
              var isPreview = void 0;

              var onExpanderClick = function onExpanderClick(e) {
                var newExpanded = _utils2.default.clone(expanded);
                if (isExpanded) {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, false);
                } else {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, {});
                }

                return _this2.setStateWithData({
                  expanded: newExpanded
                }, function () {
                  onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e);
                });
              };

              // Default to a standard cell
              var resolvedCell = _utils2.default.normalizeComponent(column.Cell, cellInfo, value);

              // Resolve Renderers
              var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
              var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
              var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;
              var DefaultResolvedPivotComponent = PivotComponent || function (props) {
                return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(ResolvedExpanderComponent, props),
                  _react2.default.createElement(ResolvedPivotValueComponent, props)
                );
              };
              var ResolvedPivotComponent = column.Pivot || DefaultResolvedPivotComponent;

              // Is this cell expandable?
              if (cellInfo.pivoted || cellInfo.expander) {
                // Make it expandable by defualt
                cellInfo.expandable = true;
                interactionProps = {
                  onClick: onExpanderClick
                };
                // If pivoted, has no subRows, and does not have a subComponent, do not make expandable
                if (cellInfo.pivoted) {
                  if (!cellInfo.subRows) {
                    if (!SubComponent) {
                      cellInfo.expandable = false;
                      interactionProps = {};
                    }
                  }
                }
              }

              if (cellInfo.pivoted) {
                // Is this column a branch?
                isBranch = rowInfo.row[pivotIDKey] === column.id && cellInfo.subRows;
                // Should this column be blank?
                isPreview = pivotBy.indexOf(column.id) > pivotBy.indexOf(rowInfo.row[pivotIDKey]) && cellInfo.subRows;
                // Pivot Cell Render Override
                if (isBranch) {
                  // isPivot
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedPivotComponent, _extends({}, cellInfo, {
                    value: row[pivotValKey]
                  }), row[pivotValKey]);
                } else if (isPreview) {
                  // Show the pivot preview
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
                } else {
                  resolvedCell = null;
                }
              } else if (cellInfo.aggregated) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
              }

              if (cellInfo.expander) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedExpanderComponent, cellInfo, row[pivotValKey]);
                if (pivotBy) {
                  if (cellInfo.groupedByPivot) {
                    resolvedCell = null;
                  }
                  if (!cellInfo.subRows && !SubComponent) {
                    resolvedCell = null;
                  }
                }
              }

              // Return the cell
              return _react2.default.createElement(
                TdComponent,
                _extends({
                  key: i2 + '-' + column.id,
                  className: (0, _classnames2.default)(classes, !show && 'hidden', cellInfo.expandable && 'rt-expandable', (isBranch || isPreview) && 'rt-pivot'),
                  style: _extends({}, styles, {
                    flex: width + ' 0 auto',
                    width: width + 'px',
                    maxWidth: maxWidth + 'px'
                  })
                }, tdProps.rest, interactionProps),
                resolvedCell
              );
            })
          ),
          rowInfo.subRows && isExpanded && rowInfo.subRows.map(function (d, i) {
            return makePageRow(d, i, rowInfo.nestingPath);
          }),
          SubComponent && !rowInfo.subRows && isExpanded && SubComponent(rowInfo)
        );
      };

      var makePadRow = function makePadRow(row, i) {
        var trGroupProps = getTrGroupProps(finalState, undefined, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({
            key: i
          }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            {
              className: (0, _classnames2.default)('-padRow', (pageRows.length + i) % 2 ? '-even' : '-odd', trProps.className),
              style: trProps.style || {}
            },
            allVisibleColumns.map(makePadColumn)
          )
        );
      };

      var makePadColumn = function makePadColumn(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var flex = width;
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tdProps = _utils2.default.splitProps(getTdProps(finalState, undefined, column, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));

        var classes = [tdProps.className, column.className, columnProps.className];

        var styles = _extends({}, tdProps.style, column.style, columnProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: flex + ' 0 auto',
              width: width + 'px',
              maxWidth: maxWidth + 'px'
            })
          }, tdProps.rest),
          '\xA0'
        );
      };

      var makeColumnFooters = function makeColumnFooters() {
        var tFootProps = getTfootProps(finalState, undefined, undefined, _this2);
        var tFootTrProps = _utils2.default.splitProps(getTfootTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TfootComponent,
          _extends({
            className: tFootProps.className,
            style: _extends({}, tFootProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, tFootProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(tFootTrProps.className),
              style: tFootTrProps.style
            }, tFootTrProps.rest),
            allVisibleColumns.map(makeColumnFooter)
          )
        );
      };

      var makeColumnFooter = function makeColumnFooter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tFootTdProps = _utils2.default.splitProps(getTfootTdProps(finalState, undefined, undefined, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));
        var columnFooterProps = _utils2.default.splitProps(column.getFooterProps(finalState, undefined, column, _this2));

        var classes = [tFootTdProps.className, column.className, columnProps.className, columnFooterProps.className];

        var styles = _extends({}, tFootTdProps.style, column.style, columnProps.style, columnFooterProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: width + 'px',
              maxWidth: maxWidth + 'px'
            })
          }, columnProps.rest, tFootTdProps.rest, columnFooterProps.rest),
          _utils2.default.normalizeComponent(column.Footer, {
            data: sortedData,
            column: column
          })
        );
      };

      var rootProps = _utils2.default.splitProps(getProps(finalState, undefined, undefined, this));
      var tableProps = _utils2.default.splitProps(getTableProps(finalState, undefined, undefined, this));
      var tBodyProps = _utils2.default.splitProps(getTbodyProps(finalState, undefined, undefined, this));
      var paginationProps = _utils2.default.splitProps(getPaginationProps(finalState, undefined, undefined, this));
      var loadingProps = getLoadingProps(finalState, undefined, undefined, this);
      var noDataProps = getNoDataProps(finalState, undefined, undefined, this);
      var resizerProps = getResizerProps(finalState, undefined, undefined, this);

      var makeTable = function makeTable() {
        return _react2.default.createElement(
          'div',
          _extends({
            className: (0, _classnames2.default)('ReactTable', className, rootProps.className),
            style: _extends({}, style, rootProps.style)
          }, rootProps.rest),
          _react2.default.createElement(
            TableComponent,
            _extends({
              className: (0, _classnames2.default)(tableProps.className, currentlyResizing ? 'rt-resizing' : ''),
              style: tableProps.style
            }, tableProps.rest),
            hasHeaderGroups ? makeHeaderGroups() : null,
            makeHeaders(),
            hasFilters ? makeFilters() : null,
            _react2.default.createElement(
              TbodyComponent,
              _extends({
                className: (0, _classnames2.default)(tBodyProps.className),
                style: _extends({}, tBodyProps.style, {
                  minWidth: rowMinWidth + 'px'
                })
              }, tBodyProps.rest),
              pageRows.map(function (d, i) {
                return makePageRow(d, i);
              }),
              padRows.map(makePadRow)
            ),
            hasColumnFooter ? makeColumnFooters() : null
          ),
          showPagination ? _react2.default.createElement(PaginationComponent, _extends({}, resolvedState, {
            pages: pages,
            canPrevious: canPrevious,
            canNext: canNext,
            onPageChange: _this2.onPageChange,
            onPageSizeChange: _this2.onPageSizeChange,
            className: paginationProps.className,
            style: paginationProps.style
          }, paginationProps.rest)) : null,
          !pageRows.length && _react2.default.createElement(
            NoDataComponent,
            noDataProps,
            _utils2.default.normalizeComponent(noDataText)
          ),
          _react2.default.createElement(LoadingComponent, _extends({
            loading: loading,
            loadingText: loadingText
          }, loadingProps))
        );
      };

      // childProps are optionally passed to a function-as-a-child
      return children ? children(finalState, makeTable, this) : makeTable();
    }
  }]);

  return ReactTable;
}((0, _methods2.default)((0, _lifecycle2.default)(_react.Component)));

ReactTable.defaultProps = _defaultProps2.default;
exports.default = ReactTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwicmVzb2x2ZWRTdGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJnZXRQcm9wcyIsImdldFRhYmxlUHJvcHMiLCJnZXRUaGVhZEdyb3VwUHJvcHMiLCJnZXRUaGVhZEdyb3VwVHJQcm9wcyIsImdldFRoZWFkR3JvdXBUaFByb3BzIiwiZ2V0VGhlYWRQcm9wcyIsImdldFRoZWFkVHJQcm9wcyIsImdldFRoZWFkVGhQcm9wcyIsImdldFRoZWFkRmlsdGVyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRoUHJvcHMiLCJnZXRUYm9keVByb3BzIiwiZ2V0VHJHcm91cFByb3BzIiwiZ2V0VHJQcm9wcyIsImdldFRkUHJvcHMiLCJnZXRUZm9vdFByb3BzIiwiZ2V0VGZvb3RUclByb3BzIiwiZ2V0VGZvb3RUZFByb3BzIiwiZ2V0UGFnaW5hdGlvblByb3BzIiwiZ2V0TG9hZGluZ1Byb3BzIiwiZ2V0Tm9EYXRhUHJvcHMiLCJnZXRSZXNpemVyUHJvcHMiLCJzaG93UGFnaW5hdGlvbiIsIm1hbnVhbCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInNvcnRhYmxlIiwicmVzaXphYmxlIiwiZmlsdGVyYWJsZSIsInBpdm90SURLZXkiLCJwaXZvdFZhbEtleSIsInBpdm90QnkiLCJzdWJSb3dzS2V5IiwiYWdncmVnYXRlZEtleSIsIm9yaWdpbmFsS2V5IiwiaW5kZXhLZXkiLCJncm91cGVkQnlQaXZvdEtleSIsImxvYWRpbmciLCJwYWdlcyIsIm9uRXhwYW5kZWRDaGFuZ2UiLCJUYWJsZUNvbXBvbmVudCIsIlRoZWFkQ29tcG9uZW50IiwiVGJvZHlDb21wb25lbnQiLCJUckdyb3VwQ29tcG9uZW50IiwiVHJDb21wb25lbnQiLCJUaENvbXBvbmVudCIsIlRkQ29tcG9uZW50IiwiVGZvb3RDb21wb25lbnQiLCJQYWdpbmF0aW9uQ29tcG9uZW50IiwiTG9hZGluZ0NvbXBvbmVudCIsIlN1YkNvbXBvbmVudCIsIk5vRGF0YUNvbXBvbmVudCIsIlJlc2l6ZXJDb21wb25lbnQiLCJFeHBhbmRlckNvbXBvbmVudCIsIlBpdm90VmFsdWVDb21wb25lbnQiLCJQaXZvdENvbXBvbmVudCIsIkFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJGaWx0ZXJDb21wb25lbnQiLCJyZXNvbHZlZERhdGEiLCJhbGxWaXNpYmxlQ29sdW1ucyIsImhlYWRlckdyb3VwcyIsImhhc0hlYWRlckdyb3VwcyIsInNvcnRlZERhdGEiLCJzdGFydFJvdyIsImVuZFJvdyIsInBhZ2VSb3dzIiwic2xpY2UiLCJtaW5Sb3dzIiwicGFkUm93cyIsInJhbmdlIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsImhhc0NvbHVtbkZvb3RlciIsInNvbWUiLCJkIiwiRm9vdGVyIiwiaGFzRmlsdGVycyIsInJlY3Vyc2VSb3dzVmlld0luZGV4Iiwicm93cyIsInBhdGgiLCJpbmRleCIsIm1hcCIsInJvdyIsImkiLCJyb3dXaXRoVmlld0luZGV4IiwiX3ZpZXdJbmRleCIsIm5ld1BhdGgiLCJjb25jYXQiLCJnZXQiLCJjYW5QcmV2aW91cyIsImNhbk5leHQiLCJyb3dNaW5XaWR0aCIsInN1bSIsInJlc2l6ZWRDb2x1bW4iLCJmaW5kIiwieCIsImlkIiwiZ2V0Rmlyc3REZWZpbmVkIiwidmFsdWUiLCJ3aWR0aCIsIm1pbldpZHRoIiwicm93SW5kZXgiLCJmaW5hbFN0YXRlIiwibWFrZUhlYWRlckdyb3VwcyIsInRoZWFkR3JvdXBQcm9wcyIsInNwbGl0UHJvcHMiLCJ1bmRlZmluZWQiLCJ0aGVhZEdyb3VwVHJQcm9wcyIsInJlc3QiLCJtYWtlSGVhZGVyR3JvdXAiLCJjb2x1bW4iLCJyZXNpemVkVmFsdWUiLCJjb2wiLCJmbGV4IiwiY29sdW1ucyIsIm1heFdpZHRoIiwidGhlYWRHcm91cFRoUHJvcHMiLCJjb2x1bW5IZWFkZXJQcm9wcyIsImdldEhlYWRlclByb3BzIiwiY2xhc3NlcyIsImhlYWRlckNsYXNzTmFtZSIsInN0eWxlcyIsImhlYWRlclN0eWxlIiwiZmxleFN0eWxlcyIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsIkhlYWRlciIsImRhdGEiLCJtYWtlSGVhZGVycyIsInRoZWFkUHJvcHMiLCJ0aGVhZFRyUHJvcHMiLCJtYWtlSGVhZGVyIiwicmVzaXplZENvbCIsInNvcnQiLCJzaG93IiwidGhlYWRUaFByb3BzIiwiaXNSZXNpemFibGUiLCJyZXNpemVyIiwiZSIsInJlc2l6ZXJQcm9wcyIsImlzU29ydGFibGUiLCJkZXNjIiwiaW5jbHVkZXMiLCJzaGlmdEtleSIsIm1ha2VGaWx0ZXJzIiwidGhlYWRGaWx0ZXJQcm9wcyIsInRoZWFkRmlsdGVyVHJQcm9wcyIsIm1ha2VGaWx0ZXIiLCJ0aGVhZEZpbHRlclRoUHJvcHMiLCJmaWx0ZXIiLCJSZXNvbHZlZEZpbHRlckNvbXBvbmVudCIsIkZpbHRlciIsImlzRmlsdGVyYWJsZSIsIm9uQ2hhbmdlIiwibWFrZVBhZ2VSb3ciLCJyb3dJbmZvIiwib3JpZ2luYWwiLCJ2aWV3SW5kZXgiLCJsZXZlbCIsIm5lc3RpbmdQYXRoIiwiYWdncmVnYXRlZCIsImdyb3VwZWRCeVBpdm90Iiwic3ViUm93cyIsImlzRXhwYW5kZWQiLCJ0ckdyb3VwUHJvcHMiLCJ0clByb3BzIiwiam9pbiIsImkyIiwidGRQcm9wcyIsImNvbHVtblByb3BzIiwiY2VsbEluZm8iLCJwaXZvdGVkIiwiZXhwYW5kZXIiLCJpbnRlcmFjdGlvblByb3BzIiwiaXNCcmFuY2giLCJpc1ByZXZpZXciLCJvbkV4cGFuZGVyQ2xpY2siLCJuZXdFeHBhbmRlZCIsImNsb25lIiwic2V0Iiwic2V0U3RhdGVXaXRoRGF0YSIsInJlc29sdmVkQ2VsbCIsIkNlbGwiLCJSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJBZ2dyZWdhdGVkIiwiYWdncmVnYXRlIiwiUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCIsIkV4cGFuZGVyIiwiUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RWYWx1ZSIsIkRlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlBpdm90IiwiZXhwYW5kYWJsZSIsIm9uQ2xpY2siLCJpbmRleE9mIiwibWFrZVBhZFJvdyIsIm1ha2VQYWRDb2x1bW4iLCJtYWtlQ29sdW1uRm9vdGVycyIsInRGb290UHJvcHMiLCJ0Rm9vdFRyUHJvcHMiLCJtYWtlQ29sdW1uRm9vdGVyIiwidEZvb3RUZFByb3BzIiwiY29sdW1uRm9vdGVyUHJvcHMiLCJnZXRGb290ZXJQcm9wcyIsInJvb3RQcm9wcyIsInRhYmxlUHJvcHMiLCJ0Qm9keVByb3BzIiwicGFnaW5hdGlvblByb3BzIiwibG9hZGluZ1Byb3BzIiwibm9EYXRhUHJvcHMiLCJtYWtlVGFibGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztB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RFg7QUFFRSx5QkFBYWI7QUFGZixhQUdNeUwsWUFITjtBQXhERixTQURnQjtBQUFBLE9BQWxCOztBQWlFQTtBQUNBLGFBQU9wTixXQUFXQSxTQUFTMEcsVUFBVCxFQUFxQjRHLFNBQXJCLEVBQWdDLElBQWhDLENBQVgsR0FBbURBLFdBQTFEO0FBQ0Q7Ozs7RUF6ekJxQyx1QkFBUSwwQ0FBUixDOztBQUFuQnhQLFUsQ0FDWnlQLFk7a0JBRFl6UCxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG4vL1xyXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgTGlmZWN5Y2xlIGZyb20gJy4vbGlmZWN5Y2xlJ1xyXG5pbXBvcnQgTWV0aG9kcyBmcm9tICcuL21ldGhvZHMnXHJcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0UHJvcHMnXHJcblxyXG5leHBvcnQgY29uc3QgUmVhY3RUYWJsZURlZmF1bHRzID0gZGVmYXVsdFByb3BzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFRhYmxlIGV4dGVuZHMgTWV0aG9kcyhMaWZlY3ljbGUoQ29tcG9uZW50KSkge1xyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNcclxuXHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgdGhpcy5nZXRSZXNvbHZlZFN0YXRlID0gdGhpcy5nZXRSZXNvbHZlZFN0YXRlLmJpbmQodGhpcylcclxuICAgIHRoaXMuZ2V0RGF0YU1vZGVsID0gdGhpcy5nZXREYXRhTW9kZWwuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5nZXRTb3J0ZWREYXRhID0gdGhpcy5nZXRTb3J0ZWREYXRhLmJpbmQodGhpcylcclxuICAgIHRoaXMuZmlyZUZldGNoRGF0YSA9IHRoaXMuZmlyZUZldGNoRGF0YS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmdldFByb3BPclN0YXRlID0gdGhpcy5nZXRQcm9wT3JTdGF0ZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmdldFN0YXRlT3JQcm9wID0gdGhpcy5nZXRTdGF0ZU9yUHJvcC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmZpbHRlckRhdGEuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5zb3J0RGF0YSA9IHRoaXMuc29ydERhdGEuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5nZXRNaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzLmJpbmQodGhpcylcclxuICAgIHRoaXMub25QYWdlQ2hhbmdlID0gdGhpcy5vblBhZ2VDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5vblBhZ2VTaXplQ2hhbmdlID0gdGhpcy5vblBhZ2VTaXplQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuc29ydENvbHVtbiA9IHRoaXMuc29ydENvbHVtbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmZpbHRlckNvbHVtbiA9IHRoaXMuZmlsdGVyQ29sdW1uLmJpbmQodGhpcylcclxuICAgIHRoaXMucmVzaXplQ29sdW1uU3RhcnQgPSB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0LmJpbmQodGhpcylcclxuICAgIHRoaXMucmVzaXplQ29sdW1uRW5kID0gdGhpcy5yZXNpemVDb2x1bW5FbmQuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcgPSB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZy5iaW5kKHRoaXMpXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcGFnZTogMCxcclxuICAgICAgcGFnZVNpemU6IHByb3BzLmRlZmF1bHRQYWdlU2l6ZSxcclxuICAgICAgc29ydGVkOiBwcm9wcy5kZWZhdWx0U29ydGVkLFxyXG4gICAgICBleHBhbmRlZDogcHJvcHMuZGVmYXVsdEV4cGFuZGVkLFxyXG4gICAgICBmaWx0ZXJlZDogcHJvcHMuZGVmYXVsdEZpbHRlcmVkLFxyXG4gICAgICByZXNpemVkOiBwcm9wcy5kZWZhdWx0UmVzaXplZCxcclxuICAgICAgY3VycmVudGx5UmVzaXppbmc6IGZhbHNlLFxyXG4gICAgICBza2lwTmV4dFNvcnQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgcmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNoaWxkcmVuLFxyXG4gICAgICBjbGFzc05hbWUsXHJcbiAgICAgIHN0eWxlLFxyXG4gICAgICBnZXRQcm9wcyxcclxuICAgICAgZ2V0VGFibGVQcm9wcyxcclxuICAgICAgZ2V0VGhlYWRHcm91cFByb3BzLFxyXG4gICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyxcclxuICAgICAgZ2V0VGhlYWRHcm91cFRoUHJvcHMsXHJcbiAgICAgIGdldFRoZWFkUHJvcHMsXHJcbiAgICAgIGdldFRoZWFkVHJQcm9wcyxcclxuICAgICAgZ2V0VGhlYWRUaFByb3BzLFxyXG4gICAgICBnZXRUaGVhZEZpbHRlclByb3BzLFxyXG4gICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMsXHJcbiAgICAgIGdldFRoZWFkRmlsdGVyVGhQcm9wcyxcclxuICAgICAgZ2V0VGJvZHlQcm9wcyxcclxuICAgICAgZ2V0VHJHcm91cFByb3BzLFxyXG4gICAgICBnZXRUclByb3BzLFxyXG4gICAgICBnZXRUZFByb3BzLFxyXG4gICAgICBnZXRUZm9vdFByb3BzLFxyXG4gICAgICBnZXRUZm9vdFRyUHJvcHMsXHJcbiAgICAgIGdldFRmb290VGRQcm9wcyxcclxuICAgICAgZ2V0UGFnaW5hdGlvblByb3BzLFxyXG4gICAgICBnZXRMb2FkaW5nUHJvcHMsXHJcbiAgICAgIGdldE5vRGF0YVByb3BzLFxyXG4gICAgICBnZXRSZXNpemVyUHJvcHMsXHJcbiAgICAgIHNob3dQYWdpbmF0aW9uLFxyXG4gICAgICBtYW51YWwsXHJcbiAgICAgIGxvYWRpbmdUZXh0LFxyXG4gICAgICBub0RhdGFUZXh0LFxyXG4gICAgICBzb3J0YWJsZSxcclxuICAgICAgcmVzaXphYmxlLFxyXG4gICAgICBmaWx0ZXJhYmxlLFxyXG4gICAgICAvLyBQaXZvdGluZyBTdGF0ZVxyXG4gICAgICBwaXZvdElES2V5LFxyXG4gICAgICBwaXZvdFZhbEtleSxcclxuICAgICAgcGl2b3RCeSxcclxuICAgICAgc3ViUm93c0tleSxcclxuICAgICAgYWdncmVnYXRlZEtleSxcclxuICAgICAgb3JpZ2luYWxLZXksXHJcbiAgICAgIGluZGV4S2V5LFxyXG4gICAgICBncm91cGVkQnlQaXZvdEtleSxcclxuICAgICAgLy8gU3RhdGVcclxuICAgICAgbG9hZGluZyxcclxuICAgICAgcGFnZVNpemUsXHJcbiAgICAgIHBhZ2UsXHJcbiAgICAgIHNvcnRlZCxcclxuICAgICAgZmlsdGVyZWQsXHJcbiAgICAgIHJlc2l6ZWQsXHJcbiAgICAgIGV4cGFuZGVkLFxyXG4gICAgICBwYWdlcyxcclxuICAgICAgb25FeHBhbmRlZENoYW5nZSxcclxuICAgICAgLy8gQ29tcG9uZW50c1xyXG4gICAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgICAgVGhlYWRDb21wb25lbnQsXHJcbiAgICAgIFRib2R5Q29tcG9uZW50LFxyXG4gICAgICBUckdyb3VwQ29tcG9uZW50LFxyXG4gICAgICBUckNvbXBvbmVudCxcclxuICAgICAgVGhDb21wb25lbnQsXHJcbiAgICAgIFRkQ29tcG9uZW50LFxyXG4gICAgICBUZm9vdENvbXBvbmVudCxcclxuICAgICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcclxuICAgICAgTG9hZGluZ0NvbXBvbmVudCxcclxuICAgICAgU3ViQ29tcG9uZW50LFxyXG4gICAgICBOb0RhdGFDb21wb25lbnQsXHJcbiAgICAgIFJlc2l6ZXJDb21wb25lbnQsXHJcbiAgICAgIEV4cGFuZGVyQ29tcG9uZW50LFxyXG4gICAgICBQaXZvdFZhbHVlQ29tcG9uZW50LFxyXG4gICAgICBQaXZvdENvbXBvbmVudCxcclxuICAgICAgQWdncmVnYXRlZENvbXBvbmVudCxcclxuICAgICAgRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgICAvLyBEYXRhIG1vZGVsXHJcbiAgICAgIHJlc29sdmVkRGF0YSxcclxuICAgICAgYWxsVmlzaWJsZUNvbHVtbnMsXHJcbiAgICAgIGhlYWRlckdyb3VwcyxcclxuICAgICAgaGFzSGVhZGVyR3JvdXBzLFxyXG4gICAgICAvLyBTb3J0ZWQgRGF0YVxyXG4gICAgICBzb3J0ZWREYXRhLFxyXG4gICAgICBjdXJyZW50bHlSZXNpemluZ1xyXG4gICAgfSA9IHJlc29sdmVkU3RhdGVcclxuXHJcbiAgICAvLyBQYWdpbmF0aW9uXHJcbiAgICBjb25zdCBzdGFydFJvdyA9IHBhZ2VTaXplICogcGFnZVxyXG4gICAgY29uc3QgZW5kUm93ID0gc3RhcnRSb3cgKyBwYWdlU2l6ZVxyXG4gICAgbGV0IHBhZ2VSb3dzID0gbWFudWFsID8gcmVzb2x2ZWREYXRhIDogc29ydGVkRGF0YS5zbGljZShzdGFydFJvdywgZW5kUm93KVxyXG4gICAgY29uc3QgbWluUm93cyA9IHRoaXMuZ2V0TWluUm93cygpXHJcbiAgICBjb25zdCBwYWRSb3dzID0gXy5yYW5nZShNYXRoLm1heChtaW5Sb3dzIC0gcGFnZVJvd3MubGVuZ3RoLCAwKSlcclxuXHJcbiAgICBjb25zdCBoYXNDb2x1bW5Gb290ZXIgPSBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5Gb290ZXIpXHJcbiAgICBjb25zdCBoYXNGaWx0ZXJzID0gZmlsdGVyYWJsZSB8fCBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5maWx0ZXJhYmxlKVxyXG5cclxuICAgIGNvbnN0IHJlY3Vyc2VSb3dzVmlld0luZGV4ID0gKHJvd3MsIHBhdGggPSBbXSwgaW5kZXggPSAtMSkgPT4ge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHJvd3MubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgIGluZGV4KytcclxuICAgICAgICAgIGNvbnN0IHJvd1dpdGhWaWV3SW5kZXggPSB7XHJcbiAgICAgICAgICAgIC4uLnJvdyxcclxuICAgICAgICAgICAgX3ZpZXdJbmRleDogaW5kZXhcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IG5ld1BhdGggPSBwYXRoLmNvbmNhdChbaV0pXHJcbiAgICAgICAgICBpZiAocm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSAmJiBfLmdldChleHBhbmRlZCwgbmV3UGF0aCkpIHtcclxuICAgICAgICAgICAgW3Jvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sIGluZGV4XSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sIG5ld1BhdGgsIGluZGV4KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJvd1dpdGhWaWV3SW5kZXhcclxuICAgICAgICB9KSxcclxuICAgICAgICBpbmRleFxyXG4gICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgW3BhZ2VSb3dzXSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KHBhZ2VSb3dzKVxyXG5cclxuICAgIGNvbnN0IGNhblByZXZpb3VzID0gcGFnZSA+IDBcclxuICAgIGNvbnN0IGNhbk5leHQgPSBwYWdlICsgMSA8IHBhZ2VzXHJcblxyXG4gICAgY29uc3Qgcm93TWluV2lkdGggPSBfLnN1bShhbGxWaXNpYmxlQ29sdW1ucy5tYXAoZCA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2x1bW4gPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBkLmlkKSB8fCB7fVxyXG4gICAgICByZXR1cm4gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbHVtbi52YWx1ZSwgZC53aWR0aCwgZC5taW5XaWR0aClcclxuICAgIH0pKVxyXG5cclxuICAgIGxldCByb3dJbmRleCA9IC0xXHJcblxyXG4gICAgY29uc3QgZmluYWxTdGF0ZSA9IHtcclxuICAgICAgLi4ucmVzb2x2ZWRTdGF0ZSxcclxuICAgICAgc3RhcnRSb3csXHJcbiAgICAgIGVuZFJvdyxcclxuICAgICAgcGFnZVJvd3MsXHJcbiAgICAgIG1pblJvd3MsXHJcbiAgICAgIHBhZFJvd3MsXHJcbiAgICAgIGhhc0NvbHVtbkZvb3RlcixcclxuICAgICAgY2FuUHJldmlvdXMsXHJcbiAgICAgIGNhbk5leHQsXHJcbiAgICAgIHJvd01pbldpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmlzdWFsIENvbXBvbmVudHNcclxuXHJcbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXBzID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB0aGVhZEdyb3VwUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VGhlYWRHcm91cFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSlcclxuICAgICAgY29uc3QgdGhlYWRHcm91cFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VGhlYWRHcm91cFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpKVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctaGVhZGVyR3JvdXBzJywgdGhlYWRHcm91cFByb3BzLmNsYXNzTmFtZSl9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAuLi50aGVhZEdyb3VwUHJvcHMuc3R5bGUsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHtyb3dNaW5XaWR0aH1weGBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB7Li4udGhlYWRHcm91cFByb3BzLnJlc3R9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRyQ29tcG9uZW50XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRHcm91cFRyUHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgICBzdHlsZT17dGhlYWRHcm91cFRyUHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICAgIHsuLi50aGVhZEdyb3VwVHJQcm9wcy5yZXN0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChtYWtlSGVhZGVyR3JvdXApfVxyXG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cclxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFrZUhlYWRlckdyb3VwID0gKGNvbHVtbiwgaSkgPT4ge1xyXG4gICAgICBjb25zdCByZXNpemVkVmFsdWUgPSBjb2wgPT4gKHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbC5pZCkgfHwge30pLnZhbHVlXHJcbiAgICAgIGNvbnN0IGZsZXggPSBfLnN1bShjb2x1bW4uY29sdW1ucy5tYXAoY29sID0+IGNvbC53aWR0aCB8fCByZXNpemVkVmFsdWUoY29sKSA/IDAgOiBjb2wubWluV2lkdGgpKVxyXG4gICAgICBjb25zdCB3aWR0aCA9IF8uc3VtKGNvbHVtbi5jb2x1bW5zLm1hcChjb2wgPT4gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZFZhbHVlKGNvbCksIGNvbC53aWR0aCwgY29sLm1pbldpZHRoKSkpXHJcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5zdW0oY29sdW1uLmNvbHVtbnMubWFwKGNvbCA9PiBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkVmFsdWUoY29sKSwgY29sLndpZHRoLCBjb2wubWF4V2lkdGgpKSlcclxuXHJcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUaFByb3BzID0gXy5zcGxpdFByb3BzKGdldFRoZWFkR3JvdXBUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSlcclxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSlcclxuXHJcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXHJcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcclxuICAgICAgICB0aGVhZEdyb3VwVGhQcm9wcy5jbGFzc05hbWUsXHJcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgIF1cclxuXHJcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXHJcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMuc3R5bGUsXHJcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGVcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzdCA9IHtcclxuICAgICAgICAuLi50aGVhZEdyb3VwVGhQcm9wcy5yZXN0LFxyXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3RcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZmxleFN0eWxlcyA9IHtcclxuICAgICAgICBmbGV4OiBgJHtmbGV4fSAwIGF1dG9gLFxyXG4gICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXHJcbiAgICAgICAgbWF4V2lkdGg6IGAke21heFdpZHRofXB4YFxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaENvbXBvbmVudFxyXG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICBjbGFzc2VzXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgLi4uc3R5bGVzLFxyXG4gICAgICAgICAgICAuLi5mbGV4U3R5bGVzXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5IZWFkZXIsIHtcclxuICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcclxuICAgICAgICAgICAgY29sdW1uOiBjb2x1bW5cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvVGhDb21wb25lbnQ+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYWtlSGVhZGVycyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgdGhlYWRQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRUaGVhZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSlcclxuICAgICAgY29uc3QgdGhlYWRUclByb3BzID0gXy5zcGxpdFByb3BzKGdldFRoZWFkVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXInLCB0aGVhZFByb3BzLmNsYXNzTmFtZSl9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAuLi50aGVhZFByb3BzLnN0eWxlLFxyXG4gICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgey4uLnRoZWFkUHJvcHMucmVzdH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHJDb21wb25lbnRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZFRyUHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgICBzdHlsZT17dGhlYWRUclByb3BzLnN0eWxlfVxyXG4gICAgICAgICAgICB7Li4udGhlYWRUclByb3BzLnJlc3R9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUhlYWRlcil9XHJcbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxyXG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYWtlSGVhZGVyID0gKGNvbHVtbiwgaSkgPT4ge1xyXG4gICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxyXG4gICAgICBjb25zdCBzb3J0ID0gc29ydGVkLmZpbmQoZCA9PiBkLmlkID09PSBjb2x1bW4uaWQpXHJcbiAgICAgIGNvbnN0IHNob3cgPSB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcclxuICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5taW5XaWR0aClcclxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5tYXhXaWR0aClcclxuICAgICAgY29uc3QgdGhlYWRUaFByb3BzID0gXy5zcGxpdFByb3BzKGdldFRoZWFkVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcykpXHJcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcykpXHJcblxyXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xyXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXHJcbiAgICAgICAgdGhlYWRUaFByb3BzLmNsYXNzTmFtZSxcclxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWVcclxuICAgICAgXVxyXG5cclxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcclxuICAgICAgICAuLi50aGVhZFRoUHJvcHMuc3R5bGUsXHJcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGVcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzdCA9IHtcclxuICAgICAgICAuLi50aGVhZFRoUHJvcHMucmVzdCxcclxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGlzUmVzaXphYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnJlc2l6YWJsZSwgcmVzaXphYmxlLCBmYWxzZSlcclxuICAgICAgY29uc3QgcmVzaXplciA9IGlzUmVzaXphYmxlID8gKFxyXG4gICAgICAgIDxSZXNpemVyQ29tcG9uZW50XHJcbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGNvbHVtbiwgZSwgZmFsc2UpfVxyXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoY29sdW1uLCBlLCB0cnVlKX1cclxuXHJcbiAgICAgICAgICB7Li4ucmVzaXplclByb3BzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiBudWxsXHJcblxyXG4gICAgICBjb25zdCBpc1NvcnRhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnNvcnRhYmxlLCBzb3J0YWJsZSwgZmFsc2UpXHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaENvbXBvbmVudFxyXG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICBjbGFzc2VzLFxyXG4gICAgICAgICAgICAncnQtcmVzaXphYmxlLWhlYWRlcicsXHJcbiAgICAgICAgICAgIHNvcnQgPyAoc29ydC5kZXNjID8gJy1zb3J0LWRlc2MnIDogJy1zb3J0LWFzYycpIDogJycsXHJcbiAgICAgICAgICAgIGlzU29ydGFibGUgJiYgJy1jdXJzb3ItcG9pbnRlcicsXHJcbiAgICAgICAgICAgICFzaG93ICYmICctaGlkZGVuJyxcclxuICAgICAgICAgICAgcGl2b3RCeSAmJiBwaXZvdEJ5LnNsaWNlKDAsIC0xKS5pbmNsdWRlcyhjb2x1bW4uaWQpICYmICdydC1oZWFkZXItcGl2b3QnXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgLi4uc3R5bGVzLFxyXG4gICAgICAgICAgICBmbGV4OiBgJHt3aWR0aH0gMCBhdXRvYCxcclxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcclxuICAgICAgICAgICAgbWF4V2lkdGg6IGAke21heFdpZHRofXB4YFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHRvZ2dsZVNvcnQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGlzU29ydGFibGUgJiYgdGhpcy5zb3J0Q29sdW1uKGNvbHVtbiwgZS5zaGlmdEtleSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncnQtcmVzaXphYmxlLWhlYWRlci1jb250ZW50Jz5cclxuICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5IZWFkZXIsIHtcclxuICAgICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxyXG4gICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cmVzaXplcn1cclxuICAgICAgICA8L1RoQ29tcG9uZW50PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFrZUZpbHRlcnMgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VGhlYWRGaWx0ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXHJcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRUaGVhZEZpbHRlclRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpKVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctZmlsdGVycycsIHRoZWFkRmlsdGVyUHJvcHMuY2xhc3NOYW1lKX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIC4uLnRoZWFkRmlsdGVyUHJvcHMuc3R5bGUsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHtyb3dNaW5XaWR0aH1weGBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJQcm9wcy5yZXN0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUckNvbXBvbmVudFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkRmlsdGVyVHJQcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEZpbHRlclRyUHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICAgIHsuLi50aGVhZEZpbHRlclRyUHJvcHMucmVzdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlRmlsdGVyKX1cclxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XHJcbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ha2VGaWx0ZXIgPSAoY29sdW1uLCBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbC52YWx1ZSwgY29sdW1uLndpZHRoLCBjb2x1bW4ubWluV2lkdGgpXHJcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbC52YWx1ZSwgY29sdW1uLndpZHRoLCBjb2x1bW4ubWF4V2lkdGgpXHJcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRUaGVhZEZpbHRlclRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpKVxyXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpKVxyXG5cclxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcclxuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxyXG4gICAgICAgIHRoZWFkRmlsdGVyVGhQcm9wcy5jbGFzc05hbWUsXHJcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgIF1cclxuXHJcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXHJcbiAgICAgICAgLi4udGhlYWRGaWx0ZXJUaFByb3BzLnN0eWxlLFxyXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlc3QgPSB7XHJcbiAgICAgICAgLi4udGhlYWRGaWx0ZXJUaFByb3BzLnJlc3QsXHJcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdFxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBmaWx0ZXIgPSBmaWx0ZXJlZC5maW5kKGZpbHRlciA9PiBmaWx0ZXIuaWQgPT09IGNvbHVtbi5pZClcclxuXHJcbiAgICAgIGNvbnN0IFJlc29sdmVkRmlsdGVyQ29tcG9uZW50ID0gY29sdW1uLkZpbHRlciB8fCBGaWx0ZXJDb21wb25lbnRcclxuXHJcbiAgICAgIGNvbnN0IGlzRmlsdGVyYWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5maWx0ZXJhYmxlLCBmaWx0ZXJhYmxlLCBmYWxzZSlcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRoQ29tcG9uZW50XHJcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgIGNsYXNzZXNcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAuLi5zdHlsZXMsXHJcbiAgICAgICAgICAgIGZsZXg6IGAke3dpZHRofSAwIGF1dG9gLFxyXG4gICAgICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogYCR7bWF4V2lkdGh9cHhgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzRmlsdGVyYWJsZSA/IChcclxuICAgICAgICAgICAgXy5ub3JtYWxpemVDb21wb25lbnQoUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6ICh2YWx1ZSkgPT4gKHRoaXMuZmlsdGVyQ29sdW1uKGNvbHVtbiwgdmFsdWUpKVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFByb3BzLmNvbHVtbi5GaWx0ZXJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9UaENvbXBvbmVudD5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ha2VQYWdlUm93ID0gKHJvdywgaSwgcGF0aCA9IFtdKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvd0luZm8gPSB7XHJcbiAgICAgICAgb3JpZ2luYWw6IHJvd1tvcmlnaW5hbEtleV0sXHJcbiAgICAgICAgcm93OiByb3csXHJcbiAgICAgICAgaW5kZXg6IHJvd1tpbmRleEtleV0sXHJcbiAgICAgICAgdmlld0luZGV4OiArK3Jvd0luZGV4LFxyXG4gICAgICAgIGxldmVsOiBwYXRoLmxlbmd0aCxcclxuICAgICAgICBuZXN0aW5nUGF0aDogcGF0aC5jb25jYXQoW2ldKSxcclxuICAgICAgICBhZ2dyZWdhdGVkOiByb3dbYWdncmVnYXRlZEtleV0sXHJcbiAgICAgICAgZ3JvdXBlZEJ5UGl2b3Q6IHJvd1tncm91cGVkQnlQaXZvdEtleV0sXHJcbiAgICAgICAgc3ViUm93czogcm93W3N1YlJvd3NLZXldXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaXNFeHBhbmRlZCA9IF8uZ2V0KGV4cGFuZGVkLCByb3dJbmZvLm5lc3RpbmdQYXRoKVxyXG4gICAgICBjb25zdCB0ckdyb3VwUHJvcHMgPSBnZXRUckdyb3VwUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgdW5kZWZpbmVkLCB0aGlzKVxyXG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgdW5kZWZpbmVkLCB0aGlzKSlcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8VHJHcm91cENvbXBvbmVudFxyXG4gICAgICAgICAga2V5PXtyb3dJbmZvLm5lc3RpbmdQYXRoLmpvaW4oJ18nKX1cclxuICAgICAgICAgIHsuLi50ckdyb3VwUHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRyQ29tcG9uZW50XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICByb3cuX3ZpZXdJbmRleCAlIDIgPyAnLWV2ZW4nIDogJy1vZGQnXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlfVxyXG4gICAgICAgICAgICB7Li4udHJQcm9wcy5yZXN0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGkyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cclxuICAgICAgICAgICAgICBjb25zdCBzaG93ID0gdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XHJcbiAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5taW5XaWR0aClcclxuICAgICAgICAgICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2wudmFsdWUsIGNvbHVtbi53aWR0aCwgY29sdW1uLm1heFdpZHRoKVxyXG4gICAgICAgICAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VGRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpKVxyXG4gICAgICAgICAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpKVxyXG5cclxuICAgICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gW1xyXG4gICAgICAgICAgICAgICAgdGRQcm9wcy5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi50ZFByb3BzLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGVcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IGNlbGxJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ucm93SW5mbyxcclxuICAgICAgICAgICAgICAgIGlzRXhwYW5kZWQsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW46IHsuLi5jb2x1bW59LFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJvd0luZm8ucm93W2NvbHVtbi5pZF0sXHJcbiAgICAgICAgICAgICAgICBwaXZvdGVkOiBjb2x1bW4ucGl2b3RlZCxcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVyOiBjb2x1bW4uZXhwYW5kZXIsXHJcbiAgICAgICAgICAgICAgICByZXNpemVkLFxyXG4gICAgICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGgsXHJcbiAgICAgICAgICAgICAgICB0ZFByb3BzLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uUHJvcHMsXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNlbGxJbmZvLnZhbHVlXHJcblxyXG4gICAgICAgICAgICAgIGxldCBpbnRlcmFjdGlvblByb3BzXHJcbiAgICAgICAgICAgICAgbGV0IGlzQnJhbmNoXHJcbiAgICAgICAgICAgICAgbGV0IGlzUHJldmlld1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBvbkV4cGFuZGVyQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0V4cGFuZGVkID0gXy5jbG9uZShleHBhbmRlZClcclxuICAgICAgICAgICAgICAgIGlmIChpc0V4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5ld0V4cGFuZGVkID0gXy5zZXQobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIG5ld0V4cGFuZGVkID0gXy5zZXQobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCB7fSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKHtcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IG5ld0V4cGFuZGVkXHJcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UgJiYgb25FeHBhbmRlZENoYW5nZShuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIGUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBhIHN0YW5kYXJkIGNlbGxcclxuICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkNlbGwsIGNlbGxJbmZvLCB2YWx1ZSlcclxuXHJcbiAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBSZW5kZXJlcnNcclxuICAgICAgICAgICAgICBjb25zdCBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQgPSBjb2x1bW4uQWdncmVnYXRlZCB8fCAoIWNvbHVtbi5hZ2dyZWdhdGUgPyBBZ2dyZWdhdGVkQ29tcG9uZW50IDogY29sdW1uLkNlbGwpXHJcbiAgICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCA9IGNvbHVtbi5FeHBhbmRlciB8fCBFeHBhbmRlckNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCA9IGNvbHVtbi5QaXZvdFZhbHVlIHx8IFBpdm90VmFsdWVDb21wb25lbnRcclxuICAgICAgICAgICAgICBjb25zdCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9IFBpdm90Q29tcG9uZW50IHx8IChcclxuICAgICAgICAgICAgICAgICAgcHJvcHMgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RDb21wb25lbnQgPSBjb2x1bW4uUGl2b3QgfHwgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnRcclxuXHJcbiAgICAgICAgICAgICAgLy8gSXMgdGhpcyBjZWxsIGV4cGFuZGFibGU/XHJcbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQgfHwgY2VsbEluZm8uZXhwYW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIE1ha2UgaXQgZXhwYW5kYWJsZSBieSBkZWZ1YWx0XHJcbiAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcyA9IHtcclxuICAgICAgICAgICAgICAgICAgb25DbGljazogb25FeHBhbmRlckNsaWNrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBwaXZvdGVkLCBoYXMgbm8gc3ViUm93cywgYW5kIGRvZXMgbm90IGhhdmUgYSBzdWJDb21wb25lbnQsIGRvIG5vdCBtYWtlIGV4cGFuZGFibGVcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghU3ViQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMgPSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIElzIHRoaXMgY29sdW1uIGEgYnJhbmNoP1xyXG4gICAgICAgICAgICAgICAgaXNCcmFuY2ggPSByb3dJbmZvLnJvd1twaXZvdElES2V5XSA9PT0gY29sdW1uLmlkICYmXHJcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLnN1YlJvd3NcclxuICAgICAgICAgICAgICAgIC8vIFNob3VsZCB0aGlzIGNvbHVtbiBiZSBibGFuaz9cclxuICAgICAgICAgICAgICAgIGlzUHJldmlldyA9IHBpdm90QnkuaW5kZXhPZihjb2x1bW4uaWQpID4gcGl2b3RCeS5pbmRleE9mKHJvd0luZm8ucm93W3Bpdm90SURLZXldKSAmJlxyXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mby5zdWJSb3dzXHJcbiAgICAgICAgICAgICAgICAvLyBQaXZvdCBDZWxsIFJlbmRlciBPdmVycmlkZVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzQnJhbmNoKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGlzUGl2b3RcclxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoUmVzb2x2ZWRQaXZvdENvbXBvbmVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNlbGxJbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3dbcGl2b3RWYWxLZXldXHJcbiAgICAgICAgICAgICAgICAgIH0sIHJvd1twaXZvdFZhbEtleV0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzUHJldmlldykge1xyXG4gICAgICAgICAgICAgICAgICAvLyBTaG93IHRoZSBwaXZvdCBwcmV2aWV3XHJcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCwgY2VsbEluZm8sIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbEluZm8uYWdncmVnYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50LCBjZWxsSW5mbywgdmFsdWUpXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAoY2VsbEluZm8uZXhwYW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQsIGNlbGxJbmZvLCByb3dbcGl2b3RWYWxLZXldKVxyXG4gICAgICAgICAgICAgICAgaWYgKHBpdm90QnkpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmdyb3VwZWRCeVBpdm90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cyAmJiAhU3ViQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGNlbGxcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFRkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aTIgKyAnLScgKyBjb2x1bW4uaWR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICFzaG93ICYmICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgJiYgJ3J0LWV4cGFuZGFibGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIChpc0JyYW5jaCB8fCBpc1ByZXZpZXcpICYmICdydC1waXZvdCdcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogYCR7d2lkdGh9IDAgYXV0b2AsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogYCR7bWF4V2lkdGh9cHhgXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5pbnRlcmFjdGlvblByb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7cmVzb2x2ZWRDZWxsfVxyXG4gICAgICAgICAgICAgICAgPC9UZENvbXBvbmVudD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cclxuICAgICAgICAgIHsoXHJcbiAgICAgICAgICAgIHJvd0luZm8uc3ViUm93cyAmJlxyXG4gICAgICAgICAgICBpc0V4cGFuZGVkICYmXHJcbiAgICAgICAgICAgIHJvd0luZm8uc3ViUm93cy5tYXAoKGQsIGkpID0+IG1ha2VQYWdlUm93KGQsIGksIHJvd0luZm8ubmVzdGluZ1BhdGgpKVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtTdWJDb21wb25lbnQgJiYgIXJvd0luZm8uc3ViUm93cyAmJiBpc0V4cGFuZGVkICYmIFN1YkNvbXBvbmVudChyb3dJbmZvKX1cclxuICAgICAgICA8L1RyR3JvdXBDb21wb25lbnQ+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYWtlUGFkUm93ID0gKHJvdywgaSkgPT4ge1xyXG4gICAgICBjb25zdCB0ckdyb3VwUHJvcHMgPSBnZXRUckdyb3VwUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXHJcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRyR3JvdXBDb21wb25lbnRcclxuICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgIHsuLi50ckdyb3VwUHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRyQ29tcG9uZW50XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICAnLXBhZFJvdycsXHJcbiAgICAgICAgICAgICAgKHBhZ2VSb3dzLmxlbmd0aCArIGkpICUgMiA/ICctZXZlbicgOiAnLW9kZCcsXHJcbiAgICAgICAgICAgICAgdHJQcm9wcy5jbGFzc05hbWVcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGUgfHwge319XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZVBhZENvbHVtbil9XHJcbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxyXG4gICAgICAgIDwvVHJHcm91cENvbXBvbmVudD5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ha2VQYWRDb2x1bW4gPSAoY29sdW1uLCBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XHJcbiAgICAgIGNvbnN0IHNob3cgPSB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcclxuICAgICAgbGV0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbC52YWx1ZSwgY29sdW1uLndpZHRoLCBjb2x1bW4ubWluV2lkdGgpXHJcbiAgICAgIGxldCBmbGV4ID0gd2lkdGhcclxuICAgICAgbGV0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbC52YWx1ZSwgY29sdW1uLndpZHRoLCBjb2x1bW4ubWF4V2lkdGgpXHJcbiAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcykpXHJcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcykpXHJcblxyXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xyXG4gICAgICAgIHRkUHJvcHMuY2xhc3NOYW1lLFxyXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXHJcbiAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgIF1cclxuXHJcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgICAgICAuLi50ZFByb3BzLnN0eWxlLFxyXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcclxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUZENvbXBvbmVudFxyXG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICBjbGFzc2VzLFxyXG4gICAgICAgICAgICAhc2hvdyAmJiAnaGlkZGVuJ1xyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcclxuICAgICAgICAgICAgZmxleDogYCR7ZmxleH0gMCBhdXRvYCxcclxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcclxuICAgICAgICAgICAgbWF4V2lkdGg6IGAke21heFdpZHRofXB4YFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgPC9UZENvbXBvbmVudD5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXJzID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB0Rm9vdFByb3BzID0gZ2V0VGZvb3RQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcclxuICAgICAgY29uc3QgdEZvb3RUclByb3BzID0gXy5zcGxpdFByb3BzKGdldFRmb290VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRmb290Q29tcG9uZW50XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3RGb290UHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgLi4udEZvb3RQcm9wcy5zdHlsZSxcclxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHsuLi50Rm9vdFByb3BzLnJlc3R9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRyQ29tcG9uZW50XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICB0Rm9vdFRyUHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt0Rm9vdFRyUHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICAgIHsuLi50Rm9vdFRyUHJvcHMucmVzdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlQ29sdW1uRm9vdGVyKX1cclxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XHJcbiAgICAgICAgPC9UZm9vdENvbXBvbmVudD5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXIgPSAoY29sdW1uLCBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XHJcbiAgICAgIGNvbnN0IHNob3cgPSB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcclxuICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5taW5XaWR0aClcclxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5tYXhXaWR0aClcclxuICAgICAgY29uc3QgdEZvb3RUZFByb3BzID0gXy5zcGxpdFByb3BzKGdldFRmb290VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXHJcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcykpXHJcbiAgICAgIGNvbnN0IGNvbHVtbkZvb3RlclByb3BzID0gXy5zcGxpdFByb3BzKGNvbHVtbi5nZXRGb290ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcykpXHJcblxyXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xyXG4gICAgICAgIHRGb290VGRQcm9wcy5jbGFzc05hbWUsXHJcbiAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcclxuICAgICAgICBjb2x1bW5Qcm9wcy5jbGFzc05hbWUsXHJcbiAgICAgICAgY29sdW1uRm9vdGVyUHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgIF1cclxuXHJcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgICAgICAuLi50Rm9vdFRkUHJvcHMuc3R5bGUsXHJcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxyXG4gICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxyXG4gICAgICAgIC4uLmNvbHVtbkZvb3RlclByb3BzLnN0eWxlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRkQ29tcG9uZW50XHJcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgIGNsYXNzZXMsXHJcbiAgICAgICAgICAgICFzaG93ICYmICdoaWRkZW4nXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgLi4uc3R5bGVzLFxyXG4gICAgICAgICAgICBmbGV4OiBgJHt3aWR0aH0gMCBhdXRvYCxcclxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcclxuICAgICAgICAgICAgbWF4V2lkdGg6IGAke21heFdpZHRofXB4YFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxyXG4gICAgICAgICAgey4uLnRGb290VGRQcm9wcy5yZXN0fVxyXG4gICAgICAgICAgey4uLmNvbHVtbkZvb3RlclByb3BzLnJlc3R9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5Gb290ZXIsIHtcclxuICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcclxuICAgICAgICAgICAgY29sdW1uOiBjb2x1bW5cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvVGRDb21wb25lbnQ+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb290UHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpKVxyXG4gICAgY29uc3QgdGFibGVQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRUYWJsZVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSlcclxuICAgIGNvbnN0IHRCb2R5UHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VGJvZHlQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXHJcbiAgICBjb25zdCBwYWdpbmF0aW9uUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0UGFnaW5hdGlvblByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSlcclxuICAgIGNvbnN0IGxvYWRpbmdQcm9wcyA9IGdldExvYWRpbmdQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcclxuICAgIGNvbnN0IG5vRGF0YVByb3BzID0gZ2V0Tm9EYXRhUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXHJcbiAgICBjb25zdCByZXNpemVyUHJvcHMgPSBnZXRSZXNpemVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXHJcblxyXG4gICAgY29uc3QgbWFrZVRhYmxlID0gKCkgPT4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgJ1JlYWN0VGFibGUnLFxyXG4gICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgcm9vdFByb3BzLmNsYXNzTmFtZVxyXG4gICAgICAgICl9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgLi4ucm9vdFByb3BzLnN0eWxlXHJcbiAgICAgICAgfX1cclxuICAgICAgICB7Li4ucm9vdFByb3BzLnJlc3R9XHJcbiAgICAgID5cclxuICAgICAgICA8VGFibGVDb21wb25lbnRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgdGFibGVQcm9wcy5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgIGN1cnJlbnRseVJlc2l6aW5nID8gJ3J0LXJlc2l6aW5nJyA6ICcnXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgc3R5bGU9e3RhYmxlUHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICB7Li4udGFibGVQcm9wcy5yZXN0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtoYXNIZWFkZXJHcm91cHMgPyBtYWtlSGVhZGVyR3JvdXBzKCkgOiBudWxsfVxyXG4gICAgICAgICAge21ha2VIZWFkZXJzKCl9XHJcbiAgICAgICAgICB7aGFzRmlsdGVycyA/IG1ha2VGaWx0ZXJzKCkgOiBudWxsfVxyXG4gICAgICAgICAgPFRib2R5Q29tcG9uZW50XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgLi4udEJvZHlQcm9wcy5zdHlsZSxcclxuICAgICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHsuLi50Qm9keVByb3BzLnJlc3R9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwYWdlUm93cy5tYXAoKGQsIGkpID0+IG1ha2VQYWdlUm93KGQsIGkpKX1cclxuICAgICAgICAgICAge3BhZFJvd3MubWFwKG1ha2VQYWRSb3cpfVxyXG4gICAgICAgICAgPC9UYm9keUNvbXBvbmVudD5cclxuICAgICAgICAgIHtoYXNDb2x1bW5Gb290ZXIgPyBtYWtlQ29sdW1uRm9vdGVycygpIDogbnVsbH1cclxuICAgICAgICA8L1RhYmxlQ29tcG9uZW50PlxyXG4gICAgICAgIHtzaG93UGFnaW5hdGlvbiA/IChcclxuICAgICAgICAgIDxQYWdpbmF0aW9uQ29tcG9uZW50XHJcbiAgICAgICAgICAgIHsuLi5yZXNvbHZlZFN0YXRlfVxyXG4gICAgICAgICAgICBwYWdlcz17cGFnZXN9XHJcbiAgICAgICAgICAgIGNhblByZXZpb3VzPXtjYW5QcmV2aW91c31cclxuICAgICAgICAgICAgY2FuTmV4dD17Y2FuTmV4dH1cclxuICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXt0aGlzLm9uUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgb25QYWdlU2l6ZUNoYW5nZT17dGhpcy5vblBhZ2VTaXplQ2hhbmdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2luYXRpb25Qcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICAgIHN0eWxlPXtwYWdpbmF0aW9uUHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICAgIHsuLi5wYWdpbmF0aW9uUHJvcHMucmVzdH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgeyFwYWdlUm93cy5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgPE5vRGF0YUNvbXBvbmVudFxyXG4gICAgICAgICAgICB7Li4ubm9EYXRhUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChub0RhdGFUZXh0KX1cclxuICAgICAgICAgIDwvTm9EYXRhQ29tcG9uZW50PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPExvYWRpbmdDb21wb25lbnRcclxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICBsb2FkaW5nVGV4dD17bG9hZGluZ1RleHR9XHJcbiAgICAgICAgICB7Li4ubG9hZGluZ1Byb3BzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuICAgIC8vIGNoaWxkUHJvcHMgYXJlIG9wdGlvbmFsbHkgcGFzc2VkIHRvIGEgZnVuY3Rpb24tYXMtYS1jaGlsZFxyXG4gICAgcmV0dXJuIGNoaWxkcmVuID8gY2hpbGRyZW4oZmluYWxTdGF0ZSwgbWFrZVRhYmxlLCB0aGlzKSA6IG1ha2VUYWJsZSgpXHJcbiAgfVxyXG59XHJcbiJdfQ==