import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";

export default function ContactUs() {
  return (
    <section className="container mx-auto p-8 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg my-12">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-white">Contact Us</h2>
      <div className="flex flex-wrap md:flex-nowrap gap-8">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
