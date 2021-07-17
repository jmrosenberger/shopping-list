const shoppingList = [
    {
        id: 1,
        name: "milk",
        price: 3.00,
        quantity: 1,
        store: "publix",
        section: "dairy",
        frequency: 7,
        brand: "publix"
    },
    {
        id: 2,
        name: "eggs",
        price: 2.50,
        quantity: 2,
        store: "publix",
        section: "dairy",
        frequency: 7,
        brand: "publix"
    },
    {
        id: 3,
        name: "pizza rolls",
        price: 4.45,
        quantity: 2,
        store: "publix",
        section: "frozen foods",
        frequency: 7,
        brand: "publix"
    },
    {
        id: 4,
        name: "protein",
        price: 65.00,
        quantity: 1,
        store: "publix",
        section: "misc",
        frequency: 7,
        brand: "publix"
    }
]


const toiletPaper = {
        name: "toilet paper",
        price: 10.00,
        quantity: 12,
        store: "publix",
        section: "paper goods",
        frequency: 7,
        brand: "publix"
};


const addToShoppingList = (listItem) => {
    const lastIndex = shoppingList.length - 1
    const currentLastListItem = shoppingList[lastIndex]
    const idForNewListItem = currentLastListItem.id + 1

    listItem.id = idForNewListItem
    shoppingList.push(listItem)
    
}

addToShoppingList(toiletPaper)

console.log(shoppingList)

