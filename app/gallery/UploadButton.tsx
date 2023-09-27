"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

const UploadButton = ({ results }: { results: {}[] }) => {
  const router = useRouter();

  return (
    <Button asChild>
      <CldUploadButton
        className=""
        uploadPreset="ui2omfid"
        onUpload={(result: UploadResult | any) => {
          if (result) router.refresh();
        }}
      >
        <ArrowUpTrayIcon className="w-5 h-5 mr-1.5" />
        Upload
      </CldUploadButton>
    </Button>
  );
};

export default UploadButton;
