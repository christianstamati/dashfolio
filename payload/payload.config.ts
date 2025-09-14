import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import {
	BlocksFeature,
	FixedToolbarFeature,
	lexicalEditor,
} from "@payloadcms/richtext-lexical";
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
import { Socials } from "./collections/Socials";
import { Teammates } from "./collections/Teammates";
import { Users } from "./collections/Users";
import { Writings } from "./collections/Writings";
import { Nav } from "./globals/nav";
import { SEO } from "./globals/seo";
import { plugins } from "./plugins";
import { getServerSideURL } from "./utils/getURL";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	email: nodemailerAdapter({
		defaultFromAddress: "hello@chri.dev",
		defaultFromName: "Christian Stamati",
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
		livePreview: {
			breakpoints: [
				{
					label: "Mobile",
					name: "mobile",
					width: 375,
					height: 667,
				},
				{
					label: "Tablet",
					name: "tablet",
					width: 768,
					height: 1024,
				},
				{
					label: "Desktop",
					name: "desktop",
					width: 1440,
					height: 900,
				},
			],
		},
	},
	cors: [getServerSideURL()].filter(Boolean),
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
		Socials,
	],
	globals: [Nav, SEO],
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
	plugins: [...plugins],
});
