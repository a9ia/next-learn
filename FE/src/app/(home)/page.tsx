import HomeSearch from "./(components)/HomeSearch"
import HomeOverView from "./(components)/HomeOverView"
import HomeDashBoard from "./(components)/HomeDashBoard/HomeDashBoard"
import HomeFooter from "./(components)/HomeFooter"
export default function Home() {
  return (
    <main className="max-w-full flex-grow">
      <HomeSearch/>
      <HomeOverView/>
      <HomeDashBoard/>
      <HomeFooter/>
    </main>
  )
}
