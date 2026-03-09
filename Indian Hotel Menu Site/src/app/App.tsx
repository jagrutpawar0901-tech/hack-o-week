import { Utensils, Flame, Coffee, IceCream, Wheat, ChefHat } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const menuData = {
    starters: [
      { name: "Paneer Tikka", price: 150, desc: "Cottage cheese marinated in spices", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYSUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzcyNzA2OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Samosa (2 pcs)", price: 30, desc: "Crispy pastry with potato filling", img: "https://images.unsplash.com/photo-1697155836252-d7f969108b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1vc2ElMjBpbmRpYW4lMjBzbmFja3xlbnwxfHx8fDE3NzI3NzkwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Chicken 65", price: 180, desc: "Spicy fried chicken bites", img: "https://images.unsplash.com/photo-1617692855027-33b14f061079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGNoaWNrZW4lMjBpbmRpYW58ZW58MXx8fHwxNzcyNjkxOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Hara Bhara Kabab", price: 120, desc: "Spinach and potato patties", img: "https://images.unsplash.com/photo-1660715683691-d1614d1dd361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG9vJTIwdGlra2klMjBwb3RhdG98ZW58MXx8fHwxNzcyODAwMDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Tandoori Chicken (Half)", price: 220, desc: "Grilled chicken in yogurt marinade", img: "https://images.unsplash.com/photo-1617692855027-33b14f061079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGNoaWNrZW4lMjBpbmRpYW58ZW58MXx8fHwxNzcyNjkxOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Veg Pakora", price: 80, desc: "Mixed vegetable fritters", img: "https://images.unsplash.com/photo-1666190091191-0cd0c5c8c5b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtvcmElMjBmcml0dGVycyUyMGluZGlhbnxlbnwxfHx8fDE3NzI2OTU5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Onion Pakora", price: 70, desc: "Crispy onion fritters", img: "https://images.unsplash.com/photo-1666190091191-0cd0c5c8c5b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtvcmElMjBmcml0dGVycyUyMGluZGlhbnxlbnwxfHx8fDE3NzI2OTU5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Aloo Tikki", price: 60, desc: "Spiced potato patties", img: "https://images.unsplash.com/photo-1660715683691-d1614d1dd361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG9vJTIwdGlra2klMjBwb3RhdG98ZW58MXx8fHwxNzcyODAwMDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Seekh Kabab", price: 190, desc: "Minced meat on skewers", img: "https://images.unsplash.com/photo-1715099057761-8a26ed3c64dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVraCUyMGtlYmFiJTIwbWluY2VkfGVufDF8fHx8MTc3MjgwMDAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Mushroom Tikka", price: 140, desc: "Grilled spiced mushrooms", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYSUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzcyNzA2OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Fish Tikka", price: 240, desc: "Grilled fish in tandoori masala", img: "https://images.unsplash.com/photo-1602022131768-033a8796e78d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwdGlra2ElMjBncmlsbGVkfGVufDF8fHx8MTc3MjgwMDAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Chicken Tikka", price: 200, desc: "Boneless chicken chunks grilled", img: "https://images.unsplash.com/photo-1617692855027-33b14f061079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGNoaWNrZW4lMjBpbmRpYW58ZW58MXx8fHwxNzcyNjkxOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Malai Tikka", price: 210, desc: "Creamy chicken tikka", img: "https://images.unsplash.com/photo-1617692855027-33b14f061079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGNoaWNrZW4lMjBpbmRpYW58ZW58MXx8fHwxNzcyNjkxOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Paneer Pakora", price: 100, desc: "Cottage cheese fritters", img: "https://images.unsplash.com/photo-1666190091191-0cd0c5c8c5b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtvcmElMjBmcml0dGVycyUyMGluZGlhbnxlbnwxfHx8fDE3NzI2OTU5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Crispy Corn", price: 110, desc: "Fried corn kernels with spices", img: "https://images.unsplash.com/photo-1666190091191-0cd0c5c8c5b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtvcmElMjBmcml0dGVycyUyMGluZGlhbnxlbnwxfHx8fDE3NzI2OTU5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Spring Rolls", price: 90, desc: "Crispy vegetable spring rolls", img: "https://images.unsplash.com/photo-1610505127058-2ed68ad7d21e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjByb2xscyUyMGZyaWVkfGVufDF8fHx8MTc3MjgwMDAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Chilli Paneer", price: 160, desc: "Spicy cottage cheese with peppers", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYSUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzcyNzA2OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Chilli Chicken", price: 190, desc: "Indo-Chinese spicy chicken", img: "https://images.unsplash.com/photo-1617692855027-33b14f061079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGNoaWNrZW4lMjBpbmRpYW58ZW58MXx8fHwxNzcyNjkxOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Papdi Chaat", price: 70, desc: "Crispy wafers with yogurt and chutneys", img: "https://images.unsplash.com/photo-1697155836252-d7f969108b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1vc2ElMjBpbmRpYW4lMjBzbmFja3xlbnwxfHx8fDE3NzI3NzkwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Dahi Bhalla", price: 80, desc: "Lentil dumplings in yogurt", img: "https://images.unsplash.com/photo-1697155836252-d7f969108b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1vc2ElMjBpbmRpYW4lMjBzbmFja3xlbnwxfHx8fDE3NzI3NzkwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    ],
    mainCourse: [
      { name: "Butter Chicken", price: 220, desc: "Creamy tomato-based curry", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBjaGlja2VuJTIwY3Vycnl8ZW58MXx8fHwxNzcyNzg1ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Dal Makhani", price: 140, desc: "Black lentils in rich gravy", img: "https://images.unsplash.com/flagged/photo-1579386471443-9efb1386486c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9sZSUyMGNoaWNrcGVhJTIwY3Vycnl8ZW58MXx8fHwxNzcyODAwMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Palak Paneer", price: 170, desc: "Cottage cheese in spinach gravy", img: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxhayUyMHBhbmVlciUyMHNwaW5hY2h8ZW58MXx8fHwxNzcyNzkyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Rogan Josh", price: 250, desc: "Aromatic lamb curry", img: "https://images.unsplash.com/photo-1652545296892-3787063f8b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBjdXJyeSUyMGluZGlhbnxlbnwxfHx8fDE3NzI4MDAwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Chole Bhature", price: 120, desc: "Chickpea curry with fried bread", img: "https://images.unsplash.com/flagged/photo-1579386471443-9efb1386486c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9sZSUyMGNoaWNrcGVhJTIwY3Vycnl8ZW58MXx8fHwxNzcyODAwMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Fish Curry", price: 260, desc: "Traditional coastal fish preparation", img: "https://images.unsplash.com/photo-1602022131768-033a8796e78d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwdGlra2ElMjBncmlsbGVkfGVufDF8fHx8MTc3MjgwMDAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Paneer Butter Masala", price: 190, desc: "Rich tomato paneer curry", img: "https://images.unsplash.com/photo-1701579231378-3726490a407b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBidXR0ZXIlMjBtYXNhbGF8ZW58MXx8fHwxNzcyNzM1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Kadai Chicken", price: 230, desc: "Spicy chicken with bell peppers", img: "https://images.unsplash.com/photo-1616787928056-ae5ab4b649d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWRhaSUyMGNoaWNrZW4lMjBzcGljeXxlbnwxfHx8fDE3NzI4MDAwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Kadai Paneer", price: 180, desc: "Cottage cheese with peppers and spices", img: "https://images.unsplash.com/photo-1701579231378-3726490a407b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBidXR0ZXIlMjBtYXNhbGF8ZW58MXx8fHwxNzcyNzM1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Mutton Curry", price: 280, desc: "Tender mutton in spiced gravy", img: "https://images.unsplash.com/photo-1652545296892-3787063f8b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBjdXJyeSUyMGluZGlhbnxlbnwxfHx8fDE3NzI4MDAwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Chicken Korma", price: 240, desc: "Creamy chicken curry with nuts", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBjaGlja2VuJTIwY3Vycnl8ZW58MXx8fHwxNzcyNzg1ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Chicken Tikka Masala", price: 230, desc: "Grilled chicken in rich masala gravy", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBjaGlja2VuJTIwY3Vycnl8ZW58MXx8fHwxNzcyNzg1ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Dal Tadka", price: 120, desc: "Yellow lentils with tempering", img: "https://images.unsplash.com/flagged/photo-1579386471443-9efb1386486c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9sZSUyMGNoaWNrcGVhJTIwY3Vycnl8ZW58MXx8fHwxNzcyODAwMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Egg Curry", price: 130, desc: "Boiled eggs in spiced curry", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBjaGlja2VuJTIwY3Vycnl8ZW58MXx8fHwxNzcyNzg1ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Shahi Paneer", price: 200, desc: "Royal cottage cheese curry", img: "https://images.unsplash.com/photo-1701579231378-3726490a407b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBidXR0ZXIlMjBtYXNhbGF8ZW58MXx8fHwxNzcyNzM1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Malai Kofta", price: 180, desc: "Cottage cheese balls in creamy gravy", img: "https://images.unsplash.com/photo-1701579231378-3726490a407b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBidXR0ZXIlMjBtYXNhbGF8ZW58MXx8fHwxNzcyNzM1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Mixed Veg Curry", price: 150, desc: "Assorted vegetables in curry", img: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxhayUyMHBhbmVlciUyMHNwaW5hY2h8ZW58MXx8fHwxNzcyNzkyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Aloo Gobi", price: 130, desc: "Potato and cauliflower curry", img: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxhayUyMHBhbmVlciUyMHNwaW5hY2h8ZW58MXx8fHwxNzcyNzkyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Bhindi Masala", price: 140, desc: "Spiced okra curry", img: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxhayUyMHBhbmVlciUyMHNwaW5hY2h8ZW58MXx8fHwxNzcyNzkyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Mutton Rogan Josh", price: 290, desc: "Kashmiri style mutton curry", img: "https://images.unsplash.com/photo-1652545296892-3787063f8b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBjdXJyeSUyMGluZGlhbnxlbnwxfHx8fDE3NzI4MDAwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    ],
    breads: [
      { name: "Butter Naan", price: 30, desc: "Soft leavened bread with butter", img: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzcyNzY2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Plain Naan", price: 25, desc: "Classic leavened bread", img: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzcyNzY2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Garlic Naan", price: 40, desc: "Naan with fresh garlic topping", img: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzcyNzY2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Cheese Naan", price: 60, desc: "Naan stuffed with cheese", img: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzcyNzY2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Tandoori Roti", price: 20, desc: "Whole wheat tandoor bread", img: "https://images.unsplash.com/photo-1601387448308-66ae6aa1f1f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3RpJTIwY2hhcGF0aSUyMGluZGlhbnxlbnwxfHx8fDE3NzI4MDAwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Laccha Paratha", price: 35, desc: "Multi-layered flatbread", img: "https://images.unsplash.com/photo-1759302307381-bdccf7b35e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhdGhhJTIwZmxhdGJyZWFkJTIwaW5kaWFufGVufDF8fHx8MTc3MjgwMDAxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Aloo Paratha", price: 40, desc: "Potato stuffed flatbread", img: "https://images.unsplash.com/photo-1759302307381-bdccf7b35e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhdGhhJTIwZmxhdGJyZWFkJTIwaW5kaWFufGVufDF8fHx8MTc3MjgwMDAxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Paneer Paratha", price: 50, desc: "Cottage cheese stuffed flatbread", img: "https://images.unsplash.com/photo-1759302307381-bdccf7b35e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhdGhhJTIwZmxhdGJyZWFkJTIwaW5kaWFufGVufDF8fHx8MTc3MjgwMDAxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Gobi Paratha", price: 45, desc: "Cauliflower stuffed flatbread", img: "https://images.unsplash.com/photo-1759302307381-bdccf7b35e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhdGhhJTIwZmxhdGJyZWFkJTIwaW5kaWFufGVufDF8fHx8MTc3MjgwMDAxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Missi Roti", price: 30, desc: "Gram flour and wheat flatbread", img: "https://images.unsplash.com/photo-1601387448308-66ae6aa1f1f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3RpJTIwY2hhcGF0aSUyMGluZGlhbnxlbnwxfHx8fDE3NzI4MDAwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Kulcha", price: 35, desc: "Soft leavened bread", img: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzcyNzY2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Butter Roti", price: 25, desc: "Whole wheat bread with butter", img: "https://images.unsplash.com/photo-1601387448308-66ae6aa1f1f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3RpJTIwY2hhcGF0aSUyMGluZGlhbnxlbnwxfHx8fDE3NzI4MDAwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Roomali Roti", price: 30, desc: "Thin handkerchief bread", img: "https://images.unsplash.com/photo-1601387448308-66ae6aa1f1f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3RpJTIwY2hhcGF0aSUyMGluZGlhbnxlbnwxfHx8fDE3NzI4MDAwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Keema Naan", price: 70, desc: "Naan stuffed with minced meat", img: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzcyNzY2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Kashmiri Naan", price: 65, desc: "Sweet naan with dry fruits", img: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzcyNzY2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Pudina Paratha", price: 35, desc: "Mint flavored flatbread", img: "https://images.unsplash.com/photo-1759302307381-bdccf7b35e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhdGhhJTIwZmxhdGJyZWFkJTIwaW5kaWFufGVufDF8fHx8MTc3MjgwMDAxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Onion Kulcha", price: 40, desc: "Soft bread with onion filling", img: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzcyNzY2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Mixed Paratha", price: 50, desc: "Multi-vegetable stuffed flatbread", img: "https://images.unsplash.com/photo-1759302307381-bdccf7b35e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhdGhhJTIwZmxhdGJyZWFkJTIwaW5kaWFufGVufDF8fHx8MTc3MjgwMDAxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Wheat Naan", price: 35, desc: "Healthier whole wheat naan", img: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzcyNzY2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Stuffed Kulcha", price: 45, desc: "Kulcha with spiced filling", img: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzcyNzY2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    ],
    rice: [
      { name: "Hyderabadi Biryani", price: 200, desc: "Aromatic rice with meat", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Chicken Biryani", price: 190, desc: "Fragrant chicken and rice", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Mutton Biryani", price: 240, desc: "Tender mutton layered with rice", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Veg Biryani", price: 150, desc: "Vegetable and rice delicacy", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Jeera Rice", price: 100, desc: "Cumin flavored basmati rice", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Pulao", price: 120, desc: "Fragrant rice with vegetables", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Egg Biryani", price: 140, desc: "Eggs layered with spiced rice", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Kashmiri Pulao", price: 140, desc: "Sweet pulao with dry fruits", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Lemon Rice", price: 90, desc: "Tangy South Indian rice", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Curd Rice", price: 80, desc: "Cooling yogurt rice", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Steamed Rice", price: 70, desc: "Plain basmati rice", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Fried Rice", price: 130, desc: "Indo-Chinese style fried rice", img: "https://images.unsplash.com/photo-1581184953987-5668072c8420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMHJpY2UlMjB2ZWdldGFibGV8ZW58MXx8fHwxNzcyODAwMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Schezwan Rice", price: 140, desc: "Spicy Schezwan fried rice", img: "https://images.unsplash.com/photo-1581184953987-5668072c8420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMHJpY2UlMjB2ZWdldGFibGV8ZW58MXx8fHwxNzcyODAwMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Prawn Biryani", price: 280, desc: "Succulent prawns with rice", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Fish Biryani", price: 260, desc: "Aromatic fish biryani", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Paneer Fried Rice", price: 140, desc: "Fried rice with cottage cheese", img: "https://images.unsplash.com/photo-1581184953987-5668072c8420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMHJpY2UlMjB2ZWdldGFibGV8ZW58MXx8fHwxNzcyODAwMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Chicken Fried Rice", price: 150, desc: "Fried rice with chicken", img: "https://images.unsplash.com/photo-1581184953987-5668072c8420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMHJpY2UlMjB2ZWdldGFibGV8ZW58MXx8fHwxNzcyODAwMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Mushroom Pulao", price: 130, desc: "Fragrant mushroom rice", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Peas Pulao", price: 110, desc: "Rice with green peas", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Coconut Rice", price: 100, desc: "South Indian coconut flavored rice", img: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcyNzAwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    ],
    desserts: [
      { name: "Gulab Jamun (2 pcs)", price: 50, desc: "Sweet milk dumplings in syrup", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Rasmalai (2 pcs)", price: 70, desc: "Cottage cheese in sweet cream", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Kulfi", price: 60, desc: "Traditional Indian ice cream", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Jalebi", price: 40, desc: "Crispy sweet orange spirals", img: "https://images.unsplash.com/photo-1721174233280-c55186b7cabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWxlYmklMjBzd2VldCUyMGluZGlhbnxlbnwxfHx8fDE3NzI4MDAwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Ras Malai", price: 80, desc: "Creamy milk dessert", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Gajar Halwa", price: 70, desc: "Carrot pudding with nuts", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Kheer", price: 60, desc: "Traditional rice pudding", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Moong Dal Halwa", price: 80, desc: "Rich lentil dessert", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Rabri", price: 75, desc: "Thickened sweetened milk", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Phirni", price: 65, desc: "Ground rice pudding", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Malpua", price: 55, desc: "Sweet pancakes in syrup", img: "https://images.unsplash.com/photo-1721174233280-c55186b7cabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWxlYmklMjBzd2VldCUyMGluZGlhbnxlbnwxfHx8fDE3NzI4MDAwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Kaju Katli", price: 90, desc: "Cashew nut fudge", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Ladoo (2 pcs)", price: 50, desc: "Sweet gram flour balls", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Barfi", price: 60, desc: "Milk-based sweet fudge", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Ice Cream (Scoop)", price: 40, desc: "Assorted flavors", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Shahi Tukda", price: 75, desc: "Bread pudding dessert", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Ras Gulla (2 pcs)", price: 50, desc: "Spongy sweet cheese balls", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Sandesh", price: 55, desc: "Bengali sweet made from cottage cheese", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Falooda", price: 90, desc: "Layered cold dessert with vermicelli", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Mysore Pak", price: 65, desc: "Rich ghee-based sweet", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzI3NjYwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    ],
    beverages: [
      { name: "Masala Chai", price: 25, desc: "Spiced Indian tea", img: "https://images.unsplash.com/photo-1698619952010-3bc850cbcb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhfGVufDF8fHx8MTc3MjczMzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Sweet Lassi", price: 50, desc: "Yogurt-based sweet drink", img: "https://images.unsplash.com/photo-1606673993554-a5f993a16e0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNzaSUyMGRyaW5rJTIwbWFuZ298ZW58MXx8fHwxNzcyODAwMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Salted Lassi", price: 50, desc: "Yogurt-based savory drink", img: "https://images.unsplash.com/photo-1606673993554-a5f993a16e0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNzaSUyMGRyaW5rJTIwbWFuZ298ZW58MXx8fHwxNzcyODAwMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Mango Lassi", price: 70, desc: "Refreshing mango yogurt drink", img: "https://images.unsplash.com/photo-1606673993554-a5f993a16e0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNzaSUyMGRyaW5rJTIwbWFuZ298ZW58MXx8fHwxNzcyODAwMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Fresh Lime Soda", price: 40, desc: "Refreshing citrus drink", img: "https://images.unsplash.com/photo-1698619952010-3bc850cbcb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhfGVufDF8fHx8MTc3MjczMzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Fresh Lime Water", price: 35, desc: "Simple lime juice with water", img: "https://images.unsplash.com/photo-1698619952010-3bc850cbcb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhfGVufDF8fHx8MTc3MjczMzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Buttermilk", price: 30, desc: "Spiced churned yogurt drink", img: "https://images.unsplash.com/photo-1606673993554-a5f993a16e0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNzaSUyMGRyaW5rJTIwbWFuZ298ZW58MXx8fHwxNzcyODAwMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Coffee", price: 30, desc: "Filter coffee", img: "https://images.unsplash.com/photo-1698619952010-3bc850cbcb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhfGVufDF8fHx8MTc3MjczMzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Green Tea", price: 35, desc: "Healthy green tea", img: "https://images.unsplash.com/photo-1698619952010-3bc850cbcb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhfGVufDF8fHx8MTc3MjczMzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Black Tea", price: 20, desc: "Plain black tea", img: "https://images.unsplash.com/photo-1698619952010-3bc850cbcb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhfGVufDF8fHx8MTc3MjczMzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Badam Milk", price: 60, desc: "Almond flavored milk", img: "https://images.unsplash.com/photo-1606673993554-a5f993a16e0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNzaSUyMGRyaW5rJTIwbWFuZ298ZW58MXx8fHwxNzcyODAwMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Rose Milk", price: 55, desc: "Rose flavored milk", img: "https://images.unsplash.com/photo-1606673993554-a5f993a16e0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNzaSUyMGRyaW5rJTIwbWFuZ298ZW58MXx8fHwxNzcyODAwMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Jal Jeera", price: 35, desc: "Cumin spiced water", img: "https://images.unsplash.com/photo-1698619952010-3bc850cbcb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhfGVufDF8fHx8MTc3MjczMzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Thandai", price: 65, desc: "Traditional spiced milk drink", img: "https://images.unsplash.com/photo-1606673993554-a5f993a16e0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNzaSUyMGRyaW5rJTIwbWFuZ298ZW58MXx8fHwxNzcyODAwMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Mineral Water", price: 20, desc: "Bottled water", img: "https://images.unsplash.com/photo-1698619952010-3bc850cbcb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhfGVufDF8fHx8MTc3MjczMzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Soft Drinks", price: 35, desc: "Assorted cold drinks", img: "https://images.unsplash.com/photo-1698619952010-3bc850cbcb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhfGVufDF8fHx8MTc3MjczMzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Fresh Fruit Juice", price: 60, desc: "Seasonal fresh juice", img: "https://images.unsplash.com/photo-1698619952010-3bc850cbcb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhfGVufDF8fHx8MTc3MjczMzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Sugarcane Juice", price: 45, desc: "Fresh pressed sugarcane", img: "https://images.unsplash.com/photo-1698619952010-3bc850cbcb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhfGVufDF8fHx8MTc3MjczMzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Aam Panna", price: 50, desc: "Raw mango cooler", img: "https://images.unsplash.com/photo-1698619952010-3bc850cbcb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhfGVufDF8fHx8MTc3MjczMzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Kokum Sharbat", price: 45, desc: "Cooling kokum drink", img: "https://images.unsplash.com/photo-1698619952010-3bc850cbcb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhfGVufDF8fHx8MTc3MjczMzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    ],
  };

  const categories = [
    { key: 'starters', title: 'Starters', icon: ChefHat, color: 'bg-orange-50/90 border-orange-200' },
    { key: 'mainCourse', title: 'Main Course', icon: Flame, color: 'bg-red-50/90 border-red-200' },
    { key: 'breads', title: 'Breads', icon: Wheat, color: 'bg-amber-50/90 border-amber-200' },
    { key: 'rice', title: 'Rice', icon: Utensils, color: 'bg-yellow-50/90 border-yellow-200' },
    { key: 'desserts', title: 'Desserts', icon: IceCream, color: 'bg-pink-50/90 border-pink-200' },
    { key: 'beverages', title: 'Beverages', icon: Coffee, color: 'bg-green-50/90 border-green-200' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative">
      {/* Background Image Overlay */}
      <div className="fixed inset-0 z-0 opacity-5">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1669043962012-a5b8496cd664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc3MjczMTYyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Restaurant Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-red-700 to-orange-600 text-white py-12 px-4 shadow-xl relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-3">
            {/* Hotel Logo */}
            <div className="w-20 h-20 bg-white rounded-full p-2 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642867501868-a493788835cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwbG9nbyUyMHJveWFsfGVufDF8fHx8MTc3MjgwMDAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Royal Spice Kitchen Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-5xl font-bold">Royal Spice Kitchen</h1>
          </div>
          <p className="text-xl opacity-90">Authentic Indian Cuisine</p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <div className="h-px w-16 bg-white/50"></div>
            <span className="italic">Est. 1985</span>
            <div className="h-px w-16 bg-white/50"></div>
          </div>
        </div>
      </header>

      {/* Menu Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            const items = menuData[category.key];
            
            return (
              <section key={category.key} className={`rounded-2xl border-2 ${category.color} backdrop-blur-sm p-6 shadow-lg hover:shadow-2xl transition-all`}>
                <div className="flex items-center gap-3 mb-6 border-b-2 border-current pb-3">
                  <Icon size={32} className="text-orange-600" />
                  <h2 className="text-3xl font-semibold text-gray-800">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105 border border-gray-200">
                      <div className="flex gap-3 p-3">
                        {/* Item Image */}
                        <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <ImageWithFallback
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Item Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-2 mb-1">
                            <h3 className="font-semibold text-base text-gray-800 line-clamp-1">{item.name}</h3>
                            <span className="text-orange-600 font-bold text-base whitespace-nowrap">
                              ₹{item.price}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 line-clamp-2">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/95 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border-2 border-orange-200">
            <p className="text-gray-700">
              <span className="text-orange-600 font-semibold">Note:</span> All prices are in Indian Rupees (₹)
            </p>
            <p className="text-sm text-gray-500 mt-1">Taxes applicable as per government regulations</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 mt-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">© 2026 Royal Spice Kitchen • All Rights Reserved</p>
          <p className="text-xs text-gray-400 mt-2">Contact: +91-98765-43210 | Email: info@royalspicekitchen.com</p>
        </div>
      </footer>
    </div>
  );
}
