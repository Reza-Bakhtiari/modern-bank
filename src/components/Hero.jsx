import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]  "
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] rounded-full w-[80%] h-[80%] bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] right-20 bottom-20 h-[50%] top-0 blue__gradient" />
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span> تخفیف برای {""}
            <span className="text-white">1 ماه </span>
            <span>حساب </span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-vazir font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            <span className="text-gradient"> نسل </span>
            بعدی <br className="sm:block hidden" />
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-vazir font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full ">
          روش پرداخت
        </h1>{" "}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
      </div>
    </section>
  );
};

export default Hero;
