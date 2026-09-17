import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 2001;

app.use(cors())
app.use(bodyParser.json())


const myshops = [
  {
    shopid: 100,
    shopname: "adidas",
    shoptype: "fashion",
    shoploc: { lat: 100, lon:150},
    shopstatus: true
  },
  {
    shopid: 200,
    shopname: "nike",
    shoptype: "shoes",
    shoploc: { lat: 102,lon:155},
    shopstatus: false
  },
  {
    shopid: 300,
    shopname: "puma",
    shoptype: "fashion",
    shoploc: { lat: 130,lon:250},
    shopstatus: true
  }
];




app.get('/', (req, res) => { res.send("web programmingin2/2569"); });

app.get('/shops', (req,res) => {
    // const shopitems = myshop.map(
    // shop =>{
    // <b>shop id:</b> ${shop.shopid}</br>
    // <b>shop location(lat,lon)</b>
    // ${shop.shoploc.lat},${shp[.shoploc.lon]}</br>
    // });
    res.set('Content-type','application/json');
        res.send(myshops);
//    let mytext ='';
//     mytext += `<b>shop id:</b> ${myshop.shopid}<br>`; 
//     mytext += `<b>shop name:</b> ${myshop.shopname}<br>`;
//     mytext += `<b>shop type:</b> ${myshop.shoptype}<br>`;
//     mytext += `<b>shop loc:</b> Lat ${myshop.shoploc.lat}, Lon ${myshop.shoploc.lon}<br>`;
//     mytext += `<b>shop status:</b> ${myshop.shopstatus}<br>`;
//     res.set('content-type','text/html');
//     res.send(mytext);
});

app.get('/shops/:shopid', (req,res) => {
    // const shopitems = myshop.map(
    // shop =>{
    // <b>shop id:</b> ${shop.shopid}</br>
    // <b>shop location(lat,lon)</b>
    // ${shop.shoploc.lat},${shp[.shoploc.lon]}</br>
    // });
    const {shopid}=req.params;
    res.set('Content-type','application/json');
        const shopitem = myshops.filter(
          shop=>{return shop.shopid===Number(shopid)}
        )
        res.send(shopitem[0])
   
//    let mytext ='';
//     mytext += `<b>shop id:</b> ${myshop.shopid}<br>`; 
//     mytext += `<b>shop name:</b> ${myshop.shopname}<br>`;
//     mytext += `<b>shop type:</b> ${myshop.shoptype}<br>`;
//     mytext += `<b>shop loc:</b> Lat ${myshop.shoploc.lat}, Lon ${myshop.shoploc.lon}<br>`;
//     mytext += `<b>shop status:</b> ${myshop.shopstatus}<br>`;
//     res.set('content-type','text/html');
//     res.send(mytext);
});

app.listen(port, () => { console.log(`app listening on port ${port}`); });