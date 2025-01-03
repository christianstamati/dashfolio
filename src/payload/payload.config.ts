// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { Users } from "@/payload/collections/Users";
import { Media } from "@/payload/collections/Media";
import { it } from "@payloadcms/translations/languages/it";
import { en } from "@payloadcms/translations/languages/en";
import { env } from "@/env/server";
import { s3Storage } from "@payloadcms/storage-s3";
import { i18nConfig } from "@/i18n/i18n.config";
import { Pages } from "@/payload/collections/Pages";
import { Menu } from "@/payload/globals/Menu";
import { RichTextFeature } from "@/payload/globals/rich-text-feature";
import lexicalEditor from "@/payload/lexical-editor";
import { Projects } from "@/payload/collections/Projects";
import { Thoughts } from "@/payload/collections/Thoughts";
import { Categories } from "@/payload/collections/Categories";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: i18nConfig.locales,
    defaultLocale: i18nConfig.defaultLocale,
  },
  i18n: {
    supportedLanguages: { en, it },
    fallbackLanguage: "en",
  },
  collections: [Users, Media, Pages, Categories, Projects, Thoughts],
  globals: [Menu, RichTextFeature],
  editor: lexicalEditor,
  secret: env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: env.DATABASE_URI,
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: "media",
        },
      },
      bucket: env.AWS_BUCKET_NAME,
      config: {
        credentials: {
          accessKeyId: env.AWS_ACCESS_TOKEN,
          secretAccessKey: env.AWS_SECRET_TOKEN,
        },
        region: env.AWS_BUCKET_REGION,
      },
    }),
  ],
});
