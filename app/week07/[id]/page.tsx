import Link from "next/link";
import { shops } from "../compounents/shopitem";
import Loading from "../compounents/loading";
import { Suspense } from "react";

export default async function ShopDetail({ params }) {
  const { id } = await params;
  console.log(id);

  const shop = shops.find(
    (item) => item.id === Number(id)
  );
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Shop Detail</h1>

        <div className="border rounded-lg p-4 m-4">
          <p className="mt-4 font-semibold">
            ID: {shop.id}
          </p>
          <p className="my-4">
            Title: {shop.title}
          </p>
          <p className="my-4">
            Status: {shop.status ? "Open" : "Closed"}
          </p>
          <p className="my-4">
            Location: Lat {shop.location.lat}, Long {shop.location.long}
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