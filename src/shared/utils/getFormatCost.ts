export function getFormatCost(cost: number): string {
    return new Intl.NumberFormat("ru-RU").format(cost); 
}