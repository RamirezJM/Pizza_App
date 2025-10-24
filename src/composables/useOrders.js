import { onMounted, ref, onUnmounted } from "vue";
import { query, orderBy, getDocs, doc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { dbOrdersRef } from "../firebase";

export function useOrders() {
  const allOrders = ref([])
  const message = ref('')
  const unsuscribeOrders = ref()

  async function getOrders() {
    
    try {
      const queryData = query(dbOrdersRef, orderBy('createdAt', 'desc'))
      const unsuscribe =  onSnapshot(queryData, (docs) => {
        allOrders.value = []
        docs.forEach((doc) => {
        const order = {
          id: doc.id,
          ...doc.data()
        }
        allOrders.value.push(order)
      })  
      })

      unsuscribeOrders.value = unsuscribe
     /*  
      const docs = await getDocs(queryData)
       */
    } catch (error) {
      console.error(error)

    }


  }

  onMounted(getOrders)
  onUnmounted(() => {
    unsuscribeOrders.value()
  })

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