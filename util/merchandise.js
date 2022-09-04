const products = {
    name: 'T-Shirt',
    price: 'Rs. 1000',
    color_images: [[
        {
            id: 1,
            name: 'Angled view',
            src: '/Merch/front.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
            id: 2,
            name: 'Angled view',
            src: '/Merch/back.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        }],
    ],
    colors: [
        { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700'},
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400'},
        { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500'}
    ],
    description: `
<p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
`,
}

export default products