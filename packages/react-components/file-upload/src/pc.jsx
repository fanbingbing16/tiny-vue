
    import { renderless, api } from '@opentiny/vue-renderless/file-upload/vue'
    import '@opentiny/vue-theme/file-upload/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function fileUpload(props) {
      const {edm,action,headers,data,multiple,name,drag,dragger,withCredentials,showFileList,accept,type,beforeUpload,beforeRemove,fileList,autoUpload,listType,httpRequest,disabled,limit,openDownloadFile,mergeService,fileSize,thumbOption,isFolderTitle,listOption,maxNameLength,isHidden,sourceType,cacheToken,pasteUpload,reUploadable,reUploadTip,encryptConfig,title,showTitle,displayOnly,compact} = props
      const defaultProps = {
        ...$props,
        ...props,
        edm,action,headers,data,multiple,name,drag,dragger,withCredentials,showFileList,accept,type,beforeUpload,beforeRemove,fileList,autoUpload,listType,httpRequest,disabled,limit,openDownloadFile,mergeService,fileSize,thumbOption,isFolderTitle,listOption,maxNameLength,isHidden,sourceType,cacheToken,pasteUpload,reUploadable,reUploadTip,encryptConfig,title,showTitle,displayOnly,compact
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
    