// import React, { useState } from "react"

// export default function Contact() {
//   const [emailError, setEmailError] = useState("")
//   const formspreeEndpoint = "https://formspree.io/f/meqwvndw"

//   const validateEmail = email => {
//     const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
//     return emailRegex.test(email)
//   }

//   const handleEmailBlur = event => {
//     if (!validateEmail(event.target.value)) {
//       setEmailError("Invalid email address")
//     } else {
//       setEmailError("")
//     }
//   }

//   return (
//     <div className="relative bg-white">
//       <div className="lg:absolute lg:inset-0 lg:left-1/2">
//         <img
//           className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
//           src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
//           alt=""
//         />
//       </div>
//       <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
//         <div className="px-6 lg:px-8">
//           <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900">
//               Let's build Stuff
//             </h2>
//             <p className="mt-2 text-lg leading-8 text-gray-600">
//               Reach out and connect.
//             </p>
//             <form action={formspreeEndpoint} method="POST" className="mt-16">
//               <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="first-name"
//                     className="block text-sm font-semibold leading-6 text-gray-900"
//                   >
//                     First name
//                   </label>
//                   <div className="mt-2.5">
//                     <input
//                       type="text"
//                       name="first-name"
//                       id="first-name"
//                       autoComplete="given-name"
//                       required
//                       className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="last-name"
//                     className="block text-sm font-semibold leading-6 text-gray-900"
//                   >
//                     Last name
//                   </label>
//                   <div className="mt-2.5">
//                     <input
//                       type="text"
//                       name="last-name"
//                       id="last-name"
//                       autoComplete="family-name"
//                       required
//                       className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-semibold leading-6 text-gray-900"
//                   >
//                     Email
//                   </label>
//                   <div className="mt-2.5">
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       autoComplete="email"
//                       required
//                       onBlur={handleEmailBlur}
//                       className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                     {emailError && (
//                       <p className="text-sm text-red-500">{emailError}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <div className="flex justify-between text-sm leading-6">
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-semibold leading-6 text-gray-900"
//                   >
//                     How can we help you?
//                   </label>
//                   <p id="message-description" className="text-gray-400">
//                     Max 500 characters
//                   </p>
//                 </div>
//                 <div className="mt-2.5">
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={4}
//                     aria-describedby="message-description"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     defaultValue={""}
//                   />
//                 </div>
//               </div>
//               <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
//                 {" "}
//                 <button
//                   type="submit"
//                   className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Send message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Contact() {
  const [emailError, setEmailError] = useState("")
  const formspreeEndpoint = "https://formspree.io/f/meqwvndw"

  const validateEmail = email => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    return emailRegex.test(email)
  }

  const handleEmailBlur = event => {
    if (!validateEmail(event.target.value)) {
      setEmailError("Invalid email address")
    } else {
      setEmailError("")
    }
  }

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <StaticImage
          src="../images/ContactImage1.JPG"
          alt="Image of Me hahaha"
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Let's build Stuff
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Reach out and connect.
            </p>
            <form action={formspreeEndpoint} method="POST" className="mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      onBlur={handleEmailBlur}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {emailError && (
                      <p className="text-sm text-red-500">{emailError}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between text-sm leading-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    How can we help you?
                  </label>
                  <p id="message-description" className="text-gray-400">
                    Max 500 characters
                  </p>
                </div>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    aria-describedby="message-description"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                {" "}
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
