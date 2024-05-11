import PropTypes from "prop-types";

Card.propTypes = {
  components: PropTypes.array,
};

export default function Card({ components }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Components
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {components.map((component) => (
            <div key={component.path} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={component.img}
                  alt={component.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between text-center">
                <h1 className="text-lg font-medium text-gray-900">
                  {component.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
