import { Type, Static } from '@sinclair/typebox'

import { BaseModelSchema } from './base'
import { DiagnosisTypeSchema } from './elements/diagnosis-type'
import { ICDCodeTypeSchema } from './elements/icd-code'
import { DateTimeSchema } from './primitives/date-time'

export const DiagnosisSchema = Type.Intersect([
  BaseModelSchema,
  Type.Object({
    resourceType: Type.Literal('diagnosis'),
    active: Type.Boolean(),
    date: DateTimeSchema,
    description: Type.String(),
    patientId: Type.String(),
    type: DiagnosisTypeSchema,
    ICDCode: ICDCodeTypeSchema,
  }),
])

export type Diagnosis = Static<typeof DiagnosisSchema>
