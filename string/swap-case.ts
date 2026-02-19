/**
 * Swaps the case of each letter in a given string.
 * @param str The string to have its case swapped.
 * @returns A string containing the swapped case of each letter.
 */
function swapCase(str: string): string {
    return str.replace(/[A-Z]|[\a-z]/g, letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase());
}
