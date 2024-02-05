import ViewComponent from "../../components/ViewComponent/ViewComponent";


function Payment() {

  const headings = {
    headingOne: "Profile",
    headingTwo: "Name",
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

  const paymentProduct = [
    {
      _id: 1,
      title: "Iphone",
      imageLink:
        "https://image01-in.oneplus.net/india-oneplus-statics-file/epb/202310/04/C19Q9iaIejfz0zV9.png?x-amz-process=image/format,webp/quality,Q_80",
      onclickView: handleClickView,
      onclickEdit: handleClickEdit,
      onclickDelete: handleClickDelete,
    },
    {
      _id: 2,
      title: "samsung",
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
      onclickView: handleClickView,
      onclickEdit: handleClickEdit,
      onclickDelete: handleClickDelete,
    },
  ];

  return (
    <div>
      <h1 className="text-white">Payment</h1>
      <ViewComponent 
      datas={paymentProduct}
      headings={headings}
      />
      
    </div>
  );
}

export default Payment
