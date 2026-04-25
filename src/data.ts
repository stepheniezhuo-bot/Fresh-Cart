export interface Product {
  id: string;
  name: string;
  unit: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  tags?: string[];
  label?: 'Sale' | 'Local' | 'New';
}

export interface ShoppingListItem {
  id: string;
  name: string;
  frequency: 'Weekly' | 'Bi-weekly' | 'Monthly' | 'As needed';
}

export const FREQUENTLY_PURCHASED: Product[] = [
  {
    id: 'fp1',
    name: 'Organic Whole Milk',
    unit: '1 Gallon',
    price: 4.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGxVCPkGr1IkISBBbvgHaNVRgRf5da29gWDVHOE_IqNEsPxg5UZtTz1ek3_Cu7kULqYi7SD0yOqtCTkRrrTQ2zKW-l7BadU2eQ5RdEWTlYUzVeJwR9A6mGwtcGG0ODIG9pC06PQyilGQDIqN1SBryZq5051l7CBH-BEzYT5ZdPXTEIiL0tI52lEvAF3YU2R31gtYksevzI2xEEv8QiV7kG5zcSNdjQ1SZDKNuZ5oDeFqsIF9uEzWP-pTOGEPEFmHiuRDIPfTBPPfY',
    category: 'Dairy & Eggs',
  },
  {
    id: 'fp2',
    name: 'Free Range Eggs',
    unit: '1 Dozen',
    price: 5.49,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhG2bTWkDR8ET6RWxOIorvsBfxs1z4GR4zVmmgtnOyU8uTFfNHoI4qo97OQxO_yAb2CTfyzYsqjOkfhoWOqmDO0pCVBDN7SHUGpi5t_SG8uLQRN-YGAT21zHgRlFAwazphcoTxA43tsvbPsI5q4-ocWsmXJd6AW5RO-tWTrbXEdaNKZxcFoGSgUyh8og2SIpJuFX16pHk8r7TJs8A4PwzhmMA_W8eaGf4CJv-5btV9BKOp2l33lLytSJofcnRuvF5l_z1NzPLVOS0',
    category: 'Dairy & Eggs',
  },
  {
    id: 'fp3',
    name: 'Artisan Sourdough',
    unit: '1 Loaf',
    price: 6.25,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqMu_2CL9sVyvA8qeUW3jnc0xeu4bd8DAchto95Q--raKOJzDk-QWc_pJ5PvjLt4j4mG3kBxdj_NaaRWke8_gBAMWjF2tvgCP7r_cZm3pLmpp3sVuDpe_DwwqDIGyHx6EMAy02ACOxVn5KSASZL3oLjd27bOiBWFKoWiBC6OFyrse_p55-reQI8YTU-UPX3kDTFS88_N0hvgUcWB0bH97WEipYBVNeP46pgYasY0ZqqUuXUMUoIfNEmJLiLnmiD7LoHamYKduX1nI',
    category: 'Bakery',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Organic Honeycrisp Apples',
    unit: 'per lb',
    price: 2.49,
    originalPrice: 3.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCld2HbZw5tRYyS9gv7b-tBytGzEnonfgh749RPuQrIIPvDUXaUsBSoEFgMkFOPvnlHzopmr43qgGoOWwNArdRuSXoC3yPhavVtj-waBUfzIYTrOxEu5STLsL-fd-Q3U-MwyPiC3wuUxuGickl4PS-IvyGhrU3kHeNn2wtuSI6vbNCsWhkdNr8PlqYlBBS1zMbH3YWGksyRgKQovOuaHiP_CrWGjE5rtt80g0cqzDtnLwHC_8upLaKTSh7PbHcOoGL4bMUXgC9k5ps',
    category: 'Produce',
    label: 'Sale',
  },
  {
    id: 'p2',
    name: 'Large Hass Avocados',
    unit: 'Each',
    price: 1.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq5ZY-NwCXLz3YDqQ0nafoa6u_ciVsg61XA6vJWMVopGPpvQbgTqWNxL6Be-MEH3tVGd1Byw3Agq7uS47znfw7HOjhP-h2lzIelQgremyAB1c7k__nveXWgs32UpQbGXoFVfh0hok0F4V1TEdxCjYfDB1lHi6jbom_NMJCFZ4EcN2hOKw5buZNv-QFDaMD52sRgFvJLTaK0pJIfT7juGdgDAa3YD6N3I5pboqGmHIFD8zFbl7JT-w6k2rBCnxXuKhK5hbZdwKMKTc',
    category: 'Produce',
  },
  {
    id: 'p3',
    name: 'Russet Potatoes',
    unit: '5 lb bag',
    price: 4.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeGbjNg_hRSMTrCDxqAzpJFzvWnPqTlAsp-9zUJXuO68rJtgSvTeHuQ0IN2HOP5JQ6E_GFYx71qiIENnJabZOyuLef4zoCsFIy_2zECJX59_Tjzz1e3K8macdozEd0tFVFWgw5Du2vzJZ4r7QdKcictfNuYO4gn0nTYIYIiKntG8bd2Se452qsE3jt9WHgdOAm4rWWFOWyeydbfOgnp60MJQoGefsAQvkmGDGdwG-e-Scz4mQS0yLz74sum-UnLO2WE_8LslxHR8A',
    category: 'Produce',
    label: 'Local',
  },
  {
    id: 'p4',
    name: 'Organic Carrots Bunch',
    unit: '1 bunch',
    price: 2.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3lJsh1b2nzZ_F7JHksVsDs_u_tNE6ynevayewDaoltv5bTy0iYFNb09wokTWRbqON696CUGx6dLk6M0nvQc2wufFJ6-GNIeTGbeI0LEgvPwrPAPENwDLHhYnITMPF3sVBJSKKAyi-275-uR4pCrmGKdLu_j_60UgBb4vhiaZ15GtTHdkYwJ9G2GPpd_f3Zn0tEvDHkSZsZn9Ea-sETRgbn3jI9Jzr5bPA0NkBmSIexZw2aodjCrsRa4p-TnNGwcR4PItukPs4D4o',
    category: 'Produce',
  },
];

export const INITIAL_SHOPPING_LIST: ShoppingListItem[] = [
  { id: 'sl1', name: 'Almond Milk', frequency: 'Weekly' },
  { id: 'sl2', name: 'Whole Wheat Bread', frequency: 'Bi-weekly' },
  { id: 'sl3', name: 'Coffee Beans', frequency: 'Monthly' },
  { id: 'sl4', name: 'Paper Towels', frequency: 'As needed' },
];
