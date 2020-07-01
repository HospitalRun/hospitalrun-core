/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
import DesignDocument from '../design-document'

export default {
  _id: '_design/invoice_by_status',
  views: {
    invoice_by_status: {
      map(doc) {
        var doctype
        var uidx
        if (doc._id && (uidx = doc._id.indexOf('_')) > 0 && !doc.data.archived) {
          doctype = doc._id.substring(0, uidx)
          if (doctype === 'invoice') {
            var { billDate } = doc.data
            if (billDate && billDate !== '') {
              billDate = new Date(billDate)
              if (billDate.getTime) {
                billDate = billDate.getTime()
              }
            }
            emit([doc.data.status, billDate, doc._id])
          }
        }
      },
    },
  },
} as DesignDocument<any>
