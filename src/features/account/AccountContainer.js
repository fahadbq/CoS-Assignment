import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAsyncUser } from '../account/accountsSlice'

const AccountContainer = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAsyncUser())
    }, [dispatch])

  return (
    <div><h1>h1</h1></div>
  )
}

export default AccountContainer