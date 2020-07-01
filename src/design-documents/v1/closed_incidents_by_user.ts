/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
import DesignDocument from '../design-document'

export default {
  _id: '_design/closed_incidents_by_user',
  views: {
    closed_incidents_by_user: {
      map(doc) {
        var doctype
        var uidx
        if (doc._id && (uidx = doc._id.indexOf('_')) > 0 && !doc.data.archived) {
          doctype = doc._id.substring(0, uidx)
          if (doctype === 'incident') {
            if (doc.data.status === 'Closed') {
              emit([doc.data.reportedBy, doc._id])
            }
          }
        }
      },
    },
  },
} as DesignDocument<any>
