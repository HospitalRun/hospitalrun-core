import { Type, Static } from '@sinclair/typebox'

export const HumanNameSchema = Type.Object({
  prefix: Type.Optional(Type.String()),
  givenName: Type.String(),
  middleName: Type.Optional(Type.String()),
  familyName: Type.Optional(Type.String()),
  suffix: Type.Optional(Type.String()),
})

export type HumanName = Static<typeof HumanNameSchema>
