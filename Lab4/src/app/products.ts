export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  img2: string;
  img3: string;
  url: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'IPhone 15',
    price: 799,
    description: 'New Camera. New Design. Newphoria. ',
    img : "https://resources.cdn-kaspi.kz/img/m/p/h3f/h1b/84205862879262.png?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-iphone-15-128-gb-dual-sim-chernyi-113933011/?c=750000000",
    img2 : "https://resources.cdn-kaspi.kz/img/m/p/h50/h97/84205862944798.png?format=gallery-medium",
    img3 :"https://resources.cdn-kaspi.kz/img/m/p/hdc/h5d/84205862977566.png?format=gallery-large",
    rating: 5
  },
  {
    id: 2,
    name: 'Airpods Pro 2',
    price: 399,
    description: 'type c edition',
    img : "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000",
    img2 : "https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium",
    img3 :"https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium",
    rating: 4
  },
  {
    id: 3,
    name: 'Macbook Air',
    price: 999,
    description: 'Thin. Light. Powerful.',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/",
    img2 : "https://resources.cdn-kaspi.kz/img/m/p/h9b/hed/64082975653918.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h97/50489392824350/apple-macbook-air-13-mgn63-seryj-100797845-4.jpg",
    rating: 3
  },
  {
    id: 4,
    name: 'Macbook Pro',
    price: 1399,
    description: 'Mind-Blowing. Head-Turning.',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/hd7/33090953773086/apple-macbook-pro-13-myd82-seryi-100797630-1.jpg",
    url: "https://kaspi.kz/shop/p/apple-macbook-pro-13-myd82-seryi-100797630/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h6a/66921281028126/apple-macbook-pro-13-myd82-seryi-100797630-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hee/h53/66921281290270/apple-macbook-pro-13-myd82-seryi-100797630-3.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: 'ZIK',
    price: 299,
    description: 'Use It. ',
    img : "https://resources.cdn-kaspi.kz/img/m/p/he4/h2b/63949871972382.jpg?format=gallery-medium",
    img2 : "https://resources.cdn-kaspi.kz/img/m/p/he4/h2b/63949871972382.jpg?format=gallery-medium",
    img3 :"https://resources.cdn-kaspi.kz/img/m/p/he4/h2b/63949871972382.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/zik-computers-w-1167s-edu-009zik-belyi-100764189/?c=750000000",
    rating: 5
  },
  {
    id: 6,
    name: 'Dyson',
    price: 699,
    description: 'For My GFF',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/h08/68296593244190/dyson-hd07-supersonic-426081-01-fen-1600-w-108611587-2.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h16/h1b/67104330809374/dyson-hs05-airwrap-complete-long-fen-shchetka-1300-w-104498649-1.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/haf/67104331825182/dyson-hs05-airwrap-complete-long-fen-shchetka-1300-w-104498649-3.jpg",
    url: "https://kaspi.kz/shop/p/dyson-hd07-fen-1600-w-108611587/",
    rating: 5
  },
  {
    id: 7,
    name: 'Sony Playstation 5',
    price: 299,
    description: 'Play. Enjoy. Live.',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/h70/33035111104542/sony-playstation-5-belyj-100746577-2-Container.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/hbe/49348562681886/sony-playstation-5-belyj-100746577-1-Container.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/h7d/33035116019742/sony-playstation-5-belyj-100746577-4-Container.jpg",
    url: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/",
    rating: 4
  },
  {
    id: 8,
    name: 'KEF R11 META',
    price: 2999,
    description: 'Sound. Impress. Feel. ',
    img : "https://resources.cdn-kaspi.kz/img/m/p/h81/hbc/83046520619038.jpg?format=gallery-medium",
    img2 : "https://resources.cdn-kaspi.kz/img/m/p/h81/hbc/83046520619038.jpg?format=gallery-medium",
    img3 : "https://resources.cdn-kaspi.kz/img/m/p/h81/hbc/83046520619038.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/kef-r11-meta-112761570/?c=750000000",
    rating: 1
  },
  {
    id: 9,
    name: 'ABYROI ЧИНГИЗХАН',
    price: 499,
    description: 'Charisma. Style. Simple. ',
    img : "https://resources.cdn-kaspi.kz/img/m/p/he4/h76/67775973326878.jpg?format=gallery-medium",
    img2 : "https://resources.cdn-kaspi.kz/img/m/p/he1/h9b/67775977586718.jpg?format=gallery-medium",
    img3 : "https://resources.cdn-kaspi.kz/img/m/p/hfa/hbb/67776277020702.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/mehanicheskie-abyroy-chingizhan-gold-w-nerzhavejuschaja-stal--108395922/?c=750000000",
    rating: 3
  },
  {
    id: 10,
    name: 'iPad Pro',
    price: 1599,
    description: 'Ultra-powerful. Ultra-versatile. Ultra-unbelievable.\n',
    img : "https://resources.cdn-kaspi.kz/img/m/p/h04/h2a/64913925373982.jpg?format=gallery-medium",
    img2 : "https://resources.cdn-kaspi.kz/img/m/p/h04/h2a/64913925373982.jpg?format=gallery-medium",
    img3 : "https://resources.cdn-kaspi.kz/img/m/p/h04/h2a/64913925373982.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-ipad-pro-2022-wi-fi-cellular-12-9-djuim-16-gb-2048-gb-serebristyi-107284047/?c=750000000",
    rating: 4
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/