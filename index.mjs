/**
 * Cleans and parses JSON string content
 * @param {string} content - The JSON string to clean
 * @returns {Object|null} Parsed JSON object or null if invalid
 */
function cleanJSON(content) {
    try {
        // Handle case where content is already an object
        if (typeof content === 'object') {
            return content;
        }

        // Remove any whitespace and newlines
        let cleanContent = content.trim();

        // If the content is wrapped in backticks, remove them
        cleanContent = cleanContent.replace(/^```json\s*|\s*```$/g, '');

        // Parse the cleaned content
        const parsedJSON = JSON.parse(cleanContent);
        return parsedJSON;
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
    }
}

export default cleanJSON;