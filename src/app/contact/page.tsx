import { IconBabyCarriageFilled, IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react'
import React from 'react'

export default function page() {
  return (
    <div className='taxt-contact my-4'>
        <p className='fx-bold fs-4'>contact</p>
        <p>
            <strong><IconBrandFacebook/> fFacebook </strong>
            : TOP10IMB
        </p>
        <p>
            <strong><IconBrandTwitter/> Twitter </strong>
            : @TOP10IMB
        </p>
    </div>
  )
}
