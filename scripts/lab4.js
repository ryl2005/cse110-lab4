/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    // Check if inputs are numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }

    if (add) {
        return num1 + num2;
    } else {
        return false; // Test explicitly expects false here
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
    if (!Array.isArray(prices) || typeof discount !== 'number' || prices.length === 0) {
        return false;
    }

    const discounted = [];
    for (let i = 0; i < prices.length; i++) {
        // Use 'const' inside the block so it's fresh every iteration
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};