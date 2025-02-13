// compoenent들 사이즈를 반응형 만들어주는
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function Spacer({ displayClass }: QuartzComponentProps) {
  return <div class={classNames(displayClass, "spacer")}></div>
}

export default (() => Spacer) satisfies QuartzComponentConstructor
