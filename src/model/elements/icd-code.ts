import { Type, Static } from '@sinclair/typebox'

export const ICDCodeTypeSchema = Type.Union(
  [Type.Literal('ICD-10-CM'), Type.Literal('ICD-9-CM'), Type.Literal('ICD-10-PCS')],
  {
    description: 'ICD version used.',
  },
)

// reference: https://en.wikipedia.org/wiki/International_Statistical_Classification_of_Diseases_and_Related_Health_Problems
export const ICDCodeSchema = Type.Object(
  {
    type: ICDCodeTypeSchema,
    name: Type.String(),
    value: Type.String(),
  },
  {
    description:
      'The International Classification of Diseases (ICD) is the international "standard diagnostic tool for epidemiology, health management and clinical purposes." Its full official name is International Statistical Classification of Diseases and Related Health Problems.',
  },
)

export type ICDCode = Static<typeof ICDCodeSchema>
export type ICDCodeType = Static<typeof ICDCodeTypeSchema>
