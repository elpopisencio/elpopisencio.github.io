import React from 'react';

const Home = () => {
	return (
		<div class="container">
			<nav class="navbar" role="navigation" aria-label="main navigation">
				<div class="navbar-brand">
					<a class="navbar-item is-size-5" href="/">
						elpopisencio
					</a>
				</div>

				<div id="navbarBasicExample" class="navbar-menu is-active">
					<div class="navbar-start">
						<a href="/resume" class="navbar-item">
							resume
						</a>

						<div class="navbar-item has-dropdown is-hoverable">
							<a class="navbar-link" href="#!">
								projects
							</a>

							<div class="navbar-dropdown">
								<a class="navbar-item" href="/pagination">
									pagination
								</a>
								<a class="navbar-item" href="/checkbox-tree">
									checkbox-tree
								</a>
								<a class="navbar-item" href="/keyboard-navigable-table">
									keyboard-navigable-table
								</a>
								<a class="navbar-item" href="/connect-four">
									connect-four
								</a>
							</div>
						</div>
					</div>

					<div class="navbar-end">
						<div class="navbar-item">
							<div class="buttons"></div>
						</div>
					</div>
				</div>
			</nav>
			<h1 className="title has-text-centered">
				elpopisencio - web developer
			</h1>
		</div>
	);
};

export default Home;
