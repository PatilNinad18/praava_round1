"use client";

import { useEffect, useState } from "react";
import { Receipt, CheckSquare, FileText, Moon, Sun, Scale } from "lucide-react";
import FloatingCard from "@/components/FloatingCard";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <main
      className={`
        relative min-h-screen overflow-hidden
        transition-all duration-500
        ${darkMode ? "bg-[#0f1117]" : "bg-[#f3f3f6]"}
      `}
    >
      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`
          absolute right-4 top-4 z-[999]
          sm:right-6 sm:top-6
          lg:right-8 lg:top-8
          flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16
          items-center justify-center
          rounded-full
          transition-all duration-500
          hover:scale-110
          ${
            darkMode
              ? "bg-[#1d2230] shadow-[0_0_35px_rgba(120,119,255,0.35)]"
              : "bg-white shadow-[0_12px_35px_rgba(0,0,0,0.12)]"
          }
        `}
      >
        <div className="relative flex items-center justify-center">
          <Sun
            className={`
              absolute h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-yellow-400
              transition-all duration-500
              ${darkMode ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
            `}
          />
          <Moon
            className={`
              absolute h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-[#8b90ff]
              transition-all duration-500
              ${darkMode ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}
            `}
          />
        </div>
      </button>

      {/* LEFT PILLS — hidden on mobile/tablet */}
      <div
        className={`
          hidden lg:block
          absolute -left-28 top-[330px]
          h-[92px] w-[290px] rounded-full
          -rotate-[12deg]
          transition-all duration-500
          ${darkMode ? "bg-[#1c2335]" : "bg-[#e6ebf7]"}
        `}
      />
      <div
        className={`
          hidden lg:block
          absolute -left-16 top-[440px]
          h-[92px] w-[300px] rounded-full
          transition-all duration-500
          ${darkMode ? "bg-[#1c2335]" : "bg-[#e6ebf7]"}
        `}
      />
      <div
        className={`
          hidden lg:block
          absolute -left-10 top-[555px]
          h-[92px] w-[488px] rounded-full
          transition-all duration-500
          ${darkMode ? "bg-[#1c2335]" : "bg-[#e6ebf7]"}
        `}
      />

      {/* RIGHT PILLS — hidden on mobile/tablet */}
      <div
        className={`
          hidden lg:block
          absolute -right-24 top-[92px]
          h-[92px] w-[300px] rounded-full
          rotate-[10deg]
          transition-all duration-500
          ${darkMode ? "bg-[#1c2335]" : "bg-[#e6ebf7]"}
        `}
      />
      <div
        className={`
          hidden lg:block
          absolute -right-20 top-[210px]
          h-[92px] w-[430px] rounded-full
          transition-all duration-500
          ${darkMode ? "bg-[#1c2335]" : "bg-[#e6ebf7]"}
        `}
      />
      <div
        className={`
          hidden lg:block
          absolute -right-12 top-[320px]
          h-[92px] w-[325px] rounded-full
          transition-all duration-500
          ${darkMode ? "bg-[#1c2335]" : "bg-[#e6ebf7]"}
        `}
      />

      {/* ─────────────────────────────────────────
          MOBILE / TABLET DECORATIVE PILLS
      ───────────────────────────────────────── */}
      {/* top-right accent */}
      <div
        className={`
          lg:hidden
          absolute -right-16 -top-6
          h-[70px] w-[220px] rounded-full
          rotate-[15deg]
          transition-all duration-500
          ${darkMode ? "bg-[#1c2335]" : "bg-[#e6ebf7]"}
        `}
      />
      <div
        className={`
          lg:hidden
          absolute -right-10 top-[60px]
          h-[70px] w-[260px] rounded-full
          rotate-[6deg]
          transition-all duration-500
          ${darkMode ? "bg-[#1c2335]" : "bg-[#e6ebf7]"}
        `}
      />
      {/* bottom-left accent */}
      <div
        className={`
          lg:hidden
          absolute -left-16 bottom-[80px]
          h-[70px] w-[240px] rounded-full
          -rotate-[8deg]
          transition-all duration-500
          ${darkMode ? "bg-[#1c2335]" : "bg-[#e6ebf7]"}
        `}
      />
      <div
        className={`
          lg:hidden
          absolute -left-8 bottom-[160px]
          h-[70px] w-[200px] rounded-full
          transition-all duration-500
          ${darkMode ? "bg-[#1c2335]" : "bg-[#e6ebf7]"}
        `}
      />

      {/* ═══════════════════════════════════════
          DESKTOP HERO (lg and above — unchanged)
      ═══════════════════════════════════════ */}
      <section className="relative mx-auto hidden lg:flex min-h-screen max-w-[1500px] justify-between px-12 pt-[80px]">
        {/* LEFT */}
        <div className="relative z-10 ml-[148px] w-[520px] -mt-[50px]">
          <h1
            className={`
              text-[58px] leading-[1.15] tracking-[-0.04em]
              transition-all duration-500 font-thin
              ${darkMode ? "text-[#9ea2d8]" : "text-[#7277a8]"}
            `}
          >
            A single platform to
            <br />
            <span className="whitespace-nowrap">
              <span className={`font-medium ${darkMode ? "text-[#b4b7ff]" : "text-[#676aa0]"}`}>
                manage
              </span>{" "}
              every part of
            </span>
            <br />
            your{" "}
            <span className={`font-medium ${darkMode ? "text-[#b4b7ff]" : "text-[#676aa0]"}`}>
              legal work
            </span>
          </h1>

          <p
            className={`
              mt-6 max-w-[420px] text-[18px] leading-[1.8]
              transition-all duration-500
              ${darkMode ? "text-[#8d95ff]" : "text-[#5560ff]"}
            `}
          >
            Track matters, coordinate schedules, manage clients, centralize documents, and handle
            communication – all in one system.
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative hidden h-screen flex-1 lg:block">
          <FloatingCard
            color="bg-[#3344ff]"
            rotation="rotate-[10deg]"
            animationClass="float-billing"
            icon={Receipt}
            label="Billing"
            width="w-[435px]"
            height="h-23"
            textSize="text-[30px]"
            iconSize={34}
            className="right-[235px] top-[190px]"
          />
          <FloatingCard
            color="bg-[#e67e22]"
            rotation="-rotate-[11deg]"
            animationClass="float-matters"
            icon={Scale}
            label="Matters"
            width="w-[355px]"
            height="h-23"
            textSize="text-[30px]"
            iconSize={34}
            className="left-[-348px] top-[340px]"
          />
          <FloatingCard
            color="bg-[#2f214e]"
            rotation="rotate-[1deg]"
            animationClass="float-tasks"
            icon={CheckSquare}
            label="Tasks"
            width="w-[355px]"
            height="h-23"
            textColor="text-[#e37b2b]"
            iconColor="#e37b2b"
            textSize="text-[30px]"
            iconSize={34}
            className="bottom-[150px] right-[530px]"
          />
          <FloatingCard
            color="bg-[#2f214e]"
            rotation="-rotate-[7deg]"
            animationClass="float-documents"
            icon={FileText}
            label="Documents"
            width="w-[480px]"
            height="h-23"
            textColor="text-[#e37b2b]"
            iconColor="#e37b2b"
            textSize="text-[30px]"
            iconSize={34}
            className="bottom-[180px] right-[3px]"
          />

          {/* PORTAL CARD */}
          <div className="absolute right-[315px] top-[317px] rotate-[4deg] z-30 portal-animation">
            <div
              className={`
                flex w-[385px] items-center gap-4
                rounded-full px-5 py-2
                transition-all duration-500 hover:scale-[1.03]
                ${darkMode ? "bg-[#5f63c7]" : "bg-[#a8a7f1]"}
              `}
              style={{ boxShadow: "0 18px 40px rgba(0,0,0,0.12)" }}
            >
              <div className="h-12 w-[4px] rounded-full bg-[#ff8b2b]" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5c9ab] text-[22px]">
                🧑🏾
              </div>
              <div>
                <h3 className={`text-[15px] ${darkMode ? "text-white" : "text-[#2d2d45]"}`}>
                  John Doe - Portal
                </h3>
                <p
                  className={`mt-1 max-w-[220px] text-[12px] leading-[1.4] ${
                    darkMode ? "text-[#d9dcff]" : "text-[#666689]"
                  }`}
                >
                  Hey! Could you please review a document for me?
                </p>
                <span
                  className={`mt-2 block text-[11px] ${
                    darkMode ? "text-[#d7d9ff]" : "text-[#7070a7]"
                  }`}
                >
                  MAT-2233 · 2h ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MOBILE / TABLET LAYOUT (below lg)
      ═══════════════════════════════════════ */}
      <section className="lg:hidden relative flex flex-col min-h-screen px-5 sm:px-10 pt-20 pb-12">

        {/* HERO TEXT */}
        <div className="relative z-10 mt-6 sm:mt-10">
          <h1
            className={`
              text-[36px] sm:text-[48px] md:text-[54px]
              leading-[1.15] tracking-[-0.04em]
              transition-all duration-500 font-thin
              ${darkMode ? "text-[#9ea2d8]" : "text-[#7277a8]"}
            `}
          >
            A single platform to
            <br />
            <span className="whitespace-nowrap">
              <span className={`font-medium ${darkMode ? "text-[#b4b7ff]" : "text-[#676aa0]"}`}>
                manage
              </span>{" "}
              every part of
            </span>
            <br />
            your{" "}
            <span className={`font-medium ${darkMode ? "text-[#b4b7ff]" : "text-[#676aa0]"}`}>
              legal work
            </span>
          </h1>

          <p
            className={`
              mt-5 max-w-[480px]
              text-[15px] sm:text-[17px] leading-[1.8]
              transition-all duration-500
              ${darkMode ? "text-[#8d95ff]" : "text-[#5560ff]"}
            `}
          >
            Track matters, coordinate schedules, manage clients, centralize documents, and handle
            communication – all in one system.
          </p>
        </div>

        {/* PORTAL CARD — shown below headline on mobile */}
        <div className="relative z-10 mt-10 sm:mt-12 portal-animation">
          <div
            className={`
              flex w-full max-w-[400px] items-center gap-4
              rounded-full px-5 py-2
              transition-all duration-500
              ${darkMode ? "bg-[#5f63c7]" : "bg-[#a8a7f1]"}
            `}
            style={{ boxShadow: "0 18px 40px rgba(0,0,0,0.12)" }}
          >
            <div className="h-12 w-[4px] rounded-full bg-[#ff8b2b] shrink-0" />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5c9ab] text-[22px] shrink-0">
              🧑🏾
            </div>
            <div className="min-w-0">
              <h3 className={`text-[14px] sm:text-[15px] ${darkMode ? "text-white" : "text-[#2d2d45]"}`}>
                John Doe - Portal
              </h3>
              <p
                className={`mt-1 text-[11px] sm:text-[12px] leading-[1.4] truncate ${
                  darkMode ? "text-[#d9dcff]" : "text-[#666689]"
                }`}
              >
                Hey! Could you please review a document for me?
              </p>
              <span
                className={`mt-2 block text-[10px] sm:text-[11px] ${
                  darkMode ? "text-[#d7d9ff]" : "text-[#7070a7]"
                }`}
              >
                MAT-2233 · 2h ago
              </span>
            </div>
          </div>
        </div>

        {/* FEATURE CARDS GRID */}
        <div className="relative z-10 mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Billing */}
          <MobileFeatureCard
            color="bg-[#3344ff]"
            icon={Receipt}
            label="Billing"
            animationClass="float-billing"
            darkMode={darkMode}
          />
          {/* Matters */}
          <MobileFeatureCard
            color="bg-[#e67e22]"
            icon={Scale}
            label="Matters"
            animationClass="float-matters"
            darkMode={darkMode}
          />
          {/* Tasks */}
          <MobileFeatureCard
            color="bg-[#2f214e]"
            icon={CheckSquare}
            label="Tasks"
            animationClass="float-tasks"
            textColor="text-[#e37b2b]"
            iconColor="#e37b2b"
            darkMode={darkMode}
          />
          {/* Documents */}
          <MobileFeatureCard
            color="bg-[#2f214e]"
            icon={FileText}
            label="Documents"
            animationClass="float-documents"
            textColor="text-[#e37b2b]"
            iconColor="#e37b2b"
            darkMode={darkMode}
          />
        </div>
      </section>
    </main>
  );
}

/* ─────────────────────────────────────────────────
   Mobile Feature Card — pill-style, full-width
───────────────────────────────────────────────── */
function MobileFeatureCard({
  color,
  icon: Icon,
  label,
  animationClass,
  textColor = "text-white",
  iconColor = "#ffffff",
}) {
  return (
    <div className={`${animationClass}`}>
      <div
        className={`
          flex items-center gap-4
          rounded-full px-6 py-4 w-full
          transition-all duration-300 hover:scale-[1.03]
          shadow-[0_12px_30px_rgba(0,0,0,0.12)]
          ${color}
        `}
      >
        <div
          className="
            flex h-[50px] w-[50px] shrink-0
            items-center justify-center
            rounded-full
            border border-white/30
            bg-white/10
          "
        >
          <Icon size={26} strokeWidth={2.4} style={{ color: iconColor }} />
        </div>
        <span className={`text-[22px] sm:text-[24px] font-semibold tracking-[-0.03em] ${textColor}`}>
          {label}
        </span>
      </div>
    </div>
  );
}
