import { Type, Static } from '@sinclair/typebox'

// reference: https://en.wikipedia.org/wiki/Sex_and_gender_distinction
export const SexSchema = Type.Union(
  [Type.Literal('male'), Type.Literal('female'), Type.Literal('intersex')],
  {
    description:
      "Person's biological sex, tide to the anatomy of an individual's reproductive system and secondary sex characteristics.",
  },
)

export type Sex = Static<typeof SexSchema>
