/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";

import React from "react";
import { graphql } from "gatsby";
import Footer from "~components/Footer";
import Layout from "~components/Layout";
import SEO from "~components/SEO";

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <>
      <SEO
        customTitle={frontmatter.title}
        customDescription={frontmatter.seoDescription}
        customKeywords={frontmatter.seoKeywords}
        path={location.pathname}
      />

      <Layout className="index-page w-full relative pt-16 bg-black">
        <section className="w-screen h-screen">
          {/* Typewriter animation */}
          <article className="grid p-5">
            <h1 className="grid-end-5 grid-start-2 f1 text-white ">
              {` `}
              Welcome nerds, to ... {` `}
            </h1>
          </article>
          <article className="grid p-5">
            <h1 className="grid-end-4 grid-start-8 f1 text-white ">
              Emilio's internship extravaganza
            </h1>
          </article>

          {/* <a
            href="#fuckk"
            className="absolute -translate-x-1/2 lfifty -ml-3 flex flex-col items-center"
          >
            <div className="flex w-6 h-12 mb-2 rounded-full border-solid border-white">
              <span className="w-3 h-3 bg-white block rounded-md m-auto"></span>
            </div>
            <div className="arrow">
              <span className="arrowB block w-3 h-3 transform rotate-45"></span>
            </div>
          </a> */}
        </section>

        <section className="w-screen h-screen" id="fuckk">
          <article className="flex justify-evenly items-center">
            <img src="/uploads/emilio-young.jpg" alt="emilio young"></img>
            <p className="f4 text-white w-1/3 h-auto">
              Joining the LAM crew, Emilio had the idea of potentially one day
              building his own agency...
              <br /> <br />
              He was a little man, with big man dreams..
              <br /> <br />
              He had some previous basic web developtment skills...
              <br /> <br />
              and had even developed a pro(not so pro) website for a local dog
              grooming business...
            </p>
          </article>
        </section>

        <section className="w-screen h-screen" id="fuckk">
          <iframe
            title="puppylovep"
            src="http://www.puppylovepc.com.au"
            className="w-full h-full py-10 px-24"
          ></iframe>
        </section>

        <section className="w-screen h-auto p-10">
          <div className="h-screen flex flex-col justify-evenly">
            <h1 className="f2 text-white w-2/3 text-left">
              {` `}
              While Emilio didnt get paid much monetarily for this website (even
              though it boosted the clients leads tenfold)
            </h1>

            <h1 className="f2 text-white text-right">
              It did bring many unexpected gift's into Emilio's life...
            </h1>
          </div>
        </section>

        <section>
          <article className="flex items-center h-screen p-24">
            <h1 className="f2 text-white">
              One day during a web-design consultation with the dog grooming
              business, a golden fluffball getting groomed caught Emilio's
              eye...
            </h1>
          </article>

          <div className="h-screen flex items-center">
            <article className="grid p-5">
              <h1 className="grid-end-4 grid-start-8 f2 text-white text-right">
                And as fate would have it...
              </h1>
            </article>
          </div>
        </section>

        <section
          className="w-screen h-screen flex justify-evenly items-center p-10"
          id="fuckk"
        >
          <h1 className="w-1/3 f2 text-white ">
            Thats where Emilio met his new bff. <br />
            Dog.
            <br />
            <br /> 🐕
          </h1>

          <img
            src="/uploads/emilio-dog.jpg"
            alt="emilio dog"
            className="w-1/3 p-4"
          ></img>
        </section>

        <section className="w-screen h-auto p-10">
          <div className="h-screen flex items-center">
            <article className="grid p-5">
              <h1 className="grid-end-5 grid-start-2 f2 text-white ">
                Inititially it was difficult for Emilio and Dog to communicate.
              </h1>
            </article>
          </div>

          <div className="h-screen flex items-center">
            <article className="grid p-5">
              <h1 className="grid-start-2 f2 text-white ">
                Emilio spoke <br /> english..
              </h1>
            </article>
          </div>

          <div className="h-screen flex items-center">
            <article className="grid p-5">
              <h1 className="grid-end-4 grid-start-8 f2 text-white text-right">
                And Dog spoke inter-bork.
              </h1>
            </article>
          </div>
        </section>

        <section className="flex w-screen h-screen p-10 justify-evenly items-center">
          <h1 className="w-1/3 f4 text-white text-right italic">
            "Bork bork gatsby bork bork hooks bork bork cat==destroy bork config
            bork bork bork bork Netlify bork react bork bork HTML bork bork scss
            bork javaScript bork slowpoke!=food && slowpoke==fwend bork bork
            bork bork chase==tail bork bork bork bork" ~ Dog.
          </h1>

          <img
            src="/uploads/dog-png.png"
            alt="emilio dog"
            className=" grid-end-5 grid-start-8 h-full w-auto p-10"
          ></img>
        </section>

        <section className="flex w-screen h-screen p-10 justify-evenly items-center">
          <div className="h-screen flex items-center">
            <h1 className="f2 text-white ">
              However, slowly over the period of 12-weeks the language barrier
              between Emilio and Dog broke down, and Emilio was able to decode
              the inter-bork.
            </h1>
          </div>
        </section>

        <section className="flex flex-col w-screen h-screen p-10 justify-evenly">
          <h1 className="w-2/3 f2 text-white">
            Dog loved talking about this static site generator called Gatsby
          </h1>

          <h1 className="f3 text-white text-right">
            "bork Gatsby is such a speedy bork boi bork" <br />~ Dog
          </h1>

          <h2 className="f4 text-white p-4">
            Emilio learnt that Gatsby is the best package to build fast static
            websites.
          </h2>
        </section>

        <section className="flex w-screen h-screen p-10 justify-evenly items-center">
          <div className="w-1/2 flex flex-col justify-evenly items-center text-center p-5 h-full">
            <h1 className="f3 text-white uppercase"> Gatsby</h1>

            <div className=" w-2/3 overflow-hidden">
              <div className="square">
                <figure className="w-full absolute transform-center flex items-center justify-center">
                  <img
                    className="relative block"
                    src="/uploads/gatsby.jpeg"
                    alt=""
                  ></img>
                </figure>
              </div>
            </div>

            <h2 className="f5 text-white">Load Gatsby Image</h2>
          </div>

          <div className="w-1/2 flex flex-col justify-evenly items-center text-center p-5 h-full">
            <h1 className="f3 text-white uppercase"> Not Gatsby</h1>

            <div className=" w-2/3 overflow-hidden">
              <div className="square">
                <figure className="w-full absolute transform-center flex items-center justify-center">
                  <img
                    className="relative block"
                    src="/uploads/not-gatsby.jpg"
                    alt=""
                  ></img>
                </figure>
              </div>
            </div>

            <h2 className="f5 text-white">Load Non-Gatsby Image</h2>
          </div>
        </section>

        <section className="flex flex-col w-screen h-screen p-10 justify-evenly items-center">
          <h1 className="w-2/3 f2 text-white">
            Dog also loved ganache (even though it gave him a sore tummy) 💩
          </h1>

          <h1 className="w-2/3 f3 text-white">
            In english Ganache is a glaze, icing, sauce, or filling for
            pastries, made from chocolate and cream.
          </h1>
        </section>

        <div className="h-screen flex flex-col justify-evenly px-24">
          <h1 className="f2 text-white ">
            In inter-bork ganache is designs and developements which are
            flamboyant and eye catching.
          </h1>
          <h1 className="f3 text-white ">Click to ganache.</h1>
        </div>

        <div className="h-screen flex flex-col justify-evenly px-24">
          <h1 className="f2 text-white ">
            Dog also introduced Emilio to SCSS (Sassy CSS).
          </h1>
          <h1 className="f3 text-white text-right">
            SCSS is an advanced version of CSS, which is used to design web
            pages. <br />
          </h1>
          <h1 className="f3 text-white w-1/3 text-right self-end">
            SCSS reminds Emilio of LAM employees... <br /> Advanced and full of
            sass.
          </h1>
        </div>

        <div className="h-screen flex flex-col justify-evenly px-24">
          <h1 className="f2 text-white ">
            Emilio also learnt that one of Dog's favourite hobbies was
            tail-chasing.
          </h1>
          <h1 className="f3 text-white text-right">
            After years of practising and perfecting the ancient art of tail
            chasing, dog had also learnt tail-winding.
            <br />
          </h1>
          <h1 className="f4 text-white text-left self-end">
            Tail-winding (also known as using tailwind) is a way to style web
            designs extremely efficiently and fast, using prebuilt style
            classes. <br /> This was a game changer for Emilio, who now didn't
            have to waste precious time writing style classes. <br />
            <br />
            Emilio however still could not understand tail chasing.
          </h1>
        </div>

        <div className="h-screen flex flex-col justify-evenly px-24">
          <h1 className="f2 text-white ">
            After learning all these new skills from Dog, Emilio was now ready
            to make a change in the inter-bork world.
          </h1>
          <h1 className="f2 text-white text-right">
            Emilio would like the thank Love + Money for giving him the
            oppurtunity to learn the art of inter-bork and web developement.
          </h1>
        </div>
      </Layout>

      <Footer />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        seoDescription
        seoKeywords
      }
    }
  }
`;
