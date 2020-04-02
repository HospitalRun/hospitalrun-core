import { Type, Static } from '@sinclair/typebox'

import { ContactTypeScema } from './contact'

// reference: https://en.wikipedia.org/wiki/Address#Address_format
export const AddressSchema = Type.Object({
  type: ContactTypeScema,
  description: Type.Optional(Type.String()),
  name: Type.Optional(Type.String()),
  address1: Type.String(),
  address2: Type.Optional(Type.String()),
  district: Type.Optional(Type.String({ description: 'Can be Province/District.' })), // Province
  city: Type.String(),
  state: Type.Optional(Type.String({ description: 'Can be County/Region/State.' })),
  postalCode: Type.Optional(
    Type.String({ description: 'Valid postal code for the current country.' }),
  ),
  country: Type.String(),
  // refernce: https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes
  countryCode: Type.String({ description: 'Must be valid Alpha-2 code.' }),
})

export type Address = Static<typeof AddressSchema>
