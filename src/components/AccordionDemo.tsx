//Radix
import * as Accordion from "@radix-ui/react-accordion";

//React
import React from "react";

//Utils
import { cn } from "@/utils/cn";

export default function AccordionDemo() {
	return (
		<Accordion.Root
			className="max-w-[300px] w-full flex flex-col bg-blue-50 rounded overflow-hidden border border-blue-200"
			type="single"
			collapsible
		>
			<AccordionItem value="item-1">
				<AccordionTrigger>Accordion 1</AccordionTrigger>
				<AccordionContent>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
					eligendi provident. Omnis fuga dicta voluptates obcaecati nisi nemo,
					recusandae provident similique, nulla, consequatur ullam sint cumque.
					Molestias, commodi. Ex, debitis.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Accordion 2</AccordionTrigger>
				<AccordionContent>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
					consectetur quod pariatur eligendi fugiat!
				</AccordionContent>
			</AccordionItem>
		</Accordion.Root>
	);
}

interface AccordionItemProps extends Accordion.AccordionItemProps {
	className?: string;
	children: React.ReactNode;
	value: string;
}

const AccordionItem = React.forwardRef(
	(
		{ className, children, value, ...props }: AccordionItemProps,
		forwardedRef: React.ForwardedRef<HTMLDivElement>
	) => (
		<Accordion.Item
			className={cn(
				"flex flex-col overflow-hidden data-[state=closed]:border-b border-b-blue-300 last:data-[state=closed]:border-b-0",
				className
			)}
			ref={forwardedRef}
			value={value}
			{...props}
		>
			{children}
		</Accordion.Item>
	)
);

interface AccordionTriggerProps extends Accordion.AccordionTriggerProps {
	className?: string;
	children: React.ReactNode;
}

const AccordionTrigger = React.forwardRef(
	(
		{ className, children, ...props }: AccordionTriggerProps,
		forwardedRef: React.ForwardedRef<HTMLButtonElement>
	) => (
		<Accordion.Trigger
			className={cn(
				"flex items-center justify-between bg-blue-200 p-2 text-blue-600 text-lg group hover:bg-blue-300 data-[state=open]:bg-blue-300 transition",
				className
			)}
			ref={forwardedRef}
			{...props}
		>
			{children}
			<svg
				className="group-data-[state=open]:rotate-180 transition"
				width="16"
				height="16"
				viewBox="0 0 15 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
					fill="currentColor"
					fillRule="evenodd"
					clipRule="evenodd"
				></path>
			</svg>
		</Accordion.Trigger>
	)
);

interface AccordionContentProps extends Accordion.AccordionContentProps {
	className?: string;
	children: React.ReactNode;
}

const AccordionContent = React.forwardRef(
	(
		{ className, children, ...props }: AccordionContentProps,
		forwardedRef: React.ForwardedRef<HTMLDivElement>
	) => (
		<Accordion.Content
			className={cn(
				"data-[state=open]:animate-slideDownAccordion data-[state=closed]:animate-slideUpAccordion text-gray-500 text-sm",
				className
			)}
			ref={forwardedRef}
			{...props}
		>
			<div className="p-2">{children}</div>
		</Accordion.Content>
	)
);
