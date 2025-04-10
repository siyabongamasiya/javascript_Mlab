//initial
function sockMerchant(n, ar) {
    // Write your code here
    let totalPairCount = 0
    //make values unique
    let uniqueValues = new Set(ar)
    
    //get pairs
    for(let value of uniqueValues){
        let num = ar.filter(item => item === value).length;
        totalPairCount += parseInt(num/2);
    }
    
    return totalPairCount
}