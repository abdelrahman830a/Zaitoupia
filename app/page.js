import Feed from '@components/Feed'
const Home = () => {
  return (
    <section className=" w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & share
            <br className="" />
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
          Promptista is an open source project that uses AI to generate writing prompts.
        </p>

        <Feed />
    </section>
  )
}

export default Home