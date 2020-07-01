import { Type, Static } from '@sinclair/typebox'

import { BaseModelSchema } from './base'
import { PatientTypeSchema } from './elements/patient-type'
import { DateTimeSchema } from './primitives/date-time'

export const AppointmentSchema = Type.Intersect([
  BaseModelSchema,
  Type.Object({
    resourceType: Type.Literal('appointment'),
    type: PatientTypeSchema,
    startDateTime: DateTimeSchema,
    endDateTime: DateTimeSchema,
    location: Type.String(),
    reason: Type.String(),
    patientId: Type.String(),
  }),
])

export type Patient = Static<typeof AppointmentSchema>
