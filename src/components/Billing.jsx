import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] ml-20"
      />
      <div className="absolute z-[3] -left-50 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
      <div className="absolute z-[0] -left-50 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        به راحتی سرمایه و هزینه <br className="sm:block hidden" /> خود را کنترل
        کنید
      </h2>
      <p className={`${styles.paragraph}max-w-[470px] mt-5`}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt=""
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer "
        />
        <img
          src={google}
          alt=""
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer "
        />
      </div>
    </div>
  </section>
);
export default Billing;
