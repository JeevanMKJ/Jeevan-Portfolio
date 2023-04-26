// import React from "react"

// import { useState, Fragment } from "react"
// import { Disclosure, Menu, Transition } from "@headlessui/react"
// import { BellIcon, XIcon, MenuIcon } from "@heroicons/react/outline"

// import About from "./AboutMe"
// import Portfolio from "./Portfolio"
// import Contact from "./Contact"
// import Resume from "./Resume"

// const navigation = [
//   { name: "About Me", href: "", current: true },
//   { name: "Portfolio", href: "", current: false },
//   { name: "Contact", href: "", current: false },
//   { name: "Resume", href: "", current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ")
// }

// export default function Navigation() {
//   const [activeSection, setActiveSection] = useState("About Me")

//   const handleNavClick = section => {
//     setActiveSection(section)
//   }

//   const renderSection = () => {
//     switch (activeSection) {
//       case "About Me":
//         return <About />
//       case "Portfolio":
//         return <Portfolio />
//       case "Contact":
//         return <Contact />
//       case "Resume":
//         return <Resume />
//       default:
//         return <About />
//     }
//   }

//   return (
//     <>
//       <Disclosure as="nav" className="bg-gray-800">
//         {({ open }) => (
//           <>
//             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//               <div className="flex flex-shrink-0 items-center">
//                 <h1 className="text-xl text-white">Jeevan Jones</h1>
//               </div>
//               <div className="hidden sm:ml-6 sm:block">
//                 <div className="flex space-x-4">
//                   {navigation.map(item => (
//                     <a
//                       key={item.name}
//                       onClick={() => handleNavClick(item.name)}
//                       className={classNames(
//                         item.name === activeSection
//                           ? "bg-gray-900 text-white"
//                           : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                         "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
//                       )}
//                       aria-current={
//                         item.name === activeSection ? "page" : undefined
//                       }
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </Disclosure>
//       <main>{renderSection()}</main>
//     </>
//   )
// }

// import React from "react"

// import { useState, Fragment } from "react"
// import { Disclosure, Menu, Transition } from "@headlessui/react"
// import { BellIcon, XIcon, MenuIcon } from "@heroicons/react/outline"

// import About from "./AboutMe"
// import Portfolio from "./Portfolio"
// import Contact from "./Contact"
// import Resume from "./Resume"

// const navigation = [
//   { name: "About Me", href: "", current: true },
//   { name: "Portfolio", href: "", current: false },
//   { name: "Contact", href: "", current: false },
//   { name: "Resume", href: "", current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ")
// }

// export default function Navigation() {
//   const [activeSection, setActiveSection] = useState("About Me")

//   const handleNavClick = section => {
//     setActiveSection(section)
//   }

//   const renderSection = () => {
//     switch (activeSection) {
//       case "About Me":
//         return <About />
//       case "Portfolio":
//         return <Portfolio />
//       case "Contact":
//         return <Contact />
//       case "Resume":
//         return <Resume />
//       default:
//         return <About />
//     }
//   }

//   return (
//     <>
//       <Disclosure as="nav" className="bg-gray-800 py-2">
//         {({ open }) => (
//           <>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex flex-1 items-center justify-between">
//                 <div className="flex flex-shrink-0 items-center">
//                   <h1 className="text-2xl text-white mr-12">Jeevan Jones</h1>
//                 </div>
//                 <div className="hidden sm:ml-auto sm:block">
//                   <div className="flex space-x-8">
//                     {navigation.map(item => (
//                       <a
//                         key={item.name}
//                         onClick={() => handleNavClick(item.name)}
//                         className={classNames(
//                           item.name === activeSection
//                             ? "bg-gray-900 text-white"
//                             : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                           "rounded-md px-4 py-3 text-base font-medium cursor-pointer"
//                         )}
//                         aria-current={
//                           item.name === activeSection ? "page" : undefined
//                         }
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </Disclosure>
//       <main>{renderSection()}</main>
//     </>
//   )
// }

// import React from "react"

// import { useState, Fragment } from "react"
// import { Disclosure, Menu, Transition } from "@headlessui/react"
// import { BellIcon, XIcon, MenuIcon } from "@heroicons/react/outline"

// import About from "./AboutMe"
// import Portfolio from "./Portfolio"
// import Contact from "./Contact"
// import Resume from "./Resume"

// const navigation = [
//   { name: "About Me", href: "", current: true },
//   { name: "Portfolio", href: "", current: false },
//   { name: "Contact", href: "", current: false },
//   { name: "Resume", href: "", current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ")
// }

// export default function Navigation() {
//   const [activeSection, setActiveSection] = useState("About Me")

//   const handleNavClick = section => {
//     setActiveSection(section)
//   }

//   const renderSection = () => {
//     switch (activeSection) {
//       case "About Me":
//         return <About />
//       case "Portfolio":
//         return <Portfolio />
//       case "Contact":
//         return <Contact />
//       case "Resume":
//         return <Resume />
//       default:
//         return <About />
//     }
//   }

//   return (
//     <>
//       <Disclosure as="nav" className="bg-gray-800 py-2">
//         {({ open }) => (
//           <>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex flex-1 items-center justify-between">
//                 <div className="flex flex-shrink-0 items-center">
//                   <h1
//                     className="text-2xl text-white mr-12 cursor-pointer"
//                     onClick={() => handleNavClick("About Me")}
//                   >
//                     Jeevan Jones
//                   </h1>
//                 </div>
//                 <div className="hidden sm:ml-auto sm:block">
//                   <div className="flex space-x-8">
//                     {navigation.map(item => (
//                       <a
//                         key={item.name}
//                         onClick={() => handleNavClick(item.name)}
//                         className={classNames(
//                           item.name === activeSection
//                             ? "bg-gray-900 text-white"
//                             : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                           "rounded-md px-4 py-3 text-base font-medium cursor-pointer"
//                         )}
//                         aria-current={
//                           item.name === activeSection ? "page" : undefined
//                         }
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </Disclosure>
//       <main>{renderSection()}</main>
//     </>
//   )
// }

import React from "react"

import { useState } from "react"
import { Disclosure } from "@headlessui/react"

import About from "./AboutMe"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Resume from "./Resume"

const navigation = [
  { name: "About Me", href: "", current: true },
  { name: "Portfolio", href: "", current: false },
  { name: "Contact", href: "", current: false },
  { name: "Resume", href: "", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("About Me")

  const handleNavClick = section => {
    setActiveSection(section)
  }

  const renderSection = () => {
    switch (activeSection) {
      case "About Me":
        return <About />
      case "Portfolio":
        return <Portfolio />
      case "Contact":
        return <Contact />
      case "Resume":
        return <Resume />
      default:
        return <About />
    }
  }

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 py-2">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-1 items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <h1
                    className="text-2xl text-white mr-12 cursor-pointer"
                    onClick={() => handleNavClick("About Me")}
                  >
                    Jeevan Jones
                  </h1>
                </div>
                <div className="hidden sm:ml-auto sm:block">
                  <div className="flex space-x-8">
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        onClick={() => handleNavClick(item.name)}
                        className={classNames(
                          item.name === activeSection
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-4 py-3 text-base font-medium cursor-pointer"
                        )}
                        aria-current={
                          item.name === activeSection ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? "Close" : "Menu"}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    onClick={() => handleNavClick(item.name)}
                    className={classNames(
                      item.name === activeSection
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={
                      item.name === activeSection ? "page" : undefined
                    }
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <main>{renderSection()}</main>
    </>
  )
}
