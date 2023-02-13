import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineInstagram } from "react-icons/ai";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Couples = () => {
  return (
    <div className="w-full min-h-screen bg-main bg-cover bg-left ">
      <div className="w-full min-h-screen bg-black bg-opacity-20 flex flex-col gap-5 items-center justify-center p-5">
        <Navbar />
        {/* Salam Card */}
        <div className="flex flex-col items-center justify-center gap-5 h-screen text-white text-base max-w-xl mx-auto rounded-xl p-8 bg-opacity-10 border border-gray-100">
          <h1 className="text-center text-2xl">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ
          </h1>
          <h2 className="text-center font-Bree ">
            Assalamualaikum Warahmatullahi Wabarakatuh
          </h2>
          <p className="text-center font-light">
            Maha suci Allah SWT yang telah menciptakan makhluk-Nya
            berpasang-pasangan. Tanpa mengurangi rasa hormat, dengan ini kami
            bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara
            pernikahan kami
          </p>
        </div>

        <h1 className="text-white font-Bree text-3xl">Mempelai</h1>
        {/* Mempelai Card */}
        <div className="max-w-xl  w-full min-h-screen flex flex-col md:max-w-4xl md:flex-row gap-10 justify-center mb-24 items-center">
          <div className="w-full h-[500px] md:h-[700px] md:justify-center md:gap-4 bg-primary rounded-xl border-[3px] border-whites shadow-lg p-12 flex flex-col items-center justify-start gap-2">
            <AnimationOnScroll
              animateIn="animate__fadeInDown"
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img
                src="./img/irfan.png"
                alt="Pria"
                className="w-24 h-28 top-0"
              />
              <h1 className="font-shalimar text-5xl text-slate-300">Riri</h1>
              <h1 className="font-Bree text-2xl text-white text-center">Achmad Syarif Rusdi</h1>
              {/* <p className="font-Poppins text-white text-center">
                Putra Ke Dua <br /> Dari Kedua Orang Tuanya
              </p> */}
              <AiOutlineInstagram size={60} color="white" />
              <small className="font-Bree text-xl text-white">
                @achmad_8691
              </small>
            </AnimationOnScroll>
          </div>

          <div
            className="w-full h-[500px] md:h-[700px] md:justify-center mnpm start
          d:gap-4 bg-primary rounded-xl border-[3px] border-whites shadow-lg p-12 flex flex-col items-center justify-start gap-2"
          >
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img
                src="./img/irma.png"
                alt="Pria"
                className="w-24 h-28 top-0"
              />
              <h1 className="font-shalimar text-5xl text-slate-300">Imma</h1>
              <h1 className="font-Bree text-2xl text-white">Irmawati Ibnu, S.S</h1>
              {/* <p className="font-Poppins text-white text-center">
                Putri Ke Tiga <br /> Dari Kedua Orang Tuanya
              </p> */}
              <AiOutlineInstagram size={60} color="white" />
              <small className="font-Bree text-xl text-white">
                @irmha007
              </small>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couples;
