import React, { useState } from "react";

const spots = [
    { id: 1, location: "Chennai, TamilNadu", price: 120000, dimensions: "24 x 30", rating: 4.5, category: "busShelter", imageUrl: "./images/spot1.png" },
    { id: 2, location: "Kanyakumari, TamilNadu", price: 100000, dimensions: "24 x 30", rating: 4.0, category: "hoarding", imageUrl: "./images/spot2.png" },
    { id: 13, location: "Chennai, TamilNadu", price: 90000, dimensions: "20 x 25", rating: 4.2, category: "busShelter", imageUrl: "./images/bus_shelter_chennai.png" },
    { id: 14, location: "Chennai, TamilNadu", price: 110000, dimensions: "25 x 30", rating: 4.8, category: "hoarding", imageUrl: "./images/hoarding_chennai.png" },
    { id: 15, location: "Bangalore, Karnataka", price: 95000, dimensions: "22 x 28", rating: 4.3, category: "busShelter", imageUrl: "./images/bus_shelter_bangalore.png" }
];

export default function SpotsFilter() {
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortOption, setSortOption] = useState("");

    const filterSpots = () => {
        let filtered = spots;

        if (selectedLocation) {
            filtered = filtered.filter(spot => spot.location.includes(selectedLocation));
        }

        if (selectedCategory) {
            filtered = filtered.filter(spot => spot.category === selectedCategory);
        }

        if (sortOption === "Price: Low to High") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOption === "Price: High to Low") {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortOption === "Popularity: High to Low") {
            filtered.sort((a, b) => b.rating - a.rating);
        } else if (sortOption === "Popularity: Low to High") {
            filtered.sort((a, b) => a.rating - b.rating);
        }

        return filtered;
    };

    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            <h2 className="text-xl font-bold mb-3">Filter Spots</h2>

            {/* 🔹 Location Dropdown */}
            <select className="p-2 border rounded mr-3" onChange={(e) => setSelectedLocation(e.target.value)}>
                <option value="">Select Location</option>
                <option value="Chennai, TamilNadu">Chennai, TamilNadu</option>
                <option value="Kanyakumari, TamilNadu">Kanyakumari, TamilNadu</option>
                <option value="Bangalore, Karnataka">Bangalore, Karnataka</option>
            </select>

            {/* 🔹 Sorting Dropdown */}
            <select className="p-2 border rounded mr-3" onChange={(e) => setSortOption(e.target.value)}>
                <option value="">Sort By</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Popularity: High to Low">Popularity: High to Low</option>
                <option value="Popularity: Low to High">Popularity: Low to High</option>
            </select>

            {/* 🔹 Category Checkboxes */}
            <div className="flex gap-4 mt-3">
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2" value="busShelter" onChange={(e) => setSelectedCategory(e.target.checked ? e.target.value : "")} />
                    Bus Shelter
                </label>
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2" value="hoarding" onChange={(e) => setSelectedCategory(e.target.checked ? e.target.value : "")} />
                    Hoarding
                </label>
            </div>

            {/* 🔹 Display Filtered Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {filterSpots().map(spot => (
                    <div key={spot.id} className="bg-white p-3 rounded shadow-lg">
                        <img src={spot.imageUrl} alt={spot.location} className="w-full h-40 object-cover rounded" />
                        <h3 className="text-lg font-semibold mt-2">{spot.location}</h3>
                        <p className="text-gray-600">Category: {spot.category}</p>
                        <p className="text-blue-500 font-bold">₹{spot.price.toLocaleString()}</p>
                        <p className="text-yellow-500">⭐ {spot.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
