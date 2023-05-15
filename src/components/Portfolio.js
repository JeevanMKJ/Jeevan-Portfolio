// import React from "react"

// import VilcaEventsImage from "../images/VilcaEvents.png"

// const products = [
//   {
//     id: 1,
//     name: "Vilcabamba Events",
//     href: "https://glacial-escarpment-38096.herokuapp.com/",
//     price: "$256",
//     description:
//       "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
//     options: "8 colors",
//     imageSrc: VilcaEventsImage,
//     imageAlt:
//       "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
//   },
//   {
//     id: 2,
//     name: "Basic Tee",
//     href: "#",
//     price: "$32",
//     description:
//       "Look like a visionary CEO and wear the same black t-shirt every day.",
//     options: "Black",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
//     imageAlt: "Front of plain black t-shirt.",
//   },
// ]

// export default function Example() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="sr-only">Products</h2>

//         <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
//           {products.map(product => (
//             <div
//               key={product.id}
//               className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
//             >
//               <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
//                 <img
//                   src={product.imageSrc}
//                   alt={product.imageAlt}
//                   className="h-full w-full object-cover object-center sm:h-full sm:w-full"
//                 />
//               </div>
//               <div className="flex flex-1 flex-col space-y-2 p-4">
//                 <h3 className="text-sm font-medium text-gray-900">
//                   <a href={product.href}>
//                     <span aria-hidden="true" className="absolute inset-0" />
//                     {product.name}
//                   </a>
//                 </h3>
//                 <p className="text-sm text-gray-500">{product.description}</p>
//                 <div className="flex flex-1 flex-col justify-end">
//                   <p className="text-sm italic text-gray-500">
//                     {product.options}
//                   </p>
//                   <p className="text-base font-medium text-gray-900">
//                     {product.price}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

//

// import React from "react"

// import VilcaEventsImage from "../images/VilcaEvents.png"

// const products = [
//   {
//     id: 1,
//     name: "Vilcabamba Events",
//     href: "https://glacial-escarpment-38096.herokuapp.com/",
//     githubLink: "https://github.com/JeevanMKJ/Vilca--Events",
//     githubLinkText: "See the code",
//     imageSrc: VilcaEventsImage,
//     imageAlt:
//       "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
//   },
// ]

// export default function Example() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="sr-only">Products</h2>

//         <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
//           {products.map(product => (
//             <div
//               key={product.id}
//               className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
//             >
//               <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
//                 <a href={product.href}>
//                   <img
//                     src={product.imageSrc}
//                     alt={product.imageAlt}
//                     className="h-full w-full object-cover object-center sm:h-full sm:w-full"
//                   />
//                 </a>
//               </div>
//               <div className="flex flex-1 flex-col space-y-2 p-4">
//                 <h3 className="text-sm font-medium text-gray-900">
//                   <a href={product.href}>
//                     <span aria-hidden="true" className="absolute inset-0" />
//                     {product.name}
//                   </a>
//                 </h3>
//                 <div className="flex flex-1 flex-col justify-end">
//                   <a
//                     href={product.githubLink}
//                     className="text-base font-medium text-gray-900 hover:text-gray-500 group-hover:underline flex items-center space-x-1"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <span>{product.githubLinkText}</span>
//                     <span>→</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

import React from "react"

import VilcaEventsImage from "../images/VilcaEvents.png"
import NoteTakerImage from "../images/NoteTaker.png"
import DailySchedulePlannerImage from "../images/DailySchedulePlanner.png"
import PasswordGeneratorImage from "../images/PasswordGenerator.png"
import JSCodeQuizImages from "../images/JSCodeQuiz.png"
import DieGameImage from "../images/DieGame.png"
import NumberGuessGameImage from "../images/NumberGuessGame.png"
import imageOf4096 from "../images/imageOf4096.png"

const projects = [
  {
    id: 1,
    name: "4096",
    href: "https://highfives-4096.herokuapp.com/",
    githubLink: "https://github.com/JeevanMKJ/4096",
    githubLinkText: "See the code",
    imageSrc: imageOf4096,
    imageAlt: "Image of home page",
  },
  {
    id: 2,
    name: "Vilcabamba Events",
    href: "https://glacial-escarpment-38096.herokuapp.com/",
    githubLink: "https://github.com/JeevanMKJ/Vilca--Events",
    githubLinkText: "See the code",
    imageSrc: VilcaEventsImage,
    imageAlt: "Image of home page",
  },
  {
    id: 3,
    name: "Note Taker",
    href: "https://whispering-journey-75499.herokuapp.com/",
    githubLink: "https://github.com/JeevanMKJ/Note_Taker_Application",
    githubLinkText: "See the code",
    imageSrc: NoteTakerImage,
    imageAlt: "Image of note page",
  },
  {
    id: 4,
    name: "Daily Schedule Planner",
    href: "https://jeevanmkj.github.io/daily_schedule_planner/",
    githubLink: "https://github.com/JeevanMKJ/daily_schedule_planner",
    githubLinkText: "See the code",
    imageSrc: DailySchedulePlannerImage,
    imageAlt: "Image of home page",
  },
  {
    id: 5,
    name: "Password Generator",
    href: "https://jeevanmkj.github.io/password_generator/",
    githubLink: "https://github.com/JeevanMKJ/password_generator",
    githubLinkText: "See the code",
    imageSrc: PasswordGeneratorImage,
    imageAlt: "Image of home page",
  },
  {
    id: 6,
    name: "JS Code Quiz",
    href: "https://jeevanmkj.github.io/js-code-quiz/",
    githubLink: "https://github.com/JeevanMKJ/js-code-quiz",
    githubLinkText: "See the code",
    imageSrc: JSCodeQuizImages,
    imageAlt: "Image of home page",
  },
  {
    id: 7,
    name: "Die Game",
    href: "https://jeevanmkj.github.io/die_game/",
    githubLink: "https://github.com/JeevanMKJ/die_game",
    githubLinkText: "See the code",
    imageSrc: DieGameImage,
    imageAlt: "Image of home page",
  },
  {
    id: 8,
    name: "Number Guess Game",
    href: "https://jeevanmkj.github.io/number_guess_game/",
    githubLink: "https://github.com/JeevanMKJ/number_guess_game",
    githubLinkText: "See the code",
    imageSrc: NumberGuessGameImage,
    imageAlt: "Image of home page",
  }
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <a href={project.href} target="_blank">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </a>
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={project.href}>{project.name}</a>
                </h3>
                <div className="flex flex-1 flex-col justify-end">
                  <a
                    href={project.githubLink}
                    className="text-base font-medium text-gray-900 hover:text-gray-500 group-hover:underline flex items-center space-x-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{project.githubLinkText}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
