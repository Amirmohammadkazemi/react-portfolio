import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://github.com' target='_blank'><BsGithub /></a>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
        <a href='https://youyube.com' target='_blank'><BsYoutube /></a>
        <a href='https://instagram.com' target='_blank'><BsInstagram /></a>
        <a href='https://twiter.com' target='_blank'><BsTwitter /></a>
        <a href='https://telegram.com' target='_blank'><BsTelegram /></a>
    </div>
  )
}

export default HeaderSocials