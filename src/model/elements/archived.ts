import { Type, Static } from '@sinclair/typebox'

export const ArchivedSchema = Type.Boolean({
  description: 'Archived resources will be filtered out by default.',
})

export type Archived = Static<typeof ArchivedSchema>
