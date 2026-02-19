/**
 * Parameterizes a given string by replacing placeholders with parameters.
 * @param str The string to be parameterized.
 * @param params The parameters to replace the placeholders with.
 * @returns A string containing the replaced placeholders.
 */
function parameterizeString(str: string, params: { [key: string]: string }): string {
    return str.replace(/{{\s*(\w+)\s*}}/g, (match, key) => params[key] || "");
}
