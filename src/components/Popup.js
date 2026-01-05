import { useEffect } from "react";
import { createPortal } from "react-dom";

const Popup = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const el = document.createElement("div");
    el.id = "popup-root";
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center ">
      {/* Fond semi-transparent avec flou */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Contenu du popup */}
      <div className="relative z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-3xl shadow-xl dark:shadow-blue-500/10 border border-gray-100 dark:border-gray-800 p-6 w-[90%] max-w-md">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-blue-800 dark:hover:text-blue-600 font-bold"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Popup;
