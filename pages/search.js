import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

function Search ( { searchResults } )
{
	const router = useRouter()
	const { location, startDate, endDate, noOfGuests } = router.query
	const range = `${format( new Date( startDate ), "dd-MM-yyyy" )} - ${format( new Date( endDate ), "dd-MM-yyyy" )}`
	return (
		<div className="h-screen">
			<Header placeholder={ `${location} | ${range} | ${noOfGuests} guests` } />
			<main className="flex">
				<section className="flex-grow pt-5 px-5 ">
					<p className="text-xs">300+ stays - { range } for { noOfGuests } guests</p>
					<h1 className="text-3xl font-semibold mt-2 mb-5">Stays in { location }</h1>
					<div className="hidden lg:inline-flex mb-5 text-gray-800 whitespace-nowrap">
						<p className="filter-button">Cancellation Flexibility</p>
						<p className="filter-button">Type of place</p>
						<p className="filter-button">Price</p>
						<p className="filter-button">Rooms & Beds</p>
					</div>

					<div className="flex flex-col">
						{
							searchResults.map( ( item, index ) => (
								<InfoCard
									key={ index }
									location={ item.location }
									image={ item.img }
									title={ item.title }
									star={ item.star }
									price={ item.price }
									total={ item.total }
									description={ item.description }
								/>
							) )
						}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default Search


export async function getServerSideProps ()
{
	const searchResults = await fetch( "https://links.papareact.com/isz" )
		.then( ( response ) => response.json() )
		.catch( ( err ) => console.log( err ) )
	return {
		props: {
			searchResults
		}
	}
}