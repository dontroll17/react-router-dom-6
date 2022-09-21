import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';

function About() {
      
    return (
        <>
            <ul>
                <li><Link to="contacts">Contacts</Link></li>
            </ul> 
            <Routes>
                <Route path="contacts" element={<p>+3-999-111-00-0</p>} />
            </Routes>
        </>
    )
}

export default About