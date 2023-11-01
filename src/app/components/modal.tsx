function Modal({ show, message, onClose }) {
    if (!show) {
      return null;
    }
  
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black">
        <div className="bg-white rounded-lg shadow-md w-3/4 sm:w-1/2 md:w-1/3 p-4">
          <div className="flex justify-between bg-red-700 text-white p-2 rounded-t-lg">
            <span>Mensaje</span>
            <button className="text-white" onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;