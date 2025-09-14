/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
import type { SearchParams } from "@/app/(frontend)/[slug]/page";
import type { Page } from "../payload-types";
import ContactForm from "./contact-form/component";
import Hero from "./hero/component";
import LatestWritings from "./latest-writings/component";
import Newsletter from "./newsletter/component";
import ProjectSearch from "./project-search/component";
import { RichText } from "./rich-text/component";
import SelectedProjects from "./selected-projects/component";
import WritingSearch from "./writing-search/component";

const blocks = {
	hero: Hero,
	"selected-projects": SelectedProjects,
	"latest-writings": LatestWritings,
	"rich-text": RichText,
	"contact-form": ContactForm,
	"project-search": ProjectSearch,
	"writing-search": WritingSearch,
	newsletter: Newsletter,
} as const;

type RenderBlocksProps = {
	page: Page;
	searchParams?: SearchParams;
};

export default function RenderBlocks({
	page,
	searchParams,
}: RenderBlocksProps) {
	const { blocks: pageBlocks } = page;

	if (!pageBlocks || pageBlocks.length === 0) {
		return (
			<div>
				No blocks found for <strong>/{page.slug}</strong> page. Go to admin to
				add new blocks.
			</div>
		);
	}

	return (
		<>
			{pageBlocks.map((block) => {
				const BlockComponent = blocks[block.blockType] as any;

				if (block.blockType === "rich-text") {
					return <BlockComponent key={block.id} data={block.richText} />;
				}

				return BlockComponent ? (
					<BlockComponent
						key={block.id}
						{...block}
						searchParams={searchParams}
					/>
				) : (
					<div key={block.id || block.blockName || block.blockType}>
						Unknown block type: {block.blockType}
					</div>
				);
			})}
		</>
	);
}
