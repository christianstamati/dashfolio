import type { Project } from "@/payload/payload-types";
import Example from "./example/component";
import Image from "./image/component";

// Block component dictionary
const blockComponents: Record<string, React.ComponentType<any>> = {
	"example-block": Example,
	image: Image,
};

interface RenderBlocksProps {
	blocks?: Project["layout"] | null;
}

export default function RenderBlocks({ blocks }: RenderBlocksProps) {
	if (!blocks || blocks.length === 0) {
		return null;
	}

	return (
		<div className="space-y-8">
			{blocks.map((block, index) => {
				const BlockComponent = blockComponents[block.blockType];

				if (!BlockComponent) {
					console.warn(`Block type "${block.blockType}" not found`);
					return null;
				}

				return (
					<div key={block.id || index}>
						<BlockComponent props={block} />
					</div>
				);
			})}
		</div>
	);
}
