"use client";
import { useState } from "react";
import Link from "next/link";

export default function Shoplist({ data }) {

  const [Keyword, setKeyword] = useState("");

  const filtershops = data.filter((item) => {
    const searchTxt = Keyword.toLowerCase();
    return item.shopname.toLowerCase().includes(searchTxt);
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-4 text-gray-600">
        <div className="mb-6">
          <input
            type="text"
            value={Keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search shop..."
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        found {filtershops.length} shop(s)
      </div>

      <div className="space-y-4">
        {filtershops.map((shop) => (
          <div key={shop.shopid} className="border rounded-lg p-4">
            <h2 className="font-semibold">{shop.shopname}</h2>
            <p>open Status: {shop.shopstatus ? "Open" : "Closed"}</p>
            <Link
              href={`/week07/${shop.shopid}`}
              className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            >
              view Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}