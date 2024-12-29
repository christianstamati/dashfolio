import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { Media } from "@/payload/blocks/media/config";

export default lexicalEditor({
  features: ({ defaultFeatures }) => {
    return [
      ...defaultFeatures,
      HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3", "h4"] }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
      HorizontalRuleFeature(),
      BlocksFeature({
        blocks: [Media],
      }),
    ];
  },
});
