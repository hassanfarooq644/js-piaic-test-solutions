let car;
const add_car_value = (manf_name, model, args) => { //arbitary is an arr
    car = {
        manufacturer: manf_name,
        model: model,
        Exra: args,
    }
}
add_car_value("Ford", 17, { color: "red", price: 2100000 })
console.log(car);
