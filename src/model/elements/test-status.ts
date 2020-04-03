import { Type, Static } from '@sinclair/typebox'

export const TestStatusSchema = Type.Union([
  Type.Literal('canceled'),
  Type.Literal('draft'),
  Type.Literal('requested'),
  Type.Literal('in-progress'),
  Type.Literal('completed'),
])

export type TestStatus = Static<typeof TestStatusSchema>
