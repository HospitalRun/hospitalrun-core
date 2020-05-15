import { Type, Static } from '@sinclair/typebox'

export const DateSchema = Type.String({ format: 'date', example: '1970-08-07' })

export type Date = Static<typeof DateSchema>
