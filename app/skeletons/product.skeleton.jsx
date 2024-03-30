function ProductSkeleton() {
  return (
    <div className="flex justify-between items-center gap-3 sm:flex-row flex-col">
      <div className="h-[400px] bg-gray-100 rounded-xl flex-1 w-full" />
      <div className="flex flex-col gap-3 flex-1 w-full">
        <div className="rounded-xl bg-gray-100 h-5" />
        <div className="rounded-xl bg-gray-100 h-10" />
        <div className="rounded-xl bg-gray-100 h-[100px]" />
        <div className="rounded-xl bg-gray-100 h-10" />
        <div className="rounded-xl bg-gray-100 h-10" />
      </div>
    </div>
  );
}

export default ProductSkeleton;
