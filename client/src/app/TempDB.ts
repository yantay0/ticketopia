import {Category} from "./model/Category";

export const categories =  [
  {
    "id" : 1,
    "name": "Concerts",
    "image": "concert.png",
    "selected": true
  },
  {
    "id" : 2,
    "name": "Movies",
    "image": "movies.png",
    "selected": false,
  },
  {
    "id" : 3,
    "name": "Theatre",
    "image": "theatre.png",
    "selected": false,
  },

]

export const events = [
  {
    "id": 1,
    "title": "I am everything",
    "description": "On May 12-13-14, in the Almaty Central Department Store, STAGES together with ARARAT presents the premiere of the immersive performance \"Ideal Past\"!\n" +
      "\n" +
      "Attend Marilyn Monroe's birthday? Or decide the fate of the whole world with President Kennedy? Together with the heroes of the performance, the viewer will plunge into the life of great artists, actors and musicians! The starting point is the \"Bar in Harlem\", where you can hear the latest gossip from the jazz scene of the last century. And the evening will end at the concert of the \"First Lady of Jazz\".\n" +
      "\n" +
      "The linear structure of the performance is based on the real story of the production project Song Books, the author of which was the famous jazz producer Norman Grantz, and the great Ella Fitzgerald was the implementer. This is a dedication to a vanishing era of intelligence and elitism in American popular music.",
    "premiereDate":  "2018-06-29",
    "ageRating": "+18",
    "location": "Almaty",
    "duration": 140,
    "poster": "banner5.png",
    "capacity": 200,
    "category": {
      "id" : 1,
      "name": "Concerts",
      "image": "concert.png",
      "selected": true
    },
    "genre": "drama"
  },

//   {
//     "id": 2,
//     "title": "I am everything",
//     "description": "On May 12-13-14, in the Almaty Central Department Store, STAGES together with ARARAT presents the premiere of the immersive performance \"Ideal Past\"!\n" +
//       "\n" +
//       "Attend Marilyn Monroe's birthday? Or decide the fate of the whole world with President Kennedy? Together with the heroes of the performance, the viewer will plunge into the life of great artists, actors and musicians! The starting point is the \"Bar in Harlem\", where you can hear the latest gossip from the jazz scene of the last century. And the evening will end at the concert of the \"First Lady of Jazz\".\n" +
//       "\n" +
//       "The linear structure of the performance is based on the real story of the production project Song Books, the author of which was the famous jazz producer Norman Grantz, and the great Ella Fitzgerald was the implementer. This is a dedication to a vanishing era of intelligence and elitism in American popular music.",
//     "premiereDate":  "2018-06-29",
//     "ageRating": "+18",
//     "location": "Almaty",
//     "duration": "140",
//     "poster": "img.png",
//     "capacity": 200,
//     "category": {
//       "id" : 1,
//       "name": "Concerts",
//       "image": "concert.png",
//       "selected": true
//     }
//   },
//   {
//     "id": 3,
//     "title": "I am everything",
//     "description": "On May 12-13-14, in the Almaty Central Department Store, STAGES together with ARARAT presents the premiere of the immersive performance \"Ideal Past\"!\n" +
//       "\n" +
//       "Attend Marilyn Monroe's birthday? Or decide the fate of the whole world with President Kennedy? Together with the heroes of the performance, the viewer will plunge into the life of great artists, actors and musicians! The starting point is the \"Bar in Harlem\", where you can hear the latest gossip from the jazz scene of the last century. And the evening will end at the concert of the \"First Lady of Jazz\".\n" +
//       "\n" +
//       "The linear structure of the performance is based on the real story of the production project Song Books, the author of which was the famous jazz producer Norman Grantz, and the great Ella Fitzgerald was the implementer. This is a dedication to a vanishing era of intelligence and elitism in American popular music.",
//     "premiereDate":  "2018-06-29",
//     "ageRating": "+18",
//     "location": "Almaty",
//     "duration": "140",
//     "poster": "img.png",
//     "capacity": 200,
//     "category": {
//       "id" : 1,
//       "name": "Concerts",
//       "image": "concert.png",
//       "selected": true
//     }
//   },
//   {
//     "id": 4,
//     "title": "I am everything",
//     "description": "On May 12-13-14, in the Almaty Central Department Store, STAGES together with ARARAT presents the premiere of the immersive performance \"Ideal Past\"!\n" +
//       "\n" +
//       "Attend Marilyn Monroe's birthday? Or decide the fate of the whole world with President Kennedy? Together with the heroes of the performance, the viewer will plunge into the life of great artists, actors and musicians! The starting point is the \"Bar in Harlem\", where you can hear the latest gossip from the jazz scene of the last century. And the evening will end at the concert of the \"First Lady of Jazz\".\n" +
//       "\n" +
//       "The linear structure of the performance is based on the real story of the production project Song Books, the author of which was the famous jazz producer Norman Grantz, and the great Ella Fitzgerald was the implementer. This is a dedication to a vanishing era of intelligence and elitism in American popular music.",
//     "premiereDate":  "2018-06-29",
//     "ageRating": "+18",
//     "location": "Almaty",
//     "duration": "140",
//     "poster": "img.png",
//     "capacity": 200,
//     "category": {
//       "id" : 1,
//       "name": "Concerts",
//       "image": "concert.png",
//       "selected": true
//     }
//   },
//   {
//     "id": 5,
//     "title": "I am everything",
//     "description": "On May 12-13-14, in the Almaty Central Department Store, STAGES together with ARARAT presents the premiere of the immersive performance \"Ideal Past\"!\n" +
//       "\n" +
//       "Attend Marilyn Monroe's birthday? Or decide the fate of the whole world with President Kennedy? Together with the heroes of the performance, the viewer will plunge into the life of great artists, actors and musicians! The starting point is the \"Bar in Harlem\", where you can hear the latest gossip from the jazz scene of the last century. And the evening will end at the concert of the \"First Lady of Jazz\".\n" +
//       "\n" +
//       "The linear structure of the performance is based on the real story of the production project Song Books, the author of which was the famous jazz producer Norman Grantz, and the great Ella Fitzgerald was the implementer. This is a dedication to a vanishing era of intelligence and elitism in American popular music.",
//     "premiereDate":  "2018-06-29",
//     "ageRating": "+18",
//     "location": "Almaty",
//     "duration": "140",
//     "poster": "img.png",
//     "capacity": 200,
//     "category": {
//       "id" : 1,
//       "name": "Concerts",
//       "image": "concert.png",
//       "selected": true
//     }
//   },
//   {
//     "id": 6,
//     "title": "I am everything",
//     "description": "On May 12-13-14, in the Almaty Central Department Store, STAGES together with ARARAT presents the premiere of the immersive performance \"Ideal Past\"!\n" +
//       "\n" +
//       "Attend Marilyn Monroe's birthday? Or decide the fate of the whole world with President Kennedy? Together with the heroes of the performance, the viewer will plunge into the life of great artists, actors and musicians! The starting point is the \"Bar in Harlem\", where you can hear the latest gossip from the jazz scene of the last century. And the evening will end at the concert of the \"First Lady of Jazz\".\n" +
//       "\n" +
//       "The linear structure of the performance is based on the real story of the production project Song Books, the author of which was the famous jazz producer Norman Grantz, and the great Ella Fitzgerald was the implementer. This is a dedication to a vanishing era of intelligence and elitism in American popular music.",
//     "premiereDate":  "2018-06-29",
//     "ageRating": "+18",
//     "location": "Almaty",
//     "duration": "140",
//     "poster": "img.png",
//     "capacity": 200,
//     "category": {
//       "id" : 1,
//       "name": "Concerts",
//       "image": "concert.png",
//       "selected": true
//     }
//   }
]

