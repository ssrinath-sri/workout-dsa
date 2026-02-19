/**
 * Extracts a specified number of characters from a string.
 * @param str The string to be extracted from.
 * @param num The number of characters to be extracted.
 * @returns A string containing the extracted characters.
 */
function extractCharacters(str: string, num: number): string {
    return str.slice(0, num);
}
