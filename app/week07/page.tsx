import { Suspense } from "react";
import { shops } from "./compounents/shopitem";
import Loading from "./compounents/loading";
import Shoplist from "./compounents/Shoplist";
export default function Shoppage(){

    return(
<div className="max-w-3x1 mx-auto mt-6">
    <h1 className="text-3x1 font-bold">
        shoplist
    </h1>
    <Suspense fallback={<Loading/>}>
     <Shoplist data={shops}/>

    </Suspense>
</div>
    );
}