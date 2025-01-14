//This problem is focused on reversing a string
//Hint: Whenever you deal with a string just know you will use an array and do some kind of loop.

function reverse(str)
{
    // Check input
    if(!str || str.length < 2 || typeof str !== 'string')
    {
        return "Wrong man";
    }

    // Create the array to store the characters
    let backwards = [];

    // Get the length on the string
    const total = str.length - 1;

    // Decrement loop.
    for(let i = total; i >= 0; i--)
    {
        // No need for array split. JavaScript can split it just fine.
        backwards.push(str[i]);
    }

    return backwards.join('');
}

function optimalReverse(str)
{
    // Using Javascript methods
    return str.split('').reverse().join('');
}

// Can use this spreed operator and arrow function too
const reverseOneline = str => [...str].reverse().join('')

console.log(reverse("I am the terminator"));
console.log(optimalReverse("I am the terminator"));