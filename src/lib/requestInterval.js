/**
 * @module requestInterval
*/
const requestInterval = (fn, delay) => {
  let startTime = Date.now()
  let requestId

  const loop = () => {
    requestId = requestAnimationFrame(loop)
    if (Date.now() - startTime >= delay) {
      fn()
      startTime = Date.now()
    }
  }

  requestId = requestAnimationFrame(loop)

  return requestId
}

const clearRequestInterval = requestId => cancelAnimationFrame(requestId)

export {
  /**
   * Drop in replacement for setInterval that uses requestAnimationFrame instead
   * of setInterval.  There are various reasons to prefer requestAnimationFrame
   * over setInterval, most notably, requestAnimationFrame automatically stops
   * when the user switches to a different tab, saving power.
   *
   * @author Mark Vilrokx <mark@vilrokx.com>
   *
   * @example
   *  import {requestInterval} from 'requestInterval'
   *
   * const logger = logMsg => console.log(logMsg)
   *
   * requestInterval(logger, 1000) // Will print message to console every 1000ms
   *
   * @function
   * @param {Function} fn - A function to be executed every delay milliseconds.
   * @param {Number} delay - The time, in milliseconds (thousandths of a second),
   * the timer should delay in between executions of the specified function.
   * If this parameter is less than 10, a value of 10 is used. Note that the
   * actual delay may be longer; see "Reasons for delays longer than specified"
   * in WindowOrWorkerGlobalScope.setTimeout() for examples.
   * @returns {Number} A long integer value, the request id, that uniquely
   * identifies the entry in the callback list. This is a non-zero value, but you
   * may not make any other assumptions about its value. You can pass this value
   * to clearRequestInterval() to cancel the refresh callback request.
   */
  requestInterval,
  /**
   * Drop in replacement for clearInterval to clear (cancel) a requestInterval request.
   * of setInterval.  The clearRequestInterval() method cancels a timed, repeating action which was
   * previously established by a call to requestInterval().
   *
   * @author Mark Vilrokx <mark@vilrokx.com>
   *
   * @example
   *  import * from 'requestInterval'
   *
   * const logger = logMsg => console.log(logMsg)
   *
   * const reqId = requestInterval(logger, 1000)
   *
   * clearRequestInterval(reqId) // Will cancel the previous requested interval so nothing will log
   *
   * @function
   * @param {Number} requestId - The identifier of the repeated action you want to cancel. This ID
   * was returned by the corresponding call to requestInterval().
   */
  clearRequestInterval,
}
