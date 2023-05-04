import AccordionDemo from "@/components/AccordionDemo";
import PopoverDemo from "@/components/PopoverDemo";

export default function Home() {
	return (
		<main className="flex flex-col p-8 gap-8 items-center justify-center">
			<PopoverDemo />
			<AccordionDemo />
		</main>
	);
}
