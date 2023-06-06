import * as React from "react"

export function CartSVG(props) {
  return (
    <svg
      className="svg-icon"
      style={{
        width: "1em",
        height: "1em",
        verticalAlign: "middle"
      }}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      overflow="hidden"
      {...props}
    >
      <path d="M810.667 298.667h-128V256a170.667 170.667 0 00-341.334 0v42.667h-128a42.667 42.667 0 00-42.666 42.666v469.334a128 128 0 00128 128h426.666a128 128 0 00128-128V341.333a42.667 42.667 0 00-42.666-42.666zm-384-42.667a85.333 85.333 0 01170.666 0v42.667H426.667zM768 810.667a42.667 42.667 0 01-42.667 42.666H298.667A42.667 42.667 0 01256 810.667V384h85.333v42.667a42.667 42.667 0 0085.334 0V384h170.666v42.667a42.667 42.667 0 0085.334 0V384H768z" />
    </svg>
  )
}

export default CartSVG
