"use server";

import cloudinary from "cloudinary";
import { SearchResult } from "../gallery/page";

export const addImageToAlbum = async (folder: string, image: SearchResult) => {
  await cloudinary.v2.api.create_folder(folder);

  await cloudinary.v2.uploader.rename(
    image.public_id,
    `${folder}/${image.public_id}`
  );
};
