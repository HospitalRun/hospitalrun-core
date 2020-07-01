/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
import DesignDocument from '../design-document'

export default {
  _id: '_design/visit_by_discharge_date',
  views: {
    visit_by_discharge_date: {
      map(doc) {
        var doctype
        var uidx
        if (doc._id && (uidx = doc._id.indexOf('_')) > 0 && !doc.data.archived) {
          doctype = doc._id.substring(0, uidx)
          if (doctype === 'visit') {
            var { endDate } = doc.data
            if (endDate && endDate !== '') {
              endDate = new Date(endDate)
              if (endDate.getTime) {
                endDate = endDate.getTime()
              }
            }
            emit([endDate, doc._id])
          }
        }
      },
    },
  },
} as DesignDocument<any>
