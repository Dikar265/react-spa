import { calendar } from "../../Props/calendar";

export default function Calendar() {
  return (
    <div className="mx-auto w-full max-w-lg p-6  rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold text-amber-400 mb-4">
        Our Schedule
      </h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-amber-500 text-gray-900">
            <th className="p-3 text-center">Day</th>
            <th className="p-3 text-center">Time</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((item, index) => (
            <tr key={index} className="border-b border-gray-600">
              <td className="p-3 capitalize text-center">{item.day}</td>
              <td className="p-3 text-center">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
