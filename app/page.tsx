"use client";

import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <div className="flex flex-col justify-center min-h-screen items-center gap-y-2">
      <CldUploadButton
        className="bg-white text-black p-1 rounded-sm text-sm"
        uploadPreset="ui2omfid"
        onUpload={(result: UploadResult | any) => {
          setImageId(result.info.public_id);
        }}
      />
      {imageId && (
        <CldImage
          width={900}
          height={800}
          className="max-h-[300px] object-contain"
          src={imageId}
          alt="Description of my Image"
        />
      )}
    </div>
  );
}
