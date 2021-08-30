import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

function Map ( { searchResults } )
{

	//Transform the search results in the following format
	// {latitude: 12.981,longitude: 18.987}
	const coordinates = searchResults.map( ( result ) => ( {
		longitude: result.long,
		latitude: result.lat
	} ) )

	// Getting the center location of all coordinates
	const center = getCenter( coordinates )

	const [ viewport, setViewport ] = useState( {
		width: "100%",
		height: "100%",
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 11,
	} );

	const [ selectedLocation, setSelectedLocation ] = useState( {} )

	return (
		<ReactMapGL
			mapStyle="mapbox://styles/srivatsan2607/cksyev39x8yg718mrnz7kwbdb"
			mapboxApiAccessToken={ process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN }
			{ ...viewport }
			onViewportChange={ ( viewport ) => setViewport( viewport ) }
		>
			{
				searchResults.map( ( result, index ) => (
					<div key={ index }>
						<Marker
							latitude={ result.lat }
							longitude={ result.long }
							offsetLeft={ -20 }
							offsetTop={ -10 }
						>
							<p
								role="img"
								className="cursor-pointer text-2xl animate-bounce"
								onClick={ () => setSelectedLocation( result ) }
								aria-label="push-pin"
							>
								📌
							</p>
						</Marker>
						{
							selectedLocation && selectedLocation.long === result.long && <Popup
								onClose={ () => setSelectedLocation( {} ) }
								closeOnClick={ true }
								latitude={ result.lat }
								longitude={ result.long }
							>
								{ result.title }
							</Popup>
						}
					</div>
				) )
			}
		</ReactMapGL>
	)
}

export default Map

