export default function ContactUs() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-image2 bg-cover bg-center bg-no-repeat min-h-[60vh]">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-md mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-10">
          Contact Us
        </h2>
        <form className="space-y-4 sm:space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 sm:p-4 rounded-md border border-gray-300 bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 sm:p-4 rounded-md border border-gray-300 bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <textarea
            placeholder="Enter Message"
            rows={4}
            className="w-full p-3 sm:p-4 rounded-md border border-gray-300 bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 sm:py-4 px-6 rounded-md hover:bg-blue-600 active:bg-blue-700 transition-colors font-medium text-base sm:text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
} 