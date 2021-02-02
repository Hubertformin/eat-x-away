
export function formatCurrency(num) {
    if (typeof num !== "number" || !num) {
        return 0;
    }
    return 'CFA ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
