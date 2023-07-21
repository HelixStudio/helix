import Image from "next/image";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  CommandLineIcon,
  CloudIcon,
  BookOpenIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import Show from "~/components/functional/Show";

import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "~/components/ui/Table";
import { Button } from "~/components/ui/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Footer from "../ui/Footer";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    // { name: "Courses", href: "/courses" },
    { name: "Code Runner", href: "/code-runner" },
    { name: "Forum", href: "/forum" },
    // { name: "About", href: "/about" },
    { name: "About", href: "https://github.com/nikolatesla13/helix" },
  ];

  return (
    <>
      <div
        id="main-container"
        className="pink flex min-h-screen flex-col bg-gradient-to-b from-slate-900 to-zinc-950"
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="sticky top-0 z-50 max-w-5xl items-center bg-slate-800/70 backdrop-blur-lg lg:top-[0.75rem] lg:mx-auto lg:mt-3 lg:w-[60rem] lg:rounded-lg"
        >
          <nav
            className="flex items-center justify-between p-2 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-lg text-white">Helix</span>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                aria-label="open main menu"
                className="-my-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-2 py-1 text-sm leading-6 text-gray-100 transition-colors hover:bg-slate-800"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Button variant={"muted"} onClick={() => void signIn()}>
                Log in <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </nav>
        </motion.div>
        <Show when={mobileMenuOpen}>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="font-bold text-white">Helix</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-100/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 transition-colors hover:bg-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Button variant={"primary"} onClick={() => void signIn()}>
                    Log in
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Show>

        <div className="relative isolate px-6 pb-20 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-16"
          >
            <div className="hidden p-3 sm:mb-16 sm:flex sm:justify-center">
              <div
                className="relative rounded-full bg-gray-800 px-3 py-1 text-sm 
              leading-6 text-gray-100 ring-1 ring-gray-100/10 transition-colors hover:bg-gray-700 
              hover:ring-gray-200/20"
              >
                <div
                  className="absolute -inset-2 -z-30
                 animate-pulse rounded-full bg-gradient-to-r from-purple-600
                  to-pink-600 opacity-25 blur"
                ></div>
                We&apos;re launching!{" "}
                <a
                  href="https://github.com/nikolatesla13/helix"
                  className="text-accent-400"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="bg-gradient-to-br from-zinc-50 to-zinc-400 bg-clip-text pb-2 text-5xl font-semibold tracking-tight text-transparent sm:text-6xl">
                Helix is a better way to learn programming
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                Meet the new standard for computer science learning. {<br />}
                Built by students for students.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant={"accent"} onClick={() => void signIn()}>
                  Get started
                </Button>
                <Button variant={"muted"}>
                  Learn more <span aria-hidden="true"> →</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto flex max-w-6xl items-center justify-center overflow-hidden rounded-lg px-10 py-10">
          <div className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-slate-800 p-2 shadow-lg ring-1 ring-slate-200/20">
            <svg
              className="h-6 w-6 text-slate-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        <div>
          <div className="overflow-hiddem relative isolate px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-accent-400">
                      Learn faster
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                      A better workflow
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-200">
                      Helix is designed from the ground up to be easy and
                      convinient to use.
                    </p>
                  </div>
                </div>
              </div>
              <div className="-ml-12 -mt-12 max-w-5xl p-12 lg:sticky lg:top-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <div className="min-h-full overflow-hidden rounded-lg border-2 border-slate-600">
                  <Image
                    className=""
                    src="https://media.discordapp.net/attachments/739478958118010911/1118188070274088990/Screenshot_2023-06-13_at_17.39.20.png?width=2080&height=1046"
                    alt="App screenshot"
                    width={1824}
                    height={1080}
                  />
                </div>
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-200 lg:max-w-lg">
                    <p>
                      Everything you need to learn programming is right here.
                      From a fast and modern code editor, debugger and code
                      runner to interactive courses, communities and forums. We
                      are a non-profit platform, built by students for students.
                    </p>
                    <ul role="list" className="mt-8 space-y-8 text-gray-200">
                      <li className="flex gap-x-3">
                        <CommandLineIcon
                          className="mt-1 h-5 w-5 flex-none text-accent-500"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-100">
                            Integrated development enviorment
                          </strong>
                          {": "}
                          No need to leave the browser window with our web IDE.
                          Write the code with the problem statement
                          side-by-side.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <BookOpenIcon
                          className="mt-1 h-5 w-5 flex-none text-accent-500"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-100">
                            Courses
                          </strong>
                          {": "}
                          Learn new things by taking our free courses.
                          They&apos;re fast paced and well explained.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <CloudIcon
                          className="mt-1 h-5 w-5 flex-none text-accent-500"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-100">
                            Cloud
                          </strong>
                          {": "}
                          All your projects and progress is automatically saved
                          securely in the cloud. Access from your account on any
                          device.
                        </span>
                      </li>
                    </ul>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-100">
                      No experience? No problem.
                    </h2>
                    <p className="mt-6">
                      Helix is a platform open to learning. Take our begginer
                      courses to get started in the world of programming.
                      Designed to take minimal time and get straight to the
                      point. Discuss with other learners on our forum!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-44 w-full max-w-6xl px-4 pt-12 lg:mx-auto ">
          <h1 className="mb-5 text-2xl">What makes us different?</h1>
          <Table>
            <TableCaption>A comparison between similar websites.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>PbInfo</TableHead>
                {/* <TableHead>InfoArena</TableHead> */}
                <TableHead>CodeForces</TableHead>
                <TableHead>Helix</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Algorithm problems</TableCell>
                <TableCell>✅</TableCell>
                {/* <TableCell>✅</TableCell> */}
                <TableCell>✅</TableCell>
                <TableCell>✅</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Forum</TableCell>
                <TableCell>❌</TableCell>
                {/* <TableCell>✅</TableCell> */}
                <TableCell>✅</TableCell>
                <TableCell>✅</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Contests</TableCell>
                <TableCell>❌</TableCell>
                {/* <TableCell>❌</TableCell> */}
                <TableCell>✅</TableCell>
                <TableCell>✅</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Free courses (work in progress)</TableCell>
                <TableCell>❌</TableCell>
                {/* <TableCell>❌</TableCell> */}
                <TableCell>❌</TableCell>
                <TableCell>✅</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Custom help</TableCell>
                <TableCell>❌</TableCell>
                {/* <TableCell>❌</TableCell> */}
                <TableCell>❌</TableCell>
                <TableCell>✅</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Full personalization</TableCell>
                <TableCell>❌</TableCell>
                {/* <TableCell>❌</TableCell> */}
                <TableCell>❌</TableCell>
                <TableCell>✅</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Integrated modern editor</TableCell>
                <TableCell>❌</TableCell>
                {/* <TableCell>❌</TableCell> */}
                <TableCell>❌</TableCell>
                <TableCell>✅</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="flex h-full max-w-5xl flex-col justify-center gap-2 px-4 lg:mx-auto">
          <h1 className="text-2xl lg:text-4xl">So what are you waiting for?</h1>
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl lg:text-4xl">
              It&apos;s <span className="text-accent-400">free</span> and{" "}
              <span className="text-accent-400">open source</span>.
            </h1>{" "}
            <Button onClick={() => void signIn()}>Get started</Button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
