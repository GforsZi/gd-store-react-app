export default function Header() {
  return (
    <>
      <div className="bg-green-600 w-screen py-1.5 px-10 border-b-2 border-green-700">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">GD-store</h1>
          <a href="" className="bg-green-500 rounded p-1.5">
            Keranjang
          </a>
        </div>
      </div>
      <div className="bg-green-500 w-screen h-11">
        <div className="mx-12 flex justify-center h-full items-center">
          <a href="" className="">
            Add
          </a>
          <a href="" className="">
            Edit
          </a>
          <a href="" className="">
            Delete
          </a>
        </div>
      </div>
    </>
  );
}
