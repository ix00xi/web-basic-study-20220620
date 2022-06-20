let test = 10;

main();

function add(x, y) {
    return x + y;
}

function main() {
    let num1 = 10;
    let num2 = 20;

    let result = add(10,20);
    console.log("결과: " +  result);

    console.log(test);

    let add2 = function(x , y) {
        return x + y;
    }

    result = add2(num1, num2);
    console.log("결과2: " +  result);

    result = function(x, y) {return x + y} (num1, num2);
    console.log("결과3: " + result) 
}

