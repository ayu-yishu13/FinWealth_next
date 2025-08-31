import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-black border-t border-purple-400 my-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-20 bg-black border-t border-purple-400 my-0">
      <div className="container mx-auto px-4">
      <h2 className=" relative text-3xl font-bold text-center mb-12 gradient-title">
        Everything you need to manage your finances
        <span className="absolute left-1/2 bottom-0 w-96 h-7 
           bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 
          rounded-full blur-lg -translate-x-1/2 animate-pulse"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="relative p-6 bg-black border border-purple-500 rounded-2xl overflow-hidden group"
          >
            {/* Actual Card with black background */}
            <Card className="relative p-6 bg-black border border-purple-500 rounded-2xl z-10">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 
            opacity-40 blur-2xl animate-[pulse_4s_ease-in-out_infinite] 
            group-hover:opacity-70 group-hover:blur-[50px] z-0"></div>
              <CardContent className="space-y-4 pt-4">
                {feature.icon}
                <h3 className="text-xl font-semibold gradient-more">{feature.title}</h3>
                <p className="text-white">{feature.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
     </div>
    </div>
</section>


      {/* How It Works Section */}
      <section className="py-20 bg-black border-t border-purple-400 my-0">
        <div className="container mx-auto px-4">
          <h2 className=" relative text-3xl font-bold text-center mb-16 gradient-title">How It Works
            <span className="absolute left-1/2 bottom-0 w-96 h-7 
           bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 
          rounded-full blur-lg -translate-x-1/2 animate-pulse"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center gradient-more">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-white">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


  {/* Testimonial Section */}

  <section id="testimonials" className="py-20 bg-black border-t border-purple-400 my-0">
  <div className="container mx-auto px-4">
    <h2 className="relative text-3xl font-bold text-center mb-16 gradient-title">
      What Our Users Say
      <span className="absolute left-1/2 bottom-0 w-96 h-7 
        bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 
        rounded-full blur-lg -translate-x-1/2 animate-pulse"></span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonialsData.map((testimonial) => (
        <div
          key={testimonial.id || testimonial.name}   // ✅ Key on top-level element
          className="relative p-6 bg-black border border-purple-500 rounded-2xl overflow-hidden group"
          >
          {/* Glowing background aura */}
          <Card className="relative p-6 bg-black border border-purple-500 rounded-2xl z-10">

            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 
            opacity-40 blur-2xl animate-[pulse_4s_ease-in-out_infinite] 
            group-hover:opacity-70 group-hover:blur-[50px] z-0"></div>

          <CardContent className="relative z-10 pt-4">
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4">
                <div className="font-semibold gradient-more">{testimonial.name}</div>
                <div className="text-sm gradient-more">{testimonial.role}</div>
              </div>
            </div>
            <p className="text-gray-200">{testimonial.quote}</p>
          </CardContent>
        </Card>
      </div>
      ))}
    </div>
  </div>
</section>



      {/* CTA Section */}
      <section className="py-20 bg-black border-t border-purple-400 my-0">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold  mb-4 gradient-title">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="gradient-more px-2 py-2 border-2 border-white rounded  animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;