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
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
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
    <main className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      <header className="sticky top-0 z-50 bg-indigo-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white text-indigo-900 flex items-center justify-center font-bold text-2xl">
                S
              </div>
              <span className="text-2xl font-semibold">Slide</span>
            </div>
            <nav className="hidden space-x-8 text-lg md:block">
              <Link href="#features" className="hover:text-pink-300 transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="hover:text-pink-300 transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="hover:text-pink-300 transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="hover:text-pink-300 transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="hover:text-pink-300 transition-colors">
                Contact
              </Link>
            </nav>
            <Button className="bg-white text-indigo-900 hover:bg-pink-100 text-lg py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
              <Link href="/dashboard">Login</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-5xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-400">
              Transform Your Instagram Engagement with Slide
            </h1>
            <p className="mt-8 text-xl text-pink-100">
              Slide revolutionizes how you connect with your audience on Instagram. Automate responses and boost
              engagement effortlessly, turning interactions into valuable business opportunities.
            </p>
            <div className="mt-10 flex justify-center gap-6">
              <Button
                size="lg"
                className="bg-pink-500 text-white hover:bg-pink-600 text-xl py-6 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  router.push("/dashboard")
                }}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-400 text-pink-300 hover:bg-pink-900/50 text-xl py-6 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
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
            className="relative mt-20 mx-auto max-w-5xl"
          >
            <Image
              src="/Ig-creators.png"
              alt="Community members"
              width={1000}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
      <section id="features" className="py-32 bg-gradient-to-br from-indigo-800 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-pink-400 mb-6">{React.cloneElement(feature.icon, { className: "h-12 w-12" })}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-pink-100 text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-32 bg-gradient-to-br from-purple-900 to-indigo-800">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">
            How Slide Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Integrate Your Account",
                description: "Connect your Instagram account to Slide and unlock powerful automation features.",
              },
              {
                title: "Create Automations",
                description: "Set up triggers for comments or DMs, and define your response strategy.",
              },
              {
                title: "Engage Automatically",
                description: "Let Slide handle interactions with predefined messages or AI-powered responses.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center bg-white/10 p-8 rounded-2xl backdrop-blur-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-pink-100 text-lg">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 bg-gradient-to-br from-indigo-900 to-purple-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">
              Choose Your Plan
            </h2>
            <p className="max-w-[900px] text-pink-100 text-xl">
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
                <Card className="flex flex-col justify-between h-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-8 rounded-t-2xl">
                    <CardTitle className="text-3xl font-bold text-white">{plan.name}</CardTitle>
                    <CardDescription className="text-pink-100 text-lg mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6 p-8">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">
                      {plan.price}
                      <span className="text-2xl font-normal text-pink-200">/month</span>
                    </div>
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="mr-3 h-6 w-6 text-pink-400" />
                          <span className="text-lg text-pink-100">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-8 rounded-b-2xl">
                    <Button
                      onClick={() => {
                        router.push("/dashboard")
                      }}
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white text-xl py-6 rounded-full transition-all duration-300 transform hover:scale-105"
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

      <section id="testimonials" className="py-32 bg-gradient-to-br from-purple-900 to-indigo-800">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
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
                    <h3 className="font-semibold text-xl text-white">{testimonial.name}</h3>
                    <p className="text-lg text-pink-200">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-pink-100 text-lg leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-gradient-to-br from-indigo-900 to-purple-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">
              Ready to Transform Your Instagram Engagement?
            </h2>
            <p className="mb-10 text-xl text-pink-100">Get started with Slide today and watch your audience grow!</p>
            <Button
              size="lg"
              className="bg-pink-500 text-white hover:bg-pink-600 text-xl py-6 px-10 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                router.push("/dashboard")
              }}
            >
              Start Your Free Trial <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-lg">
              <h3 className="font-semibold mb-4 text-pink-300">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="hover:text-pink-200 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-pink-200 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-200 transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-lg">
              <h3 className="font-semibold mb-4 text-pink-300">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-pink-200 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-200 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-200 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-lg">
              <h3 className="font-semibold mb-4 text-pink-300">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-pink-200 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-200 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-200 transition-colors">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-lg">
              <h3 className="font-semibold mb-4 text-pink-300">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-pink-200 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-200 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-200 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-pink-800 text-center">
            <p className="text-lg text-pink-200">&copy; {new Date().getFullYear()} Slide. All rights reserved.</p>
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

