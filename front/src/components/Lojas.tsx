const stores = [
  {
    id: 1,
    name: "Loja A",
    cuisine: "asdasdasd",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Loja B",
    cuisine: "asdasdasd",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Loja C",
    cuisine: "asdasdasd",
    imageUrl: "https://via.placeholder.com/300",
  },
];
export const Lojas = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">
          Descubra as melhores lojas perto de você!
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stores.map((store) => (
          <div
            key={store.id}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <img
              className="h-48 w-full object-cover"
              src={store.imageUrl}
              alt={`${store.name} cover`}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                {store.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{store.cuisine}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
