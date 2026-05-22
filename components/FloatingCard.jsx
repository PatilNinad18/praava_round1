"use client";

export default function FloatingCard({
  color,
  rotation,
  icon: Icon,
  label,
  className = "",
  animationClass = "",

  /* CUSTOMIZATION */
  width = "w-[420px]",
  height = "h-[110px]",

  textColor = "text-white",
  iconColor = "#ffffff",

  textSize = "text-[30px]",
  iconSize = 34,
}) {
  return (
    <div className={`absolute ${animationClass} ${className}`}>
      <div
        className={`
          flex items-center gap-5
          rounded-full px-8
          transition-all duration-300
          hover:scale-[1.04]
          shadow-[0_18px_45px_rgba(0,0,0,0.12)]

          ${width}
          ${height}

          ${rotation}
          ${color}
        `}
      >
        {/* ICON */}
        <div
          className="
            flex h-[60px] w-[60px]
            items-center justify-center
            rounded-full
            border border-white/30
            bg-white/10
            shrink-0
          "
        >
          <Icon size={iconSize} strokeWidth={2.4} style={{ color: iconColor }} />
        </div>

        {/* LABEL */}
        <span
          className={`
            ${textSize}
            font-semibold
            tracking-[-0.03em]
            ${textColor}
          `}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
