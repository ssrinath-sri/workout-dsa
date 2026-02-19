/**
 * Converts a given string into camel case.
 * @param str The string to be converted into camel case.
 * @returns A string containing the camel case version of the input string.
 */
function camelizeString(str: string): string {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        return + (match === " " ? "" : match[index + 1].toUpperCase());
    });
}
