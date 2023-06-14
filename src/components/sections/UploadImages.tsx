import { useCallback, useState } from "react";
import { type FileWithPath, useDropzone } from "react-dropzone";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { useUploadThing } from "~/utils/upload";
import { Button } from "../ui/Button";
import { api } from "~/utils/api";
import Show from "../functional/Show";
import Link from "next/link";

const UploadImages = () => {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
  }, []);

  const fileTypes = ["image"];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  const { startUpload } = useUploadThing({
    endpoint: "imageUploader",
    onClientUploadComplete: () => {
      alert("uploaded successfully!");
    },
    onUploadError: () => {
      alert("error occurred while uploading");
    },
  });

  const uploadedImages = api.user.getUploadedImages.useQuery();

  return (
    <div>
      <p>Upload your images here.</p>
      <div {...getRootProps()} className="mb-5">
        <div
          className="mx-auto my-2 flex h-40 w-full flex-col items-center justify-center gap-3 
            rounded-md border-2 border-dotted border-primary-600 p-2"
        >
          <input {...getInputProps()} />
          Drop files here!
          <div>
            {files.length > 0 && (
              <Button
                variant={"outline"}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (!files) return;

                  void startUpload(files);
                  setFiles([]);
                  alert("uploading!");
                }}
              >
                Upload {files.length} files
              </Button>
            )}
          </div>
        </div>
      </div>
      <div>
        <Show when={uploadedImages.data != undefined}>
          {/* todo fix TS errors */}
          <p>Uploaded images:</p>
          <ul className="ml-5 list-disc break-all">
            {uploadedImages.data?.uploaded_images.map((image) => (
              <li key={image} className="list-item">
                <Link
                  href={image}
                  target="_blank"
                  className="text-accent-400 underline"
                >
                  {image.substring(63)}
                </Link>
              </li>
            ))}
          </ul>
          <p className="pt-5">
            To insert images into markdown:{" "}
            <pre className="inline">![alt text](image link)</pre>
          </p>
        </Show>
      </div>
    </div>
  );
};

export default UploadImages;
