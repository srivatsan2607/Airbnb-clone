import Image from 'next/image'
function MediumCard ( { image, title } )
{
	return (
		<div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
			<div className="relative h-56 w-60">
				<Image
					src={ image }
					layout="fill"
					className='rounded-xl'
				/>
			</div>
			<h3 className="text-md mt-2 ml-1">{ title }</h3>
		</div>
	)
}

export default MediumCard
