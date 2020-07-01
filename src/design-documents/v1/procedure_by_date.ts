/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
import DesignDocument from '../design-document'

export default {
  _id: '_design/procedure_by_date',
  views: {
    procedure_by_date: {
      map(doc) {
        var doctype
        var uidx
        if (doc._id && (uidx = doc._id.indexOf('_')) > 0 && !doc.data.archived) {
          doctype = doc._id.substring(0, uidx)
          if (doctype === 'procedure') {
            var { procedureDate } = doc.data
            if (procedureDate && procedureDate !== '') {
              procedureDate = new Date(procedureDate)
              if (procedureDate.getTime) {
                procedureDate = procedureDate.getTime()
              }
            }
            emit([procedureDate, doc._id])
          }
        }
      },
    },
  },
} as DesignDocument<any>
