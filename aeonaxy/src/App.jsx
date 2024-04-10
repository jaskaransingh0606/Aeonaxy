import Intro from "./pages/Intro"
import Navbar from "./pages/Navbar"
import Page1 from "./pages/Page1"
import Pricing from "./pages/Pricing"
import Subscriptions from "./pages/Subscriptions"




function App() {
 

  return (
    <>
    <div className='flex flex-col bg-white  '>
      <Navbar />
      <Intro />
      <Pricing/>
      <p className='text-black text-6xl lg:text-5xl md:text-4xl sm:text-3xl vsm:text-2xl mt-20 font-extrabold mx-16 underline'>Subscriptions:</p>
      <Subscriptions />
      <Page1 />

      
    </div>
      
    </>
  )
}

export default App
