//身份驗證，並儲存身份
import {initializeApp} from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBzWMwBC0VRUXqxs1ioCU2qKZZR1Lftlyk",
    authDomain: "crwn-clothing-6d3c6.firebaseapp.com",
    projectId: "crwn-clothing-6d3c6",
    storageBucket: "crwn-clothing-6d3c6.appspot.com",
    messagingSenderId: "392622516418",
    appId: "1:392622516418:web:bddc43beb41e9af656335b"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const db = getFirestore();

//建立使用者文件
export const createUserDocumentFromAuth = async(userAuth)=>{
    const useDocRef = doc(db,'user',userAuth.uid);

    const userSnapshot = await getDoc(useDocRef);
    
    if(!userSnapshot.exists()){
        // 用戶不存在
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(useDocRef,{
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log("Error creating the user", error.message);
        }
    }
    //若有用戶，直接return
    return useDocRef;
}