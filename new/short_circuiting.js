// short-circuiting evaluation =>
// if the first value s truthy value it will be returned
// checking the second one
// console.log(110 || "beqa");
// console.log("" || "beqa");
// console.log(0 || undefined);
// console.log([] || "beqa");
// console.log(null || "beqa");

// console.log(null || undefined || 0 || "cc" || 10);

// restaurant = {};
// restaurant.numGuests = false;
// let guests = restaurant.numGuests || 0;
// console.log(guests);

//  AND operator also has a short circuiting

console.log(10 && 0);

//  when the first value is falsy, it doesn't even check the 2nd one, returns that 1st value
//  when the first is truthy value, 2nd value is returned in both cases when it's T or F

console.log(1 && 2 && 0 && 4);

//  when dealing with more than 2 values, it goes until the falsy value and returns it

console.log(1 && 2 && 3 && 4);
//  If all values are truthy, the last value is returned
person = {
    name: "Beqa",
};

const setAge = (object, age) => {
    object["age"] = age;
};

person.name && setAge(person, 23);

console.log(person);
