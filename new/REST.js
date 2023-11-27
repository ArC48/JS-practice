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

