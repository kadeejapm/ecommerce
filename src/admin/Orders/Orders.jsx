import ViewComponent from "../../components/ViewComponent/ViewComponent";

function Orders() {
  const headings = {
    headingOne: "Profile",
    headingTwo: "Name",
    headingThree: "Quantity",
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

  const obj = [
    {
      _id: 1,
      title: "Iphone",
      imageLink:
        "https://image01-in.oneplus.net/india-oneplus-statics-file/epb/202310/04/C19Q9iaIejfz0zV9.png?x-amz-process=image/format,webp/quality,Q_80",
      quantity: 1,
      price: 20000,
      onclickView: handleClickView,
      onclickEdit: handleClickEdit,
      onclickDelete: handleClickDelete,
    },
    {
      _id: 2,
      title: "samsung",
      imageLink:
        "https://image01-in.oneplus.net/india-oneplus-statics-file/epb/202310/04/W10i8FYOGX31ih1D.png?x-amz-process=image/format,webp/quality,Q_80",
      quantity: 2,
      price: 15000,
      onclickView: handleClickView,
      onclickEdit: handleClickEdit,
      onclickDelete: handleClickDelete,
    },
    {
      _id: 3,
      title: "ipad",
      imageLink: "https://m.media-amazon.com/images/I/51ZNhxm+jfS._SY450_.jpg",
      quantity: 1,
      price: 18000,
      onclickView: handleClickView,
      onclickEdit: handleClickEdit,
      onclickDelete: handleClickDelete,
    },
  ];

  return (
    <div>
      <h1 className="text-white">Orders</h1>
      <ViewComponent headings={headings} datas={obj} />
    </div>
  );
}

export default Orders;
