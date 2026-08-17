" use Client " ;
import { useState } from "react";
import Modal from "../week4/compuonent/modal";
export type BetaItem = {
  id: number;
  title: string;
  desc: string;
  date_added: string;
  author: string;
  status: boolean | string;
};

export const BETAITEMS: BetaItem[] = [
  {
    id: 1,
    title: "เรียนนวิชาเว็บ",
    desc: "recat (next.js),node.jsเเละtailwindcss",
    date_added: "23/07/2569",
    author: "ประวิทย์",
    status: "true",
  },
  {
    id: 2,
    title: "สเปนได้บอลโลก",
    desc: "ดูบอลโลก2026",
    date_added: "23/07/2569",
    author: "ประวิทย์",
    status: "false",
  },
  {
    id: 3,
    title: "นอน",
    desc: "นอน",
    date_added: "23/07/2569",
    author: "ประวิทย์",
    status: "true",
  },
];

export const appendBetaItem: BetaItem[] = [
  {
    id: 4,
    title: "บ้าroblox1",
    desc: "บ้าroblox",
    date_added: "23/07/2569",
    author: "ประวิทย์",
    status: "true",
  },
  {
    id: 5,
    title: "grow a garden",
    desc: "grow a garden",
    date_added: "23/07/2569",
    author: "ประวิทย์",
    status: "true",
  },
];

export function BetaItemCard({ item }: { item: BetaItem }) {
  const [open,setopen]= useState(false);
  const onedit= (t)=>{
    alert(t);
  }
  const ondeleted =(id)=>{
     alert("'งานที่ต้องการเเก้ไข$(t)` ");
  }
  const isActive = item.status === true || item.status === "true";
  const {id,title,desc,author,date_added,status}=item;
  return (
    <div>
       <Modal open={open} onClose={() => setopen(false)}>
          <div className="text-white">{title}</div>
          <div className="text-white">{id}</div>
          <div className="text-white">{desc}</div>
          <div className="text-white">{date_added}</div>
          <div className="text-white">{author}</div>
       </Modal>
      <div className="text-sm text-slate-500">หัวข้อ</div>
      <div className="font-semibold text-slate-900">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{desc}</div>
      <div className="mt-3 text-xs text-slate-500">วันที่เพิ่ม: {date_added}</div>
      <div className="mt-1 text-xs text-slate-500">ผู้เขียน: {author}</div>
      <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
        <span
          className={isActive ? "text-green-700" : "text-red-700"}
          aria-label={isActive ? "กำลังศึกษา" : "ไม่ได้ศึกษา"}
        >
          {isActive ? "กำลังศึกษา" : "ไม่ได้ศึกษา"}
        </span>
      </div>
      <div className="flex gap-2 mt-2">
              {/* View */}
       <button onClick={(e)=>setopen(true)} className="bg-green-500 text-white px-3 py-1 rounded">View</button>

           {/* Edit */}
          <button onClick={(e)=>onedit(item)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>

            {/* Delete */}
       <button onClick={(e)=>ondeleted(id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
      </div>
    </div>
  );
}

export default function BetaItemList({ items = BETAITEMS }: { items?: BetaItem[] }) {
  return (
    <>
      {items.map((item) => (
        <BetaItemCard key={item.id} item={item} />
      ))}
    </>
  );
}