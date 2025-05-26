
const brands = [
  { name: 'Intel', logo: '/img/Brands/intel-company-logo.png' },
  { name: 'Nvidia', logo: '/img/Brands/Logo-NVIDIA.png' },
  { name: 'AMD', logo: '/img/Brands/AMD_logo_pre-2013.svg.png' },
  { name: 'Corsair', logo: '/img/Brands/Corsair_2020_logo.svg.png' },
  { name: 'ASUS', logo: '/img/Brands/asus-37494 (1).png' },
  { name: 'MSI', logo: '/img/Brands/MSI-Logo.webp' },
];

const BrandGrid = () => {
  return (
    <div className="w-full mx-auto p-6 border-2 border-gray-300 rounded-lg bg-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="flex justify-center items-center p-4 rounded-md bg-gray-100 shadow-sm filter grayscale hover:grayscale-0 hover:bg-blue-100 hover:shadow-md transition duration-300 cursor-pointer"
        >
          <img
            src={brand.logo}
            alt={brand.name}
            className="max-h-16 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default BrandGrid;
