import { Type, Static } from '@sinclair/typebox'

export const DateTimeSchema = Type.String({ format: 'date-time' })

export type DateTime = Static<typeof DateTimeSchema>
