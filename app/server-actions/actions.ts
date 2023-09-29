"use server";

import cloudinary from "cloudinary";
import { SearchResult } from "../gallery/page";

export const addImageToAlbum = async (folder: string, image: SearchResult) => {
  await cloudinary.v2.api.create_folder(folder);

  let parts = image.public_id.split("/");

  if (parts.length > 1) {
    parts = parts.slice(1);
  }

  const public_id = parts.join("/");

  await cloudinary.v2.uploader.rename(
    image.public_id,
    `${folder}/${public_id}`
  );
};
