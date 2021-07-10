import { SvgPanZoomInstance } from "@/composables/svg-pan-zoom"
import { Ref } from "@vue/reactivity"
import { Emitter } from "mitt"
import { Events, Links, NodePositions, Nodes, Styles } from "../common/types"

export interface LayoutActivateParameters {
  layouts: NodePositions
  nodes: Nodes
  links: Links
  styles: Styles
  emitter: Emitter<Events>
  scale: Ref<number>
  svgPanZoom: SvgPanZoomInstance
}

export interface LayoutHandler {
  activate(parameters: LayoutActivateParameters): void
  deactivate(): void
}