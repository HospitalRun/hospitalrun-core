/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
import DesignDocument from '../design-document'

export default {
  _id: '_design/inventory_purchase_by_expiration_date',
  views: {
    inventory_purchase_by_expiration_date: {
      map(doc) {
        var doctype
        var uidx
        if (doc._id && (uidx = doc._id.indexOf('_')) > 0 && !doc.data.archived) {
          doctype = doc._id.substring(0, uidx)
          if (doctype === 'invPurchase') {
            var { expirationDate } = doc.data
            if (expirationDate && expirationDate !== '') {
              expirationDate = new Date(expirationDate)
              if (expirationDate.getTime) {
                expirationDate = expirationDate.getTime()
              }
            }
            emit([expirationDate, doc._id])
          }
        }
      },
    },
  },
} as DesignDocument<any>
