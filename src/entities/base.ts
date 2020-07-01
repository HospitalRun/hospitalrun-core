import { Type, Static } from '@sinclair/typebox'

import { ArchivedSchema } from './elements/archived'
import { DateTimeSchema } from './primitives/date-time'

export const BaseModelSchema = Type.Object({
  _id: Type.String(),
  _rev: Type.Optional(Type.String()),
  archived: ArchivedSchema,
  createdAt: DateTimeSchema,
  modifiedAt: DateTimeSchema,
  modifiedBy: Type.String(),
})

export type BaseModel = Static<typeof BaseModelSchema>
