//This problem is focused on reversing a string
//Hint: Whenever you deal with a string just know you will use an array and do some kind of loop.

function reverse(str)
{
    // Check input
    if(!str || str.length < 2 || typeof str !== 'string')
    {
        return "Wrong man";
    }

    let backwards = [];

    const total = str.length - 1;

    for(let i = total; i = 0; i--)
    {
        backwards.push(str[i]);
    }

    return backwards.join('');
}