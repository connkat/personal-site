import Switch from "react-switch";

type NinetiesSwitchProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

function NinetiesSwitch({ isNineties, handle90sToggle }: NinetiesSwitchProps) {
	return (
		<div className="Switch">
			<Switch
				name="90sToggle"
				checked={isNineties}
				onChange={() => handle90sToggle(isNineties)}
			/>
		</div>
	);
}

export default NinetiesSwitch;
