import React, { Fragment } from "react";
import type { Page } from "@payload-types";
import CustomBlock from "@/payload/blocks/custom-block/component";
const blockComponents = {
  "custom-block": CustomBlock,
};
export const Blocks: React.FC<{
  blocks: Page["layout"][0][];
}> = (props) => {
  const { blocks } = props;
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;
  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block;
          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];
            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block {...block} />
                </div>
              );
            }
          }
          return null;
        })}
      </Fragment>
    );
  }

  return null;
};
