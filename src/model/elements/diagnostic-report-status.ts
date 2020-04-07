import { Type, Static } from '@sinclair/typebox'

// based on https://www.hl7.org/fhir/valueset-diagnostic-report-status.html#expansion
export const DiagnosticReportStatusSchema = Type.Union([
  Type.Literal('registered'),
  Type.Literal('partial'),
  Type.Literal('preliminary'),
  Type.Literal('final'),
  Type.Literal('amended'),
  Type.Literal('corrected'),
  Type.Literal('appended'),
  Type.Literal('cancelled'),
])

export type DiagnosticReportStatus = Static<typeof DiagnosticReportStatusSchema>
