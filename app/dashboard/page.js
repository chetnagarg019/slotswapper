  // "use client";

  // import { useState } from "react";
  // import Link from "next/link";
  // import toast from "react-hot-toast";
  // import { eventsData } from "../data/tableData";

  // export default function DashboardPage() {
  //   const [events, setEvents] = useState(eventsData);
  //   const [showModal, setShowModal] = useState(false);
  //   const [editEvent, setEditEvent] = useState(null);

  //   const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("isLoggedIn") === "true";

  //   const requireLogin = () => {
  //     if (!isLoggedIn) {
  //       toast.error("Please Login or Signup First!");
  //       return false;
  //     }
  //     return true;
  //   };

  //   const handleEdit = (event) => {
  //     if (!requireLogin()) return;
  //     setEditEvent(event);
  //     setShowModal(true);
  //   };

  //   const handleSave = () => {
  //     setEvents(events.map(evt => evt.id === editEvent.id ? editEvent : evt));
  //     setShowModal(false);
  //   };

  //   const handleDelete = (id) => {
  //     if (!requireLogin()) return;
  //     setEvents(events.filter(evt => evt.id !== id));
  //   };

  //   const handleSwap = (event) => {
  //     if (!requireLogin()) return;
  //     const updated = events.map(evt =>
  //       evt.id === event.id ? { ...evt, status: "SWAPPABLE" } : evt
  //     );
  //     setEvents(updated);
  //   };

  //   return (
  //     <div className="p-8 max-w-5xl mx-auto">

  //       {/* HEADER */}
  //       <div className="flex justify-between items-center mb-6">
  //         <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

  //         <div className="flex gap-3">
  //           <Link href="/marketplace" className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white transition">Marketplace</Link>
  //           <Link href="/requests" className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white transition">Requests</Link>

  //           {!isLoggedIn && (
  //             <>
  //               <Link href="/login" className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-800 text-white transition">Login</Link>
  //               <Link href="/signup" className="px-4 py-2 rounded bg-amber-600 hover:bg-amber-700 text-white transition">Signup</Link>
  //             </>
  //           )}

  //           {isLoggedIn && (
  //             <button
  //               onClick={() => { localStorage.removeItem("isLoggedIn"); window.location.reload(); }}
  //               className="px-4 py-2 rounded bg-rose-600 hover:bg-rose-700 text-white transition"
  //             >
  //               Logout
  //             </button>
  //           )}
  //         </div>
  //       </div>

  //       {/* TABLE */}
  //       <div className="shadow-lg rounded-xl overflow-hidden border border-gray-200">
  //         <table className="w-full">
  //           <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
  //             <tr>
  //               <th className="p-3 text-left">Title</th>
  //               <th className="p-3 text-left">Start Time</th>
  //               <th className="p-3 text-left">End Time</th>
  //               <th className="p-3 text-left">Status</th>
  //               <th className="p-3 text-left">Action</th>
  //             </tr>
  //           </thead>

  //           <tbody>
  //             {events.map((event) => (
  //               <tr key={event.id} className="hover:bg-gray-50 transition">
  //                 <td className="p-3 border-t">{event.title}</td>
  //                 <td className="p-3 border-t">{event.start}</td>
  //                 <td className="p-3 border-t">{event.end}</td>
  //                 <td className="p-3 border-t">
  //                   <span
  //                     className={`px-3 py-1 rounded text-xs font-medium ${
  //                       event.status === "BUSY"
  //                         ? "bg-rose-100 text-rose-700"
  //                         : event.status === "FREE"
  //                         ? "bg-emerald-100 text-emerald-700"
  //                         : "bg-yellow-100 text-yellow-700"
  //                     }`}
  //                   >
  //                     {event.status}
  //                   </span>
  //                 </td>

  //                 <td className="p-3 border-t flex gap-2">
  //                   <button className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs rounded transition cursor-pointer" onClick={() => handleEdit(event)}>Edit</button>
  //                   <button className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white text-xs rounded transition cursor-pointer" onClick={() => handleDelete(event.id)}>Delete</button>
  //                   <button className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded transition cursor-pointer" onClick={() => handleSwap(event)}>Make Swappable</button>
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>

  //       {/* MODAL */}
  //       {showModal && editEvent && (
  //         <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
  //           <div className="bg-white p-6 rounded-lg shadow-xl w-80">
  //             <h2 className="text-xl font-semibold mb-4">Edit Event</h2>

  //             <input className="border p-2 w-full mb-3 rounded" value={editEvent.title} onChange={(e) => setEditEvent({ ...editEvent, title: e.target.value })}/>
  //             <input className="border p-2 w-full mb-3 rounded" value={editEvent.start} onChange={(e) => setEditEvent({ ...editEvent, start: e.target.value })}/>
  //             <input className="border p-2 w-full mb-3 rounded" value={editEvent.end} onChange={(e) => setEditEvent({ ...editEvent, end: e.target.value })}/>

  //             <select className="border p-2 w-full mb-4 rounded" value={editEvent.status} onChange={(e) => setEditEvent({ ...editEvent, status: e.target.value })}>
  //               <option>BUSY</option>
  //               <option>FREE</option>
  //               <option>SWAPPABLE</option>
  //             </select>

  //             <div className="flex justify-end gap-2">
  //               <button className="px-4 py-1 bg-gray-400 hover:bg-gray-500 text-white rounded transition" onClick={() => setShowModal(false)}>Cancel</button>
  //               <button className="px-4 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition" onClick={handleSave}>Save</button>
  //             </div>
  //           </div>
  //         </div>
  //       )}

  //     </div>
  //   );
  // }


  "use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { eventsData } from "../data/tableData";

