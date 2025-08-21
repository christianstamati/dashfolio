import { Card, CardTitle } from "./ui/card";

export function NoItemsFound() {
	return (
		<Card className="flex flex-col items-center justify-center text-center">
			<CardTitle className="text-lg">No items found</CardTitle>
		</Card>
	);
}
