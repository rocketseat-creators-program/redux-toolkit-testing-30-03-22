export function HeartIcon({
  fill = "white",
  stroke = "rgb(34,34,34)",
}: {
  fill: string;
  stroke: string;
}) {
  return (
    <svg
      aria-hidden="true"
      role="presentation"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "24px",
        height: "24px",
        strokeWidth: 2,
        display: "block",
        overflow: "visible",
        fill: fill,
        stroke: stroke,
      }}
    >
      <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
    </svg>
  );
}
