import TypewriterComponent from "typewriter-effect";

export const HomePage = () => {
  return (
    <div>
      <div
        className="flex items-center justify-center w-full h-20 bg-center bg-no-repeat bg-cover border-2 border-teal-500 md:h-40 2xl:h-48"
        style={{ backgroundImage: "url('/images/bg-cart.jpg')" }}
      >
        <h2
          className="font-semibold text-slate-200 2xl:text-5xl font-Roboto"
          style={{ textShadow: "4px 4px 6px rgba(0,0,0,0.7)" }}
        >
          <TypewriterComponent
            options={{
              strings: ["Belanja Hemat, Hidup Nikmat.💃🏻"],
              autoStart: true,
              loop: true,
              delay: 175, // Menyesuaikan kecepatan pengetikan
              deleteSpeed: 50, // Menyesuaikan kecepatan penghapusan
              cursor: "_", // Mengubah tampilan cursor
              cursorClassName: "Typewriter__cursor", // Menggunakan class untuk lebih mengontrol gaya cursor
            }}
          />
        </h2>
      </div>
    </div>
  );
};
