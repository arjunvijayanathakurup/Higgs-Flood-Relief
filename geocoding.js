const location = '22 Main st Boston MA'
		axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
		params:{
			address: location,
			key: 'AIzaSyCTX5Ypfa4NiVPzL4eoAo-utYh7fr7nJpE'
		}
		})
		.then((res) => {
		console.log(res.results[0].formatted_address)
		})
		.catch((res) => {
		console.log(res);
		})
	

	return(
	<ul>
		<li></li>)
	</ul>
	)