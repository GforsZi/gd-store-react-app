export default function Product() {
  return (
    <>
      <div className="flex min-h-screen justify-center">
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate"></h2>
                <p className="text-gray-600 mt-1">$</p>
                <button className="w-full bg-blue-500 text-white mt-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
