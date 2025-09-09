import type { Page } from "../payload-types";
import ContactForm from "./contact-form/component";
import Hero from "./hero/component";
import LatestWritings from "./latest-writings/component";
import { RichText } from "./rich-text/component";
import SelectedProjects from "./selected-projects/component";

const blocks = {
	hero: Hero,
	"selected-projects": SelectedProjects,
	"latest-writings": LatestWritings,
	"rich-text": RichText,
	"contact-form": ContactForm,
} as const;

export default function RenderBlocks({ page }: { page: Page | string }) {
	if (!page || typeof page === "string") {
		return <div>Invalid page {page}</div>;
	}

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
		<div className="space-y-16">
			{pageBlocks.map((block) => {
				const BlockComponent = blocks[block.blockType] as any;

				if (block.blockType === "rich-text") {
					return <BlockComponent key={block.id} data={block.richText} />;
				}

				return BlockComponent ? (
					<BlockComponent key={block.id} {...block} />
				) : (
					<div key={block.id || block.blockName || block.blockType}>
						Unknown block type: {block.blockType}
					</div>
				);
			})}
		</div>
	);
}
