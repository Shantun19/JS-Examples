let people = [
    { name: 'John' },
    { name: 'Alice' },
    { name: 'Bob' }
];

let sortBy = 'name'; // kis property se appko sort karna h 
let sortDirection = 'asc'; // kis direction me sort karna h 

// Key function to extract the value to sort by
let keyValue = (person) => {
    if (sortBy === 'name') { // that means we have sort by its name property.
        // person[name] = Alice
        return person[sortBy];  // Returns the 'name' field of each person
    }
};

let isReverse = sortDirection === 'asc' ? 1 : -1; // 1 

// sort is a arrow unction that will taking 2 object as parameter.
// personA = { name: 'Alice' }
// personB = { name: 'John' }
people.sort((personA, personB) => {
    let x = keyValue(personA) ? keyValue(personA) : ''; // Alice
    let y = keyValue(personB) ? keyValue(personB) : ''; // Jhon
    console.log('(x > y)' , (x > y));
    console.log('(y > x)' , (y > x));
    console.log('isReverse * ((x > y) - (y > x))' , isReverse * ((x > y) - (y > x)));
    return isReverse * ((x > y) - (y > x));
});

console.log(people);
