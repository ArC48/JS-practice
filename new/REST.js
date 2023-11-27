// Destructuring

// SPREAD because it's on the right side of =
const arr = [1,2, ...[3,4]]

// REST because it's on the left side of =
const [a,b, ...others] = [1,2,3,4]
console.log(others);

const restaurant = {
    name: "Beqa's Georgiano",
    location: "Lion, France",
    categories: ["Georgian Dish", "Pizzeria", "Vegeratian", "Organic"],
    starterMenu: ["Khinkali", "Mtsvadi", "Tonis Bread", "Gvino"],
    mainMenu: ["Qababi", "Shmababi", "Babi"],
    openingHours: {
        mon: {
            open: 10,
            close: 23
        },
        tue: {
            open: 11,
            close: 23
        },
        wed: {
            open: 9,
            close: 23
        },
        sat: {
            open: 12,
            close: 19
        },
        sun: {
            open: 13,
            close: 20
        }
    },
    orderKhinkali: function(mainIngredient, ...otherIngredients){
        console.log(`You ordered ${mainIngredient}s Khinkali with: ${otherIngredients.length? otherIngredients:'nothing'}`);
    }
}

const [mainDish, , ,drink, ...otherFood] = [
    ...restaurant.mainMenu,
    restaurant.starterMenu[3],
    ...restaurant.starterMenu
]

console.log(drink, otherFood);

// Objects

const { sat, sun, ...weekdays} = restaurant.openingHours

console.log(weekdays);

// 2) Functions

const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    };
    console.log(sum);
}

add(2,3);
add(2,3,6,9,1,2);
add();

const nums = [1,2,3,4,5,6,7,8,9]
add(...nums)

restaurant.orderKhinkali('Xorci', 'morcxvi mwvanili')