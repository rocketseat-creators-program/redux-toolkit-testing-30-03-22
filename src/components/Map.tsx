import BGimage from "../images/GoogleMapTA.webp";

export function Map() {
  return (
    <div className="flex flex-1">
      <img
        src={BGimage}
        alt="googlemap"
        className="w-full h-screen object-cover"
      />
    </div>
  );
}
