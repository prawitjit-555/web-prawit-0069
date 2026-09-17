import Link from "next/link";
import { shops } from "../compounents/shopitem";
import Loading from "../compounents/loading";
import { Suspense } from "react";
// import { useState,useEffect } from "react";

export default async function ShopDetail({ params }) {
  const { id } = await params;
  console.log(id);

  // const shop = shops.find(
  //   (item) => item.id === Number(id)
  // );
// const [shop, setshop] = useState({});
// useEffect(() => {
//   const fetchdata = async () => {
  //   try {
  //     const resdata = await fetch(`http://localhost:2001/shops/${id}`);
      
  //     if (resdata.ok) {
  //       const resshop = await resdata.json();
  //       setshop(resshop);
  //     } else {
  //       throw new Error("network response was not ok.");
  //     }
  //   } catch (error) {
  //     console.log(`error fetching data: ${error}`);
  //   }
  // };
  let shop = {};
   try {
      const resdata = await fetch(`http://localhost:2001/shops/${id}`);
      
    if (!resdata.ok) {
       throw new Error("network response was not ok.");
      }
        shop = await resdata.json();
        console.log(shops);
      }
    catch (error) {
      console.log(`error fetching data: ${error}`);
    }
  // };


  // fetchdata();

// }, [id]); 
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Shop Detail</h1>

        <div className="border rounded-lg p-4 m-4">
          <p className="mt-4 font-semibold">
            ID: {shop.shopid}
          </p>
          <p className="my-4">
            Title: {shop.shopname}
          </p>
          <p className="my-4">
            Status: {shop.shopstatus ? "Open" : "Closed"}
          </p>
          <p className="my-4">
            Location: Lat {shop.shoploc?.lat}, Long {shop.shoploc2?.long}
          </p>
        </div>

        <Link
          href="/week07"
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Back
        </Link>
      </div>
    </Suspense>
  );
}