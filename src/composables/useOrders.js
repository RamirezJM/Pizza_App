import { onMounted, ref } from "vue";
import { query, orderBy, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { dbOrdersRef } from "../firebase";

export function useOrders() {
  const allOrders = ref([])
  const message = ref('')

  async function getOrders() {
    allOrders.value = []

    try {
      const queryData = query(dbOrdersRef, orderBy('createdAt', 'desc'))
      const docs = await getDocs(queryData)
      docs.forEach((doc) => {
        const order = {
          id: doc.id,
          ...doc.data()
        }
        allOrders.value.push(order)
      })
    } catch (error) {
      console.error(error)

    }


  }

  onMounted(getOrders)

  async function deleteOrder(id) {
    try {
      const order = doc(dbOrdersRef, id)
      await deleteDoc(order)
      getOrders()
      message.value = `The order with id: ${id} was deleted.`
      setTimeout(() => {
        message.value = ''
      }, 3000)
      
    } catch (error) {
      message.value = `Error: ${error}. Please try again.`
      
    }
    
  }




  return {
    allOrders,
    getOrders,
    message, 
    deleteOrder
  }
}