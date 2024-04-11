
    import { renderless, api } from '@opentiny/vue-renderless/tooltip/vue'
    import '@opentiny/vue-theme/tooltip/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tooltip(props) {
      const {visible,adjustArrow,appendToBody,arrowOffset,boundariesPadding,closeDelay,effect,enterable,hideAfter,offset,openDelay,placement,popper,popperOptions,reference,tabindex,transition,type,visibleArrow,zIndex} = props
      const defaultProps = {
        ...$props,
        ...props,
        visible,adjustArrow,appendToBody,arrowOffset,boundariesPadding,closeDelay,effect,enterable,hideAfter,offset,openDelay,placement,popper,popperOptions,reference,tabindex,transition,type,visibleArrow,zIndex
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
        
      );
    }
    