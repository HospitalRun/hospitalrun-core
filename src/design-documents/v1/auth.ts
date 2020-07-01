/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */
/* eslint-disable no-throw-literal */
import DesignDocument from '../design-document'

export default {
  _id: '_design/auth',
  validate_doc_update(newDoc, _, userCtx) {
    if (userCtx.roles.indexOf('_admin') !== -1 || userCtx.roles.indexOf('admin') !== -1) {
      if (newDoc._id.indexOf('_design') === 0 || newDoc._id === 'fhir_audit') {
        return
      }
    }
    if (newDoc._id.indexOf('_') !== -1) {
      var idParts = newDoc._id.split('_')
      if (idParts.length >= 3) {
        var allowedTypes = [
          'allergy',
          'appointment',
          'attachment',
          'billingLineItem',
          'customForm',
          'diagnosis',
          'imaging',
          'incCategory',
          'incidentNote',
          'incident',
          'invLocation',
          'invPurchase',
          'invRequest',
          'inventory',
          'invoice',
          'lab',
          'lineItemDetail',
          'lookup',
          'medication',
          'operationReport',
          'operativePlan',
          'option',
          'overridePrice',
          'patientNote',
          'patient',
          'payment',
          'photo',
          'priceProfile',
          'pricing',
          'procCharge',
          'procedure',
          'questionnaire',
          'questionnaireResponse',
          'report',
          'sequence',
          'userRole',
          'visit',
          'vital',
        ]
        if (allowedTypes.indexOf(idParts[0]) !== -1) {
          if (newDoc._deleted || newDoc.data) {
            return
          }
        }
      }
    }
    throw { forbidden: 'Invalid data' }
  },
} as DesignDocument<any>
