import { Type, Static } from '@sinclair/typebox'

// reference: https://en.wikipedia.org/wiki/Patient#Outpatients_and_inpatients
export const PatientTypeSchema = Type.Union(
  [Type.Literal('out-patient'), Type.Literal('in-patient'), Type.Literal('day-patient')],
  {
    description:
      'An out-patient is a patient who is hospitalized for less than 24 hours. An in-patient on the other hand, is "admitted" to the hospital and stays overnight or for an indeterminate time, usually, several days or weeks, though in some extreme cases, such as with coma or persistent vegetative state, patients can stay in hospitals for years, sometimes until death. A day-patient is a patient who is using the full range of services of a hospital or clinic but is not expected to stay the night.',
  },
)

export type PatientType = Static<typeof PatientTypeSchema>
