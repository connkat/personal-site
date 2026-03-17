"use client";

type NinetiesProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

function NinetiesHeader({ isNineties, handle90sToggle }: NinetiesProps) {
	return (
		<div id="NinetiesHeader">
			<div className="flex flex-row justify-between items-center py-[2vh] px-[2vh]">
				<img src="https://i.imgur.com/QkBkUkC.gif" alt="ie-logo" />
				<h1 className="blink text-center leading-none">Welcome to my website!</h1>
				<button
					onClick={() => handle90sToggle(isNineties)}
					title="Go back to today"
					className={`w-9 h-9 rounded-full border-2 text-xs font-bold tracking-tight transition-colors cursor-pointer ${
						isNineties
							? "bg-yellow-300 border-yellow-400 text-yellow-900"
							: "border-gray-400 text-gray-500 hover:border-gray-700 hover:text-gray-700"
					}`}
				>
					today
				</button>
			</div>
			<img src="https://i.imgur.com/i6hvJjx.gif" alt="rainbow-divider" className="w-full" />
		</div>
	);
}

export default NinetiesHeader;
