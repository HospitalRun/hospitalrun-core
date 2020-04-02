import { Type, Static } from '@sinclair/typebox'

export const UriSchema = Type.String({ format: 'uri' })

export type Uri = Static<typeof UriSchema>
