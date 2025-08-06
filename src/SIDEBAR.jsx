// import React, { useState } from 'react'
// import './SIDEBAR.css';

// function BookASite() {
//     // Navbar js 
//     const [isMenuOpen, setMenuOpen] = useState(false);
//     const toggleMenu = () => {
//         setMenuOpen(!isMenuOpen);
//     };
//     //Side Bar section
//     // const spots = [
//     //     {
//     //         id: 1,
//     //         location: "Chennai, TamilNadu",
//     //         price: "₹1,20,000",
//     //         dimensions: "24 x 30",
//     //         rating: 4.5,
//     //         imageUrl: "./images/spot1.png",
//     //     },
//     //     {
//     //         id: 2,
//     //         location: "Kanyakumari, TamilNadu",
//     //         price: "₹1,20,000",
//     //         dimensions: "24 x 30",
//     //         rating: 4.5,
//     //         imageUrl: "./images/spot2.png",
//     //     },
//     //     {
//     //         id: 3,
//     //         location: "Karaikudi TamilNadu",
//     //         price: "₹1,20,000",
//     //         dimensions: "24 x 30",
//     //         rating: 4.5,
//     //         imageUrl: "./images/spot3.png",
//     //     },
//     //     {
//     //         id: 4,
//     //         location: "Krishnagiri, TamilNadu",
//     //         price: "₹1,20,000",
//     //         dimensions: "24 x 30",
//     //         rating: 4.5,
//     //         imageUrl: "./images/spot1.png",
//     //     },
//     //     {
//     //         id: 5,
//     //         location: "Madurai, TamilNadu",
//     //         price: "₹1,20,000",
//     //         dimensions: "24 x 30",
//     //         rating: 4.5,
//     //         imageUrl: "./images/spot2.png",
//     //     },
//     //     {
//     //         id: 6,
//     //         location: "Mayiladuthurai, TamilNadu",
//     //         price: "₹1,20,000",
//     //         dimensions: "24 x 30",
//     //         rating: 4.5,
//     //         imageUrl: "./images/spot3.png",
//     //     },
//     //     {
//     //         id: 7,
//     //         location: "Pondicherry, TamilNadu",
//     //         price: "₹1,20,000",
//     //         dimensions: "24 x 30",
//     //         rating: 4.5,
//     //         imageUrl: "./images/spot1.png",
//     //     },
//     //     {
//     //         id: 8,
//     //         location: "Sivagangai, TamilNadu",
//     //         price: "₹1,20,000",
//     //         dimensions: "24 x 30",
//     //         rating: 4.5,
//     //         imageUrl: "./images/spot2.png",
//     //     },
//     //     {
//     //         id: 9,
//     //         location: "Trichy, TamilNadu",
//     //         price: "₹1,20,000",
//     //         dimensions: "24 x 30",
//     //         rating: 4.5,
//     //         imageUrl: "./images/spot3.png",
//     //     },
//     //     {
//     //         id: 10,
//     //         location: "Bangalore, Karnataka",
//     //         price: "₹1,20,000",
//     //         dimensions: "24 x 30",
//     //         rating: 4.5,
//     //         imageUrl: "./images/spot1.png",
//     //     },
//     //     {
//     //         id: 11,
//     //         location: "Mysore, Karnataka",
//     //         price: "₹1,20,000",
//     //         dimensions: "24 x 30",
//     //         rating: 4.5,
//     //         imageUrl: "./images/spot2.png",
//     //     },
//     //     {
//     //         id: 12,
//     //         location: "Mangalore, Karnataka",
//     //         price: "₹1,20,000",
//     //         dimensions: "24 x 30",
//     //         rating: 4.5,
//     //         imageUrl: "./images/spot3.png",
//     //     },
//     // ];
//     const spots = [
//         {
//             "id": 1,
//             "location": "Chennai, TamilNadu",
//             "price": 120000,
//             "dimensions": "24 x 30",
//             "rating": 4.5,
//             "category": "busShelter",
//             "imageUrl": "./images/bus_shelter_chennai.png"
//         },
//         {
//             "id": 2,
//             "location": "Kanyakumari, TamilNadu",
//             "price": 120000,
//             "dimensions": "24 x 30",
//             "rating": 4.5,
//             "imageUrl": "./images/spot2.png"
//         },
//         {
//             "id": 3,
//             "location": "Karaikudi, TamilNadu",
//             "price": 120000,
//             "dimensions": "24 x 30",
//             "rating": 4.5,
//             "imageUrl": "./images/spot3.png"
//         },
//         {
//             "id": 4,
//             "location": "Krishnagiri, TamilNadu",
//             "price": 120000,
//             "dimensions": "24 x 30",
//             "rating": 4.5,
//             "imageUrl": "./images/spot1.png"
//         },
//         {
//             "id": 5,
//             "location": "Madurai, TamilNadu",
//             "price": 95000,
//             "dimensions": "20 x 25",
//             "rating": 4.3,
//             "category": "wallHoarding",
//             "imageUrl": "./images/wall_hoarding_madurai.png"
//         },
//         {
//             "id": 6,
//             "location": "Mayiladuthurai, TamilNadu",
//             "price": 120000,
//             "dimensions": "24 x 30",
//             "rating": 4.5,
//             "imageUrl": "./images/spot3.png"
//         },
//         {
//             "id": 7,
//             "location": "Pondicherry, TamilNadu",
//             "price": 120000,
//             "dimensions": "24 x 30",
//             "rating": 4.5,
//             "imageUrl": "./images/spot1.png"
//         },
//         {
//             "id": 8,
//             "location": "Sivagangai, TamilNadu",
//             "price": 120000,
//             "dimensions": "24 x 30",
//             "rating": 4.5,
//             "imageUrl": "./images/spot2.png"
//         },
//         {
//             "id": 9,
//             "location": "Trichy, TamilNadu",
//             "price": 120000,
//             "dimensions": "24 x 30",
//             "rating": 4.5,
//             "imageUrl": "./images/spot3.png"
//         },
//         {
//             "id": 10,
//             "location": "Bangalore, Karnataka",
//             "price": 130000,
//             "dimensions": "26 x 32",
//             "rating": 4.7,
//             "category": "hoarding",
//             "imageUrl": "./images/hoarding_bangalore.png"
//         },
//         {
//             "id": 11,
//             "location": "Mysore, Karnataka",
//             "price": 80000,
//             "dimensions": "18 x 22",
//             "rating": 4.1,
//             "category": "busShelter",
//             "imageUrl": "./images/bus_shelter_mysore.png"
//         },
//         {
//             "id": 12,
//             "location": "Mangalore, Karnataka",
//             "price": 120000,
//             "dimensions": "24 x 30",
//             "rating": 4.5,
//             "imageUrl": "./images/spot3.png"
//         },
//         {
//             "id": 13,
//             "location": "Visakhapatnam, Andhra Pradesh",
//             "price": 115000,
//             "dimensions": "22 x 28",
//             "rating": 4.6,
//             "category": "gantry",
//             "imageUrl": "./images/gantry_visakhapatnam.png"
//         },
//         {
//             "id": 14,
//             "location": "Tirupati, Andhra Pradesh",
//             "price": 92000,
//             "dimensions": "21 x 26",
//             "rating": 4.2,
//             "category": "wallGraphic",
//             "imageUrl": "./images/wall_graphic_tirupati.png"
//         },
//         {
//             "id": 15,
//             "location": "Kochi, Kerala",
//             "price": 140000,
//             "dimensions": "28 x 34",
//             "rating": 4.8,
//             "category": "policeBooth",
//             "imageUrl": "./images/police_booth_kochi.png"
//         },
//         {
//             "id": 16,
//             "location": "Thrissur, Kerala",
//             "price": 88000,
//             "dimensions": "19 x 24",
//             "rating": 4.0,
//             "category": "signalPost",
//             "imageUrl": "./images/signal_post_thrissur.png"
//         },
//         {
//             "id": 17,
//             "location": "Hyderabad, Telangana",
//             "price": 125000,
//             "dimensions": "25 x 30",
//             "rating": 4.7,
//             "category": "poleKiosk",
//             "imageUrl": "./images/pole_kiosk_hyderabad.png"
//         },
//         {
//             "id": 18,
//             "location": "Warangal, Telangana",
//             "price": 90000,
//             "dimensions": "20 x 27",
//             "rating": 4.3,
//             "category": "unipole",
//             "imageUrl": "./images/unipole_warangal.png"
//         }
//     ]

