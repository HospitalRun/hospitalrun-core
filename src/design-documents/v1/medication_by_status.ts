/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
import DesignDocument from '../design-document'

export default {
  _id: '_design/medication_by_status',
  views: {
    medication_by_status: {
      map(doc) {
        var doctype
        var uidx
        if (doc._id && (uidx = doc._id.indexOf('_')) > 0 && !doc.data.archived) {
          doctype = doc._id.substring(0, uidx)
          if (doctype === 'medication') {
            var { prescriptionDate } = doc.data
            if (prescriptionDate && prescriptionDate !== '') {
              prescriptionDate = new Date(prescriptionDate)
              if (prescriptionDate.getTime) {
                prescriptionDate = prescriptionDate.getTime()
              }
            }
            var { requestedDate } = doc.data
            if (requestedDate && requestedDate !== '') {
              requestedDate = new Date(requestedDate)
              if (requestedDate.getTime) {
                requestedDate = requestedDate.getTime()
              }
            }
            emit([doc.data.status, requestedDate, prescriptionDate, doc._id])
          }
        }
      },
    },
  },
} as DesignDocument<any>
