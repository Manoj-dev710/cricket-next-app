import Banner from "@/marcham/components/banner/Banner";
import React from "react";

import banner from "../../assets/banner/testimonialBanner.png";
import bannermob from "../../assets/banner/teambannermob.png";
import Team from "@/marcham/components/team/Team";
export const metadata = {
  title: "Team",
  description: "Generated by create next app",
};
const page = () => {
  return (
    <>
      <Banner
        banner={banner}
        mobilebanner={bannermob}
        text="Meet Our Cricket Stars 
in Training Today"
      />
      {/* team */}
      <section className="section_top">
        <div className="container">
          <p className="paragraph text-black text-center">
            Our team members are not just players - they are ambassadors for the
            game and for our club. We take pride in developing well-rounded
            individuals who possess not only the skills but also the character
            to succeed in cricket and in life. Our team members are role models
            who inspire others to pursue their passion for cricket and to strive
            for excellence in everything they do.
          </p>
          <p className="paragraph text-black text-center mt-2">
            Whether on or off the field, our team members embody the values of
            sportsmanship, integrity, and respect. We are proud of our team and
            of the culture of excellence and inclusivity that we have built
            together.
          </p>
          <div className="inner-margin">
            <Team />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
