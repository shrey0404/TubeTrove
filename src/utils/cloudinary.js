import { v2 as cloudinary } from "cloudinary";
import fd from "fs"; // fs-- file system .. used to read , write and remove or alter any operations ..

// multer -- user files input krega server pr aur phir woh aage cloudinary ko use krega ..
// cloudinary -- mutler se files user se lekar local server pr item lekar aata hai like AWS-SDK types ..

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    // upload the fle on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("Successfully uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    fstat.unlinkSync(localFilePath); // remove the locally saved temporary file as the uploaded operation got failed ..
    return null;
  }
};

cloudinary.uploader.upload(
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" },
  function (error, result) {
    console.log(result);
  }
);
