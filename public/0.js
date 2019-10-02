webpackJsonp([0],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(641)

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added
 * @returns {Date} the new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR)
}

module.exports = addHours


/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(603)
var setISOYear = __webpack_require__(1002)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be added
 * @returns {Date} the new date with the ISO week-numbering years added
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * var result = addISOYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jun 26 2015 00:00:00
 */
function addISOYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return setISOYear(dirtyDate, getISOYear(dirtyDate) + amount)
}

module.exports = addISOYears


/***/ }),

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var startOfISOYear = __webpack_require__(642)
var differenceInCalendarDays = __webpack_require__(663)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoYear - the ISO week-numbering year of the new date
 * @returns {Date} the new date with the ISO week-numbering year setted
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * var result = setISOYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
function setISOYear (dirtyDate, dirtyISOYear) {
  var date = parse(dirtyDate)
  var isoYear = Number(dirtyISOYear)
  var diff = differenceInCalendarDays(date, startOfISOYear(date))
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(isoYear, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  date = startOfISOYear(fourthOfJanuary)
  date.setDate(date.getDate() + diff)
  return date
}

module.exports = setISOYear


/***/ }),

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(641)

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @returns {Date} the new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE)
}

module.exports = addMinutes


/***/ }),

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__(664)

/**
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be added
 * @returns {Date} the new date with the quarters added
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * var result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */
function addQuarters (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  var months = amount * 3
  return addMonths(dirtyDate, months)
}

module.exports = addQuarters


/***/ }),

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(641)

/**
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added
 * @returns {Date} the new date with the seconds added
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */
function addSeconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * 1000)
}

module.exports = addSeconds


/***/ }),

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__(664)

/**
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added
 * @returns {Date} the new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * var result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
function addYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, amount * 12)
}

module.exports = addYears


/***/ }),

/***/ 1007:
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(603)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of calendar ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO week-numbering years
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * var result = differenceInCalendarISOYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */
function differenceInCalendarISOYears (dirtyDateLeft, dirtyDateRight) {
  return getISOYear(dirtyDateLeft) - getISOYear(dirtyDateRight)
}

module.exports = differenceInCalendarISOYears


/***/ }),

/***/ 1008:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth()

  return yearDiff * 12 + monthDiff
}

module.exports = differenceInCalendarMonths


/***/ }),

/***/ 1009:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * var result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
function getQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var quarter = Math.floor(date.getMonth() / 3) + 1
  return quarter
}

module.exports = getQuarter


/***/ }),

/***/ 1010:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInCalendarYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  return dateLeft.getFullYear() - dateRight.getFullYear()
}

module.exports = differenceInCalendarYears


/***/ }),

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var differenceInCalendarDays = __webpack_require__(663)
var compareAsc = __webpack_require__(643)

/**
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full days
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 */
function differenceInDays (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight))
  dateLeft.setDate(dateLeft.getDate() - sign * difference)

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastDayNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastDayNotFull)
}

module.exports = differenceInDays


/***/ }),

/***/ 1012:
/***/ (function(module, exports, __webpack_require__) {

var addISOYears = __webpack_require__(1001)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Subtract the specified number of ISO week-numbering years from the given date.
 *
 * @description
 * Subtract the specified number of ISO week-numbering years from the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be subtracted
 * @returns {Date} the new date with the ISO week-numbering years subtracted
 *
 * @example
 * // Subtract 5 ISO week-numbering years from 1 September 2014:
 * var result = subISOYears(new Date(2014, 8, 1), 5)
 * //=> Mon Aug 31 2009 00:00:00
 */
function subISOYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addISOYears(dirtyDate, -amount)
}

module.exports = subISOYears


/***/ }),

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

var compareDesc = __webpack_require__(736)
var parse = __webpack_require__(570)
var differenceInSeconds = __webpack_require__(738)
var differenceInMonths = __webpack_require__(737)
var enLocale = __webpack_require__(666)

var MINUTES_IN_DAY = 1440
var MINUTES_IN_ALMOST_TWO_DAYS = 2520
var MINUTES_IN_MONTH = 43200
var MINUTES_IN_TWO_MONTHS = 86400

/**
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date|String|Number} date - the other date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = distanceInWords(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 1)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * var result = distanceInWords(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = distanceInWords(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWords(
 *   new Date(2016, 7, 1),
 *   new Date(2015, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function distanceInWords (dirtyDateToCompare, dirtyDate, dirtyOptions) {
  var options = dirtyOptions || {}

  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)

  var locale = options.locale
  var localize = enLocale.distanceInWords.localize
  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
    localize = locale.distanceInWords.localize
  }

  var localizeOptions = {
    addSuffix: Boolean(options.addSuffix),
    comparison: comparison
  }

  var dateLeft, dateRight
  if (comparison > 0) {
    dateLeft = parse(dirtyDateToCompare)
    dateRight = parse(dirtyDate)
  } else {
    dateLeft = parse(dirtyDate)
    dateRight = parse(dirtyDateToCompare)
  }

  var seconds = differenceInSeconds(dateRight, dateLeft)
  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
  var minutes = Math.round(seconds / 60) - offset
  var months

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return localize('lessThanXSeconds', 5, localizeOptions)
      } else if (seconds < 10) {
        return localize('lessThanXSeconds', 10, localizeOptions)
      } else if (seconds < 20) {
        return localize('lessThanXSeconds', 20, localizeOptions)
      } else if (seconds < 40) {
        return localize('halfAMinute', null, localizeOptions)
      } else if (seconds < 60) {
        return localize('lessThanXMinutes', 1, localizeOptions)
      } else {
        return localize('xMinutes', 1, localizeOptions)
      }
    } else {
      if (minutes === 0) {
        return localize('lessThanXMinutes', 1, localizeOptions)
      } else {
        return localize('xMinutes', minutes, localizeOptions)
      }
    }

  // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return localize('xMinutes', minutes, localizeOptions)

  // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return localize('aboutXHours', 1, localizeOptions)

  // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60)
    return localize('aboutXHours', hours, localizeOptions)

  // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return localize('xDays', 1, localizeOptions)

  // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY)
    return localize('xDays', days, localizeOptions)

  // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH)
    return localize('aboutXMonths', months, localizeOptions)
  }

  months = differenceInMonths(dateRight, dateLeft)

  // 2 months up to 12 months
  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH)
    return localize('xMonths', nearestMonth, localizeOptions)

  // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12
    var years = Math.floor(months / 12)

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return localize('aboutXYears', years, localizeOptions)

    // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return localize('overXYears', years, localizeOptions)

    // N years 9 months up to N year 12 months
    } else {
      return localize('almostXYears', years + 1, localizeOptions)
    }
  }
}

module.exports = distanceInWords


/***/ }),

/***/ 1014:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },

    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },

    halfAMinute: 'half a minute',

    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },

    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },

    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },

    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },

    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },

    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },

    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },

    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },

    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return result + ' ago'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1016:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  date.setDate(date.getDate() + diff)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfWeek


/***/ }),

/***/ 1017:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfMonth


/***/ }),

/***/ 1018:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var startOfYear = __webpack_require__(1019)
var differenceInCalendarDays = __webpack_require__(663)

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear


/***/ }),

/***/ 1019:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear (dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYear


/***/ }),

/***/ 1020:
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(733)

/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} argument must be an instance of Date
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate) {
  if (isDate(dirtyDate)) {
    return !isNaN(dirtyDate)
  } else {
    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
  }
}

module.exports = isValid


/***/ }),

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the leap year
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * var result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
function isLeapYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0
}

module.exports = isLeapYear


/***/ }),

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * var result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()

  if (day === 0) {
    day = 7
  }

  return day
}

module.exports = getISODay


/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

var startOfHour = __webpack_require__(1024)

/**
 * @category Hour Helpers
 * @summary Are the given dates in the same hour?
 *
 * @description
 * Are the given dates in the same hour?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same hour
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * var result = isSameHour(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 6, 30)
 * )
 * //=> true
 */
function isSameHour (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfHour = startOfHour(dirtyDateLeft)
  var dateRightStartOfHour = startOfHour(dirtyDateRight)

  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime()
}

module.exports = isSameHour


/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an hour
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * var result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */
function startOfHour (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMinutes(0, 0, 0)
  return date
}

module.exports = startOfHour


/***/ }),

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

var isSameWeek = __webpack_require__(741)

/**
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week?
 *
 * @description
 * Are the given dates in the same ISO week?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * var result = isSameISOWeek(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 8, 7)
 * )
 * //=> true
 */
function isSameISOWeek (dirtyDateLeft, dirtyDateRight) {
  return isSameWeek(dirtyDateLeft, dirtyDateRight, {weekStartsOn: 1})
}

module.exports = isSameISOWeek


/***/ }),

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

var startOfISOYear = __webpack_require__(642)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week-numbering year
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * var result = isSameISOYear(
 *   new Date(2003, 11, 29),
 *   new Date(2005, 0, 2)
 * )
 * //=> true
 */
function isSameISOYear (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfYear = startOfISOYear(dirtyDateLeft)
  var dateRightStartOfYear = startOfISOYear(dirtyDateRight)

  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime()
}

module.exports = isSameISOYear


/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

var startOfMinute = __webpack_require__(1028)

/**
 * @category Minute Helpers
 * @summary Are the given dates in the same minute?
 *
 * @description
 * Are the given dates in the same minute?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same minute
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
 * // in the same minute?
 * var result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 */
function isSameMinute (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft)
  var dateRightStartOfMinute = startOfMinute(dirtyDateRight)

  return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime()
}

module.exports = isSameMinute


/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */
function startOfMinute (dirtyDate) {
  var date = parse(dirtyDate)
  date.setSeconds(0, 0)
  return date
}

module.exports = startOfMinute


/***/ }),

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameMonth (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
}

module.exports = isSameMonth


/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

var startOfQuarter = __webpack_require__(1031)

/**
 * @category Quarter Helpers
 * @summary Are the given dates in the same year quarter?
 *
 * @description
 * Are the given dates in the same year quarter?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same quarter
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * var result = isSameQuarter(
 *   new Date(2014, 0, 1),
 *   new Date(2014, 2, 8)
 * )
 * //=> true
 */
function isSameQuarter (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft)
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight)

  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()
}

module.exports = isSameQuarter


/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a quarter
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * var result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
function startOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3
  date.setMonth(month, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfQuarter


/***/ }),

/***/ 1032:
/***/ (function(module, exports, __webpack_require__) {

var startOfSecond = __webpack_require__(1033)

/**
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same second
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */
function isSameSecond (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft)
  var dateRightStartOfSecond = startOfSecond(dirtyDateRight)

  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
}

module.exports = isSameSecond


/***/ }),

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a second
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */
function startOfSecond (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(0)
  return date
}

module.exports = startOfSecond


/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameYear (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear()
}

module.exports = isSameYear


/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Week Helpers
 * @summary Return the last day of a week for the given date.
 *
 * @description
 * Return the last day of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the last day of a week
 *
 * @example
 * // The last day of a week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the last day of the week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + diff)
  return date
}

module.exports = lastDayOfWeek


/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var getDaysInMonth = __webpack_require__(734)

/**
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month setted
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth (dirtyDate, dirtyMonth) {
  var date = parse(dirtyDate)
  var month = Number(dirtyMonth)
  var year = date.getFullYear()
  var day = date.getDate()

  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(year, month, 15)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth))
  return date
}

module.exports = setMonth


/***/ }),

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isEq_js__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__period_js__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pointerEventDirective_js__ = __webpack_require__(1953);







function data(el, binding) {

	if ( Object(__WEBPACK_IMPORTED_MODULE_0__isEq_js__["a" /* default */])(binding.value, binding.oldValue) )
		return;
	// use setAttribute instead of dataset because IE[9, 10] does not reflect dataset into dom attributes.
	el.setAttribute('data-'+binding.arg, JSON.stringify(binding.value));
}

function normalizeLocale(locale) {

	if ( locale.length === 2 )
		return locale+'-'+locale;
	return locale;
}

/* harmony default export */ __webpack_exports__["a"] = ({
	directives: {
		data: data,
		onpointer: Object(__WEBPACK_IMPORTED_MODULE_3__pointerEventDirective_js__["a" /* default */])(),
	},
	
	props: {
		locale: {
			type: String,
			default: Object({"MIX_APP_URL":"http://127.0.0.1:8000","MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).VUE_ENV === 'server' ? '' : normalizeLocale(navigator.language || navigator.userLanguage),
//			validator: function(value) {
//				
//				return value === value.toUpperCase();
//			},
			required: Object({"MIX_APP_URL":"http://127.0.0.1:8000","MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).VUE_ENV === 'server'
		},
		compact: {
			type: Boolean,
			default: false,
		},
		
		itemClass: {
			type: Function,
			default: function() {},
		},

	},
	computed: {
		dateFnsLocale: function() {
			
			const lang = this.locale.substr(0,2).toLowerCase();
			return __webpack_require__(1954)("./"+lang+'/index.js');
		},

		firstDayOfTheWeek: function() {

			const country = this.locale.substr(3,2).toUpperCase();
					
			if (' GB AG AR AS AU BR BS BT BW BZ CA CN CO DM DO ET GT GU HK HN ID IE IL IN JM JP KE KH KR LA MH MM MO MT MX MZ NI NP NZ PA PE PH PK PR PY SA SG SV TH TN TT TW UM US VE VI WS YE ZA ZW '.indexOf(' '+country+' ') !== -1 )
				return 0; // sun
			if (' AE AF BH DJ DZ EG IQ IR JO KW LY MA OM QA SD SY '.indexOf(' '+country+' ') !== -1 )
				return 6; // sat
			if (' BD MV '.indexOf(' '+country+' ') !== -1 )
				return 5; // fri
			return 1; // mon
		},

		dfOptions: function() {
			return { weekStartsOn: this.firstDayOfTheWeek };
		},
		
	},
	methods: {
		format: function(date, format) {

			return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["format"])(date, format, { locale: this.dateFnsLocale });
		},
		
		dateAdd: function(date, type, count) {
			
			switch ( type ) {
				case __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */].MINUTE: return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addMinutes"])(date, count);
				case __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */].HOUR: return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addHours"])(date, count);
				case __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */].DAY: return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(date, count);
				case __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */].WEEK: return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addWeeks"])(date, count);
				case __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */].MONTH: return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addMonths"])(date, count);
				case __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */].YEAR: return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addYears"])(date, count);
				case __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */].DECADE: return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addYears"])(date, 16 * count);
			}
		},
		
		getItemRange: function(date, type) {
			
			switch ( type ) {
				case __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */].MINUTE: return { start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfMinute"])(date), end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfMinute"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addMinutes"])(date, 1)) };
				case __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */].HOUR: return { start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfHour"])(date), end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfHour"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addHours"])(date, 1)) };
				case __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */].DAY: return { start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(date), end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(date, 1)) };
				case __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */].WEEK: return { start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfWeek"])(date, this.dfOptions), end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfWeek"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addWeeks"])(date, 1), this.dfOptions) };
				case __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */].MONTH: return { start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfMonth"])(date), end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfMonth"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addMonths"])(date, 1)) };
				case __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */].YEAR: return { start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfYear"])(date), end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfYear"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addYears"])(date, 1)) };
				case __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */].DECADE: return { start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getYear"])(date)-9 , end:Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getYear"])(date)+6 };
			}
		},
		
	},
	
	created: function() {
		
		this.PERIOD = __WEBPACK_IMPORTED_MODULE_2__period_js__["a" /* default */];
	}
	
});


/***/ }),

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEq;
function isEq(val1, val2) {
	
	if ( val1 === val2 )
		return true;
	
	var type1 = typeof(val1);
	if ( type1 !== typeof(val2) )
		return false;

	if ( type1 === 'object' && val1 !== null && val2 !== null ) {
		
		var k1 = Object.keys(val1);
		var k1len = k1.length;
		if ( Object.keys(val2).length !== k1len )
			return false;

		for ( var i = 0; i < k1len; ++i )
			if ( !isEq(val1[k1[i]], val2[k1[i]]) )
				return false;
		return true;
	}
	return false;
}

/***/ }),

/***/ 1039:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'أقل من ثانية واحدة',
      other: 'أقل من {{count}} ثواني'
    },

    xSeconds: {
      one: 'ثانية واحدة',
      other: '{{count}} ثواني'
    },

    halfAMinute: 'نصف دقيقة',

    lessThanXMinutes: {
      one: 'أقل من دقيقة',
      other: 'أقل من {{count}} دقيقة'
    },

    xMinutes: {
      one: 'دقيقة واحدة',
      other: '{{count}} دقائق'
    },

    aboutXHours: {
      one: 'ساعة واحدة تقريباً',
      other: '{{count}} ساعات تقريباً'
    },

    xHours: {
      one: 'ساعة واحدة',
      other: '{{count}} ساعات'
    },

    xDays: {
      one: 'يوم واحد',
      other: '{{count}} أيام'
    },

    aboutXMonths: {
      one: 'شهر واحد تقريباً',
      other: '{{count}} أشهر تقريباً'
    },

    xMonths: {
      one: 'شهر واحد',
      other: '{{count}} أشهر'
    },

    aboutXYears: {
      one: 'عام واحد تقريباً',
      other: '{{count}} أعوام تقريباً'
    },

    xYears: {
      one: 'عام واحد',
      other: '{{count}} أعوام'
    },

    overXYears: {
      one: 'أكثر من عام',
      other: 'أكثر من {{count}} أعوام'
    },

    almostXYears: {
      one: 'عام واحد تقريباً',
      other: '{{count}} أعوام تقريباً'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'في خلال ' + result
      } else {
        return 'منذ ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
  var monthsFull = ['كانون الثاني يناير', 'شباط فبراير', 'آذار مارس', 'نيسان أبريل', 'أيار مايو', 'حزيران يونيو', 'تموز يوليو', 'آب أغسطس', 'أيلول سبتمبر', 'تشرين الأول أكتوبر', 'تشرين الثاني نوفمبر', 'كانون الأول ديسمبر']
  var weekdays2char = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س']
  var weekdays3char = ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']
  var weekdaysFull = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
  var meridiemUppercase = ['صباح', 'مساء']
  var meridiemLowercase = ['ص', 'م']
  var meridiemFull = ['صباحاً', 'مساءاً']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return String(number)
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1041:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'по-малко от секунда',
      other: 'по-малко от {{count}} секунди'
    },

    xSeconds: {
      one: '1 секунда',
      other: '{{count}} секунди'
    },

    halfAMinute: 'половин минута',

    lessThanXMinutes: {
      one: 'по-малко от минута',
      other: 'по-малко от {{count}} минути'
    },

    xMinutes: {
      one: '1 минута',
      other: '{{count}} минути'
    },

    aboutXHours: {
      one: 'около час',
      other: 'около {{count}} часа'
    },

    xHours: {
      one: '1 час',
      other: '{{count}} часа'
    },

    xDays: {
      one: '1 ден',
      other: '{{count}} дни'
    },

    aboutXMonths: {
      one: 'около месец',
      other: 'около {{count}} месеца'
    },

    xMonths: {
      one: '1 месец',
      other: '{{count}} месеца'
    },

    aboutXYears: {
      one: 'около година',
      other: 'около {{count}} години'
    },

    xYears: {
      one: '1 година',
      other: '{{count}} години'
    },

    overXYears: {
      one: 'над година',
      other: 'над {{count}} години'
    },

    almostXYears: {
      one: 'почти година',
      other: 'почти {{count}} години'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'след ' + result
      } else {
        return 'преди ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1042:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['яну', 'фев', 'мар', 'апр', 'май', 'юни', 'юли', 'авг', 'сеп', 'окт', 'ное', 'дек']
  var monthsFull = ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември']
  var weekdays2char = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
  var weekdays3char = ['нед', 'пон', 'вто', 'сря', 'чет', 'пет', 'съб']
  var weekdaysFull = ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота']
  var meridiem = ['сутринта', 'на обяд', 'следобед', 'вечерта']

  var timeOfDay = function (date) {
    var hours = date.getHours()
    if (hours >= 4 && hours < 12) {
      return meridiem[0]
    } else if (hours >= 12 && hours < 14) {
      return meridiem[1]
    } else if (hours >= 14 && hours < 17) {
      return meridiem[2]
    } else {
      return meridiem[3]
    }
  }

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': timeOfDay,

    // am, pm
    'a': timeOfDay,

    // a.m., p.m.
    'aa': timeOfDay
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + '-ви'
      case 2:
        return number + '-ри'
    }
  }
  return number + '-и'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1043:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: "menys d'un segon",
      other: 'menys de {{count}} segons'
    },

    xSeconds: {
      one: '1 segon',
      other: '{{count}} segons'
    },

    halfAMinute: 'mig minut',

    lessThanXMinutes: {
      one: "menys d'un minut",
      other: 'menys de {{count}} minuts'
    },

    xMinutes: {
      one: '1 minut',
      other: '{{count}} minuts'
    },

    aboutXHours: {
      one: 'aproximadament una hora',
      other: 'aproximadament {{count}} hores'
    },

    xHours: {
      one: '1 hora',
      other: '{{count}} hores'
    },

    xDays: {
      one: '1 dia',
      other: '{{count}} dies'
    },

    aboutXMonths: {
      one: 'aproximadament un mes',
      other: 'aproximadament {{count}} mesos'
    },

    xMonths: {
      one: '1 mes',
      other: '{{count}} mesos'
    },

    aboutXYears: {
      one: 'aproximadament un any',
      other: 'aproximadament {{count}} anys'
    },

    xYears: {
      one: '1 any',
      other: '{{count}} anys'
    },

    overXYears: {
      one: "més d'un any",
      other: 'més de {{count}} anys'
    },

    almostXYears: {
      one: 'gairebé un any',
      other: 'gairebé {{count}} anys'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'en ' + result
      } else {
        return 'fa ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1044:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['gen', 'feb', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'oct', 'nov', 'des']
  var monthsFull = ['gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol', 'agost', 'setembre', 'octobre', 'novembre', 'desembre']
  var weekdays2char = ['dg', 'dl', 'dt', 'dc', 'dj', 'dv', 'ds']
  var weekdays3char = ['dge', 'dls', 'dts', 'dcs', 'djs', 'dvs', 'dss']
  var weekdaysFull = ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  switch (number) {
    case 1:
      return '1r'
    case 2:
      return '2n'
    case 3:
      return '3r'
    case 4:
      return '4t'
    default:
      return number + 'è'
  }
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1045:
/***/ (function(module, exports) {

function declensionGroup (scheme, count) {
  if (count === 1) {
    return scheme.one
  }

  if (count >= 2 && count <= 4) {
    return scheme.twoFour
  }

  // if count === null || count === 0 || count >= 5
  return scheme.other
}

function declension (scheme, count, time) {
  var group = declensionGroup(scheme, count)
  var finalText = group[time] || group
  return finalText.replace('{{count}}', count)
}

function extractPreposition (token) {
  var result = ['lessThan', 'about', 'over', 'almost'].filter(function (preposition) {
    return !!token.match(new RegExp('^' + preposition))
  })

  return result[0]
}

function prefixPreposition (preposition) {
  var translation = ''

  if (preposition === 'almost') {
    translation = 'skoro'
  }

  if (preposition === 'about') {
    translation = 'přibližně'
  }

  return translation.length > 0 ? translation + ' ' : ''
}

function suffixPreposition (preposition) {
  var translation = ''

  if (preposition === 'lessThan') {
    translation = 'méně než'
  }

  if (preposition === 'over') {
    translation = 'více než'
  }

  return translation.length > 0 ? translation + ' ' : ''
}

function lowercaseFirstLetter (string) {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    xSeconds: {
      one: {
        regular: 'vteřina',
        past: 'vteřinou',
        future: 'vteřinu'
      },
      twoFour: {
        regular: '{{count}} vteřiny',
        past: '{{count}} vteřinami',
        future: '{{count}} vteřiny'
      },
      other: {
        regular: '{{count}} vteřin',
        past: '{{count}} vteřinami',
        future: '{{count}} vteřin'
      }
    },

    halfAMinute: {
      other: {
        regular: 'půl minuty',
        past: 'půl minutou',
        future: 'půl minuty'
      }
    },

    xMinutes: {
      one: {
        regular: 'minuta',
        past: 'minutou',
        future: 'minutu'
      },
      twoFour: {
        regular: '{{count}} minuty',
        past: '{{count}} minutami',
        future: '{{count}} minuty'
      },
      other: {
        regular: '{{count}} minut',
        past: '{{count}} minutami',
        future: '{{count}} minut'
      }
    },

    xHours: {
      one: {
        regular: 'hodina',
        past: 'hodinou',
        future: 'hodinu'
      },
      twoFour: {
        regular: '{{count}} hodiny',
        past: '{{count}} hodinami',
        future: '{{count}} hodiny'
      },
      other: {
        regular: '{{count}} hodin',
        past: '{{count}} hodinami',
        future: '{{count}} hodin'
      }
    },

    xDays: {
      one: {
        regular: 'den',
        past: 'dnem',
        future: 'den'
      },
      twoFour: {
        regular: '{{count}} dni',
        past: '{{count}} dny',
        future: '{{count}} dni'
      },
      other: {
        regular: '{{count}} dní',
        past: '{{count}} dny',
        future: '{{count}} dní'
      }
    },

    xMonths: {
      one: {
        regular: 'měsíc',
        past: 'měsícem',
        future: 'měsíc'
      },
      twoFour: {
        regular: '{{count}} měsíce',
        past: '{{count}} měsíci',
        future: '{{count}} měsíce'
      },
      other: {
        regular: '{{count}} měsíců',
        past: '{{count}} měsíci',
        future: '{{count}} měsíců'
      }
    },

    xYears: {
      one: {
        regular: 'rok',
        past: 'rokem',
        future: 'rok'
      },
      twoFour: {
        regular: '{{count}} roky',
        past: '{{count}} roky',
        future: '{{count}} roky'
      },
      other: {
        regular: '{{count}} roků',
        past: '{{count}} roky',
        future: '{{count}} roků'
      }
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var preposition = extractPreposition(token) || ''
    var key = lowercaseFirstLetter(token.substring(preposition.length))
    var scheme = distanceInWordsLocale[key]

    if (!options.addSuffix) {
      return prefixPreposition(preposition) + suffixPreposition(preposition) + declension(scheme, count, 'regular')
    }

    if (options.comparison > 0) {
      return prefixPreposition(preposition) + 'za ' + suffixPreposition(preposition) + declension(scheme, count, 'future')
    } else {
      return prefixPreposition(preposition) + 'před ' + suffixPreposition(preposition) + declension(scheme, count, 'past')
    }
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1046:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro']
  var monthsFull = ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec']
  var weekdays2char = ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so']
  var weekdays3char = ['ned', 'pon', 'úte', 'stř', 'čtv', 'pát', 'sob']
  var weekdaysFull = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota']
  var meridiemUppercase = ['DOP.', 'ODP.']
  var meridiemLowercase = ['dop.', 'odp.']
  var meridiemFull = ['dopoledne', 'odpoledne']

  var formatters = {
    // Month: led, úno, ..., pro
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: leden, únor, ..., prosinec
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: ne, po, ..., so
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: ned, pon, ..., sob
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: neděle, pondělí, ..., sobota
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // DOP., ODP.
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // dop., odp.
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // dopoledne, odpoledne
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '.'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1047:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'mindre end et sekund',
      other: 'mindre end {{count}} sekunder'
    },

    xSeconds: {
      one: '1 sekund',
      other: '{{count}} sekunder'
    },

    halfAMinute: 'et halvt minut',

    lessThanXMinutes: {
      one: 'mindre end et minut',
      other: 'mindre end {{count}} minutter'
    },

    xMinutes: {
      one: '1 minut',
      other: '{{count}} minutter'
    },

    aboutXHours: {
      one: 'cirka 1 time',
      other: 'cirka {{count}} timer'
    },

    xHours: {
      one: '1 time',
      other: '{{count}} timer'
    },

    xDays: {
      one: '1 dag',
      other: '{{count}} dage'
    },

    aboutXMonths: {
      one: 'cirka 1 måned',
      other: 'cirka {{count}} måneder'
    },

    xMonths: {
      one: '1 måned',
      other: '{{count}} måneder'
    },

    aboutXYears: {
      one: 'cirka 1 år',
      other: 'cirka {{count}} år'
    },

    xYears: {
      one: '1 år',
      other: '{{count}} år'
    },

    overXYears: {
      one: 'over 1 år',
      other: 'over {{count}} år'
    },

    almostXYears: {
      one: 'næsten 1 år',
      other: 'næsten {{count}} år'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'om ' + result
      } else {
        return result + ' siden'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december']
  var weekdays2char = ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø']
  var weekdays3char = ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør']
  var weekdaysFull = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '.'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1049:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      standalone: {
        one: 'weniger als eine Sekunde',
        other: 'weniger als {{count}} Sekunden'
      },
      withPreposition: {
        one: 'weniger als einer Sekunde',
        other: 'weniger als {{count}} Sekunden'
      }
    },

    xSeconds: {
      standalone: {
        one: 'eine Sekunde',
        other: '{{count}} Sekunden'
      },
      withPreposition: {
        one: 'einer Sekunde',
        other: '{{count}} Sekunden'
      }
    },

    halfAMinute: {
      standalone: 'eine halbe Minute',
      withPreposition: 'einer halben Minute'
    },

    lessThanXMinutes: {
      standalone: {
        one: 'weniger als eine Minute',
        other: 'weniger als {{count}} Minuten'
      },
      withPreposition: {
        one: 'weniger als einer Minute',
        other: 'weniger als {{count}} Minuten'
      }
    },

    xMinutes: {
      standalone: {
        one: 'eine Minute',
        other: '{{count}} Minuten'
      },
      withPreposition: {
        one: 'einer Minute',
        other: '{{count}} Minuten'
      }
    },

    aboutXHours: {
      standalone: {
        one: 'etwa eine Stunde',
        other: 'etwa {{count}} Stunden'
      },
      withPreposition: {
        one: 'etwa einer Stunde',
        other: 'etwa {{count}} Stunden'
      }
    },

    xHours: {
      standalone: {
        one: 'eine Stunde',
        other: '{{count}} Stunden'
      },
      withPreposition: {
        one: 'einer Stunde',
        other: '{{count}} Stunden'
      }
    },

    xDays: {
      standalone: {
        one: 'ein Tag',
        other: '{{count}} Tage'
      },
      withPreposition: {
        one: 'einem Tag',
        other: '{{count}} Tagen'
      }

    },

    aboutXMonths: {
      standalone: {
        one: 'etwa ein Monat',
        other: 'etwa {{count}} Monate'
      },
      withPreposition: {
        one: 'etwa einem Monat',
        other: 'etwa {{count}} Monaten'
      }
    },

    xMonths: {
      standalone: {
        one: 'ein Monat',
        other: '{{count}} Monate'
      },
      withPreposition: {
        one: 'einem Monat',
        other: '{{count}} Monaten'
      }
    },

    aboutXYears: {
      standalone: {
        one: 'etwa ein Jahr',
        other: 'etwa {{count}} Jahre'
      },
      withPreposition: {
        one: 'etwa einem Jahr',
        other: 'etwa {{count}} Jahren'
      }
    },

    xYears: {
      standalone: {
        one: 'ein Jahr',
        other: '{{count}} Jahre'
      },
      withPreposition: {
        one: 'einem Jahr',
        other: '{{count}} Jahren'
      }
    },

    overXYears: {
      standalone: {
        one: 'mehr als ein Jahr',
        other: 'mehr als {{count}} Jahre'
      },
      withPreposition: {
        one: 'mehr als einem Jahr',
        other: 'mehr als {{count}} Jahren'
      }
    },

    almostXYears: {
      standalone: {
        one: 'fast ein Jahr',
        other: 'fast {{count}} Jahre'
      },
      withPreposition: {
        one: 'fast einem Jahr',
        other: 'fast {{count}} Jahren'
      }
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var usageGroup = options.addSuffix
      ? distanceInWordsLocale[token].withPreposition
      : distanceInWordsLocale[token].standalone

    var result
    if (typeof usageGroup === 'string') {
      result = usageGroup
    } else if (count === 1) {
      result = usageGroup.one
    } else {
      result = usageGroup.other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return 'vor ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1050:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  // Note: in German, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  var monthsFull = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
  var weekdays2char = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
  var weekdays3char = ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam']
  var weekdaysFull = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '.'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1051:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'λιγότερο από ένα δευτερόλεπτο',
      other: 'λιγότερο από {{count}} δευτερόλεπτα'
    },

    xSeconds: {
      one: '1 δευτερόλεπτο',
      other: '{{count}} δευτερόλεπτα'
    },

    halfAMinute: 'μισό λεπτό',

    lessThanXMinutes: {
      one: 'λιγότερο από ένα λεπτό',
      other: 'λιγότερο από {{count}} λεπτά'
    },

    xMinutes: {
      one: '1 λεπτό',
      other: '{{count}} λεπτά'
    },

    aboutXHours: {
      one: 'περίπου 1 ώρα',
      other: 'περίπου {{count}} ώρες'
    },

    xHours: {
      one: '1 ώρα',
      other: '{{count}} ώρες'
    },

    xDays: {
      one: '1 ημέρα',
      other: '{{count}} ημέρες'
    },

    aboutXMonths: {
      one: 'περίπου 1 μήνας',
      other: 'περίπου {{count}} μήνες'
    },

    xMonths: {
      one: '1 μήνας',
      other: '{{count}} μήνες'
    },

    aboutXYears: {
      one: 'περίπου 1 χρόνο',
      other: 'περίπου {{count}} χρόνια'
    },

    xYears: {
      one: '1 χρόνο',
      other: '{{count}} χρόνια'
    },

    overXYears: {
      one: 'πάνω από 1 χρόνο',
      other: 'πάνω από {{count}} χρόνια'
    },

    almostXYears: {
      one: 'περίπου 1 χρόνο',
      other: 'περίπου {{count}} χρόνια'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'σε ' + result
      } else {
        return result + ' πρίν'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1052:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαϊ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ']
  var monthsFull = ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος']
  var monthsGenitive = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']
  var weekdays2char = ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πέ', 'Πα', 'Σά']
  var weekdays3char = ['Κυρ', 'Δευ', 'Τρί', 'Τετ', 'Πέμ', 'Παρ', 'Σάβ']
  var weekdaysFull = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
  var meridiemUppercase = ['ΠΜ', 'ΜΜ']
  var meridiemLowercase = ['πμ', 'μμ']
  var meridiemFull = ['π.μ.', 'μ.μ.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalGenders = {
    'M': 'ος',
    'D': 'η',
    'DDD': 'η',
    'd': 'η',
    'Q': 'ο',
    'W': 'η'
  }
  var ordinalKeys = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalKeys.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date) + ordinalGenders[formatterToken]
    }
  })

  // Generate genitive variant of full months
  var formatsWithGenitive = ['D', 'Do', 'DD']
  formatsWithGenitive.forEach(function (formatterToken) {
    formatters[formatterToken + ' MMMM'] = function (date, commonFormatters) {
      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
      return formatter(date, commonFormatters) + ' ' + monthsGenitive[date.getMonth()]
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1053:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'malpli ol sekundo',
      other: 'malpli ol {{count}} sekundoj'
    },

    xSeconds: {
      one: '1 sekundo',
      other: '{{count}} sekundoj'
    },

    halfAMinute: 'duonminuto',

    lessThanXMinutes: {
      one: 'malpli ol minuto',
      other: 'malpli ol {{count}} minutoj'
    },

    xMinutes: {
      one: '1 minuto',
      other: '{{count}} minutoj'
    },

    aboutXHours: {
      one: 'proksimume 1 horo',
      other: 'proksimume {{count}} horoj'
    },

    xHours: {
      one: '1 horo',
      other: '{{count}} horoj'
    },

    xDays: {
      one: '1 tago',
      other: '{{count}} tagoj'
    },

    aboutXMonths: {
      one: 'proksimume 1 monato',
      other: 'proksimume {{count}} monatoj'
    },

    xMonths: {
      one: '1 monato',
      other: '{{count}} monatoj'
    },

    aboutXYears: {
      one: 'proksimume 1 jaro',
      other: 'proksimume {{count}} jaroj'
    },

    xYears: {
      one: '1 jaro',
      other: '{{count}} jaroj'
    },

    overXYears: {
      one: 'pli ol 1 jaro',
      other: 'pli ol {{count}} jaroj'
    },

    almostXYears: {
      one: 'preskaŭ 1 jaro',
      other: 'preskaŭ {{count}} jaroj'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'post ' + result
      } else {
        return 'antaŭ ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1054:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aŭg', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['januaro', 'februaro', 'marto', 'aprilo', 'majo', 'junio', 'julio', 'aŭgusto', 'septembro', 'oktobro', 'novembro', 'decembro']
  var weekdays2char = ['di', 'lu', 'ma', 'me', 'ĵa', 've', 'sa']
  var weekdays3char = ['dim', 'lun', 'mar', 'mer', 'ĵaŭ', 'ven', 'sab']
  var weekdaysFull = ['dimanĉo', 'lundo', 'mardo', 'merkredo', 'ĵaŭdo', 'vendredo', 'sabato']
  var meridiemUppercase = ['A.T.M.', 'P.T.M.']
  var meridiemLowercase = ['a.t.m.', 'p.t.m.']
  var meridiemFull = ['antaŭtagmeze', 'posttagmeze']

  var formatters = {
    // Month: jan, feb, ..., deс
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: januaro, februaro, ..., decembro
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: di, lu, ..., sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: dim, lun, ..., sab
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: dimanĉo, lundo, ..., sabato
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // A.T.M., P.T.M.
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // a.t.m., p.t.m.
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // antaŭtagmeze, posttagmeze
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date) + '-a'
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1055:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'menos de un segundo',
      other: 'menos de {{count}} segundos'
    },

    xSeconds: {
      one: '1 segundo',
      other: '{{count}} segundos'
    },

    halfAMinute: 'medio minuto',

    lessThanXMinutes: {
      one: 'menos de un minuto',
      other: 'menos de {{count}} minutos'
    },

    xMinutes: {
      one: '1 minuto',
      other: '{{count}} minutos'
    },

    aboutXHours: {
      one: 'alrededor de 1 hora',
      other: 'alrededor de {{count}} horas'
    },

    xHours: {
      one: '1 hora',
      other: '{{count}} horas'
    },

    xDays: {
      one: '1 día',
      other: '{{count}} días'
    },

    aboutXMonths: {
      one: 'alrededor de 1 mes',
      other: 'alrededor de {{count}} meses'
    },

    xMonths: {
      one: '1 mes',
      other: '{{count}} meses'
    },

    aboutXYears: {
      one: 'alrededor de 1 año',
      other: 'alrededor de {{count}} años'
    },

    xYears: {
      one: '1 año',
      other: '{{count}} años'
    },

    overXYears: {
      one: 'más de 1 año',
      other: 'más de {{count}} años'
    },

    almostXYears: {
      one: 'casi 1 año',
      other: 'casi {{count}} años'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'en ' + result
      } else {
        return 'hace ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1056:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
  var monthsFull = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  var weekdays2char = ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sa']
  var weekdays3char = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb']
  var weekdaysFull = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + 'º'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  function futureSeconds (text) {
    return text.replace(/sekuntia?/, 'sekunnin')
  }

  function futureMinutes (text) {
    return text.replace(/minuuttia?/, 'minuutin')
  }

  function futureHours (text) {
    return text.replace(/tuntia?/, 'tunnin')
  }

  function futureDays (text) {
    return text.replace(/päivää?/, 'päivän')
  }

  function futureMonths (text) {
    return text.replace(/(kuukausi|kuukautta)/, 'kuukauden')
  }

  function futureYears (text) {
    return text.replace(/(vuosi|vuotta)/, 'vuoden')
  }

  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'alle sekunti',
      other: 'alle {{count}} sekuntia',
      futureTense: futureSeconds
    },

    xSeconds: {
      one: 'sekunti',
      other: '{{count}} sekuntia',
      futureTense: futureSeconds
    },

    halfAMinute: {
      one: 'puoli minuuttia',
      other: 'puoli minuuttia',
      futureTense: function (text) {
        return 'puolen minuutin'
      }
    },

    lessThanXMinutes: {
      one: 'alle minuutti',
      other: 'alle {{count}} minuuttia',
      futureTense: futureMinutes
    },

    xMinutes: {
      one: 'minuutti',
      other: '{{count}} minuuttia',
      futureTense: futureMinutes
    },

    aboutXHours: {
      one: 'noin tunti',
      other: 'noin {{count}} tuntia',
      futureTense: futureHours
    },

    xHours: {
      one: 'tunti',
      other: '{{count}} tuntia',
      futureTense: futureHours
    },

    xDays: {
      one: 'päivä',
      other: '{{count}} päivää',
      futureTense: futureDays
    },

    aboutXMonths: {
      one: 'noin kuukausi',
      other: 'noin {{count}} kuukautta',
      futureTense: futureMonths
    },

    xMonths: {
      one: 'kuukausi',
      other: '{{count}} kuukautta',
      futureTense: futureMonths
    },

    aboutXYears: {
      one: 'noin vuosi',
      other: 'noin {{count}} vuotta',
      futureTense: futureYears
    },

    xYears: {
      one: 'vuosi',
      other: '{{count}} vuotta',
      futureTense: futureYears
    },

    overXYears: {
      one: 'yli vuosi',
      other: 'yli {{count}} vuotta',
      futureTense: futureYears
    },

    almostXYears: {
      one: 'lähes vuosi',
      other: 'lähes {{count}} vuotta',
      futureTense: futureYears
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var distance = distanceInWordsLocale[token]
    var result = count === 1 ? distance.one : distance.other.replace('{{count}}', count)

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return distance.futureTense(result) + ' kuluttua'
      } else {
        return result + ' sitten'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1058:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu']
  var monthsFull = ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu']
  var weekdays2char = ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la']
  var weekdaysFull = ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai']

  // In Finnish `a.m.` / `p.m.` are virtually never used, but it seems `AP` (aamupäivä) / `IP` (iltapäivä) are acknowleded terms:
  // https://fi.wikipedia.org/wiki/24_tunnin_kello
  function meridiem (date) {
    return date.getHours() < 12 ? 'AP' : 'IP'
  }

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      // Finnish doesn't use two-char weekdays
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': meridiem,

    // am, pm
    'a': meridiem,

    // a.m., p.m.
    'aa': meridiem
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date).toString() + '.'
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1059:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'mas maliit sa isang segundo',
      other: 'mas maliit sa {{count}} segundo'
    },

    xSeconds: {
      one: '1 segundo',
      other: '{{count}} segundo'
    },

    halfAMinute: 'kalahating minuto',

    lessThanXMinutes: {
      one: 'mas maliit sa isang minuto',
      other: 'mas maliit sa {{count}} minuto'
    },

    xMinutes: {
      one: '1 minuto',
      other: '{{count}} minuto'
    },

    aboutXHours: {
      one: 'mga 1 oras',
      other: 'mga {{count}} oras'
    },

    xHours: {
      one: '1 oras',
      other: '{{count}} oras'
    },

    xDays: {
      one: '1 araw',
      other: '{{count}} araw'
    },

    aboutXMonths: {
      one: 'mga 1 buwan',
      other: 'mga {{count}} buwan'
    },

    xMonths: {
      one: '1 buwan',
      other: '{{count}} buwan'
    },

    aboutXYears: {
      one: 'mga 1 taon',
      other: 'mga {{count}} taon'
    },

    xYears: {
      one: '1 taon',
      other: '{{count}} taon'
    },

    overXYears: {
      one: 'higit sa 1 taon',
      other: 'higit sa {{count}} taon'
    },

    almostXYears: {
      one: 'halos 1 taon',
      other: 'halos {{count}} taon'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'sa loob ng ' + result
      } else {
        return result + ' ang nakalipas'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis']
  var monthsFull = ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre']
  var weekdays2char = ['Li', 'Lu', 'Ma', 'Mi', 'Hu', 'Bi', 'Sa']
  var weekdays3char = ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab']
  var weekdaysFull = ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado']
  var meridiemUppercase = ['NU', 'NT', 'NH', 'NG']
  var meridiemLowercase = ['nu', 'nt', 'nh', 'ng']
  var meridiemFull = ['ng umaga', 'ng tanghali', 'ng hapon', 'ng gabi']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12
        if (modulo < 6) {
          return meridiemUppercase[2]
        } else {
          return meridiemUppercase[3]
        }
      } else if (date.getHours() < 12) {
        return meridiemUppercase[0]
      } else {
        return meridiemUppercase[1]
      }
    },

    // am, pm
    'a': function (date) {
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12
        if (modulo < 6) {
          return meridiemLowercase[2]
        } else {
          return meridiemLowercase[3]
        }
      } else if (date.getHours() < 12) {
        return meridiemLowercase[0]
      } else {
        return meridiemLowercase[1]
      }
    },

    // a.m., p.m.
    'aa': function (date) {
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12
        if (modulo < 6) {
          return meridiemFull[2]
        } else {
          return meridiemFull[3]
        }
      } else if (date.getHours() < 12) {
        return meridiemFull[0]
      } else {
        return meridiemFull[1]
      }
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return 'ika-' + number
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1061:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'moins d’une seconde',
      other: 'moins de {{count}} secondes'
    },

    xSeconds: {
      one: '1 seconde',
      other: '{{count}} secondes'
    },

    halfAMinute: '30 secondes',

    lessThanXMinutes: {
      one: 'moins d’une minute',
      other: 'moins de {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'environ 1 heure',
      other: 'environ {{count}} heures'
    },

    xHours: {
      one: '1 heure',
      other: '{{count}} heures'
    },

    xDays: {
      one: '1 jour',
      other: '{{count}} jours'
    },

    aboutXMonths: {
      one: 'environ 1 mois',
      other: 'environ {{count}} mois'
    },

    xMonths: {
      one: '1 mois',
      other: '{{count}} mois'
    },

    aboutXYears: {
      one: 'environ 1 an',
      other: 'environ {{count}} ans'
    },

    xYears: {
      one: '1 an',
      other: '{{count}} ans'
    },

    overXYears: {
      one: 'plus d’un an',
      other: 'plus de {{count}} ans'
    },

    almostXYears: {
      one: 'presqu’un an',
      other: 'presque {{count}} ans'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'dans ' + result
      } else {
        return 'il y a ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1062:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juill.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
  var monthsFull = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  var weekdays2char = ['di', 'lu', 'ma', 'me', 'je', 've', 'sa']
  var weekdays3char = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.']
  var weekdaysFull = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['du matin', 'de l’après-midi', 'du soir']

  var formatters = {
    // Month: Jan, Feb, …, Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, …, December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, …, Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, …, Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, …, Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      var hours = date.getHours()

      if (hours <= 12) {
        return meridiemFull[0]
      }

      if (hours <= 16) {
        return meridiemFull[1]
      }

      return meridiemFull[2]
    },

    // ISO week, ordinal version: 1st, 2nd, …, 53rd
    // NOTE: Week has feminine grammatical gender in French: semaine
    'Wo': function (date, formatters) {
      return feminineOrdinal(formatters.W(date))
    }
  }

  // Generate ordinal version of formatters: M → Mo, D → Do, etc.
  // NOTE: For words with masculine grammatical gender in French: mois, jour, trimestre
  var formatterTokens = ['M', 'D', 'DDD', 'd', 'Q']
  formatterTokens.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return masculineOrdinal(formatters[formatterToken](date))
    }
  })

  // Special case for day of month ordinals in long date format context:
  // 1er mars, 2 mars, 3 mars, …
  // See https://github.com/date-fns/date-fns/issues/437
  //
  // NOTE: The below implementation works because parsing of tokens inside a
  // format string is done by a greedy regular expression, i.e. longer tokens
  // have priority. E.g. formatter for "Do MMMM" has priority over individual
  // formatters for "Do" and "MMMM".
  var monthsTokens = ['MMM', 'MMMM']
  monthsTokens.forEach(function (monthToken) {
    formatters['Do ' + monthToken] = function (date, commonFormatters) {
      var dayOfMonthToken = date.getDate() === 1
        ? 'Do'
        : 'D'
      var dayOfMonthFormatter = formatters[dayOfMonthToken] || commonFormatters[dayOfMonthToken]

      return dayOfMonthFormatter(date, commonFormatters) + ' ' + formatters[monthToken](date)
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function masculineOrdinal (number) {
  if (number === 1) {
    return '1er'
  }

  return number + 'e'
}

function feminineOrdinal (number) {
  if (number === 1) {
    return '1re'
  }

  return number + 'e'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1063:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: {
        standalone: 'manje od 1 sekunde',
        withPrepositionAgo: 'manje od 1 sekunde',
        withPrepositionIn: 'manje od 1 sekundu'
      },
      dual: 'manje od {{count}} sekunde',
      other: 'manje od {{count}} sekundi'
    },

    xSeconds: {
      one: {
        standalone: '1 sekunda',
        withPrepositionAgo: '1 sekunde',
        withPrepositionIn: '1 sekundu'
      },
      dual: '{{count}} sekunde',
      other: '{{count}} sekundi'
    },

    halfAMinute: 'pola minute',

    lessThanXMinutes: {
      one: {
        standalone: 'manje od 1 minute',
        withPrepositionAgo: 'manje od 1 minute',
        withPrepositionIn: 'manje od 1 minutu'
      },
      dual: 'manje od {{count}} minute',
      other: 'manje od {{count}} minuta'
    },

    xMinutes: {
      one: {
        standalone: '1 minuta',
        withPrepositionAgo: '1 minute',
        withPrepositionIn: '1 minutu'
      },
      dual: '{{count}} minute',
      other: '{{count}} minuta'
    },

    aboutXHours: {
      one: {
        standalone: 'oko 1 sat',
        withPrepositionAgo: 'oko 1 sat',
        withPrepositionIn: 'oko 1 sat'
      },
      dual: 'oko {{count}} sata',
      other: 'oko {{count}} sati'
    },

    xHours: {
      one: {
        standalone: '1 sat',
        withPrepositionAgo: '1 sat',
        withPrepositionIn: '1 sat'
      },
      dual: '{{count}} sata',
      other: '{{count}} sati'
    },

    xDays: {
      one: {
        standalone: '1 dan',
        withPrepositionAgo: '1 dan',
        withPrepositionIn: '1 dan'
      },
      dual: '{{count}} dana',
      other: '{{count}} dana'
    },

    aboutXMonths: {
      one: {
        standalone: 'oko 1 mjesec',
        withPrepositionAgo: 'oko 1 mjesec',
        withPrepositionIn: 'oko 1 mjesec'
      },
      dual: 'oko {{count}} mjeseca',
      other: 'oko {{count}} mjeseci'
    },

    xMonths: {
      one: {
        standalone: '1 mjesec',
        withPrepositionAgo: '1 mjesec',
        withPrepositionIn: '1 mjesec'
      },
      dual: '{{count}} mjeseca',
      other: '{{count}} mjeseci'
    },

    aboutXYears: {
      one: {
        standalone: 'oko 1 godinu',
        withPrepositionAgo: 'oko 1 godinu',
        withPrepositionIn: 'oko 1 godinu'
      },
      dual: 'oko {{count}} godine',
      other: 'oko {{count}} godina'
    },

    xYears: {
      one: {
        standalone: '1 godina',
        withPrepositionAgo: '1 godine',
        withPrepositionIn: '1 godinu'
      },
      dual: '{{count}} godine',
      other: '{{count}} godina'
    },

    overXYears: {
      one: {
        standalone: 'preko 1 godinu',
        withPrepositionAgo: 'preko 1 godinu',
        withPrepositionIn: 'preko 1 godinu'
      },
      dual: 'preko {{count}} godine',
      other: 'preko {{count}} godina'
    },

    almostXYears: {
      one: {
        standalone: 'gotovo 1 godinu',
        withPrepositionAgo: 'gotovo 1 godinu',
        withPrepositionIn: 'gotovo 1 godinu'
      },
      dual: 'gotovo {{count}} godine',
      other: 'gotovo {{count}} godina'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result

    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      if (options.addSuffix) {
        if (options.comparison > 0) {
          result = distanceInWordsLocale[token].one.withPrepositionIn
        } else {
          result = distanceInWordsLocale[token].one.withPrepositionAgo
        }
      } else {
        result = distanceInWordsLocale[token].one.standalone
      }
    } else if (
      count % 10 > 1 && count % 10 < 5 && // if last digit is between 2 and 4
      String(count).substr(-2, 1) !== '1' // unless the 2nd to last digit is "1"
    ) {
      result = distanceInWordsLocale[token].dual.replace('{{count}}', count)
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'za ' + result
      } else {
        return 'prije ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['sij', 'velj', 'ožu', 'tra', 'svi', 'lip', 'srp', 'kol', 'ruj', 'lis', 'stu', 'pro']
  var monthsFull = ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac']
  var monthsGenitive = ['siječnja', 'veljače', 'ožujka', 'travnja', 'svibnja', 'lipnja', 'srpnja', 'kolovoza', 'rujna', 'listopada', 'studenog', 'prosinca']
  var weekdays2char = ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su']
  var weekdays3char = ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub']
  var weekdaysFull = ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota']
  var meridiemUppercase = ['ujutro', 'popodne']
  var meridiemLowercase = ['ujutro', 'popodne']
  var meridiemFull = ['ujutro', 'popodne']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  // Generate formatters like 'D MMMM', where the month is in the genitive case
  var monthsGenitiveFormatters = ['D', 'Do', 'DD']
  monthsGenitiveFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + ' MMM'] = function (date, commonFormatters) {
      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
      return formatter(date, commonFormatters) + ' ' + monthsGenitive[date.getMonth()]
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '.'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1065:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'kevesebb, mint egy másodperce',
      other: 'kevesebb, mint {{count}} másodperce'
    },

    xSeconds: {
      one: '1 másodperce',
      other: '{{count}} másodperce'
    },

    halfAMinute: 'fél perce',

    lessThanXMinutes: {
      one: 'kevesebb, mint egy perce',
      other: 'kevesebb, mint {{count}} perce'
    },

    xMinutes: {
      one: '1 perce',
      other: '{{count}} perce'
    },

    aboutXHours: {
      one: 'közel 1 órája',
      other: 'közel {{count}} órája'
    },

    xHours: {
      one: '1 órája',
      other: '{{count}} órája'
    },

    xDays: {
      one: '1 napja',
      other: '{{count}} napja'
    },

    aboutXMonths: {
      one: 'közel 1 hónapja',
      other: 'közel {{count}} hónapja'
    },

    xMonths: {
      one: '1 hónapja',
      other: '{{count}} hónapja'
    },

    aboutXYears: {
      one: 'közel 1 éve',
      other: 'közel {{count}} éve'
    },

    xYears: {
      one: '1 éve',
      other: '{{count}} éve'
    },

    overXYears: {
      one: 'több, mint 1 éve',
      other: 'több, mint {{count}} éve'
    },

    almostXYears: {
      one: 'majdnem 1 éve',
      other: 'majdnem {{count}} éve'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return '' + result
      } else {
        return result + ''
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1066:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Sze', 'Okt', 'Nov', 'Dec']
  var monthsFull = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December']
  var weekdays2char = ['Va', 'Hé', 'Ke', 'Sze', 'Cs', 'Pé', 'Szo']
  var weekdays3char = ['Vas', 'Hét', 'Ked', 'Sze', 'Csü', 'Pén', 'Szo']
  var weekdaysFull = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat']
  var meridiemUppercase = ['DE', 'DU']
  var meridiemLowercase = ['de', 'du']
  var meridiemFull = ['délelőtt', 'délután']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1067:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'kurang dari 1 detik',
      other: 'kurang dari {{count}} detik'
    },

    xSeconds: {
      one: '1 detik',
      other: '{{count}} detik'
    },

    halfAMinute: 'setengah menit',

    lessThanXMinutes: {
      one: 'kurang dari 1 menit',
      other: 'kurang dari {{count}} menit'
    },

    xMinutes: {
      one: '1 menit',
      other: '{{count}} menit'
    },

    aboutXHours: {
      one: 'sekitar 1 jam',
      other: 'sekitar {{count}} jam'
    },

    xHours: {
      one: '1 jam',
      other: '{{count}} jam'
    },

    xDays: {
      one: '1 hari',
      other: '{{count}} hari'
    },

    aboutXMonths: {
      one: 'sekitar 1 bulan',
      other: 'sekitar {{count}} bulan'
    },

    xMonths: {
      one: '1 bulan',
      other: '{{count}} bulan'
    },

    aboutXYears: {
      one: 'sekitar 1 tahun',
      other: 'sekitar {{count}} tahun'
    },

    xYears: {
      one: '1 tahun',
      other: '{{count}} tahun'
    },

    overXYears: {
      one: 'lebih dari 1 tahun',
      other: 'lebih dari {{count}} tahun'
    },

    almostXYears: {
      one: 'hampir 1 tahun',
      other: 'hampir {{count}} tahun'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'dalam waktu ' + result
      } else {
        return result + ' yang lalu'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1068:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  // Note: in Indonesian, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
  var monthsFull = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  var weekdays2char = ['Mi', 'Sn', 'Sl', 'Ra', 'Ka', 'Ju', 'Sa']
  var weekdays3char = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
  var weekdaysFull = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  switch (number) {
    case 1:
      return 'pertama'
    case 2:
      return 'kedua'
    case 3:
      return 'ketiga'
    default:
      return 'ke-' + number
  }
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1069:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'minna en 1 sekúnda',
      other: 'minna en {{count}} sekúndur'
    },

    xSeconds: {
      one: '1 sekúnda',
      other: '{{count}} sekúndur'
    },

    halfAMinute: 'hálf mínúta',

    lessThanXMinutes: {
      one: 'minna en 1 mínúta',
      other: 'minna en {{count}} mínútur'
    },

    xMinutes: {
      one: '1 mínúta',
      other: '{{count}} mínútur'
    },

    aboutXHours: {
      one: 'u.þ.b. 1 klukkustund',
      other: 'u.þ.b. {{count}} klukkustundir'
    },

    xHours: {
      one: '1 klukkustund',
      other: '{{count}} klukkustundir'
    },

    xDays: {
      one: '1 dagur',
      other: '{{count}} dagar'
    },

    aboutXMonths: {
      one: 'u.þ.b. 1 mánuður',
      other: 'u.þ.b. {{count}} mánuðir'
    },

    xMonths: {
      one: '1 mánuður',
      other: '{{count}} mánuðir'
    },

    aboutXYears: {
      one: 'u.þ.b. 1 ár',
      other: 'u.þ.b. {{count}} ár'
    },

    xYears: {
      one: '1 ár',
      other: '{{count}} ár'
    },

    overXYears: {
      one: 'meira en 1 ár',
      other: 'meira en {{count}} ár'
    },

    almostXYears: {
      one: 'næstum 1 ár',
      other: 'næstum {{count}} ár'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'í ' + result
      } else {
        return result + ' síðan'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'maí', 'jún', 'júl', 'ágú', 'sep', 'okt', 'nóv', 'des']
  var monthsFull = ['janúar', 'febrúar', 'mars', 'apríl', 'maí', 'júní', 'júlí', 'ágúst', 'september', 'október', 'nóvember', 'desember']
  var weekdays2char = ['su', 'má', 'þr', 'mi', 'fi', 'fö', 'la']
  var weekdays3char = ['sun', 'mán', 'þri', 'mið', 'fim', 'fös', 'lau']
  var weekdaysFull = ['sunnudaginn', 'mánudaginn', 'þriðjudaginn', 'miðvikudaginn', 'fimmtudaginn', 'föstudaginn', 'laugardaginn']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return '' + number
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1071:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'meno di un secondo',
      other: 'meno di {{count}} secondi'
    },

    xSeconds: {
      one: 'un secondo',
      other: '{{count}} secondi'
    },

    halfAMinute: 'alcuni secondi',

    lessThanXMinutes: {
      one: 'meno di un minuto',
      other: 'meno di {{count}} minuti'
    },

    xMinutes: {
      one: 'un minuto',
      other: '{{count}} minuti'
    },

    aboutXHours: {
      one: 'circa un\'ora',
      other: 'circa {{count}} ore'
    },

    xHours: {
      one: 'un\'ora',
      other: '{{count}} ore'
    },

    xDays: {
      one: 'un giorno',
      other: '{{count}} giorni'
    },

    aboutXMonths: {
      one: 'circa un mese',
      other: 'circa {{count}} mesi'
    },

    xMonths: {
      one: 'un mese',
      other: '{{count}} mesi'
    },

    aboutXYears: {
      one: 'circa un anno',
      other: 'circa {{count}} anni'
    },

    xYears: {
      one: 'un anno',
      other: '{{count}} anni'
    },

    overXYears: {
      one: 'più di un anno',
      other: 'più di {{count}} anni'
    },

    almostXYears: {
      one: 'quasi un anno',
      other: 'quasi {{count}} anni'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'tra ' + result
      } else {
        return result + ' fa'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic']
  var monthsFull = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
  var weekdays2char = ['do', 'lu', 'ma', 'me', 'gi', 've', 'sa']
  var weekdays3char = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab']
  var weekdaysFull = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + 'º'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1073:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: '1秒以下',
      other: '{{count}}秒以下'
    },

    xSeconds: {
      one: '1秒',
      other: '{{count}}秒'
    },

    halfAMinute: '30秒ぐらい',

    lessThanXMinutes: {
      one: '1分以下',
      other: '{{count}}分以下'
    },

    xMinutes: {
      one: '1分',
      other: '{{count}}分'
    },

    aboutXHours: {
      one: '1時間ぐらい',
      other: '{{count}}時間ぐらい'
    },

    xHours: {
      one: '1時間',
      other: '{{count}}時間'
    },

    xDays: {
      one: '1日',
      other: '{{count}}日'
    },

    aboutXMonths: {
      one: '1ヶ月ぐらい',
      other: '{{count}}ヶ月ぐらい'
    },

    xMonths: {
      one: '1ヶ月',
      other: '{{count}}ヶ月'
    },

    aboutXYears: {
      one: '1年ぐらい',
      other: '{{count}}年ぐらい'
    },

    xYears: {
      one: '1年',
      other: '{{count}}年'
    },

    overXYears: {
      one: '1年以上',
      other: '{{count}}年以上'
    },

    almostXYears: {
      one: '1年以下',
      other: '{{count}}年以下'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return result + '後'
      } else {
        return result + '前'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1074:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  var monthsFull = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  var weekdays2char = ['日', '月', '火', '水', '木', '金', '土']
  var weekdays3char = ['日曜', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜']
  var weekdaysFull = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
  var meridiemUppercase = ['午前', '午後']
  var meridiemLowercase = ['午前', '午後']
  var meridiemFull = ['午前', '午後']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '日'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1075:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: '1초 미만',
      other: '{{count}}초 미만'
    },

    xSeconds: {
      one: '1초',
      other: '{{count}}초'
    },

    halfAMinute: '30초',

    lessThanXMinutes: {
      one: '1분 미만',
      other: '{{count}}분 미만'
    },

    xMinutes: {
      one: '1분',
      other: '{{count}}분'
    },

    aboutXHours: {
      one: '약 1시간',
      other: '약 {{count}}시간'
    },

    xHours: {
      one: '1시간',
      other: '{{count}}시간'
    },

    xDays: {
      one: '1일',
      other: '{{count}}일'
    },

    aboutXMonths: {
      one: '약 1개월',
      other: '약 {{count}}개월'
    },

    xMonths: {
      one: '1개월',
      other: '{{count}}개월'
    },

    aboutXYears: {
      one: '약 1년',
      other: '약 {{count}}년'
    },

    xYears: {
      one: '1년',
      other: '{{count}}년'
    },

    overXYears: {
      one: '1년 이상',
      other: '{{count}}년 이상'
    },

    almostXYears: {
      one: '거의 1년',
      other: '거의 {{count}}년'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return result + ' 후'
      } else {
        return result + ' 전'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
  var monthsFull = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
  var weekdays2char = ['일', '월', '화', '수', '목', '금', '토']
  var weekdays3char = ['일', '월', '화', '수', '목', '금', '토']
  var weekdaysFull = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  var meridiemUppercase = ['오전', '오후']
  var meridiemLowercase = ['오전', '오후']
  var meridiemFull = ['오전', '오후']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '일'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1077:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'помалку од секунда',
      other: 'помалку од {{count}} секунди'
    },

    xSeconds: {
      one: '1 секунда',
      other: '{{count}} секунди'
    },

    halfAMinute: 'половина минута',

    lessThanXMinutes: {
      one: 'помалку од минута',
      other: 'помалку од {{count}} минути'
    },

    xMinutes: {
      one: '1 минута',
      other: '{{count}} минути'
    },

    aboutXHours: {
      one: 'околу 1 час',
      other: 'околу {{count}} часа'
    },

    xHours: {
      one: '1 час',
      other: '{{count}} часа'
    },

    xDays: {
      one: '1 ден',
      other: '{{count}} дена'
    },

    aboutXMonths: {
      one: 'околу 1 месец',
      other: 'околу {{count}} месеци'
    },

    xMonths: {
      one: '1 месец',
      other: '{{count}} месеци'
    },

    aboutXYears: {
      one: 'околу 1 година',
      other: 'околу {{count}} години'
    },

    xYears: {
      one: '1 година',
      other: '{{count}} години'
    },

    overXYears: {
      one: 'повеќе од 1 година',
      other: 'повеќе од {{count}} години'
    },

    almostXYears: {
      one: 'безмалку 1 година',
      other: 'безмалку {{count}} години'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'за ' + result
      } else {
        return 'пред ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['јан', 'фев', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'ное', 'дек']
  var monthsFull = ['јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември']
  var weekdays2char = ['не', 'по', 'вт', 'ср', 'че', 'пе', 'са']
  var weekdays3char = ['нед', 'пон', 'вто', 'сре', 'чет', 'пет', 'саб']
  var weekdaysFull = ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота']
  var meridiem = ['претпладне', 'попладне']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiem[1] : meridiem[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiem[1] : meridiem[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiem[1] : meridiem[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + '-ви'
      case 2:
        return number + '-ри'
      case 7:
      case 8:
        return number + '-ми'
    }
  }
  return number + '-ти'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1079:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'mindre enn ett sekund',
      other: 'mindre enn {{count}} sekunder'
    },

    xSeconds: {
      one: 'ett sekund',
      other: '{{count}} sekunder'
    },

    halfAMinute: 'et halvt minutt',

    lessThanXMinutes: {
      one: 'mindre enn ett minutt',
      other: 'mindre enn {{count}} minutter'
    },

    xMinutes: {
      one: 'ett minutt',
      other: '{{count}} minutter'
    },

    aboutXHours: {
      one: 'rundt en time',
      other: 'rundt {{count}} timer'
    },

    xHours: {
      one: 'en time',
      other: '{{count}} timer'
    },

    xDays: {
      one: 'en dag',
      other: '{{count}} dager'
    },

    aboutXMonths: {
      one: 'rundt en måned',
      other: 'rundt {{count}} måneder'
    },

    xMonths: {
      one: 'en måned',
      other: '{{count}} måneder'
    },

    aboutXYears: {
      one: 'rundt ett år',
      other: 'rundt {{count}} år'
    },

    xYears: {
      one: 'ett år',
      other: '{{count}} år'
    },

    overXYears: {
      one: 'over ett år',
      other: 'over {{count}} år'
    },

    almostXYears: {
      one: 'nesten ett år',
      other: 'nesten {{count}} år'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'om ' + result
      } else {
        return result + ' siden'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1080:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['jan.', 'feb.', 'mars', 'april', 'mai', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'des.']
  var monthsFull = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember']
  var weekdays2char = ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø']
  var weekdays3char = ['sø.', 'ma.', 'ti.', 'on.', 'to.', 'fr.', 'lø.']
  var weekdaysFull = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '.'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1081:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'minder dan een seconde',
      other: 'minder dan {{count}} seconden'
    },

    xSeconds: {
      one: '1 seconde',
      other: '{{count}} seconden'
    },

    halfAMinute: 'een halve minuut',

    lessThanXMinutes: {
      one: 'minder dan een minuut',
      other: 'minder dan {{count}} minuten'
    },

    xMinutes: {
      one: 'een minuut',
      other: '{{count}} minuten'
    },

    aboutXHours: {
      one: 'ongeveer 1 uur',
      other: 'ongeveer {{count}} uur'
    },

    xHours: {
      one: '1 uur',
      other: '{{count}} uur'
    },

    xDays: {
      one: '1 dag',
      other: '{{count}} dagen'
    },

    aboutXMonths: {
      one: 'ongeveer 1 maand',
      other: 'ongeveer {{count}} maanden'
    },

    xMonths: {
      one: '1 maand',
      other: '{{count}} maanden'
    },

    aboutXYears: {
      one: 'ongeveer 1 jaar',
      other: 'ongeveer {{count}} jaar'
    },

    xYears: {
      one: '1 jaar',
      other: '{{count}} jaar'
    },

    overXYears: {
      one: 'meer dan 1 jaar',
      other: 'meer dan {{count}} jaar'
    },

    almostXYears: {
      one: 'bijna 1 jaar',
      other: 'bijna {{count}} jaar'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'over ' + result
      } else {
        return result + ' geleden'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1082:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
  var weekdays2char = ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za']
  var weekdays3char = ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat']
  var weekdaysFull = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + 'e'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1083:
/***/ (function(module, exports) {

function declensionGroup (scheme, count) {
  if (count === 1) {
    return scheme.one
  }

  var rem100 = count % 100

  // ends with 11-20
  if (rem100 <= 20 && rem100 > 10) {
    return scheme.other
  }

  var rem10 = rem100 % 10

  // ends with 2, 3, 4
  if (rem10 >= 2 && rem10 <= 4) {
    return scheme.twoFour
  }

  return scheme.other
}

function declension (scheme, count, time) {
  time = time || 'regular'
  var group = declensionGroup(scheme, count)
  var finalText = group[time] || group
  return finalText.replace('{{count}}', count)
}

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: {
        regular: 'mniej niż sekunda',
        past: 'mniej niż sekundę',
        future: 'mniej niż sekundę'
      },
      twoFour: 'mniej niż {{count}} sekundy',
      other: 'mniej niż {{count}} sekund'
    },

    xSeconds: {
      one: {
        regular: 'sekunda',
        past: 'sekundę',
        future: 'sekundę'
      },
      twoFour: '{{count}} sekundy',
      other: '{{count}} sekund'
    },

    halfAMinute: {
      one: 'pół minuty',
      twoFour: 'pół minuty',
      other: 'pół minuty'
    },

    lessThanXMinutes: {
      one: {
        regular: 'mniej niż minuta',
        past: 'mniej niż minutę',
        future: 'mniej niż minutę'
      },
      twoFour: 'mniej niż {{count}} minuty',
      other: 'mniej niż {{count}} minut'
    },

    xMinutes: {
      one: {
        regular: 'minuta',
        past: 'minutę',
        future: 'minutę'
      },
      twoFour: '{{count}} minuty',
      other: '{{count}} minut'
    },

    aboutXHours: {
      one: {
        regular: 'około godzina',
        past: 'około godziny',
        future: 'około godzinę'
      },
      twoFour: 'około {{count}} godziny',
      other: 'około {{count}} godzin'
    },

    xHours: {
      one: {
        regular: 'godzina',
        past: 'godzinę',
        future: 'godzinę'
      },
      twoFour: '{{count}} godziny',
      other: '{{count}} godzin'
    },

    xDays: {
      one: {
        regular: 'dzień',
        past: 'dzień',
        future: '1 dzień'
      },
      twoFour: '{{count}} dni',
      other: '{{count}} dni'
    },

    aboutXMonths: {
      one: 'około miesiąc',
      twoFour: 'około {{count}} miesiące',
      other: 'około {{count}} miesięcy'
    },

    xMonths: {
      one: 'miesiąc',
      twoFour: '{{count}} miesiące',
      other: '{{count}} miesięcy'
    },

    aboutXYears: {
      one: 'około rok',
      twoFour: 'około {{count}} lata',
      other: 'około {{count}} lat'
    },

    xYears: {
      one: 'rok',
      twoFour: '{{count}} lata',
      other: '{{count}} lat'
    },

    overXYears: {
      one: 'ponad rok',
      twoFour: 'ponad {{count}} lata',
      other: 'ponad {{count}} lat'
    },

    almostXYears: {
      one: 'prawie rok',
      twoFour: 'prawie {{count}} lata',
      other: 'prawie {{count}} lat'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var scheme = distanceInWordsLocale[token]
    if (!options.addSuffix) {
      return declension(scheme, count)
    }

    if (options.comparison > 0) {
      return 'za ' + declension(scheme, count, 'future')
    } else {
      return declension(scheme, count, 'past') + ' temu'
    }
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1084:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru']
  var monthsFull = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']
  var weekdays2char = ['nd', 'pn', 'wt', 'śr', 'cz', 'pt', 'sb']
  var weekdays3char = ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'piąt.', 'sob.']
  var weekdaysFull = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']
  var meridiem = ['w nocy', 'rano', 'po południu', 'wieczorem']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // Time of day
    'A': function (date) {
      var hours = date.getHours()
      if (hours >= 17) {
        return meridiem[3]
      } else if (hours >= 12) {
        return meridiem[2]
      } else if (hours >= 4) {
        return meridiem[1]
      } else {
        return meridiem[0]
      }
    }
  }

  formatters.a = formatters.A
  formatters.aa = formatters.A

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      // Well, it should be just a number without any suffix
      return formatters[formatterToken](date).toString()
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1085:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'menos de um segundo',
      other: 'menos de {{count}} segundos'
    },

    xSeconds: {
      one: '1 segundo',
      other: '{{count}} segundos'
    },

    halfAMinute: 'meio minuto',

    lessThanXMinutes: {
      one: 'menos de um minuto',
      other: 'menos de {{count}} minutos'
    },

    xMinutes: {
      one: '1 minuto',
      other: '{{count}} minutos'
    },

    aboutXHours: {
      one: 'aproximadamente 1 hora',
      other: 'aproximadamente {{count}} horas'
    },

    xHours: {
      one: '1 hora',
      other: '{{count}} horas'
    },

    xDays: {
      one: '1 dia',
      other: '{{count}} dias'
    },

    aboutXMonths: {
      one: 'aproximadamente 1 mês',
      other: 'aproximadamente {{count}} meses'
    },

    xMonths: {
      one: '1 mês',
      other: '{{count}} meses'
    },

    aboutXYears: {
      one: 'aproximadamente 1 ano',
      other: 'aproximadamente {{count}} anos'
    },

    xYears: {
      one: '1 ano',
      other: '{{count}} anos'
    },

    overXYears: {
      one: 'mais de 1 ano',
      other: 'mais de {{count}} anos'
    },

    almostXYears: {
      one: 'quase 1 ano',
      other: 'quase {{count}} anos'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'daqui a ' + result
      } else {
        return 'há ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
  var monthsFull = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  var weekdays2char = ['do', 'se', 'te', 'qa', 'qi', 'se', 'sa']
  var weekdays3char = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb']
  var weekdaysFull = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + 'º'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1087:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'mai puțin de o secundă',
      other: 'mai puțin de {{count}} secunde'
    },

    xSeconds: {
      one: '1 secundă',
      other: '{{count}} secunde'
    },

    halfAMinute: 'jumătate de minut',

    lessThanXMinutes: {
      one: 'mai puțin de un minut',
      other: 'mai puțin de {{count}} minute'
    },

    xMinutes: {
      one: '1 minut',
      other: '{{count}} minute'
    },

    aboutXHours: {
      one: 'circa 1 oră',
      other: 'circa {{count}} ore'
    },

    xHours: {
      one: '1 oră',
      other: '{{count}} ore'
    },

    xDays: {
      one: '1 zi',
      other: '{{count}} zile'
    },

    aboutXMonths: {
      one: 'circa 1 lună',
      other: 'circa {{count}} luni'
    },

    xMonths: {
      one: '1 lună',
      other: '{{count}} luni'
    },

    aboutXYears: {
      one: 'circa 1 an',
      other: 'circa {{count}} ani'
    },

    xYears: {
      one: '1 an',
      other: '{{count}} ani'
    },

    overXYears: {
      one: 'peste 1 an',
      other: 'peste {{count}} ani'
    },

    almostXYears: {
      one: 'aproape 1 an',
      other: 'aproape {{count}} ani'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'în ' + result
      } else {
        return result + ' în urmă'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1088:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  // Note: in Romanian language the weekdays and months should be in the lowercase.
  var months3char = ['ian', 'feb', 'mar', 'apr', 'mai', 'iun', 'iul', 'aug', 'sep', 'oct', 'noi', 'dec']
  var monthsFull = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie']
  var weekdays2char = ['du', 'lu', 'ma', 'mi', 'jo', 'vi', 'sâ']
  var weekdays3char = ['dum', 'lun', 'mar', 'mie', 'joi', 'vin', 'sâm']
  var weekdaysFull = ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbăta']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number.toString()
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1089:
/***/ (function(module, exports) {

function declension (scheme, count) {
  // scheme for count=1 exists
  if (scheme.one !== undefined && count === 1) {
    return scheme.one
  }

  var rem10 = count % 10
  var rem100 = count % 100

  // 1, 21, 31, ...
  if (rem10 === 1 && rem100 !== 11) {
    return scheme.singularNominative.replace('{{count}}', count)

  // 2, 3, 4, 22, 23, 24, 32 ...
  } else if ((rem10 >= 2 && rem10 <= 4) && (rem100 < 10 || rem100 > 20)) {
    return scheme.singularGenitive.replace('{{count}}', count)

  // 5, 6, 7, 8, 9, 10, 11, ...
  } else {
    return scheme.pluralGenitive.replace('{{count}}', count)
  }
}

function buildLocalizeTokenFn (scheme) {
  return function (count, options) {
    if (options.addSuffix) {
      if (options.comparison > 0) {
        if (scheme.future) {
          return declension(scheme.future, count)
        } else {
          return 'через ' + declension(scheme.regular, count)
        }
      } else {
        if (scheme.past) {
          return declension(scheme.past, count)
        } else {
          return declension(scheme.regular, count) + ' назад'
        }
      }
    } else {
      return declension(scheme.regular, count)
    }
  }
}

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: buildLocalizeTokenFn({
      regular: {
        one: 'меньше секунды',
        singularNominative: 'меньше {{count}} секунды',
        singularGenitive: 'меньше {{count}} секунд',
        pluralGenitive: 'меньше {{count}} секунд'
      },
      future: {
        one: 'меньше, чем через секунду',
        singularNominative: 'меньше, чем через {{count}} секунду',
        singularGenitive: 'меньше, чем через {{count}} секунды',
        pluralGenitive: 'меньше, чем через {{count}} секунд'
      }
    }),

    xSeconds: buildLocalizeTokenFn({
      regular: {
        singularNominative: '{{count}} секунда',
        singularGenitive: '{{count}} секунды',
        pluralGenitive: '{{count}} секунд'
      },
      past: {
        singularNominative: '{{count}} секунду назад',
        singularGenitive: '{{count}} секунды назад',
        pluralGenitive: '{{count}} секунд назад'
      },
      future: {
        singularNominative: 'через {{count}} секунду',
        singularGenitive: 'через {{count}} секунды',
        pluralGenitive: 'через {{count}} секунд'
      }
    }),

    halfAMinute: function (_, options) {
      if (options.addSuffix) {
        if (options.comparison > 0) {
          return 'через полминуты'
        } else {
          return 'полминуты назад'
        }
      }

      return 'полминуты'
    },

    lessThanXMinutes: buildLocalizeTokenFn({
      regular: {
        one: 'меньше минуты',
        singularNominative: 'меньше {{count}} минуты',
        singularGenitive: 'меньше {{count}} минут',
        pluralGenitive: 'меньше {{count}} минут'
      },
      future: {
        one: 'меньше, чем через минуту',
        singularNominative: 'меньше, чем через {{count}} минуту',
        singularGenitive: 'меньше, чем через {{count}} минуты',
        pluralGenitive: 'меньше, чем через {{count}} минут'
      }
    }),

    xMinutes: buildLocalizeTokenFn({
      regular: {
        singularNominative: '{{count}} минута',
        singularGenitive: '{{count}} минуты',
        pluralGenitive: '{{count}} минут'
      },
      past: {
        singularNominative: '{{count}} минуту назад',
        singularGenitive: '{{count}} минуты назад',
        pluralGenitive: '{{count}} минут назад'
      },
      future: {
        singularNominative: 'через {{count}} минуту',
        singularGenitive: 'через {{count}} минуты',
        pluralGenitive: 'через {{count}} минут'
      }
    }),

    aboutXHours: buildLocalizeTokenFn({
      regular: {
        singularNominative: 'около {{count}} часа',
        singularGenitive: 'около {{count}} часов',
        pluralGenitive: 'около {{count}} часов'
      },
      future: {
        singularNominative: 'приблизительно через {{count}} час',
        singularGenitive: 'приблизительно через {{count}} часа',
        pluralGenitive: 'приблизительно через {{count}} часов'
      }
    }),

    xHours: buildLocalizeTokenFn({
      regular: {
        singularNominative: '{{count}} час',
        singularGenitive: '{{count}} часа',
        pluralGenitive: '{{count}} часов'
      }
    }),

    xDays: buildLocalizeTokenFn({
      regular: {
        singularNominative: '{{count}} день',
        singularGenitive: '{{count}} дня',
        pluralGenitive: '{{count}} дней'
      }
    }),

    aboutXMonths: buildLocalizeTokenFn({
      regular: {
        singularNominative: 'около {{count}} месяца',
        singularGenitive: 'около {{count}} месяцев',
        pluralGenitive: 'около {{count}} месяцев'
      },
      future: {
        singularNominative: 'приблизительно через {{count}} месяц',
        singularGenitive: 'приблизительно через {{count}} месяца',
        pluralGenitive: 'приблизительно через {{count}} месяцев'
      }
    }),

    xMonths: buildLocalizeTokenFn({
      regular: {
        singularNominative: '{{count}} месяц',
        singularGenitive: '{{count}} месяца',
        pluralGenitive: '{{count}} месяцев'
      }
    }),

    aboutXYears: buildLocalizeTokenFn({
      regular: {
        singularNominative: 'около {{count}} года',
        singularGenitive: 'около {{count}} лет',
        pluralGenitive: 'около {{count}} лет'
      },
      future: {
        singularNominative: 'приблизительно через {{count}} год',
        singularGenitive: 'приблизительно через {{count}} года',
        pluralGenitive: 'приблизительно через {{count}} лет'
      }
    }),

    xYears: buildLocalizeTokenFn({
      regular: {
        singularNominative: '{{count}} год',
        singularGenitive: '{{count}} года',
        pluralGenitive: '{{count}} лет'
      }
    }),

    overXYears: buildLocalizeTokenFn({
      regular: {
        singularNominative: 'больше {{count}} года',
        singularGenitive: 'больше {{count}} лет',
        pluralGenitive: 'больше {{count}} лет'
      },
      future: {
        singularNominative: 'больше, чем через {{count}} год',
        singularGenitive: 'больше, чем через {{count}} года',
        pluralGenitive: 'больше, чем через {{count}} лет'
      }
    }),

    almostXYears: buildLocalizeTokenFn({
      regular: {
        singularNominative: 'почти {{count}} год',
        singularGenitive: 'почти {{count}} года',
        pluralGenitive: 'почти {{count}} лет'
      },
      future: {
        singularNominative: 'почти через {{count}} год',
        singularGenitive: 'почти через {{count}} года',
        pluralGenitive: 'почти через {{count}} лет'
      }
    })
  }

  function localize (token, count, options) {
    options = options || {}
    return distanceInWordsLocale[token](count, options)
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1090:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  // http://new.gramota.ru/spravka/buro/search-answer?s=242637
  var monthsShort = ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.']
  var monthsFull = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
  var monthsGenitive = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  var weekdays2char = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
  var weekdays3char = ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'суб']
  var weekdaysFull = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
  var meridiem = ['ночи', 'утра', 'дня', 'вечера']

  var formatters = {
    // Month: янв., фев., ..., дек.
    'MMM': function (date) {
      return monthsShort[date.getMonth()]
    },

    // Month: январь, февраль, ..., декабрь
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: вс, пн, ..., сб
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: вск, пнд, ..., суб
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: воскресенье, понедельник, ..., суббота
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // Time of day: ночи, утра, дня, вечера
    'A': function (date) {
      var hours = date.getHours()
      if (hours >= 17) {
        return meridiem[3]
      } else if (hours >= 12) {
        return meridiem[2]
      } else if (hours >= 4) {
        return meridiem[1]
      } else {
        return meridiem[0]
      }
    },

    'Do': function (date, formatters) {
      return formatters.D(date) + '-е'
    },

    'Wo': function (date, formatters) {
      return formatters.W(date) + '-я'
    }
  }

  formatters.a = formatters.A
  formatters.aa = formatters.A

  // Generate ordinal version of formatters: M -> Mo, DDD -> DDDo, etc.
  var ordinalFormatters = ['M', 'DDD', 'd', 'Q']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date) + '-й'
    }
  })

  // Generate formatters like 'D MMMM',
  // where month is in the genitive case: января, февраля, ..., декабря
  var monthsGenitiveFormatters = ['D', 'Do', 'DD']
  monthsGenitiveFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + ' MMMM'] = function (date, commonFormatters) {
      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
      return formatter(date, commonFormatters) + ' ' + monthsGenitive[date.getMonth()]
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1091:
/***/ (function(module, exports) {

function declensionGroup (scheme, count) {
  if (count === 1) {
    return scheme.one
  }

  if (count >= 2 && count <= 4) {
    return scheme.twoFour
  }

  // if count === null || count === 0 || count >= 5
  return scheme.other
}

function declension (scheme, count, time) {
  var group = declensionGroup(scheme, count)
  var finalText = group[time] || group
  return finalText.replace('{{count}}', count)
}

function extractPreposition (token) {
  var result = ['lessThan', 'about', 'over', 'almost'].filter(function (preposition) {
    return !!token.match(new RegExp('^' + preposition))
  })

  return result[0]
}

function prefixPreposition (preposition) {
  var translation = ''

  if (preposition === 'almost') {
    translation = 'takmer'
  }

  if (preposition === 'about') {
    translation = 'približne'
  }

  return translation.length > 0 ? translation + ' ' : ''
}

function suffixPreposition (preposition) {
  var translation = ''

  if (preposition === 'lessThan') {
    translation = 'menej než'
  }

  if (preposition === 'over') {
    translation = 'viac než'
  }

  return translation.length > 0 ? translation + ' ' : ''
}

function lowercaseFirstLetter (string) {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    xSeconds: {
      one: {
        regular: 'sekunda',
        past: 'sekundou',
        future: 'sekundu'
      },
      twoFour: {
        regular: '{{count}} sekundy',
        past: '{{count}} sekundami',
        future: '{{count}} sekundy'
      },
      other: {
        regular: '{{count}} sekúnd',
        past: '{{count}} sekundami',
        future: '{{count}} sekúnd'
      }
    },

    halfAMinute: {
      other: {
        regular: 'pol minúty',
        past: 'pol minútou',
        future: 'pol minúty'
      }
    },

    xMinutes: {
      one: {
        regular: 'minúta',
        past: 'minútou',
        future: 'minútu'
      },
      twoFour: {
        regular: '{{count}} minúty',
        past: '{{count}} minútami',
        future: '{{count}} minúty'
      },
      other: {
        regular: '{{count}} minút',
        past: '{{count}} minútami',
        future: '{{count}} minút'
      }
    },

    xHours: {
      one: {
        regular: 'hodina',
        past: 'hodinou',
        future: 'hodinu'
      },
      twoFour: {
        regular: '{{count}} hodiny',
        past: '{{count}} hodinami',
        future: '{{count}} hodiny'
      },
      other: {
        regular: '{{count}} hodín',
        past: '{{count}} hodinami',
        future: '{{count}} hodín'
      }
    },

    xDays: {
      one: {
        regular: 'deň',
        past: 'dňom',
        future: 'deň'
      },
      twoFour: {
        regular: '{{count}} dni',
        past: '{{count}} dňami',
        future: '{{count}} dni'
      },
      other: {
        regular: '{{count}} dní',
        past: '{{count}} dňami',
        future: '{{count}} dní'
      }
    },

    xMonths: {
      one: {
        regular: 'mesiac',
        past: 'mesiacom',
        future: 'mesiac'
      },
      twoFour: {
        regular: '{{count}} mesiace',
        past: '{{count}} mesiacmi',
        future: '{{count}} mesiace'
      },
      other: {
        regular: '{{count}} mesiacov',
        past: '{{count}} mesiacmi',
        future: '{{count}} mesiacov'
      }
    },

    xYears: {
      one: {
        regular: 'rok',
        past: 'rokom',
        future: 'rok'
      },
      twoFour: {
        regular: '{{count}} roky',
        past: '{{count}} rokmi',
        future: '{{count}} roky'
      },
      other: {
        regular: '{{count}} rokov',
        past: '{{count}} rokmi',
        future: '{{count}} rokov'
      }
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var preposition = extractPreposition(token) || ''
    var key = lowercaseFirstLetter(token.substring(preposition.length))
    var scheme = distanceInWordsLocale[key]

    if (!options.addSuffix) {
      return prefixPreposition(preposition) + suffixPreposition(preposition) + declension(scheme, count, 'regular')
    }

    if (options.comparison > 0) {
      return prefixPreposition(preposition) + 'za ' + suffixPreposition(preposition) + declension(scheme, count, 'future')
    } else {
      return prefixPreposition(preposition) + 'pred ' + suffixPreposition(preposition) + declension(scheme, count, 'past')
    }
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['január', 'február', 'marec', 'apríl', 'máj', 'jún', 'júl', 'august', 'september', 'október', 'november', 'december']
  var weekdays2char = ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so']
  var weekdays3char = ['neď', 'pon', 'uto', 'str', 'štv', 'pia', 'sob']
  var weekdaysFull = ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: jan, feb, ..., dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: január, február, ..., december
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: ne, po, ..., so
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: neď, pon, ..., sob
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: neďeľa, pondelok, ..., sobota
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '.'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1093:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'manj kot sekunda',
      two: 'manj kot 2 sekundi',
      three: 'manj kot {{count}} sekunde',
      other: 'manj kot {{count}} sekund'
    },

    xSeconds: {
      one: '1 sekunda',
      two: '2 sekundi',
      three: '{{count}} sekunde',
      other: '{{count}} sekund'
    },

    halfAMinute: 'pol minute',

    lessThanXMinutes: {
      one: 'manj kot minuta',
      two: 'manj kot 2 minuti',
      three: 'manj kot {{count}} minute',
      other: 'manj kot {{count}} minut'
    },

    xMinutes: {
      one: '1 minuta',
      two: '2 minuti',
      three: '{{count}} minute',
      other: '{{count}} minut'
    },

    aboutXHours: {
      one: 'približno 1 ura',
      two: 'približno 2 uri',
      three: 'približno {{count}} ure',
      other: 'približno {{count}} ur'
    },

    xHours: {
      one: '1 ura',
      two: '2 uri',
      three: '{{count}} ure',
      other: '{{count}} ur'
    },

    xDays: {
      one: '1 dan',
      two: '2 dni',
      three: '{{count}} dni',
      other: '{{count}} dni'
    },

    aboutXMonths: {
      one: 'približno 1 mesec',
      two: 'približno 2 meseca',
      three: 'približno {{count}} mesece',
      other: 'približno {{count}} mesecev'
    },

    xMonths: {
      one: '1 mesec',
      two: '2 meseca',
      three: '{{count}} meseci',
      other: '{{count}} mesecev'
    },

    aboutXYears: {
      one: 'približno 1 leto',
      two: 'približno 2 leti',
      three: 'približno {{count}} leta',
      other: 'približno {{count}} let'
    },

    xYears: {
      one: '1 leto',
      two: '2 leti',
      three: '{{count}} leta',
      other: '{{count}} let'
    },

    overXYears: {
      one: 'več kot 1 leto',
      two: 'več kot 2 leti',
      three: 'več kot {{count}} leta',
      other: 'več kot {{count}} let'
    },

    almostXYears: {
      one: 'skoraj 1 leto',
      two: 'skoraj 2 leti',
      three: 'skoraj {{count}} leta',
      other: 'skoraj {{count}} let'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else if (count === 2) {
      result = distanceInWordsLocale[token].two
    } else if (count === 3 || count === 4) {
      result = distanceInWordsLocale[token].three.replace('{{count}}', count)
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      result = result.replace(/(minut|sekund|ur)(a)/, '$1o')
      if (token === 'xMonths') {
        result = result.replace(/(mesec)(i)/, '$1e')
      }
      if (options.comparison > 0) {
        return 'čez ' + result
      } else {
        return result + ' nazaj'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1094:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december']
  var weekdays2char = ['ne', 'po', 'to', 'sr', 'če', 'pe', 'so']
  var weekdays3char = ['ned', 'pon', 'tor', 'sre', 'čet', 'pet', 'sob']
  var weekdaysFull = ['nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '.'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1095:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      singular: 'mindre än en sekund',
      plural: 'mindre än {{count}} sekunder'
    },

    xSeconds: {
      singular: 'en sekund',
      plural: '{{count}} sekunder'
    },

    halfAMinute: 'en halv minut',

    lessThanXMinutes: {
      singular: 'mindre än en minut',
      plural: 'mindre än {{count}} minuter'
    },

    xMinutes: {
      singular: 'en minut',
      plural: '{{count}} minuter'
    },

    aboutXHours: {
      singular: 'ungefär en timme',
      plural: 'ungefär {{count}} timmar'
    },

    xHours: {
      singular: 'en timme',
      plural: '{{count}} timmar'
    },

    xDays: {
      singular: 'en dag',
      plural: '{{count}} dagar'
    },

    aboutXMonths: {
      singular: 'ungefär en månad',
      plural: 'ungefär {{count}} månader'
    },

    xMonths: {
      singular: 'en månad',
      plural: '{{count}} månader'
    },

    aboutXYears: {
      singular: 'ungefär ett år',
      plural: 'ungefär {{count}} år'
    },

    xYears: {
      singular: 'ett år',
      plural: '{{count}} år'
    },

    overXYears: {
      singular: 'över ett år',
      plural: 'över {{count}} år'
    },

    almostXYears: {
      singular: 'nästan ett år',
      plural: 'nästan {{count}} år'
    }
  }

  var wordMapping = [
    'noll',
    'en',
    'två',
    'tre',
    'fyra',
    'fem',
    'sex',
    'sju',
    'åtta',
    'nio',
    'tio',
    'elva',
    'tolv'
  ]

  function localize (token, count, options) {
    options = options || {}

    var translation = distanceInWordsLocale[token]
    var result
    if (typeof translation === 'string') {
      result = translation
    } else if (count === 0 || count > 1) {
      result = translation.plural.replace('{{count}}', count < 13 ? wordMapping[count] : count)
    } else {
      result = translation.singular
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'om ' + result
      } else {
        return result + ' sedan'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december']
  var weekdays2char = ['sö', 'må', 'ti', 'on', 'to', 'fr', 'lö']
  var weekdays3char = ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör']
  var weekdaysFull = ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag']
  var meridiemFull = ['f.m.', 'e.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  formatters.A = formatters.aa
  formatters.a = formatters.aa

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
      case 2:
        return number + ':a'
    }
  }
  return number + ':e'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1097:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'น้อยกว่า 1 วินาที',
      other: 'น้อยกว่า {{count}} วินาที'
    },

    xSeconds: {
      one: '1 วินาที',
      other: '{{count}} วินาที'
    },

    halfAMinute: 'ครึ่งนาที',

    lessThanXMinutes: {
      one: 'น้อยกว่า 1 นาที',
      other: 'น้อยกว่า {{count}} นาที'
    },

    xMinutes: {
      one: '1 นาที',
      other: '{{count}} นาที'
    },

    aboutXHours: {
      one: 'ประมาณ 1 ชั่วโมง',
      other: 'ประมาณ {{count}} ชั่วโมง'
    },

    xHours: {
      one: '1 ชั่วโมง',
      other: '{{count}} ชั่วโมง'
    },

    xDays: {
      one: '1 วัน',
      other: '{{count}} วัน'
    },

    aboutXMonths: {
      one: 'ประมาณ 1 เดือน',
      other: 'ประมาณ {{count}} เดือน'
    },

    xMonths: {
      one: '1 เดือน',
      other: '{{count}} เดือน'
    },

    aboutXYears: {
      one: 'ประมาณ 1 ปี',
      other: 'ประมาณ {{count}} ปี'
    },

    xYears: {
      one: '1 ปี',
      other: '{{count}} ปี'
    },

    overXYears: {
      one: 'มากกว่า 1 ปี',
      other: 'มากกว่า {{count}} ปี'
    },

    almostXYears: {
      one: 'เกือบ 1 ปี',
      other: 'เกือบ {{count}} ปี'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        if (token === 'halfAMinute') {
          return 'ใน' + result
        } else {
          return 'ใน ' + result
        }
      } else {
        return result + 'ที่ผ่านมา'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
  var monthsFull = ['มกราคาม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
  var weekdays2char = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
  var weekdays3char = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
  var weekdaysFull = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
  var meridiemUppercase = ['น.']
  var meridiemLowercase = ['น.']
  var meridiemFull = ['นาฬิกา']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return meridiemFull[0]
    }
  }

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1099:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'bir saniyeden az',
      other: '{{count}} saniyeden az'
    },

    xSeconds: {
      one: '1 saniye',
      other: '{{count}} saniye'
    },

    halfAMinute: 'yarım dakika',

    lessThanXMinutes: {
      one: 'bir dakikadan az',
      other: '{{count}} dakikadan az'
    },

    xMinutes: {
      one: '1 dakika',
      other: '{{count}} dakika'
    },

    aboutXHours: {
      one: 'yaklaşık 1 saat',
      other: 'yaklaşık {{count}} saat'
    },

    xHours: {
      one: '1 saat',
      other: '{{count}} saat'
    },

    xDays: {
      one: '1 gün',
      other: '{{count}} gün'
    },

    aboutXMonths: {
      one: 'yaklaşık 1 ay',
      other: 'yaklaşık {{count}} ay'
    },

    xMonths: {
      one: '1 ay',
      other: '{{count}} ay'
    },

    aboutXYears: {
      one: 'yaklaşık 1 yıl',
      other: 'yaklaşık {{count}} yıl'
    },

    xYears: {
      one: '1 yıl',
      other: '{{count}} yıl'
    },

    overXYears: {
      one: '1 yıldan fazla',
      other: '{{count}} yıldan fazla'
    },

    almostXYears: {
      one: 'neredeyse 1 yıl',
      other: 'neredeyse {{count}} yıl'
    }
  }

  var extraWordTokens = [
    'lessThanXSeconds',
    'lessThanXMinutes',
    'overXYears'
  ]

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      var extraWord = ''
      if (extraWordTokens.indexOf(token) > -1) {
        extraWord = ' bir süre'
      }

      if (options.comparison > 0) {
        return result + extraWord + ' içinde'
      } else {
        return result + extraWord + ' önce'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1100:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  // Note: in Turkish, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']
  var monthsFull = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
  var weekdays2char = ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct']
  var weekdays3char = ['Paz', 'Pts', 'Sal', 'Çar', 'Per', 'Cum', 'Cts']
  var weekdaysFull = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
  var meridiemUppercase = ['ÖÖ', 'ÖS']
  var meridiemLowercase = ['öö', 'ös']
  var meridiemFull = ['ö.ö.', 'ö.s.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var suffixes = {
    1: '\'inci',
    2: '\'inci',
    3: '\'üncü',
    4: '\'üncü',
    5: '\'inci',
    6: '\'ıncı',
    7: '\'inci',
    8: '\'inci',
    9: '\'uncu',
    10: '\'uncu',
    20: '\'inci',
    30: '\'uncu',
    50: '\'inci',
    60: '\'ıncı',
    70: '\'inci',
    80: '\'inci',
    90: '\'ıncı',
    100: '\'üncü'
  }

  if (number === 0) {
    return '0\'ıncı'
  }

  var x = number % 10
  var y = number % 100 - x
  var z = number >= 100 ? 100 : null

  return number + (suffixes[x] || suffixes[y] || suffixes[z])
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1101:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: '不到 1 秒',
      other: '不到 {{count}} 秒'
    },

    xSeconds: {
      one: '1 秒',
      other: '{{count}} 秒'
    },

    halfAMinute: '半分钟',

    lessThanXMinutes: {
      one: '不到 1 分钟',
      other: '不到 {{count}} 分钟'
    },

    xMinutes: {
      one: '1 分钟',
      other: '{{count}} 分钟'
    },

    xHours: {
      one: '1 小时',
      other: '{{count}} 小时'
    },

    aboutXHours: {
      one: '大约 1 小时',
      other: '大约 {{count}} 小时'
    },

    xDays: {
      one: '1 天',
      other: '{{count}} 天'
    },

    aboutXMonths: {
      one: '大约 1 个月',
      other: '大约 {{count}} 个月'
    },

    xMonths: {
      one: '1 个月',
      other: '{{count}} 个月'
    },

    aboutXYears: {
      one: '大约 1 年',
      other: '大约 {{count}} 年'
    },

    xYears: {
      one: '1 年',
      other: '{{count}} 年'
    },

    overXYears: {
      one: '超过 1 年',
      other: '超过 {{count}} 年'
    },

    almostXYears: {
      one: '将近 1 年',
      other: '将近 {{count}} 年'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return result + '内'
      } else {
        return result + '前'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  var monthsFull = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  var weekdays2char = ['日', '一', '二', '三', '四', '五', '六']
  var weekdays3char = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  var weekdaysFull = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  var meridiemFull = ['上午', '下午']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    }
  }

  // AM, PM / am, pm / a.m., p.m. all translates to 上午, 下午
  formatters.a = formatters.aa = formatters.A = function (date) {
    return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number.toString()
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1103:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: '少於 1 秒',
      other: '少於 {{count}} 秒'
    },

    xSeconds: {
      one: '1 秒',
      other: '{{count}} 秒'
    },

    halfAMinute: '半分鐘',

    lessThanXMinutes: {
      one: '少於 1 分鐘',
      other: '少於 {{count}} 分鐘'
    },

    xMinutes: {
      one: '1 分鐘',
      other: '{{count}} 分鐘'
    },

    xHours: {
      one: '1 小時',
      other: '{{count}} 小時'
    },

    aboutXHours: {
      one: '大約 1 小時',
      other: '大約 {{count}} 小時'
    },

    xDays: {
      one: '1 天',
      other: '{{count}} 天'
    },

    aboutXMonths: {
      one: '大約 1 個月',
      other: '大約 {{count}} 個月'
    },

    xMonths: {
      one: '1 個月',
      other: '{{count}} 個月'
    },

    aboutXYears: {
      one: '大約 1 年',
      other: '大約 {{count}} 年'
    },

    xYears: {
      one: '1 年',
      other: '{{count}} 年'
    },

    overXYears: {
      one: '超過 1 年',
      other: '超過 {{count}} 年'
    },

    almostXYears: {
      one: '將近 1 年',
      other: '將近 {{count}} 年'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return result + '內'
      } else {
        return result + '前'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 1104:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(571)

function buildFormatLocale () {
  var months3char = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  var monthsFull = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  var weekdays2char = ['日', '一', '二', '三', '四', '五', '六']
  var weekdays3char = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  var weekdaysFull = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['上午', '下午']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number.toString()
}

module.exports = buildFormatLocale


/***/ }),

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function camelize(str) {

	return str.replace(/-./g, function(str) { return str.charAt(1).toUpperCase() });	
}

var dataset = function(elt) {

	if ( 'dataset' in HTMLElement.prototype ) {

		dataset = function(elt) {
			
			return elt.dataset;
		}
	} else {

		dataset = function(elt) {

			var data = {};
			for ( var i = 0; i < elt.attributes.length; ++i ) {

				var attribute = elt.attributes[i];
				if ( attribute.name.substr(0, 5) === 'data-' )
					data[camelize(attribute.name.substr(5))] = attribute.value;
			}
			return data;
		}
	}
	return dataset(elt);
}

/* harmony default export */ __webpack_exports__["a"] = (function(elt, rootElt) {
	
	var dataAttrMap = {};
	for ( ; elt !== rootElt && elt !== null; elt = elt.parentNode )
		if ( elt.nodeType === 1 ) {

			var data = dataset(elt);
			for ( var propName in data )
				dataAttrMap[propName] = data[propName];
		}
	return dataAttrMap;
});


/***/ }),

/***/ 1106:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1989)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(1991)
/* template */
var __vue_template__ = __webpack_require__(1995)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vue-calendar-picker/src/calendar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4089246e", Component.options)
  } else {
    hotAPI.reload("data-v-4089246e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1998)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(2000)
/* template */
var __vue_template__ = __webpack_require__(2001)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vue-calendar-picker/src/calendarEvents.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d713e47c", Component.options)
  } else {
    hotAPI.reload("data-v-d713e47c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1848:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1849);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("0934313c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-130717ba\",\"scoped\":false,\"hasInlineConfig\":true}!./calendar_custom.css", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-130717ba\",\"scoped\":false,\"hasInlineConfig\":true}!./calendar_custom.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1849:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "/* calendar custome code */\n.content .new_calendar{\n    border: 1px solid #eee;\n    display: flex !important;\n}\n.new_calendar .calendar{\n    height:45em;\n    width: 100%;\n}\n.calendar .header {\n    margin-right: auto;\n    margin-left: auto;\n}\n.cellHead{\n    font-size: 16px;\n}\n.eventRange{\n    padding-top: 3px;\n    padding-bottom: 10px;\n    color:#fff;\n}\n.calendar .header{\n    z-index: 99 !important;\n}\n/*vue calendar*/\n.app-description {\n    flex: 0 1 auto;\n}\n.calendar-view {\n    flex: 1 1 auto;\n    margin-bottom: 1em;\n}\n.calendar-view.period-week,\n.calendar-view.period-month.periodCount-1 {\n    height: 60vw;\n}\n.calendar-view.period-month.periodCount-2,\n.calendar-view.period-month.periodCount-3 {\n    height: 150vw;\n}\n.calendar-view.period-year {\n    height: 500vw;\n}\n\n\n/* Add some emoji for Canada and France... */\n.calendar .d07-01 .date::before {\n    content: \"\\1F1E8\\1F1E6\";\n    margin-right: 0.5em;\n}\n.calendar .d07-14 .date::before {\n    content: \"\\1F1EB\\1F1F7\";\n    margin-right: 0.5em;\n}\n/* Add some styling for events tagged with the \"birthday\" class */\n.calendar .event.birthday {\n    background-color: #e0f0e0;\n    border-color: #d7e7d7;\n}\n.calendar .event.birthday::before {\n    content: \"\\1F382\";\n    margin-right: 0.5em;\n}\n.calendar-view .header{\n    z-index: 99 !important;\n}\n@media(max-width:320px){\n.calendar-view .header{\n        height:120px;\n}\n}\n/*vue simple calendar*/\n@media(min-width: 320px) and (max-width: 425px){\n.calendar-view .nav{\n        width: 100%;\n        display: inline-table;\n        margin:0 !important;\n        margin-top: -20px !important;\n}\n.calendar-view .periodLabel{\n        position: absolute;\n        margin-top: 20px !important;\n}\n.calendar-view .periodLabel div{\n        display: flex;\n}\n.period-week.calendar-view .header{\n        height: 100px;\n}\n.period-week.calendar-view .periodLabel{\n        width: 100%;\n        overflow-x: scroll;\n        margin: 30px 0 0 0 !important;\n}\n.period-year .header{\n        height: 100px;\n}\n\n    /*month*/\n.period-month.periodCount-3 .header,.period-month.periodCount-2 .header{\n        height: 90px;\n}\n.period-month.periodCount-1 .header{\n        height: 160px;\n}\n.period-year.periodCount-2 .header{\n        height: 220px;\n}\n.period-year.periodCount-3 .header{\n        height: 250px;\n}\n}\n@media(min-width: 768px) and (max-width: 1024px){\n.calendar-view .header .periodLabel > div{\n        font-size: 1em !important;\n}\n}\n.badge1{\n    background-color: #6699cc;\n}", ""]);

// exports


/***/ }),

/***/ 1850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_calendar_picker__ = __webpack_require__(1851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_simple_calendar__ = __webpack_require__(2003);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_simple_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_simple_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_simple_calendar_dist_calendar_math_mixin_js__ = __webpack_require__(2004);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_simple_calendar_dist_calendar_math_mixin_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_simple_calendar_dist_calendar_math_mixin_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_card_vue__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__card_card_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__webpack_require__(2005);
__webpack_require__(2007);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "calendar",
    data: function data() {
        return {
            //            vue-calendar start
            showDate: this.thisMonth(1),
            message: "Click a date or event...",
            alreadyAdded: false,
            startingDayOfWeek: 0,
            disablePast: false,
            disableFuture: false,
            displayPeriodUom: "month",
            displayPeriodCount: 1,
            showEventTimes: true,
            startDate: '',
            startHr: '',
            startMin: '',
            endHr: '',
            endMin: '',
            endDate: '',
            eventName: '',
            className: '',
            events: [{
                id: "e0",
                startDate: "2018-01-05"
            }, {
                id: "e99",
                startDate: this.thisMonth(15, 18, 30)
            }, {
                id: "e1",
                startDate: this.thisMonth(15),
                title: "Single-day event with a long title"
            }, {
                id: "e2",
                startDate: this.thisMonth(7, 9, 25),
                endDate: this.thisMonth(10, 16, 30),
                title: "Multi-day event with a long title and times"
            }, {
                id: "e3",
                startDate: this.thisMonth(20),
                title: "My Birthday!",
                classes: "birthday",
                url: "https://en.wikipedia.org/wiki/Birthday"
            }, {
                id: "e4",
                startDate: this.thisMonth(5),
                endDate: this.thisMonth(12),
                title: "Multi-day event",
                classes: "bg-success text-white"
            }, {
                id: "e5",
                startDate: this.thisMonth(29),
                title: "Same day 1"
            }, {
                id: "e6",
                startDate: this.thisMonth(29),
                title: "Same day 2",
                classes: "bg-danger text-white"
            }, {
                id: "e7",
                startDate: this.thisMonth(29),
                title: "Same day 3"
            }, {
                id: "e8",
                startDate: this.thisMonth(29),
                title: "Same day 4",
                classes: "bg-primary text-white"
            }, {
                id: "e9",
                startDate: this.thisMonth(29),
                title: "Same day 5"
            }, {
                id: "e10",
                startDate: this.thisMonth(29),
                title: "Same day 6",
                classes: "bg-warning text-white"
            }, {
                id: "e11",
                startDate: this.thisMonth(29),
                title: "Same day 7"
            }, {
                id: 'e12',
                startDate: this.thisMonth(23),
                endDate: this.thisMonth(24),
                title: "me add"
            }],
            //            vue calendar ends
            calendarEvents: [
            // periods
            { color: '#fd7e14', start: new Date(2016, 9, 5, 0, 0, 0, 0), end: new Date(2017, 4, 15, 0, 0, 0, 0), eventname: 'name' }, { color: '#20c997', start: new Date(2016, 9, 5, 0, 0, 0, 0), end: new Date(2017, 4, 13, 0, 0, 0, 0) }, { color: '#66ccff', start: new Date(2017, 4, 8, 12, 30, 0, 0), end: new Date(2017, 4, 9, 6, 30, 0, 0) },
            // one-time
            { color: '#faa', start: new Date(2017, 4, 2, 0, 0, 0, 0), end: new Date(2017, 4, 2, 0, 0, 0, 0) }, { color: '#aaa', start: new Date(2017, 4, 2, 0, 0, 0, 0), end: new Date(2017, 4, 2, 0, 0, 0, 0) }],
            calendarSelection: {
                start: new Date(2017, 4, 2), end: new Date(2017, 4, 7, 12)
            }
        };
    },

    components: {
        calendarRange: __WEBPACK_IMPORTED_MODULE_0_vue_calendar_picker__["a" /* calendarRange */],
        CalendarView: __WEBPACK_IMPORTED_MODULE_1_vue_simple_calendar___default.a,
        CalendarMathMixin: __WEBPACK_IMPORTED_MODULE_2_vue_simple_calendar_dist_calendar_math_mixin_js___default.a,
        card: __WEBPACK_IMPORTED_MODULE_3__card_card_vue___default.a
    },
    mounted: function mounted() {},
    destroyed: function destroyed() {},
    computed: {
        //        vue-calendar
        userLocale: function userLocale() {
            return __WEBPACK_IMPORTED_MODULE_2_vue_simple_calendar_dist_calendar_math_mixin_js___default.a.methods.getDefaultBrowserLocale;
        },
        dayNames: function dayNames() {
            return __WEBPACK_IMPORTED_MODULE_2_vue_simple_calendar_dist_calendar_math_mixin_js___default.a.methods.getFormattedWeekdayNames(this.userLocale, "long", 0);
        }
    },
    methods: {
        add: function add() {
            this.calendarEvents.push({
                color: '#' + Math.floor(Math.random() * 16777215).toString(16),
                start: this.calendarSelection.start,
                end: this.calendarSelection.end
            });
        },
        //        vue-calendar
        thisMonth: function thisMonth(d, h, m) {
            var t = new Date();
            //                console.log( new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0));
            return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0);
        },
        onClickDay: function onClickDay(d) {
            this.message = "You clicked: " + d.toLocaleDateString();
        },
        onClickEvent: function onClickEvent(e) {
            this.message = "You clicked: " + e.title;
        },
        setShowDate: function setShowDate(d) {
            this.message = "Changing calendar view to " + d.toLocaleDateString();
            this.showDate = d;
        },
        onDrop: function onDrop(event, date) {
            this.message = "You dropped " + event.id + " on " + date.toLocaleDateString();
            // Before handling drag/drop date math, need to convert string dates to
            // local dates and coalesce endDate to startDate.
            var fixedStartDate = __WEBPACK_IMPORTED_MODULE_2_vue_simple_calendar_dist_calendar_math_mixin_js___default.a.methods.toLocalDate(event.startDate);
            var fixedEndDate = __WEBPACK_IMPORTED_MODULE_2_vue_simple_calendar_dist_calendar_math_mixin_js___default.a.methods.toLocalDate(event.endDate || fixedStartDate);
            // Determine the delta between the old start date and the date chosen,
            // and apply that delta to both the start and end date to move the event.
            var eLength = __WEBPACK_IMPORTED_MODULE_2_vue_simple_calendar_dist_calendar_math_mixin_js___default.a.methods.dayDiff(fixedStartDate, date);
            event.startDate = __WEBPACK_IMPORTED_MODULE_2_vue_simple_calendar_dist_calendar_math_mixin_js___default.a.methods.addDays(fixedStartDate, eLength);
            event.endDate = __WEBPACK_IMPORTED_MODULE_2_vue_simple_calendar_dist_calendar_math_mixin_js___default.a.methods.addDays(fixedEndDate, eLength);
        },
        clickTestAddEvent: function clickTestAddEvent() {
            if (this.startDate.length != 0 && this.endDate.length != 0 && this.eventName.length != 0 && this.className.length != 0) {
                if (this.alreadyAdded) return;
                //                this.alreadyAdded = true
                this.events.push({
                    id: "e" + this.events.length - 1,
                    startDate: this.thisMonth(this.startDate, this.startHr, this.startMin),
                    endDate: this.thisMonth(this.endDate, this.endHr, this.endMin),
                    title: this.eventName,
                    classes: this.className
                });
            }
        }
    }
});

/***/ }),

/***/ 1851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendarView_vue__ = __webpack_require__(999);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendarView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__calendarView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_vue__ = __webpack_require__(1106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__calendar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendarRange_vue__ = __webpack_require__(1996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendarRange_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__calendarRange_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendarEvents_vue__ = __webpack_require__(1107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendarEvents_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__calendarEvents_vue__);
/* unused harmony reexport calendarView */
/* unused harmony reexport calendar */
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__calendarRange_vue___default.a; });
/* unused harmony reexport calendarEvents */








/***/ }),

/***/ 1852:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1853);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("7407cd1e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0692318e\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./calendarView.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0692318e\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./calendarView.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1853:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\n.calendar .view {\r\n\tdisplay: inline-block;\r\n\theight: 100%;\n}\r\n\r\n/* highlighting */\n.calendar span[data-item]:hover {\r\n\toutline: 1px dotted #000;\n}\n.calendar .today {\r\n\toutline: 1px dotted #f55;\n}\r\n\r\n\r\n/* view */\n.calendar .content {\r\n\tdisplay: inline-table;\r\n\tbox-sizing: border-box;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tline-height: 1;\r\n\tpadding: 1px;\n}\n.calendar .content > div {\r\n\tdisplay: table-row;\n}\n.calendar .content > div > span {\r\n\tdisplay: table-cell;\r\n\tvertical-align: top;\r\n\theight: 0%;\r\n\tline-height: 0.5;\n}\n.calendar .cellHead {\r\n\tvertical-align: top;\r\n\tline-height: 1;\n}\r\n\r\n\r\n/* hour */\n.calendar .hourView .cellHead {\r\n\tdisplay: inline-block;\r\n\twidth: 1em;\r\n\tfont-size: 75%;\n}\n.calendar .hourView > div > span {\r\n\theight: 6%;\n}\r\n\r\n\r\n/* day */\n.calendar .dayView .cellHead {\r\n\tmargin-right: 0.5em;\r\n\tdisplay: inline-block;\r\n\twidth: 1.25em;\n}\n.calendar .dayView > div > span {\r\n\theight: 8%;\n}\r\n\r\n\r\n/* week */\n.calendar .weekView > div > span {\r\n\tline-height: 0.5;\n}\n.calendar .weekView > div:nth-child(4n+1) > span {\r\n\tborder-bottom: 1px dashed silver;\n}\n.calendar .weekView > div:first-child > span {\r\n\twidth: 14%;\r\n\tpadding: 0.2em;\r\n\tbox-sizing: border-box;\n}\n.calendar .weekView > div > span:first-child {\r\n\twidth: 1em;\r\n\tpadding-right: 0.25em;\r\n\ttext-align: right;\n}\n.calendar .weekView > div:nth-child(odd) > span:first-child {\r\n\tvisibility: hidden;\n}\r\n\r\n\r\n/* month */\n.calendar .monthView > div:first-child > span {\r\n\tpadding: 0.25em;\r\n\ttext-align: center;\n}\n.calendar:not(.compact) .monthView > div > span:first-child {\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n\tpadding-right: 0.25em;\r\n\tline-height: 1;\n}\n.calendar .monthView .cellHead {\r\n\ttext-align: center;\n}\n.calendar .monthView .notThisMonth .cellHead {\r\n\tcolor: silver;\n}\r\n\r\n\r\n/* yearView / decadeView */\n.calendar .yearView > div > span,\r\n.calendar .decadeView > div > span {\r\n\ttext-align: center;\r\n\tvertical-align: middle;\n}\n.calendar .yearView .cellHead,\r\n.calendar .decadeView .cellHead {\r\n\tpadding: 0.2em;\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 1854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__period_js__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixin_js__ = __webpack_require__(1037);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__findDataAttr_js__ = __webpack_require__(1105);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_2__mixin_js__["a" /* default */]],
	props: {
		current: {
			type: Date,
			required: true
		},
		view: {
			type: Number,
			required: true
		},
		showOverlappingDays: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		today: function today() {
			return new Date();
		},

		viewLayout: function viewLayout() {
			return {
				2: undefined,
				3: 'vertical',
				4: 'vertical',
				5: 'vertical',
				6: 'horizontal',
				7: 'horizontal',
				8: 'horizontal'
			};
		}
	},
	methods: {

		firstVisibleDayOfMonthView: function firstVisibleDayOfMonthView(date) {

			var startOfMonth = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["startOfMonth"])(date);
			var day = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["getDay"])(startOfMonth);

			return Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["subDays"])(startOfMonth, (7 + day - this.firstDayOfTheWeek) % 7);
		},

		visibleWeeksCount: function visibleWeeksCount(date) {

			var startOfMonth = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["startOfMonth"])(date);
			var day = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["getDay"])(startOfMonth);

			return Math.ceil((Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["getDaysInMonth"])(date) + (7 + day - this.firstDayOfTheWeek) % 7) / 7);
		}
	},
	created: function created() {

		Object.assign(this, { df_setMinutes: __WEBPACK_IMPORTED_MODULE_0_date_fns__["setMinutes"], df_isSameMinute: __WEBPACK_IMPORTED_MODULE_0_date_fns__["isSameMinute"], df_format: __WEBPACK_IMPORTED_MODULE_0_date_fns__["format"], df_setHours: __WEBPACK_IMPORTED_MODULE_0_date_fns__["setHours"], df_isSameHour: __WEBPACK_IMPORTED_MODULE_0_date_fns__["isSameHour"], df_addDays: __WEBPACK_IMPORTED_MODULE_0_date_fns__["addDays"], df_startOfWeek: __WEBPACK_IMPORTED_MODULE_0_date_fns__["startOfWeek"], df_isSameDay: __WEBPACK_IMPORTED_MODULE_0_date_fns__["isSameDay"], df_getDate: __WEBPACK_IMPORTED_MODULE_0_date_fns__["getDate"], df_addHours: __WEBPACK_IMPORTED_MODULE_0_date_fns__["addHours"], df_isSameMonth: __WEBPACK_IMPORTED_MODULE_0_date_fns__["isSameMonth"], df_setDay: __WEBPACK_IMPORTED_MODULE_0_date_fns__["setDay"], df_getISOWeek: __WEBPACK_IMPORTED_MODULE_0_date_fns__["getISOWeek"], df_setMonth: __WEBPACK_IMPORTED_MODULE_0_date_fns__["setMonth"], df_addYears: __WEBPACK_IMPORTED_MODULE_0_date_fns__["addYears"], df_isSameYear: __WEBPACK_IMPORTED_MODULE_0_date_fns__["isSameYear"], df_getYear: __WEBPACK_IMPORTED_MODULE_0_date_fns__["getYear"], df_startOfMonth: __WEBPACK_IMPORTED_MODULE_0_date_fns__["startOfMonth"], df_getDay: __WEBPACK_IMPORTED_MODULE_0_date_fns__["getDay"], df_subDays: __WEBPACK_IMPORTED_MODULE_0_date_fns__["subDays"], df_getDaysInMonth: __WEBPACK_IMPORTED_MODULE_0_date_fns__["getDaysInMonth"] });
	}
});

/***/ }),

/***/ 1855:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Range Helpers
 * @summary Is the given date range overlapping with another date range?
 *
 * @description
 * Is the given date range overlapping with another date range?
 *
 * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
 * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
 * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
 * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
 * @returns {Boolean} whether the date ranges are overlapping
 * @throws {Error} startDate of a date range cannot be after its endDate
 *
 * @example
 * // For overlapping date ranges:
 * areRangesOverlapping(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping date ranges:
 * areRangesOverlapping(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
 * )
 * //=> false
 */
function areRangesOverlapping (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()
  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()
  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()
  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()

  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  return initialStartTime < comparedEndTime && comparedStartTime < initialEndTime
}

module.exports = areRangesOverlapping


/***/ }),

/***/ 1856:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @returns {Number} an index of the date closest to the given date
 * @throws {TypeError} the second argument must be an instance of Array
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * var dateToCompare = new Date(2015, 8, 6)
 * var datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * var result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */
function closestIndexTo (dirtyDateToCompare, dirtyDatesArray) {
  if (!(dirtyDatesArray instanceof Array)) {
    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
  }

  var dateToCompare = parse(dirtyDateToCompare)
  var timeToCompare = dateToCompare.getTime()

  var result
  var minDistance

  dirtyDatesArray.forEach(function (dirtyDate, index) {
    var currentDate = parse(dirtyDate)
    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result === undefined || distance < minDistance) {
      result = index
      minDistance = distance
    }
  })

  return result
}

module.exports = closestIndexTo


/***/ }),

/***/ 1857:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @returns {Date} the date from the array closest to the given date
 * @throws {TypeError} the second argument must be an instance of Array
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * var dateToCompare = new Date(2015, 8, 6)
 * var result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */
function closestTo (dirtyDateToCompare, dirtyDatesArray) {
  if (!(dirtyDatesArray instanceof Array)) {
    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
  }

  var dateToCompare = parse(dirtyDateToCompare)
  var timeToCompare = dateToCompare.getTime()

  var result
  var minDistance

  dirtyDatesArray.forEach(function (dirtyDate) {
    var currentDate = parse(dirtyDate)
    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result === undefined || distance < minDistance) {
      result = currentDate
      minDistance = distance
    }
  })

  return result
}

module.exports = closestTo


/***/ }),

/***/ 1858:
/***/ (function(module, exports, __webpack_require__) {

var startOfISOWeek = __webpack_require__(604)

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO weeks
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * var result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */
function differenceInCalendarISOWeeks (dirtyDateLeft, dirtyDateRight) {
  var startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft)
  var startOfISOWeekRight = startOfISOWeek(dirtyDateRight)

  var timestampLeft = startOfISOWeekLeft.getTime() -
    startOfISOWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfISOWeekRight.getTime() -
    startOfISOWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}

module.exports = differenceInCalendarISOWeeks


/***/ }),

/***/ 1859:
/***/ (function(module, exports, __webpack_require__) {

var getQuarter = __webpack_require__(1009)
var parse = __webpack_require__(570)

/**
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
function differenceInCalendarQuarters (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
  var quarterDiff = getQuarter(dateLeft) - getQuarter(dateRight)

  return yearDiff * 4 + quarterDiff
}

module.exports = differenceInCalendarQuarters


/***/ }),

/***/ 1860:
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(662)

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   {weekStartsOn: 1}
 * )
 * //=> 2
 */
function differenceInCalendarWeeks (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions)
  var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions)

  var timestampLeft = startOfWeekLeft.getTime() -
    startOfWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfWeekRight.getTime() -
    startOfWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}

module.exports = differenceInCalendarWeeks


/***/ }),

/***/ 1861:
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(665)

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * var result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInHours


/***/ }),

/***/ 1862:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var differenceInCalendarISOYears = __webpack_require__(1007)
var compareAsc = __webpack_require__(643)
var subISOYears = __webpack_require__(1012)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full ISO week-numbering years
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * var result = differenceInISOYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */
function differenceInISOYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarISOYears(dateLeft, dateRight))
  dateLeft = subISOYears(dateLeft, sign * difference)

  // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastISOYearNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastISOYearNotFull)
}

module.exports = differenceInISOYears


/***/ }),

/***/ 1863:
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(665)

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the number of minutes between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 */
function differenceInMinutes (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInMinutes


/***/ }),

/***/ 1864:
/***/ (function(module, exports, __webpack_require__) {

var differenceInMonths = __webpack_require__(737)

/**
 * @category Quarter Helpers
 * @summary Get the number of full quarters between the given dates.
 *
 * @description
 * Get the number of full quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full quarters
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInQuarters (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMonths(dirtyDateLeft, dirtyDateRight) / 3
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInQuarters


/***/ }),

/***/ 1865:
/***/ (function(module, exports, __webpack_require__) {

var differenceInDays = __webpack_require__(1011)

/**
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full weeks
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 2
 */
function differenceInWeeks (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInDays(dirtyDateLeft, dirtyDateRight) / 7
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInWeeks


/***/ }),

/***/ 1866:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var differenceInCalendarYears = __webpack_require__(1010)
var compareAsc = __webpack_require__(643)

/**
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 1
 */
function differenceInYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight))
  dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference)

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastYearNotFull)
}

module.exports = differenceInYears


/***/ }),

/***/ 1867:
/***/ (function(module, exports, __webpack_require__) {

var compareDesc = __webpack_require__(736)
var parse = __webpack_require__(570)
var differenceInSeconds = __webpack_require__(738)
var enLocale = __webpack_require__(666)

var MINUTES_IN_DAY = 1440
var MINUTES_IN_MONTH = 43200
var MINUTES_IN_YEAR = 525600

/**
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `distanceInWords`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date|String|Number} date - the other date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'s'|'m'|'h'|'d'|'M'|'Y'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.partialMethod='floor'] - which way to round partial units
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = distanceInWordsStrict(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * var result = distanceInWordsStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = distanceInWordsStrict(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * var result = distanceInWordsStrict(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {unit: 'm'}
 * )
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 28 January 2015, in months, rounded up?
 * var result = distanceInWordsStrict(
 *   new Date(2015, 0, 28),
 *   new Date(2015, 0, 1),
 *   {unit: 'M', partialMethod: 'ceil'}
 * )
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWordsStrict(
 *   new Date(2016, 7, 1),
 *   new Date(2015, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */
function distanceInWordsStrict (dirtyDateToCompare, dirtyDate, dirtyOptions) {
  var options = dirtyOptions || {}

  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)

  var locale = options.locale
  var localize = enLocale.distanceInWords.localize
  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
    localize = locale.distanceInWords.localize
  }

  var localizeOptions = {
    addSuffix: Boolean(options.addSuffix),
    comparison: comparison
  }

  var dateLeft, dateRight
  if (comparison > 0) {
    dateLeft = parse(dirtyDateToCompare)
    dateRight = parse(dirtyDate)
  } else {
    dateLeft = parse(dirtyDate)
    dateRight = parse(dirtyDateToCompare)
  }

  var unit
  var mathPartial = Math[options.partialMethod ? String(options.partialMethod) : 'floor']
  var seconds = differenceInSeconds(dateRight, dateLeft)
  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
  var minutes = mathPartial(seconds / 60) - offset
  var hours, days, months, years

  if (options.unit) {
    unit = String(options.unit)
  } else {
    if (minutes < 1) {
      unit = 's'
    } else if (minutes < 60) {
      unit = 'm'
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'h'
    } else if (minutes < MINUTES_IN_MONTH) {
      unit = 'd'
    } else if (minutes < MINUTES_IN_YEAR) {
      unit = 'M'
    } else {
      unit = 'Y'
    }
  }

  // 0 up to 60 seconds
  if (unit === 's') {
    return localize('xSeconds', seconds, localizeOptions)

  // 1 up to 60 mins
  } else if (unit === 'm') {
    return localize('xMinutes', minutes, localizeOptions)

  // 1 up to 24 hours
  } else if (unit === 'h') {
    hours = mathPartial(minutes / 60)
    return localize('xHours', hours, localizeOptions)

  // 1 up to 30 days
  } else if (unit === 'd') {
    days = mathPartial(minutes / MINUTES_IN_DAY)
    return localize('xDays', days, localizeOptions)

  // 1 up to 12 months
  } else if (unit === 'M') {
    months = mathPartial(minutes / MINUTES_IN_MONTH)
    return localize('xMonths', months, localizeOptions)

  // 1 year up to max Date
  } else if (unit === 'Y') {
    years = mathPartial(minutes / MINUTES_IN_YEAR)
    return localize('xYears', years, localizeOptions)
  }

  throw new Error('Unknown unit: ' + unit)
}

module.exports = distanceInWordsStrict


/***/ }),

/***/ 1868:
/***/ (function(module, exports, __webpack_require__) {

var distanceInWords = __webpack_require__(1013)

/**
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * @param {Date|String|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if the second date is earlier or later than the first
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = distanceInWordsToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = distanceInWordsToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = distanceInWordsToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWordsToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function distanceInWordsToNow (dirtyDate, dirtyOptions) {
  return distanceInWords(Date.now(), dirtyDate, dirtyOptions)
}

module.exports = distanceInWordsToNow


/***/ }),

/***/ 1869:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Day Helpers
 * @summary Return the array of dates within the specified range.
 *
 * @description
 * Return the array of dates within the specified range.
 *
 * @param {Date|String|Number} startDate - the first date
 * @param {Date|String|Number} endDate - the last date
 * @param {Number} [step=1] - the step between each day
 * @returns {Date[]} the array with starts of days from the day of startDate to the day of endDate
 * @throws {Error} startDate cannot be after endDate
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * var result = eachDay(
 *   new Date(2014, 9, 6),
 *   new Date(2014, 9, 10)
 * )
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
function eachDay (dirtyStartDate, dirtyEndDate, dirtyStep) {
  var startDate = parse(dirtyStartDate)
  var endDate = parse(dirtyEndDate)
  var step = dirtyStep !== undefined ? dirtyStep : 1

  var endTime = endDate.getTime()

  if (startDate.getTime() > endTime) {
    throw new Error('The first date cannot be after the second date')
  }

  var dates = []

  var currentDate = startDate
  currentDate.setHours(0, 0, 0, 0)

  while (currentDate.getTime() <= endTime) {
    dates.push(parse(currentDate))
    currentDate.setDate(currentDate.getDate() + step)
  }

  return dates
}

module.exports = eachDay


/***/ }),

/***/ 1870:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an hour
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * var result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */
function endOfHour (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMinutes(59, 59, 999)
  return date
}

module.exports = endOfHour


/***/ }),

/***/ 1871:
/***/ (function(module, exports, __webpack_require__) {

var endOfWeek = __webpack_require__(1016)

/**
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * var result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfISOWeek (dirtyDate) {
  return endOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = endOfISOWeek


/***/ }),

/***/ 1872:
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(603)
var startOfISOWeek = __webpack_require__(604)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 *
 * @example
 * // The end of an ISO week-numbering year for 2 July 2005:
 * var result = endOfISOYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */
function endOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuaryOfNextYear)
  date.setMilliseconds(date.getMilliseconds() - 1)
  return date
}

module.exports = endOfISOYear


/***/ }),

/***/ 1873:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a minute
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * var result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */
function endOfMinute (dirtyDate) {
  var date = parse(dirtyDate)
  date.setSeconds(59, 999)
  return date
}

module.exports = endOfMinute


/***/ }),

/***/ 1874:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a quarter
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * var result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3 + 3
  date.setMonth(month, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfQuarter


/***/ }),

/***/ 1875:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a second
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * var result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */
function endOfSecond (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(999)
  return date
}

module.exports = endOfSecond


/***/ }),

/***/ 1876:
/***/ (function(module, exports, __webpack_require__) {

var endOfDay = __webpack_require__(739)

/**
 * @category Day Helpers
 * @summary Return the end of today.
 *
 * @description
 * Return the end of today.
 *
 * @returns {Date} the end of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */
function endOfToday () {
  return endOfDay(new Date())
}

module.exports = endOfToday


/***/ }),

/***/ 1877:
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 *
 * @description
 * Return the end of tomorrow.
 *
 * @returns {Date} the end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
function endOfTomorrow () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day + 1)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfTomorrow


/***/ }),

/***/ 1878:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
function endOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  date.setFullYear(year + 1, 0, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfYear


/***/ }),

/***/ 1879:
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the end of yesterday.
 *
 * @description
 * Return the end of yesterday.
 *
 * @returns {Date} the end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */
function endOfYesterday () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day - 1)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfYesterday


/***/ }),

/***/ 1880:
/***/ (function(module, exports, __webpack_require__) {

var getDayOfYear = __webpack_require__(1018)
var getISOWeek = __webpack_require__(740)
var getISOYear = __webpack_require__(603)
var parse = __webpack_require__(570)
var isValid = __webpack_require__(1020)
var enLocale = __webpack_require__(666)

/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  var options = dirtyOptions || {}

  var locale = options.locale
  var localeFormatters = enLocale.format.formatters
  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
  if (locale && locale.format && locale.format.formatters) {
    localeFormatters = locale.format.formatters

    if (locale.format.formattingTokensRegExp) {
      formattingTokensRegExp = locale.format.formattingTokensRegExp
    }
  }

  var date = parse(dirtyDate)

  if (!isValid(date)) {
    return 'Invalid Date'
  }

  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)

  return formatFn(date)
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getMonth() + 1, 2)
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getDayOfYear(date)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getDayOfYear(date), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getDay()
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getISOWeek(date)
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getISOYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getISOYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getHours()
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date) {
    return formatTimezone(date.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date) {
    return formatTimezone(date.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date) {
    return Math.floor(date.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date) {
    return date.getTime()
  }
}

function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
  var array = formatStr.match(formattingTokensRegExp)
  var length = array.length

  var i
  var formatter
  for (i = 0; i < length; i++) {
    formatter = localeFormatters[array[i]] || formatters[array[i]]
    if (formatter) {
      array[i] = formatter
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function (date) {
    var output = ''
    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i](date, formatters)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

function removeFormattingTokens (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format


/***/ }),

/***/ 1881:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate (dirtyDate) {
  var date = parse(dirtyDate)
  var dayOfMonth = date.getDate()
  return dayOfMonth
}

module.exports = getDate


/***/ }),

/***/ 1882:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of week
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day
}

module.exports = getDay


/***/ }),

/***/ 1883:
/***/ (function(module, exports, __webpack_require__) {

var isLeapYear = __webpack_require__(1021)

/**
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a year
 *
 * @example
 * // How many days are in 2012?
 * var result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
function getDaysInYear (dirtyDate) {
  return isLeapYear(dirtyDate) ? 366 : 365
}

module.exports = getDaysInYear


/***/ }),

/***/ 1884:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * var result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
function getHours (dirtyDate) {
  var date = parse(dirtyDate)
  var hours = date.getHours()
  return hours
}

module.exports = getHours


/***/ }),

/***/ 1885:
/***/ (function(module, exports, __webpack_require__) {

var startOfISOYear = __webpack_require__(642)
var addWeeks = __webpack_require__(735)

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of ISO weeks in a year
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * var result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */
function getISOWeeksInYear (dirtyDate) {
  var thisYear = startOfISOYear(dirtyDate)
  var nextYear = startOfISOYear(addWeeks(thisYear, 60))
  var diff = nextYear.valueOf() - thisYear.valueOf()
  // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK)
}

module.exports = getISOWeeksInYear


/***/ }),

/***/ 1886:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the milliseconds
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * var result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */
function getMilliseconds (dirtyDate) {
  var date = parse(dirtyDate)
  var milliseconds = date.getMilliseconds()
  return milliseconds
}

module.exports = getMilliseconds


/***/ }),

/***/ 1887:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the minutes
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */
function getMinutes (dirtyDate) {
  var date = parse(dirtyDate)
  var minutes = date.getMinutes()
  return minutes
}

module.exports = getMinutes


/***/ }),

/***/ 1888:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the month
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  return month
}

module.exports = getMonth


/***/ }),

/***/ 1889:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

var MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000

/**
 * @category Range Helpers
 * @summary Get the number of days that overlap in two date ranges
 *
 * @description
 * Get the number of days that overlap in two date ranges
 *
 * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
 * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
 * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
 * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
 * @returns {Number} the number of days that overlap in two date ranges
 * @throws {Error} startDate of a date range cannot be after its endDate
 *
 * @example
 * // For overlapping date ranges adds 1 for each started overlapping day:
 * getOverlappingDaysInRanges(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
 * )
 * //=> 3
 *
 * @example
 * // For non-overlapping date ranges returns 0:
 * getOverlappingDaysInRanges(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
 * )
 * //=> 0
 */
function getOverlappingDaysInRanges (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()
  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()
  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()
  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()

  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  var isOverlapping = initialStartTime < comparedEndTime && comparedStartTime < initialEndTime

  if (!isOverlapping) {
    return 0
  }

  var overlapStartDate = comparedStartTime < initialStartTime
    ? initialStartTime
    : comparedStartTime

  var overlapEndDate = comparedEndTime > initialEndTime
    ? initialEndTime
    : comparedEndTime

  var differenceInMs = overlapEndDate - overlapStartDate

  return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY)
}

module.exports = getOverlappingDaysInRanges


/***/ }),

/***/ 1890:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the seconds
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
function getSeconds (dirtyDate) {
  var date = parse(dirtyDate)
  var seconds = date.getSeconds()
  return seconds
}

module.exports = getSeconds


/***/ }),

/***/ 1891:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */
function getTime (dirtyDate) {
  var date = parse(dirtyDate)
  var timestamp = date.getTime()
  return timestamp
}

module.exports = getTime


/***/ }),

/***/ 1892:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the year
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year
}

module.exports = getYear


/***/ }),

/***/ 1893:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() > dateToCompare.getTime()
}

module.exports = isAfter


/***/ }),

/***/ 1894:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() < dateToCompare.getTime()
}

module.exports = isBefore


/***/ }),

/***/ 1895:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual (dirtyLeftDate, dirtyRightDate) {
  var dateLeft = parse(dirtyLeftDate)
  var dateRight = parse(dirtyRightDate)
  return dateLeft.getTime() === dateRight.getTime()
}

module.exports = isEqual


/***/ }),

/***/ 1896:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
function isFirstDayOfMonth (dirtyDate) {
  return parse(dirtyDate).getDate() === 1
}

module.exports = isFirstDayOfMonth


/***/ }),

/***/ 1897:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Friday
 *
 * @example
 * // Is 26 September 2014 Friday?
 * var result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */
function isFriday (dirtyDate) {
  return parse(dirtyDate).getDay() === 5
}

module.exports = isFriday


/***/ }),

/***/ 1898:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Common Helpers
 * @summary Is the given date in the future?
 *
 * @description
 * Is the given date in the future?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * var result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */
function isFuture (dirtyDate) {
  return parse(dirtyDate).getTime() > new Date().getTime()
}

module.exports = isFuture


/***/ }),

/***/ 1899:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var endOfDay = __webpack_require__(739)
var endOfMonth = __webpack_require__(1017)

/**
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  return endOfDay(date).getTime() === endOfMonth(date).getTime()
}

module.exports = isLastDayOfMonth


/***/ }),

/***/ 1900:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Monday
 *
 * @example
 * // Is 22 September 2014 Monday?
 * var result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */
function isMonday (dirtyDate) {
  return parse(dirtyDate).getDay() === 1
}

module.exports = isMonday


/***/ }),

/***/ 1901:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Common Helpers
 * @summary Is the given date in the past?
 *
 * @description
 * Is the given date in the past?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast (dirtyDate) {
  return parse(dirtyDate).getTime() < new Date().getTime()
}

module.exports = isPast


/***/ }),

/***/ 1902:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(605)

/**
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

module.exports = isSameDay


/***/ }),

/***/ 1903:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Saturday
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * var result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
function isSaturday (dirtyDate) {
  return parse(dirtyDate).getDay() === 6
}

module.exports = isSaturday


/***/ }),

/***/ 1904:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Sunday
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * var result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */
function isSunday (dirtyDate) {
  return parse(dirtyDate).getDay() === 0
}

module.exports = isSunday


/***/ }),

/***/ 1905:
/***/ (function(module, exports, __webpack_require__) {

var isSameHour = __webpack_require__(1023)

/**
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this hour
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * var result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */
function isThisHour (dirtyDate) {
  return isSameHour(new Date(), dirtyDate)
}

module.exports = isThisHour


/***/ }),

/***/ 1906:
/***/ (function(module, exports, __webpack_require__) {

var isSameISOWeek = __webpack_require__(1025)

/**
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * var result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */
function isThisISOWeek (dirtyDate) {
  return isSameISOWeek(new Date(), dirtyDate)
}

module.exports = isThisISOWeek


/***/ }),

/***/ 1907:
/***/ (function(module, exports, __webpack_require__) {

var isSameISOYear = __webpack_require__(1026)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Is the given date in the same ISO week-numbering year as the current date?
 *
 * @description
 * Is the given date in the same ISO week-numbering year as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week-numbering year
 *
 * @example
 * // If today is 25 September 2014,
 * // is 30 December 2013 in this ISO week-numbering year?
 * var result = isThisISOYear(new Date(2013, 11, 30))
 * //=> true
 */
function isThisISOYear (dirtyDate) {
  return isSameISOYear(new Date(), dirtyDate)
}

module.exports = isThisISOYear


/***/ }),

/***/ 1908:
/***/ (function(module, exports, __webpack_require__) {

var isSameMinute = __webpack_require__(1027)

/**
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this minute
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * var result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */
function isThisMinute (dirtyDate) {
  return isSameMinute(new Date(), dirtyDate)
}

module.exports = isThisMinute


/***/ }),

/***/ 1909:
/***/ (function(module, exports, __webpack_require__) {

var isSameMonth = __webpack_require__(1029)

/**
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * var result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */
function isThisMonth (dirtyDate) {
  return isSameMonth(new Date(), dirtyDate)
}

module.exports = isThisMonth


/***/ }),

/***/ 1910:
/***/ (function(module, exports, __webpack_require__) {

var isSameQuarter = __webpack_require__(1030)

/**
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this quarter
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * var result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */
function isThisQuarter (dirtyDate) {
  return isSameQuarter(new Date(), dirtyDate)
}

module.exports = isThisQuarter


/***/ }),

/***/ 1911:
/***/ (function(module, exports, __webpack_require__) {

var isSameSecond = __webpack_require__(1032)

/**
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this second
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * var result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */
function isThisSecond (dirtyDate) {
  return isSameSecond(new Date(), dirtyDate)
}

module.exports = isThisSecond


/***/ }),

/***/ 1912:
/***/ (function(module, exports, __webpack_require__) {

var isSameWeek = __webpack_require__(741)

/**
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), {weekStartsOn: 1})
 * //=> false
 */
function isThisWeek (dirtyDate, dirtyOptions) {
  return isSameWeek(new Date(), dirtyDate, dirtyOptions)
}

module.exports = isThisWeek


/***/ }),

/***/ 1913:
/***/ (function(module, exports, __webpack_require__) {

var isSameYear = __webpack_require__(1034)

/**
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * var result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
function isThisYear (dirtyDate) {
  return isSameYear(new Date(), dirtyDate)
}

module.exports = isThisYear


/***/ }),

/***/ 1914:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Thursday
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * var result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */
function isThursday (dirtyDate) {
  return parse(dirtyDate).getDay() === 4
}

module.exports = isThursday


/***/ }),

/***/ 1915:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(605)

/**
 * @category Day Helpers
 * @summary Is the given date today?
 *
 * @description
 * Is the given date today?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday (dirtyDate) {
  return startOfDay(dirtyDate).getTime() === startOfDay(new Date()).getTime()
}

module.exports = isToday


/***/ }),

/***/ 1916:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(605)

/**
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow (dirtyDate) {
  var tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return startOfDay(dirtyDate).getTime() === startOfDay(tomorrow).getTime()
}

module.exports = isTomorrow


/***/ }),

/***/ 1917:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Tuesday
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * var result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
function isTuesday (dirtyDate) {
  return parse(dirtyDate).getDay() === 2
}

module.exports = isTuesday


/***/ }),

/***/ 1918:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * var result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
function isWednesday (dirtyDate) {
  return parse(dirtyDate).getDay() === 3
}

module.exports = isWednesday


/***/ }),

/***/ 1919:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * var result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day === 0 || day === 6
}

module.exports = isWeekend


/***/ }),

/***/ 1920:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Range Helpers
 * @summary Is the given date within the range?
 *
 * @description
 * Is the given date within the range?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Date|String|Number} startDate - the start of range
 * @param {Date|String|Number} endDate - the end of range
 * @returns {Boolean} the date is within the range
 * @throws {Error} startDate cannot be after endDate
 *
 * @example
 * // For the date within the range:
 * isWithinRange(
 *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
 * )
 * //=> true
 *
 * @example
 * // For the date outside of the range:
 * isWithinRange(
 *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
 * )
 * //=> false
 */
function isWithinRange (dirtyDate, dirtyStartDate, dirtyEndDate) {
  var time = parse(dirtyDate).getTime()
  var startTime = parse(dirtyStartDate).getTime()
  var endTime = parse(dirtyEndDate).getTime()

  if (startTime > endTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  return time >= startTime && time <= endTime
}

module.exports = isWithinRange


/***/ }),

/***/ 1921:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(605)

/**
 * @category Day Helpers
 * @summary Is the given date yesterday?
 *
 * @description
 * Is the given date yesterday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * var result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
function isYesterday (dirtyDate) {
  var yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return startOfDay(dirtyDate).getTime() === startOfDay(yesterday).getTime()
}

module.exports = isYesterday


/***/ }),

/***/ 1922:
/***/ (function(module, exports, __webpack_require__) {

var lastDayOfWeek = __webpack_require__(1035)

/**
 * @category ISO Week Helpers
 * @summary Return the last day of an ISO week for the given date.
 *
 * @description
 * Return the last day of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of an ISO week
 *
 * @example
 * // The last day of an ISO week for 2 September 2014 11:55:00:
 * var result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfISOWeek (dirtyDate) {
  return lastDayOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = lastDayOfISOWeek


/***/ }),

/***/ 1923:
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(603)
var startOfISOWeek = __webpack_require__(604)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * var result = lastDayOfISOYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */
function lastDayOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year + 1, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  date.setDate(date.getDate() - 1)
  return date
}

module.exports = lastDayOfISOYear


/***/ }),

/***/ 1924:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a month
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfMonth


/***/ }),

/***/ 1925:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a quarter
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * var result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3 + 3
  date.setMonth(month, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfQuarter


/***/ }),

/***/ 1926:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a year
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * var result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */
function lastDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  date.setFullYear(year + 1, 0, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfYear


/***/ }),

/***/ 1927:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {...(Date|String|Number)} dates - the dates to compare
 * @returns {Date} the latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max(
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * )
 * //=> Sun Jul 02 1995 00:00:00
 */
function max () {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function (dirtyDate) {
    return parse(dirtyDate)
  })
  var latestTimestamp = Math.max.apply(null, dates)
  return new Date(latestTimestamp)
}

module.exports = max


/***/ }),

/***/ 1928:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Common Helpers
 * @summary Return the earliest of the given dates.
 *
 * @description
 * Return the earliest of the given dates.
 *
 * @param {...(Date|String|Number)} dates - the dates to compare
 * @returns {Date} the earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * var result = min(
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * )
 * //=> Wed Feb 11 1987 00:00:00
 */
function min () {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function (dirtyDate) {
    return parse(dirtyDate)
  })
  var earliestTimestamp = Math.min.apply(null, dates)
  return new Date(earliestTimestamp)
}

module.exports = min


/***/ }),

/***/ 1929:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month setted
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
function setDate (dirtyDate, dirtyDayOfMonth) {
  var date = parse(dirtyDate)
  var dayOfMonth = Number(dirtyDayOfMonth)
  date.setDate(dayOfMonth)
  return date
}

module.exports = setDate


/***/ }),

/***/ 1930:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var addDays = __webpack_require__(640)

/**
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the week of the new date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the new date with the day of the week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If week starts with Monday, set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0, {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay (dirtyDate, dirtyDay, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0
  var date = parse(dirtyDate)
  var day = Number(dirtyDay)
  var currentDay = date.getDay()

  var remainder = day % 7
  var dayIndex = (remainder + 7) % 7

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay
  return addDays(date, diff)
}

module.exports = setDay


/***/ }),

/***/ 1931:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfYear - the day of the year of the new date
 * @returns {Date} the new date with the day of the year setted
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */
function setDayOfYear (dirtyDate, dirtyDayOfYear) {
  var date = parse(dirtyDate)
  var dayOfYear = Number(dirtyDayOfYear)
  date.setMonth(0)
  date.setDate(dayOfYear)
  return date
}

module.exports = setDayOfYear


/***/ }),

/***/ 1932:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours setted
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours (dirtyDate, dirtyHours) {
  var date = parse(dirtyDate)
  var hours = Number(dirtyHours)
  date.setHours(hours)
  return date
}

module.exports = setHours


/***/ }),

/***/ 1933:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var addDays = __webpack_require__(640)
var getISODay = __webpack_require__(1022)

/**
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the ISO week of the new date
 * @returns {Date} the new date with the day of the ISO week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay (dirtyDate, dirtyDay) {
  var date = parse(dirtyDate)
  var day = Number(dirtyDay)
  var currentDay = getISODay(date)
  var diff = day - currentDay
  return addDays(date, diff)
}

module.exports = setISODay


/***/ }),

/***/ 1934:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var getISOWeek = __webpack_require__(740)

/**
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @returns {Date} the new date with the ISO week setted
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * var result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek (dirtyDate, dirtyISOWeek) {
  var date = parse(dirtyDate)
  var isoWeek = Number(dirtyISOWeek)
  var diff = getISOWeek(date) - isoWeek
  date.setDate(date.getDate() - diff * 7)
  return date
}

module.exports = setISOWeek


/***/ }),

/***/ 1935:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} milliseconds - the milliseconds of the new date
 * @returns {Date} the new date with the milliseconds setted
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * var result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */
function setMilliseconds (dirtyDate, dirtyMilliseconds) {
  var date = parse(dirtyDate)
  var milliseconds = Number(dirtyMilliseconds)
  date.setMilliseconds(milliseconds)
  return date
}

module.exports = setMilliseconds


/***/ }),

/***/ 1936:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes setted
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes (dirtyDate, dirtyMinutes) {
  var date = parse(dirtyDate)
  var minutes = Number(dirtyMinutes)
  date.setMinutes(minutes)
  return date
}

module.exports = setMinutes


/***/ }),

/***/ 1937:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var setMonth = __webpack_require__(1036)

/**
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} quarter - the quarter of the new date
 * @returns {Date} the new date with the quarter setted
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * var result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
function setQuarter (dirtyDate, dirtyQuarter) {
  var date = parse(dirtyDate)
  var quarter = Number(dirtyQuarter)
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1
  var diff = quarter - oldQuarter
  return setMonth(date, date.getMonth() + diff * 3)
}

module.exports = setQuarter


/***/ }),

/***/ 1938:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @returns {Date} the new date with the seconds setted
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
function setSeconds (dirtyDate, dirtySeconds) {
  var date = parse(dirtyDate)
  var seconds = Number(dirtySeconds)
  date.setSeconds(seconds)
  return date
}

module.exports = setSeconds


/***/ }),

/***/ 1939:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year setted
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear (dirtyDate, dirtyYear) {
  var date = parse(dirtyDate)
  var year = Number(dirtyYear)
  date.setFullYear(year)
  return date
}

module.exports = setYear


/***/ }),

/***/ 1940:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth


/***/ }),

/***/ 1941:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(605)

/**
 * @category Day Helpers
 * @summary Return the start of today.
 *
 * @description
 * Return the start of today.
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */
function startOfToday () {
  return startOfDay(new Date())
}

module.exports = startOfToday


/***/ }),

/***/ 1942:
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 *
 * @description
 * Return the start of tomorrow.
 *
 * @returns {Date} the start of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */
function startOfTomorrow () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day + 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfTomorrow


/***/ }),

/***/ 1943:
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the start of yesterday.
 *
 * @description
 * Return the start of yesterday.
 *
 * @returns {Date} the start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */
function startOfYesterday () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day - 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYesterday


/***/ }),

/***/ 1944:
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__(640)

/**
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @returns {Date} the new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addDays(dirtyDate, -amount)
}

module.exports = subDays


/***/ }),

/***/ 1945:
/***/ (function(module, exports, __webpack_require__) {

var addHours = __webpack_require__(1000)

/**
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be subtracted
 * @returns {Date} the new date with the hours subtracted
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * var result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */
function subHours (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addHours(dirtyDate, -amount)
}

module.exports = subHours


/***/ }),

/***/ 1946:
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(641)

/**
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted
 * @returns {Date} the new date with the milliseconds subtracted
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, -amount)
}

module.exports = subMilliseconds


/***/ }),

/***/ 1947:
/***/ (function(module, exports, __webpack_require__) {

var addMinutes = __webpack_require__(1003)

/**
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be subtracted
 * @returns {Date} the new date with the mintues subtracted
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
function subMinutes (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMinutes(dirtyDate, -amount)
}

module.exports = subMinutes


/***/ }),

/***/ 1948:
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__(664)

/**
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted
 * @returns {Date} the new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, -amount)
}

module.exports = subMonths


/***/ }),

/***/ 1949:
/***/ (function(module, exports, __webpack_require__) {

var addQuarters = __webpack_require__(1004)

/**
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be subtracted
 * @returns {Date} the new date with the quarters subtracted
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * var result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */
function subQuarters (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addQuarters(dirtyDate, -amount)
}

module.exports = subQuarters


/***/ }),

/***/ 1950:
/***/ (function(module, exports, __webpack_require__) {

var addSeconds = __webpack_require__(1005)

/**
 * @category Second Helpers
 * @summary Subtract the specified number of seconds from the given date.
 *
 * @description
 * Subtract the specified number of seconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be subtracted
 * @returns {Date} the new date with the seconds subtracted
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * var result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */
function subSeconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addSeconds(dirtyDate, -amount)
}

module.exports = subSeconds


/***/ }),

/***/ 1951:
/***/ (function(module, exports, __webpack_require__) {

var addWeeks = __webpack_require__(735)

/**
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted
 * @returns {Date} the new date with the weeks subtracted
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * var result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
function subWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addWeeks(dirtyDate, -amount)
}

module.exports = subWeeks


/***/ }),

/***/ 1952:
/***/ (function(module, exports, __webpack_require__) {

var addYears = __webpack_require__(1006)

/**
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted
 * @returns {Date} the new date with the years subtracted
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * var result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */
function subYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addYears(dirtyDate, -amount)
}

module.exports = subYears


/***/ }),

/***/ 1953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

	if ( Object({"MIX_APP_URL":"http://127.0.0.1:8000","MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).VUE_ENV === 'server' ) {

		return {}
	}

	var docComputedStyles = window.getComputedStyle(window.document.documentElement);
	var hasUserSelect = 'userSelect' in docComputedStyles || 'MozUserSelect' in docComputedStyles || 'OUserSelect' in docComputedStyles || 'msUserSelect' in docComputedStyles || 'WebkitUserSelect' in docComputedStyles;
	var hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints;
	var hasMouse = true;

	var uaName = navigator.appVersion;
	var pos = uaName.indexOf('MSIE ');
	var ieVer = pos !== -1 ? parseFloat(uaName.substr(pos+5, uaName.indexOf(';', pos))) : 0;
	
	function hasKeyActive(cx, ev) {
		
		return ev.shiftKey || ev.ctrlKey || ev.altKey || ev.metaKey;
	}

	function hasPointerActive(cx, ev) {

		return 'buttonState' in cx ? cx.buttonState : ev.buttons !== 0;
	}


	function touchStartHandler(cx, ev) {

		cx.callback({ eventType:'down', eventTarget:ev.target, pointerActive:true, keyActive:false});
		
		cx.pressTimeout = setTimeout(function() {
		
			cx.callback({ eventType:'press', eventTarget:ev.target, pointerActive:true, keyActive:false});
		}, 1000);
	}
	
	function touchEndHandler(cx, ev) {

		if ( cx.pressTimeout !== undefined ) {
			
			clearTimeout(cx.pressTimeout);
			cx.pressTimeout = undefined;
		}
		
		cx.callback({ eventType:'up', eventTarget:ev.target, pointerActive:false, keyActive:false});
	}

	function touchMoveHandler(cx, ev) {
		
		if ( cx.pressTimeout !== undefined ) {
			
			clearTimeout(cx.pressTimeout);
			cx.pressTimeout = undefined;
		}
		
		ev.preventDefault();
		
		var eventTarget = document.elementFromPoint(ev.changedTouches[0].clientX, ev.changedTouches[0].clientY);
		cx.callback({ eventType:'over', eventTarget:eventTarget, pointerActive:true, keyActive:false});
	}
	
	function clickHandler(cx, ev) {
		
		cx.callback({ eventType:'tap', eventTarget:ev.target, pointerActive:false, keyActive:hasKeyActive(cx, ev)});
	}
	
	function dblclickHandler(cx, ev) {
		
		cx.callback({ eventType:'press', eventTarget:ev.target, pointerActive:false, keyActive:hasKeyActive(cx, ev)});
	}
	
	function mouseOverHandler(cx, ev) {
		
		cx.callback({ eventType:'over', eventTarget:ev.target, pointerActive:hasPointerActive(cx, ev), keyActive:hasKeyActive(cx, ev)});
	}
	
	function mouseDownHandler(cx, ev) {

		cx.callback({ eventType:'down', eventTarget:ev.target, pointerActive:true, keyActive:hasKeyActive(cx, ev)});
	}
	
	function mouseUpHandler(cx, ev) {

		cx.callback({ eventType:'up', eventTarget:ev.target, pointerActive:false, keyActive:hasKeyActive(cx, ev)});
	}
	
	
	function eventListener(el, eventName, handler) {
		
		el.addEventListener(eventName, handler);
		return el.removeEventListener.bind(el, eventName, handler);
	}

	return {
		bind: function(el, binding, vnode, oldVnode) {
			
			var cx = {
				el: el,
				callback: binding.value,
				offEvent: []
			}
			
			cx.offEvent.push( eventListener(el, 'click', clickHandler.bind(this, cx)) );
			cx.offEvent.push( eventListener(el, 'dblclick', dblclickHandler.bind(this, cx)) );

			// touch screen
			if ( hasTouchScreen ) {
				
				cx.offEvent.push( eventListener(el, 'touchstart', touchStartHandler.bind(this, cx)) );
				cx.offEvent.push( eventListener(el, 'touchmove', touchMoveHandler.bind(this, cx)) );
				cx.offEvent.push( eventListener(el, 'touchend', touchEndHandler.bind(this, cx)) );
			}
			
			if ( hasMouse ) {
				
				cx.offEvent.push( eventListener(el, 'mouseover', mouseOverHandler.bind(this, cx)) );
				cx.offEvent.push( eventListener(el, 'mousedown', mouseDownHandler.bind(this, cx)) );
				cx.offEvent.push( eventListener(el, 'mouseup', mouseUpHandler.bind(this, cx)) );
	
				if ( ieVer && ieVer === 9 ) {
					
					// IE9 does not update ev.buttons on mouseover event
					cx.buttonState = undefined;
					cx.offEvent.push( eventListener(document, 'mousedown', function(ev) { cx.buttonState = true } ) );
					cx.offEvent.push( eventListener(document, 'mouseup', function(ev) { cx.buttonState = false } ) );
				}
			}

			if ( !hasUserSelect )
				cx.offEvent.push( eventListener(el, 'selectstart', function(ev) { ev.preventDefault() } ) );

			el._onpointerCx = cx;
		},
		unbind: function(el, binding, vnode, oldVnode) {
			
			var cx = el._onpointerCx;
			while ( cx.offEvent.length !== 0 )
				cx.offEvent.pop()();
			el._onpointerCx = null;
		}
	}
});


/***/ }),

/***/ 1954:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./_lib/build_formatting_tokens_reg_exp/index.js": 571,
	"./ar/build_distance_in_words_locale/index.js": 1039,
	"./ar/build_format_locale/index.js": 1040,
	"./ar/index.js": 1955,
	"./bg/build_distance_in_words_locale/index.js": 1041,
	"./bg/build_format_locale/index.js": 1042,
	"./bg/index.js": 1956,
	"./ca/build_distance_in_words_locale/index.js": 1043,
	"./ca/build_format_locale/index.js": 1044,
	"./ca/index.js": 1957,
	"./cs/build_distance_in_words_locale/index.js": 1045,
	"./cs/build_format_locale/index.js": 1046,
	"./cs/index.js": 1958,
	"./da/build_distance_in_words_locale/index.js": 1047,
	"./da/build_format_locale/index.js": 1048,
	"./da/index.js": 1959,
	"./de/build_distance_in_words_locale/index.js": 1049,
	"./de/build_format_locale/index.js": 1050,
	"./de/index.js": 1960,
	"./el/build_distance_in_words_locale/index.js": 1051,
	"./el/build_format_locale/index.js": 1052,
	"./el/index.js": 1961,
	"./en/build_distance_in_words_locale/index.js": 1014,
	"./en/build_format_locale/index.js": 1015,
	"./en/index.js": 666,
	"./eo/build_distance_in_words_locale/index.js": 1053,
	"./eo/build_format_locale/index.js": 1054,
	"./eo/index.js": 1962,
	"./es/build_distance_in_words_locale/index.js": 1055,
	"./es/build_format_locale/index.js": 1056,
	"./es/index.js": 1963,
	"./fi/build_distance_in_words_locale/index.js": 1057,
	"./fi/build_format_locale/index.js": 1058,
	"./fi/index.js": 1964,
	"./fil/build_distance_in_words_locale/index.js": 1059,
	"./fil/build_format_locale/index.js": 1060,
	"./fil/index.js": 1965,
	"./fr/build_distance_in_words_locale/index.js": 1061,
	"./fr/build_format_locale/index.js": 1062,
	"./fr/index.js": 1966,
	"./hr/build_distance_in_words_locale/index.js": 1063,
	"./hr/build_format_locale/index.js": 1064,
	"./hr/index.js": 1967,
	"./hu/build_distance_in_words_locale/index.js": 1065,
	"./hu/build_format_locale/index.js": 1066,
	"./hu/index.js": 1968,
	"./id/build_distance_in_words_locale/index.js": 1067,
	"./id/build_format_locale/index.js": 1068,
	"./id/index.js": 1969,
	"./is/build_distance_in_words_locale/index.js": 1069,
	"./is/build_format_locale/index.js": 1070,
	"./is/index.js": 1970,
	"./it/build_distance_in_words_locale/index.js": 1071,
	"./it/build_format_locale/index.js": 1072,
	"./it/index.js": 1971,
	"./ja/build_distance_in_words_locale/index.js": 1073,
	"./ja/build_format_locale/index.js": 1074,
	"./ja/index.js": 1972,
	"./ko/build_distance_in_words_locale/index.js": 1075,
	"./ko/build_format_locale/index.js": 1076,
	"./ko/index.js": 1973,
	"./mk/build_distance_in_words_locale/index.js": 1077,
	"./mk/build_format_locale/index.js": 1078,
	"./mk/index.js": 1974,
	"./nb/build_distance_in_words_locale/index.js": 1079,
	"./nb/build_format_locale/index.js": 1080,
	"./nb/index.js": 1975,
	"./nl/build_distance_in_words_locale/index.js": 1081,
	"./nl/build_format_locale/index.js": 1082,
	"./nl/index.js": 1976,
	"./pl/build_distance_in_words_locale/index.js": 1083,
	"./pl/build_format_locale/index.js": 1084,
	"./pl/index.js": 1977,
	"./pt/build_distance_in_words_locale/index.js": 1085,
	"./pt/build_format_locale/index.js": 1086,
	"./pt/index.js": 1978,
	"./ro/build_distance_in_words_locale/index.js": 1087,
	"./ro/build_format_locale/index.js": 1088,
	"./ro/index.js": 1979,
	"./ru/build_distance_in_words_locale/index.js": 1089,
	"./ru/build_format_locale/index.js": 1090,
	"./ru/index.js": 1980,
	"./sk/build_distance_in_words_locale/index.js": 1091,
	"./sk/build_format_locale/index.js": 1092,
	"./sk/index.js": 1981,
	"./sl/build_distance_in_words_locale/index.js": 1093,
	"./sl/build_format_locale/index.js": 1094,
	"./sl/index.js": 1982,
	"./sv/build_distance_in_words_locale/index.js": 1095,
	"./sv/build_format_locale/index.js": 1096,
	"./sv/index.js": 1983,
	"./th/build_distance_in_words_locale/index.js": 1097,
	"./th/build_format_locale/index.js": 1098,
	"./th/index.js": 1984,
	"./tr/build_distance_in_words_locale/index.js": 1099,
	"./tr/build_format_locale/index.js": 1100,
	"./tr/index.js": 1985,
	"./zh_cn/build_distance_in_words_locale/index.js": 1101,
	"./zh_cn/build_format_locale/index.js": 1102,
	"./zh_cn/index.js": 1986,
	"./zh_tw/build_distance_in_words_locale/index.js": 1103,
	"./zh_tw/build_format_locale/index.js": 1104,
	"./zh_tw/index.js": 1987
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1954;

/***/ }),

/***/ 1955:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1039)
var buildFormatLocale = __webpack_require__(1040)

/**
 * @category Locales
 * @summary Arabic locale (Modern Standard Arabic - Al-fussha).
 * @author Abdallah Hassan [@AbdallahAHO]{@link https://github.com/AbdallahAHO}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1956:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1041)
var buildFormatLocale = __webpack_require__(1042)

/**
 * @category Locales
 * @summary Bulgarian locale.
 * @author Nikolay Stoynov [@arvigeus]{@link https://github.com/arvigeus}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1957:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1043)
var buildFormatLocale = __webpack_require__(1044)

/**
 * @category Locales
 * @summary Catalan locale.
 * @author Guillermo Grau [@guigrpa]{@link https://github.com/guigrpa}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1958:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1045)
var buildFormatLocale = __webpack_require__(1046)

/**
 * @category Locales
 * @summary Czech locale.
 * @author David Rus [@davidrus]{@link https://github.com/davidrus}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1959:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1047)
var buildFormatLocale = __webpack_require__(1048)

/**
 * @category Locales
 * @summary Danish locale.
 * @author Anders B. Hansen [@Andersbiha]{@link https://github.com/Andersbiha}
 * @author [@kgram]{@link https://github.com/kgram}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1960:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1049)
var buildFormatLocale = __webpack_require__(1050)

/**
 * @category Locales
 * @summary German locale.
 * @author Thomas Eilmsteiner [@DeMuu]{@link https://github.com/DeMuu}
 * @author Asia [@asia-t]{@link https://github.com/asia-t}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1961:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1051)
var buildFormatLocale = __webpack_require__(1052)

/**
 * @category Locales
 * @summary Greek locale.
 * @author Theodoros Orfanidis [@teoulas]{@link https://github.com/teoulas}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1962:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1053)
var buildFormatLocale = __webpack_require__(1054)

/**
 * @category Locales
 * @summary Esperanto locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1963:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1055)
var buildFormatLocale = __webpack_require__(1056)

/**
 * @category Locales
 * @summary Spanish locale.
 * @author Juan Angosto [@juanangosto]{@link https://github.com/juanangosto}
 * @author Guillermo Grau [@guigrpa]{@link https://github.com/guigrpa}
 * @author Fernando Agüero [@fjaguero]{@link https://github.com/fjaguero}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1964:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1057)
var buildFormatLocale = __webpack_require__(1058)

/**
 * @category Locales
 * @summary Finnish locale.
 * @author Pyry-Samuli Lahti [@Pyppe]{@link https://github.com/Pyppe}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1965:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1059)
var buildFormatLocale = __webpack_require__(1060)

/**
 * @category Locales
 * @summary Filipino locale.
 * @author Ian De La Cruz [@RIanDeLaCruz]{@link https://github.com/RIanDeLaCruz}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1966:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1061)
var buildFormatLocale = __webpack_require__(1062)

/**
 * @category Locales
 * @summary French locale.
 * @author Jean Dupouy [@izeau]{@link https://github.com/izeau}
 * @author François B [@fbonzon]{@link https://github.com/fbonzon}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1967:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1063)
var buildFormatLocale = __webpack_require__(1064)

/**
 * @category Locales
 * @summary Croatian locale.
 * @author Matija Marohnić [@silvenon]{@link https://github.com/silvenon}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1968:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1065)
var buildFormatLocale = __webpack_require__(1066)

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1969:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1067)
var buildFormatLocale = __webpack_require__(1068)

/**
 * @category Locales
 * @summary Indonesian locale.
 * @author Rahmat Budiharso [@rbudiharso]{@link https://github.com/rbudiharso}
 * @author Benget Nata [@bentinata]{@link https://github.com/bentinata}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1970:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1069)
var buildFormatLocale = __webpack_require__(1070)

/**
 * @category Locales
 * @summary Icelandic locale.
 * @author Derek Blank [@derekblank]{@link https://github.com/derekblank}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1971:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1071)
var buildFormatLocale = __webpack_require__(1072)

/**
 * @category Locales
 * @summary Italian locale.
 * @author Alberto Restifo [@albertorestifo]{@link https://github.com/albertorestifo}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1972:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1073)
var buildFormatLocale = __webpack_require__(1074)

/**
 * @category Locales
 * @summary Japanese locale.
 * @author Thomas Eilmsteiner [@DeMuu]{@link https://github.com/DeMuu}
 * @author Yamagishi Kazutoshi [@ykzts]{@link https://github.com/ykzts}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1973:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1075)
var buildFormatLocale = __webpack_require__(1076)

/**
 * @category Locales
 * @summary Korean locale.
 * @author Hong Chulju [@angdev]{@link https://github.com/angdev}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1974:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1077)
var buildFormatLocale = __webpack_require__(1078)

/**
 * @category Locales
 * @summary Macedonian locale.
 * @author Petar Vlahu [@vlahupetar]{@link https://github.com/vlahupetar}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1975:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1079)
var buildFormatLocale = __webpack_require__(1080)

/**
 * @category Locales
 * @summary Norwegian Bokmål locale.
 * @author Hans-Kristian Koren [@Hanse]{@link https://github.com/Hanse}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1976:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1081)
var buildFormatLocale = __webpack_require__(1082)

/**
 * @category Locales
 * @summary Dutch locale.
 * @author Jorik Tangelder [@jtangelder]{@link https://github.com/jtangelder}
 * @author Ruben Stolk [@rubenstolk]{@link https://github.com/rubenstolk}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1977:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1083)
var buildFormatLocale = __webpack_require__(1084)

/**
 * @category Locales
 * @summary Polish locale.
 * @author Mateusz Derks [@ertrzyiks]{@link https://github.com/ertrzyiks}
 * @author Just RAG [@justrag]{@link https://github.com/justrag}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1978:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1085)
var buildFormatLocale = __webpack_require__(1086)

/**
 * @category Locales
 * @summary Portuguese locale.
 * @author Dário Freire [@dfreire]{@link https://github.com/dfreire}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1979:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1087)
var buildFormatLocale = __webpack_require__(1088)

/**
 * @category Locales
 * @summary Romanian locale.
 * @author Sergiu Munteanu [@jsergiu]{@link https://github.com/jsergiu}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1980:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1089)
var buildFormatLocale = __webpack_require__(1090)

/**
 * @category Locales
 * @summary Russian locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1981:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1091)
var buildFormatLocale = __webpack_require__(1092)

/**
 * @category Locales
 * @summary Slovak locale.
 * @author Marek Suscak [@mareksuscak]{@link https://github.com/mareksuscak}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1982:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1093)
var buildFormatLocale = __webpack_require__(1094)

/**
 * @category Locales
 * @summary Slovenian locale.
 * @author Adam Stradovnik [@Neoglyph]{@link https://github.com/Neoglyph}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1983:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1095)
var buildFormatLocale = __webpack_require__(1096)

/**
 * @category Locales
 * @summary Swedish locale.
 * @author Johannes Ulén [@ejulen]{@link https://github.com/ejulen}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1984:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1097)
var buildFormatLocale = __webpack_require__(1098)

/**
 * @category Locales
 * @summary Thai locale.
 * @author Athiwat Hirunworawongkun [@athivvat]{@link https://github.com/athivvat}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1985:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1099)
var buildFormatLocale = __webpack_require__(1100)

/**
 * @category Locales
 * @summary Turkish locale.
 * @author Alpcan Aydın [@alpcanaydin]{@link https://github.com/alpcanaydin}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1986:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1101)
var buildFormatLocale = __webpack_require__(1102)

/**
 * @category Locales
 * @summary Chinese Simplified locale.
 * @author Changyu Geng [@KingMario]{@link https://github.com/KingMario}
 * @author Song Shuoyun [@fnlctrl]{@link https://github.com/fnlctrl}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1987:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1103)
var buildFormatLocale = __webpack_require__(1104)

/**
 * @category Locales
 * @summary Chinese Simplified locale.
 * @author tonypai [@tpai]{@link https://github.com/tpai}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 1988:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "view" },
    [
      _vm._t("header", null, { view: _vm.view, current: _vm.current }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "content",
          class: [
            _vm.PERIOD[_vm.view] + "View",
            _vm.viewLayout[_vm.view] + "Layout"
          ]
        },
        [
          _vm.view === _vm.PERIOD.HOUR
            ? _vm._l(15, function(y) {
                return _c(
                  "div",
                  [
                    _vm._l(4, function(x) {
                      return _vm._l(
                        [
                          _vm.getItemRange(
                            _vm.df_setMinutes(
                              _vm.current,
                              y - 1 + (x - 1) * 15
                            ),
                            _vm.PERIOD.MINUTE
                          )
                        ],
                        function(range) {
                          return _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "data",
                                  rawName: "v-data:item",
                                  value: [
                                    +range.start / 10000,
                                    _vm.PERIOD.MINUTE
                                  ],
                                  expression:
                                    "[+range.start/10000, PERIOD.MINUTE]",
                                  arg: "item"
                                }
                              ],
                              class: [
                                {
                                  today: _vm.df_isSameMinute(
                                    _vm.today,
                                    range.start
                                  )
                                },
                                _vm.itemClass(range, _vm.PERIOD.MINUTE)
                              ]
                            },
                            [
                              _c("div", { staticClass: "cellHead" }, [
                                _vm._v(_vm._s(_vm.df_format(range.start, "mm")))
                              ]),
                              _vm._v(" "),
                              _vm._t("default", null, {
                                itemRange: range,
                                layout: _vm.viewLayout[_vm.view]
                              })
                            ],
                            2
                          )
                        }
                      )
                    })
                  ],
                  2
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.view === _vm.PERIOD.DAY
            ? _vm._l(12, function(y) {
                return _c(
                  "div",
                  [
                    _vm._l(2, function(x) {
                      return _vm._l(
                        [
                          _vm.getItemRange(
                            _vm.df_setHours(_vm.current, y - 1 + (x - 1) * 12),
                            _vm.PERIOD.HOUR
                          )
                        ],
                        function(range) {
                          return _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "data",
                                  rawName: "v-data:item",
                                  value: [
                                    +range.start / 10000,
                                    _vm.PERIOD.HOUR
                                  ],
                                  expression:
                                    "[+range.start/10000, PERIOD.HOUR]",
                                  arg: "item"
                                }
                              ],
                              class: [
                                {
                                  today: _vm.df_isSameHour(
                                    _vm.today,
                                    range.start
                                  )
                                },
                                _vm.itemClass(range, _vm.PERIOD.HOUR)
                              ]
                            },
                            [
                              _c("div", { staticClass: "cellHead" }, [
                                _vm._v(
                                  _vm._s(_vm.df_format(range.start, "HH"))
                                ),
                                _c("sup", [_vm._v("h")])
                              ]),
                              _vm._v(" "),
                              _vm._t("default", null, {
                                itemRange: range,
                                layout: _vm.viewLayout[_vm.view]
                              })
                            ],
                            2
                          )
                        }
                      )
                    })
                  ],
                  2
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.view === _vm.PERIOD.WEEK
            ? [
                _c(
                  "div",
                  [
                    _c("span"),
                    _vm._v(" "),
                    _vm._l(7, function(x) {
                      return _vm._l(
                        [
                          _vm.df_addDays(
                            _vm.df_startOfWeek(_vm.current, _vm.dfOptions),
                            x - 1
                          )
                        ],
                        function(arg) {
                          return _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "data",
                                  rawName: "v-data:item",
                                  value: [+arg / 10000, _vm.PERIOD.DAY],
                                  expression: "[+arg/10000, PERIOD.DAY]",
                                  arg: "item"
                                }
                              ],
                              class: [
                                { today: _vm.df_isSameDay(_vm.today, arg) }
                              ]
                            },
                            [
                              _vm._v(_vm._s(_vm.format(arg, "dd"))),
                              _c("sub", [_vm._v(_vm._s(_vm.df_getDate(arg)))])
                            ]
                          )
                        }
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm._l(24, function(y) {
                  return _c(
                    "div",
                    [
                      _c("span", { domProps: { textContent: _vm._s(y - 1) } }),
                      _vm._v(" "),
                      _vm._l(7, function(x) {
                        return _vm._l(
                          [
                            _vm.getItemRange(
                              _vm.df_addHours(
                                _vm.df_addDays(
                                  _vm.df_startOfWeek(
                                    _vm.current,
                                    _vm.dfOptions
                                  ),
                                  x - 1
                                ),
                                y - 1
                              ),
                              _vm.PERIOD.HOUR
                            )
                          ],
                          function(range) {
                            return _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "data",
                                    rawName: "v-data:item",
                                    value: [
                                      +range.start / 10000,
                                      _vm.PERIOD.HOUR
                                    ],
                                    expression:
                                      "[+range.start/10000, PERIOD.HOUR]",
                                    arg: "item"
                                  }
                                ],
                                class: [
                                  {
                                    thisMonth: _vm.df_isSameMonth(
                                      _vm.current,
                                      range.start
                                    )
                                  },
                                  _vm.itemClass(range, _vm.PERIOD.HOUR)
                                ]
                              },
                              [
                                _vm._t("default", null, {
                                  itemRange: range,
                                  layout: _vm.viewLayout[_vm.view]
                                })
                              ],
                              2
                            )
                          }
                        )
                      })
                    ],
                    2
                  )
                })
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.view === _vm.PERIOD.MONTH
            ? [
                _c(
                  "div",
                  [
                    !_vm.compact ? _c("span") : _vm._e(),
                    _vm._v(" "),
                    _vm._l(7, function(n) {
                      return _c("span", {
                        domProps: {
                          textContent: _vm._s(
                            _vm.format(
                              _vm.df_setDay(
                                _vm.current,
                                _vm.firstDayOfTheWeek + n - 1
                              ),
                              _vm.compact ? "dd" : "ddd"
                            )
                          )
                        }
                      })
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm._l(
                  _vm.compact ? _vm.visibleWeeksCount(_vm.current) : 6,
                  function(y) {
                    return _c(
                      "div",
                      [
                        _vm._l(
                          [
                            _vm.df_addDays(
                              _vm.firstVisibleDayOfMonthView(_vm.current),
                              (y - 1) * 7
                            )
                          ],
                          function(week) {
                            return [
                              !_vm.compact &&
                              (y <= _vm.visibleWeeksCount(_vm.current) ||
                                _vm.showOverlappingDays)
                                ? _c("span", {
                                    directives: [
                                      {
                                        name: "data",
                                        rawName: "v-data:item",
                                        value: [+week / 10000, _vm.PERIOD.WEEK],
                                        expression:
                                          "[+week/10000, PERIOD.WEEK]",
                                        arg: "item"
                                      }
                                    ],
                                    domProps: {
                                      textContent: _vm._s(
                                        _vm.df_getISOWeek(week)
                                      )
                                    }
                                  })
                                : _vm._e()
                            ]
                          }
                        ),
                        _vm._v(" "),
                        _vm._l(7, function(x) {
                          return _vm._l(
                            [
                              _vm.getItemRange(
                                _vm.df_addDays(
                                  _vm.firstVisibleDayOfMonthView(_vm.current),
                                  (y - 1) * 7 + (x - 1)
                                ),
                                _vm.PERIOD.DAY
                              )
                            ],
                            function(range) {
                              return _vm.showOverlappingDays ||
                                _vm.df_isSameMonth(_vm.current, range.start)
                                ? _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "data",
                                          rawName: "v-data:item",
                                          value: [
                                            +range.start / 10000,
                                            _vm.PERIOD.DAY
                                          ],
                                          expression:
                                            "[+range.start/10000, PERIOD.DAY]",
                                          arg: "item"
                                        }
                                      ],
                                      class: [
                                        {
                                          today: _vm.df_isSameDay(
                                            _vm.today,
                                            range.start
                                          ),
                                          notThisMonth: !_vm.df_isSameMonth(
                                            _vm.current,
                                            range.start
                                          )
                                        },
                                        _vm.itemClass(range, _vm.PERIOD.DAY)
                                      ]
                                    },
                                    [
                                      _c("div", {
                                        staticClass: "cellHead",
                                        domProps: {
                                          textContent: _vm._s(
                                            _vm.df_getDate(range.start)
                                          )
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm._t("default", null, {
                                        itemRange: range,
                                        layout: _vm.viewLayout[_vm.view]
                                      })
                                    ],
                                    2
                                  )
                                : _c("span")
                            }
                          )
                        })
                      ],
                      2
                    )
                  }
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.view === _vm.PERIOD.YEAR
            ? _vm._l(3, function(y) {
                return _c(
                  "div",
                  [
                    _vm._l(4, function(x) {
                      return _vm._l(
                        [
                          _vm.getItemRange(
                            _vm.df_setMonth(_vm.current, (y - 1) * 4 + (x - 1)),
                            _vm.PERIOD.MONTH
                          )
                        ],
                        function(range) {
                          return _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "data",
                                  rawName: "v-data:item",
                                  value: [
                                    +range.start / 10000,
                                    _vm.PERIOD.MONTH
                                  ],
                                  expression:
                                    "[+range.start/10000, PERIOD.MONTH]",
                                  arg: "item"
                                }
                              ],
                              class: [
                                {
                                  today: _vm.df_isSameMonth(
                                    _vm.today,
                                    range.start
                                  )
                                },
                                _vm.itemClass(range, _vm.PERIOD.MONTH)
                              ]
                            },
                            [
                              _c("div", {
                                staticClass: "cellHead",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.format(
                                      range.start,
                                      _vm.compact ? "MMM" : "MMMM"
                                    )
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _vm._t("default", null, {
                                itemRange: range,
                                layout: _vm.viewLayout[_vm.view]
                              })
                            ],
                            2
                          )
                        }
                      )
                    })
                  ],
                  2
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.view === _vm.PERIOD.DECADE
            ? _vm._l(4, function(y) {
                return _c(
                  "div",
                  [
                    _vm._l(4, function(x) {
                      return _vm._l(
                        [
                          _vm.getItemRange(
                            _vm.df_addYears(
                              _vm.current,
                              (y - 1) * 4 + (x - 1) - 9
                            ),
                            _vm.PERIOD.YEAR
                          )
                        ],
                        function(range) {
                          return _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "data",
                                  rawName: "v-data:item",
                                  value: [
                                    +range.start / 10000,
                                    _vm.PERIOD.YEAR
                                  ],
                                  expression:
                                    "[+range.start/10000, PERIOD.YEAR]",
                                  arg: "item"
                                }
                              ],
                              class: [
                                {
                                  today: _vm.df_isSameYear(
                                    _vm.today,
                                    range.start
                                  )
                                },
                                _vm.itemClass(range, _vm.PERIOD.YEAR)
                              ]
                            },
                            [
                              _c("div", {
                                staticClass: "cellHead",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.df_getYear(range.start)
                                  )
                                }
                              })
                            ]
                          )
                        }
                      )
                    })
                  ],
                  2
                )
              })
            : _vm._e()
        ],
        2
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0692318e", module.exports)
  }
}

/***/ }),

/***/ 1989:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1990);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("64c42663", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4089246e\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./calendar.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4089246e\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./calendar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1990:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\n.calendar {\r\n\tposition: relative;\r\n\t\r\n\twidth: 20em;\r\n\theight: 16em;\r\n\t\r\n\tfont-family: arial;\r\n\tfont-size: 90%;\r\n\r\n\tdisplay: inline-block;\r\n\tcursor: default;\r\n\tuser-select: none;\r\n\tpadding-top: 2.5em;\n}\n.calendar.compact {\r\n\tpadding-top: 1.5em;\n}\r\n\r\n\r\n/* multi-view */\n.calendar.multiView .viewContainer {\r\n\tposition: absolute;\r\n\ttop: 0;\n}\n.calendar.multiView .header {\r\n\tposition: relative;\n}\n.calendar.multiView .content {\r\n\tmargin-top: -2.5em; /* -header height, negative margin is legal */\r\n\tpadding-top: 2.5em;\n}\n.calendar.compact.multiView .content {\r\n\tmargin-top: -1.5em; /* -header height, negative margin is legal */\r\n\tpadding-top: 1.5em;\n}\r\n\r\n\r\n/* calendar header & view header */\n.calendar .header {\r\n\theight: 2em;\r\n\tpadding-top: 0.5em;\r\n\ttext-align: center;\n}\n.calendar .header > span {\r\n\tcursor: pointer;\r\n\tpadding: 0.5em;\n}\n.calendar.compact .header {\r\n\theight: 1.25em;\r\n\tpadding-top: 0.25em;\n}\n.calendar.compact .header sup {\r\n\tvertical-align: initial;\n}\r\n\r\n\r\n\r\n/* nav */\n.calendar .nav {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\ttext-align: center;\n}\n.calendar .nav .prev,\r\n.calendar .nav .next {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tz-index: 1;\r\n\tfont-size: 150%;\r\n\tpadding: 0.3em 1em 0 1em;\r\n\tfont-weight: bold;\r\n\tcursor: pointer;\n}\n.calendar .nav .prev {\r\n\tleft: 0;\n}\n.calendar .nav .next {\r\n\tright: 0;\n}\n.calendar .nav .prev:before {\r\n\tcontent: '\\2190';\n}\n.calendar .nav .next:before {\r\n\tcontent: '\\2192';\n}\n.calendar.compact .nav .prev {\r\n\tpadding: 0;\r\n\tleft: 0.25em;\r\n\ttop: -0.25em;\n}\n.calendar.compact .nav .next {\r\n\tpadding: 0;\r\n\tright: 0.25em;\r\n\ttop: -0.25em;\n}\r\n\r\n\r\n\r\n/* animations */\n.calendar .viewContainer {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\n}\n.calendar .view {\r\n\ttransition-duration: .5s;\r\n\ttransition-timing-function: ease-out;\r\n\ttransition-property: transform, opacity;\n}\n.calendar .forwardSlide-leave-to,\r\n.calendar .reverseSlide-enter {\r\n\ttransform: translateX(-100%);\r\n\topacity: 0;\n}\n.calendar .forwardSlide-enter,\r\n.calendar .reverseSlide-leave-to {\r\n\ttransform: translateX(100%);\r\n\topacity: 0;\n}\n.calendar.multiView .reverseSlide-leave-to {\r\n\ttransform: translateX(0);\n}\n.calendar .reverseSlide-leave-active,\r\n.calendar .forwardSlide-leave-active {\r\n\tposition: absolute;\n}\n.calendar .reverseScale-leave-to,\r\n.calendar .forwardScale-enter {\r\n\ttransform: scale(.5);\r\n\topacity: 0;\n}\n.calendar .reverseScale-enter,\r\n.calendar .forwardScale-leave-to {\r\n\ttransform: scale(1.5);\r\n\topacity: 0;\n}\n.calendar .reverseScale-leave-active,\r\n.calendar .forwardScale-leave-active {\r\n\tposition: absolute;\n}\n.calendar.multiView .view {\r\n\tborder-left: 1px dotted lightgray;\n}\n.calendar.multiView .view:first-child {\r\n\tborder-left: none;\n}\r\n\r\n\r\n/*\r\n.calendar.multiView .view.reverseScale-leave-to,\r\n.calendar.multiView .view.forwardSlide-leave-to {\r\n\tborder-right: 1px solid silver;\r\n}\r\n\r\n.calendar.multiView .view:first-child,\r\n.calendar.multiView .view.forwardSlide-leave-to + .view {\r\n\tborder-left: none;\r\n}\r\n\r\n\r\n.calendar.multiView:not(.compact) .view {\r\n\tpadding-left: 0.5em;\r\n}\r\n\r\n.calendar.multiView:not(.compact) .view:first-child,\r\n.calendar.multiView:not(.compact) .forwardSlide-leave-to + .view {\r\n\tpadding-left: 0;\r\n}\r\n*/\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 1991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendarView_vue__ = __webpack_require__(999);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendarView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__calendarView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendarHeader_vue__ = __webpack_require__(1992);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendarHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__calendarHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__findDataAttr_js__ = __webpack_require__(1105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isEq_js__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__period_js__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixin_js__ = __webpack_require__(1037);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ __webpack_exports__["default"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_6__mixin_js__["a" /* default */]],
	components: {
		calendarView: __WEBPACK_IMPORTED_MODULE_0__calendarView_vue___default.a,
		calendarHeader: __WEBPACK_IMPORTED_MODULE_1__calendarHeader_vue___default.a
	},

	props: {
		initialView: {
			type: Number,
			default: __WEBPACK_IMPORTED_MODULE_5__period_js__["a" /* default */].MONTH,
			validator: function validator(value) {

				return value > __WEBPACK_IMPORTED_MODULE_5__period_js__["a" /* default */].HOUR && value < __WEBPACK_IMPORTED_MODULE_5__period_js__["a" /* default */].DECADE;
			}
		},
		initialCurrent: {
			type: [Date, String, Number],
			default: function _default() {
				return new Date();
			},
			validator: function validator(value) {

				return Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isValid"])(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["parse"])(value));
			}
		},
		viewCount: {
			type: Number,
			default: 1,
			validator: function validator(value) {

				return value > 0;
			}
		},
		showOverlappingDays: {
			type: Boolean,
			default: undefined
		}
	},

	data: function data() {
		return {
			animation: '',
			view: this.initialView,
			current: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["parse"])(this.initialCurrent)
		};
	},

	watch: {
		initialCurrent: function initialCurrent(val, prev) {

			this.current = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["parse"])(val);
		},
		current: function current(val, prev) {

			var valRange = this.getItemRange(val, this.view);
			var prevRange = this.getItemRange(prev, this.view);

			if (!Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isEqual"])(valRange.start, prevRange.start)) this.animation = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isAfter"])(val, prev) ? 'forwardSlide' : 'reverseSlide';else this.animation = '';
		},
		view: function view(val, prev) {

			if (val !== prev) this.animation = val > prev ? 'reverseScale' : 'forwardScale';
		}
	},

	methods: {

		views: function views(current, type, count) {

			var views = [current];
			for (var i = 1; i < count; ++i) {
				views.push(this.dateAdd(current, type, i));
			}return views;
		},

		viewId: function viewId(current) {

			return String(this.view) + String(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getTime"])(current));
		},

		pointerEvent: function pointerEvent(ev) {

			ev.dataAttr = Object(__WEBPACK_IMPORTED_MODULE_3__findDataAttr_js__["a" /* default */])(ev.eventTarget, this.$el);

			if (ev.eventType === 'over') {

				if (Object(__WEBPACK_IMPORTED_MODULE_4__isEq_js__["a" /* default */])(this.prevOverDataAttr, ev.dataAttr)) return;
				this.prevOverDataAttr = ev.dataAttr;
			} else {

				this.prevOverDataAttr = undefined;
			}

			if ('nav' in ev.dataAttr) {

				var nav = Number(ev.dataAttr.nav);

				if (ev.eventType === 'tap') this.current = this.dateAdd(this.current, this.view, nav);

				if (ev.eventType === 'over' && ev.pointerActive) {

					var startMove = function (timeout) {

						this.current = this.dateAdd(this.current, this.view, nav);
						this._moveInterval = setTimeout(function () {

							startMove(Math.max(timeout * 0.8, 250));
						}, timeout);
					}.bind(this);

					startMove(750);
				}
			} else {

				if (this._moveInterval !== undefined) {

					clearInterval(this._moveInterval);
					this._moveInterval = undefined;
				}
			}

			if ('item' in ev.dataAttr) {

				var value = JSON.parse(ev.dataAttr.item);
				ev.type = value[1];
				ev.range = this.getItemRange(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["parse"])(value[0] * 10000), ev.type); // 10000: currently, min resolution is "minute"
			}

			if ('view' in ev.dataAttr && ev.eventType === 'tap') {

				this.view = Number(ev.dataAttr.view);
				return;
			}

			if (!ev.keyActive && (ev.eventType === 'tap' && ev.type >= __WEBPACK_IMPORTED_MODULE_5__period_js__["a" /* default */].MONTH || ev.eventType === 'press' && ev.type < __WEBPACK_IMPORTED_MODULE_5__period_js__["a" /* default */].MONTH && ev.type > __WEBPACK_IMPORTED_MODULE_5__period_js__["a" /* default */].MINUTE)) {

				this.view = ev.type;
				this.current = ev.range.start;
				return;
			}

			this.$emit('action', ev);
		}
	}
});

/***/ }),

/***/ 1992:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(1993)
/* template */
var __vue_template__ = __webpack_require__(1994)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vue-calendar-picker/src/calendarHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62c59594", Component.options)
  } else {
    hotAPI.reload("data-v-62c59594", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns__);
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	created: function created() {

		Object.assign(this, { df_getYear: __WEBPACK_IMPORTED_MODULE_0_date_fns__["getYear"], df_getISOWeek: __WEBPACK_IMPORTED_MODULE_0_date_fns__["getISOWeek"], df_getDate: __WEBPACK_IMPORTED_MODULE_0_date_fns__["getDate"] });
	}
});

/***/ }),

/***/ 1994:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "header" }, [
    _vm.$parent.view <= _vm.$parent.PERIOD.YEAR
      ? _c("span", {
          attrs: { "data-view": _vm.$parent.PERIOD.DECADE },
          domProps: { textContent: _vm._s(_vm.df_getYear(_vm.$parent.current)) }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.$parent.view <= _vm.$parent.PERIOD.MONTH
      ? _c("span", {
          attrs: { "data-view": _vm.$parent.PERIOD.YEAR },
          domProps: {
            textContent: _vm._s(
              _vm.$parent.format(
                _vm.$parent.current,
                _vm.$parent.compact ? "MMM" : "MMMM"
              )
            )
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.$parent.view === _vm.$parent.PERIOD.WEEK
      ? _c("span", {
          attrs: { "data-view": _vm.$parent.PERIOD.MONTH },
          domProps: {
            textContent: _vm._s("W" + _vm.df_getISOWeek(_vm.$parent.current))
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.$parent.view <= _vm.$parent.PERIOD.DAY
      ? _c("span", {
          attrs: { "data-view": _vm.$parent.PERIOD.MONTH },
          domProps: { textContent: _vm._s(_vm.df_getDate(_vm.$parent.current)) }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.$parent.view <= _vm.$parent.PERIOD.HOUR
      ? _c("span", { attrs: { "data-view": _vm.$parent.PERIOD.DAY } }, [
          _vm._v(_vm._s(_vm.$parent.format(_vm.$parent.current, "HH"))),
          _c("sup", [_vm._v("h")])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-62c59594", module.exports)
  }
}

/***/ }),

/***/ 1995:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "onpointer",
          rawName: "v-onpointer",
          value: _vm.pointerEvent,
          expression: "pointerEvent"
        }
      ],
      staticClass: "calendar",
      class: { compact: _vm.compact, multiView: _vm.viewCount > 1 }
    },
    [
      _c(
        "div",
        { staticClass: "nav" },
        [
          _c("span", { staticClass: "prev", attrs: { "data-nav": "-1" } }),
          _vm._v(" "),
          _vm.viewCount === 1 ? _c("calendar-header") : _vm._e(),
          _vm._v(" "),
          _c("span", { staticClass: "next", attrs: { "data-nav": "1" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "transition-group",
        {
          staticClass: "viewContainer",
          attrs: { name: _vm.animation },
          on: {
            "after-enter": function($event) {
              _vm.animation = ""
            }
          }
        },
        _vm._l(_vm.views(_vm.current, _vm.view, _vm.viewCount), function(
          current
        ) {
          return _c("calendar-view", {
            key: _vm.viewId(current),
            style: { width: 100 / _vm.viewCount + "%" },
            attrs: {
              locale: _vm.locale,
              compact: _vm.compact,
              "show-overlapping-days":
                _vm.showOverlappingDays !== undefined
                  ? _vm.showOverlappingDays
                  : _vm.viewCount === 1,
              view: _vm.view,
              current: current,
              "item-class": _vm.itemClass
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "header",
                  fn: function(scope) {
                    return [
                      _vm.viewCount > 1 ? _c("calendar-header") : _vm._e()
                    ]
                  }
                },
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _vm._t("default", null, {
                        itemRange: scope.itemRange,
                        layout: scope.layout
                      })
                    ]
                  }
                }
              ],
              null,
              true
            )
          })
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4089246e", module.exports)
  }
}

/***/ }),

/***/ 1996:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(1997)
/* template */
var __vue_template__ = __webpack_require__(2002)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vue-calendar-picker/src/calendarRange.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-016c7eb8", Component.options)
  } else {
    hotAPI.reload("data-v-016c7eb8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendarEvents_vue__ = __webpack_require__(1107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendarEvents_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__calendarEvents_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		calendarEvents: __WEBPACK_IMPORTED_MODULE_1__calendarEvents_vue___default.a
	},
	props: {
		locale: {},
		compact: {},
		viewCount: {},
		initialView: {},
		initialCurrent: {},
		events: {},
		itemClass: {},

		selection: {
			type: Object,
			required: true
		},
		useTwoCalendars: {
			type: Boolean,
			default: false
		}
	},
	data: function data() {
		return {
			ref: null
		};
	},
	methods: {
		action: function action(ev) {

			if (ev.eventType === 'down' && 'range' in ev) {

				if (ev.keyActive) {

					var rangeLength = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["differenceInMilliseconds"])(ev.range.end, ev.range.start);
					var midRange = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["addMilliseconds"])(ev.range.start, rangeLength / 2);
					var midSel = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["addMilliseconds"])(this.selection.start, Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["differenceInMilliseconds"])(this.selection.end, this.selection.start) / 2);

					if (Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["isBefore"])(midRange, midSel)) {

						this.ref = { start: Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["subMilliseconds"])(this.selection.end, rangeLength), end: this.selection.end };
						this.selection.start = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["min"])(ev.range.start, this.ref.start);
					} else {

						this.ref = { start: this.selection.start, end: Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["addMilliseconds"])(this.selection.start, rangeLength) };
						this.selection.end = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["max"])(ev.range.end, this.ref.end);
					}
					return;
				}

				this.ref = ev.range;
			}

			if (ev.eventType === 'up') this.ref = null;

			if (ev.eventType === 'over' && ev.pointerActive && 'range' in ev) {

				if (this.ref) {

					this.selection.start = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["min"])(ev.range.start, this.ref.start);
					this.selection.end = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["max"])(ev.range.end, this.ref.end);
					return;
				}
			}

			this.$emit('action', ev);
		}
	}
});

/***/ }),

/***/ 1998:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1999);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("6741f113", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d713e47c\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./calendarEvents.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d713e47c\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./calendarEvents.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1999:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n/* events */\n.calendar .view .events {\r\n\tdisplay: inline-block;\n}\n.calendar .view .eventRange {\r\n\tdisplay: inline-block;\n}\n.calendar .view .eventAt {\r\n\tdisplay: inline-block;\r\n\tmargin: 1px;\r\n\twidth: 4px;\r\n\theight: 4px;\n}\r\n\r\n\r\n/* horizontal layout */\n.calendar .horizontalLayout .events {\r\n\twidth: 100%;\r\n\tvertical-align: top;\r\n\ttext-align: center;\n}\n.calendar .horizontalLayout .eventRange {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\tmargin: 2px 0;\r\n\twidth: 100%;\r\n\tmin-width: 1px;\r\n\theight: 2px;\n}\n.calendar .horizontalLayout .eventAt {\r\n\tvertical-align: top;\n}\r\n\r\n\r\n/* vertical layout */\n.calendar .verticalLayout .events {\r\n\theight: 100%;\n}\n.calendar .verticalLayout .eventRange {\r\n\tposition: relative;\r\n\tmargin: 0 2px;\r\n\twidth: 2px;\r\n\theight: 100%;\r\n\tmin-height: 1px;\r\n\tvertical-align: top;\n}\n.calendar .verticalLayout .eventAt {\r\n\tvertical-align: middle;\n}\r\n\r\n\r\n/* selection */\n.calendar .selection2 {\r\n\tbackground-color: #cde;\n}\n.calendar .selection1 {\r\n\tbackground-color: #def;\n}\n.calendar .horizontalLayout .selectionStart {\r\n\tborder-top-left-radius: 0.5em;\r\n\tborder-bottom-left-radius: 0.5em;\n}\n.calendar .horizontalLayout .selectionEnd {\r\n\tborder-top-right-radius: 0.5em;\r\n\tborder-bottom-right-radius: 0.5em;\n}\n.calendar .verticalLayout .selectionStart {\r\n\tborder-top-left-radius: 0.5em;\r\n\tborder-top-right-radius: 0.5em;\n}\n.calendar .verticalLayout .selectionEnd {\r\n\tborder-bottom-left-radius: 0.5em;\r\n\tborder-bottom-right-radius: 0.5em;\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 2000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_vue__ = __webpack_require__(1106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__calendar_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// https://date-fns.org



/* harmony default export */ __webpack_exports__["default"] = ({
	components: {
		calendar: __WEBPACK_IMPORTED_MODULE_1__calendar_vue___default.a
	},
	props: {
		locale: {},
		compact: {},
		viewCount: {},
		initialView: {},
		initialCurrent: {},
		selection: {
			type: Object,
			default: function _default() {
				return {};
			}
		},
		itemClass: {
			type: Function,
			default: function _default() {}
		},
		events: {
			type: Array,
			default: function _default() {
				return [];
			}
		}
	},
	computed: {

		sortedEvents: function sortedEvents() {

			return this.events.slice().sort(function (b, a) {

				return a.end - a.start - (b.end - b.start);
			});
		}
	},
	methods: {

		thisItemClass: function thisItemClass(range, type) {

			var classlist = [this.itemClass(range, type)];

			var start = this.selection.start;
			var end = this.selection.end;
			var start = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["min"])(start, end);
			var end = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["max"])(start, end);

			if (!(Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["isAfter"])(start, range.start) || Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["isBefore"])(end, range.end))) {

				classlist.push('selection2');

				if (Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["isEqual"])(start, range.start)) classlist.push('selectionStart');

				if (Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["isEqual"])(end, range.end)) classlist.push('selectionEnd');
			} else if (Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["areRangesOverlapping"])(start, end, range.start, range.end)) {

				classlist.push('selection1');

				if (Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["isWithinRange"])(start, range.start, range.end)) classlist.push('selectionStart');

				if (Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["isWithinRange"])(end, range.start, range.end)) classlist.push('selectionEnd');
			}

			return classlist;
		},

		eventStyle: function eventStyle(event, itemRange, layout) {

			if (event.start < itemRange.start && event.end > itemRange.end) return null; // use default style aka 100%

			var itemLength = itemRange.end - itemRange.start;

			var start = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["max"])(event.start, itemRange.start);
			var end = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["min"])(event.end, itemRange.end);

			var offset = (start - itemRange.start) / itemLength;
			var size = (end - itemRange.start) / itemLength - offset;

			var uiOffset = offset * 100 + '%';
			var uiSize = size > 0.1 ? size * 100 + '%' : '2px';

			if (layout === 'horizontal') return { left: uiOffset, width: uiSize };else return { top: uiOffset, height: uiSize };
		},

		action: function action(ev) {

			if ('event' in ev.dataAttr) ev.calendarEvent = this.events[ev.dataAttr.event];
			this.$emit('action', ev);
		}
	},
	created: function created() {

		Object.assign(this, { df_isEqual: __WEBPACK_IMPORTED_MODULE_0_date_fns__["isEqual"], df_areRangesOverlapping: __WEBPACK_IMPORTED_MODULE_0_date_fns__["areRangesOverlapping"], df_isWithinRange: __WEBPACK_IMPORTED_MODULE_0_date_fns__["isWithinRange"] });
	}
});

/***/ }),

/***/ 2001:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("calendar", {
    attrs: {
      locale: _vm.locale,
      compact: _vm.compact,
      "view-count": _vm.viewCount,
      "initial-view": _vm.initialView,
      "initial-current": _vm.initialCurrent,
      "item-class": _vm.thisItemClass,
      events: _vm.events,
      selection: _vm.selection
    },
    on: { action: _vm.action },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(scope) {
          return [
            _c(
              "div",
              { staticClass: "events" },
              [
                _vm._l(_vm.sortedEvents, function(event, index) {
                  return !_vm.df_isEqual(event.start, event.end) &&
                    _vm.df_areRangesOverlapping(
                      event.start,
                      event.end,
                      scope.itemRange.start,
                      scope.itemRange.end
                    )
                    ? _c("div", {
                        staticClass: "eventRange",
                        style: [
                          { backgroundColor: event.color },
                          _vm.eventStyle(event, scope.itemRange, scope.layout)
                        ],
                        attrs: { "data-event": index }
                      })
                    : _vm._e()
                }),
                _vm._v(" "),
                _vm._l(_vm.sortedEvents, function(event, index) {
                  return _vm.df_isEqual(event.start, event.end) &&
                    _vm.df_isWithinRange(
                      event.start,
                      scope.itemRange.start,
                      scope.itemRange.end
                    ) &&
                    !_vm.df_isEqual(event.end, scope.itemRange.end)
                    ? _c("div", {
                        staticClass: "eventAt",
                        style: { backgroundColor: event.color },
                        attrs: { "data-event": index }
                      })
                    : _vm._e()
                })
              ],
              2
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d713e47c", module.exports)
  }
}

/***/ }),

/***/ 2002:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { "user-select": "none", display: "inline-block" } },
    _vm._l(_vm.useTwoCalendars ? 2 : 1, function(i) {
      return _c("calendar-events", {
        key: i,
        attrs: {
          locale: _vm.locale,
          compact: _vm.compact,
          "view-count": _vm.viewCount,
          "initial-view": _vm.initialView,
          "initial-current": _vm.initialCurrent,
          selection: _vm.selection,
          events: _vm.events,
          "item-class": _vm.itemClass
        },
        on: { action: _vm.action }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-016c7eb8", module.exports)
  }
}

/***/ }),

/***/ 2003:
/***/ (function(module, exports, __webpack_require__) {

!function(n,e){ true?module.exports=e():"function"==typeof define&&define.amd?define("CalendarView",[],e):"object"==typeof exports?exports.CalendarView=e():n.CalendarView=e()}(window,function(){return function(n){var e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:a})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=8)}([function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r=t(4),i=(a=r)&&a.__esModule?a:{default:a};function o(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}e.default={name:"CalendarView",mixins:[i.default],props:{showDate:{type:Date,default:function(){}},displayPeriodUom:{type:String,default:function(){return"month"}},displayPeriodCount:{type:Number,default:function(){return 1}},locale:{type:String,default:function(){}},monthNameFormat:{type:String,default:function(){return"long"}},weekdayNameFormat:{type:String,default:function(){return"short"}},showEventTimes:{type:Boolean,default:function(){return!1}},timeFormatOptions:{type:Object,default:function(){return{}}},disablePast:{type:Boolean,default:function(){return!1}},disableFuture:{type:Boolean,default:function(){return!1}},enableDragDrop:{type:Boolean,default:function(){return!1}},startingDayOfWeek:{type:Number,default:function(){return 0}},events:{type:Array,default:function(){return[]}}},data:function(){return{currentDragEvent:null}},computed:{displayLocale:function(){return this.locale||this.getDefaultBrowserLocale()},defaultedShowDate:function(){return this.showDate||this.today()},periodStart:function(){return this.beginningOfPeriod(this.defaultedShowDate,this.displayPeriodUom,this.startingDayOfWeek)},periodEnd:function(){return this.addDays(this.incrementPeriod(this.periodStart,this.displayPeriodUom,this.displayPeriodCount),-1)},displayFirstDate:function(){return this.beginningOfWeek(this.periodStart,this.startingDayOfWeek)},displayLastDate:function(){return this.endOfWeek(this.periodEnd,this.startingDayOfWeek)},weeksOfPeriod:function(){var n=this,e=Math.floor((this.dayDiff(this.displayFirstDate,this.displayLastDate)+1)/7);return Array(e).fill().map(function(e,t){return n.addDays(n.displayFirstDate,7*t)})},monthNames:function(){return this.getFormattedMonthNames(this.displayLocale,this.monthNameFormat)},weekdayNames:function(){return this.getFormattedWeekdayNames(this.displayLocale,this.weekdayNameFormat,this.startingDayOfWeek)},fixedEvents:function(){var n=this;return this.events.map(function(e){var t=[];return e.classes&&(t=Array.isArray(e.classes)?[].concat(o(e.classes)):[e.classes]),{originalEvent:e,startDate:n.toLocalDate(e.startDate),endDate:n.toLocalDate(e.endDate||e.startDate),classes:t,title:e.title||"Untitled",id:e.id||"e"+Math.random().toString(36).substr(2,10)}})}},methods:{onClickDay:function(n){this.disablePast&&this.isInPast(n)||this.disableFuture&&this.isInFuture(n)||this.$emit("click-date",n)},onClickEvent:function(n,e){this.$emit("click-event",n,e)},onClickCurrentPeriod:function(){var n=this.beginningOfPeriod(this.today(),this.displayPeriodUom,this.startingDayOfWeek);this.$emit("show-date-change",n)},getIncrementedPeriod:function(n){var e=this.incrementPeriod(this.periodStart,this.displayPeriodUom,n),t=this.incrementPeriod(e,this.displayPeriodUom,this.displayPeriodCount);return this.disablePast&&t<=this.today()?null:this.disableFuture&&e>this.today()?null:e},isPeriodIncrementAllowed:function(n){return null!==this.getIncrementedPeriod(n)},onIncrementPeriod:function(n){var e=this.getIncrementedPeriod(n);null!=e&&this.$emit("show-date-change",e)},onDragStart:function(n){return!!this.enableDragDrop&&(this.currentDragEvent=n,this.$emit("drag-start",n),!0)},handleEvent:function(n,e){return!!this.enableDragDrop&&(!!this.currentDragEvent&&(this.$emit(n,this.currentDragEvent,e),!0))},onDragOver:function(n){this.handleEvent("drag-over-date",n)},onDragEnter:function(n,e){this.handleEvent("drag-enter-date",n)&&e.target.classList.add("draghover")},onDragLeave:function(n,e){this.handleEvent("drag-leave-date",n)&&e.target.classList.remove("draghover")},onDrop:function(n,e){this.handleEvent("drop-on-date",n)&&e.target.classList.remove("draghover")},findAndSortEventsInWeek:function(n){var e=this;return this.fixedEvents.filter(function(t){return t.startDate<e.addDays(n,7)&&t.endDate>=n},this).sort(function(n,e){return n.startDate<e.startDate?-1:e.startDate<n.startDate?1:n.endDate>e.endDate?-1:e.endDate>n.endDate?1:n.id<e.id?-1:1})},getWeekEvents:function(n){for(var e=this.findAndSortEventsInWeek(n),t=[],a=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],r=0;r<e.length;r++){var i=Object.assign({},e[r],{classes:[].concat(o(e[r].classes)),eventRow:0}),s=i.startDate<n,l=s?0:this.dayDiff(n,i.startDate),d=Math.min(7-l,this.dayDiff(this.addDays(n,l),i.endDate)+1);s&&i.classes.push("continued"),this.dayDiff(n,i.endDate)>6&&i.classes.push("toBeContinued"),i.originalEvent.url&&i.classes.push("hasUrl");for(var c=0;c<7;c++)if(c===l){for(var u=0;u<20;u++)if(!a[c][u]){i.eventRow=u,a[c][u]=!0;break}}else c<l+d&&(a[c][i.eventRow]=!0);i.classes.push("offset"+l),i.classes.push("span"+d),i.classes.push("eventRow"+(i.eventRow+1)),t.push(i)}return t},getFormattedTimeRange:function(n){var e=this.formattedTime(n.startDate,this.displayLocale,this.timeFormatOptions),t=this.isSameDateTime(n.startDate,n.endDate)?"":this.formattedTime(n.endDate,this.displayLocale,this.timeFormatOptions),a=""!==e,r=""!==t;return(a?'<span class="startTime'+(r?" hasEndTime":"")+'">'+e+"</span>":"")+(r?'<span class="endTime'+(a?" hasStartTime":"")+'">'+t+"</span>":"")},getEventTitle:function(n){return this.showEventTimes?this.getFormattedTimeRange(n)+n.title:n.title},getEventZIndex:function(n){return 2*(n+1)+1}}}},function(n,e,t){"use strict";t.d(e,"a",function(){return a}),t.d(e,"b",function(){return r});var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"calendar-view",class:["locale-"+n.languageCode(n.displayLocale),"locale-"+n.displayLocale,"y"+n.periodStart.getFullYear(),"m"+n.paddedMonth(n.periodStart),"period-"+n.displayPeriodUom,"periodCount-"+n.displayPeriodCount,{past:n.isPastMonth(n.periodStart),future:n.isFutureMonth(n.periodStart),noIntl:!n.supportsIntl}]},[n._t("header",[t("div",{staticClass:"header"},[t("div",{staticClass:"nav"},[t("button",{staticClass:"previousYear",attrs:{disabled:!n.isPeriodIncrementAllowed(-12)},on:{click:function(e){n.onIncrementPeriod(-12)}}}),n._v(" "),t("button",{staticClass:"previousPeriod",attrs:{disabled:!n.isPeriodIncrementAllowed(-n.displayPeriodCount)},on:{click:function(e){n.onIncrementPeriod(-n.displayPeriodCount)}}}),n._v(" "),t("button",{staticClass:"nextPeriod",attrs:{disabled:!n.isPeriodIncrementAllowed(n.displayPeriodCount)},on:{click:function(e){n.onIncrementPeriod(n.displayPeriodCount)}}}),n._v(" "),t("button",{staticClass:"nextYear",attrs:{disabled:!n.isPeriodIncrementAllowed(12)},on:{click:function(e){n.onIncrementPeriod(12)}}}),n._v(" "),t("button",{staticClass:"currentPeriod",on:{click:n.onClickCurrentPeriod}})]),n._v(" "),t("div",{staticClass:"periodLabel",class:{singleYear:n.periodStart.getFullYear()===n.periodEnd.getFullYear(),singleMonth:n.isSameMonth(n.periodStart,n.periodEnd)}},[t("div",{staticClass:"startMonth"},[n._v(n._s(n.monthNames[n.periodStart.getMonth()]))]),n._v(" "),t("div",{staticClass:"startDay"},[n._v(n._s(n.periodStart.getDate()))]),n._v(" "),t("div",{staticClass:"startYear"},[n._v(n._s(n.periodStart.getFullYear()))]),n._v(" "),t("div",{staticClass:"endMonth"},[n._v(n._s(n.monthNames[n.periodEnd.getMonth()]))]),n._v(" "),t("div",{staticClass:"endDay"},[n._v(n._s(n.periodEnd.getDate()))]),n._v(" "),t("div",{staticClass:"endYear"},[n._v(n._s(n.periodEnd.getFullYear()))])])])]),n._v(" "),t("div",{staticClass:"dayList"},[n._l(n.weekdayNames,function(e,a){return[n._t("dayHeader",[t("div",{key:a,staticClass:"day",class:"dow"+a},[n._v(n._s(e))])],{index:a,label:e})]})],2),n._v(" "),t("div",{staticClass:"weeks"},n._l(n.weeksOfPeriod,function(e,a){return t("div",{key:a,staticClass:"week",class:["week"+(a+1),"ws"+n.isoYearMonthDay(e)],style:"z-index:"+2*(a+1)},[n._l(n.daysOfWeek(e),function(e,a){return t("div",{key:a,staticClass:"day",class:["dow"+e.getDay(),"d"+n.isoYearMonthDay(e),"d"+n.isoMonthDay(e),"d"+n.paddedDay(e),"instance"+n.instanceOfMonth(e),{outsideOfMonth:!n.isSameMonth(e,n.defaultedShowDate),today:n.isSameDate(e,n.today()),past:n.isInPast(e),future:n.isInFuture(e),last:n.isLastDayOfMonth(e),lastInstance:n.isLastInstanceOfMonth(e)}],on:{click:function(t){n.onClickDay(e)},drop:function(t){t.preventDefault(),n.onDrop(e,t)},dragover:function(t){t.preventDefault(),n.onDragOver(e)},dragenter:function(t){t.preventDefault(),n.onDragEnter(e,t)},dragleave:function(t){t.preventDefault(),n.onDragLeave(e,t)}}},[t("div",{staticClass:"content"},[n._t("dayContent",[t("div",{staticClass:"date"},[n._v(n._s(e.getDate()))])],{day:e})],2)])}),n._v(" "),n._l(n.getWeekEvents(e),function(r){return[n._t("event",[t("div",{key:r.id,staticClass:"event",class:r.classes,style:"z-index:"+n.getEventZIndex(a),attrs:{draggable:n.enableDragDrop,title:r.title},domProps:{innerHTML:n._s(n.getEventTitle(r))},on:{dragstart:function(e){n.onDragStart(r)},click:function(e){e.stopPropagation(),n.onClickEvent(r)}}})],{event:r,weekStartDate:e,zIndex:n.getEventZIndex(a)})]})],2)}))],2)},r=[];a._withStripped=!0},function(n,e,t){"use strict";function a(n,e,t,a,r,i,o,s){var l=typeof(n=n||{}).default;"object"!==l&&"function"!==l||(n=n.default);var d,c="function"==typeof n?n.options:n;if(e&&(c.render=e,c.staticRenderFns=t,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId=i),o?(d=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),r&&r.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(o)},c._ssrRegister=d):r&&(d=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),d)if(c.functional){c._injectStyles=d;var u=c.render;c.render=function(n,e){return d.call(e),u(n,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,d):[d]}return{exports:n,options:c}}t.d(e,"a",function(){return a})},function(n,e,t){"use strict";function a(n,e){for(var t=[],a={},r=0;r<e.length;r++){var i=e[r],o=i[0],s={id:n+":"+r,css:i[1],media:i[2],sourceMap:i[3]};a[o]?a[o].parts.push(s):t.push(a[o]={id:o,parts:[s]})}return t}t.r(e),t.d(e,"default",function(){return v});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},o=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,d=!1,c=function(){},u=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(n,e,t,r){d=t,u=r||{};var o=a(n,e);return h(o),function(e){for(var t=[],r=0;r<o.length;r++){var s=o[r];(l=i[s.id]).refs--,t.push(l)}e?h(o=a(n,e)):o=[];for(r=0;r<t.length;r++){var l;if(0===(l=t[r]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete i[l.id]}}}}function h(n){for(var e=0;e<n.length;e++){var t=n[e],a=i[t.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](t.parts[r]);for(;r<t.parts.length;r++)a.parts.push(m(t.parts[r]));a.parts.length>t.parts.length&&(a.parts.length=t.parts.length)}else{var o=[];for(r=0;r<t.parts.length;r++)o.push(m(t.parts[r]));i[t.id]={id:t.id,refs:1,parts:o}}}}function w(){var n=document.createElement("style");return n.type="text/css",o.appendChild(n),n}function m(n){var e,t,a=document.querySelector("style["+f+'~="'+n.id+'"]');if(a){if(d)return c;a.parentNode.removeChild(a)}if(p){var r=l++;a=s||(s=w()),e=b.bind(null,a,r,!1),t=b.bind(null,a,r,!0)}else a=w(),e=function(n,e){var t=e.css,a=e.media,r=e.sourceMap;a&&n.setAttribute("media",a);u.ssrId&&n.setAttribute(f,e.id);r&&(t+="\n/*# sourceURL="+r.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,a),t=function(){a.parentNode.removeChild(a)};return e(n),function(a){if(a){if(a.css===n.css&&a.media===n.media&&a.sourceMap===n.sourceMap)return;e(n=a)}else t()}}var g,y=(g=[],function(n,e){return g[n]=e,g.filter(Boolean).join("\n")});function b(n,e,t,a){var r=t?"":a.css;if(n.styleSheet)n.styleSheet.cssText=y(e,r);else{var i=document.createTextNode(r),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(i,o[e]):n.appendChild(i)}}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{today:function(){return this.dateOnly(new Date)},beginningOfPeriod:function(n,e,t){switch(e){case"year":return new Date(n.getFullYear(),0);case"month":return new Date(n.getFullYear(),n.getMonth());case"week":return this.beginningOfWeek(n,t);default:return null}},daysOfWeek:function(n){var e=this;return Array(7).fill().map(function(t,a){return e.addDays(n,a)})},addDays:function(n,e){return new Date(n.getFullYear(),n.getMonth(),n.getDate()+e,n.getHours(),n.getMinutes(),n.getSeconds())},beginningOfWeek:function(n,e){return this.addDays(n,(e-n.getDay()-7)%-7)},endOfWeek:function(n,e){return this.addDays(this.beginningOfWeek(n,e),7)},beginningOfMonth:function(n){return new Date(n.getFullYear(),n.getMonth())},instanceOfMonth:function(n){return Math.ceil(n.getDate()/7)},incrementPeriod:function(n,e,t){return new Date(n.getFullYear()+("year"==e?t:0),n.getMonth()+("month"==e?t:0),n.getDate()+("week"==e?7*t:0))},paddedMonth:function(n){return("0"+String(n.getMonth()+1)).slice(-2)},paddedDay:function(n){return("0"+String(n.getDate())).slice(-2)},isoYearMonth:function(n){return n.getFullYear()+"-"+this.paddedMonth(n)},isoYearMonthDay:function(n){return this.isoYearMonth(n)+"-"+this.paddedDay(n)},isoMonthDay:function(n){return this.paddedMonth(n)+"-"+this.paddedDay(n)},formattedTime:function(n,e,t){if(0===n.getHours()&&0===n.getMinutes()&&0===n.getSeconds())return"";if(!this.supportsIntl()){var a=6e4*(new Date).getTimezoneOffset();return new Date(n-a).toISOString().slice(11,16)}return n.toLocaleTimeString(e,t)},dayDiff:function(n,e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),a=new Date(n.getFullYear(),n.getMonth(),n.getDate());return t.setUTCHours(0,0,0,0),a.setUTCHours(0,0,0,0),(t-a)/864e5},isSameDate:function(n,e){return 0===this.dayDiff(n,e)},isSameDateTime:function(n,e){return n.getTime()===e.getTime()},isSameMonth:function(n,e){return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()},isPastMonth:function(n){return this.beginningOfMonth(n)<this.beginningOfMonth(this.today())},isFutureMonth:function(n){return this.beginningOfMonth(n)>this.beginningOfMonth(this.today())},isInFuture:function(n){return this.dateOnly(n)>this.today()},isInPast:function(n){return this.dateOnly(n)<this.today()},isLastInstanceOfMonth:function(n){return n.getMonth()!==this.addDays(n,7).getMonth()},isLastDayOfMonth:function(n){return n.getMonth()!==this.addDays(n,1).getMonth()},fromIsoStringToLocalDate:function(n){var e=n.split(/\D/).map(function(n){return Number(n)});return e[1]--,new(Function.prototype.bind.apply(Date,[null].concat(function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}(e))))},toLocalDate:function(n){return"string"==typeof n?this.fromIsoStringToLocalDate(n):new Date(n)},dateOnly:function(n){var e=new Date(n);return e.setHours(0,0,0,0),e},languageCode:function(n){return n.substring(0,2)},supportsIntl:function(){return"undefined"!=typeof Intl},getFormattedMonthNames:function(n,e){if(!this.supportsIntl())return Array(12).fill("");var t=new Intl.DateTimeFormat(n,{month:e});return Array(12).fill().map(function(n,e){return t.format(new Date(2017,e,1))})},getFormattedWeekdayNames:function(n,e,t){if(!this.supportsIntl())return Array(7).fill("");var a=new Intl.DateTimeFormat(n,{weekday:e});return Array(7).fill().map(function(n,e){return a.format(new Date(2017,0,(e+1+t)%7))})},getDefaultBrowserLocale:function(){return"undefined"==typeof navigator?"unk":(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language||navigator.browserLanguage).toLowerCase()}}}},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",a=n[3];if(!a)return t;if(e&&"function"==typeof btoa){var r=(o=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),i=a.sources.map(function(n){return"/*# sourceURL="+a.sourceRoot+n+" */"});return[t].concat(i).concat([r]).join("\n")}var o;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var a={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(a[i]=!0)}for(r=0;r<n.length;r++){var o=n[r];"number"==typeof o[0]&&a[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="("+o[2]+") and ("+t+")"),e.push(o))}},e}},function(n,e,t){(n.exports=t(5)(!1)).push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Position/Flex */\n\n/* Make the calendar flex vertically */\n.calendar-view {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n}\n.calendar-view .header {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-flex: 0;\n\t    -ms-flex: 0 1 auto;\n\t        flex: 0 1 auto;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: row nowrap;\n\t        flex-flow: row nowrap;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tmin-height: 2.5em;\n}\n.calendar-view .header .periodLabel {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 1 auto;\n\t        flex: 1 1 auto;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: row nowrap;\n\t        flex-flow: row nowrap;\n\tmin-height: 1.2em;\n}\n.calendar-view .dayList {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-flex: 0;\n\t    -ms-flex: 0 0 auto;\n\t        flex: 0 0 auto;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: row nowrap;\n\t        flex-flow: row nowrap;\n}\n.calendar-view .dayList .day {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 1 0px;\n\t        flex: 1 1 0;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: row nowrap;\n\t        flex-flow: row nowrap;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\ttext-align: center;\n}\n\n/* The calendar grid should take up the remaining vertical space */\n.calendar-view .weeks {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 1 auto;\n\t        flex: 1 1 auto;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: column nowrap;\n\t        flex-flow: column nowrap;\n\n\t/* Allow grid to scroll if there are too may weeks to fit in the view */\n\toverflow-y: scroll;\n\t-ms-overflow-style: none;\n}\n\n/* Use flex basis of 0 on week row so all weeks will be same height regardless of content */\n.calendar-view .week {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 1 0px;\n\t        flex: 1 1 0;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: row nowrap;\n\t        flex-flow: row nowrap;\n\tmin-height: 3em;\n\n\t/* Allow week events to scroll if they are too tall */\n\tposition: relative;\n\twidth: 100%;\n\toverflow-y: scroll;\n\t-ms-overflow-style: none;\n}\n.calendar-view .weeks::-webkit-scrollbar,\n.calendar-view .week::-webkit-scrollbar {\n\twidth: 0; /* remove scrollbar space */\n\tbackground: transparent; /* optional: just make scrollbar invisible */\n}\n.calendar-view .week .day {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 1 0px;\n\t        flex: 1 1 0;\n\tposition: -webkit-sticky;\n\tposition: sticky; /* When week\'s events are scrolled, keep the day content fixed */\n\ttop: 0;\n}\n.calendar-view .day .content {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tbottom: 0;\n\tright: 0;\n}\n.calendar-view .day .date {\n\tfloat: right;\n\tclear: both;\n}\n.calendar-view .event {\n\tposition: absolute;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\tbackground-color: #f7f7f7;\n}\n\n/* Header */\n.calendar-view .periodLabel .startDay::before,\n.calendar-view .periodLabel .endDay::before,\n.calendar-view.period-month .periodLabel .startYear::before,\n.calendar-view.period-month .periodLabel .endYear::before,\n.calendar-view.period-year .periodLabel .endYear::before {\n\tcontent: "\\A0";\n}\n.calendar-view .periodLabel .endMonth::before,\n.calendar-view.period-year:not(.periodCount-1) .periodLabel .endYear::before,\n.calendar-view.period-week .periodLabel.singleMonth .endDay::before {\n\tcontent: "\\A0\\2013\\A0";\n}\n.calendar-view.period-week .periodLabel .startYear::before,\n.calendar-view.period-week .periodLabel .endYear::before {\n\tcontent: ",\\A0";\n}\n.calendar-view .periodLabel.singleYear .startYear,\n.calendar-view .periodLabel.singleMonth .endMonth,\n.calendar-view.period-month .periodLabel .startDay,\n.calendar-view.period-month .periodLabel .endDay,\n.calendar-view.period-year .periodLabel .startDay,\n.calendar-view.period-year .periodLabel .endDay,\n.calendar-view.period-year .periodLabel .startMonth,\n.calendar-view.period-year .periodLabel .endMonth,\n.calendar-view.period-month.periodCount-1 .periodLabel .endMonth,\n.calendar-view.period-month.periodCount-1 .periodLabel .startYear,\n.calendar-view.period-year.periodCount-1 .periodLabel .startYear {\n\tdisplay: none;\n}\n\n/* Header navigation buttons */\n.calendar-view .header .nav .previousPeriod::after {\n\tcontent: "<";\n}\n.calendar-view .header .nav .nextPeriod::after {\n\tcontent: ">";\n}\n.calendar-view .header .nav .previousYear::after {\n\tcontent: "<<";\n}\n.calendar-view .header .nav .nextYear::after {\n\tcontent: ">>";\n}\n.calendar-view .header .nav .currentPeriod {\n\tdisplay: none;\n}\n.calendar-view.past .header .nav .currentPeriod,\n.calendar-view.future .header .nav .currentPeriod {\n\tdisplay: inline-block;\n}\n.calendar-view.past .header .nav .currentPeriod::after {\n\tcontent: "\\21BB";\n}\n.calendar-view.future .header .nav .currentPeriod::after {\n\tcontent: "\\21BA";\n}\n\n/* Colors */\n.calendar-view .header,\n.calendar-view button,\n.calendar-view .dayList,\n.calendar-view .weeks,\n.calendar-view .week,\n.calendar-view .day,\n.calendar-view .event {\n\tborder-style: solid;\n\tborder-color: #ddd;\n}\n\n/* Event Times */\n.calendar-view .event .startTime:not(.hasEndTime),\n.calendar-view .event .endTime {\n\tmargin-right: 0.4em;\n}\n.calendar-view .event .endTime::before {\n\tcontent: "-";\n}\n\n/* Internal Metrics */\n.calendar-view,\n.calendar-view div,\n.calendar-view button {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\tline-height: 1em;\n\tfont-size: 1em;\n}\n.calendar-view .dayList div,\n.calendar-view .date,\n.calendar-view .event {\n\tpadding: 0.2em;\n}\n.calendar-view .header .nav,\n.calendar-view .header .periodLabel {\n\tmargin: 0.4em 0.6em;\n}\n.calendar-view .header .nav button,\n.calendar-view .header .periodLabel {\n\tpadding: 0.4em 0.6em;\n}\n\n/* Allows emoji icons or labels (such as holidays) to be added more easily to specific dates by having the margin set already. */\n.calendar-view .day .date::before {\n\tmargin-right: 0.5em;\n}\n\n/* Borders */\n.calendar-view .week {\n\tborder-width: 0;\n}\n.calendar-view .weeks {\n\tborder-width: 0 0 1px 1px;\n}\n.calendar-view .header {\n\tborder-width: 1px 1px 0 1px;\n}\n.calendar-view .dayList {\n\tborder-width: 0 0 0 1px;\n}\n.calendar-view .day {\n\tborder-width: 1px 1px 0 0;\n}\n.calendar-view .header button,\n.calendar-view .event {\n\tborder-width: 1px;\n}\n\n/* Positioning for event eventRows */\n.calendar-view .event.eventRow1 {\n\ttop: 1.4em;\n}\n.calendar-view .event.eventRow2 {\n\ttop: calc(2 * 1.4em + 2px);\n}\n.calendar-view .event.eventRow3 {\n\ttop: calc(3 * 1.4em + 4px);\n}\n.calendar-view .event.eventRow4 {\n\ttop: calc(4 * 1.4em + 6px);\n}\n.calendar-view .event.eventRow5 {\n\ttop: calc(5 * 1.4em + 8px);\n}\n.calendar-view .event.eventRow6 {\n\ttop: calc(6 * 1.4em + 10px);\n}\n.calendar-view .event.eventRow7 {\n\ttop: calc(7 * 1.4em + 12px);\n}\n.calendar-view .event.eventRow8 {\n\ttop: calc(8 * 1.4em + 14px);\n}\n.calendar-view .event.eventRow9 {\n\ttop: calc(9 * 1.4em + 16px);\n}\n.calendar-view .event.eventRow10 {\n\ttop: calc(10 * 1.4em + 18px);\n}\n.calendar-view .event.eventRow11 {\n\ttop: calc(11 * 1.4em + 20px);\n}\n.calendar-view .event.eventRow12 {\n\ttop: calc(12 * 1.4em + 22px);\n}\n.calendar-view .event.eventRow13 {\n\ttop: calc(13 * 1.4em + 24px);\n}\n.calendar-view .event.eventRow14 {\n\ttop: calc(14 * 1.4em + 26px);\n}\n.calendar-view .event.eventRow15 {\n\ttop: calc(15 * 1.4em + 28px);\n}\n.calendar-view .event.eventRow16 {\n\ttop: calc(16 * 1.4em + 30px);\n}\n.calendar-view .event.eventRow17 {\n\ttop: calc(17 * 1.4em + 32px);\n}\n.calendar-view .event.eventRow18 {\n\ttop: calc(18 * 1.4em + 34px);\n}\n.calendar-view .event.eventRow19 {\n\ttop: calc(19 * 1.4em + 36px);\n}\n.calendar-view .event.eventRow20 {\n\ttop: calc(20 * 1.4em + 38px);\n}\n.calendar-view .event.eventRow0 {\n\tdisplay: none;\n} /* More than 20 eventRows not currently supported */\n.calendar-view .event.offset0 {\n\tleft: 0;\n}\n.calendar-view .event.offset1 {\n\tleft: calc((100% / 7));\n}\n.calendar-view .event.offset2 {\n\tleft: calc((200% / 7));\n}\n.calendar-view .event.offset3 {\n\tleft: calc((300% / 7));\n}\n.calendar-view .event.offset4 {\n\tleft: calc((400% / 7));\n}\n.calendar-view .event.offset5 {\n\tleft: calc((500% / 7));\n}\n.calendar-view .event.offset6 {\n\tleft: calc((600% / 7));\n}\n\n/* Metrics for events spanning dates */\n.calendar-view .event.span1 {\n\twidth: calc((100% / 7) - 0.05em);\n}\n.calendar-view .event.span2 {\n\twidth: calc((200% / 7) - 0.05em);\n}\n.calendar-view .event.span3 {\n\twidth: calc((300% / 7) - 0.05em);\n\ttext-align: center;\n}\n.calendar-view .event.span4 {\n\twidth: calc((400% / 7) - 0.05em);\n\ttext-align: center;\n}\n.calendar-view .event.span5 {\n\twidth: calc((500% / 7) - 0.05em);\n\ttext-align: center;\n}\n.calendar-view .event.span6 {\n\twidth: calc((600% / 7) - 0.05em);\n\ttext-align: center;\n}\n.calendar-view .event.span7 {\n\twidth: calc((700% / 7) - 0.05em);\n\ttext-align: center;\n}\n',""])},function(n,e,t){var a=t(6);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t(3).default)("6a51b68a",a,!1,{})},function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a);for(var i in a)"default"!==i&&function(n){t.d(e,n,function(){return a[n]})}(i);var o=t(1),s=t(2),l=!1;var d=function(n){l||t(7)},c=Object(s.a)(r.a,o.a,o.b,!1,d,null,null);c.options.__file="src/CalendarView.vue",e.default=c.exports}])});

/***/ }),

/***/ 2004:
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define("CalendarMathMixin",[],n):"object"==typeof exports?exports.CalendarMathMixin=n():t.CalendarMathMixin=n()}(window,function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=328)}([function(t,n,r){var e=r(2),i=r(26),o=r(13),u=r(12),c=r(20),a=function(t,n,r){var f,s,l,h,v=t&a.F,p=t&a.G,g=t&a.S,d=t&a.P,y=t&a.B,m=p?e:g?e[n]||(e[n]={}):(e[n]||{}).prototype,b=p?i:i[n]||(i[n]={}),w=b.prototype||(b.prototype={});for(f in p&&(r=n),r)l=((s=!v&&m&&void 0!==m[f])?m:r)[f],h=y&&s?c(l,e):d&&"function"==typeof l?c(Function.call,l):l,m&&u(m,f,l,t&a.U),b[f]!=l&&o(b,f,h),d&&w[f]!=l&&(w[f]=l)};e.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(62)("wks"),i=r(40),o=r(2).Symbol,u="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},function(t,n,r){var e=r(23),i=Math.min;t.exports=function(t){return t>0?i(e(t),9007199254740991):0}},function(t,n,r){var e=r(1),i=r(123),o=r(25),u=Object.defineProperty;n.f=r(8)?Object.defineProperty:function(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){t.exports=!r(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(24);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(0),i=r(3),o=r(24),u=/"/g,c=function(t,n,r,e){var i=String(o(t)),c="<"+n;return""!==r&&(c+=" "+r+'="'+String(e).replace(u,"&quot;")+'"'),c+">"+i+"</"+n+">"};t.exports=function(t,n){var r={};r[t]=n(c),e(e.P+e.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",r)}},function(t,n,r){var e=r(2),i=r(13),o=r(14),u=r(40)("src"),c=Function.toString,a=(""+c).split("toString");r(26).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var f="function"==typeof r;f&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(f&&(o(r,u)||i(r,u,t[n]?""+t[n]:a.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n,r){var e=r(7),i=r(41);t.exports=r(8)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(14),i=r(9),o=r(87)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var e=r(47),i=r(41),o=r(17),u=r(25),c=r(14),a=r(123),f=Object.getOwnPropertyDescriptor;n.f=r(8)?f:function(t,n){if(t=o(t),n=u(n,!0),a)try{return f(t,n)}catch(t){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},function(t,n,r){var e=r(48),i=r(24);t.exports=function(t){return e(i(t))}},function(t,n,r){"use strict";var e=r(3);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(20),i=r(48),o=r(9),u=r(6),c=r(70);t.exports=function(t,n){var r=1==t,a=2==t,f=3==t,s=4==t,l=6==t,h=5==t||l,v=n||c;return function(n,c,p){for(var g,d,y=o(n),m=i(y),b=e(c,p,3),w=u(m.length),S=0,x=r?v(n,w):a?v(n,0):void 0;w>S;S++)if((h||S in m)&&(d=b(g=m[S],S,y),t))if(r)x[S]=d;else if(d)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:x.push(g)}else if(s)return!1;return l?-1:f||s?s:x}}},function(t,n,r){var e=r(0),i=r(26),o=r(3);t.exports=function(t,n){var r=(i.Object||{})[t]||Object[t],u={};u[t]=n(r),e(e.S+e.F*o(function(){r(1)}),"Object",u)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n){var r=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=r)},function(t,n,r){var e=r(102),i=r(0),o=r(62)("metadata"),u=o.store||(o.store=new(r(99))),c=function(t,n,r){var i=u.get(t);if(!i){if(!r)return;u.set(t,i=new e)}var o=i.get(n);if(!o){if(!r)return;i.set(n,o=new e)}return o};t.exports={store:u,map:c,has:function(t,n,r){var e=c(n,r,!1);return void 0!==e&&e.has(t)},get:function(t,n,r){var e=c(n,r,!1);return void 0===e?void 0:e.get(t)},set:function(t,n,r,e){c(r,e,!0).set(t,n)},keys:function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},key:function(t){return void 0===t||"symbol"==typeof t?t:String(t)},exp:function(t){i(i.S,"Reflect",t)}}},function(t,n,r){"use strict";if(r(8)){var e=r(39),i=r(2),o=r(3),u=r(0),c=r(52),a=r(64),f=r(20),s=r(33),l=r(41),h=r(13),v=r(31),p=r(23),g=r(6),d=r(97),y=r(37),m=r(25),b=r(14),w=r(46),S=r(4),x=r(9),_=r(73),M=r(36),O=r(15),E=r(35).f,F=r(71),P=r(40),A=r(5),j=r(21),I=r(61),N=r(54),T=r(68),L=r(43),k=r(57),D=r(34),R=r(69),W=r(107),C=r(7),G=r(16),U=C.f,V=G.f,B=i.RangeError,Y=i.TypeError,z=i.Uint8Array,H=Array.prototype,J=a.ArrayBuffer,K=a.DataView,q=j(0),X=j(2),$=j(3),Z=j(4),Q=j(5),tt=j(6),nt=I(!0),rt=I(!1),et=T.values,it=T.keys,ot=T.entries,ut=H.lastIndexOf,ct=H.reduce,at=H.reduceRight,ft=H.join,st=H.sort,lt=H.slice,ht=H.toString,vt=H.toLocaleString,pt=A("iterator"),gt=A("toStringTag"),dt=P("typed_constructor"),yt=P("def_constructor"),mt=c.CONSTR,bt=c.TYPED,wt=c.VIEW,St=j(1,function(t,n){return Et(N(t,t[yt]),n)}),xt=o(function(){return 1===new z(new Uint16Array([1]).buffer)[0]}),_t=!!z&&!!z.prototype.set&&o(function(){new z(1).set({})}),Mt=function(t,n){var r=p(t);if(r<0||r%n)throw B("Wrong offset!");return r},Ot=function(t){if(S(t)&&bt in t)return t;throw Y(t+" is not a typed array!")},Et=function(t,n){if(!(S(t)&&dt in t))throw Y("It is not a typed array constructor!");return new t(n)},Ft=function(t,n){return Pt(N(t,t[yt]),n)},Pt=function(t,n){for(var r=0,e=n.length,i=Et(t,e);e>r;)i[r]=n[r++];return i},At=function(t,n,r){U(t,n,{get:function(){return this._d[r]}})},jt=function(t){var n,r,e,i,o,u,c=x(t),a=arguments.length,s=a>1?arguments[1]:void 0,l=void 0!==s,h=F(c);if(void 0!=h&&!_(h)){for(u=h.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(l&&a>2&&(s=f(s,arguments[2],2)),n=0,r=g(c.length),i=Et(this,r);r>n;n++)i[n]=l?s(c[n],n):c[n];return i},It=function(){for(var t=0,n=arguments.length,r=Et(this,n);n>t;)r[t]=arguments[t++];return r},Nt=!!z&&o(function(){vt.call(new z(1))}),Tt=function(){return vt.apply(Nt?lt.call(Ot(this)):Ot(this),arguments)},Lt={copyWithin:function(t,n){return W.call(Ot(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return Z(Ot(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return R.apply(Ot(this),arguments)},filter:function(t){return Ft(this,X(Ot(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return Q(Ot(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Ot(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){q(Ot(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return rt(Ot(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return nt(Ot(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return ft.apply(Ot(this),arguments)},lastIndexOf:function(t){return ut.apply(Ot(this),arguments)},map:function(t){return St(Ot(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return ct.apply(Ot(this),arguments)},reduceRight:function(t){return at.apply(Ot(this),arguments)},reverse:function(){for(var t,n=Ot(this).length,r=Math.floor(n/2),e=0;e<r;)t=this[e],this[e++]=this[--n],this[n]=t;return this},some:function(t){return $(Ot(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return st.call(Ot(this),t)},subarray:function(t,n){var r=Ot(this),e=r.length,i=y(t,e);return new(N(r,r[yt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,g((void 0===n?e:y(n,e))-i))}},kt=function(t,n){return Ft(this,lt.call(Ot(this),t,n))},Dt=function(t){Ot(this);var n=Mt(arguments[1],1),r=this.length,e=x(t),i=g(e.length),o=0;if(i+n>r)throw B("Wrong length!");for(;o<i;)this[n+o]=e[o++]},Rt={entries:function(){return ot.call(Ot(this))},keys:function(){return it.call(Ot(this))},values:function(){return et.call(Ot(this))}},Wt=function(t,n){return S(t)&&t[bt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Ct=function(t,n){return Wt(t,n=m(n,!0))?l(2,t[n]):V(t,n)},Gt=function(t,n,r){return!(Wt(t,n=m(n,!0))&&S(r)&&b(r,"value"))||b(r,"get")||b(r,"set")||r.configurable||b(r,"writable")&&!r.writable||b(r,"enumerable")&&!r.enumerable?U(t,n,r):(t[n]=r.value,t)};mt||(G.f=Ct,C.f=Gt),u(u.S+u.F*!mt,"Object",{getOwnPropertyDescriptor:Ct,defineProperty:Gt}),o(function(){ht.call({})})&&(ht=vt=function(){return ft.call(this)});var Ut=v({},Lt);v(Ut,Rt),h(Ut,pt,Rt.values),v(Ut,{slice:kt,set:Dt,constructor:function(){},toString:ht,toLocaleString:Tt}),At(Ut,"buffer","b"),At(Ut,"byteOffset","o"),At(Ut,"byteLength","l"),At(Ut,"length","e"),U(Ut,gt,{get:function(){return this[bt]}}),t.exports=function(t,n,r,a){var f=t+((a=!!a)?"Clamped":"")+"Array",l="get"+t,v="set"+t,p=i[f],y=p||{},m=p&&O(p),b=!p||!c.ABV,x={},_=p&&p.prototype,F=function(t,r){U(t,r,{get:function(){return function(t,r){var e=t._d;return e.v[l](r*n+e.o,xt)}(this,r)},set:function(t){return function(t,r,e){var i=t._d;a&&(e=(e=Math.round(e))<0?0:e>255?255:255&e),i.v[v](r*n+i.o,e,xt)}(this,r,t)},enumerable:!0})};b?(p=r(function(t,r,e,i){s(t,p,f,"_d");var o,u,c,a,l=0,v=0;if(S(r)){if(!(r instanceof J||"ArrayBuffer"==(a=w(r))||"SharedArrayBuffer"==a))return bt in r?Pt(p,r):jt.call(p,r);o=r,v=Mt(e,n);var y=r.byteLength;if(void 0===i){if(y%n)throw B("Wrong length!");if((u=y-v)<0)throw B("Wrong length!")}else if((u=g(i)*n)+v>y)throw B("Wrong length!");c=u/n}else c=d(r),o=new J(u=c*n);for(h(t,"_d",{b:o,o:v,l:u,e:c,v:new K(o)});l<c;)F(t,l++)}),_=p.prototype=M(Ut),h(_,"constructor",p)):o(function(){p(1)})&&o(function(){new p(-1)})&&k(function(t){new p,new p(null),new p(1.5),new p(t)},!0)||(p=r(function(t,r,e,i){var o;return s(t,p,f),S(r)?r instanceof J||"ArrayBuffer"==(o=w(r))||"SharedArrayBuffer"==o?void 0!==i?new y(r,Mt(e,n),i):void 0!==e?new y(r,Mt(e,n)):new y(r):bt in r?Pt(p,r):jt.call(p,r):new y(d(r))}),q(m!==Function.prototype?E(y).concat(E(m)):E(y),function(t){t in p||h(p,t,y[t])}),p.prototype=_,e||(_.constructor=p));var P=_[pt],A=!!P&&("values"==P.name||void 0==P.name),j=Rt.values;h(p,dt,!0),h(_,bt,f),h(_,wt,!0),h(_,yt,p),(a?new p(1)[gt]==f:gt in _)||U(_,gt,{get:function(){return f}}),x[f]=p,u(u.G+u.W+u.F*(p!=y),x),u(u.S,f,{BYTES_PER_ELEMENT:n}),u(u.S+u.F*o(function(){y.of.call(p,1)}),f,{from:jt,of:It}),"BYTES_PER_ELEMENT"in _||h(_,"BYTES_PER_ELEMENT",n),u(u.P,f,Lt),D(f),u(u.P+u.F*_t,f,{set:Dt}),u(u.P+u.F*!A,f,Rt),e||_.toString==ht||(_.toString=ht),u(u.P+u.F*o(function(){new p(1).slice()}),f,{slice:kt}),u(u.P+u.F*(o(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!o(function(){_.toLocaleString.call([1,2])})),f,{toLocaleString:Tt}),L[f]=A?P:j,e||A||h(_,pt,j)}}else t.exports=function(){}},function(t,n,r){var e=r(5)("unscopables"),i=Array.prototype;void 0==i[e]&&r(13)(i,e,{}),t.exports=function(t){i[e][t]=!0}},function(t,n,r){var e=r(40)("meta"),i=r(4),o=r(14),u=r(7).f,c=0,a=Object.isExtensible||function(){return!0},f=!r(3)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!a(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!o(t,e)){if(!a(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return f&&l.NEED&&a(t)&&!o(t,e)&&s(t),t}}},function(t,n,r){var e=r(12);t.exports=function(t,n,r){for(var i in n)e(t,i,n[i],r);return t}},function(t,n,r){var e=r(20),i=r(109),o=r(73),u=r(1),c=r(6),a=r(71),f={},s={};(n=t.exports=function(t,n,r,l,h){var v,p,g,d,y=h?function(){return t}:a(t),m=e(r,l,n?2:1),b=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(v=c(t.length);v>b;b++)if((d=n?m(u(p=t[b])[0],p[1]):m(t[b]))===f||d===s)return d}else for(g=y.call(t);!(p=g.next()).done;)if((d=i(g,m,p.value,n))===f||d===s)return d}).BREAK=f,n.RETURN=s},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){"use strict";var e=r(2),i=r(7),o=r(8),u=r(5)("species");t.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,r){var e=r(121),i=r(86).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},function(t,n,r){var e=r(1),i=r(120),o=r(86),u=r(87)("IE_PROTO"),c=function(){},a=function(){var t,n=r(89)("iframe"),e=o.length;for(n.style.display="none",r(85).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;e--;)delete a.prototype[o[e]];return a()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=a(),void 0===n?r:i(r,n)}},function(t,n,r){var e=r(23),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=e(t))<0?i(t+n,0):o(t,n)}},function(t,n,r){var e=r(121),i=r(86);t.exports=Object.keys||function(t){return e(t,i)}},function(t,n){t.exports=!1},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n){t.exports={}},function(t,n,r){var e=r(0),i=r(24),o=r(3),u=r(83),c="["+u+"]",a=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),s=function(t,n,r){var i={},c=o(function(){return!!u[t]()||"​"!="​"[t]()}),a=i[t]=c?n(l):u[t];r&&(i[r]=a),e(e.P+e.F*c,"String",i)},l=s.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(a,"")),2&n&&(t=t.replace(f,"")),t};t.exports=s},function(t,n,r){var e=r(7).f,i=r(14),o=r(5)("toStringTag");t.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},function(t,n,r){var e=r(19),i=r(5)("toStringTag"),o="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:o?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,r){"use strict";var e=r(0),i=r(10),o=r(20),u=r(32);t.exports=function(t){e(e.S,t,{from:function(t){var n,r,e,c,a=arguments[1];return i(this),(n=void 0!==a)&&i(a),void 0==t?new this:(r=[],n?(e=0,c=o(a,arguments[2],2),u(t,!1,function(t){r.push(c(t,e++))})):u(t,!1,r.push,r),new this(r))}})}},function(t,n,r){"use strict";var e=r(0);t.exports=function(t){e(e.S,t,{of:function(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,r){"use strict";t.exports=r(39)||!r(3)(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete r(2)[t]})},function(t,n,r){for(var e,i=r(2),o=r(13),u=r(40),c=u("typed_array"),a=u("view"),f=!(!i.ArrayBuffer||!i.DataView),s=f,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[h[l++]])?(o(e.prototype,c,!0),o(e.prototype,a,!0)):s=!1;t.exports={ABV:f,CONSTR:s,TYPED:c,VIEW:a}},function(t,n,r){"use strict";var e=r(2),i=r(0),o=r(12),u=r(31),c=r(30),a=r(32),f=r(33),s=r(4),l=r(3),h=r(57),v=r(45),p=r(82);t.exports=function(t,n,r,g,d,y){var m=e[t],b=m,w=d?"set":"add",S=b&&b.prototype,x={},_=function(t){var n=S[t];o(S,t,"delete"==t?function(t){return!(y&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof b&&(y||S.forEach&&!l(function(){(new b).entries().next()}))){var M=new b,O=M[w](y?{}:-0,1)!=M,E=l(function(){M.has(1)}),F=h(function(t){new b(t)}),P=!y&&l(function(){for(var t=new b,n=5;n--;)t[w](n,n);return!t.has(-0)});F||((b=n(function(n,r){f(n,b,t);var e=p(new m,n,b);return void 0!=r&&a(r,d,e[w],e),e})).prototype=S,S.constructor=b),(E||P)&&(_("delete"),_("has"),d&&_("get")),(P||O)&&_(w),y&&S.clear&&delete S.clear}else b=g.getConstructor(n,t,d,w),u(b.prototype,r),c.NEED=!0;return v(b,t),x[t]=b,i(i.G+i.W+i.F*(b!=m),x),y||g.setStrong(b,t,d),b}},function(t,n,r){var e=r(1),i=r(10),o=r(5)("species");t.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||void 0==(r=e(u)[o])?n:i(r)}},function(t,n,r){"use strict";var e=r(13),i=r(12),o=r(3),u=r(24),c=r(5);t.exports=function(t,n,r){var a=c(t),f=r(u,a,""[t]),s=f[0],l=f[1];o(function(){var n={};return n[a]=function(){return 7},7!=""[t](n)})&&(i(String.prototype,t,s),e(RegExp.prototype,a,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},function(t,n,r){"use strict";var e=r(1);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){var e=r(5)("iterator"),i=!1;try{var o=[7][e]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var r=!1;try{var o=[7],u=o[e]();u.next=function(){return{done:r=!0}},o[e]=function(){return u},t(o)}catch(t){}return r}},function(t,n,r){var e=r(4),i=r(19),o=r(5)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},function(t,n,r){var e=r(19);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(17),i=r(6),o=r(37);t.exports=function(t){return function(n,r,u){var c,a=e(n),f=i(a.length),s=o(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}}},function(t,n,r){var e=r(2),i=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(2).navigator;t.exports=e&&e.userAgent||""},function(t,n,r){"use strict";var e=r(2),i=r(8),o=r(39),u=r(52),c=r(13),a=r(31),f=r(3),s=r(33),l=r(23),h=r(6),v=r(97),p=r(35).f,g=r(7).f,d=r(69),y=r(45),m="prototype",b="Wrong index!",w=e.ArrayBuffer,S=e.DataView,x=e.Math,_=e.RangeError,M=e.Infinity,O=w,E=x.abs,F=x.pow,P=x.floor,A=x.log,j=x.LN2,I=i?"_b":"buffer",N=i?"_l":"byteLength",T=i?"_o":"byteOffset";function L(t,n,r){var e,i,o,u=new Array(r),c=8*r-n-1,a=(1<<c)-1,f=a>>1,s=23===n?F(2,-24)-F(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=E(t))!=t||t===M?(i=t!=t?1:0,e=a):(e=P(A(t)/j),t*(o=F(2,-e))<1&&(e--,o*=2),(t+=e+f>=1?s/o:s*F(2,1-f))*o>=2&&(e++,o/=2),e+f>=a?(i=0,e=a):e+f>=1?(i=(t*o-1)*F(2,n),e+=f):(i=t*F(2,f-1)*F(2,n),e=0));n>=8;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;c>0;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u}function k(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,a=r-1,f=t[a--],s=127&f;for(f>>=7;c>0;s=256*s+t[a],a--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;c>0;e=256*e+t[a],a--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:f?-M:M;e+=F(2,n),s-=u}return(f?-1:1)*e*F(2,s-n)}function D(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function R(t){return[255&t]}function W(t){return[255&t,t>>8&255]}function C(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function G(t){return L(t,52,8)}function U(t){return L(t,23,4)}function V(t,n,r){g(t[m],n,{get:function(){return this[r]}})}function B(t,n,r,e){var i=v(+r);if(i+n>t[N])throw _(b);var o=t[I]._b,u=i+t[T],c=o.slice(u,u+n);return e?c:c.reverse()}function Y(t,n,r,e,i,o){var u=v(+r);if(u+n>t[N])throw _(b);for(var c=t[I]._b,a=u+t[T],f=e(+i),s=0;s<n;s++)c[a+s]=f[o?s:n-s-1]}if(u.ABV){if(!f(function(){w(1)})||!f(function(){new w(-1)})||f(function(){return new w,new w(1.5),new w(NaN),"ArrayBuffer"!=w.name})){for(var z,H=(w=function(t){return s(this,w),new O(v(t))})[m]=O[m],J=p(O),K=0;J.length>K;)(z=J[K++])in w||c(w,z,O[z]);o||(H.constructor=w)}var q=new S(new w(2)),X=S[m].setInt8;q.setInt8(0,2147483648),q.setInt8(1,2147483649),!q.getInt8(0)&&q.getInt8(1)||a(S[m],{setInt8:function(t,n){X.call(this,t,n<<24>>24)},setUint8:function(t,n){X.call(this,t,n<<24>>24)}},!0)}else w=function(t){s(this,w,"ArrayBuffer");var n=v(t);this._b=d.call(new Array(n),0),this[N]=n},S=function(t,n,r){s(this,S,"DataView"),s(t,w,"DataView");var e=t[N],i=l(n);if(i<0||i>e)throw _("Wrong offset!");if(i+(r=void 0===r?e-i:h(r))>e)throw _("Wrong length!");this[I]=t,this[T]=i,this[N]=r},i&&(V(w,"byteLength","_l"),V(S,"buffer","_b"),V(S,"byteLength","_l"),V(S,"byteOffset","_o")),a(S[m],{getInt8:function(t){return B(this,1,t)[0]<<24>>24},getUint8:function(t){return B(this,1,t)[0]},getInt16:function(t){var n=B(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=B(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return D(B(this,4,t,arguments[1]))},getUint32:function(t){return D(B(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return k(B(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return k(B(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){Y(this,1,t,R,n)},setUint8:function(t,n){Y(this,1,t,R,n)},setInt16:function(t,n){Y(this,2,t,W,n,arguments[2])},setUint16:function(t,n){Y(this,2,t,W,n,arguments[2])},setInt32:function(t,n){Y(this,4,t,C,n,arguments[2])},setUint32:function(t,n){Y(this,4,t,C,n,arguments[2])},setFloat32:function(t,n){Y(this,4,t,U,n,arguments[2])},setFloat64:function(t,n){Y(this,8,t,G,n,arguments[2])}});y(w,"ArrayBuffer"),y(S,"DataView"),c(S[m],u.VIEW,!0),n.ArrayBuffer=w,n.DataView=S},function(t,n,r){"use strict";var e=r(10);t.exports.f=function(t){return new function(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e}),this.resolve=e(n),this.reject=e(r)}(t)}},function(t,n,r){var e=r(2),i=r(67).set,o=e.MutationObserver||e.WebKitMutationObserver,u=e.process,c=e.Promise,a="process"==r(19)(u);t.exports=function(){var t,n,r,f=function(){var e,i;for(a&&(e=u.domain)&&e.exit();t;){i=t.fn,t=t.next;try{i()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(a)r=function(){u.nextTick(f)};else if(!o||e.navigator&&e.navigator.standalone)if(c&&c.resolve){var s=c.resolve();r=function(){s.then(f)}}else r=function(){i.call(e,f)};else{var l=!0,h=document.createTextNode("");new o(f).observe(h,{characterData:!0}),r=function(){h.data=l=!l}}return function(e){var i={fn:e,next:void 0};n&&(n.next=i),t||(t=i,r()),n=i}}},function(t,n,r){var e,i,o,u=r(20),c=r(116),a=r(85),f=r(89),s=r(2),l=s.process,h=s.setImmediate,v=s.clearImmediate,p=s.MessageChannel,g=s.Dispatch,d=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},b=function(t){m.call(t.data)};h&&v||(h=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return y[++d]=function(){c("function"==typeof t?t:Function(t),n)},e(d),d},v=function(t){delete y[t]},"process"==r(19)(l)?e=function(t){l.nextTick(u(m,t,1))}:g&&g.now?e=function(t){g.now(u(m,t,1))}:p?(o=(i=new p).port2,i.port1.onmessage=b,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",b,!1)):e="onreadystatechange"in f("script")?function(t){a.appendChild(f("script")).onreadystatechange=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),t.exports={set:h,clear:v}},function(t,n,r){"use strict";var e=r(29),i=r(106),o=r(43),u=r(17);t.exports=r(77)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},function(t,n,r){"use strict";var e=r(9),i=r(37),o=r(6);t.exports=function(t){for(var n=e(this),r=o(n.length),u=arguments.length,c=i(u>1?arguments[1]:void 0,r),a=u>2?arguments[2]:void 0,f=void 0===a?r:i(a,r);f>c;)n[c++]=t;return n}},function(t,n,r){var e=r(235);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var e=r(46),i=r(5)("iterator"),o=r(43);t.exports=r(26).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){"use strict";var e=r(7),i=r(41);t.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},function(t,n,r){var e=r(43),i=r(5)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||o[i]===t)}},function(t,n,r){var e=r(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},function(t,n,r){var e=r(58),i=r(24);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},function(t,n,r){"use strict";var e=r(36),i=r(41),o=r(45),u={};r(13)(u,r(5)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},function(t,n,r){"use strict";var e=r(39),i=r(0),o=r(12),u=r(13),c=r(14),a=r(43),f=r(76),s=r(45),l=r(15),h=r(5)("iterator"),v=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,n,r,g,d,y,m){f(r,n,g);var b,w,S,x=function(t){if(!v&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},_=n+" Iterator",M="values"==d,O=!1,E=t.prototype,F=E[h]||E["@@iterator"]||d&&E[d],P=!v&&F||x(d),A=d?M?x("entries"):P:void 0,j="Array"==n&&E.entries||F;if(j&&(S=l(j.call(new t)))!==Object.prototype&&S.next&&(s(S,_,!0),e||c(S,h)||u(S,h,p)),M&&F&&"values"!==F.name&&(O=!0,P=function(){return F.call(this)}),e&&!m||!v&&!O&&E[h]||u(E,h,P),a[n]=P,a[_]=p,d)if(b={values:M?P:x("values"),keys:y?P:x("keys"),entries:A},m)for(w in b)w in E||o(E,w,b[w]);else i(i.P+i.F*(v||O),n,b);return b}},function(t,n,r){var e=r(23),i=r(24);t.exports=function(t){return function(n,r){var o,u,c=String(i(n)),a=e(r),f=c.length;return a<0||a>=f?t?"":void 0:(o=c.charCodeAt(a))<55296||o>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):o:t?c.slice(a,a+2):u-56320+(o-55296<<10)+65536}}},function(t,n){var r=Math.expm1;t.exports=!r||r(10)>22025.465794806718||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:r},function(t,n){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n,r){"use strict";var e=r(23),i=r(24);t.exports=function(t){var n=String(i(this)),r="",o=e(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(r+=n);return r}},function(t,n,r){var e=r(4),i=r(84).set;t.exports=function(t,n,r){var o,u=n.constructor;return u!==r&&"function"==typeof u&&(o=u.prototype)!==r.prototype&&e(o)&&i&&i(t,o),t}},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,r){var e=r(4),i=r(1),o=function(t,n){if(i(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,e){try{(e=r(20)(Function.call,r(16).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,r){return o(t,r),n?t.__proto__=r:e(t,r),t}}({},!1):void 0),check:o}},function(t,n,r){var e=r(2).document;t.exports=e&&e.documentElement},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(62)("keys"),i=r(40);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n,r){var e=r(2),i=r(26),o=r(39),u=r(122),c=r(7).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){var e=r(4),i=r(2).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n){t.exports=Math.scale||function(t,n,r,e,i){return 0===arguments.length||t!=t||n!=n||r!=r||e!=e||i!=i?NaN:t===1/0||t===-1/0?t:(t-n)*(i-e)/(r-n)+e}},function(t,n,r){var e=r(32);t.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},function(t,n,r){var e=r(46),i=r(91);t.exports=function(t){return function(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,n,r){var e=r(38),i=r(17),o=r(47).f;t.exports=function(t){return function(n){for(var r,u=i(n),c=e(u),a=c.length,f=0,s=[];a>f;)o.call(u,r=c[f++])&&s.push(t?[r,u[r]]:u[r]);return s}}},function(t,n,r){var e=r(6),i=r(81),o=r(24);t.exports=function(t,n,r,u){var c=String(o(t)),a=c.length,f=void 0===r?" ":String(r),s=e(n);if(s<=a||""==f)return c;var l=s-a,h=i.call(f,Math.ceil(l/f.length));return h.length>l&&(h=h.slice(0,l)),u?h+c:c+h}},function(t,n,r){"use strict";var e=r(59),i=r(4),o=r(6),u=r(20),c=r(5)("isConcatSpreadable");t.exports=function t(n,r,a,f,s,l,h,v){for(var p,g,d=s,y=0,m=!!h&&u(h,v,3);y<f;){if(y in a){if(p=m?m(a[y],y,r):a[y],g=!1,i(p)&&(g=void 0!==(g=p[c])?!!g:e(p)),g&&l>0)d=t(n,r,p,o(p.length),d,l-1)-1;else{if(d>=9007199254740991)throw TypeError();n[d]=p}d++}y++}return d}},function(t,n,r){var e=r(35),i=r(60),o=r(1),u=r(2).Reflect;t.exports=u&&u.ownKeys||function(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(23),i=r(6);t.exports=function(t){if(void 0===t)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},function(t,n,r){"use strict";var e=r(31),i=r(30).getWeak,o=r(1),u=r(4),c=r(33),a=r(32),f=r(21),s=r(14),l=r(42),h=f(5),v=f(6),p=0,g=function(t){return t._l||(t._l=new d)},d=function(){this.a=[]},y=function(t,n){return h(t.a,function(t){return t[0]===n})};d.prototype={get:function(t){var n=y(this,t);if(n)return n[1]},has:function(t){return!!y(this,t)},set:function(t,n){var r=y(this,t);r?r[1]=n:this.a.push([t,n])},delete:function(t){var n=v(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,r,o){var f=t(function(t,e){c(t,f,n,"_i"),t._t=n,t._i=p++,t._l=void 0,void 0!=e&&a(e,r,t[o],t)});return e(f.prototype,{delete:function(t){if(!u(t))return!1;var r=i(t);return!0===r?g(l(this,n)).delete(t):r&&s(r,this._i)&&delete r[this._i]},has:function(t){if(!u(t))return!1;var r=i(t);return!0===r?g(l(this,n)).has(t):r&&s(r,this._i)}}),f},def:function(t,n,r){var e=i(o(n),!0);return!0===e?g(t).set(n,r):e[t._i]=r,t},ufstore:g}},function(t,n,r){"use strict";var e,i=r(21)(0),o=r(12),u=r(30),c=r(118),a=r(98),f=r(4),s=r(3),l=r(42),h=u.getWeak,v=Object.isExtensible,p=a.ufstore,g={},d=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(t){if(f(t)){var n=h(t);return!0===n?p(l(this,"WeakMap")).get(t):n?n[this._i]:void 0}},set:function(t,n){return a.def(l(this,"WeakMap"),t,n)}},m=t.exports=r(53)("WeakMap",d,y,a,!0,!0);s(function(){return 7!=(new m).set((Object.freeze||Object)(g),7).get(g)})&&(c((e=a.getConstructor(d,"WeakMap")).prototype,y),u.NEED=!0,i(["delete","has","get","set"],function(t){var n=m.prototype,r=n[t];o(n,t,function(n,i){if(f(n)&&!v(n)){this._f||(this._f=new e);var o=this._f[t](n,i);return"set"==t?this:o}return r.call(this,n,i)})}))},function(t,n,r){"use strict";var e=r(101),i=r(42);t.exports=r(53)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},function(t,n,r){"use strict";var e=r(7).f,i=r(36),o=r(31),u=r(20),c=r(33),a=r(32),f=r(77),s=r(106),l=r(34),h=r(8),v=r(30).fastKey,p=r(42),g=h?"_s":"size",d=function(t,n){var r,e=v(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,n,r,f){var s=t(function(t,e){c(t,s,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[g]=0,void 0!=e&&a(e,r,t[f],t)});return o(s.prototype,{clear:function(){for(var t=p(this,n),r=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete r[e.i];t._f=t._l=void 0,t[g]=0},delete:function(t){var r=p(this,n),e=d(r,t);if(e){var i=e.n,o=e.p;delete r._i[e.i],e.r=!0,o&&(o.n=i),i&&(i.p=o),r._f==e&&(r._f=i),r._l==e&&(r._l=o),r[g]--}return!!e},forEach:function(t){p(this,n);for(var r,e=u(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(e(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!d(p(this,n),t)}}),h&&e(s.prototype,"size",{get:function(){return p(this,n)[g]}}),s},def:function(t,n,r){var e,i,o=d(t,n);return o?o.v=r:(t._l=o={i:i=v(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=o),e&&(e.n=o),t[g]++,"F"!==i&&(t._i[i]=o)),t},getEntry:d,setStrong:function(t,n,r){f(t,n,function(t,r){this._t=p(t,n),this._k=r,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?s(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,s(1))},r?"entries":"values",!r,!0),l(n)}}},function(t,n,r){"use strict";var e=r(101),i=r(42);t.exports=r(53)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var n=e.getEntry(i(this,"Map"),t);return n&&n.v},set:function(t,n){return e.def(i(this,"Map"),0===t?0:t,n)}},e,!0)},function(t,n,r){var e=r(1),i=r(4),o=r(65);t.exports=function(t,n){if(e(t),i(n)&&n.constructor===t)return n;var r=o.f(t);return(0,r.resolve)(n),r.promise}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,r){r(8)&&"g"!=/./g.flags&&r(7).f(RegExp.prototype,"flags",{configurable:!0,get:r(56)})},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){"use strict";var e=r(9),i=r(37),o=r(6);t.exports=[].copyWithin||function(t,n){var r=e(this),u=o(r.length),c=i(t,u),a=i(n,u),f=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===f?u:i(f,u))-a,u-c),l=1;for(a<c&&c<a+s&&(l=-1,a+=s-1,c+=s-1);s-- >0;)a in r?r[c]=r[a]:delete r[c],c+=l,a+=l;return r}},function(t,n,r){var e=r(10),i=r(9),o=r(48),u=r(6);t.exports=function(t,n,r,c,a){e(n);var f=i(t),s=o(f),l=u(f.length),h=a?l-1:0,v=a?-1:1;if(r<2)for(;;){if(h in s){c=s[h],h+=v;break}if(h+=v,a?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;a?h>=0:l>h;h+=v)h in s&&(c=n(c,s[h],h,f));return c}},function(t,n,r){var e=r(1);t.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(n){var o=t.return;throw void 0!==o&&e(o.call(t)),n}}},function(t,n,r){var e=r(80),i=Math.pow,o=i(2,-52),u=i(2,-23),c=i(2,127)*(2-u),a=i(2,-126);t.exports=Math.fround||function(t){var n,r,i=Math.abs(t),f=e(t);return i<a?f*(i/a/u+1/o-1/o)*a*u:(r=(n=(1+u/o)*i)-(n-i))>c||r!=r?f*(1/0):f*r}},function(t,n){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,r){var e=r(4),i=Math.floor;t.exports=function(t){return!e(t)&&isFinite(t)&&i(t)===t}},function(t,n,r){var e=r(19);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},function(t,n,r){var e=r(2).parseFloat,i=r(44).trim;t.exports=1/e(r(83)+"-0")!=-1/0?function(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},function(t,n,r){var e=r(2).parseInt,i=r(44).trim,o=r(83),u=/^[-+]?0[xX]/;t.exports=8!==e(o+"08")||22!==e(o+"0x16")?function(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},function(t,n){t.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},function(t,n,r){"use strict";var e=r(10),i=r(4),o=r(116),u=[].slice,c={};t.exports=Function.bind||function(t){var n=e(this),r=u.call(arguments,1),a=function(){var e=r.concat(u.call(arguments));return this instanceof a?function(t,n,r){if(!(n in c)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";c[n]=Function("F,a","return new F("+e.join(",")+")")}return c[n](t,r)}(n,e.length,e):o(n,e,t)};return i(n.prototype)&&(a.prototype=n.prototype),a}},function(t,n,r){"use strict";var e=r(38),i=r(60),o=r(47),u=r(9),c=r(48),a=Object.assign;t.exports=!a||r(3)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=a({},t)[r]||Object.keys(a({},n)).join("")!=e})?function(t,n){for(var r=u(t),a=arguments.length,f=1,s=i.f,l=o.f;a>f;)for(var h,v=c(arguments[f++]),p=s?e(v).concat(s(v)):e(v),g=p.length,d=0;g>d;)l.call(v,h=p[d++])&&(r[h]=v[h]);return r}:a},function(t,n,r){var e=r(17),i=r(35).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return u.slice()}}(t):i(e(t))}},function(t,n,r){var e=r(7),i=r(1),o=r(38);t.exports=r(8)?Object.defineProperties:function(t,n){i(t);for(var r,u=o(n),c=u.length,a=0;c>a;)e.f(t,r=u[a++],n[r]);return t}},function(t,n,r){var e=r(14),i=r(17),o=r(61)(!1),u=r(87)("IE_PROTO");t.exports=function(t,n){var r,c=i(t),a=0,f=[];for(r in c)r!=u&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~o(f,r)||f.push(r));return f}},function(t,n,r){n.f=r(5)},function(t,n,r){t.exports=!r(8)&&!r(3)(function(){return 7!=Object.defineProperty(r(89)("div"),"a",{get:function(){return 7}}).a})},function(t,n){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{today:function(){return this.dateOnly(new Date)},beginningOfPeriod:function(t,n,r){switch(n){case"year":return new Date(t.getFullYear(),0);case"month":return new Date(t.getFullYear(),t.getMonth());case"week":return this.beginningOfWeek(t,r);default:return null}},daysOfWeek:function(t){var n=this;return Array(7).fill().map(function(r,e){return n.addDays(t,e)})},addDays:function(t,n){return new Date(t.getFullYear(),t.getMonth(),t.getDate()+n,t.getHours(),t.getMinutes(),t.getSeconds())},beginningOfWeek:function(t,n){return this.addDays(t,(n-t.getDay()-7)%-7)},endOfWeek:function(t,n){return this.addDays(this.beginningOfWeek(t,n),7)},beginningOfMonth:function(t){return new Date(t.getFullYear(),t.getMonth())},instanceOfMonth:function(t){return Math.ceil(t.getDate()/7)},incrementPeriod:function(t,n,r){return new Date(t.getFullYear()+("year"==n?r:0),t.getMonth()+("month"==n?r:0),t.getDate()+("week"==n?7*r:0))},paddedMonth:function(t){return("0"+String(t.getMonth()+1)).slice(-2)},paddedDay:function(t){return("0"+String(t.getDate())).slice(-2)},isoYearMonth:function(t){return t.getFullYear()+"-"+this.paddedMonth(t)},isoYearMonthDay:function(t){return this.isoYearMonth(t)+"-"+this.paddedDay(t)},isoMonthDay:function(t){return this.paddedMonth(t)+"-"+this.paddedDay(t)},formattedTime:function(t,n,r){if(0===t.getHours()&&0===t.getMinutes()&&0===t.getSeconds())return"";if(!this.supportsIntl()){var e=6e4*(new Date).getTimezoneOffset();return new Date(t-e).toISOString().slice(11,16)}return t.toLocaleTimeString(n,r)},dayDiff:function(t,n){var r=new Date(n.getFullYear(),n.getMonth(),n.getDate()),e=new Date(t.getFullYear(),t.getMonth(),t.getDate());return r.setUTCHours(0,0,0,0),e.setUTCHours(0,0,0,0),(r-e)/864e5},isSameDate:function(t,n){return 0===this.dayDiff(t,n)},isSameDateTime:function(t,n){return t.getTime()===n.getTime()},isSameMonth:function(t,n){return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()},isPastMonth:function(t){return this.beginningOfMonth(t)<this.beginningOfMonth(this.today())},isFutureMonth:function(t){return this.beginningOfMonth(t)>this.beginningOfMonth(this.today())},isInFuture:function(t){return this.dateOnly(t)>this.today()},isInPast:function(t){return this.dateOnly(t)<this.today()},isLastInstanceOfMonth:function(t){return t.getMonth()!==this.addDays(t,7).getMonth()},isLastDayOfMonth:function(t){return t.getMonth()!==this.addDays(t,1).getMonth()},fromIsoStringToLocalDate:function(t){var n=t.split(/\D/).map(function(t){return Number(t)});return n[1]--,new(Function.prototype.bind.apply(Date,[null].concat(function(t){if(Array.isArray(t)){for(var n=0,r=Array(t.length);n<t.length;n++)r[n]=t[n];return r}return Array.from(t)}(n))))},toLocalDate:function(t){return"string"==typeof t?this.fromIsoStringToLocalDate(t):new Date(t)},dateOnly:function(t){var n=new Date(t);return n.setHours(0,0,0,0),n},languageCode:function(t){return t.substring(0,2)},supportsIntl:function(){return"undefined"!=typeof Intl},getFormattedMonthNames:function(t,n){if(!this.supportsIntl())return Array(12).fill("");var r=new Intl.DateTimeFormat(t,{month:n});return Array(12).fill().map(function(t,n){return r.format(new Date(2017,n,1))})},getFormattedWeekdayNames:function(t,n,r){if(!this.supportsIntl())return Array(7).fill("");var e=new Intl.DateTimeFormat(t,{weekday:n});return Array(7).fill().map(function(t,n){return e.format(new Date(2017,0,(n+1+r)%7))})},getDefaultBrowserLocale:function(){return"undefined"==typeof navigator?"unk":(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language||navigator.browserLanguage).toLowerCase()}}}},function(t,n){t.exports=function(t,n){var r=n===Object(n)?function(t){return n[t]}:n;return function(n){return String(n).replace(t,r)}}},function(t,n,r){var e=r(0),i=r(126)(/[\\^$*+?.()|[\]{}]/g,"\\$&");e(e.S,"RegExp",{escape:function(t){return i(t)}})},function(t,n,r){r(127),t.exports=r(26).RegExp.escape},function(t,n,r){(function(n){!function(n){"use strict";var r,e=Object.prototype,i=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag",f="object"==typeof t,s=n.regeneratorRuntime;if(s)f&&(t.exports=s);else{(s=n.regeneratorRuntime=f?t.exports:{}).wrap=w;var l="suspendedStart",h="suspendedYield",v="executing",p="completed",g={},d={};d[u]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(I([])));m&&m!==e&&i.call(m,u)&&(d=m);var b=M.prototype=x.prototype=Object.create(d);_.prototype=b.constructor=M,M.constructor=_,M[a]=_.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===_||"GeneratorFunction"===(n.displayName||n.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,M):(t.__proto__=M,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(b),t},s.awrap=function(t){return{__await:t}},O(E.prototype),E.prototype[c]=function(){return this},s.AsyncIterator=E,s.async=function(t,n,r,e){var i=new E(w(t,n,r,e));return s.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},O(b),b[a]="Generator",b[u]=function(){return this},b.toString=function(){return"[object Generator]"},s.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},s.values=I,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,i){return c.type="throw",c.arg=t,n.next=e,i&&(n.method="next",n.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],c=u.completion;if("root"===u.tryLoc)return e("end");if(u.tryLoc<=this.prev){var a=i.call(u,"catchLoc"),f=i.call(u,"finallyLoc");if(a&&f){if(this.prev<u.catchLoc)return e(u.catchLoc,!0);if(this.prev<u.finallyLoc)return e(u.finallyLoc)}else if(a){if(this.prev<u.catchLoc)return e(u.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return e(u.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&i.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var o=e;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=n,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var i=e.arg;A(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:I(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),g}}}function w(t,n,r,e){var i=n&&n.prototype instanceof x?n:x,o=Object.create(i.prototype),u=new j(e||[]);return o._invoke=function(t,n,r){var e=l;return function(i,o){if(e===v)throw new Error("Generator is already running");if(e===p){if("throw"===i)throw o;return N()}for(r.method=i,r.arg=o;;){var u=r.delegate;if(u){var c=F(u,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===l)throw e=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=v;var a=S(t,n,r);if("normal"===a.type){if(e=r.done?p:h,a.arg===g)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(e=p,r.method="throw",r.arg=a.arg)}}}(t,r,u),o}function S(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function _(){}function M(){}function O(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function E(t){function r(n,e,o,u){var c=S(t[n],t,e);if("throw"!==c.type){var a=c.arg,f=a.value;return f&&"object"==typeof f&&i.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,o,u)},function(t){r("throw",t,o,u)}):Promise.resolve(f).then(function(t){a.value=t,o(a)},u)}u(c.arg)}var e;"object"==typeof n.process&&n.process.domain&&(r=n.process.domain.bind(r)),this._invoke=function(t,n){function i(){return new Promise(function(e,i){r(t,n,e,i)})}return e=e?e.then(i,i):i()}}function F(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,F(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=S(e,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function A(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function I(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(i.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=r,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:r,done:!0}}}("object"==typeof n?n:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,r(124))},function(t,n,r){for(var e=r(68),i=r(38),o=r(12),u=r(2),c=r(13),a=r(43),f=r(5),s=f("iterator"),l=f("toStringTag"),h=a.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(v),g=0;g<p.length;g++){var d,y=p[g],m=v[y],b=u[y],w=b&&b.prototype;if(w&&(w[s]||c(w,s,h),w[l]||c(w,l,y),a[y]=h,m))for(d in e)w[d]||o(w,d,e[d],!0)}},function(t,n,r){var e=r(0),i=r(67);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,r){var e=r(2),i=r(0),o=r(63),u=[].slice,c=/MSIE .\./.test(o),a=function(t){return function(n,r){var e=arguments.length>2,i=!!e&&u.call(arguments,2);return t(e?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,r)}};i(i.G+i.B+i.F*c,{setTimeout:a(e.setTimeout),setInterval:a(e.setInterval)})},function(t,n,r){"use strict";var e=r(0),i=r(2),o=r(26),u=r(66)(),c=r(5)("observable"),a=r(10),f=r(1),s=r(33),l=r(31),h=r(13),v=r(32),p=v.RETURN,g=function(t){return null==t?void 0:a(t)},d=function(t){var n=t._c;n&&(t._c=void 0,n())},y=function(t){return void 0===t._o},m=function(t){y(t)||(t._o=void 0,d(t))},b=function(t,n){f(t),this._c=void 0,this._o=t,t=new w(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:a(r),this._c=r)}catch(n){return void t.error(n)}y(this)&&d(this)};b.prototype=l({},{unsubscribe:function(){m(this)}});var w=function(t){this._s=t};w.prototype=l({},{next:function(t){var n=this._s;if(!y(n)){var r=n._o;try{var e=g(r.next);if(e)return e.call(r,t)}catch(t){try{m(n)}finally{throw t}}}},error:function(t){var n=this._s;if(y(n))throw t;var r=n._o;n._o=void 0;try{var e=g(r.error);if(!e)throw t;t=e.call(r,t)}catch(t){try{d(n)}finally{throw t}}return d(n),t},complete:function(t){var n=this._s;if(!y(n)){var r=n._o;n._o=void 0;try{var e=g(r.complete);t=e?e.call(r,t):void 0}catch(t){try{d(n)}finally{throw t}}return d(n),t}}});var S=function(t){s(this,S,"Observable","_f")._f=a(t)};l(S.prototype,{subscribe:function(t){return new b(t,this._f)},forEach:function(t){var n=this;return new(o.Promise||i.Promise)(function(r,e){a(t);var i=n.subscribe({next:function(n){try{return t(n)}catch(t){e(t),i.unsubscribe()}},error:e,complete:r})})}}),l(S,{from:function(t){var n="function"==typeof this?this:S,r=g(f(t)[c]);if(r){var e=f(r.call(t));return e.constructor===n?e:new n(function(t){return e.subscribe(t)})}return new n(function(n){var r=!1;return u(function(){if(!r){try{if(v(t,!1,function(t){if(n.next(t),r)return p})===p)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function(){for(var t=0,n=arguments.length,r=new Array(n);t<n;)r[t]=arguments[t++];return new("function"==typeof this?this:S)(function(t){var n=!1;return u(function(){if(!n){for(var e=0;e<r.length;++e)if(t.next(r[e]),n)return;t.complete()}}),function(){n=!0}})}}),h(S.prototype,c,function(){return this}),e(e.G,{Observable:S}),r(34)("Observable")},function(t,n,r){var e=r(0),i=r(66)(),o=r(2).process,u="process"==r(19)(o);e(e.G,{asap:function(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},function(t,n,r){var e=r(27),i=r(1),o=r(10),u=e.key,c=e.set;e.exp({metadata:function(t,n){return function(r,e){c(t,n,(void 0!==e?i:o)(r),u(e))}}})},function(t,n,r){var e=r(27),i=r(1),o=e.has,u=e.key;e.exp({hasOwnMetadata:function(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},function(t,n,r){var e=r(27),i=r(1),o=r(15),u=e.has,c=e.key,a=function(t,n,r){if(u(t,n,r))return!0;var e=o(n);return null!==e&&a(t,e,r)};e.exp({hasMetadata:function(t,n){return a(t,i(n),arguments.length<3?void 0:c(arguments[2]))}})},function(t,n,r){var e=r(27),i=r(1),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function(t){return o(i(t),arguments.length<2?void 0:u(arguments[1]))}})},function(t,n,r){var e=r(27),i=r(1),o=e.get,u=e.key;e.exp({getOwnMetadata:function(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},function(t,n,r){var e=r(100),i=r(91),o=r(27),u=r(1),c=r(15),a=o.keys,f=o.key,s=function(t,n){var r=a(t,n),o=c(t);if(null===o)return r;var u=s(o,n);return u.length?r.length?i(new e(r.concat(u))):u:r};o.exp({getMetadataKeys:function(t){return s(u(t),arguments.length<2?void 0:f(arguments[1]))}})},function(t,n,r){var e=r(27),i=r(1),o=r(15),u=e.has,c=e.get,a=e.key,f=function(t,n,r){if(u(t,n,r))return c(t,n,r);var e=o(n);return null!==e?f(t,e,r):void 0};e.exp({getMetadata:function(t,n){return f(t,i(n),arguments.length<3?void 0:a(arguments[2]))}})},function(t,n,r){var e=r(27),i=r(1),o=e.key,u=e.map,c=e.store;e.exp({deleteMetadata:function(t,n){var r=arguments.length<3?void 0:o(arguments[2]),e=u(i(n),r,!1);if(void 0===e||!e.delete(t))return!1;if(e.size)return!0;var a=c.get(n);return a.delete(r),!!a.size||c.delete(n)}})},function(t,n,r){var e=r(27),i=r(1),o=e.key,u=e.set;e.exp({defineMetadata:function(t,n,r,e){u(t,n,i(r),o(e))}})},function(t,n,r){"use strict";var e=r(0),i=r(65),o=r(104);e(e.S,"Promise",{try:function(t){var n=i.f(this),r=o(t);return(r.e?n.reject:n.resolve)(r.v),n.promise}})},function(t,n,r){"use strict";var e=r(0),i=r(26),o=r(2),u=r(54),c=r(103);e(e.P+e.R,"Promise",{finally:function(t){var n=u(this,i.Promise||o.Promise),r="function"==typeof t;return this.then(r?function(r){return c(n,t()).then(function(){return r})}:t,r?function(r){return c(n,t()).then(function(){throw r})}:t)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{signbit:function(t){return(t=+t)!=t?t:0==t?1/t==1/0:t>0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{umulh:function(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>>16,c=e>>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>>16)+((i*c>>>0)+(65535&a)>>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{scale:r(90)})},function(t,n,r){var e=r(0),i=Math.PI/180;e(e.S,"Math",{radians:function(t){return t*i}})},function(t,n,r){var e=r(0);e(e.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,n,r){var e=r(0);e(e.S,"Math",{imulh:function(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>16,c=e>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>16)+((i*c>>>0)+(65535&a)>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{isubh:function(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)-(e>>>0)-((~i&o|~(i^o)&i-o>>>0)>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{iaddh:function(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)+(e>>>0)+((i&o|(i|o)&~(i+o>>>0))>>>31)|0}})},function(t,n,r){var e=r(0),i=r(90),o=r(110);e(e.S,"Math",{fscale:function(t,n,r,e,u){return o(i(t,n,r,e,u))}})},function(t,n,r){var e=r(0),i=180/Math.PI;e(e.S,"Math",{degrees:function(t){return t*i}})},function(t,n,r){var e=r(0);e(e.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,n,r){var e=r(0);e(e.S,"Math",{clamp:function(t,n,r){return Math.min(r,Math.max(n,t))}})},function(t,n,r){var e=r(0),i=r(19);e(e.S,"Error",{isError:function(t){return"Error"===i(t)}})},function(t,n,r){var e=r(0);e(e.S,"System",{global:r(2)})},function(t,n,r){var e=r(0);e(e.G,{global:r(2)})},function(t,n,r){r(49)("WeakSet")},function(t,n,r){r(49)("WeakMap")},function(t,n,r){r(49)("Set")},function(t,n,r){r(49)("Map")},function(t,n,r){r(50)("WeakSet")},function(t,n,r){r(50)("WeakMap")},function(t,n,r){r(50)("Set")},function(t,n,r){r(50)("Map")},function(t,n,r){var e=r(0);e(e.P+e.R,"Set",{toJSON:r(92)("Set")})},function(t,n,r){var e=r(0);e(e.P+e.R,"Map",{toJSON:r(92)("Map")})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(25),u=r(15),c=r(16).f;r(8)&&e(e.P+r(51),"Object",{__lookupSetter__:function(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.set}while(r=u(r))}})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(25),u=r(15),c=r(16).f;r(8)&&e(e.P+r(51),"Object",{__lookupGetter__:function(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.get}while(r=u(r))}})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(10),u=r(7);r(8)&&e(e.P+r(51),"Object",{__defineSetter__:function(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(10),u=r(7);r(8)&&e(e.P+r(51),"Object",{__defineGetter__:function(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(93)(!0);e(e.S,"Object",{entries:function(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(93)(!1);e(e.S,"Object",{values:function(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(96),o=r(17),u=r(16),c=r(72);e(e.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,r,e=o(t),a=u.f,f=i(e),s={},l=0;f.length>l;)void 0!==(r=a(e,n=f[l++]))&&c(s,n,r);return s}})},function(t,n,r){r(88)("observable")},function(t,n,r){r(88)("asyncIterator")},function(t,n,r){"use strict";var e=r(0),i=r(24),o=r(6),u=r(58),c=r(56),a=RegExp.prototype,f=function(t,n){this._r=t,this._s=n};r(76)(f,"RegExp String",function(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in a?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new f(e,n)}})},function(t,n,r){"use strict";r(44)("trimRight",function(t){return function(){return t(this,2)}},"trimEnd")},function(t,n,r){"use strict";r(44)("trimLeft",function(t){return function(){return t(this,1)}},"trimStart")},function(t,n,r){"use strict";var e=r(0),i=r(94),o=r(63);e(e.P+e.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,n,r){"use strict";var e=r(0),i=r(94),o=r(63);e(e.P+e.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,n,r){"use strict";var e=r(0),i=r(78)(!0);e(e.P,"String",{at:function(t){return i(this,t)}})},function(t,n,r){"use strict";var e=r(0),i=r(95),o=r(9),u=r(6),c=r(23),a=r(70);e(e.P,"Array",{flatten:function(){var t=arguments[0],n=o(this),r=u(n.length),e=a(n,0);return i(e,n,n,r,0,void 0===t?1:c(t)),e}}),r(29)("flatten")},function(t,n,r){"use strict";var e=r(0),i=r(95),o=r(9),u=r(6),c=r(10),a=r(70);e(e.P,"Array",{flatMap:function(t){var n,r,e=o(this);return c(t),n=u(e.length),r=a(e,0),i(r,e,e,n,0,1,t,arguments[1]),r}}),r(29)("flatMap")},function(t,n,r){"use strict";var e=r(0),i=r(61)(!0);e(e.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(29)("includes")},function(t,n,r){var e=r(0),i=r(84);i&&e(e.S,"Reflect",{setPrototypeOf:function(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},function(t,n,r){var e=r(7),i=r(16),o=r(15),u=r(14),c=r(0),a=r(41),f=r(1),s=r(4);c(c.S,"Reflect",{set:function t(n,r,c){var l,h,v=arguments.length<4?n:arguments[3],p=i.f(f(n),r);if(!p){if(s(h=o(n)))return t(h,r,c,v);p=a(0)}return u(p,"value")?!(!1===p.writable||!s(v)||((l=i.f(v,r)||a(0)).value=c,e.f(v,r,l),0)):void 0!==p.set&&(p.set.call(v,c),!0)}})},function(t,n,r){var e=r(0),i=r(1),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{ownKeys:r(96)})},function(t,n,r){var e=r(0),i=r(1),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{has:function(t,n){return n in t}})},function(t,n,r){var e=r(0),i=r(15),o=r(1);e(e.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,n,r){var e=r(16),i=r(0),o=r(1);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,n){return e.f(o(t),n)}})},function(t,n,r){var e=r(16),i=r(15),o=r(14),u=r(0),c=r(4),a=r(1);u(u.S,"Reflect",{get:function t(n,r){var u,f,s=arguments.length<3?n:arguments[2];return a(n)===s?n[r]:(u=e.f(n,r))?o(u,"value")?u.value:void 0!==u.get?u.get.call(s):void 0:c(f=i(n))?t(f,r,s):void 0}})},function(t,n,r){"use strict";var e=r(0),i=r(1),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};r(76)(o,"Object",function(){var t,n=this._k;do{if(this._i>=n.length)return{value:void 0,done:!0}}while(!((t=n[this._i++])in this._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function(t){return new o(t)}})},function(t,n,r){var e=r(0),i=r(16).f,o=r(1);e(e.S,"Reflect",{deleteProperty:function(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},function(t,n,r){var e=r(7),i=r(0),o=r(1),u=r(25);i(i.S+i.F*r(3)(function(){Reflect.defineProperty(e.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,n,r){o(t),n=u(n,!0),o(r);try{return e.f(t,n,r),!0}catch(t){return!1}}})},function(t,n,r){var e=r(0),i=r(36),o=r(10),u=r(1),c=r(4),a=r(3),f=r(117),s=(r(2).Reflect||{}).construct,l=a(function(){function t(){}return!(s(function(){},[],t)instanceof t)}),h=!a(function(){s(function(){})});e(e.S+e.F*(l||h),"Reflect",{construct:function(t,n){o(t),u(n);var r=arguments.length<3?t:o(arguments[2]);if(h&&!l)return s(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(f.apply(t,e))}var a=r.prototype,v=i(c(a)?a:Object.prototype),p=Function.apply.call(t,v,n);return c(p)?p:v}})},function(t,n,r){var e=r(0),i=r(10),o=r(1),u=(r(2).Reflect||{}).apply,c=Function.apply;e(e.S+e.F*!r(3)(function(){u(function(){})}),"Reflect",{apply:function(t,n,r){var e=i(t),a=o(r);return u?u(e,n,a):c.call(e,n,a)}})},function(t,n,r){r(28)("Float64",8,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(28)("Float32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(28)("Uint32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(28)("Int32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(28)("Uint16",2,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(28)("Int16",2,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(28)("Uint8",1,function(t){return function(n,r,e){return t(this,n,r,e)}},!0)},function(t,n,r){r(28)("Uint8",1,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(28)("Int8",1,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){var e=r(0);e(e.G+e.W+e.F*!r(52).ABV,{DataView:r(64).DataView})},function(t,n,r){"use strict";var e=r(0),i=r(52),o=r(64),u=r(1),c=r(37),a=r(6),f=r(4),s=r(2).ArrayBuffer,l=r(54),h=o.ArrayBuffer,v=o.DataView,p=i.ABV&&s.isView,g=h.prototype.slice,d=i.VIEW;e(e.G+e.W+e.F*(s!==h),{ArrayBuffer:h}),e(e.S+e.F*!i.CONSTR,"ArrayBuffer",{isView:function(t){return p&&p(t)||f(t)&&d in t}}),e(e.P+e.U+e.F*r(3)(function(){return!new h(2).slice(1,void 0).byteLength}),"ArrayBuffer",{slice:function(t,n){if(void 0!==g&&void 0===n)return g.call(u(this),t);for(var r=u(this).byteLength,e=c(t,r),i=c(void 0===n?r:n,r),o=new(l(this,h))(a(i-e)),f=new v(this),s=new v(o),p=0;e<i;)s.setUint8(p++,f.getUint8(e++));return o}}),r(34)("ArrayBuffer")},function(t,n,r){"use strict";var e=r(98),i=r(42);r(53)("WeakSet",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(i(this,"WeakSet"),t,!0)}},e,!1,!0)},function(t,n,r){"use strict";var e,i,o,u,c=r(39),a=r(2),f=r(20),s=r(46),l=r(0),h=r(4),v=r(10),p=r(33),g=r(32),d=r(54),y=r(67).set,m=r(66)(),b=r(65),w=r(104),S=r(103),x=a.TypeError,_=a.process,M=a.Promise,O="process"==s(_),E=function(){},F=i=b.f,P=!!function(){try{var t=M.resolve(1),n=(t.constructor={})[r(5)("species")]=function(t){t(E,E)};return(O||"function"==typeof PromiseRejectionEvent)&&t.then(E)instanceof n}catch(t){}}(),A=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},j=function(t,n){if(!t._n){t._n=!0;var r=t._c;m(function(){for(var e=t._v,i=1==t._s,o=0,u=function(n){var r,o,u=i?n.ok:n.fail,c=n.resolve,a=n.reject,f=n.domain;try{u?(i||(2==t._h&&T(t),t._h=1),!0===u?r=e:(f&&f.enter(),r=u(e),f&&f.exit()),r===n.promise?a(x("Promise-chain cycle")):(o=A(r))?o.call(r,c,a):c(r)):a(e)}catch(t){a(t)}};r.length>o;)u(r[o++]);t._c=[],t._n=!1,n&&!t._h&&I(t)})}},I=function(t){y.call(a,function(){var n,r,e,i=t._v,o=N(t);if(o&&(n=w(function(){O?_.emit("unhandledRejection",i,t):(r=a.onunhandledrejection)?r({promise:t,reason:i}):(e=a.console)&&e.error&&e.error("Unhandled promise rejection",i)}),t._h=O||N(t)?2:1),t._a=void 0,o&&n.e)throw n.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},T=function(t){y.call(a,function(){var n;O?_.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},L=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),j(n,!0))},k=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw x("Promise can't be resolved itself");(n=A(t))?m(function(){var e={_w:r,_d:!1};try{n.call(t,f(k,e,1),f(L,e,1))}catch(t){L.call(e,t)}}):(r._v=t,r._s=1,j(r,!1))}catch(t){L.call({_w:r,_d:!1},t)}}};P||(M=function(t){p(this,M,"Promise","_h"),v(t),e.call(this);try{t(f(k,this,1),f(L,this,1))}catch(t){L.call(this,t)}},(e=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(31)(M.prototype,{then:function(t,n){var r=F(d(this,M));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=O?_.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&j(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e;this.promise=t,this.resolve=f(k,t,1),this.reject=f(L,t,1)},b.f=F=function(t){return t===M||t===u?new o(t):i(t)}),l(l.G+l.W+l.F*!P,{Promise:M}),r(45)(M,"Promise"),r(34)("Promise"),u=r(26).Promise,l(l.S+l.F*!P,"Promise",{reject:function(t){var n=F(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!P),"Promise",{resolve:function(t){return S(c&&this===u?M:this,t)}}),l(l.S+l.F*!(P&&r(57)(function(t){M.all(t).catch(E)})),"Promise",{all:function(t){var n=this,r=F(n),e=r.resolve,i=r.reject,o=w(function(){var r=[],o=0,u=1;g(t,!1,function(t){var c=o++,a=!1;r.push(void 0),u++,n.resolve(t).then(function(t){a||(a=!0,r[c]=t,--u||e(r))},i)}),--u||e(r)});return o.e&&i(o.v),r.promise},race:function(t){var n=this,r=F(n),e=r.reject,i=w(function(){g(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}})},function(t,n,r){r(55)("split",2,function(t,n,e){"use strict";var i=r(58),o=e,u=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var c=void 0===/()??/.exec("")[1];e=function(t,n){var r=String(this);if(void 0===t&&0===n)return[];if(!i(t))return o.call(r,t,n);var e,a,f,s,l,h=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=void 0===n?4294967295:n>>>0,d=new RegExp(t.source,v+"g");for(c||(e=new RegExp("^"+d.source+"$(?!\\s)",v));(a=d.exec(r))&&!((f=a.index+a[0].length)>p&&(h.push(r.slice(p,a.index)),!c&&a.length>1&&a[0].replace(e,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a.length>1&&a.index<r.length&&u.apply(h,a.slice(1)),s=a[0].length,p=f,h.length>=g));)d.lastIndex===a.index&&d.lastIndex++;return p===r.length?!s&&d.test("")||h.push(""):h.push(r.slice(p)),h.length>g?h.slice(0,g):h}}else"0".split(void 0,0).length&&(e=function(t,n){return void 0===t&&0===n?[]:o.call(this,t,n)});return[function(r,i){var o=t(this),u=void 0==r?void 0:r[n];return void 0!==u?u.call(r,o,i):e.call(String(o),r,i)},e]})},function(t,n,r){r(55)("search",1,function(t,n,r){return[function(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},function(t,n,r){r(55)("replace",2,function(t,n,r){return[function(e,i){"use strict";var o=t(this),u=void 0==e?void 0:e[n];return void 0!==u?u.call(e,o,i):r.call(String(o),e,i)},r]})},function(t,n,r){r(55)("match",1,function(t,n,r){return[function(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},function(t,n,r){"use strict";r(105);var e=r(1),i=r(56),o=r(8),u=/./.toString,c=function(t){r(12)(RegExp.prototype,"toString",t,!0)};r(3)(function(){return"/a/b"!=u.call({source:"a",flags:"b"})})?c(function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=u.name&&c(function(){return u.call(this)})},function(t,n,r){var e=r(2),i=r(82),o=r(7).f,u=r(35).f,c=r(58),a=r(56),f=e.RegExp,s=f,l=f.prototype,h=/a/g,v=/a/g,p=new f(h)!==h;if(r(8)&&(!p||r(3)(function(){return v[r(5)("match")]=!1,f(h)!=h||f(v)==v||"/a/i"!=f(h,"i")}))){f=function(t,n){var r=this instanceof f,e=c(t),o=void 0===n;return!r&&e&&t.constructor===f&&o?t:i(p?new s(e&&!o?t.source:t,n):s((e=t instanceof f)?t.source:t,e&&o?a.call(t):n),r?this:l,f)};for(var g=function(t){t in f||o(f,t,{configurable:!0,get:function(){return s[t]},set:function(n){s[t]=n}})},d=u(s),y=0;d.length>y;)g(d[y++]);l.constructor=f,f.prototype=l,r(12)(e,"RegExp",f)}r(34)("RegExp")},function(t,n,r){r(34)("Array")},function(t,n,r){"use strict";var e=r(0),i=r(21)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(29)(o)},function(t,n,r){"use strict";var e=r(0),i=r(21)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),e(e.P+e.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(29)("find")},function(t,n,r){var e=r(0);e(e.P,"Array",{fill:r(69)}),r(29)("fill")},function(t,n,r){var e=r(0);e(e.P,"Array",{copyWithin:r(107)}),r(29)("copyWithin")},function(t,n,r){"use strict";var e=r(0),i=r(17),o=r(23),u=r(6),c=[].lastIndexOf,a=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(a||!r(18)(c)),"Array",{lastIndexOf:function(t){if(a)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(arguments.length>1&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);e>=0;e--)if(e in n&&n[e]===t)return e||0;return-1}})},function(t,n,r){"use strict";var e=r(0),i=r(61)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!r(18)(o)),"Array",{indexOf:function(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(108);e(e.P+e.F*!r(18)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,r){"use strict";var e=r(0),i=r(108);e(e.P+e.F*!r(18)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,r){"use strict";var e=r(0),i=r(21)(4);e(e.P+e.F*!r(18)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(21)(3);e(e.P+e.F*!r(18)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(21)(2);e(e.P+e.F*!r(18)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(21)(1);e(e.P+e.F*!r(18)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(4),i=r(59),o=r(5)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),e(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},function(t,n,r){"use strict";var e=r(0),i=r(21)(0),o=r(18)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(10),o=r(9),u=r(3),c=[].sort,a=[1,2,3];e(e.P+e.F*(u(function(){a.sort(void 0)})||!u(function(){a.sort(null)})||!r(18)(c)),"Array",{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t))}})},function(t,n,r){"use strict";var e=r(0),i=r(85),o=r(19),u=r(37),c=r(6),a=[].slice;e(e.P+e.F*r(3)(function(){i&&a.call(i)}),"Array",{slice:function(t,n){var r=c(this.length),e=o(this);if(n=void 0===n?r:n,"Array"==e)return a.call(this,t,n);for(var i=u(t,r),f=u(n,r),s=c(f-i),l=new Array(s),h=0;h<s;h++)l[h]="String"==e?this.charAt(i+h):this[i+h];return l}})},function(t,n,r){"use strict";var e=r(0),i=r(17),o=[].join;e(e.P+e.F*(r(48)!=Object||!r(18)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},function(t,n,r){"use strict";var e=r(0),i=r(72);e(e.S+e.F*r(3)(function(){function t(){}return!(Array.of.call(t)instanceof t)}),"Array",{of:function(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);n>t;)i(r,t,arguments[t++]);return r.length=n,r}})},function(t,n,r){"use strict";var e=r(20),i=r(0),o=r(9),u=r(109),c=r(73),a=r(6),f=r(72),s=r(71);i(i.S+i.F*!r(57)(function(t){Array.from(t)}),"Array",{from:function(t){var n,r,i,l,h=o(t),v="function"==typeof this?this:Array,p=arguments.length,g=p>1?arguments[1]:void 0,d=void 0!==g,y=0,m=s(h);if(d&&(g=e(g,p>2?arguments[2]:void 0,2)),void 0==m||v==Array&&c(m))for(r=new v(n=a(h.length));n>y;y++)f(r,y,d?g(h[y],y):h[y]);else for(l=m.call(h),r=new v;!(i=l.next()).done;y++)f(r,y,d?u(l,g,[i.value,y],!0):i.value);return r.length=y,r}})},function(t,n,r){var e=r(0);e(e.S,"Array",{isArray:r(59)})},function(t,n,r){"use strict";var e=r(1),i=r(25);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),"number"!=t)}},function(t,n,r){var e=r(5)("toPrimitive"),i=Date.prototype;e in i||r(13)(i,e,r(243))},function(t,n,r){var e=Date.prototype,i=e.toString,o=e.getTime;new Date(NaN)+""!="Invalid Date"&&r(12)(e,"toString",function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"})},function(t,n,r){"use strict";var e=r(3),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return t>9?t:"0"+t};t.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!e(function(){o.call(new Date(NaN))})?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":n>9999?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(r>99?r:"0"+u(r))+"Z"}:o},function(t,n,r){var e=r(0),i=r(246);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(25);e(e.P+e.F*r(3)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},function(t,n,r){var e=r(0);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,r){"use strict";r(11)("sup",function(t){return function(){return t(this,"sup","","")}})},function(t,n,r){"use strict";r(11)("sub",function(t){return function(){return t(this,"sub","","")}})},function(t,n,r){"use strict";r(11)("strike",function(t){return function(){return t(this,"strike","","")}})},function(t,n,r){"use strict";r(11)("small",function(t){return function(){return t(this,"small","","")}})},function(t,n,r){"use strict";r(11)("link",function(t){return function(n){return t(this,"a","href",n)}})},function(t,n,r){"use strict";r(11)("italics",function(t){return function(){return t(this,"i","","")}})},function(t,n,r){"use strict";r(11)("fontsize",function(t){return function(n){return t(this,"font","size",n)}})},function(t,n,r){"use strict";r(11)("fontcolor",function(t){return function(n){return t(this,"font","color",n)}})},function(t,n,r){"use strict";r(11)("fixed",function(t){return function(){return t(this,"tt","","")}})},function(t,n,r){"use strict";r(11)("bold",function(t){return function(){return t(this,"b","","")}})},function(t,n,r){"use strict";r(11)("blink",function(t){return function(){return t(this,"blink","","")}})},function(t,n,r){"use strict";r(11)("big",function(t){return function(){return t(this,"big","","")}})},function(t,n,r){"use strict";r(11)("anchor",function(t){return function(n){return t(this,"a","name",n)}})},function(t,n,r){"use strict";var e=r(0),i=r(6),o=r(75),u="".startsWith;e(e.P+e.F*r(74)("startsWith"),"String",{startsWith:function(t){var n=o(this,t,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),e=String(t);return u?u.call(n,e,r):n.slice(r,r+e.length)===e}})},function(t,n,r){var e=r(0);e(e.P,"String",{repeat:r(81)})},function(t,n,r){"use strict";var e=r(0),i=r(75);e(e.P+e.F*r(74)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){"use strict";var e=r(0),i=r(6),o=r(75),u="".endsWith;e(e.P+e.F*r(74)("endsWith"),"String",{endsWith:function(t){var n=o(this,t,"endsWith"),r=arguments.length>1?arguments[1]:void 0,e=i(n.length),c=void 0===r?e:Math.min(i(r),e),a=String(t);return u?u.call(n,a,c):n.slice(c-a.length,c)===a}})},function(t,n,r){"use strict";var e=r(0),i=r(78)(!1);e(e.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,n,r){"use strict";var e=r(78)(!0);r(77)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){"use strict";r(44)("trim",function(t){return function(){return t(this,3)}})},function(t,n,r){var e=r(0),i=r(17),o=r(6);e(e.S,"String",{raw:function(t){for(var n=i(t.raw),r=o(n.length),e=arguments.length,u=[],c=0;r>c;)u.push(String(n[c++])),c<e&&u.push(String(arguments[c]));return u.join("")}})},function(t,n,r){var e=r(0),i=r(37),o=String.fromCharCode,u=String.fromCodePoint;e(e.S+e.F*(!!u&&1!=u.length),"String",{fromCodePoint:function(t){for(var n,r=[],e=arguments.length,u=0;e>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?o(n):o(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},function(t,n,r){var e=r(0);e(e.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,n,r){var e=r(0),i=r(79),o=Math.exp;e(e.S,"Math",{tanh:function(t){var n=i(t=+t),r=i(-t);return n==1/0?1:r==1/0?-1:(n-r)/(o(t)+o(-t))}})},function(t,n,r){var e=r(0),i=r(79),o=Math.exp;e(e.S+e.F*r(3)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{sign:r(80)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log1p:r(111)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,n,r){var e=r(0),i=Math.imul;e(e.S+e.F*r(3)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function(t,n){var r=+t,e=+n,i=65535&r,o=65535&e;return 0|i*o+((65535&r>>>16)*o+i*(65535&e>>>16)<<16>>>0)}})},function(t,n,r){var e=r(0),i=Math.abs;e(e.S,"Math",{hypot:function(t,n){for(var r,e,o=0,u=0,c=arguments.length,a=0;u<c;)a<(r=i(arguments[u++]))?(o=o*(e=a/r)*e+1,a=r):o+=r>0?(e=r/a)*e:r;return a===1/0?1/0:a*Math.sqrt(o)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{fround:r(110)})},function(t,n,r){var e=r(0),i=r(79);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,r){var e=r(0),i=Math.exp;e(e.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,r){var e=r(0),i=r(80);e(e.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,r){var e=r(0),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,r){var e=r(0),i=Math.asinh;e(e.S+e.F*!(i&&1/i(0)>0),"Math",{asinh:function t(n){return isFinite(n=+n)&&0!=n?n<0?-t(-n):Math.log(n+Math.sqrt(n*n+1)):n}})},function(t,n,r){var e=r(0),i=r(111),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,r){var e=r(0),i=r(115);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,r){var e=r(0),i=r(114);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,r){var e=r(0);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,r){var e=r(0);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,r){var e=r(0),i=r(112),o=Math.abs;e(e.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isNaN:function(t){return t!=t}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isInteger:r(112)})},function(t,n,r){var e=r(0),i=r(2).isFinite;e(e.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,r){"use strict";var e=r(0),i=r(3),o=r(113),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,void 0)})||!i(function(){u.call({})})),"Number",{toPrecision:function(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?u.call(n):u.call(n,t)}})},function(t,n,r){"use strict";var e=r(0),i=r(23),o=r(113),u=r(81),c=1..toFixed,a=Math.floor,f=[0,0,0,0,0,0],s="Number.toFixed: incorrect invocation!",l=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*f[r],f[r]=e%1e7,e=a(e/1e7)},h=function(t){for(var n=6,r=0;--n>=0;)r+=f[n],f[n]=a(r/t),r=r%t*1e7},v=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==f[t]){var r=String(f[t]);n=""===n?r:n+u.call("0",7-r.length)+r}return n},p=function(t,n,r){return 0===n?r:n%2==1?p(t,n-1,r*t):p(t*t,n/2,r)};e(e.P+e.F*(!!c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(3)(function(){c.call({})})),"Number",{toFixed:function(t){var n,r,e,c,a=o(this,s),f=i(t),g="",d="0";if(f<0||f>20)throw RangeError(s);if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(g="-",a=-a),a>1e-21)if(r=(n=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n}(a*p(2,69,1))-69)<0?a*p(2,-n,1):a/p(2,n,1),r*=4503599627370496,(n=52-n)>0){for(l(0,r),e=f;e>=7;)l(1e7,0),e-=7;for(l(p(10,e,1),0),e=n-1;e>=23;)h(1<<23),e-=23;h(1<<e),l(1,1),h(2),d=v()}else l(0,r),l(1<<-n,0),d=v()+u.call("0",f);return d=f>0?g+((c=d.length)<=f?"0."+u.call("0",f-c)+d:d.slice(0,c-f)+"."+d.slice(c-f)):g+d}})},function(t,n,r){"use strict";var e=r(2),i=r(14),o=r(19),u=r(82),c=r(25),a=r(3),f=r(35).f,s=r(16).f,l=r(7).f,h=r(44).trim,v=e.Number,p=v,g=v.prototype,d="Number"==o(r(36)(g)),y="trim"in String.prototype,m=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){var r,e,i,o=(n=y?n.trim():h(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,a=n.slice(2),f=0,s=a.length;f<s;f++)if((u=a.charCodeAt(f))<48||u>i)return NaN;return parseInt(a,e)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var n=arguments.length<1?0:t,r=this;return r instanceof v&&(d?a(function(){g.valueOf.call(r)}):"Number"!=o(r))?u(new p(m(n)),r,v):m(n)};for(var b,w=r(8)?f(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;w.length>S;S++)i(p,b=w[S])&&!i(v,b)&&l(v,b,s(p,b));v.prototype=g,g.constructor=v,r(12)(e,"Number",v)}},function(t,n,r){var e=r(0),i=r(114);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},function(t,n,r){var e=r(0),i=r(115);e(e.G+e.F*(parseInt!=i),{parseInt:i})},function(t,n,r){"use strict";var e=r(4),i=r(15),o=r(5)("hasInstance"),u=Function.prototype;o in u||r(7).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,r){var e=r(7).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||r(8)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,r){var e=r(0);e(e.P,"Function",{bind:r(117)})},function(t,n,r){"use strict";var e=r(46),i={};i[r(5)("toStringTag")]="z",i+""!="[object z]"&&r(12)(Object.prototype,"toString",function(){return"[object "+e(this)+"]"},!0)},function(t,n,r){var e=r(0);e(e.S,"Object",{setPrototypeOf:r(84).set})},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,r){var e=r(0);e(e.S,"Object",{is:r(308)})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{assign:r(118)})},function(t,n,r){var e=r(4);r(22)("isExtensible",function(t){return function(n){return!!e(n)&&(!t||t(n))}})},function(t,n,r){var e=r(4);r(22)("isSealed",function(t){return function(n){return!e(n)||!!t&&t(n)}})},function(t,n,r){var e=r(4);r(22)("isFrozen",function(t){return function(n){return!e(n)||!!t&&t(n)}})},function(t,n,r){var e=r(4),i=r(30).onFreeze;r(22)("preventExtensions",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){var e=r(4),i=r(30).onFreeze;r(22)("seal",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){var e=r(4),i=r(30).onFreeze;r(22)("freeze",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){r(22)("getOwnPropertyNames",function(){return r(119).f})},function(t,n,r){var e=r(9),i=r(38);r(22)("keys",function(){return function(t){return i(e(t))}})},function(t,n,r){var e=r(9),i=r(15);r(22)("getPrototypeOf",function(){return function(t){return i(e(t))}})},function(t,n,r){var e=r(17),i=r(16).f;r(22)("getOwnPropertyDescriptor",function(){return function(t,n){return i(e(t),n)}})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(8),"Object",{defineProperties:r(120)})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(8),"Object",{defineProperty:r(7).f})},function(t,n,r){var e=r(0);e(e.S,"Object",{create:r(36)})},function(t,n,r){var e=r(38),i=r(60),o=r(47);t.exports=function(t){var n=e(t),r=i.f;if(r)for(var u,c=r(t),a=o.f,f=0;c.length>f;)a.call(t,u=c[f++])&&n.push(u);return n}},function(t,n,r){"use strict";var e=r(2),i=r(14),o=r(8),u=r(0),c=r(12),a=r(30).KEY,f=r(3),s=r(62),l=r(45),h=r(40),v=r(5),p=r(122),g=r(88),d=r(324),y=r(59),m=r(1),b=r(4),w=r(17),S=r(25),x=r(41),_=r(36),M=r(119),O=r(16),E=r(7),F=r(38),P=O.f,A=E.f,j=M.f,I=e.Symbol,N=e.JSON,T=N&&N.stringify,L=v("_hidden"),k=v("toPrimitive"),D={}.propertyIsEnumerable,R=s("symbol-registry"),W=s("symbols"),C=s("op-symbols"),G=Object.prototype,U="function"==typeof I,V=e.QObject,B=!V||!V.prototype||!V.prototype.findChild,Y=o&&f(function(){return 7!=_(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=P(G,n);e&&delete G[n],A(t,n,r),e&&t!==G&&A(G,n,e)}:A,z=function(t){var n=W[t]=_(I.prototype);return n._k=t,n},H=U&&"symbol"==typeof I.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof I},J=function(t,n,r){return t===G&&J(C,n,r),m(t),n=S(n,!0),m(r),i(W,n)?(r.enumerable?(i(t,L)&&t[L][n]&&(t[L][n]=!1),r=_(r,{enumerable:x(0,!1)})):(i(t,L)||A(t,L,x(1,{})),t[L][n]=!0),Y(t,n,r)):A(t,n,r)},K=function(t,n){m(t);for(var r,e=d(n=w(n)),i=0,o=e.length;o>i;)J(t,r=e[i++],n[r]);return t},q=function(t){var n=D.call(this,t=S(t,!0));return!(this===G&&i(W,t)&&!i(C,t))&&(!(n||!i(this,t)||!i(W,t)||i(this,L)&&this[L][t])||n)},X=function(t,n){if(t=w(t),n=S(n,!0),t!==G||!i(W,n)||i(C,n)){var r=P(t,n);return!r||!i(W,n)||i(t,L)&&t[L][n]||(r.enumerable=!0),r}},$=function(t){for(var n,r=j(w(t)),e=[],o=0;r.length>o;)i(W,n=r[o++])||n==L||n==a||e.push(n);return e},Z=function(t){for(var n,r=t===G,e=j(r?C:w(t)),o=[],u=0;e.length>u;)!i(W,n=e[u++])||r&&!i(G,n)||o.push(W[n]);return o};U||(c((I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),n=function(r){this===G&&n.call(C,r),i(this,L)&&i(this[L],t)&&(this[L][t]=!1),Y(this,t,x(1,r))};return o&&B&&Y(G,t,{configurable:!0,set:n}),z(t)}).prototype,"toString",function(){return this._k}),O.f=X,E.f=J,r(35).f=M.f=$,r(47).f=q,r(60).f=Z,o&&!r(39)&&c(G,"propertyIsEnumerable",q,!0),p.f=function(t){return z(v(t))}),u(u.G+u.W+u.F*!U,{Symbol:I});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Q.length>tt;)v(Q[tt++]);for(var nt=F(v.store),rt=0;nt.length>rt;)g(nt[rt++]);u(u.S+u.F*!U,"Symbol",{for:function(t){return i(R,t+="")?R[t]:R[t]=I(t)},keyFor:function(t){if(!H(t))throw TypeError(t+" is not a symbol!");for(var n in R)if(R[n]===t)return n},useSetter:function(){B=!0},useSimple:function(){B=!1}}),u(u.S+u.F*!U,"Object",{create:function(t,n){return void 0===n?_(t):K(_(t),n)},defineProperty:J,defineProperties:K,getOwnPropertyDescriptor:X,getOwnPropertyNames:$,getOwnPropertySymbols:Z}),N&&u(u.S+u.F*(!U||f(function(){var t=I();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){for(var n,r,e=[t],i=1;arguments.length>i;)e.push(arguments[i++]);if(r=n=e[1],(b(n)||void 0!==t)&&!H(t))return y(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!H(n))return n}),e[1]=n,T.apply(N,e)}}),I.prototype[k]||r(13)(I.prototype,k,I.prototype.valueOf),l(I,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n,r){r(325),r(323),r(322),r(321),r(320),r(319),r(318),r(317),r(316),r(315),r(314),r(313),r(312),r(311),r(310),r(309),r(307),r(306),r(305),r(304),r(303),r(302),r(301),r(300),r(299),r(298),r(297),r(296),r(295),r(294),r(293),r(292),r(291),r(290),r(289),r(288),r(287),r(286),r(285),r(284),r(283),r(282),r(281),r(280),r(279),r(278),r(277),r(276),r(275),r(274),r(273),r(272),r(271),r(270),r(269),r(268),r(267),r(266),r(265),r(264),r(263),r(262),r(261),r(260),r(259),r(258),r(257),r(256),r(255),r(254),r(253),r(252),r(251),r(250),r(249),r(248),r(247),r(245),r(244),r(242),r(241),r(240),r(239),r(238),r(237),r(236),r(234),r(233),r(232),r(231),r(230),r(229),r(228),r(227),r(226),r(225),r(224),r(223),r(222),r(68),r(221),r(220),r(105),r(219),r(218),r(217),r(216),r(215),r(102),r(100),r(99),r(214),r(213),r(212),r(211),r(210),r(209),r(208),r(207),r(206),r(205),r(204),r(203),r(202),r(201),r(200),r(199),r(198),r(197),r(196),r(195),r(194),r(193),r(192),r(191),r(190),r(189),r(188),r(187),r(186),r(185),r(184),r(183),r(182),r(181),r(180),r(179),r(178),r(177),r(176),r(175),r(174),r(173),r(172),r(171),r(170),r(169),r(168),r(167),r(166),r(165),r(164),r(163),r(162),r(161),r(160),r(159),r(158),r(157),r(156),r(155),r(154),r(153),r(152),r(151),r(150),r(149),r(148),r(147),r(146),r(145),r(144),r(143),r(142),r(141),r(140),r(139),r(138),r(137),r(136),r(135),r(134),r(133),r(132),r(131),r(130),t.exports=r(26)},function(t,n,r){"use strict";(function(t){if(r(326),r(129),r(128),t._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");t._babelPolyfill=!0;var n="defineProperty";function e(t,r,e){t[r]||Object[n](t,r,{writable:!0,configurable:!0,value:e})}e(String.prototype,"padLeft","".padStart),e(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&e(Array,t,Function.call.bind([][t]))})}).call(this,r(124))},function(t,n,r){r(327),t.exports=r(125)}])});

/***/ }),

/***/ 2005:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2006);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(45)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../css-loader/index.js!./default.css", function() {
			var newContent = require("!!../../../../css-loader/index.js!./default.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2006:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "/*\n**************************************************************\nThis theme is the default shipping theme, it includes some\ndecent defaults, but is separate from the calendar component\nto make it easier for users to implement their own themes w/o\nhaving to override as much.\n**************************************************************\n*/\n\n/* Header */\n\n.calendar-view .header,\n.calendar-view .dayList .day {\n\tbackground-color: #f0f0f0;\n}\n\n.calendar-view .header .periodLabel > div {\n\tfont-size: 1.5em;\n}\n\n.calendar-view .header button {\n\tcolor: #7f7f7f;\n}\n\n.calendar-view .header button:disabled {\n\tcolor: #ccc;\n\tbackground-color: #f7f7f7;\n}\n\n/* Grid */\n\n.calendar-view .day.today {\n\tbackground-color: #ffe;\n}\n\n.calendar-view .day.past {\n\tbackground-color: #fafafa;\n}\n\n.calendar-view .day.outsideOfMonth {\n\tbackground-color: #f7f7f7;\n}\n\n/* Events */\n\n.calendar-view .event {\n\tborder-color: #e0e0f0;\n\tborder-radius: 0.5em;\n\tbackground-color: #e7e7ff;\n}\n\n.calendar-view .event.purple {\n\tbackground-color: #f0e0ff;\n\tborder-color: #e7d7f7;\n}\n\n.calendar-view .event.orange {\n\tbackground-color: #ffe7d0;\n\tborder-color: #f7e0c7;\n}\n\n.calendar-view .event.continued::before,\n.calendar-view .event.toBeContinued::after {\n\tcontent: \" \\21E2   \";\n\tcolor: #999;\n}\n\n.calendar-view .event.toBeContinued {\n\tborder-right-style: none;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n}\n\n.calendar-view .event.hasUrl:hover {\n\ttext-decoration: underline;\n}\n\n.calendar-view .event.continued {\n\tborder-left-style: none;\n\tborder-top-left-radius: 0;\n\tborder-bottom-left-radius: 0;\n}\n\n.calendar-view .week .event {\n\ttext-overflow: ellipsis;\n}\n\n/* Event Times */\n\n.calendar-view .event .startTime,\n.calendar-view .event .endTime {\n\tfont-weight: bold;\n\tcolor: #666;\n}\n\n/* Drag and drop */\n\n.calendar-view .day .content.draghover {\n\tborder: 0.2em solid yellow;\n}\n", ""]);

// exports


/***/ }),

/***/ 2007:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2008);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(45)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../css-loader/index.js!./holidays-us.css", function() {
			var newContent = require("!!../../../../css-loader/index.js!./holidays-us.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2008:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "/*\n********************************************************************************************************\nThis theme adds emoji next to the day number for major holidays traditionally celebrated in the USA.\n\nThere are two types of holidays: officially-recognized holidays, and traditionally-celebrated ones\n(most of the traditionally-celebrated ones are connected with the Christian faith.)\n\nTo activate this theme, include the CSS and decorate the calendar instance with the `holidays-us-official`\nand/or `holidays-us-traditional` classes.\n********************************************************************************************************\n*/\n\n/*\n****************************************************\nTraditional US Holidays\n****************************************************\n*/\n\n/* Easter: example of a holiday that changes each year. Easy to pre-populate for a reasonable number of years. */\n.calendar-view.holiday-us-traditional .d2015-04-05 .date::before {\n\tcontent: \"\\271D\";\n}\n\n.calendar-view.holiday-us-traditional .d2016-03-27 .date::before {\n\tcontent: \"\\271D\";\n}\n\n.calendar-view.holiday-us-traditional .d2017-04-16 .date::before {\n\tcontent: \"\\271D\";\n}\n\n.calendar-view.holiday-us-traditional .d2018-04-01 .date::before {\n\tcontent: \"\\271D\";\n}\n\n.calendar-view.holiday-us-traditional .d2019-04-21 .date::before {\n\tcontent: \"\\271D\";\n}\n\n.calendar-view.holiday-us-traditional .d2020-04-12 .date::before {\n\tcontent: \"\\271D\";\n}\n\n.calendar-view.holiday-us-traditional .d2021-04-04 .date::before {\n\tcontent: \"\\271D\";\n}\n\n.calendar-view.holiday-us-traditional .d2022-04-17 .date::before {\n\tcontent: \"\\271D\";\n}\n\n.calendar-view.holiday-us-traditional .d2023-04-09 .date::before {\n\tcontent: \"\\271D\";\n}\n\n/* Cinco de Mayo */\n.calendar-view.holiday-us-traditional .d05-05 .date::before {\n\tcontent: \"\\1F1F2\\1F1FD\";\n}\n\n/* Halloween - October 31 */\n.calendar-view.holiday-us-traditional .d10-31 .date::before {\n\tcontent: \"\\1F383\";\n}\n\n/*\n****************************************************\nOfficial US Holidays\n****************************************************\n*/\n\n/**** Same date every year ****/\n\n/* New Year's Day - January 1 */\n.calendar-view.holiday-us-official .d01-01 .date::before {\n\tcontent: \"\\1F37E\";\n}\n\n/* Independence Day - July 4 */\n.calendar-view.holiday-us-official .d07-04 .date::before {\n\tcontent: \"\\1F1FA\\1F1F8\";\n}\n\n/* Veteran's Day - November 11 */\n.calendar-view.holiday-us-official .d11-11 .date::before {\n\tcontent: \"\\1F396\";\n}\n\n/* Christmas Day - December 25 */\n.calendar-view.holiday-us-official .d12-25 .date::before {\n\tcontent: \"\\1F384\";\n}\n\n/**** Same month position every year ****/\n\n/* Martin Luther King, Jr. Day - 3rd Monday of January */\n.calendar-view.holiday-us-official.m01 .day.dow1.instance3 .date::before {\n\tcontent: \"\\270C\\1F3FE\";\n}\n\n/* Washington's Birthday - 3rd Monday in February */\n.calendar-view.holiday-us-official.m02 .day.dow1.instance3 .date::before {\n\tcontent: \"\\1F34E\";\n}\n\n/* Memorial Day - last Monday in May */\n.calendar-view.holiday-us-official.m05 .day.dow1.lastInstance .date::before {\n\tcontent: \"\\1F1FA\\1F1F8\";\n}\n\n/* Labor Day - 1st Monday in September */\n.calendar-view.holiday-us-official.m09 .day.dow1.instance1 .date::before {\n\tcontent: \"\\1F4AA\";\n}\n\n/* Columbus Day - 2nd Monday in October */\n.calendar-view.holiday-us-official.m10 .day.dow1.instance2 .date::before {\n\tcontent: \"\\2388\";\n}\n\n/* Thanksgiving Day - 4th Thursday of November */\n.calendar-view.holiday-us-official.m11 .day.dow4.instance4 .date::before {\n\tcontent: \"\\1F64F\";\n}\n", ""]);

// exports


/***/ }),

/***/ 2009:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("card", { attrs: { title: "Calendar" } }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-4" }, [
            _c("h2", { staticClass: "card-title" }, [_vm._v("Added event")]),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                  }
                }
              },
              [
                _c("h6", { staticClass: "mb-0" }, [_vm._v("Start Date")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.startDate,
                          expression: "startDate"
                        }
                      ],
                      staticClass: "form-control mt-3",
                      attrs: {
                        type: "number",
                        required: "",
                        min: "1",
                        max: "31",
                        placeholder: "Date"
                      },
                      domProps: { value: _vm.startDate },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.startDate = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.startHr,
                          expression: "startHr"
                        }
                      ],
                      staticClass: "form-control mt-3",
                      attrs: {
                        type: "number",
                        placeholder: "Hour",
                        min: "1",
                        max: "24"
                      },
                      domProps: { value: _vm.startHr },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.startHr = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.startMin,
                          expression: "startMin"
                        }
                      ],
                      staticClass: "form-control mt-3",
                      attrs: {
                        type: "number",
                        placeholder: "Minute",
                        min: "00",
                        max: "60"
                      },
                      domProps: { value: _vm.startMin },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.startMin = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "mt-3 mb-0" }, [_vm._v("End Date")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.endDate,
                          expression: "endDate"
                        }
                      ],
                      staticClass: "form-control mt-3",
                      attrs: {
                        type: "number",
                        required: "",
                        min: _vm.startDate,
                        max: "31",
                        placeholder: "Date"
                      },
                      domProps: { value: _vm.endDate },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.endDate = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.endHr,
                          expression: "endHr"
                        }
                      ],
                      staticClass: "form-control mt-3",
                      attrs: {
                        type: "number",
                        placeholder: "Hour",
                        min: "1",
                        max: "24"
                      },
                      domProps: { value: _vm.endHr },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.endHr = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.endMin,
                          expression: "endMin"
                        }
                      ],
                      staticClass: "form-control mt-3",
                      attrs: {
                        type: "number",
                        placeholder: "Minute",
                        min: "00",
                        max: "60"
                      },
                      domProps: { value: _vm.endMin },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.endMin = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.eventName,
                      expression: "eventName"
                    }
                  ],
                  staticClass: "form-control mt-3",
                  attrs: {
                    type: "text",
                    required: "",
                    placeholder: "Event Name"
                  },
                  domProps: { value: _vm.eventName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.eventName = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.className,
                        expression: "className"
                      }
                    ],
                    staticClass: "form-control mt-3",
                    class: _vm.className,
                    attrs: { required: "" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.className = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { disabled: "", value: "" } }, [
                      _vm._v("Select background color")
                    ]),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        staticClass: "bg-success text-white",
                        attrs: { value: "bg-success text-white" }
                      },
                      [_vm._v("Success")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        staticClass: "bg-info text-white",
                        attrs: { value: "bg-info text-white" }
                      },
                      [_vm._v("Info")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        staticClass: "bg-primary text-white",
                        attrs: { value: "bg-primary text-white" }
                      },
                      [_vm._v("Primary")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        staticClass: "bg-warning text-white",
                        attrs: { value: "bg-warning text-white" }
                      },
                      [_vm._v("Warning")]
                    ),
                    _vm._v(" "),
                    _c(
                      "option",
                      {
                        staticClass: "bg-danger text-white",
                        attrs: { value: "bg-danger text-white" }
                      },
                      [_vm._v("Danger")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "mt-3 btn btn-primary",
                    on: { click: _vm.clickTestAddEvent }
                  },
                  [_vm._v("Add Event")]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-8" }, [
            _c(
              "div",
              { attrs: { id: "app" } },
              [
                _c("div", { staticClass: "app-description" }, [
                  _c("h3", [_vm._v(_vm._s(_vm.message))]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("p", [
                        _vm._v(
                          "Period UOM:\n                                    "
                        ),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.displayPeriodUom,
                                expression: "displayPeriodUom"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.displayPeriodUom = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", [_vm._v("month")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("week")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("year")])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("p", [
                        _vm._v(
                          "Period Count:\n                                    "
                        ),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.displayPeriodCount,
                                expression: "displayPeriodCount"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.displayPeriodCount = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { domProps: { value: 1 } }, [
                              _vm._v("1")
                            ]),
                            _vm._v(" "),
                            _c("option", { domProps: { value: 2 } }, [
                              _vm._v("2")
                            ]),
                            _vm._v(" "),
                            _c("option", { domProps: { value: 3 } }, [
                              _vm._v("3")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("p", [
                        _vm._v(
                          "Starting day of the week:\n                                    "
                        ),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.startingDayOfWeek,
                                expression: "startingDayOfWeek"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.startingDayOfWeek = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          _vm._l(_vm.dayNames, function(d, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: index } },
                              [
                                _vm._v(
                                  _vm._s(d) +
                                    "\n                                        "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("calendar-view", {
                  staticClass: "holiday-us-traditional holiday-us-official",
                  attrs: {
                    "show-date": _vm.showDate,
                    "time-format-options": {
                      hour: "numeric",
                      minute: "2-digit"
                    },
                    "enable-drag-drop": true,
                    "disable-past": _vm.disablePast,
                    "disable-future": _vm.disableFuture,
                    "show-event-times": _vm.showEventTimes,
                    "display-period-uom": _vm.displayPeriodUom,
                    "display-period-count": _vm.displayPeriodCount,
                    "starting-day-of-week": _vm.startingDayOfWeek,
                    events: _vm.events
                  },
                  on: {
                    clickDay: _vm.onClickDay,
                    clickEvent: _vm.onClickEvent,
                    setShowDate: _vm.setShowDate,
                    dropEventOnDate: _vm.onDrop
                  }
                })
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("calendar-range", {
        staticClass: "new_calendar",
        attrs: { events: _vm.calendarEvents, selection: _vm.calendarSelection }
      }),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary mt-3", on: { click: _vm.add } },
        [_vm._v("Add event")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-130717ba", module.exports)
  }
}

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1848)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(1850)
/* template */
var __vue_template__ = __webpack_require__(2009)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/components/pages/calendar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-130717ba", Component.options)
  } else {
    hotAPI.reload("data-v-130717ba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(566)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(568)
/* template */
var __vue_template__ = __webpack_require__(569)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/components/pages/card/card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15e33d3a", Component.options)
  } else {
    hotAPI.reload("data-v-15e33d3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(567);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("d6b775a8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15e33d3a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./card.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15e33d3a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./card.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n", ""]);

// exports


/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'card',
    data: function data() {
        return {
            show: true,
            isActive: false
        };
    },

    methods: {
        hide: function hide() {
            this.isActive = true;
        }
    },
    mounted: function mounted() {},
    props: {
        title: {
            required: false
        }
    },
    destroy: function destroy() {}
});

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card", class: { dNone: _vm.isActive } }, [
    _c("div", { staticClass: "card-header" }, [
      _c("h3", {
        staticClass: "card-title",
        domProps: { innerHTML: _vm._s(_vm.title) }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "float-right" }, [
        _c("i", {
          staticClass: "fa fa-fw ti-angle-up",
          class: { rotate: _vm.show },
          on: {
            click: function($event) {
              _vm.show = !_vm.show
            }
          }
        }),
        _vm._v(" "),
        _c("i", {
          staticClass: "fa fa-fw ti-close removecard",
          on: { click: _vm.hide }
        })
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.show,
            expression: "show"
          }
        ],
        staticClass: "card-body"
      },
      [_vm._t("default")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-15e33d3a", module.exports)
  }
}

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(733)

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),

/***/ 571:
/***/ (function(module, exports) {

var commonFormatterKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
]

function buildFormattingTokensRegExp (formatters) {
  var formatterKeys = []
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key)
    }
  }

  var formattingTokens = commonFormatterKeys
    .concat(formatterKeys)
    .sort()
    .reverse()
  var formattingTokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )

  return formattingTokensRegExp
}

module.exports = buildFormattingTokensRegExp


/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var startOfISOWeek = __webpack_require__(604)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(662)

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  addDays: __webpack_require__(640),
  addHours: __webpack_require__(1000),
  addISOYears: __webpack_require__(1001),
  addMilliseconds: __webpack_require__(641),
  addMinutes: __webpack_require__(1003),
  addMonths: __webpack_require__(664),
  addQuarters: __webpack_require__(1004),
  addSeconds: __webpack_require__(1005),
  addWeeks: __webpack_require__(735),
  addYears: __webpack_require__(1006),
  areRangesOverlapping: __webpack_require__(1855),
  closestIndexTo: __webpack_require__(1856),
  closestTo: __webpack_require__(1857),
  compareAsc: __webpack_require__(643),
  compareDesc: __webpack_require__(736),
  differenceInCalendarDays: __webpack_require__(663),
  differenceInCalendarISOWeeks: __webpack_require__(1858),
  differenceInCalendarISOYears: __webpack_require__(1007),
  differenceInCalendarMonths: __webpack_require__(1008),
  differenceInCalendarQuarters: __webpack_require__(1859),
  differenceInCalendarWeeks: __webpack_require__(1860),
  differenceInCalendarYears: __webpack_require__(1010),
  differenceInDays: __webpack_require__(1011),
  differenceInHours: __webpack_require__(1861),
  differenceInISOYears: __webpack_require__(1862),
  differenceInMilliseconds: __webpack_require__(665),
  differenceInMinutes: __webpack_require__(1863),
  differenceInMonths: __webpack_require__(737),
  differenceInQuarters: __webpack_require__(1864),
  differenceInSeconds: __webpack_require__(738),
  differenceInWeeks: __webpack_require__(1865),
  differenceInYears: __webpack_require__(1866),
  distanceInWords: __webpack_require__(1013),
  distanceInWordsStrict: __webpack_require__(1867),
  distanceInWordsToNow: __webpack_require__(1868),
  eachDay: __webpack_require__(1869),
  endOfDay: __webpack_require__(739),
  endOfHour: __webpack_require__(1870),
  endOfISOWeek: __webpack_require__(1871),
  endOfISOYear: __webpack_require__(1872),
  endOfMinute: __webpack_require__(1873),
  endOfMonth: __webpack_require__(1017),
  endOfQuarter: __webpack_require__(1874),
  endOfSecond: __webpack_require__(1875),
  endOfToday: __webpack_require__(1876),
  endOfTomorrow: __webpack_require__(1877),
  endOfWeek: __webpack_require__(1016),
  endOfYear: __webpack_require__(1878),
  endOfYesterday: __webpack_require__(1879),
  format: __webpack_require__(1880),
  getDate: __webpack_require__(1881),
  getDay: __webpack_require__(1882),
  getDayOfYear: __webpack_require__(1018),
  getDaysInMonth: __webpack_require__(734),
  getDaysInYear: __webpack_require__(1883),
  getHours: __webpack_require__(1884),
  getISODay: __webpack_require__(1022),
  getISOWeek: __webpack_require__(740),
  getISOWeeksInYear: __webpack_require__(1885),
  getISOYear: __webpack_require__(603),
  getMilliseconds: __webpack_require__(1886),
  getMinutes: __webpack_require__(1887),
  getMonth: __webpack_require__(1888),
  getOverlappingDaysInRanges: __webpack_require__(1889),
  getQuarter: __webpack_require__(1009),
  getSeconds: __webpack_require__(1890),
  getTime: __webpack_require__(1891),
  getYear: __webpack_require__(1892),
  isAfter: __webpack_require__(1893),
  isBefore: __webpack_require__(1894),
  isDate: __webpack_require__(733),
  isEqual: __webpack_require__(1895),
  isFirstDayOfMonth: __webpack_require__(1896),
  isFriday: __webpack_require__(1897),
  isFuture: __webpack_require__(1898),
  isLastDayOfMonth: __webpack_require__(1899),
  isLeapYear: __webpack_require__(1021),
  isMonday: __webpack_require__(1900),
  isPast: __webpack_require__(1901),
  isSameDay: __webpack_require__(1902),
  isSameHour: __webpack_require__(1023),
  isSameISOWeek: __webpack_require__(1025),
  isSameISOYear: __webpack_require__(1026),
  isSameMinute: __webpack_require__(1027),
  isSameMonth: __webpack_require__(1029),
  isSameQuarter: __webpack_require__(1030),
  isSameSecond: __webpack_require__(1032),
  isSameWeek: __webpack_require__(741),
  isSameYear: __webpack_require__(1034),
  isSaturday: __webpack_require__(1903),
  isSunday: __webpack_require__(1904),
  isThisHour: __webpack_require__(1905),
  isThisISOWeek: __webpack_require__(1906),
  isThisISOYear: __webpack_require__(1907),
  isThisMinute: __webpack_require__(1908),
  isThisMonth: __webpack_require__(1909),
  isThisQuarter: __webpack_require__(1910),
  isThisSecond: __webpack_require__(1911),
  isThisWeek: __webpack_require__(1912),
  isThisYear: __webpack_require__(1913),
  isThursday: __webpack_require__(1914),
  isToday: __webpack_require__(1915),
  isTomorrow: __webpack_require__(1916),
  isTuesday: __webpack_require__(1917),
  isValid: __webpack_require__(1020),
  isWednesday: __webpack_require__(1918),
  isWeekend: __webpack_require__(1919),
  isWithinRange: __webpack_require__(1920),
  isYesterday: __webpack_require__(1921),
  lastDayOfISOWeek: __webpack_require__(1922),
  lastDayOfISOYear: __webpack_require__(1923),
  lastDayOfMonth: __webpack_require__(1924),
  lastDayOfQuarter: __webpack_require__(1925),
  lastDayOfWeek: __webpack_require__(1035),
  lastDayOfYear: __webpack_require__(1926),
  max: __webpack_require__(1927),
  min: __webpack_require__(1928),
  parse: __webpack_require__(570),
  setDate: __webpack_require__(1929),
  setDay: __webpack_require__(1930),
  setDayOfYear: __webpack_require__(1931),
  setHours: __webpack_require__(1932),
  setISODay: __webpack_require__(1933),
  setISOWeek: __webpack_require__(1934),
  setISOYear: __webpack_require__(1002),
  setMilliseconds: __webpack_require__(1935),
  setMinutes: __webpack_require__(1936),
  setMonth: __webpack_require__(1036),
  setQuarter: __webpack_require__(1937),
  setSeconds: __webpack_require__(1938),
  setYear: __webpack_require__(1939),
  startOfDay: __webpack_require__(605),
  startOfHour: __webpack_require__(1024),
  startOfISOWeek: __webpack_require__(604),
  startOfISOYear: __webpack_require__(642),
  startOfMinute: __webpack_require__(1028),
  startOfMonth: __webpack_require__(1940),
  startOfQuarter: __webpack_require__(1031),
  startOfSecond: __webpack_require__(1033),
  startOfToday: __webpack_require__(1941),
  startOfTomorrow: __webpack_require__(1942),
  startOfWeek: __webpack_require__(662),
  startOfYear: __webpack_require__(1019),
  startOfYesterday: __webpack_require__(1943),
  subDays: __webpack_require__(1944),
  subHours: __webpack_require__(1945),
  subISOYears: __webpack_require__(1012),
  subMilliseconds: __webpack_require__(1946),
  subMinutes: __webpack_require__(1947),
  subMonths: __webpack_require__(1948),
  subQuarters: __webpack_require__(1949),
  subSeconds: __webpack_require__(1950),
  subWeeks: __webpack_require__(1951),
  subYears: __webpack_require__(1952)
}


/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @returns {Date} the new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  date.setDate(date.getDate() + amount)
  return date
}

module.exports = addDays


/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @returns {Date} the new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount) {
  var timestamp = parse(dirtyDate).getTime()
  var amount = Number(dirtyAmount)
  return new Date(timestamp + amount)
}

module.exports = addMilliseconds


/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(603)
var startOfISOWeek = __webpack_require__(604)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft < timeRight) {
    return -1
  } else if (timeLeft > timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareAsc


/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(605)

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var getDaysInMonth = __webpack_require__(734)

/**
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @returns {Date} the new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  var desiredMonth = date.getMonth() + amount
  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
  return date
}

module.exports = addMonths


/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getTime() - dateRight.getTime()
}

module.exports = differenceInMilliseconds


/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(1014)
var buildFormatLocale = __webpack_require__(1015)

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 733:
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  var lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

module.exports = getDaysInMonth


/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__(640)

/**
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added
 * @returns {Date} the new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  var days = amount * 7
  return addDays(dirtyDate, days)
}

module.exports = addWeeks


/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * var result = compareDesc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */
function compareDesc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft > timeRight) {
    return -1
  } else if (timeLeft < timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareDesc


/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var differenceInCalendarMonths = __webpack_require__(1008)
var compareAsc = __webpack_require__(643)

/**
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 7
 */
function differenceInMonths (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight))
  dateLeft.setMonth(dateLeft.getMonth() - sign * difference)

  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastMonthNotFull)
}

module.exports = differenceInMonths


/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(665)

/**
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInSeconds


/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)

/**
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfDay


/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(570)
var startOfISOWeek = __webpack_require__(604)
var startOfISOYear = __webpack_require__(642)

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(662)

/**
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(
 *   new Date(2014, 7, 31),
 *   new Date(2014, 8, 4)
 * )
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(
 *   new Date(2014, 7, 31),
 *   new Date(2014, 8, 4),
 *   {weekStartsOn: 1}
 * )
 * //=> false
 */
function isSameWeek (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, dirtyOptions)
  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, dirtyOptions)

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
}

module.exports = isSameWeek


/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	MINUTE: 2,
	HOUR: 3,
	DAY: 4,
	WEEK: 5,
	MONTH: 6,
	YEAR: 7,
	DECADE: 8,

	2: 'minute',
	3: 'hour',
	4: 'day',
	5: 'week',
	6: 'month',
	7: 'year',
	8: 'decade',
});


/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1852)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(1854)
/* template */
var __vue_template__ = __webpack_require__(1988)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vue-calendar-picker/src/calendarView.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0692318e", Component.options)
  } else {
    hotAPI.reload("data-v-0692318e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});