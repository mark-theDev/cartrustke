import Link from "next/link"

export default function Example() {
    return (
      <>        
        <main className="grid h-screen justify-center items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
          <p className="text-xl font-semibold text-indigo-600">404</p>
          <h1 className="my-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-xl">Page not found</h1>
            <img src="/page-not-found.png" className="max-w-lg" alt="page not found" />          
            
            {/* <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p> */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md transition-all duration-300 bg-[#082854] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
              <Link href="/contacts" className="text-sm transition-all duration-300 font-semibold px-3.5 py-2.5 hover:border hover:border-black rounded-md text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }
  