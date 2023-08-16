const iceCreams = [
{
    name: 'vanilla',
    price: 4,
    quantity: 0
},
{
    name: 'straw',
    price: 4,
    quantity: 0
}
]

const toppings = [
    {
        name: 'sprinkles',
        price: 2,
        quantity: 0
    },

    {
        name: 'gummies',
        price: 5,
        quantity: 0
    }
]

const vessels = [
    {
        name: 'waffle cone',
        price: 9,
        quantity: 0
    },
    {
        name: 'cups',
        price: 15,
        quantity: 0
    }
]

let cartElem = document.getElementById('cart')
let totalElem = document.getElementById('total')

function buyVanilla(){
    let vanilla = iceCreams.find(iceCream => iceCream.name == 'vanilla')
    vanilla.quantity++
    
    // console.log('buying vanilla', vanilla)
//     cartElem.innerHTML = `<div>
// //                 <span>${vanilla.name}</span>
// //                 <span>$${vanilla.price}</span>
// //             </div>`
drawCart()
}

function buyTopping(toppingName){
let foundTopping = toppings.find(top => top.name == toppingName)
foundTopping.quantity++
// console.log('buying topping', toppingName)
drawCart()
}

function buyIceCream(iceCreamName){
    let foundIceCream = iceCreams.find(icecream => icecream.name == iceCreamName)
    foundIceCream.quantity++
    // console.log('buying Ice Cream', foundIceCream)
    drawCart()
}

function buyVessels(vesselName){
    let foundVessel = vessels.find(vessel => vessel.name == vesselName)
    foundVessel.quantity++
    // console.log('buying vessels', vesselName)
    drawCart()
}



function drawCart(){
    let template = ''
    iceCreams.forEach(iceCream => {
        if(iceCream.quantity > 0){
            template += `<div>
                <span>${iceCream.name} x${iceCream.quantity}</span>
                <span>$${iceCream.price}</span>
            </div>`
        }
} )
    toppings.forEach(topping => {
        if(topping.quantity > 0){
            template += `<div>
                <span>${topping.name} x${topping.quantity}</span>
                <span>$${topping.price}</span>
                </div>`
        }
    })
    vessels.forEach(vessel => {
        if(vessel.quantity > 0){
            template += `<div>
                <span>${vessel.name} x${vessel.quantity}</span>
                <span>$${vessel.price}</span>
            </div>`
        }
    })
    cartElem.innerHTML = template
    drawTotal()
}

function drawTotal(){
    let total = 0 
    iceCreams.forEach(icecream => {
        if(icecream.quantity > 0){
            total += icecream.quantity * icecream.price
        }
    })
    toppings.forEach(top => {
        if(top.quantity > 0){
            total += top.quantity * top.price
        }
    })
    vessels.forEach(vessel => {
        if(vessel.quantity > 0){
            total += vessel.quantity * vessel.price
        }
    })
    totalElem.innerText = total.toString()
}

function checkout(){
    if(window.confirm('Are you ready to checkout?')){
        iceCreams.forEach(icecream => icecream.quantity = 0)
        toppings.forEach(vessel => vessel.quantity = 0)
        vessels.forEach(vessel => vessel.quantity = 0)
        drawCart()
    }
    
}