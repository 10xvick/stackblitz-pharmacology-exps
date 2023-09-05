export default function Main() {
  return (
    <div className="container bg-gray-500 h-screen text-blue-100 p-1">
      <div className="text-center">EXP</div>
      <div className="rounded-1 bg-gray-700 flex flex-row">
        <div className="w-1/2">abc</div>
        <div className="w-1/2">abc</div>
      </div>
      <div className="bg-gray-700 mt-1 flex">
        {Array(5).fill(
          <div className="bg-gray-500 p-1 w-1/5 border border-gray-600">
            {' '}
            X{' '}
          </div>
        )}
      </div>
    </div>
  );
}
