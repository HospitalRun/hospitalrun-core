import { Type, Static } from '@sinclair/typebox'

export const BloodGroupSchema = Type.Union([
  Type.Literal('A+'),
  Type.Literal('A-'),
  Type.Literal('B+'),
  Type.Literal('B-'),
  Type.Literal('O+'),
  Type.Literal('O-'),
  Type.Literal('AB+'),
  Type.Literal('AB-'),
])

export type BloodGroup = Static<typeof BloodGroupSchema>
