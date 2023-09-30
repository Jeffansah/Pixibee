"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

const Page = ({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) => {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "bgremove"
    | "zoompan"
    | "darken"
  >();

  const [open, setOpen] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const [pendingPrompt, setPendingPrompt] = useState("");

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit Photo</h1>
        </div>
        <div className="flex gap-4 flex-wrap whitespace-nowrap">
          <Button
            variant={"ghost"}
            onClick={() => setTransformation(undefined)}
          >
            Clear All
          </Button>
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => {
                setOpen(!open);
              }}
            >
              Generative Fill (In Beta)
            </Button>
            {open && (
              <div className="relative">
                <Input
                  value={pendingPrompt}
                  onChange={(e) => setPendingPrompt(e.currentTarget.value)}
                  placeholder="Enter a prompt"
                ></Input>
                <Button
                  variant={"secondary"}
                  className="w-9 h-6 absolute right-2 top-2"
                  onClick={() => {
                    setAiPrompt(pendingPrompt);
                    setTransformation("generative-fill");
                  }}
                >
                  Go
                </Button>
              </div>
            )}
          </div>

          <Button onClick={() => setTransformation("blur")}>Blur</Button>
          <Button onClick={() => setTransformation("grayscale")}>
            Grayscale
          </Button>
          <Button onClick={() => setTransformation("pixelate")}>
            Pixelate
          </Button>
          <Button onClick={() => setTransformation("bgremove")}>
            Remove Background
          </Button>
          <Button onClick={() => setTransformation("zoompan")}>
            Zoom and Pan
          </Button>
          <Button onClick={() => setTransformation("darken")}>Darken</Button>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <CldImage src={publicId} width={300} height={200} alt={publicId} />
          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              width={600}
              height={500}
              alt={publicId}
              crop="pad"
              fillBackground={{
                prompt: aiPrompt,
              }}
            />
          )}
          {transformation === "blur" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt={publicId}
              blur="400"
            />
          )}
          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt={publicId}
              grayscale
            />
          )}
          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt={publicId}
              pixelate
            />
          )}
          {transformation === "bgremove" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt={publicId}
              removeBackground
            />
          )}
          {transformation === "zoompan" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt={publicId}
              zoompan="loop"
            />
          )}
          {transformation === "darken" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt={publicId}
              opacity="50"
            />
          )}
        </div>

        <div className="flex gap-4"></div>
      </div>
    </section>
  );
};

export default Page;
