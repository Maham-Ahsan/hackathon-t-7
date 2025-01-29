
import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts } from "@/sanity/lib/queries";

type Car = {
  _id: string;
  imageUrl: string | null;
  name: string;
  brand: string | null;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string | null;
  tags: string[];
};

export default async function Products() {
  let cars: Car[] = [];
  try {
    cars = await sanityFetch({ query: allProducts });
    console.log("Fetched cars:", cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
        Explore Our Cars
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.length > 0 ? (
          cars.map((car) => (
            <div
              key={car._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={car.imageUrl || "/placeholder-image.jpg"}
                alt={car.name || "Unnamed brand"}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {car.name || "Unknown Car"}
                </h2>
                <p className="text-sm text-gray-600">Brand: {car.brand || "N/A"}</p>
                <p className="text-sm text-gray-600">Type: {car.type}</p>
                <p className="text-sm text-gray-600">
                  Fuel Capacity: {car.fuelCapacity}
                </p>
                <p className="text-sm text-gray-600">Transmission: {car.transmission}</p>
                <p className="text-sm text-gray-600">
                  Seating Capacity: {car.seatingCapacity}
                </p>
                <p className="text-xl font-bold text-gray-900 mt-2">
                  ${car.pricePerDay || "N/A"} / day
                </p>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Rent Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No cars available
          </p>
        )}
      </div>
    </div>
  );
}
