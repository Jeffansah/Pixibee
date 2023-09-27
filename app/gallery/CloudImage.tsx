"use client";

import { CldImage, CldUploadButton } from "next-cloudinary";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import cloudinary from "cloudinary";
import { MarkAsFavorite, RemoveAsFavorite } from "./actions";
import { useTransition, useState } from "react";
import { SearchResult } from "./page";

const CloudImage = (props: any & SearchResult) => {
  const [transition, startTransition] = useTransition();

  const isFavorited = props.imageResult.tags.includes("favorite");

  const [selected, setSelected] = useState(isFavorited);

  return (
    <div className="relative">
      <CldImage {...props} src={props.imageResult.public_id} />
      {selected ? (
        <SolidHeart
          onClick={() => {
            setSelected(false);
            startTransition(() => {
              selected
                ? RemoveAsFavorite(props.imageResult.public_id)
                : MarkAsFavorite(props.imageResult.public_id);
            });
          }}
          className="text-red-400 h-6 w-6 absolute top-2 right-2 cursor-pointer"
        />
      ) : (
        <HeartIcon
          onClick={() => {
            setSelected(true);
            startTransition(() => {
              selected
                ? RemoveAsFavorite(props.imageResult.public_id)
                : MarkAsFavorite(props.imageResult.public_id);
            });
          }}
          className=" h-6 w-6 absolute top-2 right-2 cursor-pointer transition hover:scale-110 ease-in-out duration-200"
        />
      )}
    </div>
  );
};

export default CloudImage;
