import type { MediaBlock as MediaBlockProps } from "@payload-types";
import Image from "next/image";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function Component(props: MediaBlockProps) {
  const payload = await getPayload({ config: configPromise });
  const media = await payload.findByID({
    collection: "media",
    id: props.media as string,
  });

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
