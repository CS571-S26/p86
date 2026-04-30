import taipeiImg from '../assets/taipei.png';
import seoulImg from '../assets/seoul.png';
import shanghaiImg from '../assets/shanghai.png';
import tokyoImg from '../assets/tokyo.png';
import shenzhenImg from '../assets/shenzhen.png';
import chongqingImg from '../assets/chongqing.png';
import hangzhouImg from '../assets/hangzhou.png';
import saigonImg from '../assets/saigon.png';
import manilaImg from '../assets/manila.png';
import hualienImg from '../assets/hualien.png';
import danangImg from '../assets/danang.png';
import frankfurtImg from '../assets/frankfurt.png';
import berlinImg from '../assets/berlin.png';
import freiburgImg from '../assets/freiburg.png';
import genevaImg from '../assets/geneva.png';
import annecyImg from '../assets/annecy.png';
import milanImg from '../assets/milan.png';
import bolognaImg from '../assets/bologna.png';
import barcelonaImg from '../assets/barcelona.png';
import sandiegoImg from '../assets/sandiego.png';
import madisonImg from '../assets/madison.png';
import twincitiesImg from '../assets/twincities.png';


const locations = [
    {
        city: 'San Diego, USA',
        time: 'August 2025',
        description: 'Home Sweet Home',
        food: 'Fish Tacos, Carne Asada Fries, California Burrito',
        image: sandiegoImg,
        lat: 32.7157,
        lng: -117.1611,
        landmark: {
            name: 'Balboa Park',
            x: '30%',
            y: '70%',
            info: 'Balboa Park is a cultural oasis in the heart of San Diego, featuring beautiful gardens, historic architecture, and world-class museums. It’s a place where locals and visitors alike can enjoy art, nature, and community events all year round.'
        }
    },
    {
        city: 'Taipei, Taiwan',
        time: 'August 2025',
        description: 'Location of Study Abroad',
        food: 'Beef Noodles, Bubble Tea, Stinky Tofu, Taiwanese Meatball',
        image: taipeiImg,
        lat: 25.033,
        lng: 121.565,
        landmark: {
            name: 'Taipei 101',
            x: '68%',
            y: '42%',
            info: 'Taipei 101 towers over the city as one of Taiwan’s most recognizable landmarks. Its height, unique design, and observation deck make it a symbol of modern Taipei and a great place to see the city from above.'
        }
    },
    {
        city: 'Seoul, South Korea',
        time: 'October 2025',
        description: 'First Trip with Friends',
        food: 'Korean BBQ, Kimchi, Bibimbap, Korean Corn Dogs',
        image: seoulImg,
        lat: 37.5665,
        lng: 126.978,
        landmark: {
            name: 'Gyeongbokgung Palace',
            x: '60%',
            y: '60%',
            info: 'Gyeongbokgung Palace shows Seoul’s royal history through its grand gates, courtyards, and traditional architecture. Surrounded by the modern city, it creates a strong contrast between Korea’s past and present.'
        }
    },
    {
        city: 'Shanghai, China',
        time: 'October 2025',
        description: 'LoL World Championship Semifinals',
        food: 'Dim Sum, Peking Duck, Hot Pot, Chinese BBQ',
        image: shanghaiImg,
        lat: 31.2304,
        lng: 121.4737,
        landmark: {
            name: 'Oriental Pearl Tower',
            x: '28%',
            y: '35%',
            info: 'The Oriental Pearl Tower is one of the defining features of Shanghai’s skyline. Its futuristic design reflects the city’s rapid growth and makes the Pudong waterfront feel especially modern and energetic.'
        }
    },
    {
        city: 'Hualien, Taiwan',
        time: 'November 2025',
        description: 'Helen\'s Birthday Trip!',
        food: 'Coffin Bread, Stinky Tofu, Millet Wine, Oyster Omelette',
        image: hualienImg,
        lat: 23.9872,
        lng: 121.6015,
        landmark: {
            name: 'Dongdamen Night Market',
            x: '50%',
            y: '20%',
            info: 'Dongdamen Night Market brings together Hualien’s local food, games, and nighttime energy in one lively space. It is a great place to experience the city through its street food, bright lights, and relaxed coastal atmosphere.'
        }
    },
    {
        city: 'Manila, Philippines',
        time: 'November 2025',
        description: 'Trip with Food Coma',
        food: 'Adobo, Lechon, Halo-Halo, Pancit',
        image: manilaImg,
        lat: 14.5995,
        lng: 120.9842,
        landmark: {
            name: 'Intramuros',
            x: '40%',
            y: '50%',
            info: 'Intramuros is Manila’s historic walled city and one of the clearest reminders of the Philippines’ colonial past. Its stone walls, old churches, and narrow streets make it feel very different from the busy modern city around it.'
        }
    },
    {
        city: 'Tokyo, Japan',
        time: 'December 2025',
        description: 'Last Trip of the Year',
        food: 'Sushi, Ramen, Katsu, Gyudon',
        image: tokyoImg,
        lat: 35.6762,
        lng: 139.6503,
        landmark: {
            name: 'Mount Fuji',
            x: '68%',
            y: '55%',
            info: 'Mount Fuji is one of Japan’s most important natural symbols, admired for its nearly perfect shape and cultural meaning. Even from a distance, it gives the surrounding landscape a peaceful and iconic feeling.'
        }
    },
    {
        city: 'Shenzhen, China',
        time: 'December 2025',
        description: 'Christmas Trip with Family',
        food: 'Dim Sum, Peking Duck, Fish',
        image: shenzhenImg,
        lat: 22.5431,
        lng: 114.0579,
        landmark: {
            name: 'Window of the World',
            x: '42%',
            y: '48%',
            info: 'Window of the World reflects Shenzhen’s playful and global side by recreating famous landmarks from around the world. It turns the city into a place where visitors can see many cultures and attractions in one park.'
        }
    },
    {
        city: 'Chong Qing, China',
        time: 'December 2025',
        description: 'Adventure with Family',
        food: 'Hotpot, Xiao Mien, Ma Po Tofu',
        image: chongqingImg,
        lat: 29.563,
        lng: 106.5516,
        landmark: {
            name: 'Chongqing Drone Show',
            x: '50%',
            y: '39%',
            info: 'The Chongqing Drone Show highlights the city’s dramatic skyline and modern energy. With lights moving above the rivers and high-rise buildings, it captures the futuristic feeling that makes Chongqing stand out.'
        }
    },
    {
        city: 'Hangzhou, China',
        time: 'January 2026',
        description: 'Peaceful Destination in China',
        food: "Dongpo Pork, Longjing Shrimp, Beggar's Chicken",
        image: hangzhouImg,
        lat: 30.2741,
        lng: 120.1551,
        landmark: {
            name: 'West Lake',
            x: '46%',
            y: '58%',
            info: 'West Lake is the heart of Hangzhou and is known for its calm water, bridges, temples, and surrounding greenery. Its peaceful scenery gives the city a slower, more poetic feeling compared to China’s larger urban centers.'
        }
    },
    {
        city: 'Saigon (Ho Chi Minh City), Vietnam',
        time: 'January 2026',
        description: 'Last City of the Semester',
        food: 'Com Tam, Banh Bot Loc, Bun Rieu, Banh Xeo',
        image: saigonImg,
        lat: 10.8231,
        lng: 106.6297,
        landmark: {
            name: 'Ben Thanh Market',
            x: '32%',
            y: '58%',
            info: 'Ben Thanh Market is one of Saigon’s most recognizable places for food, souvenirs, and local shopping. Its busy stalls and central location make it a lively introduction to the pace and personality of the city.'
        }
    },
    {
        city: 'Danang, Vietnam',
        time: 'January 2026',
        description: 'Weekend Trip with Audrey and Sam!',
        food: 'Mi Quang, Banh Mi, Mango Smoothie, Che',
        image: danangImg,
        lat: 16.0544,
        lng: 108.2022,
        landmark: {
            name: 'My Khe Beach',
            x: '10%',
            y: '50%',
            info: 'My Khe Beach stretches along Danang’s coast and is known for its wide shoreline, soft sand, and calm blue water. It captures the more relaxed side of the city, balancing Danang’s busy streets with a peaceful oceanfront atmosphere.'
        }
    },
    {
        city: 'Madison, USA',
        time: 'January 2026',
        description: 'Home Base',
        food: 'Cheese, Cheese Curds, Stella\'s',
        image: madisonImg,
        lat: 43.0731,
        lng: -89.4012,
        landmark: {
            name: 'University of Wisconsin-Madison',
            x: '40%',
            y: '60%',
            info: 'The University of Wisconsin-Madison is a major public research university known for its lakeside campus, school spirit, and strong academic community. It represents both a home base and an important part of this travel journey.'
        }
    },
    {
        city: 'Minneapolis, USA',
        time: 'March 2026',
        description: 'Via-1 at University of Minnesota',
        food: 'Juicy Lucy, Walleye, Tater Tot Hotdish',
        image: twincitiesImg,
        lat: 44.9778,
        lng: -93.265,
        landmark: {
            name: 'University of Minnesota - Twin Cities Campus',
            x: '50%',
            y: '75%',
            info: 'The University of Minnesota’s Twin Cities Campus connects college life with the energy of Minneapolis and St. Paul. Its urban campus setting makes it feel closely tied to the city around it.'
        }
    },
    {
        city: 'Frankfurt, Germany',
        time: 'March 2026',
        description: 'Spring Break Trip with Friends',
        food: 'Beer, Schnitzel, Currywurst',
        image: frankfurtImg,
        lat: 50.1109,
        lng: 8.6821,
        landmark: {
            name: 'Römerberg',
            x: '70%',
            y: '65%',
            info: 'Römerberg is Frankfurt’s historic old town square, surrounded by reconstructed medieval-style buildings. The square gives a glimpse into the city’s past and contrasts with Frankfurt’s modern skyline and financial district.'
        }
    },
    {
        city: 'Berlin, Germany',
        time: 'March 2026',
        description: 'Exploring the Capital',
        food: 'Bratwurst, Döner Kebab, Berliner Pfannkuchen',
        image: berlinImg,
        lat: 52.52,
        lng: 13.405,
        landmark: {
            name: 'Berliner Dom',
            x: '35%',
            y: '30%',
            info: 'Berliner Dom is one of Berlin’s most impressive churches, standing on Museum Island near many of the city’s major cultural sites. Its large dome, detailed interior, and riverside location make it a strong symbol of Berlin’s history and architecture.'
        }
    },
    {
        city: 'Freiburg, Germany',
        time: 'March 2026',
        description: 'Visiting Max\'s Home Abroad',
        food: 'Black Forest Cake, Flammkuchen, Maultaschen',
        image: freiburgImg,
        lat: 47.999,
        lng: 7.8421,
        landmark: {
            name: 'Freiburg Minster',
            x: '50%',
            y: '70%',
            info: 'Freiburg Minster is the centerpiece of Freiburg’s old town and is especially known for its tall Gothic tower. The cathedral stands above the surrounding market square, making it feel like the heart of the city’s daily life.'
        }
    },
    {
        city: 'Geneva, Switzerland',
        time: 'March 2026',
        description: 'Quick Stop in Switzerland',
        food: 'Raclette, Fondue, Chocolate',
        image: genevaImg,
        lat: 46.2044,
        lng: 6.1432,
        landmark: {
            name: 'Jet d\'Eau',
            x: '50%',
            y: '65%',
            info: 'The Jet d’Eau is Geneva’s famous lakeside fountain, shooting water high above Lake Geneva. Its simple but dramatic design makes it one of the city’s clearest symbols and connects the landmark to Geneva’s waterfront identity.'
        }
    },
    {
        city: 'Annecy, France',
        time: 'March 2026',
        description: 'Getaway to the French Alps',
        food: 'Fondue, Raclette, Chocolate',
        image: annecyImg,
        lat: 45.8992,
        lng: 6.1294,
        landmark: {
            name: 'Palais de l\'Île',
            x: '65%',
            y: '50%',
            info: 'The Palais de l’Île sits in the middle of Annecy’s canal and is one of the city’s most recognizable buildings. Its unusual island location and old stone structure make Annecy feel like a storybook town surrounded by water and mountain views.'
        }
    },
    {
        city: 'Milan, Italy',
        time: 'April 2026',
        description: 'Made it to Italy!',
        food: 'Pizza, Pasta, Gelato',
        image: milanImg,
        lat: 45.4642,
        lng: 9.19,
        landmark: {
            name: 'Galleria Vittorio Emanuele II',
            x: '70%',
            y: '70%',
            info: 'The Galleria Vittorio Emanuele II is one of Milan’s most elegant public spaces, connecting the Duomo area with La Scala. Its glass ceiling, mosaic floors, and luxury storefronts show Milan’s reputation for fashion, design, and historic style.'
        }
    },
    {
        city: 'Bologna, Italy',
        time: 'April 2026',
        description: 'Food Capital of Italy',
        food: 'Tagliatelle al Ragù, Mortadella, Cacio di Bufala',
        image: bolognaImg,
        lat: 44.4949,
        lng: 11.3426,
        landmark: {
            name: 'Towers of Bologna',
            x: '50%',
            y: '80%',
            info: 'The Towers of Bologna are two leaning medieval towers that reflect the city’s long history and skyline. They are reminders of a time when wealthy families built towers as symbols of power and status.'
        }
    },
    {
        city: 'Barcelona, Spain',
        time: 'April 2026',
        description: 'Offsides FC in Spain!',
        food: 'Paella, Churros, Sangria',
        image: barcelonaImg,
        lat: 41.3874,
        lng: 2.1686,
        landmark: {
            name: 'Sagrada Família',
            x: '65%',
            y: '80%',
            info: 'The Sagrada Família is Barcelona’s most famous basilica and one of Antoni Gaudí’s greatest works. Its unusual shapes, detailed façades, and ongoing construction make it feel both historic and still alive as part of the city’s identity.'
        }
    }
];

export default locations;