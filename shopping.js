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


const trashBags = {
    name: "trash bags",
    price: 12.00,
    quantity: 2,
    store: "publix",
    section: "house",
    frequency: 7,
    brand: "Hefty"
}
    
    
    const addToShoppingList = (listItem) => {
        const lastIndex = shoppingList.length - 1
        const currentLastListItem = shoppingList[lastIndex]
        const maxId = currentLastListItem.id
        const idForNewListItem = maxId + 1
        
        listItem.id = idForNewListItem
        listItem.dateCreated = Date();
        shoppingList.push(listItem)     
    }
    
     
        
    
    
    
    
    
    
    addToShoppingList(toiletPaper)
    addToShoppingList(trashBags)








for (const listItem of shoppingList) {
    console.log(`The ${listItem.name} cost $${listItem.price} and can be
     found in the ${listItem.section} section.`)
}

console.log(shoppingList)



for (const listItem of shoppingList) {
    if (listItem.price > 8.00) {
        console.log(`Might need to wait to buy ${listItem.name}. It costs too much.`)
    } else if (listItem.price <= 8.00) {
        console.log(`${listItem.name} is ok to purchase this week.`)
    } else {
        console.log("Don't worry about shopping, there's nothing I need or can afford.")
    }
}