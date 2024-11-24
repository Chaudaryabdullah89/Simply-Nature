import p_img1 from './p_img1.jpg'
import p_img10 from './p_img10.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'

import about_img from './about_img.png'
import bin_icon from './bin_icon.png'
import cart_icon from './cart_icon.png'
import contact_img from './contact_img.png'
import cross_icon from './cross_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import hero_img from './hero_img.png'
import logo from './logo.png'
import menu_icon from './menu_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import razorpay_logo from './razorpay_logo.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import stripe_logo from './stripe_logo.png'
import support_img from './support_img.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "plant001",
        name: "Golden Barrel Cactus",
        description: "A spherical cactus with golden spines, ideal for indoor and outdoor decoration. Requires minimal watering and bright sunlight.",
        price: 50,
        image: [p_img1, p_img10],
        category: "Cactus",
        subCategory: "Indoor Plants",
        sizes: ["Small", "Medium", "Big"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "plant002",
        name: "Aloe Vera Plant",
        description: "A succulent plant known for its medicinal properties and air-purifying qualities. Thrives in indirect sunlight and dry conditions.",
        price: 30,
        image: [p_img1],
        category: "Succulent",
        subCategory: "Medicinal Plants",
        sizes: ["Small", "Medium"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "plant003",
        name: "Snake Plant",
        description: "An air-purifying, low-maintenance plant with sword-like leaves. Perfect for beginners and requires low to medium light.",
        price: 40,
        image: [p_img3],
        category: "Succulent",
        subCategory: "Air-Purifying Plants",
        sizes: ["Medium", "Large"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "plant004",
        name: "Christmas Cactus",
        description: "A festive cactus that blooms vibrant flowers around the holiday season. Thrives in partial shade and moderate watering.",
        price: 35,
        image: [p_img4],
        category: "Cactus",
        subCategory: "Flowering Plants",
        sizes: ["Small", "Medium"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "plant005",
        name: "Jade Plant",
        description: "A charming succulent with thick, shiny leaves. Symbolizes good luck and is easy to care for, needing bright light and occasional watering.",
        price: 25,
        image: [p_img5],
        category: "Succulent",
        subCategory: "Indoor Plants",
        sizes: ["Small", "Medium"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "plant006",
        name: "Opuntia Microdasys (Bunny Ears Cactus)",
        description: "A cute cactus with paddle-shaped pads and soft-looking spines. Requires minimal watering and bright, indirect light.",
        price: 45,
        image: [p_img6],
        category: "Cactus",
        subCategory: "Indoor Plants",
        sizes: ["Small", "Large"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "plant007",
        name: "Peace Lily",
        description: "A popular flowering plant known for its elegant white blooms and air-purifying properties. Prefers low to medium light.",
        price: 60,
        image: [p_img7],
        category: "Flowering",
        subCategory: "Air-Purifying Plants",
        sizes: ["Medium", "Large"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "plant008",
        name: "Succulent Mix",
        description: "A curated mix of assorted succulents, perfect for indoor decor or gifting. Requires minimal care and occasional watering.",
        price: 70,
        image: [p_img8],
        category: "Succulent",
        subCategory: "Indoor Plants",
        sizes: ["Small", "Medium"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "plant009",
        name: "Haworthia Zebra Plant",
        description: "A striking succulent with zebra-like white stripes on its leaves. Thrives in bright light and minimal watering.",
        price: 20,
        image: [p_img9],
        category: "Succulent",
        subCategory: "Indoor Plants",
        sizes: ["Small"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "plant010",
        name: "Monstera Deliciosa",
        description: "An iconic indoor plant with large, fenestrated leaves. Requires indirect sunlight and occasional watering.",
        price: 80,
        image: [p_img10],
        category: "Indoor",
        subCategory: "Decorative Plants",
        sizes: ["Medium", "Large"],
        date: 1716623345448,
        bestseller: false
    }
];

 export default assets