// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'



const Character = () => {
	const [character, setCharacter] = useState([])

	useEffect(() => {
		
		axios
		.get('https://swapi.dev/api/people')
		.then(res => {
			console.log(res)
			setCharacter(res.data)
		})
		.catch(err => {
			console.log('something went wrong', err)
		})
	},[])


	return (
		<div>
			{character.map((char, key) => (<CharacterCard key={key} character={char} />))}
		</div>
	)
	
}

export default Character