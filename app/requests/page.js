// "use client";

// import { useState } from "react";

// export default function RequestsPage() {
//   const [incoming, setIncoming] = useState([
//     { id: 1, offered: "Team Meeting", requested: "Study Session" },
//   ]);

//   const [outgoing, setOutgoing] = useState([
//     { id: 2, offered: "Workout Session", requested: "Lunch Break", status: "Pending" },
//   ]);

//   const handleAccept = (id) => {
//     setIncoming(incoming.filter(r => r.id !== id));
//   };

//   const handleReject = (id) => {
//     setIncoming(incoming.filter(r => r.id !== id));
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-4">Requests</h1>

//       <h2 className="text-lg font-semibold mb-2">Incoming Requests</h2>
//       <table className="w-full border mb-4">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Slot Offered</th>
//             <th className="border p-2">Slot Requested</th>
//             <th className="border p-2">Accept</th>
//             <th className="border p-2">Reject</th>
//           </tr>
//         </thead>
//         <tbody>
//           {incoming.map(r => (
//             <tr key={r.id} className="bg-red-100">
//               <td className="border p-2">{r.offered}</td>
//               <td className="border p-2">{r.requested}</td>
//               <td className="border p-2">
//                 <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={() => handleAccept(r.id)}>Accept</button>
//               </td>
//               <td className="border p-2">
//                 <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => handleReject(r.id)}>Reject</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2 className="text-lg font-semibold mb-2">Outgoing Requests</h2>
//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Slot Offered</th>
//             <th className="border p-2">Slot Requested</th>
//             <th className="border p-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {outgoing.map(r => (
//             <tr key={r.id} className="bg-green-100">
//               <td className="border p-2">{r.offered}</td>
//               <td className="border p-2">{r.requested}</td>
//               <td className="border p-2">{r.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// // }

// "use client";

// import { useEffect, useState } from "react";

// export default function RequestsPage() {
//   const [incoming, setIncoming] = useState([]);
//   const [outgoing, setOutgoing] = useState([]);

//   useEffect(() => {
//     const incomingRequests = JSON.parse(localStorage.getItem("incomingRequests")) || [];
//     const outgoingRequests = JSON.parse(localStorage.getItem("outgoingRequests")) || [];
//     setIncoming(incomingRequests);
//     setOutgoing(outgoingRequests);
//   }, []);

//   const handleAccept = (id) => {
//     const updated = incoming.filter(r => r.id !== id);
//     setIncoming(updated);
//     localStorage.setItem("incomingRequests", JSON.stringify(updated));
//     alert("Request Accepted ✅");
//   };

//   const handleReject = (id) => {
//     const updated = incoming.filter(r => r.id !== id);
//     setIncoming(updated);
//     localStorage.setItem("incomingRequests", JSON.stringify(updated));
//     alert("Request Rejected ❌");
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-4">Requests</h1>

//       {/* Incoming */}
//       <h2 className="text-lg font-semibold mb-2">Incoming Requests</h2>
//       {incoming.length === 0 ? (
//         <p className="text-gray-500 mb-4">No incoming requests</p>
//       ) : (
//         <table className="w-full border mb-4">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">From (Email)</th>
//               <th className="border p-2">Slot Offered</th>
//               <th className="border p-2">Slot Requested</th>
//               <th className="border p-2">Accept</th>
//               <th className="border p-2">Reject</th>
//             </tr>
//           </thead>
//           <tbody>
//             {incoming.map(r => (
//               <tr key={r.id} className="bg-red-100">
//                 <td className="border p-2">{r.from}</td>
//                 <td className="border p-2">{r.offered}</td>
//                 <td className="border p-2">{r.requested}</td>
//                 <td className="border p-2">
//                   <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={() => handleAccept(r.id)}>Accept</button>
//                 </td>
//                 <td className="border p-2">
//                   <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => handleReject(r.id)}>Reject</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Outgoing */}
//       <h2 className="text-lg font-semibold mb-2">Outgoing Requests</h2>
//       {outgoing.length === 0 ? (
//         <p className="text-gray-500">No outgoing requests</p>
//       ) : (
//         <table className="w-full border">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">To (Email)</th>
//               <th className="border p-2">Slot Offered</th>
//               <th className="border p-2">Slot Requested</th>
//               <th className="border p-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {outgoing.map(r => (
//               <tr key={r.id} className="bg-green-100">
//                 <td className="border p-2">{r.to}</td>
//                 <td className="border p-2">{r.offered}</td>
//                 <td className="border p-2">{r.requested}</td>
//                 <td className="border p-2">{r.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";

// export default function RequestsPage() {
//   const [incoming, setIncoming] = useState([]);
//   const [outgoing, setOutgoing] = useState([]);

