// Membantu generelasi slug
export function generateSlug(text: string) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export const sanitizeString = (value: string): boolean => {
    // Cegah tag HTML dan karakter berbahaya
    const blacklist = /<script.*?>.*?<\/script>|<.*?>|['"\\]/gi;
    return !blacklist.test(value);
};
