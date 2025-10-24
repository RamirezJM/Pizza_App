import { ref, computed, watch } from 'vue'
import { addDoc } from 'firebase/firestore'
import { dbOrdersRef } from '../firebase'
import { useAuth } from '../composables/useAuth'


export function useCart() {
  const cart = ref([])
  const cartMessage = ref('The cart is empty')
  const { userData } = useAuth()
  const logInMessage = ref('')
  watch(userData, () => {
    logInMessage.value = ''
  })

  const addToCart = (pizza, options) => {
    const idPizza = `${pizza.name}-${options.size}`
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
    if (operation === 'increment') {
      pizza.quantity++
    }
    else if (operation === 'decrement') {
      if (pizza.quantity > 0) {
        pizza.quantity--
      }
      if (pizza.quantity === 0) {
        cart.value = cart.value.filter(item => item.idPizza !== pizza.idPizza)
      }
    }
  }

  const cartTotal = computed(() => {
    return cart.value.reduce((sum, item) => {
      const itemSubTotal = item.price * item.quantity
      return sum + itemSubTotal
    }, 0)
  });

  async function addNewOrder() {

    try {
      if (userData.value) {
        const user = {
          id: userData.value.uid, 
          email: userData.value.email
        }
        const order = {
          user,
          createdAt: new Date(),
          pizzas: cart.value,
        }
        await addDoc(dbOrdersRef, order)
        cart.value = []
        cartMessage.value = 'Thank you, your order has been placed!'
        setTimeout(() => {
          cartMessage.value = 'The cart is empty'
        }, 3000)

      } else {
        logInMessage.value = 'Please log in to place an order'
      }


    } catch (error) {
      cartMessage.value = `${error}, Please try again.`
    }
  }

  return {
    cart,
    addToCart,
    updateQuantity,
    cartTotal,
    addNewOrder,
    cartMessage,
    logInMessage,
  }
}