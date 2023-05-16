const unitTypes = Object.freeze({
    C: 'celsius',
    F: 'fahrenheit',
});

export function units(value) {
    if (!value) return '';
    return unitTypes[value];
}

export function capitalize(value) {
    if (!value) return '';
    value = value.toString();
    return value.toUpperCase();
}
