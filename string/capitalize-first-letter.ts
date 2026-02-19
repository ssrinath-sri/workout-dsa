/**
 * Capitalizes the first letter of a string.
 * @param str The string to be capitalized.
 * @returns A string containing the capitalized first letter.
 */
function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
