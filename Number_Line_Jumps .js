//initial
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    //positional difference
    let difference = 0
    //find infront and faster kangaroos
    let k1Infront = (x1-x2 > 0)
    let k2Infront = (x2-x1 > 0)
    let k1Faster = (v1-v2 > 0)
    let k2Faster = (v2-v1 > 0)
    
    //find if will never catch or if can be at same position
    if((k1Infront && k1Faster) || (k2Infront && k2Faster)){
        return "NO"
    }else{
        do{
            x1 += v1
            x2 += v2
            difference = k2Infront ? x2 -x1 : x1-x2
        }while(difference >0)
        return difference < 0 ? "NO" : "YES"
    }
}


//optimised
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    // If the kangaroos have the same speed and different starting points, they'll never meet
    if (v1 === v2) return x1 === x2 ? "YES" : "NO";

    // Check if they'll ever land on the same spot at the same time
    const jumps = (x2 - x1) / (v1 - v2);
    return jumps >= 0 && Number.isInteger(jumps) ? "YES" : "NO";
}
