import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({
  cloud_name: `dvu3vetmv`,
  api_key: `299451499664253`,
  api_secret: `IqDbId4MKKsVPiAeOz_nfCWNLow`
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    fs.unlinkSync(localFilePath); // Remove temporary file even on error
    return null;
  }
};



export { uploadOnCloudinary };
