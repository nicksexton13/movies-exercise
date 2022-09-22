import React, { useEffect, useState } from 'react';
import Movies from './Movies';
import AddMovie from './AddMovie';

function App() {
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8080/movies')
			.then((res) => res.json())
			.then((data) => setMovieList(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<Movies movies={movieList} />
			<AddMovie />
		</>
	);
}

export default App;