//     // By for the first dropdown
//     const [isOpen1, setIsOpen1] = useState(false);
//     const [selected1, setSelected1] = useState("By");
//     // State for the second dropdown
//     const [isOpen2, setIsOpen2] = useState(false);
//     const [selected2, setSelected2] = useState("State");
//     // Functions for first dropdown
//     const toggleDropdown1 = () => {
//         setIsOpen1(!isOpen1);
//     };
//     const selectOption1 = (option) => {
//         setSelected1(option);
//         setIsOpen1(false); // Close dropdown after selection
//     };
//     const resetDropdown1 = (event) => {
//         event.stopPropagation(); // Prevent closing the dropdown on icon click
//         setSelected1("By"); // Reset selected value
//     };



//     const [selectedDistricts, setSelectedDistricts] = useState([]);
//     const [checkedDistricts, setCheckedDistricts] = useState([]);

//     // checkbox clicked function 
//     const toggleBackgroundColor = (event) => {
       
//         event.preventDefault(); // Prevent default click behavior (optional)
//         const formCheck = event.currentTarget;
//         const checkbox = formCheck.querySelector('.form-check-input');

//         if (!checkbox) return;

//         const districtId = checkbox.id;

//         // Toggle checkbox checked state
//         const isChecked = !checkbox.checked;
//         checkbox.checked = isChecked;

