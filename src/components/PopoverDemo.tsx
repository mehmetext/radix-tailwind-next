import * as Popover from "@radix-ui/react-popover";
import { PopoverArrow } from "@radix-ui/react-popover";

export default function PopoverDemo() {
	return (
		<Popover.Root>
			<Popover.Trigger className="bg-blue-200 text-blue-600 px-4 py-2 rounded">
				Menü
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content
					align="start"
					side="right"
					sideOffset={4}
					className="bg-blue-500 p-2 rounded text-white flex flex-col gap-2"
				>
					<div className="px-8 py-2 bg-blue-600 rounded">Deneme</div>
					<div className="px-8 py-2 bg-blue-600 rounded">Deneme</div>
					<div className="px-8 py-2 bg-blue-600 rounded">Deneme</div>
					<PopoverArrow className="fill-blue-500" />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
}
