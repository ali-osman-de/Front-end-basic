
var a = prompt("First number: "); var b = prompt("Second number: ")

function IsCheck(a,b){
    if (a == b) {
        alert("a is equal to b")
    }
    else if (a > b) {
        alert("a is higher than b")
    }
    else if (b > a) {
        alert("b is higher than a")
    }
    else{
        alert("Something went wrong!")
    }
}

IsCheck(a,b)