export default function SVG({ className, iconSrc, onClick }) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        maskImage: `url(${iconSrc})`,
        WebkitMaskImage: `url(${iconSrc})`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}
