import * as React from 'react'

function SvgComponent (props) {
  return (
    <svg
    width={24}
    height={23}
    fill="#3E416D"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}
  >
    <path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543L20 11.882V18c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zM23 17h-1V9.74l-10.923 5.568L0 8.308 12 3l11 6.231V17z" />
  </svg>
  )
}

export default SvgComponent
