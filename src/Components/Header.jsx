import logo from "../Images/logo.png";
import background from "../Images/headerBackground.png";
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
        <div className="w-[50%]  h-full border ">
          <p className>Натуральное</p>
          <h1>подсолнечное масло от производителя «масло Волгодонска»</h1>
          <button>Консультация</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
