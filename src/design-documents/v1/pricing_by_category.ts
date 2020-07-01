/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
import DesignDocument from '../design-document'

export default {
  _id: '_design/pricing_by_category',
  views: {
    pricing_by_category: {
      map(doc) {
        var doctype
        var uidx
        if (doc._id && (uidx = doc._id.indexOf('_')) > 0 && !doc.data.archived) {
          doctype = doc._id.substring(0, uidx)
          if (doctype === 'pricing') {
            emit([doc.data.category, doc.data.name, doc.data.pricingType, doc._id])
          }
        }
      },
    },
  },
} as DesignDocument<any>
