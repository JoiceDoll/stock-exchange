function Home() {
  return (
    <>
      <div className="bg-custom-home-background w-screen h-screen">
        <div className="w-screen h-20">
          <h1 className="flex align-middle p-8 text-xl text-white">Account</h1>
        </div>
        <div className="w-1/5 h-2/4 bg-custom-card rounded-xl absolute right-40 top-32">
          <p className="text-white text-2xl text-center ">Cotações</p>
        </div>
      </div>
    </>
  );
}

export default Home;
