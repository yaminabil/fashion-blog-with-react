import { Fragment } from 'react'
import Nav from './Nav'

export default function Header() {
    return (
        <header>
         <h1 class="main-title">Sartre's List</h1>
        <h2>Better-Dressed People</h2>
        <Nav />
        </header>
    )
}