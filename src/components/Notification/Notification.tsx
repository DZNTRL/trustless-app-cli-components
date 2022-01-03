import React from "react"
import { Toast, ToastContainer} from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Notifications as NotificationTypes } from "pro-web-common/dist/js/enums/state-manager/Notifications"
import { StateManager } from "pro-web-app-cli-state-manager"
import { IAllState } from "../../IAllState"
import { ResponseMessages } from "pro-web-common/dist/js/enums/ResponseMessages"

const Notifications: React.FunctionComponent = () => {
    const notification = useSelector((state: IAllState) => state.App.notification)
    const dispatch = useDispatch()
    const onClose = () => {
      dispatch(StateManager.actions.app.clearNotification())
    }
    if(notification === null) return <></>
    if(notification.type !== NotificationTypes.danger) {
      setTimeout(() => {
        onClose()
      }, 5000)  
    }    
    return <ToastContainer position="bottom-end">
    <Toast bg={notification.type} onClose={onClose}>
      <Toast.Header>
        stuff happened!
      </Toast.Header>
      <Toast.Body>{notification.message}</Toast.Body>
    </Toast>
  </ToastContainer>
}

export default Notifications
