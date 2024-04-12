
    import { renderless, api } from '@opentiny/vue-renderless/dropdown/vue'
    import '@opentiny/vue-theme/dropdown/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dropdown(props) {
      const {type,trigger,size,disabled,singleButton,showTimeout,hideTimeout,hideOnClick,tabindex,border,round,showIcon,modelValue,showSelfIcon} = props
      const defaultProps = {
        ...$props,
        ...props,
        type,trigger,size,disabled,singleButton,showTimeout,hideTimeout,hideOnClick,tabindex,border,round,showIcon,modelValue,showSelfIcon
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
    