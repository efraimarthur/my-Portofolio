import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import {
  AnimatedHover,
  AnimatedRotate,
  AnimatedGesture,
} from "../components/FramerComponents";
import { motion, useAnimation } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  // const { scrollYProgress } = useScroll();
  const Card2 = ({ cardName, imgItem, bgColor }) => {
    return (
      <div
        style={{
          width: "240px",
          height: "40px",
          backgroundColor: `${bgColor}`,
          borderRadius: "5px",
          letterSpacing: "3px",
        }}
        className="d-flex flex-row justify-content-center align-items-center shadow overflow-hidden"
      >
        <div className="card-body text-white ps-2 d-flex flex-row align-items-center">
          <Image
            src={imgItem}
            quality={20}
            width={40}
            height={40}
            layout=""
            alt="anjinggila"
            className="card-img-top"
          />
          <p className="card-title fw-bold">{cardName}</p>
        </div>
        {/* <div className="iconBg"> */}
        <Image
          src={imgItem}
          quality={20}
          width={89}
          height={90}
          layout=""
          alt="anjinggila"
          className=""
          objectPosition="20px -10px"
          // loading="lazy"
        />
        {/* </div> */}
      </div>
    );
  };

  const [ref1, inView] = useInView();
  const [ref2, inView2] = useInView();
  // {threshold: 0.2,}

  const animation1 = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    console.log("use effect hook , inView2 = ", inView2);

    if (inView2) {
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView2) {
      animation2.start({ x: "-100vw" });
    }
  }, [inView2]);

  useEffect(() => {
    console.log("use effect hook , inView1 = ", inView);

    if (inView) {
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation1.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <>
      <Head>
        <title>Arthur Efraim</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dota2Icons.png" />
      </Head>
      <Layout>
        <div className="bg-page">
          <div id="top" className="container-home">
            <div className="row pt-6">
              <div className="col-md-4 col-sm-6 p-0">
                <AnimatedHover>
                  <Image
                    src="/dog1.png"
                    quality={10}
                    width={200}
                    height={250}
                    layout="responsive"
                    alt="anjinggila"
                    className="rounded-5 anjingA p-1"
                  />
                </AnimatedHover>
              </div>
              <div className="col-md-4 col-sm-6 p-0">
                <AnimatedHover>
                  <Image
                    src="/dog1.png"
                    quality={10}
                    width={200}
                    height={250}
                    layout="responsive"
                    alt="anjinggila"
                    className="p-1 rounded-5 anjingA"
                  />
                </AnimatedHover>
              </div>
              <div className="col-md-4 col-sm-12 ">
                <div className="row h-50">
                  <div className="col-md-12 p-0">
                    <AnimatedHover>
                      <Image
                        src="/dog1.png"
                        quality={10}
                        width={100}
                        height={62.5}
                        layout="responsive"
                        alt="anjinggila"
                        className=" anjingB p-1 rounded-5"
                        objectPosition="50% 60%"
                      />
                    </AnimatedHover>
                  </div>
                </div>
                <div className="row h-5/0">
                  <div className="col-md-12 p-0 ">
                    <AnimatedHover>
                      <Image
                        src="/dog1.png"
                        quality={10}
                        width={1}
                        height={0.625}
                        layout="responsive"
                        alt="anjinggila"
                        className=" anjingB p-1 rounded-5"
                        objectPosition="50% 60%"
                      />
                    </AnimatedHover>
                  </div>
                </div>
              </div>
            </div>

            <div ref={ref1} id="about" className="pt-6 mb-6">
              <h4 className="fw-bold text-center mb-5">About me</h4>
              <div className="row text-secondary">
                <motion.div className="col-md-4" animate={animation1}>
                  <Image
                    src="/profileUnsplash.jpg"
                    quality={100}
                    width={5}
                    height={4}
                    layout="responsive"
                    alt="profile.jpg"
                    objectFit="cover"
                    // objectPosition="-100px 0px"
                    className="rounded-3 p-1"
                  />
                </motion.div>
                <motion.div className="col-md-8" animate={animation1}>
                  <h5 className="text-start mt-2 p-2">{`Hi, I'm Arthur Efraim`}</h5>
                  <p id="lorem" className="text-start p-2 text-about">
                    Since beginning my journey as an Informatics student over 4
                    years ago, I&#39;ve been studying about several types of
                    Programming languages, But in the end I like Web programming
                    the most. I&#39;m quietly confident, naturally curious,
                    obsessed in learning new things, and perpetually working on
                    improving my skills on Developing a Website. After
                    graduating from the University of Klabat{" "}
                    <a
                      href="https://www.unklab.ac.id/"
                      className="fw-bold text-dark fs-5 hoverAbout"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {`"UNKLAB"`}
                    </a>{" "}
                    I&#39;ve been learning about making website with Front-End
                    tech such as <b>Html</b>, <b>CSS</b>, <b>Javascript</b>,{" "}
                    <a
                      href="https://getbootstrap.com/"
                      className="fw-bold text-primary fs-5 hoverAbout"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Bootstrap
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://reactjs.org/"
                      className="fw-bold text-info fs-5 hoverAbout"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ReactJS
                    </a>
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="row justify-content-center" id="learn">
              <div className="col-md-12">
                <h4 className="fw-bold pt-6 text-center my-3">
                  Currently learning
                </h4>
                <p className="text-decoration-underline mt-5 fw-bold">
                  Programming and markup language
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <Card2
                    cardName="HTML"
                    imgItem="/htmlIcon.png"
                    bgColor="orange"
                  />
                  <Card2
                    cardName="CSS"
                    imgItem={"/cssIcon.png"}
                    bgColor="blue"
                  />
                  <Card2
                    cardName="Javascript"
                    imgItem={"/jsIcon.png"}
                    bgColor="#FFD384"
                  />
                </div>
                <p className="mt-3 fw-bold text-decoration-underline">
                  Frameworks
                </p>
                <div className="d-flex flex-wrap justify-content-start gap-2">
                  <Card2
                    cardName="ReactJS"
                    imgItem={"/reactIcon.png"}
                    bgColor="#645CAA"
                  />
                  <Card2
                    cardName="NextJS"
                    imgItem={"/nextJsIcon.png"}
                    bgColor="#444"
                  />
                </div>
                <p className="mt-3 fw-bold text-decoration-underline">
                  CSS Framework
                </p>
                <div className="d-flex flex-wrap justify-content-start gap-2">
                  <Card2
                    cardName="Bootstrap"
                    imgItem={"/bootstrapIcon.png"}
                    bgColor="#554994"
                  />
                  {/* <Card2
                    cardName="TailwindCSS"
                    imgItem={"/tailwindIcon.png"}
                    bgColor="#3AB4F2"
                  /> */}
                </div>
                <p className="mt-3 fw-bold text-decoration-underline">
                  Database
                </p>
                <div className="d-flex flex-wrap justify-content-start gap-2">
                  <Card2
                    cardName="MySQL"
                    imgItem={"/mysqlIcon.png"}
                    bgColor="#333"
                  />
                  <Card2
                    cardName="Firebase"
                    imgItem={"/firebaseIcon.png"}
                    bgColor="#F4E06D"
                  />
                </div>
              </div>
            </div>
            {/* <div id="games" className="row justify-content-center pt-6 ">
              <h4 className=" fw-bold text-center my-3">Favorite Games</h4>
              <div className="col-md-10 carrousel text-white fs-1 fw-semibold">
                <article className="cardz d-flex justify-content-between">
                  <p className="">Dota 2</p>
                  <Image
                    src="/dota2Icons.png"
                    quality={50}
                    width={320}
                    height={0}
                    // objectPosition="-30px 9px "
                    objectFit="cover"
                    // layout="fill"
                    alt="anjinggila"
                    className="carouselGambar ms-4"
                  />
                </article>
                <article className="cardz d-flex justify-content-between">
                  <p className="">Valorant</p>
                  <Image
                    src="/iconValorant.png"
                    quality={50}
                    width={320}
                    height={115}
                    // objectPosition="-50px 0px"
                    objectFit="cover"
                    // layout="fill"
                    alt="anjinggila"
                    className="carouselGambar ms-4"
                  />
                </article>
                <article className="cardz d-flex justify-content-between ">
                  <p className="">Terraria</p>
                  <Image
                    src="/iconTerraria.png"
                    quality={50}
                    width={320}
                    height={115}
                    // objectPosition="-50px 0px"
                    objectFit="cover"
                    // layout="fill"
                    alt="anjinggila"
                    className="carouselGambar ms-4"
                  />
                </article>
                <article className="cardz d-flex justify-content-between ">
                  <p className="">{`Assassin's Creed`}</p>
                  <Image
                    src="/iconAC.png"
                    quality={50}
                    width={320}
                    height={115}
                    // objectPosition="-50px 0px"
                    objectFit="cover"
                    // layout="fill"
                    alt="anjinggila"
                    className="carouselGambar ms-4"
                  />
                </article>
              </div>
            </div> */}

            {/* {"contact"} */}
            <div className="row mb-5">
              <div ref={ref2} id="contact" className="col-md-12 pt-6 mb-5">
                <h4 className="fw-bold my-3 text-center">Contact</h4>
                <motion.div
                  animate={animation2}
                  className="d-flex flex-wrap gap-2 text-white justify-content-start"
                >
                  <div className="p-3 fw-bold shadow-sm rounded-2 d-flex contactBody">
                    <Icon
                      icon="bi:instagram"
                      color="#EA047E"
                      className="me-2"
                      height={40}
                      // width={50}
                    />
                    <div className="d-flex flex-column">
                      <a
                        href="https://www.instagram.com/thur.ion/"
                        target="_blank"
                        rel="noreferrer"
                        className="contactTitle "
                      >
                        Instagram
                      </a>
                      <a
                        className="fw-normal contactContent"
                        href="https://www.instagram.com/thur.ion/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @thur.ion
                      </a>
                    </div>
                  </div>

                  <div className="p-3 fw-bold shadow-sm rounded-2 d-flex contactBody ">
                    <Icon
                      icon="akar-icons:github-fill"
                      color="#5837d0"
                      className="me-2"
                      height={40}
                    />
                    <div className="d-flex flex-column">
                      <a
                        href="https://github.com/efraimarthur"
                        target="_blank"
                        rel="noreferrer"
                        className="contactTitle"
                      >
                        Github
                      </a>
                      <a
                        passHref
                        className="fw-normal contactContent"
                        href="https://github.com/efraimarthur"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github.com/efraimarthur
                      </a>
                    </div>
                  </div>
                  <div className="p-3 fw-bold shadow-sm rounded-2 d-flex contactBody">
                    <Icon
                      icon="logos:google-gmail"
                      className="me-2"
                      height={40}
                    />
                    <div className="d-flex flex-column">
                      <a
                        href=""
                        target="_blank"
                        rel="noreferrer"
                        className="contactTitle"
                      >
                        Gmail
                      </a>
                      <a
                        className="fw-normal contactContent"
                        href=""
                        target="_blank"
                        rel="noreferrer"
                      >
                        test
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
