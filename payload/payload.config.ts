import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { seoPlugin } from "@payloadcms/plugin-seo";
import {
	BlocksFeature,
	FixedToolbarFeature,
	lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import nodemailer from "nodemailer";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { env } from "@/env/server";
import { example } from "./blocks/example/config";
import { Categories } from "./collections/Categories";
import { Companies } from "./collections/Companies";
import { Inquiries } from "./collections/Inquiries";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import { Projects } from "./collections/Projects";
import { Roles } from "./collections/Roles";
import { Teammates } from "./collections/Teammates";
import { Users } from "./collections/Users";
import { Writings } from "./collections/Writings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	email: nodemailerAdapter({
		defaultFromAddress: "hello@chri.dev",
		defaultFromName: "Dashfolio Website",
		// Any Nodemailer transport can be used
		transport: nodemailer.createTransport({
			host: env.SMTP_HOST,
			port: 587,
			auth: {
				user: env.SMTP_USER,
				pass: env.SMTP_PASSWORD,
			},
		}),
	}),
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [
		Users,
		Pages,
		Categories,
		Projects,
		Writings,
		Media,
		Inquiries,
		Companies,
		Roles,
		Teammates,
	],
	editor: lexicalEditor({
		features: ({ defaultFeatures }) => {
			return [
				...defaultFeatures,
				FixedToolbarFeature(),
				BlocksFeature({ blocks: [example] }),
			];
		},
	}),
	secret: env.PAYLOAD_SECRET,
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db: mongooseAdapter({
		url: env.DATABASE_URL,
	}),
	sharp,
	plugins: [
		seoPlugin({
			collections: ["pages"],
		}),
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
