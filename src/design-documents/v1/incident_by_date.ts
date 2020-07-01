/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
import DesignDocument from '../design-document'

export default {
  _id: '_design/incident_by_date',
  views: {
    incident_by_date: {
      map(doc) {
        var doctype
        var uidx
        if (doc._id && (uidx = doc._id.indexOf('_')) > 0 && !doc.data.archived) {
          doctype = doc._id.substring(0, uidx)
          if (doctype === 'incident') {
            var { dateOfIncident } = doc.data
            if (dateOfIncident && dateOfIncident !== '') {
              dateOfIncident = new Date(dateOfIncident)
              if (dateOfIncident.getTime) {
                dateOfIncident = dateOfIncident.getTime()
              }
            }
            emit([dateOfIncident, doc._id])
          }
        }
      },
    },
  },
} as DesignDocument<any>
