import Image from 'next/image'
import logo from '../assets/logo.png'
import { SearchIcon, MenuIcon, GlobeAltIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'


function Header ()
{
	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 gap-2 bg-white shadow-md p-2">
			{/* Left Side */ }
			<div className="relative flex items-center h-8 cursor-pointer my-auto">
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
					placeholder="Search"
				/>
				<SearchIcon
					className="inline-flex h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer mx-1" />
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

		</header>
	)
}

export default Header
