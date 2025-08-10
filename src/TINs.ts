export type TCountryCode =
  | 'UA'
  | 'DE'
  | 'FR'
  | 'IT'
  | 'ES'
  | 'PL'
  | 'CZ'
  | 'RO'
  | 'LT'
  | 'NL'
  | 'UK_NIN'
  | 'UK_UTR'
  | 'US_SSN'
  | 'US_ITIN'
  | 'US_EIN'
  | 'CA_SIN'
  | 'CA_BN'

export type TINMatch = {
  countryCode: TCountryCode
  label: string
  regex: RegExp
}

export const REGEX_UA_TIN = /^\d{10}$/
export const REGEX_DE_TIN = /^\d{11}$/
export const REGEX_FR_TIN = /^\d{13}$/
export const REGEX_IT_TIN = /^[A-Z]{6}\d{2}[A-EHLMPRST]\d{2}[A-Z]\d{3}[A-Z]$/
export const REGEX_ES_TIN = /^[XYZ]?\d{7}[A-Z]$/
export const REGEX_PL_TIN = /^\d{10}$/
export const REGEX_CZ_TIN = /^CZ\d{8,10}$/
export const REGEX_RO_TIN = /^\d{2,10}$/
export const REGEX_LT_TIN = /^\d{11}$/
export const REGEX_NL_TIN = /^\d{9}$/
export const REGEX_UK_NIN = /^[A-CEGHJ-PR-TW-Z]{2}\d{6}[A-D]?$/
export const REGEX_UK_UTR = /^\d{10}$/
export const REGEX_US_SSN = /^\d{3}-\d{2}-\d{4}$/
export const REGEX_US_ITIN = /^9\d{2}-\d{2}-\d{4}$/
export const REGEX_US_EIN = /^\d{2}-\d{7}$/
export const REGEX_CA_SIN = /^\d{3}-\d{3}-\d{3}$/
export const REGEX_CA_BN = /^\d{9}[A-Z]{2}\d{4}$/

export function validateTIN(codeTIN: string, country: TCountryCode): boolean {
  const regexMap: Record<TCountryCode, RegExp> = {
    UA: REGEX_UA_TIN,
    DE: REGEX_DE_TIN,
    FR: REGEX_FR_TIN,
    IT: REGEX_IT_TIN,
    ES: REGEX_ES_TIN,
    PL: REGEX_PL_TIN,
    CZ: REGEX_CZ_TIN,
    RO: REGEX_RO_TIN,
    LT: REGEX_LT_TIN,
    NL: REGEX_NL_TIN,
    UK_NIN: REGEX_UK_NIN,
    UK_UTR: REGEX_UK_UTR,
    US_SSN: REGEX_US_SSN,
    US_ITIN: REGEX_US_ITIN,
    US_EIN: REGEX_US_EIN,
    CA_SIN: REGEX_CA_SIN,
    CA_BN: REGEX_CA_BN,
  }

  const regex = regexMap[country]
  return regex?.test(codeTIN) ?? false
}

export const patternsTinCountry: TINMatch[] = [
  { countryCode: 'UA', label: 'Україна', regex: REGEX_UA_TIN },
  { countryCode: 'DE', label: 'Німеччина', regex: REGEX_DE_TIN },
  { countryCode: 'FR', label: 'Франція', regex: REGEX_FR_TIN },
  { countryCode: 'IT', label: 'Італія', regex: REGEX_IT_TIN },
  { countryCode: 'ES', label: 'Іспанія', regex: REGEX_ES_TIN },
  { countryCode: 'PL', label: 'Польща', regex: REGEX_PL_TIN },
  { countryCode: 'CZ', label: 'Чехія', regex: REGEX_CZ_TIN },
  { countryCode: 'RO', label: 'Румунія', regex: REGEX_RO_TIN },
  { countryCode: 'LT', label: 'Литва', regex: REGEX_LT_TIN },
  { countryCode: 'NL', label: 'Нідерланди', regex: REGEX_NL_TIN },
  { countryCode: 'UK_NIN', label: 'Велика Британія (NIN)', regex: REGEX_UK_NIN },
  { countryCode: 'UK_UTR', label: 'Велика Британія (UTR)', regex: REGEX_UK_UTR },
  { countryCode: 'US_SSN', label: 'США (SSN)', regex: REGEX_US_SSN },
  { countryCode: 'US_ITIN', label: 'США (ITIN)', regex: REGEX_US_ITIN },
  { countryCode: 'US_EIN', label: 'США (EIN)', regex: REGEX_US_EIN },
  { countryCode: 'CA_SIN', label: 'Канада (SIN)', regex: REGEX_CA_SIN },
  { countryCode: 'CA_BN', label: 'Канада (BN)', regex: REGEX_CA_BN },
]

export function detectTINCountry(codeTIN: string): TINMatch | null {
  return patternsTinCountry.find(({ regex }) => regex.test(codeTIN)) ?? null
}
