const Navbar = () => {
  return (
    <nav className="max-w-[120.000rem] w-full px-[4.688rem] py-[3.39rem] flex items-center justify-between mx-auto">
      <div className="nav-shopping flex items-start">
        <div className="nav-shopping-icon">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H2.19149L3.08367 6.16571C3.08869 6.19584 3.09506 6.22552 3.10272 6.25468L4.68217 13.6294L4.68225 13.6298C4.82861 14.312 5.20825 14.922 5.75581 15.3545C6.30018 15.7846 6.97666 16.0126 7.67003 16H17.44L17.4416 16C18.1244 15.9989 18.7863 15.7649 19.3182 15.3368C19.8498 14.9087 20.2195 14.3123 20.3664 13.6458L20.3666 13.645L22.0162 6.21679C22.082 5.92071 22.0098 5.61079 21.82 5.37422C21.6302 5.13765 21.3433 5 21.04 5H4.87936L3.97783 0.790578C3.87907 0.329457 3.47158 0 3 0H1ZM6.63775 13.2102L5.3077 7H19.7936L18.4138 13.2132L18.4134 13.215C18.3645 13.4373 18.2412 13.6362 18.0639 13.7789C17.8868 13.9215 17.6663 13.9995 17.4389 14L17.4384 14L7.66 14L7.63775 14.0002C7.40521 14.0054 7.17813 13.9294 6.99561 13.7852C6.81318 13.6411 6.68667 13.4379 6.63783 13.2106L6.63775 13.2102ZM4.94995 19.95C4.94995 18.8454 5.84538 17.95 6.94995 17.95C8.05452 17.95 8.94995 18.8454 8.94995 19.95C8.94995 21.0546 8.05452 21.95 6.94995 21.95C5.84538 21.95 4.94995 21.0546 4.94995 19.95ZM15.95 19.95C15.95 18.8454 16.8454 17.95 17.95 17.95C19.0545 17.95 19.95 18.8454 19.95 19.95C19.95 21.0546 19.0545 21.95 17.95 21.95C16.8454 21.95 15.95 21.0546 15.95 19.95Z"
              fill="#13201E"
            />
          </svg>
        </div>
        <span className="relative z-10 bg-[#E6007E] rounded-full w-[1.250rem] h-[1.250rem] text-center text-white text-[0.75rem] top-[-0.5rem] left-[-0.25rem] pt-[0.063rem] font-[700]">
          3
        </span>
      </div>
      <div>
        <img
          className="w-[12.313rem] h-[1.500rem] mx-auto"
          src="./img/Logo_big.png"
          alt="logo"
        />
      </div>
      <div className="flex items-center gap-6">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 11.0258C2 6.04101 6.04101 2 11.0258 2C16.0107 2 20.0517 6.04101 20.0517 11.0258C20.0517 13.3393 19.1813 15.4494 17.7502 17.0467C17.4205 15.9383 16.8189 14.9182 15.9865 14.0858C15.4795 13.5789 14.903 13.1575 14.2794 12.8311C15.3547 11.9121 16.0363 10.546 16.0363 9.02065C16.0363 6.25352 13.7931 4.01031 11.026 4.01031C8.25883 4.01031 6.01562 6.25352 6.01562 9.02065C6.01562 10.5459 6.69719 11.912 7.77237 12.831C7.14863 13.1574 6.57204 13.5788 6.06505 14.0858C5.23264 14.9182 4.63102 15.9383 4.30136 17.0465C2.87031 15.4493 2 13.3392 2 11.0258ZM6.03512 18.5475C7.46462 19.4979 9.18056 20.0517 11.0258 20.0517C12.8711 20.0517 14.5869 19.498 16.0164 18.5476C15.9018 17.4007 15.3945 16.3223 14.5723 15.5C13.6317 14.5594 12.356 14.031 11.0258 14.031C9.69556 14.031 8.41985 14.5594 7.47926 15.5C6.65702 16.3223 6.14976 17.4006 6.03512 18.5475ZM11.0258 0C4.93644 0 0 4.93644 0 11.0258C0 17.1152 4.93644 22.0517 11.0258 22.0517C17.1152 22.0517 22.0517 17.1152 22.0517 11.0258C22.0517 4.93644 17.1152 0 11.0258 0ZM11.026 6.01031C9.3634 6.01031 8.01562 7.35809 8.01562 9.02065C8.01562 10.6832 9.3634 12.031 11.026 12.031C12.6885 12.031 14.0363 10.6832 14.0363 9.02065C14.0363 7.35809 12.6885 6.01031 11.026 6.01031Z"
            fill="#13201E"
          />
        </svg>
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </nav>
  )
}

export default Navbar
