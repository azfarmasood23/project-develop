export default function ContactUs() {
  return (
    <section className="relative py-16 bg-image2 bg-cover bg-center bg-no-repeat min-h-[60vh]">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-md mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-md border border-gray-300"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-md border border-gray-300"
          />
          <textarea
            placeholder="Enter Message"
            rows={4}
            className="w-full p-3 rounded-md border border-gray-300"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
} 