import { useEffect, useState } from "react"
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPasswor, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { getDownloadURL, ref , uploadBytes, deleteObject,getMetadata,updateMetadata } from "firebase/storage"
import { initializeApp } from "firebase/app";
import { authFirebase } from "../config/firebase";
import { getStorage } from 'firebase/storage';
import { Alert } from "react-bootstrap";
import { set } from "firebase/database"

const auth = getAuth();
const storage = getStorage();
// initialize

// export const uploadProfileImg = async (fileObject) => {
//     const imgRef = storageRef(storage, `profile_img/${fileObject.name}`)
//     const snapshot = await uploadBytes(imgRef, fileObject)
//     const url = await getDownloadURL(imgRef)
//     console.log(url)
//     return url
//   }

export function useAuth(){
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])
  return currentUser
}

export async function deletePhoto(currentUser){
  const fileRef = ref(storage, currentUser.uid + '.jpg');
  deleteObject(fileRef)
}


export async function upload(file,currentUser){
      const fileRef = ref(storage, currentUser.uid + '.png');
      const snapshot = await uploadBytes(fileRef,file);
      const photoURL = await getDownloadURL(fileRef);
      updateProfile(currentUser, {photoURL});
      alert('photo profile updated!')
      
}