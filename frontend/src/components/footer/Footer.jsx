import Whatsapp from '../../elements/images/ic-whatsapp.png'
import Insta from '../../elements/images/ic-instagram.png'
import Title from '../../elements/inputs/Title'
import style from './Footer.module.css'
import InfoBlock from './InfoBlock'
import Map from './map/Map'
import React from 'react'

export default function Footer() {
  const socialMedia = [Insta, Whatsapp]

  return (
    <div className={style.footer}>
      <Title title={"Contact"}/>
      <footer className={style.footer_info_container}>
        <InfoBlock title={"Phone"} text={'+49 157 359 89 554'}/>
        <InfoBlock title={"Socials"} images={socialMedia}/>
        <InfoBlock title={"Address"} text={'Linkstrasse 2, 8 OG, 10785, Berlin, Deutschland'}/>
        <InfoBlock title={"Working Hours"} text={'24 hours a day'}/>
      </footer>
      <Map/>
    </div>
  )
}
