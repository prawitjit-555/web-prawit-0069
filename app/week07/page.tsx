import { Suspense } from "react";
import Loading from "./compounents/loading";
import Shoplist from "./compounents/Shoplist";


export default async function Shoppage() {
    let shopsData = {};
    
    try {
        const resdata = await fetch("http://localhost:2001/shops/");
        
        if (!resdata.ok) {
            throw new Error("Network response was not ok.");
        }
        
        shopsData = await resdata.json();
        console.log(shopsData);
    } catch (error) {
        console.log(`Error fetching data: ${error}`);
    }

    return (
        <div className="max-w-3xl mx-auto mt-6">
            <h1 className="text-3xl font-bold">
                Shoplist
            </h1>
            <Suspense fallback={<Loading />}>
                <Shoplist data={shopsData} />
            </Suspense>
        </div>
    );
}