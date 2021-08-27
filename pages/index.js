import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

export default function Home ( { exploreData, cardData } )
{
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */ }
      <Header />
      {/* Banner */ }
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-4 ">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
              exploreData?.map( ( item, index ) => (
                <SmallCard
                  key={ index }
                  image={ item.img }
                  distance={ item.distance }
                  location={ item.location } />
              ) )
            }
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-2 overflow-scroll scrollbar-hide p-y-5 p-x-2 ml-3">
            {
              cardData?.map( ( item, index ) => (
                <MediumCard
                  key={ index }
                  image={ item.img }
                  title={ item.title }
                />
              ) )
            }
          </div>
        </section>
        <section>
          <LargeCard
            image="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>

      <Footer />

    </div>
  )
}


export async function getStaticProps ()
{
  const exploreData = await fetch( "https://links.papareact.com/pyp" )
    .then( ( response ) => response.json() )
    .catch( ( err ) => console.log( err ) );

  const cardData = await fetch( "https://links.papareact.com/zp1" )
    .then( ( response ) => response.json() )
    .catch( ( err ) => console.log( err ) );
  return {
    props: {
      exploreData,
      cardData
    }
  }
}
