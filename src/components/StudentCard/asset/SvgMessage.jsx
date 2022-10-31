import * as React from 'react'

function SvgComponent (props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="3.0 6.0 26.0 20.0"
      aria-label="Message Glyph Icon"
      fill="#61d66b"
      {...props}
    >
      <g data-name={1} fill="inherit">
        <path d="M16 15.834l13-7.8V8a2 2 0 00-2-2H5a2 2 0 00-2 2v.034z" />
        <path d="M16.515 17.857a1 1 0 01-1.03 0L3 10.366V24a2 2 0 002 2h22a2 2 0 002-2V10.366z" />
      </g>
    </svg>
  )
}

export default SvgComponent
