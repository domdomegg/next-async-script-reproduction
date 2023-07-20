globalThis.loadOrder.push('9')

setTimeout(() => {
    alert(`Complete order: ${globalThis.loadOrder}`)
}, 1000)