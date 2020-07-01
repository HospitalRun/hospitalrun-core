/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
/* eslint-disable radix */
import DesignDocument from '../design-document'

export default {
  _id: '_design/patient_by_admission',
  views: {
    patient_by_admission: {
      map(doc) {
        var doctype
        var uidx
        if (doc._id && (uidx = doc._id.indexOf('_')) > 0 && !doc.data.archived) {
          doctype = doc._id.substring(0, uidx)
          if (doctype === 'patient') {
            if (doc.data.admitted === true) {
              if (doc.data.friendlyId) {
                emit([doc.data.friendlyId, doc._id])
              } else if (doc.data.externalPatientId) {
                emit([doc.data.externalPatientId, doc._id])
              } else {
                emit([doc._id, doc._id])
              }
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
      rows.sort(function (a, b) {
        var sortBy = ''
        if (req.query && req.query.sortKey) {
          sortBy = req.query.sortKey
        }
        switch (sortBy) {
          case 'firstName':
          case 'sex':
          case 'lastName':
          case 'status': {
            return compareStrings(a.doc.data[sortBy], b.doc.data[sortBy])
          }
          case 'dateOfBirth': {
            return getCompareDate(a.doc.data.dateOfBirth) - getCompareDate(b.doc.data.dateOfBirth)
          }
          default: {
            return 0 // Don't sort
          }
        }
      })
      if (req.query.sortDesc) {
        rows = rows.reverse()
      }
      if (req.query.sortStartKey) {
        var startKey = JSON.parse(req.query.sortStartKey)
        for (var i = 0; i < rows.length; i++) {
          if (keysEqual(startKey, rows[i].key)) {
            startingPosition = i
            break
          }
        }
      }
      if (req.query.sortLimit) {
        rows = rows.slice(startingPosition, parseInt(req.query.sortLimit) + startingPosition)
      } else if (startingPosition > 0) {
        rows = rows.slice(startingPosition)
      }
      send(JSON.stringify({ rows }))
    },
  },
} as DesignDocument<any>
