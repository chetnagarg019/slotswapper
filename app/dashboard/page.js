"use client";

import { useState } from "react";
import { eventsData } from "../data/tableData";

export default function DashboardPage() {
  const [events, setEvents] = useState(eventsData);

  // Modal control
  const [showModal, setShowModal] = useState(false);
  const [editEvent, setEditEvent] = useState(null);

  // Edit button
  const handleEdit = (event) => {
    setEditEvent(event);
    setShowModal(true);
  };

  // Save changes from modal
  const handleSave = () => {
    setEvents(events.map(evt => evt.id === editEvent.id ? editEvent : evt));
    setShowModal(false);
  };

  // Delete row
  const handleDelete = (id) => {
    setEvents(events.filter(evt => evt.id !== id));
  };

  // Make Swappable → Status change + color
  const handleSwap = (event) => {
    const updated = events.map(evt => 
      evt.id === event.id ? { ...evt, status: "SWAPPABLE" } : evt
    );
    setEvents(updated);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2 text-left">Title</th>
            <th className="border p-2 text-left">Start Time</th>
            <th className="border p-2 text-left">End Time</th>
            <th className="border p-2 text-left">Status</th>
            <th className="border p-2 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event) => (
            <tr
              key={event.id}
              className={
                event.status === "BUSY"
                  ? "bg-red-100"
                  : event.status === "FREE"
                  ? "bg-green-100"
                  : "bg-yellow-100" // SWAPPABLE
              }
            >
              <td className="border p-2">{event.title}</td>
              <td className="border p-2">{event.start}</td>
              <td className="border p-2">{event.end}</td>
              <td className="border p-2">{event.status}</td>
              <td className="border p-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleEdit(event)}
                    className="px-2 py-1 bg-blue-500 text-white rounded text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(event.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded text-sm"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleSwap(event)}
                    className="px-2 py-1 bg-green-600 text-white rounded text-sm"
                  >
                    Make Swappable
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {showModal && editEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow w-80">
            <h2 className="text-lg font-semibold mb-3">Edit Event</h2>

            <input
              className="border p-2 w-full mb-2"
              value={editEvent.title}
              onChange={(e) => setEditEvent({ ...editEvent, title: e.target.value })}
            />

            <input
              className="border p-2 w-full mb-2"
              value={editEvent.start}
              onChange={(e) => setEditEvent({ ...editEvent, start: e.target.value })}
            />

            <input
              className="border p-2 w-full mb-2"
              value={editEvent.end}
              onChange={(e) => setEditEvent({ ...editEvent, end: e.target.value })}
            />

            <select
              className="border p-2 w-full mb-4"
              value={editEvent.status}
              onChange={(e) => setEditEvent({ ...editEvent, status: e.target.value })}
            >
              <option>BUSY</option>
              <option>FREE</option>
              <option>SWAPPABLE</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                className="px-3 py-1 bg-gray-400 text-white rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 bg-blue-600 text-white rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
