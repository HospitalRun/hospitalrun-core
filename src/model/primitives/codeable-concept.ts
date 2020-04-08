import { Type, TEnum, TString, TObject } from '@sinclair/typebox'

export function createCodeableConcept<T extends string | number>(
  coding: TEnum<T>,
  text: TString,
): TObject<{
  coding: TEnum<T>
  text: TString
}>
export function createCodeableConcept(
  coding: TString,
  text: TString,
): TObject<{
  coding: TString
  text: TString
}>
export function createCodeableConcept(
  coding: any,
  text: TString,
): TObject<{
  coding: any
  text: TString
}> {
  return Type.Object({
    coding,
    text,
  })
}
