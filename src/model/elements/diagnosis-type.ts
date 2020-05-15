import { Type, Static } from '@sinclair/typebox'

// reference: https://www.hcpro.com/HIM-324035-5707/QA-Primary-principal-and-secondary-diagnoses.html
export const DiagnosisTypeSchema = Type.Union(
  [Type.Literal('primary'), Type.Literal('principal'), Type.Literal('secondary')],
  {
    description:
      'The primary diagnosis is the most serious and/or resource-intensive during the hospitalization or the inDiagnosis encounter. Typically, the primary diagnosis and the principal diagnosis are the same diagnosis, but this is not necessarily always so. Principal diagnosis is defined as the condition, after study, which occasioned the admission to the hospital. A secondary diagnosis is a condition that coexist at the time of admission, or develop subsequently, and that affect the patient care during the current episode.',
  },
)

export type DiagnosisType = Static<typeof DiagnosisTypeSchema>
