const Home = () => {
    return (
      <div className="flex justify-center min-h-screen bg-gray-900">
        
        <div className="w-[70%] grid grid-cols-1 gap-4 mt-10 bg-white p-8 rounded-3xl shadow-2xl">
  
          {/* Hero Section */}
          <section className="bg-sky-100 rounded-3xl p-10 outline outline-1 outline-slate-300">
            <h1 className="text-5xl font-bold text-rose-500 mb-4">
              Jordan Joelson.
            </h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
              Hi, I'm Jordan, a product designer with a passion for 3D and AR/VR
            </h2>
            <p className="text-xl text-gray-600">
              Product Designer at <span className="underline">Duolingo</span> <br />
              Previously worked with <span className="underline">Meta</span>, <span className="underline">Google</span>
            </p>
          </section>
  
        </div>
  
      </div>
    )
  }
  
  export default Home
  