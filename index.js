
export default function GadgetLanding() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">SmartNova</h1>
        <p className="text-lg text-gray-600">
          Інноваційні гаджети, які роблять твоє життя розумнішим. Топові аксесуари за чесними цінами.
        </p>
        <img
          src="https://images.unsplash.com/photo-1585386959984-a4155224a1c2?auto=format&fit=crop&w=900&q=80"
          alt="Гаджет дня"
          className="w-full h-64 object-cover rounded-2xl shadow-md"
        />
        <div className="text-left space-y-2">
          <h2 className="text-xl font-semibold">Гаджет дня:</h2>
          <p className="text-gray-700 font-medium">Бездротова зарядна станція 3в1</p>
          <p className="text-gray-500 text-sm">Підходить для iPhone, Apple Watch, AirPods. Потужність: 15W</p>
          <p className="text-lg font-bold text-green-600">899 грн</p>
        </div>
        <form className="w-full max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Ім'я"
            className="w-full p-3 border border-gray-300 rounded-xl"
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="w-full p-3 border border-gray-300 rounded-xl"
          />
          <input
            type="text"
            placeholder="Місто / Відділення Нової Пошти"
            className="w-full p-3 border border-gray-300 rounded-xl"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800"
          >
            Замовити зараз
          </button>
        </form>
      </div>
    </main>
  );
}