//         // Update state properly for rerender
//         setCheckedDistricts(prev =>
//             isChecked ? [...prev, districtId] : prev.filter(id => id !== districtId)
//         );

//         // Toggle the class based on checked state
//         if (isChecked) {
//             formCheck.classList.add('checked');
//         } else {
//             formCheck.classList.remove('checked');
//         }

//     }

//     const stateDistricts = {
//         "Tamilnadu": ["Chennai", "Kanyakumari", "Karaikudi", "Krishnagiri", "Madurai", "Mayiladuthurai", "Pondicherry", "Sivagangai", "Trichy"],
        // "Karnataka": ["Bangalore", "Mysore", "Mangalore", "Hubli-Dharwad", "Belgaum", "Davangere", "Bellary", "Tumkur", "Shimoga"],
        // "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Rajahmundry", "Nellore", "Kakinada", "Kadapa", "Anantapur"],
        // "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Palakkad", "Alappuzha", "Kannur", "Kottayam"],
        // "Telangana": ["Hyderabad", "Warangal", "Karimnagar", "Khammam", "Nizamabad", "Mahbubnagar", "Adilabad", "Siddipet", "Nalgonda"]
//     };

//     const toggleDropdown2 = () => setIsOpen2(prev => !prev);

//     const resetDropdown2 = () => {
//         setSelected2("State");
//         setCheckedDistricts([]);
//     };

//     const selectOption2 = (state) => {
//         setSelected2(state);
//         setCheckedDistricts([]); // reset selected districts
//     };






































//     const [selectedType, setSelectedType] = useState([]);
//     const [selectedPriceOrder, setSelectedPriceOrder] = useState("Price: Low to High");
//     const [selectedState, setSelectedState] = useState("State");


//     const handleTypeChange = (event) => {
//         const type = event.target.id;
//         setSelectedType(prevSelectedType =>
//             prevSelectedType.includes(type)
//                 ? prevSelectedType.filter(item => item !== type)
//                 : [...prevSelectedType, type]
//         );
//     };

//     const handlePriceChange = (option) => {
//         setSelectedPriceOrder(option);
//     };

//     const handleStateChange = (state) => {
//         setSelectedState(state);
//         setSelectedDistricts([]); // Reset districts when state is changed
//     };

//     const handleDistrictChange = (event) => {
//         const district = event.target.id;
//         setSelectedDistricts(prev =>
//             prev.includes(district)
//                 ? prev.filter(item => item !== district)
//                 : [...prev, district]
//         );
//     };

//     // Apply Filters
//     const filteredSpots = spots.filter(spot => {
//         // Filter by type (bus shelter, etc.)
//         if (selectedType.length > 0 && !selectedType.includes(spot.category)) {
//             return false;
//         }

//         // Filter by state and district
//         if (selectedState !== "State" && !stateDistricts[selectedState].includes(spot.location.split(",")[0])) {
//             return false;
//         }

//         // Filter by selected districts
//         if (selectedDistricts.length > 0 && !selectedDistricts.includes(spot.location.split(",")[0])) {
//             return false;
//         }

