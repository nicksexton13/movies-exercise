import React, { useState, useEffect } from 'react';

const Movies = ({ movies }) => {
	const [filteredMovies, setFilteredMovies] = useState(movies);

	useEffect(() => {
		setFilteredMovies(movies);
	}, [movies]);

	function handleInput(formInput) {
		setFilteredMovies(
			movies.filter((movie) => {
				return movie.title.toLowerCase().includes(formInput.target.value);
			})
		);
	}

	return (
		<>
			<form>
				<input
					className='col-4'
					onChange={(formInput) => {
						handleInput(formInput);
					}}
					type='text'
					placeholder='Search for a movie...'
				></input>
			</form>
			<div>
				{filteredMovies.map((film) => (
					<li>{film.title}</li>
				))}
			</div>
		</>
	);
};

export default Movies;
