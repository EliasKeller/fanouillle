export default function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className="flex px-6 py-3 bg-purple-700 text-white font-medium rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg hover:ring-2 ring-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 transform hover:scale-102"
      >
        {children}
      </button>
    );
  }
  