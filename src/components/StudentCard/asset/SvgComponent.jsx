import * as React from 'react'

function SvgComponent (props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="10.0 4.0 28.0 40.0"
      aria-label="Pin"
      fill="#9798a9"
      {...props}
    >
      <path
        d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
        fill="inherit"
      />
    </svg>
  )
}

export default SvgComponent
