import type { Media, MediaBlock as MediaBlockProps } from "@payload-types";
import Image from "next/image";
import getPayload from "@/payload/lib/get-payload";

function isString<T>(obj: string | T) {
  return typeof obj === "string";
}

async function findMedia(id: string) {
  const payload = await getPayload();
  return (await payload.findByID({ collection: "media", id })) as Media;
}

export default async function Component(props: MediaBlockProps) {
  const media = isString(props.media)
    ? await findMedia(props.media)
    : props.media;

  const isVideo = media.mimeType?.includes("video");

  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-lg shadow-xl">
        {isVideo ? (
          <video autoPlay controls={false} loop muted playsInline>
            <source src={media.url!} />
          </video>
        ) : (
          <Image
            className="w-full object-cover"
            src={media.url!}
            alt={media.alt}
            width={media.width!}
            height={media.height!}
          ></Image>
        )}
      </div>
      {props.caption && (
        <div className="w-full p-1 text-center text-sm">{props.caption}</div>
      )}
    </div>
  );
}
