import pxToRem from "@/utils/pxToRam"

const MatchMedia = {
  mobile: window.matchMedia(`(width <= ${pxToRem(767)}rem)`),
}

export default MatchMedia
