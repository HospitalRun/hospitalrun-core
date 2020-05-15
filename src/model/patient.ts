import { Type, Static } from '@sinclair/typebox'

import { BaseModelSchema } from './base'
import { AddressSchema } from './elements/address'
import { HumanNameSchema } from './elements/human-name'
import { ContactSchema } from './elements/contact'
import { SexSchema } from './elements/sex'
import { DateTimeSchema } from './primitives/date-time'
import { BloodGroupSchema } from './elements/blood-group'
import { PatientTypeSchema } from './elements/patient-type'

export const PatientSchema = Type.Intersect([
  BaseModelSchema,
  HumanNameSchema,
  Type.Object({
    resourceType: Type.Literal('patient'),
    code: Type.String({ description: 'Easy readable unique code.' }),
    type: PatientTypeSchema,
    status: Type.String(), // TODO: add status list
    sex: SexSchema,
    dateOfBirth: DateTimeSchema,
    isApproximateDateOfBirth: Type.Boolean(),
    gender: Type.Optional(
      Type.String({ description: 'May be any string and, if provided, is different from sex.' }),
    ),
    clinicId: Type.String(),
    bloodGroup: BloodGroupSchema,
    addresses: Type.Optional(Type.Array(AddressSchema)),
    contacts: Type.Optional(Type.Array(ContactSchema)),
    preferredLanguage: Type.Optional(Type.String()),
    occupation: Type.Optional(Type.String()), // TODO: add occupation list
    placeOfBirth: Type.Optional(Type.String()),
    religion: Type.Optional(Type.String()), // TODO: add religion list
    notes: Type.Optional(Type.String()),
  }),
])

export type Patient = Static<typeof PatientSchema>
