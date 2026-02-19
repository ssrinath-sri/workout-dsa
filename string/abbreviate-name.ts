/**
 * Converts a string into abbreviated form.
 * @param str The string to be abbreviated.
 * @returns A string containing the abbreviated form of the input string.
 */
function abbreviateName(str: string): string {
    const words = str.split(" ");
    const abbreviatedName = words.map(word => word[0]).join("");
    return abbreviatedName;
}
