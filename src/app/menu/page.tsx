import Image from "next/image";

export default function Menu() {
  return (
  
    <div>
        <div
  className="w-full p-10 bg-no-repeat bg-center flex justify-center"
  style={{
    backgroundImage: "url('/unsplash.png')",
    backgroundSize: "cover", // Use 'cover' to ensure the image covers the area correctly
    backgroundPosition: "center top",
  }}
>
  {/* Header Section */}
  <div className="w-full max-w-5xl flex flex-col justify-center items-center text-white mb-10">
    <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">Our Menu</p>
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
      <p className="text-xl sm:text-2xl md:text-3xl">Home</p>
      <div className="flex items-center">
        <Image src="/Vector.png" width={10} height={10} alt="Vector Icon" />
        <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D]">Menu</p>
      </div>
    </div>
  </div>
</div>



<div className="w-full max-w-[1320px] h-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center mt-10 px-4">
  {/* Image on the left */}
  <div className="flex justify-center items-center mb-6 lg:mb-0">
    <Image
      src="/startermenu.png"
      width={448}
      height={626}
      alt="Starter Menu Image"
    />
  </div>

  {/* Text on the right */}
  <div className="flex flex-col justify-center items-start lg:pl-12 mt-0">
    <Image
      src="/Coffee.png"
      width={24}
      height={24}
      alt="Starter Menu Icon"
    />
    <p className="font-bold text-[28px] sm:text-[32px] md:text-[40px]" style={{ color: "#333333" }}>
      Starter Menu
    </p>

    {/* Menu Items */}
    <div className="w-full mt-9">
      {/* Menu Item 1 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
          Alder Grilled Chinook Salmon
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          32$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">Toasted French bread topped with romano, cheddar</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">560 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 2 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          Berries and Creme Tart
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          43$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">Gorgonzola, ricotta, mozzarella, taleggio</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">700 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 3 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
          Tormentoso Bush Pizza Pintoage
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          14$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">Ground cumin, avocados, peeled and cubed</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">1000 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 4 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
          Spicy Vegan Potato Curry
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          35$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">Spreadable cream cheese, crumbled blue cheese</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">560 CAL</p>
    </div>
  </div>
</div>


       {/* Main Course Section */}
<div className="w-full max-w-[1320px] h-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center px-4 mt-20">
  {/* Text on the left */}
  <div className="flex flex-col justify-center items-start lg:pl-12 mt-0 mb-6 lg:mb-0">
    <Image
      src="/Coffee.png"
      width={24}
      height={24}
      alt="Main Course Icon"
    />
    <p className="font-bold text-[28px] sm:text-[32px] md:text-[40px]" style={{ color: "#333333" }}>
      Main Course
    </p>

    {/* Menu Items */}
    <div className="w-full mt-9">
      {/* Menu Item 1 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
          Optic Big Breakfast Combo Menu
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          32$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">Toasted French bread topped with romano, cheddar</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">560 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 2 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          Cashew Chicken With Stir-Fry
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          43$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">Gorgonzola, ricotta, mozzarella, taleggio</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">700 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 3 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
          Vegetables & Green Salad
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          14$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">Ground cumin, avocados, peeled and cubed</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">1000 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 4 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
          Spicy Vegan Potato Curry
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          35$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">Spreadable cream cheese, crumbled blue cheese</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">560 CAL</p>
    </div>
  </div>

  {/* Image on the right */}
  <div className="flex justify-center items-center sm:pl-16 lg:pl-0">
    <Image
      src="/maincourse.png"
      width={448}
      height={626}
      alt="Main Course Image"
    />
  </div>
</div>



     


<div className="relative w-full mt-6">
  {/* Background Image */}
  <img
    src="bg.png"
    alt="Background"
    className="w-full h-full object-cover" // Ensures the background fills the area properly
    style={{
      opacity: 1, // Keep the image fully visible without dimming
    }}
  />

  {/* Black Overlay */}
  <div
    className="absolute top-0 left-0 w-full h-full bg-black"
    style={{
      opacity: 0.8, // Set overlay opacity to 80%
    }}
  >
    {/* Image Section */}
    <div className="w-full h-full flex justify-center items-center px-4 pt-32 space-x-4 sm:space-x-6 md:space-x-8">
      <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8">
        <Image
          src="/cf.png"
          width={150}  // Default width for small screens
          height={180} // Default height for small screens
          alt="Starter Menu Image"
          className="object-contain w-[150px] h-[180px] sm:w-[200px] sm:h-[240px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[350px]"  // Responsive sizes for larger screens
        />
        <Image
          src="/bu.png"
          width={150}  // Default width for small screens
          height={180} // Default height for small screens
          alt="Starter Menu Image"
          className="object-contain w-[150px] h-[180px] sm:w-[200px] sm:h-[240px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[350px]"  // Responsive sizes for larger screens
        />
        <Image
          src="/sp.png"
          width={150}  // Default width for small screens
          height={180} // Default height for small screens
          alt="Starter Menu Image"
          className="object-contain w-[150px] h-[180px] sm:w-[200px] sm:h-[240px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[350px]"  // Responsive sizes for larger screens
        />
        <Image
          src="/pz.png"
          width={150}  // Default width for small screens
          height={180} // Default height for small screens
          alt="Starter Menu Image"
          className="object-contain w-[150px] h-[180px] sm:w-[200px] sm:h-[240px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[350px]"  // Responsive sizes for larger screens
        />
      </div>
    </div>
  </div>
</div>





  <div className="w-full max-w-[1320px] h-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center mt-10 px-4">
  {/* Image on the left */}
  <div className="flex justify-center items-center mb-6 lg:mb-0">
    <Image
      src="/ice.png"
      width={448}
      height={626}
      alt="Starter Menu Image"
    />
  </div>

{/* Text on the right */}
<div className="flex flex-col justify-center items-start lg:pl-12 mt-0">
    <Image
      src="/coffee.png"
      width={24}
      height={24}
      alt="Starter Menu Icon"
    />
    <p className="font-bold text-[28px] sm:text-[32px] md:text-[40px]" style={{ color: "#333333" }}>
      Dessert
    </p>

    {/* Menu Items */}
    <div className="w-full mt-9">
      {/* Menu Item 1 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
        Fig and lemon cake
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          32$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">Toasted French bread topped with romano, cheddar</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">560 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 2 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
        Creamy mascarpone cake
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          43$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">Gorgonzola, ricotta, mozzarella, taleggio</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">700 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 3 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
        Pastry, blueberries, lemon juice
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          14$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">Ground cumin, avocados, peeled and cubed</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">1000 CAL</p>
    </div>

    <div className="w-full mt-9">
      {/* Menu Item 4 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#333333" }}>
        Pain au chocolat
        </p>
        <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px]" style={{ color: "#FF9F0D" }}>
          35$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">Spreadable cream cheese, crumbled blue cheese</p>
      <p className="text-[14px] sm:text-[16px] md:text-[16px]">560 CAL</p>
    </div>
  </div>
  </div>
  


  





<div className="w-full max-w-[1320px] h-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center pl-4 lg:pl-10 mt-10 lg:mt-20">
  {/* Text on the left */}
  <div className="flex flex-col justify-center items-start lg:pl-12 mt-6 lg:mt-0">
    <Image
      src="/Coffee.png"
      width={24}
      height={24}
      alt="drink"
    />
    <p className="font-bold text-[32px] sm:text-[36px] lg:text-[48px]" style={{ color: "#333333" }}>
      Drinks
    </p>

    {/* Menu Items */}
    <div className="w-full mt-6 sm:mt-9">
      {/* Menu Item 1 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#333333" }}>
          Caffè macchiato
        </p>
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#FF9F0D" }}>
          32$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px]">Toasted French bread topped with romano, cheddar</p>
      <p className="text-[14px] sm:text-[16px]">560 CAL</p>
    </div>

    <div className="w-full mt-6 sm:mt-9">
      {/* Menu Item 2 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#FF9F0D" }}>
          Aperol Spritz Capacianno
        </p>
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#FF9F0D" }}>
          43$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px]">Gorgonzola, ricotta, mozzarella, taleggio</p>
      <p className="text-[14px] sm:text-[16px]">700 CAL</p>
    </div>

    <div className="w-full mt-6 sm:mt-9">
      {/* Menu Item 3 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#333333" }}>
          Caffe Latte Campuri
        </p>
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#FF9F0D" }}>
          14$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px]">Ground cumin, avocados, peeled and cubed</p>
      <p className="text-[14px] sm:text-[16px]">1000 CAL</p>
    </div>

    <div className="w-full mt-6 sm:mt-9">
      {/* Menu Item 4 */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#333333" }}>
          Tormentoso BushTea Pintoage
        </p>
        <p className="font-bold text-[20px] sm:text-[22px] lg:text-[24px]" style={{ color: "#FF9F0D" }}>
          35$
        </p>
      </div>
      <p className="text-[14px] sm:text-[16px]">Spreadable cream cheese, crumbled blue cheese</p>
      <p className="text-[14px] sm:text-[16px]">560 CAL</p>
    </div>
  </div>

  {/* Image on the right */}
  <div className="flex justify-center items-center lg:pl-12 mt-6 lg:mt-0">
    <Image
      src="/drink.png"
      width={448}
      height={626}
      alt="Drink Image"
      className="object-contain"
    />
  </div>
</div>


        
<div className="w-full max-w-[1322px] px-4 mt-20">
    <p className="text-[#333333] text-[18px] text-center">Partners & Clients</p>
    <p className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-center">We work with the best people</p>

    <div className="w-full flex justify-center pt-8 items-center space-x-4 overflow-x-auto lg:overflow-x-hidden flex-wrap gap-4">
        <div className="flex justify-center items-center">
            <Image
                src="/image1.png"
                width={240.96}
                height={229.23}
                alt="Partner 1"
            />
        </div>
        <div className="flex justify-center items-center">
            <Image
                src="/image2.png"
                width={166.04}
                height={128.68}
                alt="Partner 2"
            />
        </div>
        <div className="flex justify-center items-center">
            <Image
                src="/image3.png"
                width={143.98}
                height={127.10}
                alt="Partner 3"
            />
        </div>
        <div className="flex justify-center items-center">
            <Image
                src="/image 4.png"
                width={130.98}
                height={129.37}
                alt="Partner 4"
            />
        </div>
        <div className="flex justify-center items-center">
            <Image
                src="/image5.png"
                width={169.97}
                height={129.17}
                alt="Partner 5"
            />
        </div>
        <div className="flex justify-center items-center">
            <Image
                src="/image6.png"
                width={113.98}
                height={129.08}
                alt="Partner 6"
            />
        </div>
    </div>
</div>


    
    </div>

  );
}