//         return true;
//     });

//     // Sort by price if needed
//     const sortedSpots = selectedPriceOrder === "Price: Low to High"
//         ? filteredSpots.sort((a, b) => a.price - b.price)
//         : selectedPriceOrder === "Price: High to Low"
//             ? filteredSpots.sort((a, b) => b.price - a.price)
//             : filteredSpots;


//     return (
//         <div>
//             {/* Side Bar section  */}
//             {/* Left Sidebar */}
//             <div className="container" style={{ margin: 'auto 3%' }}>
//                 <div className="row">
//                     <div className="col-12 col-md-3 sidebar-section p-3">
//                         <div className='outdoor mb-4'>
//                             <h5 className='sidebar-heading'>Outdoor Medium</h5>
//                             <form>
//                                 <div className="form-group">
                                   
//                                     <div className="form-check" onClick={toggleBackgroundColor}>
//                                         <input type="checkbox" className="form-check-input" id="busShelter" />
//                                         <label className="form-check-label" htmlFor="busShelter"> Bus shelter </label>
//                                     </div>

//                                     <div className="form-check" onClick={toggleBackgroundColor}      >
//                                         <input type="checkbox" className="form-check-input" id="gantry" />
//                                         <label className="form-check-label" htmlFor="gantry"> Gantry </label>
//                                     </div>

//                                     <div className="form-check" onClick={toggleBackgroundColor}      >
//                                         <input type="checkbox" className="form-check-input" id="hoarding" />
//                                         <label className="form-check-label" htmlFor="hoarding"> Hoarding </label>
//                                     </div>

//                                     <div className="form-check" onClick={toggleBackgroundColor}      >
//                                         <input type="checkbox" className="form-check-input" id="poleKiosk" />
//                                         <label className="form-check-label" htmlFor="poleKiosk"> Pole Kiosk </label>
//                                     </div>

//                                     <div className="form-check" onClick={toggleBackgroundColor}      >
//                                         <input type="checkbox" className="form-check-input" id="policeBooth" />
//                                         <label className="form-check-label" htmlFor="policeBooth"> Police Booth </label>
//                                     </div>

//                                     <div className="form-check" onClick={toggleBackgroundColor}      >
//                                         <input type="checkbox" className="form-check-input" id="signalPost" />
//                                         <label className="form-check-label" htmlFor="signalPost"> Signal Post</label>
//                                     </div>

//                                     <div className="form-check" onClick={toggleBackgroundColor}      >
//                                         <input type="checkbox" className="form-check-input" id="unipole" />
//                                         <label className="form-check-label" htmlFor="unipole"> Unipole </label>
//                                     </div>

//                                     <div className="form-check" onClick={toggleBackgroundColor}      >
//                                         <input type="checkbox" className="form-check-input" id="wallGraphic" />
//                                         <label className="form-check-label" htmlFor="wallGraphic"> Wall graphic </label>
//                                     </div>

//                                     <div className="form-check" onClick={toggleBackgroundColor}      >
//                                         <input type="checkbox" className="form-check-input" id="wallHoarding" />
//                                         <label className="form-check-label" htmlFor="wallHoarding"> Wall Hoarding</label>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>

//                         {/* Sorting */}
//                         <div className='sorting mb-4'>
//                             <h5 className='sidebar-heading'>Sort</h5>
//                             <div className="dropdown">
//                                 <div className={`select`} onClick={() => handlePriceChange("Price: Low to High")}>
//                                     <span>Price: Low to High</span>
//                                 </div>
//                                 <div className={`select`} onClick={() => handlePriceChange("Price: High to Low")}>
//                                     <span>Price: High to Low</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Location Filters */}
//                         <div className='location'>
//                             <h5 className='sidebar-heading'>Location</h5>
//                             <form>
//                                 <div className="form-group">
//                                     <div className="dropdown">
//                                         <div className="select" onClick={() => handleStateChange("Tamilnadu")}>
//                                             <span>Tamil Nadu</span>
//                                         </div>
//                                     </div>

//                                     {selectedState !== "State" && stateDistricts[selectedState]?.map(district => (
//                                         <div className="form-check" key={district} onClick={handleDistrictChange}>
//                                             <input type="checkbox" className="form-check-input" id={district} />
//                                             <label className="form-check-label" htmlFor={district}>
//                                                 {district}
//                                             </label>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </form>
//                         </div>
//                     </div>

