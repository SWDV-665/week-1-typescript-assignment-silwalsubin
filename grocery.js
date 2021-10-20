var Grocery = /** @class */ (function () {
    function Grocery(id, name, quantity) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery;
}());
var groceryItems = [
    new Grocery(1, "Milk", 3),
    new Grocery(2, "Eggs", 18),
    new Grocery(3, "Bread", 1),
    new Grocery(5, "Chicken", 2),
    new Grocery(6, "Coffee", 1),
    new Grocery(7, "Green Tea", 2),
];
var htmlContent = '<h1>Grocery List Generated From grocery.ts</h1>';
var tableContent = '';
groceryItems.forEach(function (groceryItem) {
    tableContent = tableContent + ("\n    <tr>\n        <td>" + groceryItem.id + "</td>\n        <td>" + groceryItem.name + "</td>\n        <td>" + groceryItem.quantity + "</td>\n    </tr>\n    ");
});
if (tableContent !== '') {
    htmlContent = htmlContent + ("\n    <table>\n        <tr>\n            <th>Id</td>\n            <th>Name</td>\n            <th>Quantity</td>\n        </tr>\n        " + tableContent + "\n    </table>\n    ");
}
// render the data in html file
document.body.innerHTML = htmlContent;
