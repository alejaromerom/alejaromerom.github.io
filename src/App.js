import "./App.css";
import "./Assets/Img/mi-imagen.jpg";
function App() {
	return (
		<div className="App">
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<a class="navbar-brand" href="cv">
					About Me
				</a>
				<a class="navbar-brand" href="Aboutme">
					Projects
				</a>
				<a class="navbar-brand" href="Aboutme">
					Contact Me
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
			</nav>
			<img
				src="/src/Assets/Img/mi-imagen.jpg"
				class="rounded float-left"
				alt=""
			></img>
			<header className="App-header">
				<p>Alejandra Romero</p>
				<a
					href="https://www.linkedin.com/in/alejaromerom/"
					target="_blank"
					rel="noopener noreferrer"
				>
					linkedin
				</a>
			</header>
		</div>
	);
}

export default App;
