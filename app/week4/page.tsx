"use client";
import { useState } from "react";
import BetaItemList, { BETAITEMS, appendBetaItem, type BetaItem } from "../beta/betaitem";
import Header from "../compounents/headers";
import Footer from "../compounents/footer";

export default function TodoList() {
  const name = "ประวิทย์";
  const major = "เทคโนโลยีสารสนเทศ (information technology)";
  const classyear = 2;
  const room = "ทส.ท";
  const active = true;
  const todolist = [...BETAITEMS, ...appendBetaItem];
  const [task, settask] = useState(todolist);
  const todoItems = <BetaItemList items={task} />;
  const [numoftask, setnoft] = useState(task.length);
  const [status,setstatus]=useState(null);
  const filtertask=status==null ? task :
    task.filter((item)=>item.status == status);
  const renderStatusBadge = (isActive: boolean) => {
    return isActive ? (
      <span className="inline-flex rounded-full bg-green-500 px-3 py-1 text-sm font-semibold text-white">
        กำลังศึกษา
      </span>
    ) : (
      <span className="inline-flex rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
        ไม่ได้ศึกษา
      </span>
    );
  };
  const addtask = () => {
    const newTask: BetaItem = {
      id: task.length+1,
      title: "ทดสอบ",
      desc: "รายละเอียดงาน",
      date_added: "13/08/2569",
      author: "ประวิทย์",
      status: "true",
    };
    settask([...task, newTask]);
    setnoft(task.length+1);
  };
  
  return (
    <>
    <Header />
    <main className=" bg-[#00ffff] flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full rounded-[28px] overflow-hidden shadow-[0_35px_60px_-15px_rgba(15,23,42,0.35)] bg-white transition-shadow duration-300 hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.4)]">
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div
            className=" w-full bg-cover bg-center shadow-inner"
            style={{ backgroundImage: "url('/img/card-left.jpg')" }}
            title="Woman holding a mug"
          />
          <div className="p-8 flex flex-col gap-8">
            <div>
              <p className="text-sm text-slate-600 flex items-center gap-2">
                <svg className="fill-current text-slate-500 w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                TO DO LIST
              </p>

              <div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">จำนวนงาน x รายการ</div>
                 <div>
                      <button onClick={addtask}>เพิ่มงาน</button>
                 </div>
                 <div>
                      <button type="button" className="text-black bg-#00FFFF box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none  style="onClick={()=> setstatus(null)}>Success</button>
                      <button type="button" className="text-heading bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"onClick={()=> setstatus(null)}>fail</button>
                      <button type="button" className="text-black bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"onClick={()=> setstatus(null)}>not</button>
                 <div></div>

              <div className="mt-4 space-y-2 text-slate-900 font-semibold text-lg">
                <div>ชื่อ: {name}</div>
                <div>สาขา: {major}</div>
                <div>ชั้นปี: {classyear}</div>
                <div>ห้อง: {room}</div>
              </div>

              
              <div className="mt-4">{renderStatusBadge(active)}</div>
            </div>
            <div className="mt-8">
              <h2 className="text-base font-semibold text-slate-900 mb-3">รายการ TODO</h2>
              <div>
                 <div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 
                {todoItems}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
 }


