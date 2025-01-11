import Sidebar from "../../Components/Sidebar";

const Listing = () => {
  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex ">
            <Sidebar />
            <div className="content-right">
              <img
                src="https://img.freepik.com/premium-vector/online-pharmacy-banner-with-medication-shelf-smartphone-buying-blue_313242-582.jpg?w=826"
                className="w-100"
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
