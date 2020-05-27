import { Type, Static } from '@sinclair/typebox'

import { BaseModelSchema } from './base'
import { DiagnosticReportStatusSchema } from './elements/diagnostic-report-status'
import { DiagnosticServiceCodesSchema } from './elements/diagnostic-service-codes'
import { createCodeableConcept } from './primitives/codeable-concept'
import { DateTimeSchema } from './primitives/date-time'

// reference: https://en.wikipedia.org/wiki/Medical_test
// imaging or lab requests
// based on https://www.hl7.org/fhir/diagnosticreport.html
// uses https://loinc.org
export const DiagnosticReportSchema = Type.Intersect([
  BaseModelSchema,
  Type.Object({
    resourceType: Type.Literal('diagnosticReport'),
    basedOn: Type.String({
      description: 'Details concerning a service requested.',
    }),
    status: DiagnosticReportStatusSchema,
    category: createCodeableConcept(
      DiagnosticServiceCodesSchema,
      Type.String({
        description:
          'Human readable classification for the clinical discipline, department or diagnostic service that created the report',
      }),
    ),
    code: createCodeableConcept(Type.String(), Type.String()),
    date: DateTimeSchema,
    requestedDate: DateTimeSchema,
    requestedById: Type.String({ description: 'Unique _id of the user that requested the test.' }),
    notes: Type.Optional(Type.String()),
    conclusion: Type.Optional(
      Type.String({
        description: 'Clinical conclusion (interpretation) of test results.',
      }),
    ),
    reportedBy: Type.Optional(Type.String({})),
    type: Type.Intersect([Type.Object({ _id: Type.String() }), Type.Map(Type.Any())]), // TODO: use proper test type schema instead of Any
    patientId: Type.String(),
    visitId: Type.Optional(Type.String()),
  }),
])

export type DiagnosticReport = Static<typeof DiagnosticReportSchema>
