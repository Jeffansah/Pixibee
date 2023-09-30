"use server";

import cloudinary from "cloudinary";

export const deletePicture = async (publicId: string) => {
  cloudinary.v2.uploader.destroy(publicId);
};
