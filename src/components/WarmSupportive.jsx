export default function WarmSupportive() {
  return (
    <div className="mt-20">
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <h1 className="text-3xl font-semibold text-center mx-auto">
        Warm & Supportive
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Consult with resources for your well-being and discover simple tips to
        stay healthy every day.
      </p>

      <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
        <div className="relative group grow transition-all w-56 h-[400px] duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-center"
            src="/image/warm_water.jpg"
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-3xl">Fuel Your Body</h1>
            <p className="text-sm">
              Water is essential for energy, focus, and vitality. Drink up for a
              healthier you.
            </p>
          </div>
        </div>

        <div className="relative group grow transition-all w-56 h-[400px] duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-right"
            src="/image/warm_food.jpg"
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-3xl">Nourish to Flourish</h1>
            <p className="text-sm">
              Feed your body the right fuel. A balanced diet is the cornerstone
              of well-being.
            </p>
          </div>
        </div>

        <div className="relative group grow transition-all w-56 h-[400px] duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-center"
            src="/image/warm_exercise.jpg"
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-3xl">Get Active, Feel Alive</h1>
            <p className="text-sm">
              A little activity goes a long way. Boost your mood and energy with
              daily motion.
            </p>
          </div>
        </div>

        <div className="relative group grow transition-all w-56 h-[400px] duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-center"
            src="/image/warm_sleep.jpg"
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-3xl">Your Nightly Reset</h1>
            <p className="text-sm">
              Unwind for better health. Deep sleep improves memory, mood, and
              immunity.
            </p>
          </div>
        </div>

        <div className="relative group grow transition-all w-56 h-[400px] duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-center"
            src="/image/warm_relax.jpg"
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-3xl">Find Your Calm</h1>
            <p className="text-sm">
              A calm mind leads to a healthier life. Discover simple techniques
              to reduce daily stress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
