import type { Page } from "../payload-types";
import Hero from "./hero/component";
import LatestWritings from "./latest-writings/component";
import SelectedProjects from "./selected-projects/component";

const blocks = {
	hero: Hero,
	"selected-projects": SelectedProjects,
	"latest-writings": LatestWritings,
};

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
