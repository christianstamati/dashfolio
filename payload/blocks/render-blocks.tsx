import type { RequiredDataFromCollectionSlug } from "payload";
import { blocks } from "./blocks";

export function RenderBlocks({
	target,
}: {
	target: RequiredDataFromCollectionSlug<"pages">;
}) {
	const { layout } = target;
	return (
		<div className="space-y-8">
			{layout.map((block) => {
				const blockType = block.blockType as keyof typeof blocks;
				const BlockComponent = blocks[blockType];
				if (!BlockComponent) {
					return (
						<div key={block.id || Math.random()} className="w-full">
							Unknown block type: {block.blockType}
						</div>
					);
				}
				return (
					<BlockComponent key={block.id || Math.random()} {...(block as any)} />
				);
			})}
		</div>
	);
}
