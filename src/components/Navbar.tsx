const Navbar = () => {
  return (
    <nav className="max-w-[120.000rem] w-full px-[4.688rem] py-[3.39rem] flex items-center justify-between mx-auto">
      <div className="nav-shopping flex items-start">
        {/* <div className="nav-faved-icon">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 12C19.49 10.54 21 8.79 21 6.5C21 5.04131 20.4205 3.64236 19.3891 2.61091C18.3576 1.57946 16.9587 1 15.5 1C13.74 1 12.5 1.5 11 3C9.5 1.5 8.26 1 6.5 1C5.04131 1 3.64236 1.57946 2.61091 2.61091C1.57946 3.64236 1 5.04131 1 6.5C1 8.8 2.5 10.55 4 12L11 19L18 12Z"
              stroke="#13201E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div> */}
        {/* <span className="relative z-10 bg-[#E6007E] rounded-full w-[1.250rem] h-[1.250rem] text-center text-white text-[0.75rem] top-[-0.5rem] left-[-0.25rem] pt-[0.063rem] font-[700] hidden">
          3
        </span> */}
      </div>
      <div>
        <img
          className="w-[12.313rem] h-[1.500rem] mx-auto"
          src="./img/Logo_big.png"
          alt="logo"
        />
      </div>
      <div className="flex items-center gap-6">
        {/* <svg
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
        </svg> */}
        {/* <svg
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
        </svg> */}
      </div>
    </nav>
  )
}

export default Navbar
