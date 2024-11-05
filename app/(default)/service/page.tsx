"use client"
import Image from 'next/image';
import heroImage from '@/public/images/service.jpg'; // Replace with actual image path
import Cta from '@/components/cta';

export default function page() {


  
const servicesData = [
  {
    image: 'https://images.pexels.com/photos/5716018/pexels-photo-5716018.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual image paths
    title: 'Tailored Solutions',
    description: 'Our bespoke HR services are designed to meet the unique needs of your organization, whether you’re a startup or an established enterprise.'
  },
  {
    image: 'https://images.pexels.com/photos/3783229/pexels-photo-3783229.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Single Point of Contact',
    description: 'You’ll have a dedicated HR specialist who understands your business and can address all your HR needs efficiently.'
  },
  {
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Cutting-Edge Technology',
    description: 'We leverage the latest HR trends and technologies to drive effective outcomes for our clients.'
  },
  {
    image: 'https://images.pexels.com/photos/7247410/pexels-photo-7247410.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Reduced Compliance Risk',
    description: 'Let us manage the complexities of HR compliance, so you can focus on driving your business forward.'
  },
];

const hrSolutionsData = [
  {
    title: 'Talent Acquisition & Recruitment',
    description: 'We leverage innovative sourcing strategies and deep industry insights to attract top candidates who align with your company’s values and goals.'
  },
  {
    title: 'HR Strategy Development',
    description: 'Our team collaborates closely with you to create a customized HR strategy that enhances organizational effectiveness and fosters a positive culture.'
  },
  {
    title: 'Employee Engagement & Retention Programs',
    description: 'We design and implement tailored engagement initiatives that enhance job satisfaction and loyalty, focusing on retention and growth.'
  },
  {
    title: 'Performance Management & Training',
    description: 'Maximize your team’s potential with our comprehensive performance management solutions and targeted training programs.'
  },
  {
    title: 'HR Compliance & Policy Development',
    description: 'We help you develop clear, comprehensive HR policies that meet legal requirements and industry best practices.'
  },
  {
    title: 'HR Technology Implementations',
    description: 'Transform your HR functions with cutting-edge technology. We guide you through selecting and implementing the right HR systems.'
  },
  {
    title: 'Organizational Design, Workforce Planning & Change Management',
    description: 'We assist you in designing an organizational structure that aligns with your goals, ensuring effective workforce planning and adaptability.'
  },
];



  return (
    <div className="services-page bg-gray-50 pb-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
          <Image 
            src={heroImage} 
            alt="Why Choose MyHRExpert" 
            layout="fill" 
            objectFit="cover" 
            className="object-center" 
            priority 
          />
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
          <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl font-bold text-white">
            Why Choose MyHRExpert?
          </h1>
        </div>
      </section>

      {/* "Why Choose MyHRExpert" Cards */}
      <section className="mt-12 mx-auto max-w-6xl p-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">Why Choose MyHRExpert?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image src={service.image} alt={service.title} width={400} height={300} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* "Our Comprehensive HR Solutions" Cards */}
      <section className="mt-12 mx-auto max-w-6xl p-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">Our Comprehensive HR Solutions</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hrSolutionsData.map((solution, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-700 mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <Cta />
    </div>
  );
}