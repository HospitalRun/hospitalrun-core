import { Type, Static } from '@sinclair/typebox'

export const AppointmentTypeSchema = Type.Union([
  Type.Literal('checkup'),
  Type.Literal('in-patient'),
  Type.Literal('emergency'),
  Type.Literal('follow up'),
  Type.Literal('routine'),
  Type.Literal('walk in'),
])

export type PatientType = Static<typeof AppointmentTypeSchema>
