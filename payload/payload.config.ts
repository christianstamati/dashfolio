import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { env } from "@/env/server";
import { Companies } from "./collections/Companies";
import { Inquiries } from "./collections/Inquiries";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import { Projects } from "./collections/Projects";
import { Users } from "./collections/Users";
import { Footer } from "./globals/Footer";
import { Menu } from "./globals/Menu";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [Users, Pages, Projects, Media, Inquiries, Companies],
	globals: [Menu, Footer],
	editor: lexicalEditor(),
	secret: env.PAYLOAD_SECRET,
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db: mongooseAdapter({
		url: env.DATABASE_URL,
	}),
	sharp,
	plugins: [
		s3Storage({
			clientUploads: true,
			collections: {
				media: {
					prefix: "media",
					generateFileURL: ({ filename, prefix }) => {
						return `https://${env.S3_BUCKET}.s3.${env.S3_REGION}.amazonaws.com/${prefix}/${filename}`;
					},
				},
			},
			bucket: env.S3_BUCKET,
			config: {
				credentials: {
					accessKeyId: env.S3_ACCESS_KEY_ID,
					secretAccessKey: env.S3_SECRET_ACCESS_KEY,
				},
				region: env.S3_REGION,
			},
		}),
	],
});
