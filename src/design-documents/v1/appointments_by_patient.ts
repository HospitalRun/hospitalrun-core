/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
import DesignDocument from '../design-document'

export default {
  _id: '_design/appointments_by_patient',
  views: {
    appointments_by_patient: {
      map(doc) {
        var doctype
        var uidx
        if (doc._id && (uidx = doc._id.indexOf('_')) > 0 && !doc.data.archived) {
          doctype = doc._id.substring(0, uidx)
          if (doctype === 'appointment') {
            var { endDate } = doc.data
            if (endDate && endDate !== '') {
              endDate = new Date(endDate)
              if (endDate.getTime) {
                endDate = endDate.getTime()
              }
            }
            var { startDate } = doc.data
            if (startDate && startDate !== '') {
              startDate = new Date(startDate)
              if (startDate.getTime) {
                startDate = startDate.getTime()
              }
            }
            emit([doc.data.patient, startDate, endDate, doc._id])
          }
        }
      },
    },
  },
} as DesignDocument<any>
