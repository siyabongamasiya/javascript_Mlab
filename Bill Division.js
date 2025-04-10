//initial
function bonAppetit(bill, k, b) {
    // Write your code here
    // Calculate total cost of all items
    let totalCost = bill.reduce((acc, item) => acc + item, 0);
    
    // Calculate the cost that Anna should pay (excluding the item she didn't eat)
    let annaShare = (totalCost - bill[k]) / 2;

    // check If Brian overpaid
    if (b > annaShare) {
        console.log(b - annaShare);
    } else {
        console.log("Bon Appetit");
    }
}