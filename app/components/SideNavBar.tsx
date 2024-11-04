import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      className={`bg-greenTeal h-[1040.680] p-5 transition-all duration-300 w-30 hover:w-64 group`}
    >
      <div className="flex flex-col space-y-4 text-white">
        <Link href="/" passHref>
          <span className="flex items-center cursor-pointer">
            <svg
              width="24px"
              height="24px"
              viewBox="-0.5 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:mr-2"
            >
              <path 
                d="M12.835 9.81001L9.88499 6.18001C9.79499 6.06001 9.645 6 9.495 6H2.995C2.715 6 2.495 6.22 2.495 6.5V9V18.5C2.495 18.78 2.715 19 2.995 19H20.995C21.275 19 21.495 18.78 21.495 18.5V10.5C21.495 10.22 21.275 10 20.995 10H13.215C13.075 9.99 12.925 9.92001 12.835 9.81001Z" 
                fill="white"
              />
            </svg>
            <span className="w-0 opacity-0 group-hover:w-fit group-hover:opacity-100 transition-opacity">Home</span>
          </span>
        </Link>
        <Link href="/favorites" passHref>
          <span className="flex items-center cursor-pointer">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:mr-2"
            >
              <path 
                d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" 
                fill="white"
              />
            </svg>
            <span className="w-0 opacity-0 group-hover:w-fit group-hover:opacity-100 transition-opacity">Favorites</span>
          </span>
        </Link>
        <Link href="/watch-later" passHref>
          <span className="flex items-center cursor-pointer">
            <svg
              fill="none"
              height="17px"
              width="24px"
              viewBox="0 0 485 485"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:mr-2"
              transform="scale(-1, 1)"
            >
              <g>
                <g>
                  <path
                    fill="white"
                    d="M242.5,485c-64.774,0-125.671-25.225-171.474-71.026C25.225,368.171,0,307.274,0,242.5
                    S25.225,116.829,71.026,71.026C116.829,25.225,177.726,0,242.5,0s125.671,25.225,171.474,71.026
                    C459.775,116.829,485,177.726,485,242.5s-25.225,125.671-71.026,171.474C368.171,459.775,307.274,485,242.5,485z"
                  />
                  <path
                    d="M242.5,30C125.327,30,30,125.327,30,242.5S125.327,455,242.5,455S455,359.673,455,242.5S359.673,30,242.5,30z"
                  />
                </g>
                <g>
                  <polygon
                    fill="#20a48e"
                    points="257.5,257.244 85.003,257.244 85.003,227.244 227.5,227.244 227.5,85 257.5,85"
                  />
                </g>
              </g>
            </svg>
            <span className="w-0 opacity-0 group-hover:w-fit group-hover:opacity-100 transition-opacity">Watch Later</span>
          </span>
        </Link>
        <div className="w-0 bg-Teal text-darkBlue p-4 mt-4 rounded-lg max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:w-52 group-hover:opacity-100 transition-all">
          <h2 className="text-lg font-semibold">Latest Activities</h2>
          <p>This is a placeholder for the activity feed.</p>
        </div>
      </div>
    </div>
  );
}