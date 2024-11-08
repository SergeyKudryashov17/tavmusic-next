export function getShortText(text: string, length: number): string {
    return text.length > length
                ? text.slice(0, length) + '...' 
                : text
}