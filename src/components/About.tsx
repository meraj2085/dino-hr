import Image from "next/image";
import HR2 from "./../../public/assets/HR2.png";
import HR3 from "./../../public/assets/HR3.jpeg";

const About = () => {
  return (
    <section className=" my-10 mt-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-x-8 ">
          <div className="relative my-auto">
            <Image
              src={HR3}
              alt="Background Image"
              layout="responsive"
              width={500}
              height={500}
              className="rounded-lg w-full h-auto"
            />
            <div className="absolute left-10 top-10 bottom-10 right-10">
              <Image
                src={HR2}
                alt="Overlay Image"
                layout="responsive"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="px-6">
            <p className="text-gray-700 leading-relaxed">
              <h1 className="font-bold text-4xl mb-5">
                HR solutions, advice and wisdom in Leeds, Wakefield,
                Huddersfield, Halifax and beyond.
              </h1>
              If you’re a small business and think you don’t need to worry about
              HR, then think again. This might mean you only use us for the odd
              HR project, but that’s fine with us. We love being part of our
              clients journey, watching their business grow and flourish! <br />
              <div className="mt-5">
                Despite being an Outsourced HR Consultancy in Yorkshire, we’ve
                been all over the UK helping clients out of a tight spot or
                pulling together their policies and documents ensuring they’re
                compliant and slot right into the business. We love helping with
                upskilling of line managers too, it’s lovely for us to see the
                results of such progress. There’s so many more ways we can help
                and support your small or medium sized business. So, if you’re
                looking for an HR Agency in Leeds, HR Consultancy in Wakefield
                or HR support in West Yorkshire and beyond – please get in touch
                for a no-obligation chat.
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
