// import Image from 'next/image'
// import { Mail, Github, Linkedin } from 'lucide-react'
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Hero Section */}
//       <main className="flex-1">
//         <section className="py-20 px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//               <div className="text-center md:text-left space-y-4">
//                 <h1 className="text-5xl font-bold text-gray-900">
//                   Hi, I am <span className="text-blue-600">Manish</span>
//                 </h1>
//                 <h2 className="text-2xl text-gray-600">Web Developer</h2>
//                 <div className="flex gap-4 justify-center md:justify-start">
//                 <Link href="https://github.com/wideputin117" target="_blank" rel="noopener noreferrer">
//                   <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
//                     <Github className="w-6 h-6" />
//                   </button>
//                 </Link>

//                 <Link href="https://www.linkedin.com/in/manish-gupta-a1b0bb222/" target="_blank" rel="noopener noreferrer">
//                   <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
//                     <Linkedin className="w-6 h-6" />
//                   </button>
//                 </Link>

//                 <Link href="mailto:takermanish7@gmail.com">
//                   <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
//                     <Mail className="w-6 h-6" />
//                   </button>
//                 </Link>
//                 </div>
//               </div>
//               <div className="relative">
//                 <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 blur opacity-75"></div>
//                 <Image
//                   src="/main.png"
//                   alt="Profile"
//                   width={200}
//                   height={200}
//                   className="relative rounded-full border-4 border-white"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section className="py-20 bg-white px-4">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//             Hello, I&apos;m Manish, a passionate MERN Stack Developer with a knack for crafting dynamic web applications. 
//             With a strong foundation in MongoDB, Express.js, React, and Node.js, I bring ideas to life by seamlessly 
//             merging front-end and back-end technologies. My commitment to clean code and responsive design ensures 
//             that every project I undertake is user-friendly and performs flawlessly.
//             </p>
//           </div>
//         </section>

//         {/* Tech Stack */}
//         <section className="py-20 px-4">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//               {[
//                 { src: '/db.svg', alt: 'MongoDB' },
//                 { src: '/node.svg', alt: 'Node.js' },
//                 { src: '/rc.svg', alt: 'React' },
//                 { src: '/ex.svg', alt: 'Express' },
//                 { src: '/next.svg', alt: 'Next.js' },
//                 { src: '/tlwnd.svg', alt: 'Tailwind' }
//               ].map((tech, index) => (
//                 <div key={index} className="group relative">
//                   <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
//                   <div className="relative flex items-center justify-center p-4 bg-white rounded-lg">
//                     <Image
//                       src={tech.src}
//                       alt={tech.alt}
//                       width={80}
//                       height={80}
//                       className="transition-transform duration-300 group-hover:scale-110"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Education & Interests */}
//         <section className="py-20 bg-white px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="grid md:grid-cols-2 gap-12">
//               <div className="space-y-4">
//                 <h2 className="text-3xl font-bold">Education</h2>
//                 <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className="font-semibold text-xl mb-2">Bachelor&apos;s in Computer Science</h3>
//                 <p className="text-gray-600">Himgiri Zee University, 2023</p>
//                   <p className="mt-4 text-gray-600">
//                     Graduated with a strong foundation in computer science and problem-solving skills,
//                     preparing for a successful career in technology.
//                   </p>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <h2 className="text-3xl font-bold">Interests</h2>
//                 <div className="bg-gray-50 p-6 rounded-lg">
//                   <ul className="space-y-3 text-gray-600">
//                     <li>• Reading tech blogs to stay updated with latest trends</li>
//                     <li>• Playing chess to enhance strategic thinking</li>
//                     <li>• Watching movies and anime for entertainment</li>
//                     <li>• Regular gym workouts for physical fitness</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-6 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//         <p>&copy; {new Date().getFullYear()} Manish&apos;s Portfolio. All rights reserved by Manish.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }
"use client"
import Image from 'next/image'
import { Mail, Github, Linkedin, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Animation */}
      <main className="flex-1">
        <section className="min-h-screen flex items-center relative">
          <div className="absolute inset-0 bg-grid-gray-900/[0.04] -z-10" />
          <div className="absolute inset-0 flex items-center justify-center bg-white/[0.6] backdrop-blur-3xl -z-10" />
          
          <div className="max-w-6xl mx-auto px-4 py-20 w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
              <div className="text-center md:text-left space-y-6 flex-1">
                <div className="space-y-4">
                  <h1 className="text-6xl font-bold text-gray-900 tracking-tight">
                    Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Manish</span>
                  </h1>
                  <h2 className="text-3xl text-gray-600 font-light">Full Stack Web Developer</h2>
                </div>
                
                <p className="text-lg text-gray-600 max-w-xl">
                  Crafting modern web experiences with the MERN stack. Passionate about clean code and innovative solutions.
                </p>

                <div className="flex gap-4 justify-center md:justify-start">
                  <Link href="https://github.com/wideputin117" target="_blank" rel="noopener noreferrer">
                    <button className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                      <Github className="w-6 h-6" />
                    </button>
                  </Link>

                  <Link href="https://www.linkedin.com/in/manish-gupta-a1b0bb222/" target="_blank" rel="noopener noreferrer">
                    <button className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                      <Linkedin className="w-6 h-6" />
                    </button>
                  </Link>

                  <Link href="mailto:takermanish7@gmail.com">
                    <button className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                      <Mail className="w-6 h-6" />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative rounded-full p-1 bg-white ring-1 ring-gray-200">
                  <Image
                    src="/main.png"
                    alt="Profile"
                    width={280}
                    height={280}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 px-4 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-10" />
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hello, I'm Manish, a passionate MERN Stack Developer with a knack for crafting dynamic web applications. 
                With a strong foundation in MongoDB, Express.js, React, and Node.js, I bring ideas to life by seamlessly 
                merging front-end and back-end technologies. My commitment to clean code and responsive design ensures 
                that every project I undertake is user-friendly and performs flawlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { src: '/db.svg', alt: 'MongoDB', title: 'MongoDB' },
                { src: '/node.svg', alt: 'Node.js', title: 'Node.js' },
                { src: '/rc.svg', alt: 'React', title: 'React' },
                { src: '/ex.svg', alt: 'Express', title: 'Express' },
                { src: '/next.svg', alt: 'Next.js', title: 'Next.js' },
                { src: '/tlwnd.svg', alt: 'Tailwind', title: 'Tailwind' }
              ].map((tech, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition duration-300">
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      width={80}
                      height={80}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="mt-4 font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                      {tech.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Interests */}
        <section className="py-32 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Education</h2>
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="font-semibold text-2xl mb-4">Bachelor's in Computer Science</h3>
                  <p className="text-gray-600 text-lg mb-4">Himgiri Zee University, 2023</p>
                  <p className="text-gray-600">
                    Graduated with a strong foundation in computer science and problem-solving skills,
                    preparing for a successful career in technology.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Interests</h2>
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Reading tech blogs to stay updated with latest trends</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Playing chess to enhance strategic thinking</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Watching movies and anime for entertainment</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Regular gym workouts for physical fitness</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Manish's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}