import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export default function AboutMe() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const passions = [
    {
      text: "Professionalism is the hallmark of my work ethic. I strive to be remembered as someone who consistently delivers high-quality results, maintains open communication, and upholds the highest standards in every aspect of my projects.",
      key: 0,
    },
    {
      text: "Creating meaningful solutions that enhance lives and generate opportunities for those around me is at the heart of my motivation. I am committed to developing web applications that not only cater to user needs but also empower and inspire them.",
      key: 1,
    },
  ]

  return (
    <div className="bg-white" id="about-me">
      <main className="isolate">
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Welcome. I'm Jeevan,
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  a passionate and dedicated web developer driven by two core
                  values that inspire me to rise and shine each day:
                  self-actualization and making a positive impact in the world.
                  <ol>
                    {passions.map(passions => {
                      return <li key={passions.key}>{passions.text}</li>
                    })}
                  </ol>
                  Continuous learning and growth are integral to my personal and
                  professional journey. You can always count on me to embrace
                  new challenges, stay up-to-date with the latest industry
                  trends, and adapt to evolving technologies, ensuring that I
                  bring the best possible solutions to the table. Together,
                  let's create innovative web experiences that truly make a
                  difference!
                </p>
              </div>

              <StaticImage
                // src="../images/profileImage.jpg"
                src="../images/profile-pic.png"
                alt="Profile Image"
                placeholder="blurred"
                layout="constrained"
                width={450}
                height={450}
                className="mt-10 w-full h-auto max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 sm:w-2/3 md:w-1/2 lg:w-full"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </main>
    </div>
  )
}
