import { Type, Static } from '@sinclair/typebox'

import { BaseModelSchema } from './base'
import { DateTimeSchema } from './primitives/date-time'

export const IncidentSchema = Type.Intersect([
  BaseModelSchema,
  Type.Object({
    resourceType: Type.Literal('incident'),
    reportedBy: Type.String(),
    reportedOn: DateTimeSchema,
    code: Type.String(),
    date: DateTimeSchema,
    department: Type.String(),
    category: Type.String(),
    categoryItem: Type.String(),
    description: Type.String(),
  }),
])

export type Patient = Static<typeof IncidentSchema>
