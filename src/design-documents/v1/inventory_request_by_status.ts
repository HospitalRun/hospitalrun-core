/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
import DesignDocument from '../design-document'

export default {
  _id: '_design/inventory_request_by_status',
  views: {
    inventory_request_by_status: {
      map(doc) {
        var doctype
        var uidx
        if (doc._id && (uidx = doc._id.indexOf('_')) > 0 && !doc.data.archived) {
          doctype = doc._id.substring(0, uidx)
          if (doctype === 'invRequest') {
            var { dateCompleted } = doc.data
            if (dateCompleted && dateCompleted !== '') {
              dateCompleted = new Date(dateCompleted)
              if (dateCompleted.getTime) {
                dateCompleted = dateCompleted.getTime()
              }
            }
            emit([doc.data.status, dateCompleted, doc._id])
          }
        }
      },
    },
  },
} as DesignDocument<any>