//                     {/* Right Content Area */}
//                     <div className="col-12 col-md-9 py-3 px-0">
//                         <div className="row">
//                             {sortedSpots.map((spot) => (
//                                 <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={spot.id}>
//                                     <div className="card board">
//                                         <img src={spot.imageUrl} alt={spot.location} className="card-img-top" />
//                                         <div className="board-content">
//                                             <span className="card-title board-loc">{spot.location}</span>
//                                             <span className="board-dim">{spot.dimensions}</span>
//                                             <br /><br />
//                                             <span className="board-price">{spot.price}</span>
//                                             <span className="board-rating">
//                                                 <img src="./images/star-board.png" className="star" />
//                                             </span>
//                                             <br />
//                                             <button className="board-btn">Book Now</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>



//         </div>

//     )
// }
// export default BookASite;















































































import React, { useState, useEffect } from 'react';
import './SIDEBAR.css';

function BookASite() {
    const spots = [
            {
                "id": 1,
                "location": "Chennai, TamilNadu",
                "price": 120000,
                "dimensions": "24 x 30",
                "rating": 4.5,
                "category": "busShelter",
                "imageUrl": "./images/bus_shelter_chennai.png"
            },
            {
                "id": 2,
                "location": "Kanyakumari, TamilNadu",
                "price": 120000,
                "dimensions": "24 x 30",
                "rating": 4.5,
                "imageUrl": "./images/spot2.png"
            },
            {
                "id": 3,
                "location": "Karaikudi, TamilNadu",
                "price": 120000,
                "dimensions": "24 x 30",
                "rating": 4.5,
                "imageUrl": "./images/spot3.png"
            },
            {
                "id": 4,
                "location": "Krishnagiri, TamilNadu",
                "price": 120000,
                "dimensions": "24 x 30",
                "rating": 4.5,
                "imageUrl": "./images/spot1.png"
            },
            {
                "id": 5,
                "location": "Madurai, TamilNadu",
                "price": 95000,
                "dimensions": "20 x 25",
                "rating": 4.3,
                "category": "wallHoarding",
                "imageUrl": "./images/wall_hoarding_madurai.png"
            },
            {
                "id": 6,
                "location": "Mayiladuthurai, TamilNadu",
                "price": 120000,
                "dimensions": "24 x 30",
                "rating": 4.5,
                "imageUrl": "./images/spot3.png"
            },
            {
                "id": 7,
                "location": "Pondicherry, TamilNadu",
                "price": 120000,
                "dimensions": "24 x 30",
                "rating": 4.5,
                "imageUrl": "./images/spot1.png"
            },
            {
                "id": 8,
                "location": "Sivagangai, TamilNadu",
                "price": 120000,
                "dimensions": "24 x 30",
                "rating": 4.5,
                "imageUrl": "./images/spot2.png"
            },
            {
                "id": 9,
                "location": "Trichy, TamilNadu",
                "price": 120000,
                "dimensions": "24 x 30",
                "rating": 4.5,
                "imageUrl": "./images/spot3.png"
            },
            {
                "id": 10,
                "location": "Bangalore, Karnataka",
                "price": 130000,
                "dimensions": "26 x 32",
                "rating": 4.7,
                "category": "hoarding",
                "imageUrl": "./images/hoarding_bangalore.png"
            },
            {
                "id": 11,
                "location": "Mysore, Karnataka",
                "price": 80000,
                "dimensions": "18 x 22",
                "rating": 4.1,
                "category": "busShelter",
                "imageUrl": "./images/bus_shelter_mysore.png"
            },
            {
                "id": 12,
                "location": "Mangalore, Karnataka",
                "price": 120000,
                "dimensions": "24 x 30",
                "rating": 4.5,
                "imageUrl": "./images/spot3.png"
            },
            {
                "id": 13,
                "location": "Visakhapatnam, Andhra Pradesh",
                "price": 115000,
                "dimensions": "22 x 28",
                "rating": 4.6,
                "category": "gantry",
                "imageUrl": "./images/gantry_visakhapatnam.png"
            },
            {
                "id": 14,
                "location": "Tirupati, Andhra Pradesh",
                "price": 92000,
                "dimensions": "21 x 26",
                "rating": 4.2,
                "category": "wallGraphic",
                "imageUrl": "./images/wall_graphic_tirupati.png"
            },
            {
                "id": 15,
                "location": "Kochi, Kerala",
                "price": 140000,
                "dimensions": "28 x 34",
                "rating": 4.8,
                "category": "policeBooth",
                "imageUrl": "./images/police_booth_kochi.png"
            },
            {
                "id": 16,
                "location": "Thrissur, Kerala",
                "price": 88000,
                "dimensions": "19 x 24",
                "rating": 4.0,
                "category": "signalPost",
                "imageUrl": "./images/signal_post_thrissur.png"
            },
            {
                "id": 17,
                "location": "Hyderabad, Telangana",
                "price": 125000,
                "dimensions": "25 x 30",
                "rating": 4.7,
                "category": "poleKiosk",
                "imageUrl": "./images/pole_kiosk_hyderabad.png"
            },
            {
                "id": 18,
                "location": "Warangal, Telangana",
                "price": 90000,
                "dimensions": "20 x 27",
                "rating": 4.3,
                "category": "unipole",
                "imageUrl": "./images/unipole_warangal.png"
            }
        ];

    // States for filters
    const [isOpen1, setIsOpen1] = useState(false);
    const [selected1, setSelected1] = useState("By");

    const [isOpen2, setIsOpen2] = useState(false);
    const [selected2, setSelected2] = useState("State");

    const [selectedDistricts, setSelectedDistricts] = useState([]);
    const [checkedDistricts, setCheckedDistricts] = useState([]);

    const [categoryFilter, setCategoryFilter] = useState([]);
    const [ratingFilter, setRatingFilter] = useState(0);
    const [priceFilter, setPriceFilter] = useState('');

    const [filteredSpots, setFilteredSpots] = useState(spots); // To store filtered spots

    const stateDistricts = {
        "Tamilnadu": ["Chennai", "Kanyakumari", "Karaikudi", "Krishnagiri", "Madurai", "Mayiladuthurai", "Pondicherry", "Sivagangai", "Trichy"],
        "Karnataka": ["Bangalore", "Mysore", "Mangalore", "Hubli-Dharwad", "Belgaum", "Davangere", "Bellary", "Tumkur", "Shimoga"],
        "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Rajahmundry", "Nellore", "Kakinada", "Kadapa", "Anantapur"],
        "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Palakkad", "Alappuzha", "Kannur", "Kottayam"],
        "Telangana": ["Hyderabad", "Warangal", "Karimnagar", "Khammam", "Nizamabad", "Mahbubnagar", "Adilabad", "Siddipet", "Nalgonda"]
    };

    useEffect(() => {
        // Apply filtering logic here
        let filtered = spots;

        // Category Filter
        if (categoryFilter.length > 0) {
            filtered = filtered.filter(spot => categoryFilter.includes(spot.category));
        }

        // Rating Filter
        if (ratingFilter > 0) {
            filtered = filtered.filter(spot => spot.rating >= ratingFilter);
        }

        // Price Filter (Low to High / High to Low)
        if (priceFilter === "Price: Low to High") {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (priceFilter === "Price: High to Low") {
            filtered = filtered.sort((a, b) => b.price - a.price);
        }

        // State and District Filter
        if (selected2 !== "State") {
            filtered = filtered.filter(spot => selectedDistricts.includes(spot.location.split(",")[0]));
        }

        setFilteredSpots(filtered); // Update the filtered spots
    }, [categoryFilter, ratingFilter, priceFilter, selectedDistricts, selected2]);

    // Functions to handle dropdown toggles and filter selections

    const toggleDropdown1 = () => setIsOpen1(prev => !prev);
    const selectOption1 = (option) => {
        setSelected1(option);
        setPriceFilter(option);
        setIsOpen1(false);
    };
    const resetDropdown1 = (event) => {
        event.stopPropagation();
        setSelected1("By");
    };

    const toggleDropdown2 = () => setIsOpen2(prev => !prev);
    const selectOption2 = (state) => {
        setSelected2(state);
        setCheckedDistricts([]); // reset selected districts
        setSelectedDistricts(stateDistricts[state]); // Automatically select all districts of the selected state
    };
    const resetDropdown2 = () => {
        setSelected2("State");
        setCheckedDistricts([]);
    };

    // Checkbox Filter Logic (for category filtering)
    const toggleCategoryFilter = (event) => {
        const category = event.target.id;
        setCategoryFilter(prev => {
            if (prev.includes(category)) {
                return prev.filter(item => item !== category);
            } else {
                return [...prev, category];
            }
        });
    };

    // Render filtered spots
    return (
        <div>
            <div className="container" style={{ margin: 'auto 3%' }}>
                <div className="row">
                    {/* Left Sidebar */}
                    <div className="col-12 col-md-3 sidebar-section p-3">
                        <div className="outdoor mb-4">
                            <h5 className="sidebar-heading">Outdoor Medium</h5>
                            <form>
                                <div className="form-group">
                                    {["busShelter", "gantry", "hoarding", "poleKiosk", "policeBooth", "signalPost", "unipole", "wallGraphic", "wallHoarding"].map((category) => (
                                        <div className="form-check" onClick={toggleCategoryFilter} key={category}>
                                            <input type="checkbox" className="form-check-input" id={category} />
                                            <label className="form-check-label" htmlFor={category}>{category.replace(/([A-Z])/g, ' $1')}</label>
                                        </div>
                                    ))}
                                </div>
                            </form>
                        </div>

                        {/* Sorting Dropdown */}
                        <div className="sorting mb-4">
                            <h5 className="sidebar-heading">Sort</h5>
                            <div className="dropdown">
                                <div
                                    className={`select ${isOpen1 ? "select-clicked" : ""} ${selected1 !== "By" ? "selected-active-bg" : ""}`}
                                    onClick={toggleDropdown1}
                                >
                                    <span className={`selected ${selected1 !== "By" ? "selected-active" : ""}`}>{selected1}</span>
                                    {selected1 === "By" ? (
                                        <i className={`fa-solid fa-caret-down ${isOpen1 ? "caret-rotate" : ""}`}></i>
                                    ) : (
                                        <i className="fa-solid fa-circle-xmark" onClick={resetDropdown1} style={{ color: "black" }}></i>
                                    )}
                                </div>

                                <ul className={`menu ${isOpen1 ? "menu-open" : ""}`}>
                                    <li onClick={() => selectOption1("Price: Low to High")}>Price: Low to High</li>
                                    <li onClick={() => selectOption1("Price: High to Low")}>Price: High to Low</li>
                                </ul>
                            </div>
                        </div>

                        {/* Location Filters */}
                        <div className="location">
                            <h5 className="sidebar-heading">Location</h5>
                            <form>
                                <div className="form-group">
                                    <div className="dropdown">
                                        <div
                                            className={`select ${isOpen2 ? "select-clicked" : ""} ${selected2 !== "State" ? "selected2-active-bg" : ""}`}
                                            onClick={toggleDropdown2}
                                        >
                                            <span className={`selected ${selected2 !== "State" ? "selected2-active" : ""}`}>{selected2}</span>
                                            {selected2 === "State" ? (
                                                <i className={`fa-solid fa-caret-down ${isOpen2 ? "caret-rotate" : ""}`}></i>
                                            ) : (
                                                <i className="fa-solid fa-circle-xmark" onClick={resetDropdown2} style={{ color: "white" }}></i>
                                            )}
                                        </div>

                                        <ul className={`menu ${isOpen2 ? "menu-open" : ""}`}>
                                            {["Tamilnadu", "Karnataka", "Andhra Pradesh", "Kerala", "Telangana"].map((state) => (
                                                <li
                                                    className={selected2 === state ? "active" : ""}
                                                    onClick={() => selectOption2(state)}
                                                    key={state}
                                                >
                                                    {state}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="col-12 col-md-9 py-3 px-0">
                        <div className="row">
                            {filteredSpots.map((spot) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={spot.id}>
                                    <div className="card board">
                                        <img src={spot.imageUrl} alt={spot.location} className="card-img-top" />
                                        <div className="board-content">
                                            <span className="card-title board-loc">{spot.location}</span>
                                            <span className="board-dim">{spot.dimensions}</span>
                                            <br /><br />
                                            <span className="board-price">{spot.price}</span>
                                            <span className="board-rating">
                                                <img src="./images/star-board.png" className="star" />
                                                {spot.rating}
                                            </span>
                                            <br />
                                            <button className="board-btn">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BookASite;
