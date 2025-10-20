import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";


export function useAuth() {
  const auth = getAuth()
  const errorMessage = ref('')

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
  return{ errorMessage, signUp}
}