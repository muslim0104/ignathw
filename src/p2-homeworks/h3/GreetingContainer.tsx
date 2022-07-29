import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}

// более простой и понятный для новичков
//  function GreetingContainer(props: GreetingContainerPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
     export const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
         const [name, setName] = useState<string>('') // need to fix any
         const [error, setError] = useState<string>('') // need to fix any

         const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any


             let a=e.currentTarget.value

             //if (a === '')){
                 setName(e.currentTarget.value.trim()) // need to fix
             //}
         }
         const addUser = () => {

             addUserCallback(name)
             alert( "Hello " + name)
         }

         const totalUsers = users.length // need to fix

         return (
             <Greeting
                 name={name}
                 setNameCallback={setNameCallback}
                 addUser={addUser}
                 error={error}
                 totalUsers={totalUsers}
             />
         )
     }


