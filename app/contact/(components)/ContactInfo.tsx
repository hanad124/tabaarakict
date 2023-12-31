const ContactInfo = () => {
  return (
    <div className="md:w-2/5 p-4 bg-custom_primary text-background rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-4xl font-semibold mb-4">Get in touch</h2>
          {/* Email */}
          <div className="group flex items-center gap-5">
            <div className=" group-hover:bg-background w-14 h-14 rounded-full bg-background/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M28.001 7L16.001 18L4.00098 7H28.001Z"
                  fill="white"
                />
                <path
                  d="M28 7L16 18L4 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-custom_primary"
                />
                <path
                  d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-custom_primary"
                />
                <path
                  d="M13.8184 16L4.30859 24.7174"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-custom_primary"
                />
                <path
                  d="M27.6916 24.7174L18.1816 15.9999"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-custom_primary"
                />
              </svg>
            </div>
            <div className="flex flex-col items-cenyter">
              <p className="text-background/40 font-light">EMAIL US</p>
              <p className="font-light text">info@tabaarakict.com</p>
            </div>
          </div>
          {/* Phone */}
          <div className="group flex items-center gap-5">
            <div className="group-hover:bg-background w-14 h-14 rounded-full bg-background/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M11.5595 15.6019C12.5968 17.7226 14.3158 19.4338 16.4412 20.4614C16.5967 20.5351 16.7687 20.567 16.9403 20.554C17.1119 20.541 17.2771 20.4836 17.4198 20.3874L20.5492 18.3006C20.6877 18.2083 20.8469 18.152 21.0126 18.1368C21.1782 18.1215 21.3451 18.1479 21.498 18.2134L27.3526 20.7225C27.5515 20.807 27.7175 20.9538 27.8257 21.1409C27.9339 21.328 27.9783 21.5451 27.9524 21.7596C27.7673 23.2076 27.0608 24.5385 25.9652 25.5031C24.8695 26.4678 23.4598 26.9999 22 27C17.4913 27 13.1673 25.2089 9.97919 22.0208C6.79107 18.8327 5 14.5087 5 10C5.00008 8.54022 5.53224 7.13052 6.49685 6.03485C7.46146 4.93918 8.79237 4.23267 10.2404 4.04763C10.4549 4.02167 10.672 4.06612 10.8591 4.1743C11.0461 4.28248 11.193 4.44852 11.2775 4.6474L13.7888 10.5071C13.8537 10.6587 13.8802 10.824 13.8658 10.9883C13.8514 11.1525 13.7967 11.3107 13.7064 11.4487L11.6268 14.6261C11.5322 14.7691 11.4762 14.9341 11.4644 15.1051C11.4526 15.2762 11.4854 15.4473 11.5595 15.6019V15.6019Z"
                  fill="white"
                  className="group-hover:fill-custom_primary"
                />
                <path
                  d="M11.5595 15.6019C12.5968 17.7226 14.3158 19.4338 16.4412 20.4614C16.5967 20.5351 16.7687 20.567 16.9403 20.554C17.1119 20.541 17.2771 20.4836 17.4198 20.3874L20.5492 18.3006C20.6877 18.2083 20.8469 18.152 21.0126 18.1368C21.1782 18.1215 21.3451 18.1479 21.498 18.2134L27.3526 20.7225C27.5515 20.807 27.7175 20.9538 27.8257 21.1409C27.9339 21.328 27.9783 21.5451 27.9524 21.7596C27.7673 23.2076 27.0608 24.5385 25.9652 25.5031C24.8695 26.4678 23.4598 26.9999 22 27C17.4913 27 13.1673 25.2089 9.97919 22.0208C6.79107 18.8327 5 14.5087 5 10C5.00008 8.54022 5.53224 7.13052 6.49685 6.03485C7.46146 4.93918 8.79237 4.23267 10.2404 4.04763C10.4549 4.02167 10.672 4.06612 10.8591 4.1743C11.0461 4.28248 11.193 4.44852 11.2775 4.6474L13.7888 10.5071C13.8537 10.6587 13.8802 10.824 13.8658 10.9883C13.8514 11.1525 13.7967 11.3107 13.7064 11.4487L11.6268 14.6261C11.5322 14.7691 11.4762 14.9341 11.4644 15.1051C11.4526 15.2762 11.4854 15.4473 11.5595 15.6019V15.6019Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-custom_primary"
                />
                <path
                  d="M19.9268 5C21.622 5.45592 23.1677 6.34928 24.409 7.59059C25.6503 8.8319 26.5437 10.3776 26.9996 12.0728"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-custom_primary"
                />
                <path
                  d="M18.8916 8.86469C19.9087 9.13824 20.8362 9.67425 21.5809 10.419C22.3257 11.1638 22.8617 12.0912 23.1353 13.1084"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-custom_primary"
                />
              </svg>
            </div>
            <div className="flex flex-col items-cenyter">
              <p className="text-background/40 font-light">PHONE NUMBER</p>
              <p className="font-light">+252614488101</p>
            </div>
          </div>

          {/* Address */}
          <div className="group flex items-center gap-5">
            <div className="group-hover:bg-background w-14 h-14 rounded-full bg-background/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M16 3C13.3478 3.00001 10.8043 4.05358 8.92894 5.92894C7.05358 7.8043 6.00001 10.3478 6 13C6 22 16 29 16 29C16 29 26 22 26 13C26 10.3478 24.9464 7.8043 23.0711 5.92894C21.1957 4.05358 18.6522 3.00001 16 3ZM16 17C15.2089 17 14.4355 16.7654 13.7777 16.3259C13.1199 15.8864 12.6072 15.2616 12.3045 14.5307C12.0017 13.7998 11.9225 12.9956 12.0769 12.2196C12.2312 11.4437 12.6122 10.731 13.1716 10.1716C13.731 9.61216 14.4437 9.2312 15.2196 9.07686C15.9956 8.92252 16.7998 9.00173 17.5307 9.30448C18.2616 9.60723 18.8864 10.1199 19.3259 10.7777C19.7654 11.4355 20 12.2089 20 13C20 14.0609 19.5786 15.0783 18.8284 15.8284C18.0783 16.5786 17.0609 17 16 17V17Z"
                  fill="white"
                  className="group-hover:fill-custom_primary"
                />
                <path
                  d="M7 29H25"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-custom_primary"
                />
                <path
                  d="M16 17C18.2091 17 20 15.2091 20 13C20 10.7909 18.2091 9 16 9C13.7909 9 12 10.7909 12 13C12 15.2091 13.7909 17 16 17Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-custom_primary"
                />
                <path
                  d="M26 13C26 22 16 29 16 29C16 29 6 22 6 13C6 10.3478 7.05357 7.8043 8.92893 5.92893C10.8043 4.05357 13.3478 3 16 3C18.6522 3 21.1957 4.05357 23.0711 5.92893C24.9464 7.8043 26 10.3478 26 13V13Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-custom_primary"
                />
              </svg>
            </div>
            <div className="flex flex-col items-cenyter">
              <p className="text-background/40 font-light">28MC+844</p>
              <p className="font-light">Makkah Almukarramah Ave, Mogadishu</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2 mt-8">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="2"
                viewBox="0 0 34 2"
                fill="none"
              >
                <path
                  d="M1 1H33"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <p>Connect with us:</p>
          </div>
          <div className="flex items-center gap-2">
            {/* facebook */}
            <div className="flex items-center gap-2">
              <div className="group hover:bg-background flex justify-center items-center w-10 h-10 rounded-lg bg-background/10 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                >
                  <path
                    d="M7.54918 20V10.8777H10.6099L11.0691 7.32156H7.54918V5.05147C7.54918 4.0222 7.83383 3.32076 9.31147 3.32076L11.193 3.31999V0.13923C10.8676 0.0969453 9.75069 0 8.4507 0C5.7361 0 3.87764 1.65697 3.87764 4.69927V7.32156H0.807617V10.8777H3.87764V20H7.54918Z"
                    fill="white"
                    className="group-hover:fill-custom_primary"
                  />
                </svg>
              </div>
            </div>
            {/* Twitter */}
            <div className="flex items-center gap-2">
              <div className="group hover:bg-background flex justify-center items-center w-10 h-10 rounded-lg bg-background/10 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_969_1125)">
                    <path
                      d="M20 3.79875C19.2563 4.125 18.4637 4.34125 17.6375 4.44625C18.4875 3.93875 19.1363 3.14125 19.4412 2.18C18.6488 2.6525 17.7738 2.98625 16.8412 3.1725C16.0887 2.37125 15.0162 1.875 13.8462 1.875C11.5763 1.875 9.74875 3.7175 9.74875 5.97625C9.74875 6.30125 9.77625 6.61375 9.84375 6.91125C6.435 6.745 3.41875 5.11125 1.3925 2.6225C1.03875 3.23625 0.83125 3.93875 0.83125 4.695C0.83125 6.115 1.5625 7.37375 2.6525 8.1025C1.99375 8.09 1.3475 7.89875 0.8 7.5975C0.8 7.61 0.8 7.62625 0.8 7.6425C0.8 9.635 2.22125 11.29 4.085 11.6712C3.75125 11.7625 3.3875 11.8062 3.01 11.8062C2.7475 11.8062 2.4825 11.7913 2.23375 11.7362C2.765 13.36 4.2725 14.5538 6.065 14.5925C4.67 15.6838 2.89875 16.3412 0.98125 16.3412C0.645 16.3412 0.3225 16.3263 0 16.285C1.81625 17.4563 3.96875 18.125 6.29 18.125C13.835 18.125 17.96 11.875 17.96 6.4575C17.96 6.27625 17.9538 6.10125 17.945 5.9275C18.7588 5.35 19.4425 4.62875 20 3.79875Z"
                      fill="white"
                      className="group-hover:fill-custom_primary"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_969_1125">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center gap-2">
              <div className="group hover:bg-background flex justify-center items-center w-10 h-10 rounded-lg bg-background/10 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_969_998)">
                    <path
                      d="M19.9951 20.0001V19.9993H20.0001V12.6643C20.0001 9.07593 19.2276 6.31177 15.0326 6.31177C13.0159 6.31177 11.6626 7.41843 11.1101 8.4676H11.0517V6.64677H7.07422V19.9993H11.2159V13.3876C11.2159 11.6468 11.5459 9.96343 13.7017 9.96343C15.8259 9.96343 15.8576 11.9501 15.8576 13.4993V20.0001H19.9951Z"
                      fill="white"
                      className="group-hover:fill-custom_primary"
                    />
                    <path
                      d="M0.330078 6.64746H4.47675V20H0.330078V6.64746Z"
                      fill="white"
                      className="group-hover:fill-custom_primary"
                    />
                    <path
                      d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z"
                      fill="white"
                      className="group-hover:fill-custom_primary"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_969_998">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            {/* Instagram */}
            <div className="flex items-center gap-2">
              <div className="group hover:bg-background flex justify-center items-center w-10 h-10 rounded-lg bg-background/10 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M19.9804 5.88005C19.9336 4.81738 19.7617 4.0868 19.5156 3.45374C19.2616 2.78176 18.8709 2.18014 18.359 1.68002C17.8589 1.1721 17.2533 0.777435 16.5891 0.527447C15.9524 0.281274 15.2256 0.109427 14.163 0.0625732C13.0923 0.0117516 12.7525 0 10.0371 0C7.32172 0 6.98185 0.0117516 5.9152 0.0586052C4.85253 0.105459 4.12195 0.277459 3.48904 0.523479C2.81692 0.777435 2.2153 1.16814 1.71517 1.68002C1.20726 2.18014 0.812742 2.78573 0.562602 3.44992C0.31643 4.0868 0.144583 4.81341 0.0977294 5.87609C0.0469078 6.9467 0.0351562 7.28658 0.0351562 10.002C0.0351562 12.7173 0.0469078 13.0572 0.0937614 14.1239C0.140615 15.1865 0.312615 15.9171 0.558787 16.5502C0.812742 17.2221 1.20726 17.8238 1.71517 18.3239C2.2153 18.8318 2.82088 19.2265 3.48507 19.4765C4.12195 19.7226 4.84856 19.8945 5.91139 19.9413C6.97788 19.9883 7.31791 19.9999 10.0333 19.9999C12.7486 19.9999 13.0885 19.9883 14.1552 19.9413C15.2178 19.8945 15.9484 19.7226 16.5813 19.4765C17.9254 18.9568 18.9881 17.8941 19.5078 16.5502C19.7538 15.9133 19.9258 15.1865 19.9726 14.1239C20.0195 13.0572 20.0312 12.7173 20.0312 10.002C20.0312 7.28658 20.0273 6.9467 19.9804 5.88005ZM18.1794 14.0457C18.1364 15.0225 17.9723 15.5499 17.8355 15.9015C17.4995 16.7728 16.808 17.4643 15.9367 17.8004C15.585 17.9372 15.0538 18.1012 14.0808 18.1441C13.026 18.1911 12.7096 18.2027 10.0411 18.2027C7.37255 18.2027 7.0522 18.1911 6.00113 18.1441C5.02437 18.1012 4.49693 17.9372 4.1453 17.8004C3.71171 17.6402 3.31704 17.3862 2.9967 17.0541C2.6646 16.7298 2.41065 16.3391 2.2504 15.9055C2.11365 15.5539 1.94959 15.0225 1.9067 14.0497C1.8597 12.9948 1.8481 12.6783 1.8481 10.0097C1.8481 7.34122 1.8597 7.02087 1.9067 5.96995C1.94959 4.99319 2.11365 4.46575 2.2504 4.11412C2.41065 3.68038 2.6646 3.28586 3.00067 2.96536C3.32483 2.63327 3.71553 2.37931 4.14927 2.21921C4.5009 2.08247 5.03231 1.9184 6.00509 1.87537C7.05999 1.82851 7.37651 1.81676 10.0449 1.81676C12.7174 1.81676 13.0337 1.82851 14.0848 1.87537C15.0616 1.9184 15.589 2.08247 15.9406 2.21921C16.3742 2.37931 16.7689 2.63327 17.0892 2.96536C17.4213 3.28967 17.6753 3.68038 17.8355 4.11412C17.9723 4.46575 18.1364 4.99701 18.1794 5.96995C18.2262 7.02484 18.238 7.34122 18.238 10.0097C18.238 12.6783 18.2262 12.9908 18.1794 14.0457Z"
                    fill="white"
                    className="group-hover:fill-custom_primary"
                  />
                  <path
                    d="M10.0371 4.86426C7.20074 4.86426 4.89941 7.16543 4.89941 10.002C4.89941 12.8385 7.20074 15.1397 10.0371 15.1397C12.8737 15.1397 15.1749 12.8385 15.1749 10.002C15.1749 7.16543 12.8737 4.86426 10.0371 4.86426ZM10.0371 13.3347C8.19702 13.3347 6.70442 11.8422 6.70442 10.002C6.70442 8.16172 8.19702 6.66927 10.0371 6.66927C11.8774 6.66927 13.3698 8.16172 13.3698 10.002C13.3698 11.8422 11.8774 13.3347 10.0371 13.3347Z"
                    fill="white"
                    className="group-hover:fill-custom_primary"
                  />
                  <path
                    d="M16.5777 4.6611C16.5777 5.32346 16.0407 5.86052 15.3781 5.86052C14.7158 5.86052 14.1787 5.32346 14.1787 4.6611C14.1787 3.99858 14.7158 3.46167 15.3781 3.46167C16.0407 3.46167 16.5777 3.99858 16.5777 4.6611Z"
                    fill="white"
                    className="group-hover:fill-custom_primary"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
