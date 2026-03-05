/**
 * Input Sanitization Utilities
 * Protects against XSS, script injection, and phishing attacks
 */

/**
 * Sanitize a string by removing HTML tags and dangerous characters.
 * Prevents XSS (Cross-Site Scripting) attacks.
 * @param {string} str - The input string to sanitize
 * @returns {string} - The sanitized string
 */
export function sanitizeText(str) {
    if (typeof str !== 'string') return '';

    return str
        // Remove HTML tags
        .replace(/<[^>]*>/g, '')
        // Encode dangerous characters to HTML entities
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
        // Remove null bytes
        .replace(/\0/g, '')
        .trim();
}

/**
 * Sanitize an email address: validate format and remove dangerous characters.
 * @param {string} email - The email string to sanitize
 * @returns {string} - The sanitized email
 */
export function sanitizeEmail(email) {
    if (typeof email !== 'string') return '';

    // Remove any HTML tags first
    let cleaned = email.replace(/<[^>]*>/g, '').trim();

    // Remove any characters that are not valid in email addresses
    // Valid: alphanumeric, @, ., _, -, +
    cleaned = cleaned.replace(/[^a-zA-Z0-9@._\-+]/g, '');

    return cleaned;
}

/**
 * Validate email format using a standard regex pattern.
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
export function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

/**
 * Sanitize all fields of a form data object.
 * @param {Object} formData - The form data object with key-value pairs
 * @returns {Object} - The sanitized form data
 */
export function sanitizeFormData(formData) {
    const sanitized = {};

    for (const [key, value] of Object.entries(formData)) {
        if (key === 'email') {
            sanitized[key] = sanitizeEmail(value);
        } else {
            sanitized[key] = sanitizeText(value);
        }
    }

    return sanitized;
}

/**
 * Check if a string contains potentially dangerous patterns.
 * Used for additional validation before submission.
 * @param {string} str - The string to check
 * @returns {boolean} - True if the string looks suspicious
 */
export function containsSuspiciousContent(str) {
    if (typeof str !== 'string') return false;

    const suspiciousPatterns = [
        /<script\b/i,           // Script tags
        /javascript:/i,          // JavaScript protocol
        /on\w+\s*=/i,            // Event handlers (onclick=, onerror=, etc.)
        /data:\s*text\/html/i,   // Data URI with HTML
        /vbscript:/i,            // VBScript protocol
        /expression\s*\(/i,      // CSS expression
        /url\s*\(/i,             // CSS url() — can be used for injection
    ];

    return suspiciousPatterns.some((pattern) => pattern.test(str));
}
