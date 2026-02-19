/**
 * Hides email addresses to prevent unauthorized access.
 * @param email The email address to be hidden.
 * @returns A string containing the hidden email address.
 */
function hideEmailAddress(email: string): string {
    const [username, domain] = email.split("@");
    const hiddenUsername = username.slice(0, 2) + "*****";
    return `${hiddenUsername}@${domain}`;
}
