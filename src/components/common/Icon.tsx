import React from 'react'

import { SvgXml } from 'react-native-svg'

import { Color } from 'Theme'

const getImageXml = (name, props) => {
  const { size, fill, stroke, opacity } = props
  switch (name) {
    case 'hug':
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="${fill}" d="M17.8355 5.14389C16.6808 5.13103 15.5681 5.57633 14.7412 6.38224C13.9142 7.18816 13.4404 8.28898 13.4235 9.44358C13.4011 10.3206 13.6408 11.1844 14.1118 11.9246C14.5828 12.6648 15.2638 13.2477 16.0678 13.5989C16.8718 13.9501 17.7622 14.0537 18.6253 13.8963C19.4884 13.739 20.285 13.3279 20.9133 12.7156C21.5416 12.1033 21.9731 11.3175 22.1527 10.4588C22.3322 9.6 22.2516 8.7072 21.9212 7.89445C21.5909 7.0817 21.0257 6.3859 20.2979 5.89596C19.5701 5.40601 18.7128 5.14417 17.8355 5.14389Z" />
          <path fill="${fill}" d="M17.1777 30.8137C14.5946 30.8939 12.5892 31.6961 12.1239 29.2093V18.3959C12.0261 18.3239 11.9349 18.2433 11.8512 18.1553L2.75446 9.25105C2.5161 9.02472 2.32629 8.75226 2.19659 8.45024C2.06689 8.14822 2 7.82297 2 7.49428C2 7.16559 2.06689 6.84033 2.19659 6.53831C2.32629 6.2363 2.5161 5.96383 2.75446 5.7375C3.22681 5.26528 3.86738 5 4.5353 5C5.20321 5 5.84378 5.26528 6.31614 5.7375L15.4129 14.6417L15.5733 14.8182H20.5147L20.6752 14.6417L29.7719 5.7375C30.2463 5.26917 30.8861 5.00657 31.5527 5.00657C32.2194 5.00657 32.8592 5.26917 33.3336 5.7375C33.5719 5.96383 33.7618 6.2363 33.8915 6.53831C34.0212 6.84033 34.088 7.16559 34.088 7.49428C34.088 7.82297 34.0212 8.14822 33.8915 8.45024C33.7618 8.75226 33.5719 9.02472 33.3336 9.25105L24.2369 18.1553C24.1532 18.2433 24.0619 18.3239 23.9641 18.3959V29.1131C23.4989 31.6479 21.4934 30.8458 18.9104 30.7174" />
        </svg>`

    case 'favourite':
    case 'plus':
      return `<svg width="${size}" height="${size}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="${fill}" fill-rule="evenodd" clip-rule="evenodd" d="M15 31C15 32.6569 16.3431 34 18 34C19.6569 34 21 32.6569 21 31V21H31C32.6569 21 34 19.6569 34 18C34 16.3431 32.6569 15 31 15H21V5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5V15H5C3.34315 15 2 16.3431 2 18C2 19.6569 3.34315 21 5 21H15V31Z" />
        </svg>`

    case 'minus':
      return `<svg width="${size}" height="${size}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="15" width="32" height="6" rx="3" fill="${fill}"/>
        </svg>`

    case 'more-vertical':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="6" r="2" fill="${fill}"/>
        <circle cx="12" cy="12" r="2" fill="${fill}"/>
       <circle cx="12" cy="18" r="2" fill="${fill}"/>
      </svg>`

    case 'send':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="send_24px">
      <path id="icon/content/send_24px" d="M3.67126 20.4L21.1213 12.92C21.9313 12.57 21.9313 11.43 21.1213 11.08L3.67126 3.6C3.01126 3.31 2.28126 3.8 2.28126 4.51L2.27126 9.12C2.27126 9.62 2.64126 10.05 3.14126 10.11L17.2713 12L3.14126 13.88C2.64126 13.95 2.27126 14.38 2.27126 14.88L2.28126 19.49C2.28126 20.2 3.01126 20.69 3.67126 20.4Z" fill="${fill}" fill-opacity="${opacity}"/>
      </g>
      </svg>`

    case 'message':
      return `<svg width="${size}" height="${size}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="${fill}" d="M29.7699 3.00013H6.19778C5.08298 3.00448 4.01529 3.4591 3.22852 4.26443C2.44174 5.06976 1.99999 6.16018 2 7.29691V23.7597C1.99999 24.8964 2.44174 25.9868 3.22852 26.7922C4.01529 27.5975 5.08298 28.0521 6.19778 28.0565H17.0959L25.2492 33.6867C25.5531 33.8986 25.9145 34.008 26.2825 33.9995C26.5928 33.9996 26.8981 33.9203 27.1705 33.7691C27.4671 33.6101 27.7172 33.3742 27.8958 33.0851C28.0744 32.7961 28.1751 32.4642 28.1877 32.1228V28.0071H29.8022C30.917 28.0027 31.9847 27.5481 32.7715 26.7428C33.5583 25.9375 34 24.847 34 23.7103V7.24752C33.9958 6.68542 33.883 6.12967 33.6681 5.612C33.4533 5.09434 33.1405 4.6249 32.7477 4.23049C32.3549 3.83608 31.8898 3.52442 31.3788 3.31331C30.8679 3.10221 30.3212 2.99579 29.7699 3.00013Z"/>
      </svg>`

    case 'flirt':
    case 'heart':
      return `<svg width="${size}" height="${size}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="${fill}" d="M24.0586 26.4575L18.0041 32C18.0041 32 13.6262 28.1095 11.9496 26.4575L4.18731 18.7382C2.74211 17.1842 1.95872 15.1337 2.00168 13.0173C2.04464 10.901 2.91061 8.88364 4.41769 7.38888C5.92478 5.89412 7.9557 5.03833 10.0839 5.00126C12.2121 4.96419 14.2719 5.74872 15.8307 7.19008L18.0041 9.35149L20.1775 7.19008C21.7383 5.75085 23.7991 4.9691 25.9272 5.00902C28.0553 5.04894 30.085 5.90743 31.5901 7.40416C33.0951 8.9009 33.9584 10.9194 33.9985 13.0357C34.0387 15.1521 33.2526 17.2015 31.8054 18.7536L24.0431 26.473L24.0586 26.4575Z" />
      </svg>
      `
    case 'viewprofile':
    case 'eye':
      return `<svg width="${size}" height="${size}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6.75C10.5 6.75 4.095 11.415 1.5 18C4.095 24.585 10.5 29.25 18 29.25C25.5 29.25 31.905 24.585 34.5 18C31.905 11.415 25.5 6.75 18 6.75ZM18 25.5C13.86 25.5 10.5 22.14 10.5 18C10.5 13.86 13.86 10.5 18 10.5C22.14 10.5 25.5 13.86 25.5 18C25.5 22.14 22.14 25.5 18 25.5ZM13.5 18C13.5 15.51 15.51 13.5 18 13.5C20.49 13.5 22.5 15.51 22.5 18C22.5 20.49 20.49 22.5 18 22.5C15.51 22.5 13.5 20.49 13.5 18Z" fill="${fill}"/>
      </svg>
      `

    case 'tab-message':
      return `<svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="${fill}" d="M27.7699 0.769405H4.19778C3.08298 0.773425 2.01529 1.19307 1.22852 1.93646C0.441741 2.67984 -8.18249e-06 3.68638 1.13675e-10 4.73567V19.9321C-8.18249e-06 20.9814 0.441741 21.9879 1.22852 22.7313C2.01529 23.4747 3.08298 23.8943 4.19778 23.8983H15.0959L23.2492 29.0955C23.5531 29.2911 23.9145 29.3921 24.2825 29.3842C24.5928 29.3843 24.8981 29.3111 25.1705 29.1715C25.4671 29.0247 25.7172 28.807 25.8958 28.5402C26.0744 28.2734 26.1751 27.967 26.1877 27.6519V23.8528H27.8022C28.917 23.8487 29.9847 23.4291 30.7715 22.6857C31.5583 21.9423 32 20.9358 32 19.8865V4.69008C31.9958 4.17121 31.883 3.65821 31.6681 3.18037C31.4533 2.70252 31.1405 2.26919 30.7477 1.90512C30.3549 1.54105 29.8898 1.25337 29.3788 1.0585C28.8679 0.863633 28.3212 0.765398 27.7699 0.769405Z"
          />
        </svg>`

    case 'home':
      return `<svg width="${size}" height="${size}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="${fill}" d="M18.6183 23.139H19.8033C19.9971 23.1266 20.1915 23.1544 20.3741 23.2206C20.5567 23.2868 20.7237 23.3901 20.8645 23.5239C21.0054 23.6577 21.117 23.8191 21.1925 23.9981C21.268 24.1771 21.3057 24.3698 21.3033 24.564V31.764H29.0283C29.4261 31.764 29.8076 31.606 30.0889 31.3247C30.3702 31.0434 30.5283 30.6618 30.5283 30.264V20.259C30.5054 20.0789 30.5195 19.896 30.5697 19.7215C30.6199 19.547 30.7052 19.3846 30.8203 19.2442C30.9354 19.1038 31.078 18.9883 31.2393 18.9049C31.4006 18.8215 31.5772 18.7718 31.7583 18.759H32.8683C33.1497 18.7511 33.4233 18.6642 33.6576 18.5081C33.892 18.352 34.0777 18.1332 34.1935 17.8765C34.3093 17.6199 34.3505 17.3358 34.3124 17.0569C34.2744 16.7779 34.1586 16.5153 33.9783 16.299L19.7283 3.41401C19.4201 3.14699 19.026 3 18.6183 3C18.2105 3 17.8164 3.14699 17.5083 3.41401L3.39327 16.359C3.1403 16.6355 3 16.9967 3 17.3715C3 17.7463 3.1403 18.1075 3.39327 18.384C3.54563 18.5363 3.72898 18.6539 3.93088 18.729C4.13277 18.8041 4.34846 18.8348 4.56327 18.819H5.59827C5.77488 18.821 5.94934 18.8579 6.11155 18.9278C6.27377 18.9976 6.42051 19.0989 6.54329 19.2259C6.66606 19.3529 6.76242 19.5029 6.82679 19.6674C6.89116 19.8318 6.92225 20.0074 6.91827 20.184C6.92403 20.2087 6.92403 20.2343 6.91827 20.259V30.324C6.91827 30.7218 7.07631 31.1034 7.35761 31.3847C7.63892 31.666 8.02045 31.824 8.41827 31.824H16.1433V24.624C16.1408 24.4298 16.1785 24.2371 16.254 24.0581C16.3295 23.8791 16.4412 23.7177 16.582 23.5839C16.7229 23.4501 16.8898 23.3468 17.0725 23.2806C17.2551 23.2144 17.4494 23.1866 17.6433 23.199L18.6183 23.139Z"
          />
        </svg>`

    case 'add':
      return `<svg width="${size}" height="${size}" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="${fill}" d="M20 12.5H12.5V20C12.5 20.825 11.825 21.5 11 21.5C10.175 21.5 9.5 20.825 9.5 20V12.5H2C1.175 12.5 0.5 11.825 0.5 11C0.5 10.175 1.175 9.5 2 9.5H9.5V2C9.5 1.175 10.175 0.5 11 0.5C11.825 0.5 12.5 1.175 12.5 2V9.5H20C20.825 9.5 21.5 10.175 21.5 11C21.5 11.825 20.825 12.5 20 12.5Z" fill="white"/>
      </svg>`

    case 'done':
      return `<svg width="${size}" height="${size}" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="74.5" cy="74.5" r="72.5" stroke="${stroke}" stroke-width="4"/>
          <path fill="${fill}" fill-rule="evenodd" clip-rule="evenodd" d="M92.4142 61.6083C93.1953 62.4194 93.1953 63.7344 92.4142 64.5455L70.4142 87.3917C69.6332 88.2028 68.3668 88.2028 67.5858 87.3917L57.5858 77.0071C56.8047 76.196 56.8047 74.8809 57.5858 74.0699C58.3668 73.2588 59.6332 73.2588 60.4142 74.0699L69 82.9859L89.5858 61.6083C90.3668 60.7972 91.6332 60.7972 92.4142 61.6083Z" />
        </svg>`

    case 'checked':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11.5" fill="none" stroke="${stroke}"/>
          <circle cx="12" cy="12" r="7" fill="${fill}"/>
        </svg>`

    case 'unchecked':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11.5" fill="none" stroke="${stroke}"/>
      </svg>`

    case 'forces':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19 4.37625L11.19 1.26625C11.7 1.03625 12.3 1.03625 12.81 1.26625L19.81 4.37625C20.53 4.69625 21 5.41625 21 6.20625V10.9062C21 16.4563 17.16 21.6462 12 22.9062C6.84 21.6462 3 16.4563 3 10.9062V6.20625C3 5.41625 3.47 4.69625 4.19 4.37625ZM6.7 13.6062L9.29 16.1962C9.68 16.5862 10.32 16.5862 10.7 16.1962L17.29 9.60625C17.68 9.21625 17.68 8.58625 17.29 8.19625C16.9 7.80625 16.27 7.80625 15.88 8.19625L10 14.0763L8.11 12.1962C7.72 11.8062 7.09 11.8062 6.7 12.1962C6.51275 12.3831 6.40751 12.6367 6.40751 12.9012C6.40751 13.1658 6.51275 13.4194 6.7 13.6062Z" fill="${fill}"/>
        </svg>`

    case 'arrow-back':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path d="M18.7912 11.005H7.62124l4.87996-4.88001c.39-.39.39-1.03 0-1.42a.9957.9957 0 00-.705-.29248.99606.99606 0 00-.705.29248L4.50124 11.295c-.39.39-.39 1.02 0 1.41l6.58996 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-4.87996-4.88H18.7912c.55 0 1-.45 1-1s-.45-1-1-1z" fill="${fill}"/>
        </svg>`

    case 'menu':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 8c-.55 0-1-.45-1-1s.45-1 1-1h16c.55 0 1 .45 1 1s-.45 1-1 1H4zm0 5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0 5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z" fill="${fill}"/>
        </svg>`

    case 'search':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.1866 14.4716h.79l4.24 4.26c.41.41.41 1.08 0 1.49-.41.41-1.08.41-1.49 0l-4.25-4.25v-.79l-.27-.28c-1.4 1.2-3.31 1.82-5.34004 1.48-2.78-.47-5-2.79-5.34-5.59-.52-4.23003 3.04-7.79003 7.27004-7.27003 2.8.34 5.12 2.56 5.59 5.34.34 2.03003-.28 3.94003-1.48 5.34003l.28.27zM5.47656 9.97157c0 2.49003 2.01 4.50003 4.5 4.50003 2.49004 0 4.50004-2.01 4.50004-4.50003 0-2.49-2.01-4.5-4.50004-4.5-2.49 0-4.5 2.01-4.5 4.5z"
            fill="${fill}"
          />
        </svg>`

    case 'archive':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.54 5.23001L19.15 3.54999C18.88 3.20999 18.47 3 18 3H6C5.53 3 5.12 3.20999 4.84 3.54999L3.46001 5.23001C3.17 5.57001 3 6.01999 3 6.5V19C3 20.1 3.89999 21 5 21H19C20.1 21 21 20.1 21 19V6.5C21 6.01999 20.83 5.57001 20.54 5.23001ZM11.65 17.15L6.5 12H10V10H14V12H17.5L12.35 17.15C12.16 17.34 11.84 17.34 11.65 17.15ZM5.92999 4L5.12 5H18.87L17.93 4H5.92999Z" fill="${fill}" />
          </svg>`

    case 'inbox':
      return `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99001 3H19C20.1 3 21 3.89001 21 5V19C21 20.1 20.1 21 19 21H4.99001C3.88 21 3 20.1 3 19L3.00999 5C3.00999 3.89001 3.88 3 4.99001 3ZM15.87 15H19V6C19 5.45001 18.55 5 18 5H6C5.45 5 5 5.45001 5 6V15H8.13C8.60001 15 8.98 15.34 9.11 15.8C9.46001 17.07 10.63 18 12 18C13.37 18 14.54 17.07 14.89 15.8C15.02 15.34 15.4 15 15.87 15Z" fill="${fill}" />
      </svg>`

    case 'cancel':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path d="M18.3 5.70999a.99585.99585 0 00-1.41 0L12 10.59 7.10997 5.69999a.99587.99587 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12l-4.89003 4.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89001c.38-.38.38-1.02 0-1.4z" fill="${fill}"/>
        </svg>`

    case 'options':
      return `<svg
          width="${size}"
          height="${size}"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="6" r="2" fill="${fill}" />
          <circle cx="12" cy="12" r="2" fill="${fill}" />
          <circle cx="12" cy="18" r="2" fill="${fill}" />
        </svg>`

    case 'icon-plane':
      return `<svg width="${size}" height="${size}" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M.668 5.059c-.347.188-.333.463.031.611l1.079.44c.364.149.915.068 1.224-.18l4.682-3.808c.308-.25.341-.213.074.082L4.056 6.29c-.268.294-.189.656.177.801l.126.051c.365.146.96.39 1.324.543l1.196.502a.614.614 0 00.855-.417L9.556.862C9.66.472 9.46.306 9.112.494L.668 5.059zM3.627 9.58c-.02.067.738-1.132.738-1.132.215-.338.093-.74-.27-.894l-.827-.349c-.363-.153-.536.027-.386.4 0 0 .767 1.908.745 1.976z"
          fill="${fill}"
        />
      </svg>`

    case 'block':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48001 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48001 17.52 2 12 2ZM4 12C4 7.57999 7.58 4 12 4C13.85 4 15.55 4.63 16.9 5.69L5.69 16.9C4.63 15.55 4 13.85 4 12ZM7.1 18.31C8.45 19.37 10.15 20 12 20C16.42 20 20 16.42 20 12C20 10.15 19.37 8.45001 18.31 7.10001L7.1 18.31Z" fill="${fill}"/>
      </svg>`

    case 'error_outline':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48001 6.46997 2 11.99 2C17.52 2 22 6.48001 22 12C22 17.52 17.52 22 11.99 22C6.46997 22 2 17.52 2 12ZM13 8C13 7.45001 12.55 7 12 7C11.45 7 11 7.45001 11 8V12C11 12.55 11.45 13 12 13C12.55 13 13 12.55 13 12V8ZM12 20C7.58002 20 4 16.42 4 12C4 7.57999 7.58002 4 12 4C16.42 4 20 7.57999 20 12C20 16.42 16.42 20 12 20ZM11 15V17H13V15H11Z" fill="${fill}" />
      </svg>`

    case 'remove_circle_outline':
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48001 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48001 17.52 2 12 2ZM7 12C7 12.55 7.45 13 8 13H16C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11H8C7.45 11 7 11.45 7 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z" fill="${fill}" />
      </svg>`

    default:
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11.5" fill="none" stroke="${stroke}" stroke-dasharray="2"/>
    </svg>`
  }
}

interface Props {
  name: string
  stroke?: string
  fill?: string
  size?: number
  style?: {}
  opacity?: number
}

export function Icon({
  name = '',
  fill = Color.dark,
  size = 24,
  stroke = Color.dark,
  opacity = 1,
  style,
  ...rest
}: Props): React.ReactElement {
  return (
    <SvgXml
      xml={getImageXml(name, { fill, size, stroke, opacity, ...rest })}
      style={style}
    />
  )
}

/*
USAGE:

<SvgIcon name='heart' />
<SvgIcon name='heart' fill={Color.red} size={36} />
*/
