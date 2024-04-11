
    import { renderless, api } from '@opentiny/vue-renderless/tabs/vue'
    import '@opentiny/vue-theme/tabs/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tabs(props) {
      const {activeName,modelValue,size,withClose,withAdd,beforeLeave,separator,optimized,beforeClose} = props
      const defaultProps = {
        ...$props,
        ...props,
        activeName,modelValue,size,withClose,withAdd,beforeLeave,separator,optimized,beforeClose
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
    