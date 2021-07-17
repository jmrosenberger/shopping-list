const shoppingList = [
    {
        id: 1,
        name: "milk",
        price: 3.00,
        quantity: 1,
        store: "publix",
        section: "dairy",
        frequency: 7,
        brand: "publix",
        dateCreated: function() {
            const date = new Date();
            const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
            const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
            return (shoppingList.dateCreated(currentDate))
        }
    },
    {
        id: 2,
        name: "eggs",
        price: 2.50,
        quantity: 2,
        store: "publix",
        section: "dairy",
        frequency: 7,
        brand: "publix",
        dateCreated: function() {
            const date = new Date();
            const [ month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
            const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
            return (shoppingList.dateCreated(currentDate))
        }
    },
    {
        id: 3,
        name: "pizza rolls",
        price: 4.45,
        quantity: 2,
        store: "publix",
        section: "frozen foods",
        frequency: 7,
        brand: "publix",
        dateCreated: function() {
            const date = new Date();
            const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
            const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
            return (shoppingList.dateCreated(currentDate))
        }
    },
    {
        id: 4,
        name: "protein",
        price: 65.00,
        quantity: 1,
        store: "publix",
        section: "misc",
        frequency: 7,
        brand: "publix",
        dateCreated: function() {
            const date = new Date();
            const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
            const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
            return (shoppingList.dateCreated(currentDate))
        }
    }
]


const toiletPaper = {
        name: "toilet paper",
        price: 10.00,
        quantity: 12,
        store: "publix",
        section: "paper goods",
        frequency: 7,
        brand: "publix",
        dateCreated: function() {
            const date = new Date();
            const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
            const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
            return (shoppingList.dateCreated(currentDate))
        }
    };
    

const addToShoppingList = (listItem) => {
    const lastIndex = shoppingList.length - 1
    const currentLastListItem = shoppingList[lastIndex]
    const maxId = currentLastListItem.id
    const idForNewListItem = maxId + 1

    listItem.id = idForNewListItem
    shoppingList.push(listItem)
    
}

addToShoppingList(toiletPaper)

for (const listItem of shoppingList) {
    console.log(`The ${listItem.name} cost $${listItem.price} and can be
     found in the ${listItem.section} section.`)
}

console.log(shoppingList)

