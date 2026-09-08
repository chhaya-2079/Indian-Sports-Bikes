const bikes = [
  {
    id: 1,
    name: "Continental GT 650",
    brand: "Royal Enfield",
    category: "Street Bikes",
    engine: "648cc",
    price: "₹3.19 Lakh",
    power: "47 hp",
    torque: "52 Nm",
    mileage: "27 km/l",
    topSpeed: "169 km/h",
    weight: "198 kg",
    fuel: "12.5 L",
    transmission: "6-Speed",
    description:
      "A stylish twin-cylinder motorcycle combining classic design with modern performance.",
    image:
      "/images/bikes/continental-gt-650.jpg"
   },

  {
    id: 2,
    name: "Speed 400",
    brand: "Triumph",
    category: "Street Bikes",
    engine: "398cc",
    price: "₹2.40 Lakh",
    power: "40 PS",
    torque: "37.5 Nm",
    mileage: "30 km/l",
    topSpeed: "160 km/h",
    weight: "170 kg",
    fuel: "13 L",
    transmission: "6-Speed",
    description:
      "A modern roadster offering strong performance, comfortable ergonomics and premium styling.",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 3,
    name: "CB300R",
    brand: "Honda",
    category: "Street Bikes",
    engine: "286cc",
    price: "₹2.40 Lakh",
    power: "31.1 PS",
    torque: "27.5 Nm",
    mileage: "30 km/l",
    topSpeed: "160 km/h",
    weight: "146 kg",
    fuel: "9.7 L",
    transmission: "6-Speed",
    description:
      "A lightweight premium street motorcycle designed for agile handling and everyday performance.",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 4,
    name: "MT-15 V2",
    brand: "Yamaha",
    category: "Street Bikes",
    engine: "155cc",
    price: "₹1.70 Lakh",
    power: "18.4 PS",
    torque: "14.1 Nm",
    mileage: "45 km/l",
    topSpeed: "130 km/h",
    weight: "141 kg",
    fuel: "10 L",
    transmission: "6-Speed",
    description:
      "A lightweight streetfighter known for its aggressive design, responsive engine and excellent city handling.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 5,
    name: "Apache RTR 310",
    brand: "TVS",
    category: "Street Bikes",
    engine: "312cc",
    price: "₹2.50 Lakh",
    power: "35.6 PS",
    torque: "28.7 Nm",
    mileage: "30 km/l",
    topSpeed: "160 km/h",
    weight: "169 kg",
    fuel: "11 L",
    transmission: "6-Speed",
    description:
      "A performance-focused street motorcycle combining sharp styling, advanced technology and strong acceleration.",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 6,
    name: "R15 V4",
    brand: "Yamaha",
    category: "Supersport Bikes",
    engine: "155cc",
    price: "₹1.85 Lakh",
    power: "18.4 PS",
    torque: "14.2 Nm",
    mileage: "45 km/l",
    topSpeed: "140 km/h",
    weight: "141 kg",
    fuel: "11 L",
    transmission: "6-Speed",
    description:
      "A lightweight supersport motorcycle with aggressive styling, strong handling and advanced electronics.",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 7,
    name: "RC 390",
    brand: "KTM",
    category: "Supersport Bikes",
    engine: "399cc",
    price: "₹3.20 Lakh",
    power: "43.5 PS",
    torque: "37 Nm",
    mileage: "27 km/l",
    topSpeed: "170 km/h",
    weight: "172 kg",
    fuel: "13.7 L",
    transmission: "6-Speed",
    description:
      "A sharp and aggressive fully faired motorcycle built for sporty handling and exciting performance.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 8,
    name: "Ninja 300",
    brand: "Kawasaki",
    category: "Supersport Bikes",
    engine: "296cc",
    price: "₹3.43 Lakh",
    power: "39 PS",
    torque: "26.1 Nm",
    mileage: "30 km/l",
    topSpeed: "182 km/h",
    weight: "179 kg",
    fuel: "17 L",
    transmission: "6-Speed",
    description:
      "A twin-cylinder sportbike offering smooth performance, comfortable ergonomics and iconic Ninja styling.",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 9,
    name: "RS 457",
    brand: "Aprilia",
    category: "Supersport Bikes",
    engine: "457cc",
    price: "₹4.20 Lakh",
    power: "48 PS",
    torque: "43.5 Nm",
    mileage: "30 km/l",
    topSpeed: "190 km/h",
    weight: "175 kg",
    fuel: "13 L",
    transmission: "6-Speed",
    description:
      "A premium lightweight sportbike combining Italian styling, strong acceleration and sharp handling.",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 10,
    name: "R3",
    brand: "Yamaha",
    category: "Supersport Bikes",
    engine: "321cc",
    price: "₹3.50 Lakh",
    power: "42 PS",
    torque: "29.5 Nm",
    mileage: "28 km/l",
    topSpeed: "180 km/h",
    weight: "169 kg",
    fuel: "14 L",
    transmission: "6-Speed",
    description:
      "A refined twin-cylinder sportbike designed for balanced performance, high-speed stability and everyday usability.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 11,
    name: "390 Duke",
    brand: "KTM",
    category: "Naked Bikes",
    engine: "399cc",
    price: "₹3.00 Lakh",
    power: "46 PS",
    torque: "39 Nm",
    mileage: "30 km/l",
    topSpeed: "167 km/h",
    weight: "168 kg",
    fuel: "15 L",
    transmission: "6-Speed",
    description:
      "A powerful street naked motorcycle with aggressive styling, sharp handling and strong mid-range performance.",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 12,
    name: "G 310 R",
    brand: "BMW",
    category: "Naked Bikes",
    engine: "313cc",
    price: "₹3.00 Lakh",
    power: "34 PS",
    torque: "28 Nm",
    mileage: "30 km/l",
    topSpeed: "143 km/h",
    weight: "158 kg",
    fuel: "11 L",
    transmission: "6-Speed",
    description:
      "A compact premium roadster offering agile handling, comfortable ergonomics and BMW styling.",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 13,
    name: "Z650",
    brand: "Kawasaki",
    category: "Naked Bikes",
    engine: "649cc",
    price: "₹6.80 Lakh",
    power: "68 PS",
    torque: "64 Nm",
    mileage: "21 km/l",
    topSpeed: "191 km/h",
    weight: "192 kg",
    fuel: "15 L",
    transmission: "6-Speed",
    description:
      "A powerful parallel-twin naked motorcycle combining strong acceleration with everyday road usability.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 14,
    name: "CB650R",
    brand: "Honda",
    category: "Naked Bikes",
    engine: "649cc",
    price: "₹9.20 Lakh",
    power: "95 PS",
    torque: "63 Nm",
    mileage: "20 km/l",
    topSpeed: "200 km/h",
    weight: "202 kg",
    fuel: "15.4 L",
    transmission: "6-Speed",
    description:
      "A premium four-cylinder naked motorcycle delivering smooth high-revving performance and modern styling.",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 15,
    name: "Street Triple 765",
    brand: "Triumph",
    category: "Naked Bikes",
    engine: "765cc",
    price: "₹10.40 Lakh",
    power: "120 PS",
    torque: "80 Nm",
    mileage: "19 km/l",
    topSpeed: "225 km/h",
    weight: "189 kg",
    fuel: "15 L",
    transmission: "6-Speed",
    description:
      "A high-performance roadster featuring a powerful three-cylinder engine, precise handling and premium electronics.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 16,
    name: "Himalayan 450",
    brand: "Royal Enfield",
    category: "Adventure Bikes",
    engine: "452cc",
    price: "₹2.90 Lakh",
    power: "40 PS",
    torque: "40 Nm",
    mileage: "30 km/l",
    topSpeed: "150 km/h",
    weight: "196 kg",
    fuel: "17 L",
    transmission: "6-Speed",
    description:
      "A capable adventure motorcycle designed for long-distance touring, rough roads and off-road exploration.",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 17,
    name: "390 Adventure",
    brand: "KTM",
    category: "Adventure Bikes",
    engine: "399cc",
    price: "₹3.40 Lakh",
    power: "46 PS",
    torque: "39 Nm",
    mileage: "28 km/l",
    topSpeed: "160 km/h",
    weight: "176 kg",
    fuel: "14.5 L",
    transmission: "6-Speed",
    description:
      "A sporty adventure motorcycle built for touring, challenging roads and confident off-road riding.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 18,
    name: "G 310 GS",
    brand: "BMW",
    category: "Adventure Bikes",
    engine: "313cc",
    price: "₹3.30 Lakh",
    power: "34 PS",
    torque: "28 Nm",
    mileage: "29 km/l",
    topSpeed: "143 km/h",
    weight: "175 kg",
    fuel: "11 L",
    transmission: "6-Speed",
    description:
      "A premium compact adventure motorcycle designed for city riding, touring and light off-road use.",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 19,
    name: "Scrambler 400 X",
    brand: "Triumph",
    category: "Adventure Bikes",
    engine: "398cc",
    price: "₹2.70 Lakh",
    power: "40 PS",
    torque: "37.5 Nm",
    mileage: "28 km/l",
    topSpeed: "180 km/h",
    weight: "179 kg",
    fuel: "13 L",
    transmission: "6-Speed",
    description:
      "A versatile scrambler with rugged styling, comfortable ergonomics and the ability to handle varied terrain.",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 20,
    name: "V-Strom 250",
    brand: "Suzuki",
    category: "Adventure Bikes",
    engine: "249cc",
    price: "₹2.20 Lakh",
    power: "26.5 PS",
    torque: "22.2 Nm",
    mileage: "35 km/l",
    topSpeed: "150 km/h",
    weight: "167 kg",
    fuel: "12 L",
    transmission: "6-Speed",
    description:
      "A practical adventure-tourer focused on comfortable long-distance riding and everyday versatility.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 21,
    name: "Dominar 400",
    brand: "Bajaj",
    category: "Performance Bikes",
    engine: "373cc",
    price: "₹2.30 Lakh",
    power: "40 PS",
    torque: "35 Nm",
    mileage: "30 km/l",
    topSpeed: "156 km/h",
    weight: "193 kg",
    fuel: "13 L",
    transmission: "6-Speed",
    description:
      "A powerful sports-tourer designed for highway performance, long-distance riding and comfortable cruising.",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 22,
    name: "Ninja 650",
    brand: "Kawasaki",
    category: "Performance Bikes",
    engine: "649cc",
    price: "₹7.40 Lakh",
    power: "68 PS",
    torque: "64 Nm",
    mileage: "21 km/l",
    topSpeed: "210 km/h",
    weight: "196 kg",
    fuel: "15 L",
    transmission: "6-Speed",
    description:
      "A versatile twin-cylinder sportbike delivering strong performance with comfortable everyday ergonomics.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 23,
    name: "Pulsar NS400Z",
    brand: "Bajaj",
    category: "Performance Bikes",
    engine: "373cc",
    price: "₹1.90 Lakh",
    power: "40.5 PS",
    torque: "39 Nm",
    mileage: "30 km/l",
    topSpeed: "157 km/h",
    weight: "174 kg",
    fuel: "12 L",
    transmission: "6-Speed",
    description:
      "A performance-focused street motorcycle offering strong acceleration, sporty handling and aggressive styling.",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 24,
    name: "Interceptor 650",
    brand: "Royal Enfield",
    category: "Performance Bikes",
    engine: "648cc",
    price: "₹3.40 Lakh",
    power: "47 PS",
    torque: "52 Nm",
    mileage: "25 km/l",
    topSpeed: "169 km/h",
    weight: "218 kg",
    fuel: "13.7 L",
    transmission: "6-Speed",
    description:
      "A twin-cylinder roadster combining classic styling with relaxed highway performance and strong torque.",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 25,
    name: "250 Duke",
    brand: "KTM",
    category: "Performance Bikes",
    engine: "249cc",
    price: "₹2.10 Lakh",
    power: "31 PS",
    torque: "25 Nm",
    mileage: "30 km/l",
    topSpeed: "150 km/h",
    weight: "162 kg",
    fuel: "15 L",
    transmission: "6-Speed",
    description:
      "A lightweight performance motorcycle offering agile handling, responsive acceleration and aggressive street styling.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80"
  }
];

export default bikes;
