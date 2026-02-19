/**
 * Capitalizes the first letter of each word in a string.
 * @param str The string to be capitalized.
 * @returns A string containing the capitalized first letter of each word.
 */
function capitalizeEachWord(str: string): string {
    return str.replace(/\b\w/g, letter => letter.toUpperCase());
}
