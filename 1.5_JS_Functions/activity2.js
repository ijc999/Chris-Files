let orderCount = 1;
const takeOrder = (topping) => {
    console.log(`Pizza with ${topping}`);
    orderCount++;
}
takeOrder(`Order ${orderCount} is`)

takeOrder();