import { Type, Static } from '@sinclair/typebox'

import { DateTimeSchema } from '../primitives/date-time'

export const PeriodSchema = Type.Object({ start: DateTimeSchema, end: DateTimeSchema })

export type Period = Static<typeof PeriodSchema>
