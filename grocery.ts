class Grocery {
    id: number;
    name: string; 
    quantity: number;
        
    constructor(id: number, name: string, quantity: number) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }
}

const groceryItems = [
    new Grocery(1, "Milk", 3),
    new Grocery(2, "Eggs", 18),
    new Grocery(3, "Bread", 1),
    new Grocery(5, "Chicken", 2),
    new Grocery(6, "Coffee", 1),
    new Grocery(7, "Green Tea", 2),
];

let htmlContent = '<h1>Grocery List Generated From grocery.ts</h1>';
let tableContent = '';
groceryItems.forEach(groceryItem => {
    tableContent = tableContent + `
    <tr>
        <td>${groceryItem.id}</td>
        <td>${groceryItem.name}</td>
        <td>${groceryItem.quantity}</td>
    </tr>
    `;
});

if (tableContent !== '') {
    htmlContent = htmlContent + `
    <table>
        <tr>
            <th>Id</td>
            <th>Name</td>
            <th>Quantity</td>
        </tr>
        ${tableContent}
    </table>
    `;
}

// render the data in html file
document.body.innerHTML = htmlContent;