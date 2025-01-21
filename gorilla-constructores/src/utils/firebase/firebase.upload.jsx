import { Fragment, useEffect, useState } from "react"
import { imgDB } from "./firebase.config";
import { v4 } from "uuid";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { uploadDB } from "./firebase.config";
import { ref } from "firebase/storage";

import './firebase.style.css';

const StoreImgFirebase = () => {
    const [caption, setCaption] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleUpload = (e) => {
        console.log(e.target.files[0]);
        const imgs = ref(imgDB, `imgs/${v4()}`);
        uploadBytes(imgs, e.target.files[0]).then(data => {
            getDownloadURL(data.ref).then(val => {
                setImg(val);
            })
        })
    }

    const delay = async (ms) => {
        return new Promise((resolve) =>
        setTimeout(resolve, ms));
    }

    const handleClick = async () => {
        alert('Guardando...')
        const valRef = collection(uploadDB, 'imgData')
        await addDoc(valRef, { captionValue: caption, titleValue: title, imgUrl: img })
        alert('La imagen fue guardada exitosamente')

    }

    const getData = async () => {
        const valRef = collection(imgDB, 'imgData');
        const dataDb = await getDocs(valRef);
        const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }))
        setData(allData)
    }


    return (
        <Fragment>
            <div className='upload-box'>
                <h2>A&ntilde;ade tus fotos para la galer&iacute;a</h2><br />
                <label>Descripi&oacute;n: <input onChange={(e) => setCaption(e.target.value)} /></label><br />
                <label>T&iacute;tulo: <input onChange={(e) => setTitle(e.target.value)}></input></label><br />
                <label>Foto: <input type="file" onChange={(e) => handleUpload(e)} /></label><br /><br /><br /><br />
                <button onClick={handleClick}>Subir</button><br /><br /><br /><br />
            </div>
        </Fragment>
    )
};

export default StoreImgFirebase;