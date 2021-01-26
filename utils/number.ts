
export function formatCurrency(num) {
    return 'CFA ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}