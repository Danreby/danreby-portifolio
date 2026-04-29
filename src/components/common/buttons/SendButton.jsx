import React from "react";

export default function SendButton({ state = "idle", label = "Send" }) {
  const isSending = state === "sending";
  const isSuccess = state === "success";
  const isError = state === "error";

  const bgStyle = isSuccess
    ? "bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
    : isError
    ? "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]"
    : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 hover:shadow-[0_8px_25px_rgba(59,130,246,0.5)]";

  return (
    <button
      type="submit"
      disabled={isSending}
      aria-live="polite"
      className={`inline-flex items-center justify-center gap-2 min-w-[130px]
        ${bgStyle}
        text-white px-8 py-3 rounded-xl font-semibold tracking-wide transition-all duration-300
        hover:-translate-y-1 disabled:opacity-60 disabled:cursor-wait disabled:transform-none`}
    >
      {isSending && (
        <svg className="animate-spin h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.2" />
          <path d="M22 12a10 10 0 00-6-9.2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )}
      {isSuccess && (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {isError && (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      <span className="whitespace-nowrap">
        {isSuccess ? (label === "Send" ? "Sent!" : "Enviado!") : isError ? (label === "Send" ? "Error" : "Erro") : label}
      </span>
    </button>
  );
}

