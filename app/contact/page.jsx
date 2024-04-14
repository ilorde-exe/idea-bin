import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="lg:px-24 lg:py-10 px-4 px-4 w-full flex-center flex-col ">
        <div className="py-10 px-12 rounded-2xl shadow-inner shadow-xl bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-none lg:backdrop-blur-sm  bg-opacity-20 ">
          <div className="flex flex-col mb-8">
            <div className="mb-6 flex flex-col md:flex-row flex-1">
              <div className="flex-1 ">
                <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                  Contact Us,
                </h1>
              </div>
            </div>

            <p className="py-4 font-inter text-l lg:text-xl text-black lg:font-normal font-medium">
              Got a question, suggestion, or just want to say hello? We'd love
              to hear from you! At IdeaBin, we're committed to providing
              exceptional support and fostering open communication with our
              community members. Whether you have inquiries about our platform,
              need assistance with a technical issue, or simply want to share
              your feedback, our team is here to help.
              <br />
              <br />
              How to Reach Us:
              <br />
              <br />
              Email: Drop us a line at [insert your email address here] and
              we'll get back to you as soon as possible. Our dedicated support
              team is standing by to assist you with any questions or concerns
              you may have.
              <br />
              <br />
              Feedback Form: Have a suggestion for how we can improve IdeaBin?
              We value your input and strive to make our platform the best it
              can be. Fill out our feedback form [insert link to feedback form]
              to share your thoughts, ideas, and suggestions with us.
              <br />
              <br />
              Social Media: Connect with us on social media for the latest
              updates, news, and community highlights. Follow us on [insert
              social media platform(s) and handle(s)] to stay connected and
              engage with fellow IdeaBin enthusiasts.
              <br />
              <br />
              FAQs: Before reaching out, take a look at our Frequently Asked
              Questions (FAQs) page [insert link to FAQs page] to see if your
              question has already been answered.
              <br />
              <br />
              We've compiled a comprehensive list of common inquiries to provide
              you with quick and easy access to information. We're here to
              assist you every step of the way and are committed to ensuring
              that your experience with IdeaBin is smooth, enjoyable, and
              rewarding. Don't hesitate to get in touch with us – we're eager to
              hear from you!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
