import { Type, Static } from '@sinclair/typebox'
import { BaseModelSchema } from './base'
import { DateTimeSchema } from './primitives/date-time'
import { DiagnosticReportStatusSchema } from './elements/diagnostic-report-status'

// reference: https://en.wikipedia.org/wiki/Medical_test
// imaging or lab requests
// based on https://www.hl7.org/fhir/diagnosticreport.html
// uses https://loinc.org
export const DiagnosticReportSchema = Type.Intersect([
  BaseModelSchema,
  Type.Object({
    resourceType: Type.Literal('diagnosticReport'),
    date: DateTimeSchema,
    requestedDate: DateTimeSchema,
    requestedById: Type.String({ description: 'Unique _id of the user that requested the test.' }),
    notes: Type.Optional(Type.String()),
    report: Type.Optional(
      Type.String({
        description:
          'This field can be used to express further comments and considerations on the results of the test.',
      }),
    ),
    reportedBy: Type.Optional(Type.String({})),
    status: DiagnosticReportStatusSchema,
    type: Type.Intersect([Type.Object({ _id: Type.String() }), Type.Map(Type.Any())]), // TODO: use proper test type schema instead of Any
    patientId: Type.String(),
    visitId: Type.Optional(Type.String()),
  }),
])

export type DiagnosticReport = Static<typeof DiagnosticReportSchema>
