!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("request",[],t):"object"==typeof exports?exports.request=t():e.request=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){var n=Date.now(),r=void 0,o=function o(){r=requestAnimationFrame(o),Date.now()-n>=t&&(e(),n=Date.now())};return r=requestAnimationFrame(o)},o=function(e){return cancelAnimationFrame(e)};t.requestInterval=r,t.clearRequestInterval=o},function(e,t,n){"use strict";var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports=o.default}])});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlY2I2MTkxYjZlZTVkYTc1NmUwMiIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JlcXVlc3RJbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwidGhpcyIsIm1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJpbnN0YWxsZWRNb2R1bGVzIiwiaSIsImwiLCJjYWxsIiwibSIsImMiLCJ2YWx1ZSIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsIm4iLCJfX2VzTW9kdWxlIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwicmVxdWVzdEludGVydmFsIiwiZm4iLCJkZWxheSIsInN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJyZXF1ZXN0SWQiLCJsb29wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZXF1ZXN0SW50ZXJ2YWwiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIl9yZXF1ZXN0SW50ZXJ2YWwiLCJfcmVxdWVzdEludGVydmFsMiIsIm9iaiIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiJDQUFBLFNBQUFBLEVBQUFDLEdBQ0EsZ0JBQUFDLFVBQUEsZ0JBQUFDLFFBQ0FBLE9BQUFELFFBQUFELElBQ0Esa0JBQUFHLGdCQUFBQyxJQUNBRCxPQUFBLGFBQUFILEdBQ0EsZ0JBQUFDLFNBQ0FBLFFBQUEsUUFBQUQsSUFFQUQsRUFBQSxRQUFBQyxLQUNDSyxLQUFBLFdBQ0QsTUNBZ0IsVUFBVUMsR0NOMUIsUUFBQUMsR0FBQUMsR0FHQSxHQUFBQyxFQUFBRCxHQUNBLE1BQUFDLEdBQUFELEdBQUFQLE9BR0EsSUFBQUMsR0FBQU8sRUFBQUQsSUFDQUUsRUFBQUYsRUFDQUcsR0FBQSxFQUNBVixXQVVBLE9BTkFLLEdBQUFFLEdBQUFJLEtBQUFWLEVBQUFELFFBQUFDLElBQUFELFFBQUFNLEdBR0FMLEVBQUFTLEdBQUEsRUFHQVQsRUFBQUQsUUF2QkEsR0FBQVEsS0ErREEsT0FuQ0FGLEdBQUFNLEVBQUFQLEVBR0FDLEVBQUFPLEVBQUFMLEVBR0FGLEVBQUFHLEVBQUEsU0FBQUssR0FBMkMsTUFBQUEsSUFHM0NSLEVBQUFTLEVBQUEsU0FBQWYsRUFBQWdCLEVBQUFDLEdBQ0FYLEVBQUFZLEVBQUFsQixFQUFBZ0IsSUFDQUcsT0FBQUMsZUFBQXBCLEVBQUFnQixHQUNBSyxjQUFBLEVBQ0FDLFlBQUEsRUFDQUMsSUFBQU4sS0FNQVgsRUFBQWtCLEVBQUEsU0FBQXZCLEdBQ0EsR0FBQWdCLEdBQUFoQixLQUFBd0IsV0FDQSxXQUEyQixNQUFBeEIsR0FBQSxTQUMzQixXQUFpQyxNQUFBQSxHQUVqQyxPQURBSyxHQUFBUyxFQUFBRSxFQUFBLElBQUFBLEdBQ0FBLEdBSUFYLEVBQUFZLEVBQUEsU0FBQVEsRUFBQUMsR0FBc0QsTUFBQVIsUUFBQVMsVUFBQUMsZUFBQWxCLEtBQUFlLEVBQUFDLElBR3REckIsRUFBQXdCLEVBQUEsR0FHQXhCLElBQUF5QixFQUFBLEtEZ0JNLFNBQVU5QixFQUFRRCxFQUFTTSxHQUVqQyxZQUdBYSxRQUFPQyxlQUFlcEIsRUFBUyxjQUM3QmMsT0FBTyxHRW5GVCxJQUFNa0IsR0FBa0IsU0FBQ0MsRUFBSUMsR0FDM0IsR0FBSUMsR0FBWUMsS0FBS0MsTUFDakJDLFNBRUVDLEVBQU8sUUFBUEEsS0FDSkQsRUFBWUUsc0JBQXNCRCxHQUM5QkgsS0FBS0MsTUFBUUYsR0FBYUQsSUFDNUJELElBQ0FFLEVBQVlDLEtBQUtDLE9BTXJCLE9BRkFDLEdBQVlFLHNCQUFzQkQsSUFLOUJFLEVBQXVCLFNBQUFILEdBQUEsTUFBYUksc0JBQXFCSixHRjRGL0R0QyxHRTlERWdDLGtCRitERmhDLEVFMUNFeUMsd0JGOENJLFNBQVV4QyxFQUFRRCxFQUFTTSxHQUVqQyxZR3ZIQSxJQUFBcUMsR0FBQXJDLEVBQUEsR0g0SElzQyxFQUVKLFNBQWdDQyxHQUFPLE1BQU9BLElBQU9BLEVBQUlwQixXQUFhb0IsR0FBUUMsUUFBU0QsSUFGeENGLEVHMUgvQzFDLEdBQU9ELFFBQVA0QyxFQUFBRSIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJyZXF1ZXN0XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInJlcXVlc3RcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicmVxdWVzdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInJlcXVlc3RcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmVxdWVzdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZXF1ZXN0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIEBtb2R1bGUgcmVxdWVzdEludGVydmFsXG4qL1xudmFyIHJlcXVlc3RJbnRlcnZhbCA9IGZ1bmN0aW9uIHJlcXVlc3RJbnRlcnZhbChmbiwgZGVsYXkpIHtcbiAgdmFyIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gIHZhciByZXF1ZXN0SWQgPSB2b2lkIDA7XG5cbiAgdmFyIGxvb3AgPSBmdW5jdGlvbiBsb29wKCkge1xuICAgIHJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSA+PSBkZWxheSkge1xuICAgICAgZm4oKTtcbiAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuICB9O1xuXG4gIHJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcblxuICByZXR1cm4gcmVxdWVzdElkO1xufTtcblxudmFyIGNsZWFyUmVxdWVzdEludGVydmFsID0gZnVuY3Rpb24gY2xlYXJSZXF1ZXN0SW50ZXJ2YWwocmVxdWVzdElkKSB7XG4gIHJldHVybiBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SWQpO1xufTtcblxuZXhwb3J0cy5yZXF1ZXN0SW50ZXJ2YWwgPSByZXF1ZXN0SW50ZXJ2YWw7XG5leHBvcnRzLmNsZWFyUmVxdWVzdEludGVydmFsID0gY2xlYXJSZXF1ZXN0SW50ZXJ2YWw7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX3JlcXVlc3RJbnRlcnZhbCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfcmVxdWVzdEludGVydmFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlcXVlc3RJbnRlcnZhbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0gX3JlcXVlc3RJbnRlcnZhbDIuZGVmYXVsdDtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlcXVlc3QuanMiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVjYjYxOTFiNmVlNWRhNzU2ZTAyIiwiLyoqXG4gKiBAbW9kdWxlIHJlcXVlc3RJbnRlcnZhbFxuKi9cbmNvbnN0IHJlcXVlc3RJbnRlcnZhbCA9IChmbiwgZGVsYXkpID0+IHtcbiAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgbGV0IHJlcXVlc3RJZFxuXG4gIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgcmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG4gICAgaWYgKERhdGUubm93KCkgLSBzdGFydFRpbWUgPj0gZGVsYXkpIHtcbiAgICAgIGZuKClcbiAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcblxuICByZXR1cm4gcmVxdWVzdElkXG59XG5cbmNvbnN0IGNsZWFyUmVxdWVzdEludGVydmFsID0gcmVxdWVzdElkID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJZClcblxuZXhwb3J0IHtcbiAgLyoqXG4gICAqIERyb3AgaW4gcmVwbGFjZW1lbnQgZm9yIHNldEludGVydmFsIHRoYXQgdXNlcyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgaW5zdGVhZFxuICAgKiBvZiBzZXRJbnRlcnZhbC4gIFRoZXJlIGFyZSB2YXJpb3VzIHJlYXNvbnMgdG8gcHJlZmVyIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgKiBvdmVyIHNldEludGVydmFsLCBtb3N0IG5vdGFibHksIHJlcXVlc3RBbmltYXRpb25GcmFtZSBhdXRvbWF0aWNhbGx5IHN0b3BzXG4gICAqIHdoZW4gdGhlIHVzZXIgc3dpdGNoZXMgdG8gYSBkaWZmZXJlbnQgdGFiLCBzYXZpbmcgcG93ZXIuXG4gICAqXG4gICAqIEBhdXRob3IgTWFyayBWaWxyb2t4IDxtYXJrQHZpbHJva3guY29tPlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgaW1wb3J0IHtyZXF1ZXN0SW50ZXJ2YWx9IGZyb20gJ3JlcXVlc3RJbnRlcnZhbCdcbiAgICpcbiAgICogY29uc3QgbG9nZ2VyID0gbG9nTXNnID0+IGNvbnNvbGUubG9nKGxvZ01zZylcbiAgICpcbiAgICogcmVxdWVzdEludGVydmFsKGxvZ2dlciwgMTAwMCkgLy8gV2lsbCBwcmludCBtZXNzYWdlIHRvIGNvbnNvbGUgZXZlcnkgMTAwMG1zXG4gICAqXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgZXZlcnkgZGVsYXkgbWlsbGlzZWNvbmRzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gZGVsYXkgLSBUaGUgdGltZSwgaW4gbWlsbGlzZWNvbmRzICh0aG91c2FuZHRocyBvZiBhIHNlY29uZCksXG4gICAqIHRoZSB0aW1lciBzaG91bGQgZGVsYXkgaW4gYmV0d2VlbiBleGVjdXRpb25zIG9mIHRoZSBzcGVjaWZpZWQgZnVuY3Rpb24uXG4gICAqIElmIHRoaXMgcGFyYW1ldGVyIGlzIGxlc3MgdGhhbiAxMCwgYSB2YWx1ZSBvZiAxMCBpcyB1c2VkLiBOb3RlIHRoYXQgdGhlXG4gICAqIGFjdHVhbCBkZWxheSBtYXkgYmUgbG9uZ2VyOyBzZWUgXCJSZWFzb25zIGZvciBkZWxheXMgbG9uZ2VyIHRoYW4gc3BlY2lmaWVkXCJcbiAgICogaW4gV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS5zZXRUaW1lb3V0KCkgZm9yIGV4YW1wbGVzLlxuICAgKiBAcmV0dXJucyB7TnVtYmVyfSBBIGxvbmcgaW50ZWdlciB2YWx1ZSwgdGhlIHJlcXVlc3QgaWQsIHRoYXQgdW5pcXVlbHlcbiAgICogaWRlbnRpZmllcyB0aGUgZW50cnkgaW4gdGhlIGNhbGxiYWNrIGxpc3QuIFRoaXMgaXMgYSBub24temVybyB2YWx1ZSwgYnV0IHlvdVxuICAgKiBtYXkgbm90IG1ha2UgYW55IG90aGVyIGFzc3VtcHRpb25zIGFib3V0IGl0cyB2YWx1ZS4gWW91IGNhbiBwYXNzIHRoaXMgdmFsdWVcbiAgICogdG8gY2xlYXJSZXF1ZXN0SW50ZXJ2YWwoKSB0byBjYW5jZWwgdGhlIHJlZnJlc2ggY2FsbGJhY2sgcmVxdWVzdC5cbiAgICovXG4gIHJlcXVlc3RJbnRlcnZhbCxcbiAgLyoqXG4gICAqIERyb3AgaW4gcmVwbGFjZW1lbnQgZm9yIGNsZWFySW50ZXJ2YWwgdG8gY2xlYXIgKGNhbmNlbCkgYSByZXF1ZXN0SW50ZXJ2YWwgcmVxdWVzdC5cbiAgICogb2Ygc2V0SW50ZXJ2YWwuICBUaGUgY2xlYXJSZXF1ZXN0SW50ZXJ2YWwoKSBtZXRob2QgY2FuY2VscyBhIHRpbWVkLCByZXBlYXRpbmcgYWN0aW9uIHdoaWNoIHdhc1xuICAgKiBwcmV2aW91c2x5IGVzdGFibGlzaGVkIGJ5IGEgY2FsbCB0byByZXF1ZXN0SW50ZXJ2YWwoKS5cbiAgICpcbiAgICogQGF1dGhvciBNYXJrIFZpbHJva3ggPG1hcmtAdmlscm9reC5jb20+XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICBpbXBvcnQgKiBmcm9tICdyZXF1ZXN0SW50ZXJ2YWwnXG4gICAqXG4gICAqIGNvbnN0IGxvZ2dlciA9IGxvZ01zZyA9PiBjb25zb2xlLmxvZyhsb2dNc2cpXG4gICAqXG4gICAqIGNvbnN0IHJlcUlkID0gcmVxdWVzdEludGVydmFsKGxvZ2dlciwgMTAwMClcbiAgICpcbiAgICogY2xlYXJSZXF1ZXN0SW50ZXJ2YWwocmVxSWQpIC8vIFdpbGwgY2FuY2VsIHRoZSBwcmV2aW91cyByZXF1ZXN0ZWQgaW50ZXJ2YWwgc28gbm90aGluZyB3aWxsIGxvZ1xuICAgKlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJlcXVlc3RJZCAtIFRoZSBpZGVudGlmaWVyIG9mIHRoZSByZXBlYXRlZCBhY3Rpb24geW91IHdhbnQgdG8gY2FuY2VsLiBUaGlzIElEXG4gICAqIHdhcyByZXR1cm5lZCBieSB0aGUgY29ycmVzcG9uZGluZyBjYWxsIHRvIHJlcXVlc3RJbnRlcnZhbCgpLlxuICAgKi9cbiAgY2xlYXJSZXF1ZXN0SW50ZXJ2YWwsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3JlcXVlc3RJbnRlcnZhbC5qcyIsImltcG9ydCByZXF1ZXN0SW50ZXJ2YWwgZnJvbSAnLi9saWIvcmVxdWVzdEludGVydmFsJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVlc3RJbnRlcnZhbFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==