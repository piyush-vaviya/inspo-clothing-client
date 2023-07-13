import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
import Avatar from "react-avatar-edit";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

export default function Contact() {
  const [imageCrop, setImageCrop] = useState(false);
  const [profile, setProfile] = useState([]);
  const [preview, setPreview] = useState(false);
  const [image, setImage] = useState(
    "https://thefederal.com/wp-content/uploads/2022/06/rashmika-jpeg-696x928.jpg"
  );

  const imageUpdate = (e) => {
    let file = e.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(
        "https://thefederal.com/wp-content/uploads/2022/06/rashmika-jpeg-696x928.jpg"
      );
    }
  };

  const profileFinal = profile.map((item) => item.preview);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  const saveCropImage = () => {
    setProfile([...profile, { preview }]);
    setImageCrop(false);
  };

  return (
    <div className="contact text-center p-4">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          src={profileFinal.length ? profileFinal : image}
          alt=""
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid green",
          }}
          onClick={() => setImageCrop(true)}
        />
        <label htmlFor="" className="mt-3 font-bold text-5xl">
          Piyush Vaviya
        </label>
        <Dialog
          visible={imageCrop}
          header={() => {
            <p>Update Profile</p>;
          }}
          onHide={() => setImageCrop(false)}
          border={"50%"}
        >
          <Avatar
            className="d-flex flex-column justify-content-center align-items-center"
            width={168}
            height={250}
            onCrop={onCrop}
            onClose={onClose}
            src={false}
            shadingColor={"#474649"}
            backgroundColor={"green"}
          />
          <div className="d-flex flex-column align-items-center mt-1 w-4">
            <div className="d-flex justify-content-around mt-1">
              <Button
                onClick={saveCropImage}
                label="Save"
                className="pi pi-check"
              />
            </div>
          </div>
        </Dialog>
        <InputText
          type="file"
          accept="/image/*"
          onChange={imageUpdate}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}
