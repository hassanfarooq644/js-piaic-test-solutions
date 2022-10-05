function sandwich(items) {
    var selected = "|";
    items.map((item) => {
        selected += item + "|";
    })
    console.log("Person Selected " + selected + " on his sandwich")
}

sandwich(["Cheese", "Onion", "Chicken"])
sandwich(["Cheese", "Hard-boiled egg", "Sause"])
sandwich(["Cheese", "tikka", "masala"]) 