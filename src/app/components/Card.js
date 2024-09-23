export default function Card({ header, children }) {
    return (
        <div className="max-w-sm p-6 bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-xl hover:ring-2 ring-purple-500 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 border-b border-purple-500 pb-2">
                {header}
            </h2>
            <div className="text-base">
                {children}
            </div>
        </div>
    );
}
