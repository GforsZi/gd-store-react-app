export default function HeroSction() {
  return (
    <>
      <div className="text-center bg-neutral-300 mx-5 drop-shadow-sm p-3">
        <h1>GD-store</h1>
        <p>Welcome name</p>
      </div>
      <div className="bg-neutral-400 w-screen h-11 drop-shadow-md border-b-2 border-gray-400">
        <div className="mx-12 flex justify-center h-full items-center">
          <a
            href=""
            className="rounded-lg p-1 border-gray-700 w-20 bg-neutral-200 hover:bg-neutral-300 text-center border-2 mx-1.5"
          >
            Terlaris
          </a>
          <a
            href=""
            className="rounded-lg p-1 border-gray-700 w-20 bg-neutral-200 hover:bg-neutral-300 text-center border-2 mx-1.5"
          >
            Terkait
          </a>
          <a
            href=""
            className="rounded-lg p-1 border-gray-700 w-20 bg-neutral-200 hover:bg-neutral-300 text-center border-2 mx-1.5"
          >
            Terbaru
          </a>
        </div>
      </div>
    </>
  );
}
