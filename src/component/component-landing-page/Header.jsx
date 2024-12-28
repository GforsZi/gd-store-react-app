export default function Header() {
  return (
    <>
      <div className="bg-green-600 w-screen py-1.5 px-10 border-b-2 border-green-700 drop-shadow-lg">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">GD-store</h1>
          <div className="flex">
            <a
              href=""
              className="rounded-full w-10 h-10 mx-1.5 flex border-gray-700 justify-center items-center text-center border-2"
            >
              <p>K</p>
            </a>
            <a
              href=""
              className="rounded-full w-10 h-10 flex mx-1.5 border-gray-700 justify-center items-center text-center border-2"
            >
              <p>P</p>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-green-500 w-screen h-11 drop-shadow-md">
        <div className="mx-12 flex justify-center h-full items-center">
          <a
            href=""
            className="rounded-full p-1 border-gray-700 w-20 text-center border-2 mx-1.5"
          >
            Add
          </a>
          <a
            href=""
            className="rounded-full p-1 border-gray-700 w-20 text-center border-2 mx-1.5"
          >
            Edit
          </a>
          <a
            href=""
            className="rounded-full p-1 border-gray-700 w-20 text-center border-2 mx-1.5"
          >
            Delete
          </a>
        </div>
      </div>
    </>
  );
}
