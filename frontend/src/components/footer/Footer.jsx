import React from 'react'
import InfoBlock from './InfoBlock'
import style from './Footer.module.css'
import Map from './map/Map'
import Insta from '../../elements/images/ic-instagram.png'
import Whatsapp from '../../elements/images/ic-whatsapp.png'
import Title from '../../elements/inputs/Title'

export default function Footer() {

  const socialMedia = [Insta, Whatsapp]
  return (
    <div className={style.footer}>
      <Title title={"Contact"}/>
      <footer className={style.footerInfoContainer}>
        <InfoBlock title={"Phone"} text={'+49 999 999 99 99'}/>
        <InfoBlock title={"Socials"} images={socialMedia}/>
        <InfoBlock title={"Address"} text={'Linkstrasse 2, 8 OG, 10785, Berlin, Deutschland'}/>
        <InfoBlock title={"Working Hours"} text={'24 hours a day'}/>
      </footer>
      <Map/>
    </div>
  )
}
