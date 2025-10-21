import { getAuth, createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";

const modalOpen = ref(false)

export function useAuth() {
  const auth = getAuth()
  const errorMessage = ref('')
  const userData = ref(null)
  

  function toggleModal(){
    modalOpen.value = !modalOpen.value
  }

  async function signUp(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      errorMessage.value = ''
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage.value = 'The email already exists. Please try another one.'
          break;
        case 'auth/weak-password':
          errorMessage.value = 'The password must be at least 6 characters long.'
          break;
        default:
          errorMessage.value = 'There was an error. Please reload the page and try again.'
      }
    }
  }

  async function logIn(email, password) {
    if(!email) return errorMessage.value = 'Please enter a valid email.'
    if(!password) return errorMessage.value = 'Please enter a valid password.'
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      errorMessage.value = ''
      modalOpen.value = false
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          errorMessage.value = 'Incorrect password.'
          break;
        case 'auth/user-not-found':
          errorMessage.value = 'No user find with that email.'
          break;
        default:
          errorMessage.value = 'There was an error. Please reload the page and try again.'
      }
    }
  }

  function logOut(){
    try {
      signOut(auth)
    } catch (error) {
      errorMessage.value = error.message
      
    }
  }

  onAuthStateChanged(auth, (user) => {
    if(user){
      userData.value = user
    }else{
      userData.value = null
    }
  })

  return{ errorMessage, signUp, modalOpen,toggleModal, logIn, logOut, userData}
}