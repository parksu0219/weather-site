const INIT_COUNTRY_LIST = [
    "Korea",
    "Japan",
    "America",
    "Switzerland",
    "France",
    "Austria",
    "Finland",
    "Italy",
];

type CountryEmojiType = { [key in string]: string };

export const COUNTRY_EMOJI = {
    Korea: "🇰🇷",
    Japan: "🇯🇵",
    America: "🇺🇸",
    France: "🇫🇷",
    Switzerland: "🇨🇭",
    Austria: "🇦🇹",
    Finland: "🇫🇮",
    Italy: "🇮🇹",
} as CountryEmojiType;

export const countryEmoji = (country: string) => {
    switch (country) {
        case "Korea":
            return "🇰🇷";
        case "Japan":
            return "🇯🇵";
        case "America":
            return "🇺🇸";
        case "France":
            return "🇫🇷";
        case "Switzerland":
            return "🇨🇭";
        case "Austria":
            return "🇦🇹";
        case "Finland":
            return "🇫🇮";
        case "Italy":
            return "🇮🇹";
        default:
            return "";
    }
};