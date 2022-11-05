import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Layout from "../components/Layout";
import {
  AnimatedHover,
  AnimatedRotate,
  AnimatedGesture,
} from "../components/FramerComponents";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

// const angka = [1, 2, 3, 4, 5, 6, 7];

// angka.forEach((e, i) => {
//   console.log("asd ke -" + (i + 1) + " adalah : " + e);
// });

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
            // quality={10}
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
          quality={10}
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
            {/* <motion.div
              className="progress-bar"
              style={{ scaleX: scrollYProgress }}
            ></motion.div> */}
            <div className="row pt-6" id="anjing">
              <div className="col-md-4 col-sm-6 p-0 overflow-aut/o">
                {/* <AnimatedGesture> */}
                <AnimatedHover>
                  <Image
                    src="/dog1.png"
                    // quality={100}
                    width={200}
                    height={250}
                    layout="responsive"
                    alt="anjinggila"
                    className="rounded-5 anjingA p-1"
                  />
                </AnimatedHover>
                {/* </AnimatedGesture> */}
              </div>
              <div className="col-md-4 col-sm-6 p-0">
                <AnimatedHover>
                  <Image
                    src="/dog1.png"
                    // quality={10}
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
                        // quality={100}
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
                        // quality={100}
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
            <div className="">
              <p id="lorem" className="text-center pt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                atque dolorem nisi vero provident nihil sequi minima expedita
                eos ex doloribus eaque nemo, numquam rerum explicabo
                consequuntur porro dignissimos! Architecto id sit voluptatibus
                asperiores quaerat quo necessitatibus corrupti aperiam esse quos
                doloremque nostrum facilis cumque fugiat cum, in nam impedit
                laborum sequi et non optio magni est! Adipisci non itaque, quasi
                obcaecati excepturi nostrum dolorem culpa cum, voluptas,
                asperiores tempora blanditiis iusto molestiae laboriosam
                possimus. Rem, blanditiis. Sit fugit exercitationem praesentium
                magni illum incidunt ad labore eos magnam odit culpa cumque
                tenetur sapiente molestias reprehenderit, quam harum vel
                expedita et! Tenetur et nobis dolores perferendis perspiciatis
                sequi commodi dolore distinctio at? Aperiam, reprehenderit odio
                voluptates autem eos at dolore reiciendis dicta, iste aspernatur
                deserunt error sequi unde perferendis impedit adipisci
                temporibus quia accusantium sint quibusdam numquam rerum quasi!
                Voluptatibus facilis quis harum accusamus dolor repellat amet.
                Totam expedita necessitatibus tenetur dolores tempora itaque ab
                dolorem laudantium qui quia iure eligendi est nulla nostrum,
                alias excepturi aut cupiditate illum saepe commodi dignissimos
                quos, labore ducimus? Doloremque ea id quas, libero consequatur
                esse earum, tempore enim vel alias exercitationem repellat quasi
                culpa molestiae placeat, harum et autem sequi ex beatae
                temporibus. Neque corporis perferendis repellendus saepe eius
                asperiores rem numquam. Neque placeat quae veniam. Fugit
                distinctio officia animi voluptas harum sit repellat nesciunt
                optio laudantium minima ipsum quam mollitia voluptatibus,
                doloribus laboriosam facilis, amet iure. Labore, neque! Amet
                exercitationem in suscipit corrupti quae ea itaque sapiente
                pariatur corporis consectetur, mollitia at cum nisi commodi est
                magni a. Et odit perspiciatis ex, ratione quidem officiis est
                distinctio voluptate alias. Soluta id consectetur nulla ipsa
                fuga fugit qui exercitationem laudantium voluptates ullam
                assumenda, sapiente corporis blanditiis praesentium labore
                voluptatum aut quasi officia recusandae. Temporibus ipsam
                excepturi quas suscipit soluta consectetur ad omnis at
                dignissimos quo? Deleniti accusamus maxime veritatis harum
                dolorem asperiores quibusdam eum odit provident pariatur, sint
                inventore corporis earum repellendus dolore vero consequatur
                nisi mollitia sit id animi repudiandae distinctio similique!
                Velit quo magnam consectetur fugit cumque dolorum nisi fugiat id
                consequuntur architecto neque qui itaque ut, est quam. Similique
                exercitationem, cupiditate vel nostrum optio, molestiae
                quibusdam illo quas veritatis molestias officiis voluptatum
                cumque alias pariatur blanditiis accusamus quo, corporis
                corrupti iusto eius esse. Perspiciatis laboriosam ipsa at.
              </p>
            </div>
            <div
              id="carrousel"
              className="row justify-content-center pt-6 my-3 mb-5"
            >
              <h4 className="mb-5 fw-bold">Games that i play </h4>
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
            </div>

            <div className="row justify-content-center">
              <div className="col-md-12">
                <h4 id="learn" className="fw-bold pt-6">
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

            {/* {"contact"} */}
            <div className="row mb-5">
              <div id="contact" className="col-md-12 pt-6 mb-5">
                <h4 className="fw-bold">Contact</h4>
                <div className="d-flex flex-wrap gap-2 text-white justify-content-start">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
