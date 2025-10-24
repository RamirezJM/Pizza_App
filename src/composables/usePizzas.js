import { ref, onMounted, onUnmounted } from "vue";
import { getDocs, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { dbPizzasRef } from "../firebase";


export function usePizzas() {
  const allPizzas = ref([])
  const message = ref('')
  const unsuscribePizzas = ref()

  async function getPizzas() {
    
    try {
      
      message.value = '';
      const unsuscribe = onSnapshot(dbPizzasRef, (docs) => {
        allPizzas.value = [];
        docs.forEach((doc) => {
        const pizza = {
          id: doc.id,
          ...doc.data(),
        }
        allPizzas.value.push(pizza)
      })

      })
     /*  const docs = await getDocs(dbPizzasRef)
      docs.forEach((doc) => {
        const pizza = {
          id: doc.id,
          ...doc.data(),
        }
        allPizzas.value.push(pizza)
      }) */
     unsuscribePizzas.value = unsuscribe
    } catch (error) {
      message.value = `There was an error: ${error}. Please reload the page.`

    }
  }
  onMounted(getPizzas);
  onUnmounted(() => {
    unsuscribePizzas.value()
  })

  async function deletePizza(id) {
    try {
      message.value = ''
      const pizza = doc(dbPizzasRef, id)
      await deleteDoc(pizza)
    /*   getPizzas() */
    } catch (error) {
      message.value = `There was an error deleting the pizza: ${error}. Please try again.`


    }
  }

  return {
    allPizzas,
    deletePizza,
    message
  }
}