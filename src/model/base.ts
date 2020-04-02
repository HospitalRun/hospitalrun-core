import { Type, Static } from '@sinclair/typebox'
import { ArchivedSchema } from './elements/archived'

export const BaseModelSchema = Type.Object({
  _id: Type.String(),
  _rev: Type.Optional(Type.String()),
  archived: ArchivedSchema,
})

export type BaseModel = Static<typeof BaseModelSchema>
