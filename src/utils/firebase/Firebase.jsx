//身份驗證，並儲存身份
import {initializeApp} from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword, //使用密碼及信箱建立帳戶
    signInWithEmailAndPassword,
    signOut, //登出
    onAuthStateChanged
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

//這裡使用google驗證，可引入FacebookAuthProvider>Facebook驗證
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
//google彈窗登入
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
//進入google驗證頁面，完成後會自動重定向(初始化)帶回我們的網頁，因此會刷新頁面
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);

export const db = getFirestore();

//建立使用者文件
export const createUserDocumentFromAuth = async(userAuth,additionalInformation={})=>{
    if(!userAuth) return; //以確保參數
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
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log("Error creating the user", error.message);
        }
    }
    //若有用戶，直接return
    return useDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email,password) => {
    if(!email || !password)return;
    
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async(email,password) => {
    if(!email || !password)return;
    
    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);