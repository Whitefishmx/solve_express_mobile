interface format {
    currency: string;
    value: number | bigint | string;
}
function currencyFormatter({ currency, value }: format) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 2,
        currency,
    });
    return formatter.format(Number(value));
}

export { currencyFormatter };
