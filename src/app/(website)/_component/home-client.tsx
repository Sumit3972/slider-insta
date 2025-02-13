"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Zap, Target, Bot, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import React from "react"

export default function HomeClient() {
  const router = useRouter()
  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started",
      price: "$0",
      features: [
        "Boost engagement with target responses",
        "Automate comment replies to enhance audience interaction",
        "Turn followers into customers with targeted messaging",
      ],
      cta: "Get Started",
    },
    {
      name: "Smart AI Plan",
      description: "Advanced features for power users",
      price: "$99",
      features: [
        "All features from Free Plan",
        "AI-powered response generation",
        "Advanced analytics and insights",
        "Priority customer support",
        "Custom branding options",
      ],
      cta: "Upgrade Now",
    },
  ]

  const features = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Automated Responses",
      description: "Set up custom triggers and responses for comments and DMs.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Smart AI Conversations",
      description: "Let AI handle complex conversations based on your prompts.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Targeted Engagement",
      description: "Engage with your audience using specific keywords and phrases.",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Never miss an opportunity to connect with your followers.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Influencer",
      content:
        "Slide has revolutionized how I interact with my followers. The AI responses are so natural, my engagement has skyrocketed!",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Mike Chen",
      role: "Tech Reviewer",
      content:
        "The automation features have saved me hours each week. Now I can focus on creating content while Slide handles the engagement.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  ]

  return (
    <main className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm">
        <div className="container px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-white text-primary-foreground flex items-center justify-center font-bold">
                <SlideSvg />
              </div>
              <span className="text-2xl font-semibold text-white">Slide</span>
            </div>
            <nav className="hidden space-x-8 text-xl text-white md:block">
              <Link href="#features" className="hover:text-blue-300">
                Features
              </Link>
              <Link href="#how-it-works" className="hover:text-blue-300">
                How It Works
              </Link>
              <Link href="#pricing" className="hover:text-blue-300">
                Pricing
              </Link>
              <Link href="#testimonials" className="hover:text-blue-300">
                Testimonials
              </Link>
              <Link href="#contact" className="hover:text-blue-300">
                Contact
              </Link>
            </nav>
            <Button className="bg-white text-slate-900 hover:bg-blue-100 text-lg py-2 px-6">
              <Link href="/dashboard">Login</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative container px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-5xl font-bold leading-tight tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Transform Your Instagram Engagement with Slide
            </h1>

            <p className="mt-8 text-xl text-blue-200">
              Slide revolutionizes how you connect with your audience on Instagram. Automate responses and boost
              engagement effortlessly, turning interactions into valuable business opportunities.
            </p>

            <div className="mt-10 flex justify-center gap-6">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 text-xl py-6 px-8"
                onClick={() => {
                  router.push("/dashboard")
                }}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-600 bg-black hover:bg-blue-900/50 text-xl py-6 px-8"
                onClick={() => {
                  router.push("/dashboard")
                }}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-60  md:h-96 w-[120%] right-28 mt-12"
          >
            <Image src="/Ig-creators.png" alt="Community members" fill className="object-cover rounded-xl shadow-2xl" />
          </motion.div>
        </div>
      </section>
      <section id="features" className="py-32 bg-white">
  <div className="container px-14 ">
    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Powerful Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-60 -ml-20 ">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-slate-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow h-80 w-80"
        >
          <div className="text-blue-600 mb-6">
            {React.cloneElement(feature.icon, { className: "h-10 w-10" })}
          </div>
          <h3 className="text-2xl text-gray-900 font-semibold mb-4">{feature.title}</h3>
          <p className="text-gray-600 text-lg">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      <section id="how-it-works" className="py-32 bg-slate-100">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">How Slide Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Integrate Your Account</h3>
              <p className="text-gray-700 text-lg">
                Connect your Instagram account to Slide and unlock powerful automation features.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Create Automations</h3>
              <p className="text-gray-700 text-lg">
                Set up triggers for comments or DMs, and define your response strategy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Engage Automatically</h3>
              <p className="text-gray-700 text-lg">
                Let Slide handle interactions with predefined messages or AI-powered responses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 bg-white">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gray-900">Choose Your Plan</h2>
            <p className="max-w-[900px] text-gray-600 text-xl">
              Select the perfect plan to boost your Instagram engagement
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="flex flex-col justify-between h-full bg-white shadow-lg">
                  <CardHeader className="bg-gray-50 p-8">
                    <CardTitle className="text-3xl font-bold text-gray-900">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600 text-lg mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6 p-8">
                    <div className="text-5xl font-bold text-gray-900">
                      {plan.price}
                      <span className="text-2xl font-normal text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
                          <span className="text-lg text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="bg-gray-50 p-8">
                    <Button
                      onClick={() => {
                        router.push("/dashboard")
                      }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl py-6"
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32 bg-slate-100">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">{testimonial.name}</h3>
                    <p className="text-lg text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-blue-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Instagram Engagement?</h2>
            <p className="mb-10 text-xl">Get started with Slide today and watch your audience grow!</p>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-100 text-xl py-6 px-10"
              onClick={() => {
                router.push("/dashboard")
              }}
            >
              Start Your Free Trial <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-2xl">
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="hover:text-blue-400">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-blue-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-2xl">
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-2xl">
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-2xl">
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div >
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-lg">&copy; {new Date().getFullYear()} Slide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

const SlideSvg = () => {
  return (
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path fill="#fff" d="M0 0h20v20H0z" />
      <path d="M3 4h1v14H3zm3 0h1v14H6z" />
      <path d="M3 5h4v.4H3zm0 2h4v.4H3zm0 2h4v.4H3zm0 2h4v.4H3zm0 2h4v.4H3zm0 2h4v.4H3zm0 2h4v.4H3zM6 4h5v1H6z" />
      <path d="M11 4c6 1 7 8 5 14h-6c2-6 1-13 1-14" />
      <path d="M11 4c6 1 7 8 5 14" stroke="#000" fill="none" strokeWidth=".4" />
      <path d="M16 4h1v14h-1z" />
      <path d="m7 5 9 13" stroke="#000" fill="none" strokeWidth=".4" />
      <path d="M10 17.6h7v.4h-7z" />
      <path d="M11 4c6 1 7 8 5 14" fill="rgba(0,0,0,0.1)" />
    </svg>
  )
}

