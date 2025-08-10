"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectTINCountry = exports.patternsTinCountry = exports.validateTIN = exports.REGEX_CA_BN = exports.REGEX_CA_SIN = exports.REGEX_US_EIN = exports.REGEX_US_ITIN = exports.REGEX_US_SSN = exports.REGEX_UK_UTR = exports.REGEX_UK_NIN = exports.REGEX_NL_TIN = exports.REGEX_LT_TIN = exports.REGEX_RO_TIN = exports.REGEX_CZ_TIN = exports.REGEX_PL_TIN = exports.REGEX_ES_TIN = exports.REGEX_IT_TIN = exports.REGEX_FR_TIN = exports.REGEX_DE_TIN = exports.REGEX_UA_TIN = void 0;
exports.REGEX_UA_TIN = /^\d{10}$/;
exports.REGEX_DE_TIN = /^\d{11}$/;
exports.REGEX_FR_TIN = /^\d{13}$/;
exports.REGEX_IT_TIN = /^[A-Z]{6}\d{2}[A-EHLMPRST]\d{2}[A-Z]\d{3}[A-Z]$/;
exports.REGEX_ES_TIN = /^[XYZ]?\d{7}[A-Z]$/;
exports.REGEX_PL_TIN = /^\d{10}$/;
exports.REGEX_CZ_TIN = /^CZ\d{8,10}$/;
exports.REGEX_RO_TIN = /^\d{2,10}$/;
exports.REGEX_LT_TIN = /^\d{11}$/;
exports.REGEX_NL_TIN = /^\d{9}$/;
exports.REGEX_UK_NIN = /^[A-CEGHJ-PR-TW-Z]{2}\d{6}[A-D]?$/;
exports.REGEX_UK_UTR = /^\d{10}$/;
exports.REGEX_US_SSN = /^\d{3}-\d{2}-\d{4}$/;
exports.REGEX_US_ITIN = /^9\d{2}-\d{2}-\d{4}$/;
exports.REGEX_US_EIN = /^\d{2}-\d{7}$/;
exports.REGEX_CA_SIN = /^\d{3}-\d{3}-\d{3}$/;
exports.REGEX_CA_BN = /^\d{9}[A-Z]{2}\d{4}$/;
function validateTIN(codeTIN, country) {
    const regexMap = {
        UA: exports.REGEX_UA_TIN,
        DE: exports.REGEX_DE_TIN,
        FR: exports.REGEX_FR_TIN,
        IT: exports.REGEX_IT_TIN,
        ES: exports.REGEX_ES_TIN,
        PL: exports.REGEX_PL_TIN,
        CZ: exports.REGEX_CZ_TIN,
        RO: exports.REGEX_RO_TIN,
        LT: exports.REGEX_LT_TIN,
        NL: exports.REGEX_NL_TIN,
        UK_NIN: exports.REGEX_UK_NIN,
        UK_UTR: exports.REGEX_UK_UTR,
        US_SSN: exports.REGEX_US_SSN,
        US_ITIN: exports.REGEX_US_ITIN,
        US_EIN: exports.REGEX_US_EIN,
        CA_SIN: exports.REGEX_CA_SIN,
        CA_BN: exports.REGEX_CA_BN,
    };
    const regex = regexMap[country];
    return regex?.test(codeTIN) ?? false;
}
exports.validateTIN = validateTIN;
exports.patternsTinCountry = [
    { countryCode: 'UA', label: 'Україна', regex: exports.REGEX_UA_TIN },
    { countryCode: 'DE', label: 'Німеччина', regex: exports.REGEX_DE_TIN },
    { countryCode: 'FR', label: 'Франція', regex: exports.REGEX_FR_TIN },
    { countryCode: 'IT', label: 'Італія', regex: exports.REGEX_IT_TIN },
    { countryCode: 'ES', label: 'Іспанія', regex: exports.REGEX_ES_TIN },
    { countryCode: 'PL', label: 'Польща', regex: exports.REGEX_PL_TIN },
    { countryCode: 'CZ', label: 'Чехія', regex: exports.REGEX_CZ_TIN },
    { countryCode: 'RO', label: 'Румунія', regex: exports.REGEX_RO_TIN },
    { countryCode: 'LT', label: 'Литва', regex: exports.REGEX_LT_TIN },
    { countryCode: 'NL', label: 'Нідерланди', regex: exports.REGEX_NL_TIN },
    { countryCode: 'UK_NIN', label: 'Велика Британія (NIN)', regex: exports.REGEX_UK_NIN },
    { countryCode: 'UK_UTR', label: 'Велика Британія (UTR)', regex: exports.REGEX_UK_UTR },
    { countryCode: 'US_SSN', label: 'США (SSN)', regex: exports.REGEX_US_SSN },
    { countryCode: 'US_ITIN', label: 'США (ITIN)', regex: exports.REGEX_US_ITIN },
    { countryCode: 'US_EIN', label: 'США (EIN)', regex: exports.REGEX_US_EIN },
    { countryCode: 'CA_SIN', label: 'Канада (SIN)', regex: exports.REGEX_CA_SIN },
    { countryCode: 'CA_BN', label: 'Канада (BN)', regex: exports.REGEX_CA_BN },
];
function detectTINCountry(codeTIN) {
    return exports.patternsTinCountry.find(({ regex }) => regex.test(codeTIN)) ?? null;
}
exports.detectTINCountry = detectTINCountry;
