import { HeartIcon } from "../../components/HeartIcon";

interface ItemProps {
  image: string;
  title: string;
  price: number;
  name: string;
  isFavorite: boolean;
  onCLickHandle: () => void;
}

export function Item({
  image,
  title,
  price,
  name,
  onCLickHandle,
  isFavorite,
}: ItemProps) {
  return (
    <div className="py-2 mx-auto ">
      <div className="p-4 bg-white rounded-lg  md:flex">
        <div className="overflow-hidden rounded-lg">
          <img
            data-testid="location-image"
            alt="item"
            src={image}
            className="object-cover w-full h-48 md:h-full"
          />
        </div>
        <div className="flex-col pl-2 mt-8 md:flex md:mt-0 md:ml-8 md:w-3/5 description">
          <div className="md:flex">
            <div className="md:flex-1">
              <p
                data-testid="location-name"
                className="text-sm font-light text-gray-700"
              >
                {name}
              </p>
              <p data-testid="location-title" className="text-lg font-normal">
                {title}
              </p>
            </div>
            <div data-testid="heart-button" onClick={onCLickHandle}>
              <HeartIcon
                fill={isFavorite ? "#f91880" : "white"}
                stroke={isFavorite ? "none" : "rgb(34, 34, 34)"}
              />
            </div>
          </div>
          <div className="my-2 w-10 border-t border-gray-400" />
          <div className="text-sm font-light text-gray-700">
            <span>3 guests</span>
            <span>·</span>
            <span>1 bedroom</span>
            <span>·</span>
            <span>1 bed</span>
            <span>·</span>
            <span>1 bathroom</span>
          </div>

          <div className="flex-grow justify-between items-end md:flex">
            <div className="flex items-center mr-2 text-sm ratings">
              <span className="mr-1">
                <svg
                  viewBox="0 0 1000 1000"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    height: "14px",
                    width: "14px",
                    fill: "currentcolor",
                  }}
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
                </svg>
              </span>
              <span className="font-bold">4.76</span>
              <span className="text-gray-700"> (496)</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-700">Superhost</span>
            </div>
            <div className="flex-col md:flex md:ml-auto md:text-right prices">
              <div>
                <span
                  data-testid="location-price"
                  className="text-xl font-bold"
                >
                  {price}
                </span>
                <span className="text-xl">/night</span>
              </div>
              <div className="text-sm text-gray-700 underline">{price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
