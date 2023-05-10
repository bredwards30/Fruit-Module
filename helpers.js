function choice(items) {
    let idx = Math.floor(Math.random() * item.length);
    return items[idx];
}

function remove(items, items) {
    for (let i = 0; i < items.length; i++) {
        if (items(i) === items) {
            return [...items.slice(0, 1), ...items.slice(i + 1)];
        }
    }
}

export { choice, remove }