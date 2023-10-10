import logo from "../Images/logo.png";
import background from "../Images/headerBackground.png";

import frame1 from "../Images/Frame 1.png";
const Header = () => {
  return (
    <div
      className="bg-cover h-[660px] p-5 text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-[1200px] h-full mx-auto">
        <nav className="w-full flex justify-between items-center">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className="w-auto flex gap-10">
            <a href="#About">О компании</a>
            <a href="#Products">Продукция</a>
            <a href="#AboutProducts">Преимущества</a>
            <a href="#Procces">Сотрудничество</a>
            <a href="#Contact">Контакты</a>
            <a href="tel:+998712004477">
              +998 (71) <strong>200-44-77</strong>
            </a>
          </div>
        </nav>
        <div className=" w-full h-[40 0px] flex justify-between ">
          <div className="w-[45%] mt-[65px]   h-full ">
            <p className="natural  ">Натуральное</p>
            <h1 className="maslo mt-3">
              подсолнечное масло от производителя «масло Волгодонска»
            </h1>
            <button className="button mt-5">Консультация</button>
          </div>
          <img className="w-[50%] h-[90vh]" src={frame1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