export default function DashboardPage() {
  const [events, setEvents] = useState(null); // <-- Initially null
  const [showModal, setShowModal] = useState(false);
  const [editEvent, setEditEvent] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load LocalStorage ONLY in client side
  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    setEvents(storedEvents ? JSON.parse(storedEvents) : eventsData);

    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const requireLogin = () => {
    if (!isLoggedIn) {
      toast.error("Please Login or Signup first!");
      return false;
    }
    return true;
  };

  const saveEvents = (updated) => {
    setEvents(updated);
    localStorage.setItem("events", JSON.stringify(updated));
  };

  const handleEdit = (event) => {
    if (!requireLogin()) return;
    setEditEvent(event);
    setShowModal(true);
  };

  const handleSave = () => {
    const updated = events.map((evt) => (evt.id === editEvent.id ? editEvent : evt));
    saveEvents(updated);
    toast.success("Event Updated");
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (!requireLogin()) return;
    saveEvents(events.filter(evt => evt.id !== id));
    toast.success("Event Deleted");
  };

  const handleSwap = (event) => {
    if (!requireLogin()) return;
    saveEvents(events.map(evt => evt.id === event.id ? { ...evt, status: "SWAPPABLE" } : evt));
    toast.success("Marked as Swappable");
  };

  // Until data loads, show loader (fix hydration!)
  if (events === null) return <p className="p-8 text-gray-500">Loading...</p>;

  return (
    <div className="p-8 max-w-5xl mx-auto">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        <div className="flex gap-3">
          <Link href="/marketplace" className="px-4 py-2 bg-indigo-600 text-white rounded">Marketplace</Link>
          <Link href="/requests" className="px-4 py-2 bg-emerald-600 text-white rounded">Requests</Link>

          {!isLoggedIn && (
            <>
              <Link href="/login" className="px-4 py-2 bg-slate-700 text-white rounded">Login</Link>
              <Link href="/signup" className="px-4 py-2 bg-amber-600 text-white rounded">Signup</Link>
            </>
          )}

          {isLoggedIn && (
            <button
              onClick={() => { localStorage.removeItem("isLoggedIn"); window.location.reload(); }}
              className="px-4 py-2 bg-rose-600 text-white rounded"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      <div className="shadow-lg rounded-xl border">
        <table className="w-full">
          <thead className="bg-gray-100 text-sm text-gray-600">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Start</th>
              <th className="p-3 text-left">End</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="hover:bg-gray-50">
                <td className="p-3 border-t">{event.title}</td>
                <td className="p-3 border-t">{event.start}</td>
                <td className="p-3 border-t">{event.end}</td>
                <td className="p-3 border-t">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    event.status === "BUSY" ? "bg-rose-100 text-rose-700" :
                    event.status === "FREE" ? "bg-emerald-100 text-emerald-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {event.status}
                  </span>
                </td>
                <td className="p-3 border-t flex gap-2">
                  <button onClick={() => handleEdit(event)} className="px-3 py-1 bg-indigo-600 text-white text-xs rounded">Edit</button>
                  <button onClick={() => handleDelete(event.id)} className="px-3 py-1 bg-rose-600 text-white text-xs rounded">Delete</button>
                  <button onClick={() => handleSwap(event)} className="px-3 py-1 bg-emerald-600 text-white text-xs rounded">Make Swappable</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && editEvent && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80">
            <h2 className="text-lg font-semibold mb-3">Edit Event</h2>

            <input className="border p-2 w-full mb-2 rounded" value={editEvent.title} onChange={e => setEditEvent({ ...editEvent, title: e.target.value })}/>
            <input className="border p-2 w-full mb-2 rounded" value={editEvent.start} onChange={e => setEditEvent({ ...editEvent, start: e.target.value })}/>
            <input className="border p-2 w-full mb-3 rounded" value={editEvent.end} onChange={e => setEditEvent({ ...editEvent, end: e.target.value })}/>

            <select className="border p-2 w-full mb-4 rounded" value={editEvent.status} onChange={e => setEditEvent({ ...editEvent, status: e.target.value })}>
              <option>BUSY</option>
              <option>FREE</option>
              <option>SWAPPABLE</option>
            </select>

            <div className="flex justify-end gap-2">
              <button className="px-4 py-1 bg-gray-400 text-white rounded" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="px-4 py-1 bg-indigo-600 text-white rounded" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

