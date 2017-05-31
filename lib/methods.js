'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Base) {
  return function (_Base) {
    _inherits(_class, _Base);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'getResolvedState',
      value: function getResolvedState(props, state) {
        var resolvedState = _extends({}, _utils2.default.compactObject(this.state), _utils2.default.compactObject(this.props), _utils2.default.compactObject(state), _utils2.default.compactObject(props));
        return resolvedState;
      }
    }, {
      key: 'getDataModel',
      value: function getDataModel(newState) {
        var _this2 = this;

        var columns = newState.columns,
            _newState$pivotBy = newState.pivotBy,
            pivotBy = _newState$pivotBy === undefined ? [] : _newState$pivotBy,
            data = newState.data,
            pivotIDKey = newState.pivotIDKey,
            pivotValKey = newState.pivotValKey,
            subRowsKey = newState.subRowsKey,
            aggregatedKey = newState.aggregatedKey,
            nestingLevelKey = newState.nestingLevelKey,
            originalKey = newState.originalKey,
            indexKey = newState.indexKey,
            groupedByPivotKey = newState.groupedByPivotKey,
            SubComponent = newState.SubComponent;

        // Determine Header Groups

        var hasHeaderGroups = false;
        columns.forEach(function (column) {
          if (column.columns) {
            hasHeaderGroups = true;
          }
        });

        var columnsWithExpander = [].concat(_toConsumableArray(columns));

        var expanderColumn = columns.find(function (col) {
          return col.expander || col.columns && col.columns.some(function (col2) {
            return col2.expander;
          });
        });
        // The actual expander might be in the columns field of a group column
        if (expanderColumn && !expanderColumn.expander) {
          expanderColumn = expanderColumn.columns.find(function (col) {
            return col.expander;
          });
        }

        // If we have SubComponent's we need to make sure we have an expander column
        if (SubComponent && !expanderColumn) {
          expanderColumn = { expander: true };
          columnsWithExpander = [expanderColumn].concat(_toConsumableArray(columnsWithExpander));
        }

        var makeDecoratedColumn = function makeDecoratedColumn(column) {
          var dcol = void 0;
          if (column.expander) {
            dcol = _extends({}, _this2.props.column, _this2.props.expanderDefaults, column);
          } else {
            dcol = _extends({}, _this2.props.column, column);
          }

          if (typeof dcol.accessor === 'string') {
            dcol.id = dcol.id || dcol.accessor;
            var accessorString = dcol.accessor;
            dcol.accessor = function (row) {
              return _utils2.default.get(row, accessorString);
            };
            return dcol;
          }

          if (dcol.accessor && !dcol.id) {
            console.warn(dcol);
            throw new Error('A column id is required if using a non-string accessor for column above.');
          }

          if (!dcol.accessor) {
            dcol.accessor = function (d) {
              return undefined;
            };
          }

          // Ensure minWidth is not greater than maxWidth if set
          if (dcol.maxWidth < dcol.minWidth) {
            dcol.minWidth = dcol.maxWidth;
          }

          return dcol;
        };

        // Decorate the columns
        var decorateAndAddToAll = function decorateAndAddToAll(col) {
          var decoratedColumn = makeDecoratedColumn(col);
          allDecoratedColumns.push(decoratedColumn);
          return decoratedColumn;
        };
        var allDecoratedColumns = [];
        var decoratedColumns = columnsWithExpander.map(function (column, i) {
          if (column.columns) {
            return _extends({}, column, {
              columns: column.columns.map(decorateAndAddToAll)
            });
          } else {
            return decorateAndAddToAll(column);
          }
        });

        // Build the visible columns, headers and flat column list
        var visibleColumns = decoratedColumns.slice();
        var allVisibleColumns = [];

        visibleColumns = visibleColumns.map(function (column, i) {
          if (column.columns) {
            var visibleSubColumns = column.columns.filter(function (d) {
              return pivotBy.indexOf(d.id) > -1 ? false : _utils2.default.getFirstDefined(d.show, true);
            });
            return _extends({}, column, {
              columns: visibleSubColumns
            });
          }
          return column;
        });

        visibleColumns = visibleColumns.filter(function (column) {
          return column.columns ? column.columns.length : pivotBy.indexOf(column.id) > -1 ? false : _utils2.default.getFirstDefined(column.show, true);
        });

        // Find any custom pivot location
        var pivotIndex = visibleColumns.findIndex(function (col) {
          return col.pivot;
        });

        // Handle Pivot Columns
        if (pivotBy.length) {
          // Retrieve the pivot columns in the correct pivot order
          var pivotColumns = [];
          pivotBy.forEach(function (pivotID) {
            var found = allDecoratedColumns.find(function (d) {
              return d.id === pivotID;
            });
            if (found) {
              pivotColumns.push(found);
            }
          });

          var pivotColumnGroup = {
            header: function header() {
              return _react2.default.createElement(
                'strong',
                null,
                'Group'
              );
            },
            columns: pivotColumns.map(function (col) {
              return _extends({}, _this2.props.pivotDefaults, col, {
                pivoted: true
              });
            })
          };

          // Place the pivotColumns back into the visibleColumns
          if (pivotIndex >= 0) {
            pivotColumnGroup = _extends({}, visibleColumns[pivotIndex], pivotColumnGroup);
            visibleColumns.splice(pivotIndex, 1, pivotColumnGroup);
          } else {
            visibleColumns.unshift(pivotColumnGroup);
          }
        }

        // Build Header Groups
        var headerGroups = [];
        var currentSpan = [];

        // A convenience function to add a header and reset the currentSpan
        var addHeader = function addHeader(columns, column) {
          headerGroups.push(_extends({}, _this2.props.column, column, {
            columns: columns
          }));
          currentSpan = [];
        };

        // Build flast list of allVisibleColumns and HeaderGroups
        visibleColumns.forEach(function (column, i) {
          if (column.columns) {
            allVisibleColumns = allVisibleColumns.concat(column.columns);
            if (currentSpan.length > 0) {
              addHeader(currentSpan);
            }
            addHeader(column.columns, column);
            return;
          }
          allVisibleColumns.push(column);
          currentSpan.push(column);
        });
        if (hasHeaderGroups && currentSpan.length > 0) {
          addHeader(currentSpan);
        }

        // Access the data
        var accessRow = function accessRow(d, i) {
          var _row;

          var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          var row = (_row = {}, _defineProperty(_row, originalKey, d), _defineProperty(_row, indexKey, i), _defineProperty(_row, subRowsKey, d[subRowsKey]), _defineProperty(_row, nestingLevelKey, level), _row);
          allDecoratedColumns.forEach(function (column) {
            if (column.expander) return;
            row[column.id] = column.accessor(d);
          });
          if (row[subRowsKey]) {
            row[subRowsKey] = row[subRowsKey].map(function (d, i) {
              return accessRow(d, i, level + 1);
            });
          }
          return row;
        };
        var resolvedData = data.map(function (d, i) {
          return accessRow(d, i);
        });

        // If pivoting, recursively group the data
        var aggregate = function aggregate(rows) {
          var aggregationValues = {};
          aggregatingColumns.forEach(function (column) {
            var values = rows.map(function (d) {
              return d[column.id];
            });
            aggregationValues[column.id] = column.aggregate(values, rows);
          });
          return aggregationValues;
        };

        // TODO: Make it possible to fabricate nested rows without pivoting
        var aggregatingColumns = allVisibleColumns.filter(function (d) {
          return !d.expander && d.aggregate;
        });
        if (pivotBy.length) {
          var groupRecursively = function groupRecursively(rows, keys) {
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            // This is the last level, just return the rows
            if (i === keys.length) {
              return rows;
            }
            // Group the rows together for this level
            var groupedRows = Object.entries(_utils2.default.groupBy(rows, keys[i])).map(function (_ref) {
              var _ref3;

              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];

              return _ref3 = {}, _defineProperty(_ref3, pivotIDKey, keys[i]), _defineProperty(_ref3, pivotValKey, key), _defineProperty(_ref3, keys[i], key), _defineProperty(_ref3, subRowsKey, value), _defineProperty(_ref3, nestingLevelKey, i), _defineProperty(_ref3, groupedByPivotKey, true), _ref3;
            });
            // Recurse into the subRows
            groupedRows = groupedRows.map(function (rowGroup) {
              var _extends2;

              var subRows = groupRecursively(rowGroup[subRowsKey], keys, i + 1);
              return _extends({}, rowGroup, (_extends2 = {}, _defineProperty(_extends2, subRowsKey, subRows), _defineProperty(_extends2, aggregatedKey, true), _extends2), aggregate(subRows));
            });
            return groupedRows;
          };
          resolvedData = groupRecursively(resolvedData, pivotBy);
        }

        return _extends({}, newState, {
          resolvedData: resolvedData,
          allVisibleColumns: allVisibleColumns,
          headerGroups: headerGroups,
          allDecoratedColumns: allDecoratedColumns,
          hasHeaderGroups: hasHeaderGroups
        });
      }
    }, {
      key: 'getSortedData',
      value: function getSortedData(resolvedState) {
        var manual = resolvedState.manual,
            sorted = resolvedState.sorted,
            filtered = resolvedState.filtered,
            defaultFilterMethod = resolvedState.defaultFilterMethod,
            resolvedData = resolvedState.resolvedData,
            allVisibleColumns = resolvedState.allVisibleColumns,
            allDecoratedColumns = resolvedState.allDecoratedColumns;


        var sortMethodsByColumnID = {};

        allDecoratedColumns.filter(function (col) {
          return col.sortMethod;
        }).forEach(function (col) {
          sortMethodsByColumnID[col.id] = col.sortMethod;
        });

        // Resolve the data from either manual data or sorted data
        return {
          sortedData: manual ? resolvedData : this.sortData(this.filterData(resolvedData, filtered, defaultFilterMethod, allVisibleColumns), sorted, sortMethodsByColumnID)
        };
      }
    }, {
      key: 'fireFetchData',
      value: function fireFetchData() {
        this.props.onFetchData(this.getResolvedState(), this);
      }
    }, {
      key: 'getPropOrState',
      value: function getPropOrState(key) {
        return _utils2.default.getFirstDefined(this.props[key], this.state[key]);
      }
    }, {
      key: 'getStateOrProp',
      value: function getStateOrProp(key) {
        return _utils2.default.getFirstDefined(this.state[key], this.props[key]);
      }
    }, {
      key: 'filterData',
      value: function filterData(data, filtered, defaultFilterMethod, allVisibleColumns) {
        var _this3 = this;

        var filteredData = data;

        if (filtered.length) {
          filteredData = filtered.reduce(function (filteredSoFar, nextFilter) {
            return filteredSoFar.filter(function (row) {
              var column = void 0;

              column = allVisibleColumns.find(function (x) {
                return x.id === nextFilter.id;
              });

              // Don't filter hidden columns or columns that have had their filters disabled
              if (!column || column.filterable === false) {
                return true;
              }

              var filterMethod = column.filterMethod || defaultFilterMethod;

              return filterMethod(nextFilter, row, column);
            });
          }, filteredData);

          // Apply the filter to the subrows if we are pivoting, and then
          // filter any rows without subcolumns because it would be strange to show
          filteredData = filteredData.map(function (row) {
            if (!row[_this3.props.subRowsKey]) {
              return row;
            }
            return _extends({}, row, _defineProperty({}, _this3.props.subRowsKey, _this3.filterData(row[_this3.props.subRowsKey], filtered, defaultFilterMethod, allVisibleColumns)));
          }).filter(function (row) {
            if (!row[_this3.props.subRowsKey]) {
              return true;
            }
            return row[_this3.props.subRowsKey].length > 0;
          });
        }

        return filteredData;
      }
    }, {
      key: 'sortData',
      value: function sortData(data, sorted) {
        var _this4 = this;

        var sortMethodsByColumnID = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (!sorted.length) {
          return data;
        }

        var sortedData = (this.props.orderByMethod || _utils2.default.orderBy)(data, sorted.map(function (sort) {
          // Support custom sorting methods for each column
          if (sortMethodsByColumnID[sort.id]) {
            return function (a, b) {
              return sortMethodsByColumnID[sort.id](a[sort.id], b[sort.id]);
            };
          }
          return function (a, b) {
            return _this4.props.defaultSortMethod(a[sort.id], b[sort.id]);
          };
        }), sorted.map(function (d) {
          return !d.desc;
        }), this.props.indexKey);

        sortedData.forEach(function (row) {
          if (!row[_this4.props.subRowsKey]) {
            return;
          }
          row[_this4.props.subRowsKey] = _this4.sortData(row[_this4.props.subRowsKey], sorted, sortMethodsByColumnID);
        });

        return sortedData;
      }
    }, {
      key: 'getMinRows',
      value: function getMinRows() {
        return _utils2.default.getFirstDefined(this.props.minRows, this.getStateOrProp('pageSize'));
      }

      // User actions

    }, {
      key: 'onPageChange',
      value: function onPageChange(page) {
        var _this5 = this;

        var _props = this.props,
            onPageChange = _props.onPageChange,
            collapseOnPageChange = _props.collapseOnPageChange;


        var newState = { page: page };
        if (collapseOnPageChange) {
          newState.expanded = {};
        }
        this.setStateWithData(newState, function () {
          onPageChange && onPageChange(page);
          _this5.fireFetchData();
        });
      }
    }, {
      key: 'onPageSizeChange',
      value: function onPageSizeChange(newPageSize) {
        var _this6 = this;

        var onPageSizeChange = this.props.onPageSizeChange;

        var _getResolvedState = this.getResolvedState(),
            pageSize = _getResolvedState.pageSize,
            page = _getResolvedState.page;

        // Normalize the page to display


        var currentRow = pageSize * page;
        var newPage = Math.floor(currentRow / newPageSize);

        this.setStateWithData({
          pageSize: newPageSize,
          page: newPage
        }, function () {
          onPageSizeChange && onPageSizeChange(newPageSize, newPage);
          _this6.fireFetchData();
        });
      }
    }, {
      key: 'sortColumn',
      value: function sortColumn(column, additive) {
        var _this7 = this;

        var _getResolvedState2 = this.getResolvedState(),
            sorted = _getResolvedState2.sorted,
            skipNextSort = _getResolvedState2.skipNextSort;

        // we can't stop event propagation from the column resize move handlers
        // attached to the document because of react's synthetic events
        // so we have to prevent the sort function from actually sorting
        // if we click on the column resize element within a header.


        if (skipNextSort) {
          this.setStateWithData({
            skipNextSort: false
          });
          return;
        }

        var onSortedChange = this.props.onSortedChange;


        var newSorted = _utils2.default.clone(sorted || []).map(function (d) {
          d.desc = _utils2.default.isSortingDesc(d);
          return d;
        });
        if (!_utils2.default.isArray(column)) {
          // Single-Sort
          var existingIndex = newSorted.findIndex(function (d) {
            return d.id === column.id;
          });
          if (existingIndex > -1) {
            var existing = newSorted[existingIndex];
            if (existing.desc) {
              if (additive) {
                newSorted.splice(existingIndex, 1);
              } else {
                existing.desc = false;
                newSorted = [existing];
              }
            } else {
              existing.desc = true;
              if (!additive) {
                newSorted = [existing];
              }
            }
          } else {
            if (additive) {
              newSorted.push({
                id: column.id,
                desc: false
              });
            } else {
              newSorted = [{
                id: column.id,
                desc: false
              }];
            }
          }
        } else {
          // Multi-Sort
          var _existingIndex = newSorted.findIndex(function (d) {
            return d.id === column[0].id;
          });
          // Existing Sorted Column
          if (_existingIndex > -1) {
            var _existing = newSorted[_existingIndex];
            if (_existing.desc) {
              if (additive) {
                newSorted.splice(_existingIndex, column.length);
              } else {
                column.forEach(function (d, i) {
                  newSorted[_existingIndex + i].desc = false;
                });
              }
            } else {
              column.forEach(function (d, i) {
                newSorted[_existingIndex + i].desc = true;
              });
            }
            if (!additive) {
              newSorted = newSorted.slice(_existingIndex, column.length);
            }
          } else {
            // New Sort Column
            if (additive) {
              newSorted = newSorted.concat(column.map(function (d) {
                return {
                  id: d.id,
                  desc: false
                };
              }));
            } else {
              newSorted = column.map(function (d) {
                return {
                  id: d.id,
                  desc: false
                };
              });
            }
          }
        }

        this.setStateWithData({
          page: !sorted.length && newSorted.length || !additive ? 0 : this.state.page,
          sorted: newSorted
        }, function () {
          onSortedChange && onSortedChange(newSorted, column, additive);
          _this7.fireFetchData();
        });
      }
    }, {
      key: 'filterColumn',
      value: function filterColumn(column, value) {
        var _this8 = this;

        var _getResolvedState3 = this.getResolvedState(),
            filtered = _getResolvedState3.filtered;

        var onFilteredChange = this.props.onFilteredChange;

        // Remove old filter first if it exists

        var newFiltering = (filtered || []).filter(function (x) {
          if (x.id !== column.id) {
            return true;
          }
        });

        if (value !== '') {
          newFiltering.push({
            id: column.id,
            value: value
          });
        }

        this.setStateWithData({
          filtered: newFiltering
        }, function () {
          onFilteredChange && onFilteredChange(newFiltering, column, value);
          _this8.fireFetchData();
        });
      }
    }, {
      key: 'resizeColumnStart',
      value: function resizeColumnStart(column, event, isTouch) {
        var _this9 = this;

        var parentWidth = event.target.parentElement.getBoundingClientRect().width;

        var pageX = void 0;
        if (isTouch) {
          pageX = event.changedTouches[0].pageX;
        } else {
          pageX = event.pageX;
        }

        this.setStateWithData({
          currentlyResizing: {
            id: column.id,
            startX: pageX,
            parentWidth: parentWidth
          }
        }, function () {
          if (isTouch) {
            document.addEventListener('touchmove', _this9.resizeColumnMoving);
            document.addEventListener('touchcancel', _this9.resizeColumnEnd);
            document.addEventListener('touchend', _this9.resizeColumnEnd);
          } else {
            document.addEventListener('mousemove', _this9.resizeColumnMoving);
            document.addEventListener('mouseup', _this9.resizeColumnEnd);
            document.addEventListener('mouseleave', _this9.resizeColumnEnd);
          }
        });
      }
    }, {
      key: 'resizeColumnEnd',
      value: function resizeColumnEnd(event) {
        var isTouch = event.type === 'touchend' || event.type === 'touchcancel';

        if (isTouch) {
          document.removeEventListener('touchmove', this.resizeColumnMoving);
          document.removeEventListener('touchcancel', this.resizeColumnEnd);
          document.removeEventListener('touchend', this.resizeColumnEnd);
        }

        // If its a touch event clear the mouse one's as well because sometimes
        // the mouseDown event gets called as well, but the mouseUp event doesn't
        document.removeEventListener('mousemove', this.resizeColumnMoving);
        document.removeEventListener('mouseup', this.resizeColumnEnd);
        document.removeEventListener('mouseleave', this.resizeColumnEnd);

        // The touch events don't propagate up to the sorting's onMouseDown event so
        // no need to prevent it from happening or else the first click after a touch
        // event resize will not sort the column.
        if (!isTouch) {
          this.setStateWithData({
            skipNextSort: true,
            currentlyResizing: false
          });
        }
      }
    }, {
      key: 'resizeColumnMoving',
      value: function resizeColumnMoving(event) {
        var onResizedChange = this.props.onResizedChange;

        var _getResolvedState4 = this.getResolvedState(),
            resized = _getResolvedState4.resized,
            currentlyResizing = _getResolvedState4.currentlyResizing;

        // Delete old value


        var newResized = resized.filter(function (x) {
          return x.id !== currentlyResizing.id;
        });

        var pageX = void 0;

        if (event.type === 'touchmove') {
          pageX = event.changedTouches[0].pageX;
        } else if (event.type === 'mousemove') {
          pageX = event.pageX;
        }

        // Set the min size to 10 to account for margin and border or else the group headers don't line up correctly
        var newWidth = Math.max(currentlyResizing.parentWidth + pageX - currentlyResizing.startX, 11);

        newResized.push({
          id: currentlyResizing.id,
          value: newWidth
        });

        this.setStateWithData({
          resized: newResized
        }, function () {
          onResizedChange && onResizedChange(newResized, event);
        });
      }
    }]);

    return _class;
  }(Base);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRob2RzLmpzIl0sIm5hbWVzIjpbInByb3BzIiwic3RhdGUiLCJyZXNvbHZlZFN0YXRlIiwiY29tcGFjdE9iamVjdCIsIm5ld1N0YXRlIiwiY29sdW1ucyIsInBpdm90QnkiLCJkYXRhIiwicGl2b3RJREtleSIsInBpdm90VmFsS2V5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJuZXN0aW5nTGV2ZWxLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJTdWJDb21wb25lbnQiLCJoYXNIZWFkZXJHcm91cHMiLCJmb3JFYWNoIiwiY29sdW1uIiwiY29sdW1uc1dpdGhFeHBhbmRlciIsImV4cGFuZGVyQ29sdW1uIiwiZmluZCIsImNvbCIsImV4cGFuZGVyIiwic29tZSIsImNvbDIiLCJtYWtlRGVjb3JhdGVkQ29sdW1uIiwiZGNvbCIsImV4cGFuZGVyRGVmYXVsdHMiLCJhY2Nlc3NvciIsImlkIiwiYWNjZXNzb3JTdHJpbmciLCJnZXQiLCJyb3ciLCJjb25zb2xlIiwid2FybiIsIkVycm9yIiwidW5kZWZpbmVkIiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsImRlY29yYXRlQW5kQWRkVG9BbGwiLCJkZWNvcmF0ZWRDb2x1bW4iLCJhbGxEZWNvcmF0ZWRDb2x1bW5zIiwicHVzaCIsImRlY29yYXRlZENvbHVtbnMiLCJtYXAiLCJpIiwidmlzaWJsZUNvbHVtbnMiLCJzbGljZSIsImFsbFZpc2libGVDb2x1bW5zIiwidmlzaWJsZVN1YkNvbHVtbnMiLCJmaWx0ZXIiLCJpbmRleE9mIiwiZCIsImdldEZpcnN0RGVmaW5lZCIsInNob3ciLCJsZW5ndGgiLCJwaXZvdEluZGV4IiwiZmluZEluZGV4IiwicGl2b3QiLCJwaXZvdENvbHVtbnMiLCJmb3VuZCIsInBpdm90SUQiLCJwaXZvdENvbHVtbkdyb3VwIiwiaGVhZGVyIiwicGl2b3REZWZhdWx0cyIsInBpdm90ZWQiLCJzcGxpY2UiLCJ1bnNoaWZ0IiwiaGVhZGVyR3JvdXBzIiwiY3VycmVudFNwYW4iLCJhZGRIZWFkZXIiLCJjb25jYXQiLCJhY2Nlc3NSb3ciLCJsZXZlbCIsInJlc29sdmVkRGF0YSIsImFnZ3JlZ2F0ZSIsInJvd3MiLCJhZ2dyZWdhdGlvblZhbHVlcyIsImFnZ3JlZ2F0aW5nQ29sdW1ucyIsInZhbHVlcyIsImdyb3VwUmVjdXJzaXZlbHkiLCJrZXlzIiwiZ3JvdXBlZFJvd3MiLCJPYmplY3QiLCJlbnRyaWVzIiwiZ3JvdXBCeSIsImtleSIsInZhbHVlIiwic3ViUm93cyIsInJvd0dyb3VwIiwibWFudWFsIiwic29ydGVkIiwiZmlsdGVyZWQiLCJkZWZhdWx0RmlsdGVyTWV0aG9kIiwic29ydE1ldGhvZHNCeUNvbHVtbklEIiwic29ydE1ldGhvZCIsInNvcnRlZERhdGEiLCJzb3J0RGF0YSIsImZpbHRlckRhdGEiLCJvbkZldGNoRGF0YSIsImdldFJlc29sdmVkU3RhdGUiLCJmaWx0ZXJlZERhdGEiLCJyZWR1Y2UiLCJmaWx0ZXJlZFNvRmFyIiwibmV4dEZpbHRlciIsIngiLCJmaWx0ZXJhYmxlIiwiZmlsdGVyTWV0aG9kIiwib3JkZXJCeU1ldGhvZCIsIm9yZGVyQnkiLCJzb3J0IiwiYSIsImIiLCJkZWZhdWx0U29ydE1ldGhvZCIsImRlc2MiLCJtaW5Sb3dzIiwiZ2V0U3RhdGVPclByb3AiLCJwYWdlIiwib25QYWdlQ2hhbmdlIiwiY29sbGFwc2VPblBhZ2VDaGFuZ2UiLCJleHBhbmRlZCIsInNldFN0YXRlV2l0aERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwibmV3UGFnZVNpemUiLCJvblBhZ2VTaXplQ2hhbmdlIiwicGFnZVNpemUiLCJjdXJyZW50Um93IiwibmV3UGFnZSIsIk1hdGgiLCJmbG9vciIsImFkZGl0aXZlIiwic2tpcE5leHRTb3J0Iiwib25Tb3J0ZWRDaGFuZ2UiLCJuZXdTb3J0ZWQiLCJjbG9uZSIsImlzU29ydGluZ0Rlc2MiLCJpc0FycmF5IiwiZXhpc3RpbmdJbmRleCIsImV4aXN0aW5nIiwib25GaWx0ZXJlZENoYW5nZSIsIm5ld0ZpbHRlcmluZyIsImV2ZW50IiwiaXNUb3VjaCIsInBhcmVudFdpZHRoIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwicGFnZVgiLCJjaGFuZ2VkVG91Y2hlcyIsImN1cnJlbnRseVJlc2l6aW5nIiwic3RhcnRYIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplQ29sdW1uTW92aW5nIiwicmVzaXplQ29sdW1uRW5kIiwidHlwZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvblJlc2l6ZWRDaGFuZ2UiLCJyZXNpemVkIiwibmV3UmVzaXplZCIsIm5ld1dpZHRoIiwibWF4IiwiQmFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztrQkFFZTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx1Q0FDS0EsS0FETCxFQUNZQyxLQURaLEVBQ21CO0FBQzlCLFlBQU1DLDZCQUNELGdCQUFFQyxhQUFGLENBQWdCLEtBQUtGLEtBQXJCLENBREMsRUFFRCxnQkFBRUUsYUFBRixDQUFnQixLQUFLSCxLQUFyQixDQUZDLEVBR0QsZ0JBQUVHLGFBQUYsQ0FBZ0JGLEtBQWhCLENBSEMsRUFJRCxnQkFBRUUsYUFBRixDQUFnQkgsS0FBaEIsQ0FKQyxDQUFOO0FBTUEsZUFBT0UsYUFBUDtBQUNEO0FBVFk7QUFBQTtBQUFBLG1DQVdDRSxRQVhELEVBV1c7QUFBQTs7QUFBQSxZQUVwQkMsT0FGb0IsR0FjbEJELFFBZGtCLENBRXBCQyxPQUZvQjtBQUFBLGdDQWNsQkQsUUFka0IsQ0FHcEJFLE9BSG9CO0FBQUEsWUFHcEJBLE9BSG9CLHFDQUdWLEVBSFU7QUFBQSxZQUlwQkMsSUFKb0IsR0FjbEJILFFBZGtCLENBSXBCRyxJQUpvQjtBQUFBLFlBS3BCQyxVQUxvQixHQWNsQkosUUFka0IsQ0FLcEJJLFVBTG9CO0FBQUEsWUFNcEJDLFdBTm9CLEdB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a0MsR0FBTCxDQUFTWixrQkFBa0JQLFdBQWxCLEdBQWdDSyxLQUFoQyxHQUF3Q0Usa0JBQWtCQyxNQUFuRSxFQUEyRSxFQUEzRSxDQUFqQjs7QUFFQVMsbUJBQVd0SCxJQUFYLENBQWdCO0FBQ2RiLGNBQUl5SCxrQkFBa0J6SCxFQURSO0FBRWQwRCxpQkFBTzBFO0FBRk8sU0FBaEI7O0FBS0EsYUFBS3hDLGdCQUFMLENBQXNCO0FBQ3BCc0MsbUJBQVNDO0FBRFcsU0FBdEIsRUFFRyxZQUFNO0FBQ1BGLDZCQUFtQkEsZ0JBQWdCRSxVQUFoQixFQUE0Qm5CLEtBQTVCLENBQW5CO0FBQ0QsU0FKRDtBQUtEO0FBeG5CWTs7QUFBQTtBQUFBLElBQXNCc0IsSUFBdEI7QUFBQSxDIiwiZmlsZSI6Im1ldGhvZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlID0+IGNsYXNzIGV4dGVuZHMgQmFzZSB7XHJcbiAgZ2V0UmVzb2x2ZWRTdGF0ZSAocHJvcHMsIHN0YXRlKSB7XHJcbiAgICBjb25zdCByZXNvbHZlZFN0YXRlID0ge1xyXG4gICAgICAuLi5fLmNvbXBhY3RPYmplY3QodGhpcy5zdGF0ZSksXHJcbiAgICAgIC4uLl8uY29tcGFjdE9iamVjdCh0aGlzLnByb3BzKSxcclxuICAgICAgLi4uXy5jb21wYWN0T2JqZWN0KHN0YXRlKSxcclxuICAgICAgLi4uXy5jb21wYWN0T2JqZWN0KHByb3BzKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc29sdmVkU3RhdGVcclxuICB9XHJcblxyXG4gIGdldERhdGFNb2RlbCAobmV3U3RhdGUpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY29sdW1ucyxcclxuICAgICAgcGl2b3RCeSA9IFtdLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBwaXZvdElES2V5LFxyXG4gICAgICBwaXZvdFZhbEtleSxcclxuICAgICAgc3ViUm93c0tleSxcclxuICAgICAgYWdncmVnYXRlZEtleSxcclxuICAgICAgbmVzdGluZ0xldmVsS2V5LFxyXG4gICAgICBvcmlnaW5hbEtleSxcclxuICAgICAgaW5kZXhLZXksXHJcbiAgICAgIGdyb3VwZWRCeVBpdm90S2V5LFxyXG4gICAgICBTdWJDb21wb25lbnRcclxuICAgIH0gPSBuZXdTdGF0ZVxyXG5cclxuICAgIC8vIERldGVybWluZSBIZWFkZXIgR3JvdXBzXHJcbiAgICBsZXQgaGFzSGVhZGVyR3JvdXBzID0gZmFsc2VcclxuICAgIGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLmNvbHVtbnMpIHtcclxuICAgICAgICBoYXNIZWFkZXJHcm91cHMgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGNvbHVtbnNXaXRoRXhwYW5kZXIgPSBbLi4uY29sdW1uc11cclxuXHJcbiAgICBsZXQgZXhwYW5kZXJDb2x1bW4gPSBjb2x1bW5zLmZpbmQoY29sID0+IGNvbC5leHBhbmRlciB8fCAoY29sLmNvbHVtbnMgJiYgY29sLmNvbHVtbnMuc29tZShjb2wyID0+IGNvbDIuZXhwYW5kZXIpKSlcclxuICAgIC8vIFRoZSBhY3R1YWwgZXhwYW5kZXIgbWlnaHQgYmUgaW4gdGhlIGNvbHVtbnMgZmllbGQgb2YgYSBncm91cCBjb2x1bW5cclxuICAgIGlmIChleHBhbmRlckNvbHVtbiAmJiAhZXhwYW5kZXJDb2x1bW4uZXhwYW5kZXIpIHtcclxuICAgICAgZXhwYW5kZXJDb2x1bW4gPSBleHBhbmRlckNvbHVtbi5jb2x1bW5zLmZpbmQoY29sID0+IGNvbC5leHBhbmRlcilcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB3ZSBoYXZlIFN1YkNvbXBvbmVudCdzIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlIGhhdmUgYW4gZXhwYW5kZXIgY29sdW1uXHJcbiAgICBpZiAoU3ViQ29tcG9uZW50ICYmICFleHBhbmRlckNvbHVtbikge1xyXG4gICAgICBleHBhbmRlckNvbHVtbiA9IHtleHBhbmRlcjogdHJ1ZX1cclxuICAgICAgY29sdW1uc1dpdGhFeHBhbmRlciA9IFtleHBhbmRlckNvbHVtbiwgLi4uY29sdW1uc1dpdGhFeHBhbmRlcl1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYWtlRGVjb3JhdGVkQ29sdW1uID0gKGNvbHVtbikgPT4ge1xyXG4gICAgICBsZXQgZGNvbFxyXG4gICAgICBpZiAoY29sdW1uLmV4cGFuZGVyKSB7XHJcbiAgICAgICAgZGNvbCA9IHtcclxuICAgICAgICAgIC4uLnRoaXMucHJvcHMuY29sdW1uLFxyXG4gICAgICAgICAgLi4udGhpcy5wcm9wcy5leHBhbmRlckRlZmF1bHRzLFxyXG4gICAgICAgICAgLi4uY29sdW1uXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRjb2wgPSB7XHJcbiAgICAgICAgICAuLi50aGlzLnByb3BzLmNvbHVtbixcclxuICAgICAgICAgIC4uLmNvbHVtblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBkY29sLmFjY2Vzc29yID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGRjb2wuaWQgPSBkY29sLmlkIHx8IGRjb2wuYWNjZXNzb3JcclxuICAgICAgICBjb25zdCBhY2Nlc3NvclN0cmluZyA9IGRjb2wuYWNjZXNzb3JcclxuICAgICAgICBkY29sLmFjY2Vzc29yID0gcm93ID0+IF8uZ2V0KHJvdywgYWNjZXNzb3JTdHJpbmcpXHJcbiAgICAgICAgcmV0dXJuIGRjb2xcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRjb2wuYWNjZXNzb3IgJiYgIWRjb2wuaWQpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oZGNvbClcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgY29sdW1uIGlkIGlzIHJlcXVpcmVkIGlmIHVzaW5nIGEgbm9uLXN0cmluZyBhY2Nlc3NvciBmb3IgY29sdW1uIGFib3ZlLicpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghZGNvbC5hY2Nlc3Nvcikge1xyXG4gICAgICAgIGRjb2wuYWNjZXNzb3IgPSBkID0+IHVuZGVmaW5lZFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBFbnN1cmUgbWluV2lkdGggaXMgbm90IGdyZWF0ZXIgdGhhbiBtYXhXaWR0aCBpZiBzZXRcclxuICAgICAgaWYgKGRjb2wubWF4V2lkdGggPCBkY29sLm1pbldpZHRoKSB7XHJcbiAgICAgICAgZGNvbC5taW5XaWR0aCA9IGRjb2wubWF4V2lkdGhcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRjb2xcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWNvcmF0ZSB0aGUgY29sdW1uc1xyXG4gICAgY29uc3QgZGVjb3JhdGVBbmRBZGRUb0FsbCA9IChjb2wpID0+IHtcclxuICAgICAgY29uc3QgZGVjb3JhdGVkQ29sdW1uID0gbWFrZURlY29yYXRlZENvbHVtbihjb2wpXHJcbiAgICAgIGFsbERlY29yYXRlZENvbHVtbnMucHVzaChkZWNvcmF0ZWRDb2x1bW4pXHJcbiAgICAgIHJldHVybiBkZWNvcmF0ZWRDb2x1bW5cclxuICAgIH1cclxuICAgIGxldCBhbGxEZWNvcmF0ZWRDb2x1bW5zID0gW11cclxuICAgIGNvbnN0IGRlY29yYXRlZENvbHVtbnMgPSBjb2x1bW5zV2l0aEV4cGFuZGVyLm1hcCgoY29sdW1uLCBpKSA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4uY29sdW1ucykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5jb2x1bW4sXHJcbiAgICAgICAgICBjb2x1bW5zOiBjb2x1bW4uY29sdW1ucy5tYXAoZGVjb3JhdGVBbmRBZGRUb0FsbClcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGRlY29yYXRlQW5kQWRkVG9BbGwoY29sdW1uKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSB2aXNpYmxlIGNvbHVtbnMsIGhlYWRlcnMgYW5kIGZsYXQgY29sdW1uIGxpc3RcclxuICAgIGxldCB2aXNpYmxlQ29sdW1ucyA9IGRlY29yYXRlZENvbHVtbnMuc2xpY2UoKVxyXG4gICAgbGV0IGFsbFZpc2libGVDb2x1bW5zID0gW11cclxuXHJcbiAgICB2aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zLm1hcCgoY29sdW1uLCBpKSA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4uY29sdW1ucykge1xyXG4gICAgICAgIGNvbnN0IHZpc2libGVTdWJDb2x1bW5zID0gY29sdW1uLmNvbHVtbnMuZmlsdGVyKGQgPT4gcGl2b3RCeS5pbmRleE9mKGQuaWQpID4gLTEgPyBmYWxzZSA6IF8uZ2V0Rmlyc3REZWZpbmVkKGQuc2hvdywgdHJ1ZSkpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbHVtbixcclxuICAgICAgICAgIGNvbHVtbnM6IHZpc2libGVTdWJDb2x1bW5zXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb2x1bW5cclxuICAgIH0pXHJcblxyXG4gICAgdmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1ucy5maWx0ZXIoY29sdW1uID0+IHtcclxuICAgICAgcmV0dXJuIGNvbHVtbi5jb2x1bW5zID8gY29sdW1uLmNvbHVtbnMubGVuZ3RoIDogcGl2b3RCeS5pbmRleE9mKGNvbHVtbi5pZCkgPiAtMSA/IGZhbHNlIDogXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnNob3csIHRydWUpXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEZpbmQgYW55IGN1c3RvbSBwaXZvdCBsb2NhdGlvblxyXG4gICAgY29uc3QgcGl2b3RJbmRleCA9IHZpc2libGVDb2x1bW5zLmZpbmRJbmRleChjb2wgPT4gY29sLnBpdm90KVxyXG5cclxuICAgIC8vIEhhbmRsZSBQaXZvdCBDb2x1bW5zXHJcbiAgICBpZiAocGl2b3RCeS5sZW5ndGgpIHtcclxuICAgICAgLy8gUmV0cmlldmUgdGhlIHBpdm90IGNvbHVtbnMgaW4gdGhlIGNvcnJlY3QgcGl2b3Qgb3JkZXJcclxuICAgICAgY29uc3QgcGl2b3RDb2x1bW5zID0gW11cclxuICAgICAgcGl2b3RCeS5mb3JFYWNoKHBpdm90SUQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvdW5kID0gYWxsRGVjb3JhdGVkQ29sdW1ucy5maW5kKGQgPT4gZC5pZCA9PT0gcGl2b3RJRClcclxuICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgIHBpdm90Q29sdW1ucy5wdXNoKGZvdW5kKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGxldCBwaXZvdENvbHVtbkdyb3VwID0ge1xyXG4gICAgICAgIGhlYWRlcjogKCkgPT4gPHN0cm9uZz5Hcm91cDwvc3Ryb25nPixcclxuICAgICAgICBjb2x1bW5zOiBwaXZvdENvbHVtbnMubWFwKGNvbCA9PiAoe1xyXG4gICAgICAgICAgLi4udGhpcy5wcm9wcy5waXZvdERlZmF1bHRzLFxyXG4gICAgICAgICAgLi4uY29sLFxyXG4gICAgICAgICAgcGl2b3RlZDogdHJ1ZVxyXG4gICAgICAgIH0pKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQbGFjZSB0aGUgcGl2b3RDb2x1bW5zIGJhY2sgaW50byB0aGUgdmlzaWJsZUNvbHVtbnNcclxuICAgICAgaWYgKHBpdm90SW5kZXggPj0gMCkge1xyXG4gICAgICAgIHBpdm90Q29sdW1uR3JvdXAgPSB7XHJcbiAgICAgICAgICAuLi52aXNpYmxlQ29sdW1uc1twaXZvdEluZGV4XSxcclxuICAgICAgICAgIC4uLnBpdm90Q29sdW1uR3JvdXBcclxuICAgICAgICB9XHJcbiAgICAgICAgdmlzaWJsZUNvbHVtbnMuc3BsaWNlKHBpdm90SW5kZXgsIDEsIHBpdm90Q29sdW1uR3JvdXApXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmlzaWJsZUNvbHVtbnMudW5zaGlmdChwaXZvdENvbHVtbkdyb3VwKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgSGVhZGVyIEdyb3Vwc1xyXG4gICAgY29uc3QgaGVhZGVyR3JvdXBzID0gW11cclxuICAgIGxldCBjdXJyZW50U3BhbiA9IFtdXHJcblxyXG4gICAgLy8gQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byBhZGQgYSBoZWFkZXIgYW5kIHJlc2V0IHRoZSBjdXJyZW50U3BhblxyXG4gICAgY29uc3QgYWRkSGVhZGVyID0gKGNvbHVtbnMsIGNvbHVtbikgPT4ge1xyXG4gICAgICBoZWFkZXJHcm91cHMucHVzaCh7XHJcbiAgICAgICAgLi4udGhpcy5wcm9wcy5jb2x1bW4sXHJcbiAgICAgICAgLi4uY29sdW1uLFxyXG4gICAgICAgIGNvbHVtbnM6IGNvbHVtbnNcclxuICAgICAgfSlcclxuICAgICAgY3VycmVudFNwYW4gPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkIGZsYXN0IGxpc3Qgb2YgYWxsVmlzaWJsZUNvbHVtbnMgYW5kIEhlYWRlckdyb3Vwc1xyXG4gICAgdmlzaWJsZUNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBpKSA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4uY29sdW1ucykge1xyXG4gICAgICAgIGFsbFZpc2libGVDb2x1bW5zID0gYWxsVmlzaWJsZUNvbHVtbnMuY29uY2F0KGNvbHVtbi5jb2x1bW5zKVxyXG4gICAgICAgIGlmIChjdXJyZW50U3Bhbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBhZGRIZWFkZXIoY3VycmVudFNwYW4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZEhlYWRlcihjb2x1bW4uY29sdW1ucywgY29sdW1uKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGFsbFZpc2libGVDb2x1bW5zLnB1c2goY29sdW1uKVxyXG4gICAgICBjdXJyZW50U3Bhbi5wdXNoKGNvbHVtbilcclxuICAgIH0pXHJcbiAgICBpZiAoaGFzSGVhZGVyR3JvdXBzICYmIGN1cnJlbnRTcGFuLmxlbmd0aCA+IDApIHtcclxuICAgICAgYWRkSGVhZGVyKGN1cnJlbnRTcGFuKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjY2VzcyB0aGUgZGF0YVxyXG4gICAgY29uc3QgYWNjZXNzUm93ID0gKGQsIGksIGxldmVsID0gMCkgPT4ge1xyXG4gICAgICBjb25zdCByb3cgPSB7XHJcbiAgICAgICAgW29yaWdpbmFsS2V5XTogZCxcclxuICAgICAgICBbaW5kZXhLZXldOiBpLFxyXG4gICAgICAgIFtzdWJSb3dzS2V5XTogZFtzdWJSb3dzS2V5XSxcclxuICAgICAgICBbbmVzdGluZ0xldmVsS2V5XTogbGV2ZWxcclxuICAgICAgfVxyXG4gICAgICBhbGxEZWNvcmF0ZWRDb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgICBpZiAoY29sdW1uLmV4cGFuZGVyKSByZXR1cm5cclxuICAgICAgICByb3dbY29sdW1uLmlkXSA9IGNvbHVtbi5hY2Nlc3NvcihkKVxyXG4gICAgICB9KVxyXG4gICAgICBpZiAocm93W3N1YlJvd3NLZXldKSB7XHJcbiAgICAgICAgcm93W3N1YlJvd3NLZXldID0gcm93W3N1YlJvd3NLZXldLm1hcCgoZCwgaSkgPT4gYWNjZXNzUm93KGQsIGksIGxldmVsICsgMSkpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJvd1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc29sdmVkRGF0YSA9IGRhdGEubWFwKChkLCBpKSA9PiBhY2Nlc3NSb3coZCwgaSkpXHJcblxyXG4gICAgLy8gSWYgcGl2b3RpbmcsIHJlY3Vyc2l2ZWx5IGdyb3VwIHRoZSBkYXRhXHJcbiAgICBjb25zdCBhZ2dyZWdhdGUgPSAocm93cykgPT4ge1xyXG4gICAgICBjb25zdCBhZ2dyZWdhdGlvblZhbHVlcyA9IHt9XHJcbiAgICAgIGFnZ3JlZ2F0aW5nQ29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gcm93cy5tYXAoZCA9PiBkW2NvbHVtbi5pZF0pXHJcbiAgICAgICAgYWdncmVnYXRpb25WYWx1ZXNbY29sdW1uLmlkXSA9IGNvbHVtbi5hZ2dyZWdhdGUodmFsdWVzLCByb3dzKVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gYWdncmVnYXRpb25WYWx1ZXNcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBNYWtlIGl0IHBvc3NpYmxlIHRvIGZhYnJpY2F0ZSBuZXN0ZWQgcm93cyB3aXRob3V0IHBpdm90aW5nXHJcbiAgICBjb25zdCBhZ2dyZWdhdGluZ0NvbHVtbnMgPSBhbGxWaXNpYmxlQ29sdW1ucy5maWx0ZXIoZCA9PiAhZC5leHBhbmRlciAmJiBkLmFnZ3JlZ2F0ZSlcclxuICAgIGlmIChwaXZvdEJ5Lmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBncm91cFJlY3Vyc2l2ZWx5ID0gKHJvd3MsIGtleXMsIGkgPSAwKSA9PiB7XHJcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgbGFzdCBsZXZlbCwganVzdCByZXR1cm4gdGhlIHJvd3NcclxuICAgICAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiByb3dzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEdyb3VwIHRoZSByb3dzIHRvZ2V0aGVyIGZvciB0aGlzIGxldmVsXHJcbiAgICAgICAgbGV0IGdyb3VwZWRSb3dzID0gT2JqZWN0LmVudHJpZXMoXHJcbiAgICAgICAgICBfLmdyb3VwQnkocm93cywga2V5c1tpXSkpXHJcbiAgICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBbcGl2b3RJREtleV06IGtleXNbaV0sXHJcbiAgICAgICAgICAgIFtwaXZvdFZhbEtleV06IGtleSxcclxuICAgICAgICAgICAgW2tleXNbaV1dOiBrZXksXHJcbiAgICAgICAgICAgIFtzdWJSb3dzS2V5XTogdmFsdWUsXHJcbiAgICAgICAgICAgIFtuZXN0aW5nTGV2ZWxLZXldOiBpLFxyXG4gICAgICAgICAgICBbZ3JvdXBlZEJ5UGl2b3RLZXldOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBSZWN1cnNlIGludG8gdGhlIHN1YlJvd3NcclxuICAgICAgICBncm91cGVkUm93cyA9IGdyb3VwZWRSb3dzLm1hcChyb3dHcm91cCA9PiB7XHJcbiAgICAgICAgICBsZXQgc3ViUm93cyA9IGdyb3VwUmVjdXJzaXZlbHkocm93R3JvdXBbc3ViUm93c0tleV0sIGtleXMsIGkgKyAxKVxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ucm93R3JvdXAsXHJcbiAgICAgICAgICAgIFtzdWJSb3dzS2V5XTogc3ViUm93cyxcclxuICAgICAgICAgICAgW2FnZ3JlZ2F0ZWRLZXldOiB0cnVlLFxyXG4gICAgICAgICAgICAuLi5hZ2dyZWdhdGUoc3ViUm93cylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBncm91cGVkUm93c1xyXG4gICAgICB9XHJcbiAgICAgIHJlc29sdmVkRGF0YSA9IGdyb3VwUmVjdXJzaXZlbHkocmVzb2x2ZWREYXRhLCBwaXZvdEJ5KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLm5ld1N0YXRlLFxyXG4gICAgICByZXNvbHZlZERhdGEsXHJcbiAgICAgIGFsbFZpc2libGVDb2x1bW5zLFxyXG4gICAgICBoZWFkZXJHcm91cHMsXHJcbiAgICAgIGFsbERlY29yYXRlZENvbHVtbnMsXHJcbiAgICAgIGhhc0hlYWRlckdyb3Vwc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U29ydGVkRGF0YSAocmVzb2x2ZWRTdGF0ZSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBtYW51YWwsXHJcbiAgICAgIHNvcnRlZCxcclxuICAgICAgZmlsdGVyZWQsXHJcbiAgICAgIGRlZmF1bHRGaWx0ZXJNZXRob2QsXHJcbiAgICAgIHJlc29sdmVkRGF0YSxcclxuICAgICAgYWxsVmlzaWJsZUNvbHVtbnMsXHJcbiAgICAgIGFsbERlY29yYXRlZENvbHVtbnNcclxuICAgIH0gPSByZXNvbHZlZFN0YXRlXHJcblxyXG4gICAgY29uc3Qgc29ydE1ldGhvZHNCeUNvbHVtbklEID0ge31cclxuXHJcbiAgICBhbGxEZWNvcmF0ZWRDb2x1bW5zXHJcbiAgICAuZmlsdGVyKGNvbCA9PiBjb2wuc29ydE1ldGhvZClcclxuICAgIC5mb3JFYWNoKGNvbCA9PiB7XHJcbiAgICAgIHNvcnRNZXRob2RzQnlDb2x1bW5JRFtjb2wuaWRdID0gY29sLnNvcnRNZXRob2RcclxuICAgIH0pXHJcblxyXG4gICAgLy8gUmVzb2x2ZSB0aGUgZGF0YSBmcm9tIGVpdGhlciBtYW51YWwgZGF0YSBvciBzb3J0ZWQgZGF0YVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc29ydGVkRGF0YTogbWFudWFsID8gcmVzb2x2ZWREYXRhIDogdGhpcy5zb3J0RGF0YShcclxuICAgICAgICB0aGlzLmZpbHRlckRhdGEoXHJcbiAgICAgICAgICByZXNvbHZlZERhdGEsXHJcbiAgICAgICAgICBmaWx0ZXJlZCxcclxuICAgICAgICAgIGRlZmF1bHRGaWx0ZXJNZXRob2QsXHJcbiAgICAgICAgICBhbGxWaXNpYmxlQ29sdW1uc1xyXG4gICAgICAgICksXHJcbiAgICAgICAgc29ydGVkLFxyXG4gICAgICAgIHNvcnRNZXRob2RzQnlDb2x1bW5JRFxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaXJlRmV0Y2hEYXRhICgpIHtcclxuICAgIHRoaXMucHJvcHMub25GZXRjaERhdGEodGhpcy5nZXRSZXNvbHZlZFN0YXRlKCksIHRoaXMpXHJcbiAgfVxyXG5cclxuICBnZXRQcm9wT3JTdGF0ZSAoa2V5KSB7XHJcbiAgICByZXR1cm4gXy5nZXRGaXJzdERlZmluZWQodGhpcy5wcm9wc1trZXldLCB0aGlzLnN0YXRlW2tleV0pXHJcbiAgfVxyXG5cclxuICBnZXRTdGF0ZU9yUHJvcCAoa2V5KSB7XHJcbiAgICByZXR1cm4gXy5nZXRGaXJzdERlZmluZWQodGhpcy5zdGF0ZVtrZXldLCB0aGlzLnByb3BzW2tleV0pXHJcbiAgfVxyXG5cclxuICBmaWx0ZXJEYXRhIChkYXRhLCBmaWx0ZXJlZCwgZGVmYXVsdEZpbHRlck1ldGhvZCwgYWxsVmlzaWJsZUNvbHVtbnMpIHtcclxuICAgIGxldCBmaWx0ZXJlZERhdGEgPSBkYXRhXHJcblxyXG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCkge1xyXG4gICAgICBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZC5yZWR1Y2UoXHJcbiAgICAgICAgKGZpbHRlcmVkU29GYXIsIG5leHRGaWx0ZXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiBmaWx0ZXJlZFNvRmFyLmZpbHRlcihcclxuICAgICAgICAgICAgKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBjb2x1bW5cclxuXHJcbiAgICAgICAgICAgICAgY29sdW1uID0gYWxsVmlzaWJsZUNvbHVtbnMuZmluZCh4ID0+IHguaWQgPT09IG5leHRGaWx0ZXIuaWQpXHJcblxyXG4gICAgICAgICAgICAgIC8vIERvbid0IGZpbHRlciBoaWRkZW4gY29sdW1ucyBvciBjb2x1bW5zIHRoYXQgaGF2ZSBoYWQgdGhlaXIgZmlsdGVycyBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgIGlmICghY29sdW1uIHx8IGNvbHVtbi5maWx0ZXJhYmxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IGZpbHRlck1ldGhvZCA9IGNvbHVtbi5maWx0ZXJNZXRob2QgfHwgZGVmYXVsdEZpbHRlck1ldGhvZFxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyTWV0aG9kKG5leHRGaWx0ZXIsIHJvdywgY29sdW1uKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAsIGZpbHRlcmVkRGF0YVxyXG4gICAgICApXHJcblxyXG4gICAgICAvLyBBcHBseSB0aGUgZmlsdGVyIHRvIHRoZSBzdWJyb3dzIGlmIHdlIGFyZSBwaXZvdGluZywgYW5kIHRoZW5cclxuICAgICAgLy8gZmlsdGVyIGFueSByb3dzIHdpdGhvdXQgc3ViY29sdW1ucyBiZWNhdXNlIGl0IHdvdWxkIGJlIHN0cmFuZ2UgdG8gc2hvd1xyXG4gICAgICBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZERhdGEubWFwKHJvdyA9PiB7XHJcbiAgICAgICAgaWYgKCFyb3dbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJvd1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4ucm93LFxyXG4gICAgICAgICAgW3RoaXMucHJvcHMuc3ViUm93c0tleV06IHRoaXMuZmlsdGVyRGF0YShyb3dbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XSwgZmlsdGVyZWQsIGRlZmF1bHRGaWx0ZXJNZXRob2QsIGFsbFZpc2libGVDb2x1bW5zKVxyXG4gICAgICAgIH1cclxuICAgICAgfSkuZmlsdGVyKHJvdyA9PiB7XHJcbiAgICAgICAgaWYgKCFyb3dbdGhpcy5wcm9wcy5zdWJSb3dzS2V5XSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd1t0aGlzLnByb3BzLnN1YlJvd3NLZXldLmxlbmd0aCA+IDBcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsdGVyZWREYXRhXHJcbiAgfVxyXG5cclxuICBzb3J0RGF0YSAoZGF0YSwgc29ydGVkLCBzb3J0TWV0aG9kc0J5Q29sdW1uSUQgPSB7fSkge1xyXG4gICAgaWYgKCFzb3J0ZWQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBkYXRhXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc29ydGVkRGF0YSA9ICh0aGlzLnByb3BzLm9yZGVyQnlNZXRob2QgfHwgXy5vcmRlckJ5KShcclxuICAgICAgZGF0YSxcclxuICAgICAgc29ydGVkLm1hcChzb3J0ID0+IHtcclxuICAgICAgICAvLyBTdXBwb3J0IGN1c3RvbSBzb3J0aW5nIG1ldGhvZHMgZm9yIGVhY2ggY29sdW1uXHJcbiAgICAgICAgaWYgKHNvcnRNZXRob2RzQnlDb2x1bW5JRFtzb3J0LmlkXSkge1xyXG4gICAgICAgICAgcmV0dXJuIChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzb3J0TWV0aG9kc0J5Q29sdW1uSURbc29ydC5pZF0oYVtzb3J0LmlkXSwgYltzb3J0LmlkXSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kZWZhdWx0U29ydE1ldGhvZChhW3NvcnQuaWRdLCBiW3NvcnQuaWRdKVxyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIHNvcnRlZC5tYXAoZCA9PiAhZC5kZXNjKSxcclxuICAgICAgdGhpcy5wcm9wcy5pbmRleEtleVxyXG4gICAgKVxyXG5cclxuICAgIHNvcnRlZERhdGEuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBpZiAoIXJvd1t0aGlzLnByb3BzLnN1YlJvd3NLZXldKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgcm93W3RoaXMucHJvcHMuc3ViUm93c0tleV0gPSB0aGlzLnNvcnREYXRhKHJvd1t0aGlzLnByb3BzLnN1YlJvd3NLZXldLCBzb3J0ZWQsIHNvcnRNZXRob2RzQnlDb2x1bW5JRClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHNvcnRlZERhdGFcclxuICB9XHJcblxyXG4gIGdldE1pblJvd3MgKCkge1xyXG4gICAgcmV0dXJuIF8uZ2V0Rmlyc3REZWZpbmVkKHRoaXMucHJvcHMubWluUm93cywgdGhpcy5nZXRTdGF0ZU9yUHJvcCgncGFnZVNpemUnKSlcclxuICB9XHJcblxyXG4gIC8vIFVzZXIgYWN0aW9uc1xyXG4gIG9uUGFnZUNoYW5nZSAocGFnZSkge1xyXG4gICAgY29uc3Qge29uUGFnZUNoYW5nZSwgY29sbGFwc2VPblBhZ2VDaGFuZ2V9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIGNvbnN0IG5ld1N0YXRlID0ge3BhZ2V9XHJcbiAgICBpZiAoY29sbGFwc2VPblBhZ2VDaGFuZ2UpIHtcclxuICAgICAgbmV3U3RhdGUuZXhwYW5kZWQgPSB7fVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKG5ld1N0YXRlLCAoKSA9PiB7XHJcbiAgICAgIG9uUGFnZUNoYW5nZSAmJiBvblBhZ2VDaGFuZ2UocGFnZSlcclxuICAgICAgdGhpcy5maXJlRmV0Y2hEYXRhKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblBhZ2VTaXplQ2hhbmdlIChuZXdQYWdlU2l6ZSkge1xyXG4gICAgY29uc3Qge29uUGFnZVNpemVDaGFuZ2V9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3Qge3BhZ2VTaXplLCBwYWdlfSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXHJcblxyXG4gICAgLy8gTm9ybWFsaXplIHRoZSBwYWdlIHRvIGRpc3BsYXlcclxuICAgIGNvbnN0IGN1cnJlbnRSb3cgPSBwYWdlU2l6ZSAqIHBhZ2VcclxuICAgIGNvbnN0IG5ld1BhZ2UgPSBNYXRoLmZsb29yKGN1cnJlbnRSb3cgLyBuZXdQYWdlU2l6ZSlcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlV2l0aERhdGEoe1xyXG4gICAgICBwYWdlU2l6ZTogbmV3UGFnZVNpemUsXHJcbiAgICAgIHBhZ2U6IG5ld1BhZ2VcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgb25QYWdlU2l6ZUNoYW5nZSAmJiBvblBhZ2VTaXplQ2hhbmdlKG5ld1BhZ2VTaXplLCBuZXdQYWdlKVxyXG4gICAgICB0aGlzLmZpcmVGZXRjaERhdGEoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNvcnRDb2x1bW4gKGNvbHVtbiwgYWRkaXRpdmUpIHtcclxuICAgIGNvbnN0IHtzb3J0ZWQsIHNraXBOZXh0U29ydH0gPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxyXG5cclxuICAgIC8vIHdlIGNhbid0IHN0b3AgZXZlbnQgcHJvcGFnYXRpb24gZnJvbSB0aGUgY29sdW1uIHJlc2l6ZSBtb3ZlIGhhbmRsZXJzXHJcbiAgICAvLyBhdHRhY2hlZCB0byB0aGUgZG9jdW1lbnQgYmVjYXVzZSBvZiByZWFjdCdzIHN5bnRoZXRpYyBldmVudHNcclxuICAgIC8vIHNvIHdlIGhhdmUgdG8gcHJldmVudCB0aGUgc29ydCBmdW5jdGlvbiBmcm9tIGFjdHVhbGx5IHNvcnRpbmdcclxuICAgIC8vIGlmIHdlIGNsaWNrIG9uIHRoZSBjb2x1bW4gcmVzaXplIGVsZW1lbnQgd2l0aGluIGEgaGVhZGVyLlxyXG4gICAgaWYgKHNraXBOZXh0U29ydCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlV2l0aERhdGEoe1xyXG4gICAgICAgIHNraXBOZXh0U29ydDogZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge29uU29ydGVkQ2hhbmdlfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICBsZXQgbmV3U29ydGVkID0gXy5jbG9uZShzb3J0ZWQgfHwgW10pLm1hcChkID0+IHtcclxuICAgICAgZC5kZXNjID0gXy5pc1NvcnRpbmdEZXNjKGQpXHJcbiAgICAgIHJldHVybiBkXHJcbiAgICB9KVxyXG4gICAgaWYgKCFfLmlzQXJyYXkoY29sdW1uKSkge1xyXG4gICAgICAvLyBTaW5nbGUtU29ydFxyXG4gICAgICBjb25zdCBleGlzdGluZ0luZGV4ID0gbmV3U29ydGVkLmZpbmRJbmRleChkID0+IGQuaWQgPT09IGNvbHVtbi5pZClcclxuICAgICAgaWYgKGV4aXN0aW5nSW5kZXggPiAtMSkge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gbmV3U29ydGVkW2V4aXN0aW5nSW5kZXhdXHJcbiAgICAgICAgaWYgKGV4aXN0aW5nLmRlc2MpIHtcclxuICAgICAgICAgIGlmIChhZGRpdGl2ZSkge1xyXG4gICAgICAgICAgICBuZXdTb3J0ZWQuc3BsaWNlKGV4aXN0aW5nSW5kZXgsIDEpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleGlzdGluZy5kZXNjID0gZmFsc2VcclxuICAgICAgICAgICAgbmV3U29ydGVkID0gW2V4aXN0aW5nXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBleGlzdGluZy5kZXNjID0gdHJ1ZVxyXG4gICAgICAgICAgaWYgKCFhZGRpdGl2ZSkge1xyXG4gICAgICAgICAgICBuZXdTb3J0ZWQgPSBbZXhpc3RpbmddXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChhZGRpdGl2ZSkge1xyXG4gICAgICAgICAgbmV3U29ydGVkLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogY29sdW1uLmlkLFxyXG4gICAgICAgICAgICBkZXNjOiBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3U29ydGVkID0gW3tcclxuICAgICAgICAgICAgaWQ6IGNvbHVtbi5pZCxcclxuICAgICAgICAgICAgZGVzYzogZmFsc2VcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBNdWx0aS1Tb3J0XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nSW5kZXggPSBuZXdTb3J0ZWQuZmluZEluZGV4KGQgPT4gZC5pZCA9PT0gY29sdW1uWzBdLmlkKVxyXG4gICAgICAvLyBFeGlzdGluZyBTb3J0ZWQgQ29sdW1uXHJcbiAgICAgIGlmIChleGlzdGluZ0luZGV4ID4gLTEpIHtcclxuICAgICAgICBjb25zdCBleGlzdGluZyA9IG5ld1NvcnRlZFtleGlzdGluZ0luZGV4XVxyXG4gICAgICAgIGlmIChleGlzdGluZy5kZXNjKSB7XHJcbiAgICAgICAgICBpZiAoYWRkaXRpdmUpIHtcclxuICAgICAgICAgICAgbmV3U29ydGVkLnNwbGljZShleGlzdGluZ0luZGV4LCBjb2x1bW4ubGVuZ3RoKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sdW1uLmZvckVhY2goKGQsIGkpID0+IHtcclxuICAgICAgICAgICAgICBuZXdTb3J0ZWRbZXhpc3RpbmdJbmRleCArIGldLmRlc2MgPSBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb2x1bW4uZm9yRWFjaCgoZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBuZXdTb3J0ZWRbZXhpc3RpbmdJbmRleCArIGldLmRlc2MgPSB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFkZGl0aXZlKSB7XHJcbiAgICAgICAgICBuZXdTb3J0ZWQgPSBuZXdTb3J0ZWQuc2xpY2UoZXhpc3RpbmdJbmRleCwgY29sdW1uLmxlbmd0aClcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gTmV3IFNvcnQgQ29sdW1uXHJcbiAgICAgICAgaWYgKGFkZGl0aXZlKSB7XHJcbiAgICAgICAgICBuZXdTb3J0ZWQgPSBuZXdTb3J0ZWQuY29uY2F0KGNvbHVtbi5tYXAoZCA9PiAoe1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgZGVzYzogZmFsc2VcclxuICAgICAgICAgIH0pKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3U29ydGVkID0gY29sdW1uLm1hcChkID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBkZXNjOiBmYWxzZVxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKHtcclxuICAgICAgcGFnZTogKCghc29ydGVkLmxlbmd0aCAmJiBuZXdTb3J0ZWQubGVuZ3RoKSB8fCAhYWRkaXRpdmUpID8gMCA6IHRoaXMuc3RhdGUucGFnZSxcclxuICAgICAgc29ydGVkOiBuZXdTb3J0ZWRcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgb25Tb3J0ZWRDaGFuZ2UgJiYgb25Tb3J0ZWRDaGFuZ2UobmV3U29ydGVkLCBjb2x1bW4sIGFkZGl0aXZlKVxyXG4gICAgICB0aGlzLmZpcmVGZXRjaERhdGEoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZpbHRlckNvbHVtbiAoY29sdW1uLCB2YWx1ZSkge1xyXG4gICAgY29uc3Qge2ZpbHRlcmVkfSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXHJcbiAgICBjb25zdCB7b25GaWx0ZXJlZENoYW5nZX0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgLy8gUmVtb3ZlIG9sZCBmaWx0ZXIgZmlyc3QgaWYgaXQgZXhpc3RzXHJcbiAgICBjb25zdCBuZXdGaWx0ZXJpbmcgPSAoZmlsdGVyZWQgfHwgW10pLmZpbHRlcih4ID0+IHtcclxuICAgICAgaWYgKHguaWQgIT09IGNvbHVtbi5pZCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKHZhbHVlICE9PSAnJykge1xyXG4gICAgICBuZXdGaWx0ZXJpbmcucHVzaCh7XHJcbiAgICAgICAgaWQ6IGNvbHVtbi5pZCxcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlV2l0aERhdGEoe1xyXG4gICAgICBmaWx0ZXJlZDogbmV3RmlsdGVyaW5nXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIG9uRmlsdGVyZWRDaGFuZ2UgJiYgb25GaWx0ZXJlZENoYW5nZShuZXdGaWx0ZXJpbmcsIGNvbHVtbiwgdmFsdWUpXHJcbiAgICAgIHRoaXMuZmlyZUZldGNoRGF0YSgpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVzaXplQ29sdW1uU3RhcnQgKGNvbHVtbiwgZXZlbnQsIGlzVG91Y2gpIHtcclxuICAgIGNvbnN0IHBhcmVudFdpZHRoID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcclxuXHJcbiAgICBsZXQgcGFnZVhcclxuICAgIGlmIChpc1RvdWNoKSB7XHJcbiAgICAgIHBhZ2VYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVhcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhZ2VYID0gZXZlbnQucGFnZVhcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlV2l0aERhdGEoe1xyXG4gICAgICBjdXJyZW50bHlSZXNpemluZzoge1xyXG4gICAgICAgIGlkOiBjb2x1bW4uaWQsXHJcbiAgICAgICAgc3RhcnRYOiBwYWdlWCxcclxuICAgICAgICBwYXJlbnRXaWR0aDogcGFyZW50V2lkdGhcclxuICAgICAgfVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBpZiAoaXNUb3VjaCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMucmVzaXplQ29sdW1uTW92aW5nKVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZylcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVzaXplQ29sdW1uRW5kIChldmVudCkge1xyXG4gICAgbGV0IGlzVG91Y2ggPSBldmVudC50eXBlID09PSAndG91Y2hlbmQnIHx8IGV2ZW50LnR5cGUgPT09ICd0b3VjaGNhbmNlbCdcclxuXHJcbiAgICBpZiAoaXNUb3VjaCkge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZylcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBpdHMgYSB0b3VjaCBldmVudCBjbGVhciB0aGUgbW91c2Ugb25lJ3MgYXMgd2VsbCBiZWNhdXNlIHNvbWV0aW1lc1xyXG4gICAgLy8gdGhlIG1vdXNlRG93biBldmVudCBnZXRzIGNhbGxlZCBhcyB3ZWxsLCBidXQgdGhlIG1vdXNlVXAgZXZlbnQgZG9lc24ndFxyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5yZXNpemVDb2x1bW5FbmQpXHJcblxyXG4gICAgLy8gVGhlIHRvdWNoIGV2ZW50cyBkb24ndCBwcm9wYWdhdGUgdXAgdG8gdGhlIHNvcnRpbmcncyBvbk1vdXNlRG93biBldmVudCBzb1xyXG4gICAgLy8gbm8gbmVlZCB0byBwcmV2ZW50IGl0IGZyb20gaGFwcGVuaW5nIG9yIGVsc2UgdGhlIGZpcnN0IGNsaWNrIGFmdGVyIGEgdG91Y2hcclxuICAgIC8vIGV2ZW50IHJlc2l6ZSB3aWxsIG5vdCBzb3J0IHRoZSBjb2x1bW4uXHJcbiAgICBpZiAoIWlzVG91Y2gpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKHtcclxuICAgICAgICBza2lwTmV4dFNvcnQ6IHRydWUsXHJcbiAgICAgICAgY3VycmVudGx5UmVzaXppbmc6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNpemVDb2x1bW5Nb3ZpbmcgKGV2ZW50KSB7XHJcbiAgICBjb25zdCB7b25SZXNpemVkQ2hhbmdlfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHtyZXNpemVkLCBjdXJyZW50bHlSZXNpemluZ30gPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxyXG5cclxuICAgIC8vIERlbGV0ZSBvbGQgdmFsdWVcclxuICAgIGNvbnN0IG5ld1Jlc2l6ZWQgPSByZXNpemVkLmZpbHRlcih4ID0+IHguaWQgIT09IGN1cnJlbnRseVJlc2l6aW5nLmlkKVxyXG5cclxuICAgIGxldCBwYWdlWFxyXG5cclxuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2htb3ZlJykge1xyXG4gICAgICBwYWdlWCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYXHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZW1vdmUnKSB7XHJcbiAgICAgIHBhZ2VYID0gZXZlbnQucGFnZVhcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgdGhlIG1pbiBzaXplIHRvIDEwIHRvIGFjY291bnQgZm9yIG1hcmdpbiBhbmQgYm9yZGVyIG9yIGVsc2UgdGhlIGdyb3VwIGhlYWRlcnMgZG9uJ3QgbGluZSB1cCBjb3JyZWN0bHlcclxuICAgIGNvbnN0IG5ld1dpZHRoID0gTWF0aC5tYXgoY3VycmVudGx5UmVzaXppbmcucGFyZW50V2lkdGggKyBwYWdlWCAtIGN1cnJlbnRseVJlc2l6aW5nLnN0YXJ0WCwgMTEpXHJcblxyXG4gICAgbmV3UmVzaXplZC5wdXNoKHtcclxuICAgICAgaWQ6IGN1cnJlbnRseVJlc2l6aW5nLmlkLFxyXG4gICAgICB2YWx1ZTogbmV3V2lkdGhcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZVdpdGhEYXRhKHtcclxuICAgICAgcmVzaXplZDogbmV3UmVzaXplZFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBvblJlc2l6ZWRDaGFuZ2UgJiYgb25SZXNpemVkQ2hhbmdlKG5ld1Jlc2l6ZWQsIGV2ZW50KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19