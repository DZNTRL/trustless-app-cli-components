import { LoadingStates } from "pro-web-common/dist/js/enums/state-manager/LoadingStates"
import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { IAllState } from "../../IAllState"


const UsernameStatus: React.FunctionComponent = () => {
    const { isUnique, isLoading } = useSelector((state: IAllState) => {
        console.log(state)
        return {
            isUnique: state.User.usernameUnique,
            //@ts-ignore
            isLoading : state.App.loading === LoadingStates.loading
        }
    })
    const [state, setState] = useState<string>("0 ")
    useEffect(() => {
        const isUniqueHasValue = isUnique === null ? " " : isUnique === true ? "1" : "0"
        setState(`${isLoading ? "1" : "0"}${isUniqueHasValue}`)        
    }, [isUnique, isLoading])
    switch(state) {
        case "0 ":
            return <></>
        case "00":
            return <>try again</>
        case "11":
        case "01":
            return <>good!</>
        case "10":
            return <>loading</>
        default:
            return <></>
        }

}

export default UsernameStatus