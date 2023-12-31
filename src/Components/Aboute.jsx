const Aboute = () => {
  return (
    <div className="w-[1200px] h-[500px] flex mx-auto">
      <div className="w-[50%] h-full flex justify-end items-center    ">
        <div className="w-[80%] h-[70%] flex flex-col  ">
          <div className="box w-[85%] h-[50%] ml-[50px]"></div>
          <div className=" w-[85%]  h-[50%] flex justify-between mt-2 ml-[50px] gap-3">
            <div className="box w-[50%] h-full  mx-auto"></div>
            <div className="box w-[50%] h-full mx-auto"></div>
          </div>
        </div>
      </div>
      <div className="w-[60%]  mt-[65px]">
        <p className="text-[18px] yellow ">О компании</p>
        <h1 className=" bold about-title">
          натуральные подсолнечные масла высочайшего качества от производителя
        </h1>
        <p className="w-full text-[12.90px] ">
          Наша компания по производству подсолнечного масла занимается
          производством высококачественного продукта для здорового образа жизни
          <strong>«Семейное»</strong>, <strong>«Дончанка»</strong>,{" "}
          <strong>«Донола»</strong> - 100% подсолнечное рафинированное
          дезодорированное масло, что подтверждено многочисленными испытаниями
          аккредитованных независимых организаций. <br />
          <br />
          Мы нацелены дать нашим потребителям лучший качественный продукт,
          который по своему жиро-кислотному составу самым лучшим образом
          подходит для организма человека. Политика в области качества на
          предприятии предусматривает корпоративную ответственность всего
          персонала за конечный результат, а основной своей задачей коллектив
          считает удовлетворение потребностей каждой семьи, любого человека в
          высококачественных продуктах. Выпуск продукции производится согласно
          ТР ТС 024/2011 «Технический регламент на масложировую продукцию» и
          соответствует ГОСТ на подсолнечное масло (ГОСТ 1129-2013),
        </p>
      </div>
    </div>
  );
};

export default Aboute;
