import { Fragment } from 'react'
import Nav from './Nav'

export default function Footer() {
    return (
        <footer>
              <nav aria-label="Main Navigation" role="navigation">
            <ul class="bottom-nav" >
                <li><a>Home</a></li>
                <li><a  >Women's</a></li>
                <li><a>Men's</a></li>
                <li><a>On the Street</a></li>
                <li><a>The Catwalk</a></li>
                <li><a>AdWatch</a></li>
                <li><a>About</a></li>
                <li><a>Tips</a></li>
               
            </ul>
            &#169;2013Valet Industries,Inc
           
           
        </nav>
       
        </footer>
    )
}