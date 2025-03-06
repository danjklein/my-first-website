export default function Contact() {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
          <p className="mb-8">
            Feel free to reach out if you have any questions or would like to work together.
          </p>
          
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="name" 
                type="text" 
                placeholder="Your name"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="email" 
                type="email" 
                placeholder="Your email"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="message" 
                placeholder="Your message"
                rows="5"
              ></textarea>
            </div>
            
            <div className="flex items-center justify-between">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="button"
              >
                Send Message
              </button>
              <a href="/" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Back to Home
              </a>
            </div>
          </form>
        </div>
      </main>
    );
  }