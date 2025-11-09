// "use client";

// import { useState } from "react";
// import { eventsData } from "../data/tableData";

// export default function MarketplacePage() {
//   const [events, setEvents] = useState(eventsData);

//   const handleRequestSwap = (event) => {
//     alert("Swap Request Sent for: " + event.title);
//   };

//   // Filter only SWAPPABLE events
//   const swappableEvents = events.filter(evt => evt.status === "SWAPPABLE");

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-4">Marketplace</h1>

//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Title</th>
//             <th className="border p-2">Start</th>
//             <th className="border p-2">End</th>
//             <th className="border p-2">User</th>
//             <th className="border p-2">Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {swappableEvents.map((event) => (
//             <tr key={event.id} className="bg-yellow-100">
//               <td className="border p-2">{event.title}</td>
//               <td className="border p-2">{event.start}</td>
//               <td className="border p-2">{event.end}</td>
//               <td className="border p-2">User A</td>
//               <td className="border p-2">
//                 <button onClick={() => handleRequestSwap(event)} className="px-2 py-1 bg-blue-500 text-white rounded text-sm">Request Swap</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { eventsData } from "../data/tableData";
// import toast from "react-hot-toast";

// export default function MarketplacePage() {
//   const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("isLoggedIn") === "true";

//   const handleRequest = (event) => {
//     if (!isLoggedIn) {
//       toast.error("Please Login First to send request!");
//       return;
//     }
//     toast.success(`Swap request sent for "${event.title}"`);
//   };

//   const swappableEvents = eventsData.filter(event => event.status === "SWAPPABLE");

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">Marketplace</h1>

//       {swappableEvents.length === 0 && (
//         <p className="text-gray-500">No swappable slots available right now.</p>
//       )}

//       <div className="grid gap-4">
//         {swappableEvents.map(event => (
//           <div key={event.id} className="border rounded-lg p-4 shadow-sm hover:shadow transition">
//             <h2 className="text-lg font-semibold">{event.title}</h2>
//             <p className="text-sm text-gray-600">Time: {event.start} - {event.end}</p>
//             <p className="text-sm mt-1">
//               <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-700">SWAPPABLE</span>
//             </p>

//             <button
//               onClick={() => handleRequest(event)}
//               className="mt-3 px-4 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-sm transition"
//             >
//               Request Swap
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import toast from "react-hot-toast";
// import Link from "next/link";
// import { eventsData } from "../data/tableData";

// export default function MarketplacePage() {
//   // read events from localStorage (fallback to eventsData)
//   const [events, setEvents] = useState(() => {
//     try {
//       const saved = typeof window !== "undefined" && localStorage.getItem("events");
//       return saved ? JSON.parse(saved) : eventsData;
//     } catch {
//       return eventsData;
//     }
//   });

//   // keep local requests state for UI (read from localStorage)
//   const [requests, setRequests] = useState(() => {
//     try {
//       const saved = typeof window !== "undefined" && localStorage.getItem("swapRequests");
//       return saved ? JSON.parse(saved) : [];
//     } catch {
//       return [];
//     }
//   });

//   const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("isLoggedIn") === "true";
//   const currentUser = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user") || "null") : null;
//   const userId = currentUser?.email || null;

//   // whenever events change in other pages and saved to localStorage, pick up updates
//   useEffect(() => {
//     try {
//       const saved = localStorage.getItem("events");
//       if (saved) setEvents(JSON.parse(saved));
//     } catch {}
//   }, []);

//   // whenever swapRequests change in localStorage externally, sync (optional)
//   useEffect(() => {
//     const onStorage = () => {
//       try {
//         const s = localStorage.getItem("swapRequests");
//         setRequests(s ? JSON.parse(s) : []);
//       } catch {}
//     };
//     window.addEventListener("storage", onStorage);
//     return () => window.removeEventListener("storage", onStorage);
//   }, []);

//   // compute swappable events from current events state
//   const swappableEvents = events.filter((e) => e.status === "SWAPPABLE");

//   // check if current user already requested for event
//   const hasRequested = (eventId) => {
//     if (!userId) return false;
//     return requests.some((r) => r.eventId === eventId && r.requestedBy === userId);
//   };

//   const handleRequest = (event) => {
//     if (!isLoggedIn) {
//       toast.error("Please Login first to send request!");
//       return;
//     }

//     if (hasRequested(event.id)) {
//       toast("You already requested this slot", { icon: "ℹ️" });
//       return;
//     }

//     const newReq = {
//       id: Date.now(),
//       eventId: event.id,
//       eventTitle: event.title,
//       requestedBy: userId,
//       status: "Pending",
//       createdAt: new Date().toISOString(),
//     };

//     const updated = [...requests, newReq];
//     setRequests(updated);

//     try {
//       localStorage.setItem("swapRequests", JSON.stringify(updated));
//     } catch (e) {
//       console.error("Could not save swapRequests", e);
//     }

//     toast.success(`Swap request sent for "${event.title}"`);
//   };

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Marketplace</h1>
//         <Link href="/dashboard" className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-800 text-white transition">Back to Dashboard</Link>
//       </div>

//       {swappableEvents.length === 0 ? (
//         <p className="text-gray-500">No swappable slots available right now.</p>
//       ) : (
//         <div className="grid gap-4">
//           {swappableEvents.map((event) => (
//             <div key={event.id} className="border rounded-lg p-4 shadow-sm hover:shadow transition flex justify-between items-center">
//               <div>
//                 <h2 className="text-lg font-semibold">{event.title}</h2>
//                 <p className="text-sm text-gray-600">Time: {event.start} - {event.end}</p>
//                 <p className="text-sm mt-1">
//                   <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-700">SWAPPABLE</span>
//                 </p>
//               </div>

