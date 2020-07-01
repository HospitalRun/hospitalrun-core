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

// {
//   "resourceType" : "DiagnosticReport",
//   // from Resource: id, meta, implicitRules, and language
//   // from DomainResource: text, contained, extension, and modifierExtension
//   "identifier" : [{ Identifier }], // Business identifier for report
//   "basedOn" : [{ Reference(CarePlan|ImmunizationRecommendation|
//    MedicationRequest|NutritionOrder|ServiceRequest) }], // What was requested
//   "status" : "<code>", // R!  registered | partial | preliminary | final +
//   "category" : [{ CodeableConcept }], // Service category
//   "code" : { CodeableConcept }, // R!  Name/Code for this diagnostic report
//   "subject" : { Reference(Patient|Group|Device|Location) }, // The subject of the report - usually, but not always, the patient
//   "encounter" : { Reference(Encounter) }, // Health care event when test ordered
//   // effective[x]: Clinically relevant time/time-period for report. One of these 2:
//   "effectiveDateTime" : "<dateTime>",
//   "effectivePeriod" : { Period },
//   "issued" : "<instant>", // DateTime this version was made
//   "performer" : [{ Reference(Practitioner|PractitionerRole|Organization|
//    CareTeam) }], // Responsible Diagnostic Service
//   "resultsInterpreter" : [{ Reference(Practitioner|PractitionerRole|
//    Organization|CareTeam) }], // Primary result interpreter
//   "specimen" : [{ Reference(Specimen) }], // Specimens this report is based on
//   "result" : [{ Reference(Observation) }], // Observations
//   "imagingStudy" : [{ Reference(ImagingStudy) }], // Reference to full details of imaging associated with the diagnostic report
//   "media" : [{ // Key images associated with this report
//     "comment" : "<string>", // Comment about the image (e.g. explanation)
//     "link" : { Reference(Media) } // R!  Reference to the image source
//   }],
//   "conclusion" : "<string>", // Clinical conclusion (interpretation) of test results
//   "conclusionCode" : [{ CodeableConcept }], // Codes for the clinical conclusion of test results
//   "presentedForm" : [{ Attachment }] // Entire report as issued
// }
