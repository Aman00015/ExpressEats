import React from 'react'
import '../styles/footer.scss'
import {AiFillYoutube,AiFillFacebook,AiFillGithub}from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
    <div>
        <h1>Express<span style={{color:"rgb(116, 192, 116)"}}>Eats</span> </h1>
        <p>@All Rights Reserved</p>
        <div>
            <h5>Follow Us:-</h5>
            <div>
                <a href="https://Youtube.com" target={"_blank"}><AiFillYoutube/>Youtube</a>
                <a href="https://Facebook.com" target={"_blank"}><AiFillFacebook/>Facebook</a>
                <a href="https://Github.com" target={"_blank"}><AiFillGithub/>Github</a>
            </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer