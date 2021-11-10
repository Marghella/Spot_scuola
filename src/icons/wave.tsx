import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
      <path
        fill="black"
        d="M0 256l30-26.7c30-26.3 90-80.3 150-80 60-.3 120 53.7 180 69.4C420 235 480 213 540 208c60-5 120 5 180 5.3 60-.3 120-10.3 180-32C960 160 1020 128 1080 96s120-64 180-80 120-16 150-16h30v320H0z"
      />
      {props.children}
    </svg>
  )
}

export default SvgComponent
