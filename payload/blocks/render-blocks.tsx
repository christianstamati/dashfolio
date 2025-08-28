import type { Page } from "../payload-types";
import Hero from "./hero/component";

const blocks = {
	hero: Hero,
};

export default function RenderBlocks({ page }: { page: Page | string }) {
	if (!page || typeof page === "string") {
		return <div>Invalid page {page}</div>;
	}

	const { blocks: pageBlocks } = page;

	if (!pageBlocks) {
		return <div>No blocks found</div>;
	}

	return (
		<div className="space-y-8">
			{pageBlocks.map((block) => {
				const BlockComponent = blocks[block.blockType];
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
