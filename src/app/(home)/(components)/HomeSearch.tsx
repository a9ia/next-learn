'use client'
// TODO: If i don't add this "use client", Use SearchInput components will pop warning "did not expoect server HTL to contain a <style> in <div>"
// That's irrational. Because I have added "use client" into SearchInput components. I don't know why.
import SearchInput from "./SearchInput"
export default function HomeSearch() {
  return (
    <section className="section-body h-[300px] flex items-center">
      <div>
        <div>The Ethereum Blockchain Explorer</div>
        <SearchInput/>
      </div>
      <div></div>
    </section>
  )
}
