/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable radix */
import { DesignDocument } from '../design-document'

export default {
  _id: '_design/appointments_by_date',
  views: {
    appointments_by_date: {
      map(doc) {
        var doctype
        var uidx
        if (doc._id && (uidx = doc._id.indexOf('_')) > 0 && !doc.data.archived) {
          doctype = doc._id.substring(0, uidx)
          if (doctype === 'appointment') {
            var { endDate } = doc.data
            if (endDate && endDate !== '') {
              endDate = new Date(endDate)
              if (endDate.getTime) {
                endDate = endDate.getTime()
              }
            }
            var { startDate } = doc.data
            if (startDate && startDate !== '') {
              startDate = new Date(startDate)
              if (startDate.getTime) {
                startDate = startDate.getTime()
              }
            }
            if (doc.data.appointmentType !== 'Surgery') {
              emit([startDate, endDate, doc._id])
            }
          }
        }
      },
    },
  },
  lists: {
    sort(_, req) {
      function keysEqual(keyA: string, keyB: string) {
        for (var i = 0; i < keyA.length; i++) {
          if (keyA[i] !== keyB[i]) {
            return false
          }
        }
        return true
      }
      function getCompareDate(dateString: string) {
        if (!dateString || dateString === '') {
          return 0
        }
        return new Date(dateString).getTime()
      }
      function compareStrings(aString: string, bString: string) {
        if (!aString) {
          aString = ''
        }
        if (!bString) {
          bString = ''
        }
        if (aString < bString) {
          return -1
        }
        if (aString > bString) {
          return 1
        }
        return 0
      }
      var row
      var rows = []
      var startingPosition = 0
      while ((row = getRow<any>())) {
        rows.push(row)
      }
      rows = rows.filter(function (row) {
        var filterBy = null
        var includeRow = true
        if (req.query && req.query.filterBy) {
          filterBy = JSON.parse(req.query.filterBy)
        }
        if (!filterBy) {
          return true
        }
        for (var i = 0; i < filterBy.length; i++) {
          var currentValue = row.doc.data[filterBy[i].name]
          if (filterBy[i].name === 'status' && (!currentValue || currentValue === '')) {
            currentValue = 'Scheduled'
          }
          if (currentValue !== filterBy[i].value) {
            includeRow = false
            break
          }
        }
        return includeRow
      })
      rows.sort(function (a, b) {
        function defaultStatus(value?: string) {
          if (!value || value === '') {
            return 'Scheduled'
          }
          return value
        }
        var sortBy = ''
        if (req.query && req.query.sortKey) {
          sortBy = req.query.sortKey
        }
        switch (sortBy) {
          case 'appointmentType':
          case 'location':
          case 'provider':
            return compareStrings(a.doc.data[sortBy], b.doc.data[sortBy])
          case 'date': {
            var startDiff =
              getCompareDate(a.doc.data.startDate) - getCompareDate(b.doc.data.startDate)
            if (startDiff === 0) {
              return getCompareDate(a.doc.data.endDate) - getCompareDate(b.doc.data.endDate)
            }
            return startDiff
          }
          case 'status': {
            var aStatus = defaultStatus(a.doc.data[sortBy])
            var bStatus = defaultStatus(b.doc.data[sortBy])
            return compareStrings(aStatus, bStatus)
          }
          default: {
            return 0 // Don't sort
          }
        }
      })
      if (req.query!.sortDesc) {
        rows = rows.reverse()
      }
      if (req.query!.sortStartKey) {
        var startKey = JSON.parse(req.query!.sortStartKey)
        for (var i = 0; i < rows.length; i++) {
          if (keysEqual(startKey, rows[i].key)) {
            startingPosition = i
            break
          }
        }
      }
      if (req.query!.sortLimit) {
        rows = rows.slice(startingPosition, parseInt(req.query!.sortLimit) + startingPosition)
      } else if (startingPosition > 0) {
        rows = rows.slice(startingPosition)
      }
      send(JSON.stringify({ rows }))
    },
  },
} as DesignDocument<any>
