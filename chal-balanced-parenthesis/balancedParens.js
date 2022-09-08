// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

const balancedParens = string => {
    left = 0
    right = 0

    for (i in string){
        if (string[i] === '('){
            left++
        }
        else if (string [i] === ')'){
            right++
        }
    }
    if (left === right) {
        return true
    } else {
        return false
    }
}

console.log(balancedParens(sample4))