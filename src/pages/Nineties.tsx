import "../styling/nineties.css";

function Nineties() {
	return (
		<div className="Nineties">
			<div className="content">
				<h1 className="tab blink">Welcome to my website!</h1>
				<img src="https://i.imgur.com/i6hvJjx.gif" alt="rainbow-divider" />
				<div id="links">
					<h4>
						<a href="#home">Home</a> <span className="line">|</span>
						<a href="#about">About Me</a> <span className="line">|</span>
						<a href="#projects">Projects</a> <span className="line">|</span>
					</h4>
				</div>
				<h2 id="about">About Me:</h2>

				<h2 id="projects">Projects I am working on:</h2>
			</div>
			<footer className="footer">
				<p>Thanks for coming!</p>
				<img src="https://i.imgur.com/Q	kBkUkC.gif" alt="ie-logo" />
			</footer>
		</div>
	);
}

export default Nineties;
