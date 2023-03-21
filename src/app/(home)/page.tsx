import HomeSearch from "./(components)/HomeSearch"
import OverView from "./(components)/OverView"
export default function Home() {
  return (
    <main className="max-w-full flex-grow">
      <HomeSearch/>
      <OverView/>
    </main>
  )
}
