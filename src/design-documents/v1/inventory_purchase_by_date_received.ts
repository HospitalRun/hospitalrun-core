/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
import DesignDocument from '../design-document'

export default {
  _id: '_design/inventory_purchase_by_date_received',
  views: {
    inventory_purchase_by_date_received: {
      map(doc) {
        var doctype
        var uidx
        if (doc._id && (uidx = doc._id.indexOf('_')) > 0 && !doc.data.archived) {
          doctype = doc._id.substring(0, uidx)
          if (doctype === 'invPurchase') {
            var { dateReceived } = doc.data
            if (dateReceived && dateReceived !== '') {
              dateReceived = new Date(dateReceived)
              if (dateReceived.getTime) {
                dateReceived = dateReceived.getTime()
              }
            }
            emit([dateReceived, doc._id])
          }
        }
      },
    },
  },
} as DesignDocument<any>
