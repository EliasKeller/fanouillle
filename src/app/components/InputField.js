export default function InputField({ type = "text", placeholder, onChange }) {
    return (
        <div className="mb-4">
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full p-3 bg-gray-700 text-white rounded-lg shadow-lg border border-gray-600 focus:ring-2 ring-purple-500 focus:outline-none focus:shadow-xl transition-all duration-300"
            />
        </div>
    );
}
