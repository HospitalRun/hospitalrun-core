import { Static } from '@sinclair/typebox'

import { DateTimeSchema } from '../primitives/date-time'

export const CreatedAtSchema = DateTimeSchema

export type CreatedAt = Static<typeof CreatedAtSchema>
