import Link from "next/link"

const Presentation = () => {
  return (
    <section className="text-center mb-14">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to FlexFi</h1>
      <p className="text-xl text-gray-300 mb-8">
        Your gateway to decentralized finance. Manage your payments flexibly with the power of cryptocurrencies.
      </p>
      <Link href="/register" className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700">
        Sign Up
      </Link>
    </section>
  )
}

export default Presentation