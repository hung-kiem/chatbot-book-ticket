"use client";

interface FlightResult {
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  duration: string;
  aircraft: string;
  economyPrice: string;
  businessPrice: string;
}

interface FlightResultsProps {
  from: string;
  to: string;
  date: string;
  flights: FlightResult[];
}

export function FlightResults({ from, to, date, flights }: FlightResultsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-6xl mx-auto my-4">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
            ✈
          </div>
          <h1 className="text-xl font-semibold text-gray-800">
            Chuyến bay từ {from} đến {to}
          </h1>
        </div>
        <div className="bg-blue-600 text-white p-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-red-500">📍</span>
            {from} → {to}
          </div>
          <div className="w-px h-5 bg-white bg-opacity-30 mx-4"></div>
          <div className="font-medium">Ngày: {date}</div>
        </div>
      </div>
      
      {/* Flight Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="px-3 py-4 text-left font-semibold text-sm">HÃNG BAY</th>
              <th className="px-3 py-4 text-left font-semibold text-sm">GIỜ KHỞI HÀNH</th>
              <th className="px-3 py-4 text-left font-semibold text-sm">GIỜ ĐẾN</th>
              <th className="px-3 py-4 text-left font-semibold text-sm">MÁY BAY</th>
              <th className="px-3 py-4 text-left font-semibold text-sm">GIÁ VÉ</th>
              <th className="px-3 py-4 text-left font-semibold text-sm">CHỌN</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr key={index} className="hover:bg-gray-50 border-b border-gray-200">
                <td className="px-3 py-5">
                  <div className="font-semibold text-gray-800 mb-1">{flight.airline}</div>
                  <div className="text-sm text-gray-500">{flight.flightNumber}</div>
                </td>
                <td className="px-3 py-5">
                  <div className="font-semibold text-gray-800 mb-1">{flight.departure}</div>
                  <div className="text-sm text-gray-500">Thời gian: {flight.duration}</div>
                </td>
                <td className="px-3 py-5">
                  <div className="font-semibold text-gray-800">{flight.arrival}</div>
                </td>
                <td className="px-3 py-5">
                  <div className="font-medium text-gray-800">{flight.aircraft}</div>
                </td>
                <td className="px-3 py-5">
                  <div className="text-green-600 font-semibold mb-1">{flight.economyPrice}</div>
                  <div className="text-sm text-gray-500">{flight.businessPrice}</div>
                </td>
                <td className="px-3 py-5">
                  <button 
                    onClick={() => {
                      // Giả lập action đăng nhập vào app đặt vé máy bay
                      console.log(`Đang chuyển đến trang đặt vé cho chuyến bay ${flight.flightNumber}...`);
                      // Mở tab mới và redirect sang Google
                      window.open('https://www.google.com', '_blank');
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold text-sm transition-colors cursor-pointer"
                  >
                    CHỌN
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 