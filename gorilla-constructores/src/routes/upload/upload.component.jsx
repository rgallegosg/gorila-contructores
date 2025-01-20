import { Fragment } from "react"
import StoreImgFirebase from "../../utils/firebase/firebase.upload";

const UploadPage = () => {
    return (
        <Fragment>
            <div style={{ minHeight: 400 }}>
                <StoreImgFirebase></StoreImgFirebase>
            </div>
        </Fragment>
    )
};

export default UploadPage;