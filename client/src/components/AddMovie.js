import React, { useState, useEffect } from 'react';

const AddMovie = () => {
	const [movieTitle, setMovieTitle] = useState('');

	function postRequest() {
		fetch('http://localhost:8080/movies', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: movieTitle,
			}),
		});
	}

	return (
		<>
			<form className='row' onSubmit={postRequest()}>
				<input
					className='col-4'
					placeholder='Type to add movie...'
					onChange={(e) => {
						setMovieTitle(e.target.value);
					}}
				></input>
				<button className='btn btn-success col-4' onSubmit={postRequest()}>
					Click me to submit!
				</button>
			</form>
		</>
	);
};

export default AddMovie;
