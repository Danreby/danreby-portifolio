import React from "react";

export default function SendButton({ state = "idle", label = "Send" }) {
  const isSending = state === "sending";
  const isSuccess = state === "success";
  const isError = state === "error";

  return (
    <button
      type="submit"
      disabled={isSending}
      aria-live="polite"
      className={`inline-flex items-center justify-center gap-2
        ${isSuccess ? "bg-green-500 hover:bg-green-600" : isError ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"}
        text-white px-6 py-2 rounded font-medium transition-transform transform
        hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-wait`}
    >
      {isSending && (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.2" />
          <path d="M22 12a10 10 0 00-6-9.2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )}

      {isSuccess && (
        <svg className="h-5 w-5 transform transition-all duration-300" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}

      {isError && (
        <svg className="h-5 w-5 transform transition-all duration-300" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}

      <span className="whitespace-nowrap">
        {isSuccess ? (label === "Send" ? "Sent" : "Enviado") : isError ? (label === "Send" ? "Error" : "Erro") : label}
      </span>
    </button>
  );
}
