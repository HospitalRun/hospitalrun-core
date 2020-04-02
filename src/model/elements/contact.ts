import { Type, Static } from '@sinclair/typebox'

export const ContactTypeScema = Type.Union(
  [Type.Literal('home'), Type.Literal('work'), Type.Literal('temporary'), Type.Literal('old')],
  { description: 'Type of contact/address.' },
)

export const ContactSchema = Type.Object({
  type: ContactTypeScema,
  name: Type.Optional(Type.String({ description: 'Custom name of the conctact/person.' })),
  phone: Type.Optional(Type.String({ description: 'Must be valid phone number.' })),
  email: Type.Optional(Type.String({ description: 'Must be valid email.', format: 'email' })),
})

export type Contact = Static<typeof ContactSchema>
export type ContactType = Static<typeof ContactTypeScema>
