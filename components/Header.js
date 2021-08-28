import Image from 'next/image'
import logo from '../assets/logo.png'
import { SearchIcon, MenuIcon, GlobeAltIcon, UserCircleIcon, UsersIcon, UserIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';



function Header ( { placeholder } )
{
	const [ searchInput, setSearchInput ] = useState( "" )
	const [ startDate, setStartDate ] = useState( new Date() )
	const [ endDate, setEndDate ] = useState( new Date() )
	const [ noOfGuests, setNoOfGuests ] = useState( 1 )
	const router = useRouter()
	const handleSelect = ( ranges ) =>
	{
		setStartDate( ranges.selection.startDate )
		setEndDate( ranges.selection.endDate )
	}
	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
	}
	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 gap-2 bg-white shadow-md p-2">
			{/* Left Side */ }
			<div onClick={ () => router.push( "/" ) } className="relative flex items-center h-8 cursor-pointer my-auto">
				<Image
					src={ logo }
					layout="fill"
					objectFit="contain"
					objectPosition="left"
				/>
			</div>

			{/* Middle */ }
			<div className="flex items-center border-2 rounded-full p-2 shadow-sm">
				<input
					type="text"
					className="flex-grow pl-2 md:pl-5 bg-transparent outline-none text-sm text-gray-400 placeholder-gray-400 w-full"
					placeholder={ placeholder || "Search" }
					value={ searchInput }
					onChange={ ( e ) => setSearchInput( e.target.value ) }
				/>
				<SearchIcon
					className="inline-flex h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer mx-1"
				/>
			</div>

			{/* Right Side */ }
			<div className="flex items-center space-x-2 justify-end text-gray-500">
				<div className="flex items-center space-x-2">
					<p className="hidden md:inline">Become a host</p>
					<GlobeAltIcon className="h-5 cursor-pointer" />
				</div>
				<div className="flex p-2 items-center border-2 rounded-full cursor-pointer">
					<MenuIcon className="h-5" />
					<UserCircleIcon className="h-5" />
				</div>
			</div>

			{/* Calendar */ }

			{
				searchInput && (
					<div className="flex flex-col col-span-3 mx-auto">
						<DateRangePicker
							ranges={ [ selectionRange ] }
							minDate={ new Date() }
							rangeColors={ [ "#FD5B61" ] }
							onChange={ handleSelect }
						/>
						<div className="flex items-center border-b mb-2">
							<h2 className="text-2xl flex-grow">Number of Guests</h2>
							<UsersIcon className="h-5" />
							<input
								type="number"
								min={ 1 }
								value={ noOfGuests }
								onChange={ ( e ) => setNoOfGuests( e.target.value ) }
								className="w-12 pl-2 text-lg outline-none text-red-400"
							/>
						</div>
						<div className="flex mb-2">
							<button
								className="flex-grow text-gray-500"
								onClick={ () => setSearchInput( "" ) }
							>
								Cancel
							</button>
							<button
								onClick={ () => router.push( {
									pathname: "/search",
									query: {
										location: searchInput,
										startDate: startDate.toISOString(),
										endDate: endDate.toISOString(),
										noOfGuests,
									}
								} ) }
								className="flex-grow text-red-400">
								Search
							</button>
						</div>
					</div>
				)
			}

		</header>
	)
}

export default Header