//               <div>
//                 <button
//                   onClick={() => handleRequest(event)}
//                   className={`px-4 py-2 rounded text-sm transition ${
//                     hasRequested(event.id)
//                       ? "bg-gray-300 text-gray-700 cursor-not-allowed"
//                       : "bg-indigo-600 hover:bg-indigo-700 text-white"
//                   }`}
//                   disabled={hasRequested(event.id)}
//                 >
//                   {hasRequested(event.id) ? "Requested" : "Request Swap"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import toast from "react-hot-toast";
// import Link from "next/link";

// export default function MarketplacePage() {
//   const [events, setEvents] = useState([]);
//   const [requests, setRequests] = useState([]);

//   const currentUser = typeof window !== "undefined"
//     ? JSON.parse(localStorage.getItem("user") || "null")
//     : null;

//   const userEmail = currentUser?.email;

//   useEffect(() => {
//     const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
//     // ✅ Marketplace me sirf SWAPPABLE slots hi dikhne chahiye
//     setEvents(storedEvents.filter(e => e.status === "SWAPPABLE"));

//     const storedRequests = JSON.parse(localStorage.getItem("swapRequests")) || [];
//     setRequests(storedRequests);
//   }, []);

//   const handleRequest = (event) => {
//     if (!userEmail) {
//       toast.error("Please login first!");
//       return;
//     }

//     const newReq = {
//       id: Date.now(),
//       from: userEmail,
//       to: event.owner, // jisne post kiya
//       offered: event.title,
//       requested: `${event.start} - ${event.end}`,
//       status: "Pending"
//     };

//     const updatedReq = [...requests, newReq];
//     setRequests(updatedReq);
//     localStorage.setItem("swapRequests", JSON.stringify(updatedReq));

//     toast.success("Swap Request Sent ✅");
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Marketplace</h1>
//         <Link href="/requests" className="px-4 py-2 bg-slate-700 text-white rounded">
//           View Requests
//         </Link>
//       </div>

//       {events.length === 0 ? (
//         <p>No swappable slots available.</p>
//       ) : (
//         <table className="w-full border">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">Slot</th>
//               <th className="border p-2">Time</th>
//               <th className="border p-2">Owner</th>
//               <th className="border p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.map(event => (
//               <tr key={event.id} className="bg-yellow-100">
//                 <td className="border p-2">{event.title}</td>
//                 <td className="border p-2">{event.start} - {event.end}</td>
//                 <td className="border p-2">{event.owner}</td>
//                 <td className="border p-2">
//                   <button
//                     onClick={() => handleRequest(event)}
//                     className="px-3 py-1 bg-indigo-600 text-white rounded"
//                   >
//                     Request Swap
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MarketplacePage() {
  const [events, setEvents] = useState([]);
  const [requests, setRequests] = useState([]);
  const [clickedEvents, setClickedEvents] = useState([]);

  const router = useRouter();

  const currentUser = typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user") || "null")
    : null;

  const userEmail = currentUser?.email;
  const userName = currentUser?.name; // Assuming user object has "name"

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents.filter(e => e.status === "SWAPPABLE"));

    const storedRequests = JSON.parse(localStorage.getItem("swapRequests")) || [];
    setRequests(storedRequests);

    // Get previously clicked event ids (so buttons remain disabled on refresh)
    const clicked = JSON.parse(localStorage.getItem("clickedEvents")) || [];
    setClickedEvents(clicked);
  }, []);

  const handleRequest = (event) => {
    // if (!userEmail) {
    //   toast.error("Please login first!");
    //   return;
    // }

    // Disable the button
    const updatedClicked = [...clickedEvents, event.id];
    setClickedEvents(updatedClicked);
    localStorage.setItem("clickedEvents", JSON.stringify(updatedClicked));

    // Create new request
    const newReq = {
      id: Date.now(),
      from: userName || userEmail, // Who sent the request
      to: event.ownerName || event.owner, // Owner's name
      offered: event.title,
      requested: `${event.start} - ${event.end}`,
      status: "Pending"
    };

    const updatedReq = [...requests, newReq];
    setRequests(updatedReq);
    localStorage.setItem("swapRequests", JSON.stringify(updatedReq));

    toast.success("Swap Request Sent ✅");

    // Navigate to /requests page
    router.push("/requests");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Marketplace</h1>
        <Link href="/requests" className="px-4 py-2 bg-slate-700 text-white rounded">
          View Requests
        </Link>
      </div>

      {events.length === 0 ? (
        <p>No swappable slots available.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Slot</th>
              <th className="border p-2">Time</th>
              {/* <th className="border p-2">Owner</th> */}
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id} className="bg-yellow-100">
                <td className="border p-2">{event.title}</td>
                <td className="border p-2">{event.start} - {event.end}</td>
                {/* <td className="border p-2">{event.ownerName || event.owner}</td> */}
                <td className="border p-2">
                  <button
                    onClick={() => handleRequest(event)}
                    className="px-3 py-1 bg-indigo-600 text-white rounded disabled:bg-gray-400 cursor-pointer"
                    disabled={clickedEvents.includes(event.id)}
                  >
                    Request Swap
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}


