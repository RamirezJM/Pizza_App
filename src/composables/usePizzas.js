import { ref, onMounted } from "vue";
import { getDocs, deleteDoc, doc } from "firebase/firestore";
import { dbPizzasRef } from "../firebase";


export function usePizzas() {
  const allPizzas = ref([])
  const message = ref('')

  async function getPizzas() {
    allPizzas.value = [];
    try {
      message.value = ''
      const docs = await getDocs(dbPizzasRef)
      docs.forEach((doc) => {
        const pizza = {
          id: doc.id,
          ...doc.data(),
        }
        allPizzas.value.push(pizza)
      })
    } catch (error) {
      message.value = `There was an error: ${error}. Please reload the page.`

    }
  }
  onMounted(getPizzas);

  async function deletePizza(id) {
    try {
      message.value = ''
      const pizza = doc(dbPizzasRef, id)
      await deleteDoc(pizza)
      getPizzas()
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