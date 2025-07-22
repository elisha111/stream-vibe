import Categories from "@/sections/Categories"
import Hero from "@/sections/Hero"
import Questions from "@/sections/Questions"

export const metadata = {
  title: "Home",
  isHeaderFixed: true,
}

export default function () {
  return (
    <>
      <Hero />
      <Categories />
      {/* <Questions /> */}
    </>
  )
}
