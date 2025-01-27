import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bike, Target, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary to-blue-900 animate-fade-in">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Max Cycles Coaching
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Professional cycling coaching tailored to your goals. From beginners to elite athletes, unlock your full potential with personalized training plans.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-orange-600">
              Start Your Journey <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Professional Coaching Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                About Max Cycles Coaching
              </h2>
              <p className="text-gray-600 mb-6">
                With extensive experience in competitive cycling and coaching, I'm dedicated to helping cyclists of all levels achieve their goals. Whether you're preparing for your first sportive or aiming for podium finishes, my personalized coaching approach combines scientific training principles with practical experience.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Learn More About My Approach
              </Button>
            </div>
            <div className="bg-accent rounded-lg p-8">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Bike className="w-6 h-6 text-secondary mr-3" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full mr-4 flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: Target,
    title: "Personalized Training Plans",
    description: "Custom training programs designed to meet your specific goals, schedule, and current fitness level."
  },
  {
    icon: Users,
    title: "One-on-One Coaching",
    description: "Regular feedback and adjustments to your training plan with direct access to expert coaching support."
  },
  {
    icon: Bike,
    title: "Performance Analysis",
    description: "Detailed analysis of your training data to optimize performance and track progress towards your goals."
  }
];

const achievements = [
  "British Cycling Qualified Coach",
  "10+ Years of Competitive Racing Experience",
  "Specialized in Road and Time Trial Training",
  "Proven Track Record of Athlete Development"
];

const testimonials = [
  {
    text: "Max's coaching has transformed my approach to cycling. The structured training plan helped me achieve my first podium finish.",
    name: "James Wilson",
    title: "Cat 2 Road Racer"
  },
  {
    text: "The personalized attention and detailed feedback on my training has been invaluable. I've seen tremendous improvement in my time trial performances.",
    name: "Sarah Thompson",
    title: "Time Trial Specialist"
  },
  {
    text: "As a beginner, I was intimidated by structured training, but Max made it approachable and enjoyable. Now I'm confidently completing century rides.",
    name: "David Chen",
    title: "Recreational Cyclist"
  }
];

export default Index;