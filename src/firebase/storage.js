import { storage } from "./config";
import { ref, uploadBytes } from "firebase/storage";

//Upload an image to firebase storage

export const uploadImageToFirebase = async (file) => {
  //   const fileRef = storageRef.child(file.name);
  //   await fileRef.put(file).then((snapshot) => {
  //     console.log("Uploaded a blob or file!");
  //   });
  //   return await fileRef.getDownloadURL();
  const storageRef = ref(storage, file.name);
  uploadBytes(storageRef, file)
    .then((snapshot) => {
      console.log("Uploaded a blob or file!");
    })
    .catch((error) => {
      console.log("unexcpected", error);
    });
};
