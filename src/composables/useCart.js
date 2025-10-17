import {ref, computed} from 'vue'

export function useCart(){
  const cart = ref([])

const addToCart = (pizza, options) => {
 const idPizza = `${pizza.name}-${options.size}`
 console.log(idPizza)
 const existingPizza = cart.value.find(item => item.idPizza === idPizza)
  if (existingPizza) {
    existingPizza.quantity++
  }
  else {
    cart.value.push({
      name: pizza.name,
      size: options.size,
      price: options.price,
      quantity: 1,
      idPizza: idPizza
    })
  } 
}

const updateQuantity = (pizza, operation) => {
  if(operation === 'increment'){
    pizza.quantity++
  }
  else if(operation === 'decrement'){
    if(pizza.quantity > 0){
      pizza.quantity--
    }
    if(pizza.quantity === 0){
      cart.value = cart.value.filter(item => item.idPizza !== pizza.idPizza)
    }
  }
}

const cartTotal = computed(() => {
  return cart.value.reduce((sum, item) => {
    const itemSubTotal = item.price * item.quantity
    return sum + itemSubTotal
  }, 0)
})

return{
  cart,
  addToCart,
  updateQuantity,
  cartTotal
}
}