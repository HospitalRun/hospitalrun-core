/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
import DesignDocument from '../design-document'

export default {
  _id: '_design/inventory_by_friendly_id',
  views: {
    inventory_by_friendly_id: {
      map(doc) {
        var doctype
        var uidx
        if (doc._id && (uidx = doc._id.indexOf('_')) > 0 && !doc.data.archived) {
          doctype = doc._id.substring(0, uidx)
          if (doctype === 'inventory') {
            emit([doc.data.friendlyId, doc._id])
          }
        }
      },
    },
  },
} as DesignDocument<any>
