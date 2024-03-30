function NewsLetter() {
  return (
    <div className="max-w-7xl mx-auto w-full py-4">
      <div className="flex flex-col gap-3 justify-center items-center bg-white w-max h-[250px] px-3 mx-auto md:w-[600px]">
        <div className="text-center">
          <h1 className="text-3xl font-medium">Subscribe Newsletter</h1>
          <span className="text-gray-500">
            Subscribe to <span>LuxeAttire</span> to get latest products and
            discount update.
          </span>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <input
            type="text"
            className="w-full outline-none bg-gray-200 rounded-xl p-2 sm:w-[470px] block mx-auto"
            placeholder="Email address"
          />
          <button className="py-1.5 px-3 bg-primary text-white capitalize text-[15px] rounded-lg w-max block mx-auto">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