//   useEffect(() => {
//     const incomingReq = JSON.parse(localStorage.getItem("incomingRequests")) || [];
//     const outgoingReq = JSON.parse(localStorage.getItem("outgoingRequests")) || [];
//     setIncoming(incomingReq);
//     setOutgoing(outgoingReq);
//   }, []);

//   const handleAccept = (id) => {
//     const updated = incoming.filter(r => r.id !== id);
//     setIncoming(updated);
//     localStorage.setItem("incomingRequests", JSON.stringify(updated));
//     toast.success("Request Accepted ✅");
//   };

//   const handleReject = (id) => {
//     const updated = incoming.filter(r => r.id !== id);
//     setIncoming(updated);
//     localStorage.setItem("incomingRequests", JSON.stringify(updated));
//     toast.error("Request Rejected ❌");
//   };

//   return (
//     <div className="p-6">

//       <h1 className="text-2xl font-semibold mb-4">Requests</h1>

//       {/* INCOMING */}
//       <h2 className="text-lg font-semibold">Incoming Requests</h2>
//       {incoming.length === 0 ? (
//         <p className="text-gray-500 mb-4">No incoming requests.</p>
//       ) : (
//         <table className="w-full border mb-4">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">From (Email)</th>
//               <th className="border p-2">Slot Requested</th>
//               <th className="border p-2">Time</th>
//               <th className="border p-2">Accept</th>
//               <th className="border p-2">Reject</th>
//             </tr>
//           </thead>
//           <tbody>
//             {incoming.map(r => (
//               <tr key={r.id}>
//                 <td className="border p-2">{r.from}</td>
//                 <td className="border p-2">{r.requested}</td>
//                 <td className="border p-2">{r.time}</td>
//                 <td className="border p-2">
//                   <button className="bg-green-500 text-white px-2 py-1 rounded"
//                     onClick={() => handleAccept(r.id)}>Accept</button>
//                 </td>
//                 <td className="border p-2">
//                   <button className="bg-red-500 text-white px-2 py-1 rounded"
//                     onClick={() => handleReject(r.id)}>Reject</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* OUTGOING */}
//       <h2 className="text-lg font-semibold">Outgoing Requests</h2>
//       {outgoing.length === 0 ? (
//         <p className="text-gray-500">No outgoing requests.</p>
//       ) : (
//         <table className="w-full border">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">To (Email)</th>
//               <th className="border p-2">Slot Requested</th>
//               <th className="border p-2">Time</th>
//               <th className="border p-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {outgoing.map(r => (
//               <tr key={r.id}>
//                 <td className="border p-2">{r.to}</td>
//                 <td className="border p-2">{r.requested}</td>
//                 <td className="border p-2">{r.time}</td>
//                 <td className="border p-2">{r.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";

export default function RequestsPage() {
  const [incoming, setIncoming] = useState([]);
  const [outgoing, setOutgoing] = useState([]);

  const currentUser = typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user") || "null")
    : null;

  const userEmail = currentUser?.email;

  useEffect(() => {
    const allRequests = JSON.parse(localStorage.getItem("swapRequests")) || [];

    setIncoming(allRequests.filter(r => r.to === userEmail));
    setOutgoing(allRequests.filter(r => r.from === userEmail));
  }, []);

  const handleAccept = (id) => {
    alert("✅ Slot Swapped Successfully");
    setIncoming(incoming.filter(r => r.id !== id));
  };

  const handleReject = (id) => {
    alert("❌ Request Rejected");
    setIncoming(incoming.filter(r => r.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Requests</h1>

      {/* Incoming */}
      <h2 className="text-lg font-semibold mb-2">Incoming Requests</h2>
      {incoming.length === 0 ? <p>No incoming requests</p> : (
        <table className="w-full border mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">From</th>
              <th className="border p-2">Slot</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Accept</th>
              <th className="border p-2">Reject</th>
            </tr>
          </thead>
          <tbody>
            {incoming.map(r => (
              <tr key={r.id} className="bg-red-100">
                <td className="border p-2">{r.from}</td>
                <td className="border p-2">{r.offered}</td>
                <td className="border p-2">{r.requested}</td>
                <td className="border p-2">
                  <button className="px-2 py-1 bg-green-600 text-white rounded" onClick={() => handleAccept(r.id)}>Accept</button>
                </td>
                <td className="border p-2">
                  <button className="px-2 py-1 bg-red-600 text-white rounded" onClick={() => handleReject(r.id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Outgoing */}
      <h2 className="text-lg font-semibold mb-2">Outgoing Requests</h2>
      {outgoing.length === 0 ? <p>No outgoing requests</p> : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">To</th>
              <th className="border p-2">Slot</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {outgoing.map(r => (
              <tr key={r.id} className="bg-green-100">
                <td className="border p-2">{r.to}</td>
                <td className="border p-2">{r.offered}</td>
                <td className="border p-2">{r.requested}</td>
                <td className="border p-2">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
