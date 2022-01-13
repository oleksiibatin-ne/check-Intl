const getDirection = (locale) => {
    const number = 123456.789;
    const numberFormat = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "USD",
        numberingSystem: "latn"
    });

    const parts = numberFormat.formatToParts(number);
    const currencyIndex = parts.findIndex(part => part.type === "currency");
    const numberIndex = parts.findIndex(part => part.type === "integer" || part.type === "fraction");

    return [currencyIndex < numberIndex ? "left" : "right", numberFormat.format(number)];
};

const cases = [
    "ar",
    "ar-KW",
    "bg",
    "br",
    "ca",
    "cn",
    "cs",
    "da",
    "de",
    "el",
    "en",
    "en-NL",
    "en-US",
    "es",
    "es-US",
    "et",
    "fi",
    "fr",
    "fr-CA",
    "he",
    "hi",
    "hr",
    "hu",
    "hy",
    "id",
    "it",
    "iw",
    "ja",
    "ka",
    "ko",
    "lt",
    "lv",
    "mn",
    "ms",
    "nl",
    "no",
    "nt",
    "pl",
    "pt",
    "pt-BR",
    "ro",
    "ru",
    "sk",
    "sl",
    "sq",
    "sr",
    "sv",
    "th",
    "tr",
    "uk",
    "vi",
    "zh",
    "zh-Hant",
    "zh-TW"
];

let resLeft = 0;
let resRight = 0;

const table = document.createElement('TABLE');
table.border = '1';

const tableBody = document.createElement('TBODY');
table.appendChild(tableBody);

cases.forEach((locale) => {

    const [direction, formattedNumber] = getDirection(locale);

    const tr = document.createElement('TR');
    tableBody.appendChild(tr);

    const output = [locale, direction, formattedNumber];


    if (direction === "right") {
        resRight++;
    } else {
        resLeft++;
    }

    output.forEach((content) => {
        const td = document.createElement('TD');
        td.width = '75';
        td.appendChild(document.createTextNode("" + content));
        tr.appendChild(td);
    });
});


const tr = document.createElement('TR');
tableBody.appendChild(tr);
const totalRes = document.createElement('TD');
totalRes.width = '75';
totalRes.appendChild(document.createTextNode("In total:"));
tr.appendChild(totalRes);
const leftResult = document.createElement('TD');
leftResult.width = '75';
leftResult.appendChild(document.createTextNode("left:" + resLeft));
tr.appendChild(leftResult);
const rightResult = document.createElement('TD');
rightResult.width = '75';
rightResult.appendChild(document.createTextNode("right:" + resRight));
tr.appendChild(rightResult);


document.body.appendChild(table);

