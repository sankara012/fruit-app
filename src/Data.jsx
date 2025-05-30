import MangoImage from "./assets/mango.png";
import BananaImage from "./assets/banana.png";
import OrangeImage from "./assets/orange.png";
import GrapesImage from "./assets/grapes.png";
import GuavaImage from "./assets/guava.png";
import KiwiImage from "./assets/kiwi.png";



const FruitData = [
    {
        id: 1,
        name: "Mango",
        image: MangoImage,
        price: 1.20,
        vitamin: ["Vitamin C", "Vitamin A"]    
    },
    {
        id: 2,
        name: "Banana",
        image: BananaImage,
        price: 0.50,
        vitamin: ["Vitamin B6", "Vitamin C"]
    },

    {
        id: 3,
        name: "Orange",
        image: OrangeImage,
        price: 0.80,
        vitamin: ["Vitamin C", "Folate", "vitamin B6"]
    },

    {
        id: 4,
        name: "Grapes",
        image: GrapesImage,
        price: 2.00,
        vitamin: ["Vitamin K", "Vitamin C"]
    },

    {
        id: 5,
        name: "Guava",
        image: GuavaImage,
        price: 1.50,
        vitamin: ["Vitamin C", "Folate"]
    },

    {
        id: 6,
        name: "Kiwi",
        image: KiwiImage,
        price: 1.80,
        vitamin: ["Vitamin C", "Vitamin K"]
    }
]

export default FruitData;
