function CardSkeleton() {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-2">
      {[1, 2, 3, 4, 5].map((item) => (
        <div className="flex flex-col gap-2" key={item}>
          <div className="h-[300px] bg-gray-100 rounded-xl" />
          <div className="h-10 bg-gray-100 rounded-xl" />
          <div className="h-5 bg-gray-100 rounded-xl" />
        </div>
      ))}
    </div>
  );
}

export default CardSkeleton;
