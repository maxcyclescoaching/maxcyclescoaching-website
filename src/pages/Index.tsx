import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Target } from "lucide-react";

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
              Transform Your Cycling Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Professional coaching to help you achieve your cycling goals, whether you're a beginner or an experienced rider.
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
            Our Coaching Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
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
                About Your Coach
              </h2>
              <p className="text-gray-600 mb-6">
                With over a decade of experience in competitive cycling and coaching, 
                I'm passionate about helping cyclists of all levels reach their full potential. 
                My approach combines scientific training principles with personalized attention 
                to ensure you achieve your goals.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
            <div className="bg-accent rounded-lg p-8">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Award className="w-6 h-6 text-secondary mr-3" />
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
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
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
    description: "Custom training programs designed to meet your specific goals and schedule."
  },
  {
    icon: Users,
    title: "Group Sessions",
    description: "Join our community rides and training sessions for motivation and skill development."
  },
  {
    icon: Award,
    title: "Race Preparation",
    description: "Specialized coaching for competitive cyclists aiming for race day success."
  }
];

const achievements = [
  "Certified Level 2 Cycling Coach",
  "10+ Years Professional Racing Experience",
  "Coached 100+ Athletes to Success",
  "Former National Championship Medalist"
];

const testimonials = [
  {
    text: "The personalized training plan helped me achieve my first century ride. Incredible support throughout the journey!",
    name: "Sarah Johnson",
    title: "Amateur Cyclist"
  },
  {
    text: "Professional approach to training with amazing attention to detail. Improved my racing performance significantly.",
    name: "Mike Thompson",
    title: "Category 2 Racer"
  },
  {
    text: "Great at adapting the training plan to fit my busy schedule while still helping me reach my goals.",
    name: "Lisa Chen",
    title: "Recreational Cyclist"
  }
];

export default Index;