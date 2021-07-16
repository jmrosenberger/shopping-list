const shoppingList = [
    {
        id: 1,
        name: "milk",
        price: 3.00
    },
    {
        id: 2,
        name: "eggs",
        price: 2.50
    },
    {
        id: 3,
        name: "pizza rolls",
        price: 4.45
    },
    {
        id: 4,
        name: "protein",
        price: 65.00
    }
]

// console.log(shoppingList);

const toiletPaper = {
        name: "toilet paper",
        price: 10.00
};


const addToShoppingList = (listItem) => {
    const lastIndex = shoppingList.length - 1
    const currentLastListItem = shoppingList[lastIndex]
    // const maxId = currentLastListItem.id
    const idForNewListItem = currentLastListItem.id + 1

    listItem.id = idForNewListItem
    shoppingList.push(listItem)
}

addToShoppingList(toiletPaper)

console.log(shoppingList)

for (const listItem of shoppingList) {
    console.log(shoppingList)
    
}