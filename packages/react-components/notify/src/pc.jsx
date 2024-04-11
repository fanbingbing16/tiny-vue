
    import { renderless, api } from '@opentiny/vue-renderless/notify/vue'
    import '@opentiny/vue-theme/notify/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function notify(props) {
      const {beforeClose,closeIcon,customClass,duration,message,onClose,position,showClose,showIcon,statusIcon,title,type} = props
      const defaultProps = {
        ...$props,
        ...props,
        beforeClose,closeIcon,customClass,duration,message,onClose,position,showClose,showIcon,statusIcon,title,type
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
    