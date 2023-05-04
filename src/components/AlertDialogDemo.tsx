import * as AlertDialog from "@radix-ui/react-alert-dialog";

export default function PopoverDemo() {
	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger className="bg-blue-200 text-blue-600 px-4 py-2 rounded">
				Sil
			</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<AlertDialog.Overlay className="fixed bg-black bg-opacity-30 backdrop-blur-md inset-0 data-[state=open]:animate-alertDialogShowOverlay" />
				<AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-2xl flex flex-col gap-4 data-[state=open]:animate-alertDialogShowContent">
					<AlertDialog.Title className="text-3xl font-bold">
						Sil
					</AlertDialog.Title>
					<AlertDialog.Description>
						Gerçekten silmek istediğinize emin misiniz?
					</AlertDialog.Description>
					<div className="flex gap-4">
						<AlertDialog.Action
							onClick={() => {
								console.log("Silindi.");
							}}
							className="bg-red-200 text-red-600 px-4 py-2 rounded"
						>
							Evet
						</AlertDialog.Action>
						<AlertDialog.Cancel
							onClick={() => {
								console.log("Vazgeçildi.");
							}}
							className="bg-gray-200 text-gray-600 px-4 py-2 rounded"
						>
							Hayır
						</AlertDialog.Cancel>
					</div>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
}
