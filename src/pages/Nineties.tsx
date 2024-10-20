import "../styling/nineties.css";

function Nineties() {
	return (
		<div className="Nineties">
			<h1 className="tab blink">Welcome to my website!</h1>
			<img src="https://i.imgur.com/i6hvJjx.gif" alt="rainbow-divider" />
			<div id="links">
				<h4>
					<a href="#home">Home</a> <span className="line">|</span>
					<a href="#about">About Me</a> <span className="line">|</span>
					<a href="#working">Projects I am Working On</a>{" "}
					<span className="line">|</span>
					<a href="#made">Stuff I Made</a>
				</h4>
			</div>
			<h2>This is the base file for the 90s themed website I want to make</h2>
			<h2 id="working">Projects I am working on</h2>
			<footer id="footer">
				<span>
					<img src="https://i.imgur.com/Q	kBkUkC.gif" alt="ie-logo" />
				</span>
			</footer>
		</div>
	);
}

export default Nineties;
