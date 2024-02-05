import { useState } from "react";
import ViewComponent from "../../components/ViewComponent/ViewComponent";
import InputField from "../../components/Forms/InputField/InputField";


function Product() {
  const [formFiled, setFormField] = useState({});

  const formdatas = [
    {
      type: "text",
      placeholder: "Name",
      className: "",
      name: "name",
    },
    {
      type: "price",
      placeholder: "Price",
      className: "",
      name: "price",
    },
    {
      type: "quantity",
      placeholder: "Quantity",
      className: "",
      name: "quantity",
    },
    {
      type: "text",
      placeholder: "Desciption",
      className: "",
      name: "desciption",
    },
  ];

  const onChangeValues = (e) => {
    console.log(e.target.value);
    setFormField({ ...formFiled, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFiled);
  };

  const headings = {
    headingOne: "Profile",
    headingTwo: "Name",
    headingFour: "Price",
  };

  const handleClickView = (e) => {
    console.log(e, "ee");
    console.log("object");
  };

  const handleClickEdit = (e) => {
    console.log("object");
    console.log(e, "ee");
  };

  const handleClickDelete = (e) => {
    console.log("object");
    console.log(e, "ee");
  };
const products = [
    {
      _id: 1,
      title: "Iphone",
      imageLink:
        "https://image01-in.oneplus.net/india-oneplus-statics-file/epb/202310/04/C19Q9iaIejfz0zV9.png?x-amz-process=image/format,webp/quality,Q_80",
      price: 20000,
      onclickView: handleClickView,
      onclickEdit: handleClickEdit,
      onclickDelete: handleClickDelete,
    },
    {
      _id: 2,
      title: "samsung",
      price: 15000,
      imageLink:
        "https://image01-in.oneplus.net/india-oneplus-statics-file/epb/202310/04/W10i8FYOGX31ih1D.png?x-amz-process=image/format,webp/quality,Q_80",
      onclickView: handleClickView,
      onclickEdit: handleClickEdit,
      onclickDelete: handleClickDelete,
    },
    {
      _id: 3,
      title: "ipad",
      imageLink: "https://m.media-amazon.com/images/I/51ZNhxm+jfS._SY450_.jpg",
      price: 18000,
      onclickView: handleClickView,
      onclickEdit: handleClickEdit,
      onclickDelete: handleClickDelete,
    },
  ];
return (
    <div>
      <div>
        <h1 className="text-white">Product</h1>
        <ViewComponent datas={products} headings={headings} />
      </div>
      <div className="flex justify-center items-center flex-col h-screen">
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-[50%] rounded-md h-[500px] flex justify-center flex-col gap-5 items-center pb-[40%]"
        >
          <h2 className="text-white text-xl">Edit Product</h2>
          {formdatas.map(({ className, placeholder, type, name }, index) => (
            <InputField
              onChange={onChangeValues}
              key={index}
              type={type}
              placeholder={placeholder}
              name={name}
              className={`${className} max-w-[300px] w-[80%] h-[60px] bg-white flex justify-start ps-5 rounded-md items-center`}
            />
          ))}
          <input
            type="submit"
            className="text-white border-solid border-2 border-indigo-600 w-[4  0%]"
          />
        </form>
      </div>
    </div>
  );
}

export default Product;