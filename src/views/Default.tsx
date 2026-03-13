import { Welcome, Portfolio, Contact } from "../components/default";

type DefaultProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

export default function Default({ isNineties, handle90sToggle }: DefaultProps) {
	return (
		<>
			<div className="fixed inset-0 -z-10 bg-[url('/inversion.jpg')] bg-cover bg-center" />
			<div className="min-h-screen font-crimson-pro">
				<Welcome isNineties={isNineties} handle90sToggle={handle90sToggle} />
				<Portfolio />
				<Contact />
			</div>
		</>
	);
}
