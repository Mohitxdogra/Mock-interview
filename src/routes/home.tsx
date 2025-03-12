import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      {/* Hero Section */}
      <Container>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="text-outline font-extrabold md:text-8xl">
              Mock Ready
            </span>
            <span className="text-gray-500 font-extrabold">
              - Revolutionize Your
            </span>
            <br />
            Interview Preparation
          </h2>

<div className="p-6 bg-white rounded-xl shadow-xl mt-6 transition-all hover:shadow-2xl">
  <p className="text-center text-lg text-gray-900 font-semibold leading-relaxed">
    Elevate your interview skills and skyrocket your success rate with 
    <span className="text-blue-600"> cutting-edge AI-driven insights.</span>  
    Prepare smarter, practice effectively, and stand out from the crowd.
  </p>
</div>


        </div>

        {/* Stats Section */}
        <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end gap-12">
          <p className="text-3xl font-semibold text-gray-900 text-center">
            250k+
            <span className="block text-xl text-muted-foreground font-normal">
              Offers Received
            </span>
          </p>
          <p className="text-3xl font-semibold text-gray-900 text-center">
            1.2M+
            <span className="block text-xl text-muted-foreground font-normal">
              Interviews Aced
            </span>
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] md:h-[500px] drop-shadow-md overflow-hidden relative">
  <img
    src="/assets/img/hero.jpg"
    alt="Interview Preparation"
    className="w-full h-full object-cover object-center md:object-top"
  />

          <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
            Mock Ready&copy;
          </div>

          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
            <h2 className="text-neutral-800 font-semibold">Developer</h2>
            <p className="text-sm text-neutral-500">
              Harness the power of AI to get personalized feedback and improve
              your coding interview skills.
            </p>

            <Link to="/generate" className="block mt-3">
              <Button className="w-full">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Marquee Section  */}
      <div className="w-full my-12">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      {/* Features Section */}
      <Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
          Unlock Your Potential with AI-Driven Interview Mastery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              src="/assets/img/office.jpeg"
              alt="AI Interview Preparation"
              className="w-full max-h-96 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-muted-foreground">
              Transform your interview preparation with personalized AI insights.
              Gain the confidence and skills needed to ace your next interview
              and land your dream job.
            </p>

            <Link to={"/generate"} className="w-full flex justify-center">
              <Button className="w-3/4">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Call to Action Section */}
      <Container className="py-12">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="mb-6">
            Join thousands of successful candidates who have transformed their
            interview skills with Mock Ready.
          </p>
          <Link to={"/generate"}>
            <Button className="text-blue-600 hover:bg-gray-100">
              Get Started <Sparkles className="ml-2" />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;