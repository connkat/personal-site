import Switch from "react-switch";

type NinetiesSwitchProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

function NinetiesSwitch(props: NinetiesSwitchProps) {
	return (
		<div className="Switch">
			<Switch
				name="90sToggle"
				checked={props.isNineties}
				onChange={() => props.handle90sToggle(props.isNineties)}
			/>
		</div>
	);
}

export default NinetiesSwitch;
