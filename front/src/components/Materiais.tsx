const material = [
  {
    id: 1,
    name: "material A",
    cuisine: "asdasdasd",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "material B",
    cuisine: "asdasdasd",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "material C",
    cuisine: "asdasdasd",
    imageUrl: "https://via.placeholder.com/300",
  },
];
export const Materiais = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">
          Peça materiais para entrega !
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {material.map((material) => (
          <div
            key={material.id}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <img
              className="h-48 w-full object-cover"
              src={material.imageUrl}
              alt={`${material.name} cover`}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                {material.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{material.cuisine}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
