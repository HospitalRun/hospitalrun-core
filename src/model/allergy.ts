import { Type, Static } from '@sinclair/typebox'

import { BaseModelSchema } from './base'
import { ICDCodeTypeSchema } from './elements/icd-code'
import { DateTimeSchema } from './primitives/date-time'

export const AllergySchema = Type.Intersect([
  BaseModelSchema,
  Type.Object({
    description: Type.String(),
    active: Type.Boolean(),
    date: DateTimeSchema,
    patientId: Type.String(),
    ICDCode: ICDCodeTypeSchema,
  }),
])

export type Allergy = Static<typeof AllergySchema>
