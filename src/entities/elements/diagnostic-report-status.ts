import { Type, Static } from '@sinclair/typebox'

export enum Codes {
  registered = 'registered',
  partial = 'partial',
  preliminary = 'preliminary',
  final = 'final',
  amended = 'amended',
  corrected = 'corrected',
  appended = 'appended',
  cancelled = 'cancelled',
  inError = 'entered-in-error',
  unknown = 'unknown',
}

// based on https://www.hl7.org/fhir/valueset-diagnostic-report-status.html#expansion
export const DiagnosticReportStatusSchema = Type.Enum(Codes, {
  type: 'string',
  description: 'The status of the diagnostic report.',
})

export type DiagnosticReportStatus = Static<typeof DiagnosticReportStatusSchema>
