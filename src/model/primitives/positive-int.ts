import { Type, Static } from '@sinclair/typebox'

export const PositiveIntSchema = Type.Number({ minimum: 0 })

export type PositiveInt = Static<typeof PositiveIntSchema>
