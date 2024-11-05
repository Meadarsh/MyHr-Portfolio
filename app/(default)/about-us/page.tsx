import Image from 'next/image';
import aboutImage from '@/public/images/about-us.jpg'; // Update with actual image path

export default function page() {
  return (
    <div className="about-page bg-gray-50 pb-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden shadow-lg">
          <Image 
            src={aboutImage} 
            alt="About MyHRExpert" 
            layout="fill" 
            objectFit="cover" 
            className="object-center" 
            priority
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white">
            About MyHRExpert
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-5xl p-6 md:px-10">
        <div className="mt-12 text-center">
          <p className="text-lg md:text-xl text-gray-600">
            Welcome to MyHRExpert, your trusted partner in HR consulting and outsourcing solutions.
            With over 5 years of dedicated experience in the HR industry, we have established ourselves 
            as a dynamic startup committed to transforming the way organizations manage their human resources.
          </p>
        </div>

        {/* Sections */}
        <div className="mt-16 space-y-12">
          {/* Our Journey */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Our Journey</h2>
            <p className="mt-4 text-gray-600">
              Founded with the vision of enhancing HR practices in India, MyHRExpert has quickly grown to 
              become a prominent player in the HR consulting space. Our team of experienced professionals 
              is dedicated to delivering exceptional service and driving operational transformation within 
              the recruitment and staffing industry.
            </p>
          </div>

          {/* Our Reach */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Our Reach</h2>
            <p className="mt-4 text-gray-600">
              While we are rooted in India, we have a global outlook. Our corporate office is located in Ghaziabad,
              but we also have associates in key cities like Hyderabad, Pune, Mumbai, Delhi, Bangalore, and Chandigarh.
              Our digital presence allows us to serve clients across borders.
            </p>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li><span className="font-medium">Tailored Solutions:</span> We create HR solutions aligned with your business goals and culture.</li>
              <li><span className="font-medium">Expertise:</span> Our team brings a wealth of knowledge and experience in various HR domains.</li>
              <li><span className="font-medium">Client-Centric Approach:</span> We prioritize your needs, ensuring a personalized experience throughout our partnership.</li>
            </ul>
          </div>

          {/* Industries We Serve */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Industries We Serve</h2>
            <p className="mt-4 text-gray-600">
              At MyHRExpert, we pride ourselves on our versatility and ability to tailor our HR solutions to meet the 
              diverse needs of various sectors. Our expertise spans multiple industries, allowing us to deliver specialized 
              services that drive success.
            </p>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <li className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow-sm">Hospitality</li>
              <li className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow-sm">ITES & BPO</li>
              <li className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow-sm">EdTech</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
