import type { Field } from "payload";
import { iconsaxIcons } from "@/components/iconsax/icons";

const iconsaxField = (name = "icon", required = true): Field => ({
	name,
	type: "select",
	required,
	options: Object.keys(iconsaxIcons).map((icon) => ({
		label: icon,
		value: icon,
	})),
});

export default iconsaxField;
