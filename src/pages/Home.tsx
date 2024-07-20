import "@/assets/home-animation.css";
function Home() {
  return (
    <section className="container flex min-h-screen flex-col items-center justify-center gap-10">
      <div className="loader">
        <span>&lt;</span>
        <span>WELCOME</span>
        <span>/&gt;</span>
      </div>
    </section>
  );
}

export default Home;
