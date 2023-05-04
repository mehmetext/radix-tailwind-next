import AccordionDemo from "@/components/AccordionDemo";
import AlertDialogDemo from "@/components/AlertDialogDemo";
import PopoverDemo from "@/components/PopoverDemo";

export default function Home() {
	return (
		<main className="flex flex-col p-8 gap-8 items-center justify-center">
			<PopoverDemo />
			<AccordionDemo />
			<AlertDialogDemo />
		</main>
	);
}
