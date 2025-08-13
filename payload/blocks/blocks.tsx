import type { ExampleBlock, ProjectListViewProps } from "@payload-types";
import type React from "react";
import { ExampleBlock as ExampleBlockComponent } from "./example-block/component";
import { ProjectListView } from "./project-list-view/component";

export const blocks = {
	"example-block": ExampleBlockComponent,
	"project-list-view": ProjectListView,
} as const;

export type BlockType = keyof typeof blocks;
export type BlockProps = ExampleBlock | ProjectListViewProps;

export type BlockComponentType = React.ComponentType<
	ExampleBlock | ProjectListViewProps
>;
