const splitBunches = (arr) => {
    const result = [];
    arr.forEach((item) => {
        let quantity = item.quantity;
        while (quantity > 1) {
            result.push({ name: item.name, quantity: 1 });
            quantity = --item.quantity;
        }
        result.push({ name: item.name, quantity: 1 });
    });
    return result;
};

module.exports = splitBunches;

// Test

const result = splitBunches([
    {
        name: 'currants',
        quantity: 1
    },
    {
        name: 'grapes',
        quantity: 2
    },
    {
        name: 'bananas',
        quantity: 2
    }
]);

console.log(result);
