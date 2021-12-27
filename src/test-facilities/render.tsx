import React from "react"
import {render, RenderOptions} from '@testing-library/react'
import { StateManager } from "pro-web-app-cli-state-manager"
import { Provider } from 'react-redux'
import { UserServiceContext } from "../contexts/userService"
import { User } from "pro-web-common/dist/js/stubs/api-service/UserServiceStub"
import { BaseUrl} from "../contexts/baseUrl"
import Notification from "../components/notification/Notification"

const AllTheProviders: React.FunctionComponent = ({children}) => {
  return <BaseUrl.Provider value="">
      <UserServiceContext.Provider value={new User(null)}>
        <Provider store={StateManager.store}>
          <Notification />
          {children}
        </Provider>
      </UserServiceContext.Provider>
    </BaseUrl.Provider> 
}

const customRender = (ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>, options?: RenderOptions | undefined) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// override render method
export {customRender as render}