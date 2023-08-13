import React from 'react'
import IconBxBed from './IconBxBed';
import IconShapeRhombus from './IconShapeRhombus';
import IconBxsBath from './IconBxsBath';
import IconHeart from './IconHeart';
const PropertyListing = ({ properties }) => {
    return (
      <div className="grid grid-cols-3 gap-4 ml-5">
        {properties.map((property, index) => (
          <div className="property-item" key={index}>
            
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow white:bg-gray-800 white:border-gray-700">

                <p>
                    <img class="rounded-t-lg" src={property.image_url} alt={property.property_name} />
                </ p>
                <div class="p-3">
                < p    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700  hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                Popular
                </p>
                <div class="flex items-center mt-2.5 mb-5">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            {/* <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg> */}
            
        </div>
            
            <p>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{property.property_name}</h5>
            </ p>
            <div class="flex items-center justify-between">
            <p class="text-3xl font-bold text-gray-900 dark:text-black">${property.rent_per_month}</p>   
            <IconHeart/>

    </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Address: {property.address}        </p>
            <div className='flex mb-3'>
                <IconBxBed/>            
                <div class="ml-2  mr-2 font-normal text-gray-700 dark:text-gray-400 ">{property.number_of_beds} beds</div>
                <IconBxsBath/>
                <div class=" mr-3 ml-2 font-normal text-gray-700 dark:text-gray-400">{property.number_of_bathrooms} bathrooms </div>
                <IconShapeRhombus/>
                <div class="ml-3 mr-2 font-normal text-gray-700 dark:text-gray-400">{property.area} sq ft</div>
            </div>

            
    </div>
    
</div>















            {/* <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    < p   >
        <img class="p-8 rounded-t-lg" src={property.image_url} alt={property.property_name} />
    </ p>
    <div class="px-5 pb-5">
        < p   >
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{property.property_name}</h5>
        </ p>
        <div class="flex items-center mt-2.5 mb-5">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-800 ml-3">Popular</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${property.rent_per_month}</span>
            < p    class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">{property.address}</ p>
        </div>
    </div>
</div> */}



{/* 
            <img src={property.image_url} alt={property.property_name} />
            <h2>{property.property_name}</h2>
            <p>Rent per month: ${property.rent_per_month}</p>
            <p>Address: {property.address}</p>
            <p>Number of beds: {property.number_of_beds}</p>
            <p>Number of bathrooms: {property.number_of_bathrooms}</p>
            <p>Area: {property.area} sq ft</p>
            <p>Property type: {property.property_type}</p>
            <p>Location: {property.location}</p> */}
          </div>
        ))}
      </div>
    );
  };

export default function PropertyList() {
    const properties = [
        {
            "property_name": "Luxury Suites",
            "rent_per_month": 2000,
            "address": "123 Main St, Cityville",
            "number_of_beds": 2,
            "number_of_bathrooms": 2,
            "area": 1200,
            "property_type": "Hotel",
            "location": "Cityville, USA",
            "image_url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "property_name": "Cozy Cabin",
            "rent_per_month": 800,
            "address": "456 Forest Rd, Woodland",
            "number_of_beds": 1,
            "number_of_bathrooms": 1,
            "area": 600,
            "property_type": "House",
            "location": "Woodland, USA",
            "image_url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "property_name": "Sunset View Hotel",
            "rent_per_month": 1800,
            "address": "789 Beach Blvd, Shoreville",
            "number_of_beds": 3,
            "number_of_bathrooms": 2,
            "area": 1500,
            "property_type": "Hotel",
            "location": "Shoreville, USA",
            "image_url": "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "property_name": "Riverside Retreat",
            "rent_per_month": 1200,
            "address": "101 River Rd, Brookside",
            "number_of_beds": 2,
            "number_of_bathrooms": 1,
            "area": 1000,
            "property_type": "House",
            "location": "Brookside, USA",
            "image_url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "property_name": "Urban Oasis Suites",
            "rent_per_month": 2500,
            "address": "555 Downtown Ave, Metrocity",
            "number_of_beds": 3,
            "number_of_bathrooms": 2,
            "area": 1800,
            "property_type": "Hotel",
            "location": "Metrocity, USA",
            "image_url": "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "property_name": "Countryside Cottage",
            "rent_per_month": 1000,
            "address": "789 Meadow Lane, Greenfields",
            "number_of_beds": 2,
            "number_of_bathrooms": 1,
            "area": 800,
            "property_type": "House",
            "location": "Greenfields, USA",
            "image_url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "property_name": "Harbor View Hotel",
            "rent_per_month": 2200,
            "address": "222 Harbor Rd, Waterside",
            "number_of_beds": 2,
            "number_of_bathrooms": 2,
            "area": 1400,
            "property_type": "Hotel",
            "location": "Waterside, USA",
            "image_url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "property_name": "Mountain Chalet",
            "rent_per_month": 1500,
            "address": "333 Summit Way, Peaksburg",
            "number_of_beds": 2,
            "number_of_bathrooms": 1,
            "area": 1200,
            "property_type": "House",
            "location": "Peaksburg, USA",
            "image_url": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "property_name": "Tranquil Gardens Resort",
            "rent_per_month": 2800,
            "address": "456 Serenity Lane, Zenville",
            "number_of_beds": 4,
            "number_of_bathrooms": 3,
            "area": 2000,
            "property_type": "Hotel",
            "location": "Zenville, USA",
            "image_url": "https://images.unsplash.com/photo-1635108201747-976f7d4ba453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "property_name": "Lakefront Lodge",
            "rent_per_month": 1700,
            "address": "777 Lakeside Dr, Waterscape",
            "number_of_beds": 3,
            "number_of_bathrooms": 2,
            "area": 1600,
            "property_type": "House",
            "location": "Waterscape, USA",
            "image_url": "https://images.unsplash.com/photo-1635108201747-976f7d4ba453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            "property_name": "Elegant Mansion",
            "rent_per_month": 2000,
            "address": "456 Park Avenue, Urbantown",
            "number_of_beds": 2,
            "number_of_bathrooms": 2,
            "area": 1200,
            "property_type": "Hotel",
            "location": "Urbantown, USA",
            "image_url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        
        {
            "property_name": "Rustic Cabin Retreat",
            "rent_per_month": 800,
            "address": "789 Mountain Lane, Serenity Hills",
            "number_of_beds": 1,
            "number_of_bathrooms": 1,
            "area": 600,
            "property_type": "House",
            "location": "Serenity Hills, USA",
            "image_url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        
        {
            "property_name": "Seaside Paradise Resort",
            "rent_per_month": 2800,
            "address": "555 Oceanfront Rd, Coastal Haven",
            "number_of_beds": 4,
            "number_of_bathrooms": 3,
            "area": 2000,
            "property_type": "Hotel",
            "location": "Coastal Haven, USA",
            "image_url": "https://images.unsplash.com/photo-1635108201747-976f7d4ba453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        
        {
            "property_name": "Mountain Vista Lodge",
            "rent_per_month": 1700,
            "address": "777 Summit View, Heightsville",
            "number_of_beds": 3,
            "number_of_bathrooms": 2,
            "area": 1600,
            "property_type": "House",
            "location": "Heightsville, USA",
            "image_url": "https://images.unsplash.com/photo-1635108201747-976f7d4ba453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        }
    ]
    
    
    
  return (
    <div>
        <PropertyListing properties={properties} />
    </div>
  )
}
