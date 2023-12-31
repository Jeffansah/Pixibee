"use server";

import cloudinary from "cloudinary";

export const MarkAsFavorite = async (publicId: string) => {
  cloudinary.v2.uploader.add_tag("favorite", [publicId]);
};

export const RemoveAsFavorite = async (publicId: string) => {
  cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
};
