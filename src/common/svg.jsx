const prefix = "img";

const files = {
  byId: {
    applogo: {
      width: 188,
      height: 30,
      viewBox: [0, 0, 188, 30],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#0B92D2" d="M8.89937 10.7179H0L9.39378 29.9999H18.2932L8.89937 10.7179Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#137BC0" d="M27.1923 5.7738H18.293L28.346 29.9999H37.2453L27.1923 5.7738Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#0E763F" d="M18.293 5.7738H27.1924L18.293 29.9999H9.39363L18.293 5.7738Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#FFD100" fill-rule="evenodd" d="M13.2192 19.5854L9.39355 29.9998H18.2929L13.2192 19.5854Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="#FFD100" fill-rule="evenodd" d="M9.39355 29.9998H18.2929L13.2192 19.5854L9.39355 29.9998Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="#E20613" d="M38.399 0.500122H47.2983L37.0805 29.9999H28.1812L38.399 0.500122Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#0E4B9C" fill-rule="evenodd" d="M32.3049 18.0944L28.2561 29.7835L28.346 30H37.2453L37.1555 29.7835L32.3049 18.0944Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="#0E4B9C" fill-rule="evenodd" d="M37.0805 30L37.1555 29.7835L32.3049 18.0944L28.2561 29.7835L28.1812 30H37.0805Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="white" d="M61.8801 13.104H55V9.232H73.7359V13.104H66.8559V29.7653H61.8801V13.104Z"/><path xmlns="http://www.w3.org/2000/svg" fill="white" d="M82.2585 30C80.518 30 78.9516 29.6578 77.5592 28.9733C76.1873 28.2693 75.1123 27.3013 74.3341 26.0693C73.556 24.8373 73.167 23.4391 73.167 21.8747C73.167 20.3102 73.556 18.912 74.3341 17.68C75.1123 16.448 76.1873 15.4898 77.5592 14.8053C78.9516 14.1013 80.518 13.7493 82.2585 13.7493C83.999 13.7493 85.5552 14.1013 86.9272 14.8053C88.2991 15.4898 89.3741 16.448 90.1522 17.68C90.9303 18.912 91.3193 20.3102 91.3193 21.8747C91.3193 23.4391 90.9303 24.8373 90.1522 26.0693C89.3741 27.3013 88.2991 28.2693 86.9272 28.9733C85.5552 29.6578 83.999 30 82.2585 30ZM82.2585 26.2453C83.4871 26.2453 84.4905 25.8542 85.2686 25.072C86.0671 24.2702 86.4664 23.2044 86.4664 21.8747C86.4664 20.5449 86.0671 19.4889 85.2686 18.7067C84.4905 17.9049 83.4871 17.504 82.2585 17.504C81.0299 17.504 80.0164 17.9049 79.2178 18.7067C78.4192 19.4889 78.0199 20.5449 78.0199 21.8747C78.0199 23.2044 78.4192 24.2702 79.2178 25.072C80.0164 25.8542 81.0299 26.2453 82.2585 26.2453Z"/><path xmlns="http://www.w3.org/2000/svg" fill="white" d="M101.617 23.576L99.3135 25.7467V29.7653H94.5221V8H99.3135V20.32L106.316 13.984H112.029L105.149 20.672L112.644 29.7653H106.839L101.617 23.576Z"/><path xmlns="http://www.w3.org/2000/svg" fill="white" d="M124.722 13.7493C126.77 13.7493 128.418 14.336 129.667 15.5093C130.937 16.6827 131.572 18.4231 131.572 20.7307V29.7653H126.78V21.4347C126.78 20.1831 126.493 19.2542 125.92 18.648C125.347 18.0222 124.517 17.7093 123.432 17.7093C122.224 17.7093 121.262 18.0711 120.545 18.7947C119.828 19.4987 119.47 20.5547 119.47 21.9627V29.7653H114.679V13.984H119.255V15.832C119.89 15.1671 120.678 14.6587 121.62 14.3067C122.562 13.9351 123.596 13.7493 124.722 13.7493Z"/><path xmlns="http://www.w3.org/2000/svg" fill="white" d="M152.281 21.9333C152.281 21.992 152.251 22.4027 152.189 23.1653H139.688C139.914 24.1431 140.446 24.9156 141.286 25.4827C142.125 26.0498 143.169 26.3333 144.418 26.3333C145.278 26.3333 146.036 26.216 146.691 25.9813C147.367 25.7271 147.992 25.336 148.565 24.808L151.114 27.448C149.558 29.1493 147.285 30 144.296 30C142.432 30 140.784 29.6578 139.351 28.9733C137.917 28.2693 136.811 27.3013 136.033 26.0693C135.255 24.8373 134.866 23.4391 134.866 21.8747C134.866 20.3298 135.245 18.9413 136.003 17.7093C136.781 16.4578 137.835 15.4898 139.166 14.8053C140.518 14.1013 142.023 13.7493 143.681 13.7493C145.299 13.7493 146.763 14.0818 148.074 14.7467C149.384 15.4116 150.408 16.3698 151.145 17.6213C151.903 18.8533 152.281 20.2907 152.281 21.9333ZM143.712 17.2107C142.627 17.2107 141.716 17.504 140.978 18.0907C140.241 18.6773 139.791 19.4791 139.627 20.496H147.766C147.603 19.4987 147.152 18.7067 146.415 18.12C145.678 17.5138 144.777 17.2107 143.712 17.2107Z"/><path xmlns="http://www.w3.org/2000/svg" fill="white" d="M160.048 16.0667C160.621 15.304 161.389 14.7271 162.352 14.336C163.334 13.9449 164.461 13.7493 165.73 13.7493V17.9733C165.198 17.9342 164.839 17.9147 164.655 17.9147C163.283 17.9147 162.208 18.2862 161.43 19.0293C160.652 19.7529 160.263 20.848 160.263 22.3147V29.7653H155.471V13.984H160.048V16.0667Z"/><path xmlns="http://www.w3.org/2000/svg" fill="white" d="M174.198 30C172.827 30 171.485 29.8436 170.175 29.5307C168.864 29.1982 167.82 28.7876 167.042 28.2987L168.639 25.0133C169.376 25.4631 170.267 25.8347 171.311 26.128C172.356 26.4018 173.379 26.5387 174.383 26.5387C176.41 26.5387 177.424 26.0596 177.424 25.1013C177.424 24.6516 177.147 24.3289 176.594 24.1333C176.041 23.9378 175.192 23.7716 174.045 23.6347C172.693 23.4391 171.577 23.2142 170.697 22.96C169.817 22.7058 169.049 22.256 168.393 21.6107C167.759 20.9653 167.441 20.0462 167.441 18.8533C167.441 17.856 167.738 16.976 168.332 16.2133C168.946 15.4311 169.827 14.8249 170.973 14.3947C172.141 13.9644 173.513 13.7493 175.089 13.7493C176.256 13.7493 177.413 13.8764 178.56 14.1307C179.727 14.3653 180.69 14.6978 181.447 15.128L179.85 18.384C178.396 17.6018 176.809 17.2107 175.089 17.2107C174.065 17.2107 173.298 17.3476 172.786 17.6213C172.274 17.8951 172.018 18.2471 172.018 18.6773C172.018 19.1662 172.294 19.5084 172.847 19.704C173.4 19.8996 174.28 20.0853 175.489 20.2613C176.84 20.4764 177.946 20.7111 178.806 20.9653C179.666 21.2 180.413 21.64 181.048 22.2853C181.683 22.9307 182 23.8302 182 24.984C182 25.9618 181.693 26.832 181.079 27.5947C180.464 28.3573 179.563 28.9538 178.376 29.384C177.209 29.7947 175.816 30 174.198 30Z"/>',
    },
    logo: {
      width: 53,
      height: 34,
      viewBox: [0, 0, 53, 34],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#0B92D2" d="M10.2143 12.1997H0.29834L10.7652 33.6843H20.6811L10.2143 12.1997Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#137BC0" d="M30.5971 6.69141H20.6812L31.8825 33.6848H41.7985L30.5971 6.69141Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#0E763F" d="M20.6812 6.69141H30.5972L20.6812 33.6848H10.7653L20.6812 6.69141Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#FFD100" fill-rule="evenodd" d="M15.0278 22.0806L10.7651 33.6846H20.6811L15.0278 22.0806Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="#FFD100" fill-rule="evenodd" d="M10.7651 33.6846H20.6811L15.0278 22.0806L10.7651 33.6846Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="#E20613" d="M43.0836 0.814941H52.9995L41.6145 33.6845H31.6986L43.0836 0.814941Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#0E4B9C" fill-rule="evenodd" d="M36.2935 20.4189L31.7823 33.4434L31.8824 33.6846H41.7983L41.6982 33.4434L36.2935 20.4189Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="#0E4B9C" fill-rule="evenodd" d="M41.6147 33.6846L41.6982 33.4434L36.2935 20.4189L31.7823 33.4434L31.6987 33.6846H41.6147Z" clip-rule="evenodd"/>',
    },
    github: {
      width: 50,
      height: 50,
      viewBox: [0, 0, 50, 50],
      data: '<circle xmlns="http://www.w3.org/2000/svg" cx="25" cy="25" r="24" stroke="white" stroke-width="2" opacity=".05"/><g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_245_64)"><path fill="white" d="M25 15.417C19.475 15.417 15 19.817 15 25.2437C15 29.5862 17.865 33.2687 21.8375 34.567C22.3375 34.6595 22.5208 34.3553 22.5208 34.0945C22.5208 33.8612 22.5125 33.2428 22.5083 32.4237C19.7267 33.0162 19.14 31.1053 19.14 31.1053C18.685 29.9712 18.0275 29.6678 18.0275 29.6678C17.1217 29.0587 18.0975 29.0712 18.0975 29.0712C19.1017 29.1395 19.6292 30.0837 19.6292 30.0837C20.5208 31.5862 21.97 31.152 22.5417 30.9012C22.6317 30.2653 22.8892 29.8328 23.175 29.587C20.9542 29.3412 18.62 28.4962 18.62 24.7312C18.62 23.6587 19.0075 22.782 19.6492 22.0945C19.5367 21.8462 19.1992 20.847 19.7367 19.4937C19.7367 19.4937 20.5742 19.2303 22.4867 20.5012C23.2867 20.2828 24.1367 20.1745 24.9867 20.1695C25.8367 20.1745 26.6867 20.2828 27.4867 20.5012C29.3867 19.2303 30.2242 19.4937 30.2242 19.4937C30.7617 20.847 30.4242 21.8462 30.3242 22.0945C30.9617 22.782 31.3492 23.6587 31.3492 24.7312C31.3492 28.5062 29.0117 29.337 26.7867 29.5787C27.1367 29.8737 27.4617 30.4762 27.4617 31.397C27.4617 32.712 27.4492 33.7687 27.4492 34.0878C27.4492 34.3453 27.6242 34.6528 28.1367 34.5545C32.1375 33.2645 35 29.5795 35 25.2437C35 19.817 30.5225 15.417 25 15.417Z"/></g><defs xmlns="http://www.w3.org/2000/svg"><clipPath id="clip0_245_64"><path fill="white" d="M0 0H20V20H0z" transform="translate(15 15)"/></clipPath></defs>',
    },
    instagram: {
      width: 50,
      height: 50,
      viewBox: [0, 0, 50, 50],
      data: '<circle xmlns="http://www.w3.org/2000/svg" cx="25" cy="25" r="24" stroke="white" stroke-width="2" opacity=".05"/><g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_245_62)"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M29.1665 16.6665H20.8332C18.532 16.6665 16.6665 18.532 16.6665 20.8332V29.1665C16.6665 31.4677 18.532 33.3332 20.8332 33.3332H29.1665C31.4677 33.3332 33.3332 31.4677 33.3332 29.1665V20.8332C33.3332 18.532 31.4677 16.6665 29.1665 16.6665Z"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M28.3333 24.4753C28.4361 25.1688 28.3176 25.8771 27.9947 26.4994C27.6718 27.1218 27.1609 27.6264 26.5346 27.9416C25.9083 28.2569 25.1986 28.3666 24.5064 28.2552C23.8142 28.1438 23.1747 27.817 22.679 27.3212C22.1832 26.8254 21.8564 26.186 21.745 25.4938C21.6336 24.8015 21.7433 24.0918 22.0585 23.4656C22.3737 22.8393 22.8784 22.3284 23.5007 22.0055C24.1231 21.6825 24.8314 21.5641 25.5249 21.6669C26.2324 21.7718 26.8873 22.1015 27.393 22.6072C27.8987 23.1129 28.2283 23.7678 28.3333 24.4753Z"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M29.5835 20.4165H29.5918"/></g><defs xmlns="http://www.w3.org/2000/svg"><clipPath id="clip0_245_62"><path fill="white" d="M0 0H20V20H0z" transform="translate(15 15)"/></clipPath></defs>',
    },
    medium: {
      width: 50,
      height: 50,
      viewBox: [0, 0, 50, 50],
      data: '<circle xmlns="http://www.w3.org/2000/svg" cx="25" cy="25" r="24" stroke="white" stroke-width="2" opacity=".05"/><g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_245_63)"><path fill="white" d="M33.4042 18.9438L35 17.4172V17.083H29.4717L25.5317 26.8897L21.0492 17.083H15.2525V17.4172L17.1167 19.6613C17.2983 19.8272 17.3933 20.0697 17.3692 20.3138V29.133C17.4267 29.4505 17.3233 29.7772 17.1 30.008L15 32.553V32.883H20.9542V32.5488L18.8542 30.008C18.6267 29.7763 18.5192 29.4555 18.565 29.133V21.5047L23.7917 32.8872H24.3992L28.8933 21.5047V30.5722C28.8933 30.8113 28.8933 30.8605 28.7367 31.0172L27.12 32.5813V32.9163H34.9633V32.5822L33.405 31.0563C33.2683 30.953 33.1975 30.7797 33.2267 30.6113V19.3888C33.1975 19.2197 33.2675 19.0463 33.4042 18.9438Z"/></g><defs xmlns="http://www.w3.org/2000/svg"><clipPath id="clip0_245_63"><path fill="white" d="M0 0H20V20H0z" transform="translate(15 15)"/></clipPath></defs>',
    },
    reddit: {
      width: 50,
      height: 50,
      viewBox: [0, 0, 50, 50],
      data: '<circle xmlns="http://www.w3.org/2000/svg" cx="25" cy="25" r="24" stroke="white" stroke-width="2" opacity=".05"/><g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_245_65)"><path fill="white" d="M32.7708 22.757C32.1391 22.757 31.5833 23.0228 31.1741 23.437C29.67 22.3803 27.6416 21.7003 25.3941 21.6278L26.5616 16.2895L30.2791 17.1362C30.2791 18.0595 31.0208 18.8137 31.9308 18.8137C32.8583 18.8137 33.6041 18.0395 33.6041 17.1153C33.6041 16.1912 32.8633 15.417 31.9316 15.417C31.2825 15.417 30.7225 15.8145 30.4433 16.3578L26.3375 15.4345C26.1308 15.3787 25.9283 15.5287 25.8733 15.7387L24.5916 21.6237C22.3616 21.7178 20.355 22.397 18.8458 23.4545C18.4366 23.0228 17.8591 22.757 17.2275 22.757C14.8841 22.757 14.1166 25.9478 16.2625 27.0387C16.1866 27.3762 16.1525 27.7362 16.1525 28.0953C16.1525 31.6795 20.1316 34.5837 25.0175 34.5837C29.9241 34.5837 33.9033 31.6795 33.9033 28.0953C33.9033 27.7362 33.8658 27.3595 33.7733 27.0212C35.8758 25.9262 35.1016 22.7587 32.7708 22.757ZM19.6675 27.2653C19.6675 26.3245 20.4091 25.567 21.3408 25.567C22.2508 25.567 22.9933 26.3195 22.9933 27.2653C22.9933 28.1895 22.2516 28.9428 21.3408 28.9428C20.4133 28.947 19.6675 28.1895 19.6675 27.2653ZM28.7 31.2637C27.1658 32.8203 22.8366 32.8203 21.3016 31.2637C21.1325 31.1137 21.1325 30.8487 21.3016 30.6778C21.4491 30.5278 21.7108 30.5278 21.8583 30.6778C23.03 31.897 26.9166 31.9178 28.1391 30.6778C28.2866 30.5278 28.5483 30.5278 28.6958 30.6778C28.8683 30.8495 28.8683 31.1145 28.7 31.2637ZM28.6658 28.9462C27.7558 28.9462 27.0141 28.1937 27.0141 27.2703C27.0141 26.3295 27.7558 25.572 28.6658 25.572C29.5933 25.572 30.3391 26.3245 30.3391 27.2703C30.335 28.1895 29.5933 28.9462 28.6658 28.9462Z"/></g><defs xmlns="http://www.w3.org/2000/svg"><clipPath id="clip0_245_65"><path fill="white" d="M0 0H20V20H0z" transform="translate(15 15)"/></clipPath></defs>',
    },
    telegram: {
      width: 50,
      height: 50,
      viewBox: [0, 0, 50, 50],
      data: '<circle xmlns="http://www.w3.org/2000/svg" cx="25" cy="25" r="24" stroke="white" stroke-width="2" opacity=".05"/><path xmlns="http://www.w3.org/2000/svg" fill="white" d="M22.8478 27.9848L22.517 32.6382C22.9903 32.6382 23.1953 32.4349 23.4412 32.1907L25.6604 30.0698L30.2588 33.4374C31.1022 33.9074 31.6964 33.6599 31.9239 32.6615L34.9423 18.5179L34.9431 18.517C35.2106 17.2703 34.4923 16.7828 33.6706 17.0887L15.9285 23.8813C14.7176 24.3513 14.736 25.0264 15.7227 25.3322L20.2586 26.7431L30.7947 20.1504C31.2905 19.8221 31.7414 20.0037 31.3705 20.3321L22.8478 27.9848Z"/>',
    },
    twitter: {
      width: 50,
      height: 50,
      viewBox: [0, 0, 50, 50],
      data: '<circle xmlns="http://www.w3.org/2000/svg" cx="25" cy="25" r="24" stroke="white" stroke-width="2" opacity=".05"/><path xmlns="http://www.w3.org/2000/svg" fill="white" d="M34.1668 17.5001C33.3688 18.063 32.4853 18.4935 31.5502 18.7751C31.0483 18.198 30.3813 17.789 29.6394 17.6034C28.8974 17.4177 28.1164 17.4644 27.4019 17.7371C26.6874 18.0098 26.0739 18.4954 25.6443 19.1282C25.2148 19.7609 24.9899 20.5104 25.0002 21.2751V22.1084C23.5357 22.1464 22.0846 21.8216 20.776 21.163C19.4674 20.5043 18.3421 19.5323 17.5002 18.3334C17.5002 18.3334 14.1668 25.8334 21.6668 29.1667C19.9506 30.3317 17.9061 30.9159 15.8335 30.8334C23.3335 35.0001 32.5002 30.8334 32.5002 21.2501C32.4994 21.018 32.4771 20.7864 32.4335 20.5584C33.284 19.7197 33.8842 18.6607 34.1668 17.5001Z"/>',
    },
    "presale-bg-2": {
      width: 375,
      height: 768,
      viewBox: [0, 0, 375, 768],
      data: '<mask xmlns="http://www.w3.org/2000/svg" id="a" style="mask-type:alpha" width="375" height="768" x="0" y="0" maskUnits="userSpaceOnUse"><path fill="#171B29" fill-rule="evenodd" d="M320.703 712.07C350.69 712.07 375 736.325 375 766.246V712.07H320.703ZM374.972 768H375V766.246C375 766.833 374.991 767.418 374.972 768Z" clip-rule="evenodd"/><path fill="#171B29" fill-rule="evenodd" d="M54.2969 55.9302C24.3095 55.9302 0 31.6746 0 1.75391V55.9302H54.2969ZM0.0279188 0H0V1.75391C0 1.16704 0.00935793 0.582352 0.0279188 0Z" clip-rule="evenodd"/><path fill="#171B29" d="M0 55.9302H375V712.07H0V55.9302Z"/></mask><g xmlns="http://www.w3.org/2000/svg" mask="url(#a)"><path fill="url(#paint0_linear_20_193)" d="M-130.976 1199.91L639.024 1097.23L639.024 646.94L-130.976 947.106L-130.976 1199.91Z"/><path fill="url(#paint1_linear_20_193)" d="M637.136 553.375L-1.84473 803.583L-61.9286 561.843L-126.258 292.38L-126.258 200.257L-11.8272 252.974L637.009 33.583L637.136 553.375Z"/><path fill="#FFD100" d="M-140.412 957.31L110.408 854.845L639.024 1097.99L639.024 551.777L528.742 595.747L-127.093 291.192L-140.412 957.31Z"/><path fill="#E20613" d="M-152.717 195.99L724 601.7L724 -9.50532L-341.29 -483.286L-152.717 195.99Z"/><path fill="url(#paint2_linear_20_193)" d="M-126.502 291.192L-127.202 291.384L-127.202 859.255L529.563 595.512L-126.502 291.192Z"/><path fill="url(#paint3_linear_20_193)" d="M639.023 1097.99L639.023 646.94L110.592 854.812L639.023 1097.99Z"/><path fill="url(#paint4_linear_20_193)" d="M637.138 561.181L637.138 91.2541L48.3145 289.319L637.138 561.181Z"/></g><defs xmlns="http://www.w3.org/2000/svg"><linearGradient id="paint0_linear_20_193" x1="639.024" x2="16.694" y1="973.216" y2="973.216" gradientUnits="userSpaceOnUse"><stop stop-color="#2B3087"/><stop offset=".82" stop-color="#00B4EC"/></linearGradient><linearGradient id="paint1_linear_20_193" x1="637.137" x2="-128.391" y1="418.775" y2="418.775" gradientUnits="userSpaceOnUse"><stop stop-color="#2B3087"/><stop offset="1" stop-color="#00B4EC"/></linearGradient><linearGradient id="paint2_linear_20_193" x1="527.675" x2="-127.202" y1="547.481" y2="547.481" gradientUnits="userSpaceOnUse"><stop stop-color="#009540"/><stop offset="1" stop-color="#26A960"/></linearGradient><linearGradient id="paint3_linear_20_193" x1="110.592" x2="639.023" y1="872.467" y2="872.467" gradientUnits="userSpaceOnUse"><stop stop-color="#3FAE6C"/><stop offset="1" stop-color="#006633"/></linearGradient><linearGradient id="paint4_linear_20_193" x1="342.784" x2="342.784" y1="561.181" y2="91.254" gradientUnits="userSpaceOnUse"><stop stop-color="#164194"/><stop offset="1" stop-color="#005CA9"/></linearGradient></defs>',
    },
    "green-arrow": {
      width: 16,
      height: 16,
      viewBox: [0, 0, 16, 16],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#22A75D" fill-rule="evenodd" d="M8.70727 2.62615C8.31675 2.23562 7.68358 2.23562 7.29306 2.62615C6.90253 3.01667 6.90253 3.64983 7.29306 4.04036L10.2526 6.99992H3.3335C2.78121 6.99992 2.3335 7.44763 2.3335 7.99992C2.3335 8.5522 2.78121 8.99992 3.3335 8.99992H10.2526L7.29306 11.9595C6.90253 12.35 6.90253 12.9832 7.29306 13.3737C7.68358 13.7642 8.31675 13.7642 8.70727 13.3737L13.3736 8.70736L13.3739 8.70703M13.591 7.61714C13.5422 7.49919 13.4698 7.38869 13.3739 7.29281L8.70727 2.62615M13.3761 8.7049C13.5558 8.52411 13.6668 8.27498 13.6668 7.99992C13.6668 7.86433 13.6398 7.73504 13.591 7.61714" clip-rule="evenodd"/>',
    },
    "blue-arrow": {
      width: 16,
      height: 16,
      viewBox: [0, 0, 16, 16],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#2278D4" fill-rule="evenodd" d="M8.70727 2.62615C8.31675 2.23562 7.68358 2.23562 7.29306 2.62615C6.90253 3.01667 6.90253 3.64983 7.29306 4.04036L10.2526 6.99992H3.3335C2.78121 6.99992 2.3335 7.44763 2.3335 7.99992C2.3335 8.5522 2.78121 8.99992 3.3335 8.99992H10.2526L7.29306 11.9595C6.90253 12.35 6.90253 12.9832 7.29306 13.3737C7.68358 13.7642 8.31675 13.7642 8.70727 13.3737L13.3736 8.70736L13.3739 8.70703M13.591 7.61714C13.5422 7.49919 13.4698 7.38869 13.3739 7.29281L8.70727 2.62615M13.3761 8.7049C13.5558 8.52411 13.6668 8.27498 13.6668 7.99992C13.6668 7.86433 13.6398 7.73504 13.591 7.61714" clip-rule="evenodd"/>',
    },
    "menu-open": {
      width: 15,
      height: 15,
      viewBox: [0, 0, 15, 15],
      data: '<path xmlns="http://www.w3.org/2000/svg" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7275 1L0.999617 13.7279"/><path xmlns="http://www.w3.org/2000/svg" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1L13.7279 13.7279"/>',
    },
    "menu-closed": {
      width: 24,
      height: 24,
      viewBox: [0, 0, 24, 24],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="white" fill-rule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z" clip-rule="evenodd"/>',
    },
    "purchase-icon-1": {
      width: 86,
      height: 86,
      viewBox: [0, 0, 86, 86],
      data: '<circle xmlns="http://www.w3.org/2000/svg" cx="43" cy="43" r="43" fill="#0F1320"/><path xmlns="http://www.w3.org/2000/svg" stroke="#22A75D" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M40 49L46 43L40 37"/>',
    },
    "purchase-icon-2": {
      width: 86,
      height: 86,
      viewBox: [0, 0, 86, 86],
      data: '<circle xmlns="http://www.w3.org/2000/svg" cx="43" cy="43" r="43" fill="#0F1320"/><path xmlns="http://www.w3.org/2000/svg" stroke="#FFD100" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M40 49L46 43L40 37"/>',
    },
    "goals-blue": {
      width: 132,
      height: 132,
      viewBox: [0, 0, 132, 132],
      data: '<g xmlns="http://www.w3.org/2000/svg" filter="url(#filter0_d_7_376)"><path fill="#2278D4" d="M107 51C107 73.6437 88.6437 92 66 92C25 92 25 92 25 51C25 28.3563 43.3563 10 66 10C88.6437 10 107 28.3563 107 51Z"/></g><defs xmlns="http://www.w3.org/2000/svg"><filter id="filter0_d_7_376" width="132" height="132" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="15"/><feGaussianBlur stdDeviation="12.5"/><feColorMatrix values="0 0 0 0 0.133333 0 0 0 0 0.470588 0 0 0 0 0.831373 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7_376"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_7_376" result="shape"/></filter></defs>',
    },
    "goals-green": {
      width: 132,
      height: 132,
      viewBox: [0, 0, 132, 132],
      data: '<g xmlns="http://www.w3.org/2000/svg" filter="url(#filter0_d_7_375)"><path fill="#22A75D" d="M107 51C107 73.6437 88.6437 92 66 92C25 92 25 92 25 51C25 28.3563 43.3563 10 66 10C88.6437 10 107 28.3563 107 51Z"/></g><defs xmlns="http://www.w3.org/2000/svg"><filter id="filter0_d_7_375" width="132" height="132" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="15"/><feGaussianBlur stdDeviation="12.5"/><feColorMatrix values="0 0 0 0 0.133333 0 0 0 0 0.654902 0 0 0 0 0.364706 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7_375"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_7_375" result="shape"/></filter></defs>',
    },
    "goals-red": {
      width: 132,
      height: 132,
      viewBox: [0, 0, 132, 132],
      data: '<g xmlns="http://www.w3.org/2000/svg" filter="url(#filter0_d_7_378)"><path fill="#E20613" d="M107 51C107 73.6437 88.6437 92 66 92C25 92 25 92 25 51C25 28.3563 43.3563 10 66 10C88.6437 10 107 28.3563 107 51Z"/></g><defs xmlns="http://www.w3.org/2000/svg"><filter id="filter0_d_7_378" width="132" height="132" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="15"/><feGaussianBlur stdDeviation="12.5"/><feColorMatrix values="0 0 0 0 0.886275 0 0 0 0 0.0235294 0 0 0 0 0.0745098 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7_378"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_7_378" result="shape"/></filter></defs>',
    },
    "goals-yellow": {
      width: 132,
      height: 132,
      viewBox: [0, 0, 132, 132],
      data: '<g xmlns="http://www.w3.org/2000/svg" filter="url(#filter0_d_7_377)"><path fill="#FFD100" d="M107 51C107 73.6437 88.6437 92 66 92C25 92 25 92 25 51C25 28.3563 43.3563 10 66 10C88.6437 10 107 28.3563 107 51Z"/></g><defs xmlns="http://www.w3.org/2000/svg"><filter id="filter0_d_7_377" width="132" height="132" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="15"/><feGaussianBlur stdDeviation="12.5"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 0.819608 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7_377"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_7_377" result="shape"/></filter></defs>',
    },
    "services-bg-2": {
      width: 960,
      height: 1087,
      viewBox: [0, 0, 960, 1087],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="white" d="M0 400C0 179.086 179.086 0 400 0H960V800H0V400Z"/><path xmlns="http://www.w3.org/2000/svg" fill="white" fill-rule="evenodd" d="M682 800C835.535 800 960 924.465 960 1078V800H682ZM959.857 1087H960V1078C960 1081.01 959.952 1084.01 959.857 1087Z" clip-rule="evenodd"/>',
    },
    "creators-crown": {
      width: 120,
      height: 120,
      viewBox: [0, 0, 120, 120],
      data: '<g xmlns="http://www.w3.org/2000/svg" filter="url(#filter0_d_242_54)"><circle cx="60" cy="45" r="35" fill="#22A75D"/></g><g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_242_54)"><path fill="#191F30" d="M70.766 37.5659C70.4006 37.4137 69.9981 37.3737 69.6099 37.4509C69.2217 37.5282 68.8653 37.7193 68.586 37.9999L66 40.5859L61.414 35.9999C61.0389 35.6249 60.5303 35.4143 60 35.4143C59.4697 35.4143 58.9611 35.6249 58.586 35.9999L54 40.5859L51.414 37.9999C51.1343 37.7203 50.778 37.5298 50.3901 37.4527C50.0022 37.3756 49.6001 37.4152 49.2347 37.5665C48.8693 37.7179 48.557 37.9741 48.3372 38.303C48.1174 38.6318 48.0001 39.0184 48 39.4139V49.9999C48.0016 51.3255 48.5289 52.5963 49.4662 53.5337C50.4036 54.471 51.6744 54.9983 53 54.9999H67C68.3256 54.9983 69.5964 54.471 70.5338 53.5337C71.4711 52.5963 71.9984 51.3255 72 49.9999V39.4139C72.0001 39.0183 71.8829 38.6317 71.6633 38.3027C71.4436 37.9738 71.1314 37.7174 70.766 37.5659Z"/></g><defs xmlns="http://www.w3.org/2000/svg"><filter id="filter0_d_242_54" width="120" height="120" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="15"/><feGaussianBlur stdDeviation="12.5"/><feColorMatrix values="0 0 0 0 0.133333 0 0 0 0 0.654902 0 0 0 0 0.364706 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_242_54"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_242_54" result="shape"/></filter><clipPath id="clip0_242_54"><path fill="white" d="M0 0H24V24H0z" transform="translate(48 33)"/></clipPath></defs>',
    },
    "folders-star": {
      width: 120,
      height: 120,
      viewBox: [0, 0, 120, 120],
      data: '<g xmlns="http://www.w3.org/2000/svg" filter="url(#filter0_d_242_53)"><circle cx="60" cy="45" r="35" fill="#2278D4"/></g><g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_242_53)"><path fill="#191F30" d="M49.3267 45.4L52.8867 48L51.5347 52.187C51.3162 52.8363 51.3134 53.539 51.5268 54.19C51.7402 54.8411 52.1583 55.4058 52.7187 55.8C53.2696 56.2067 53.9371 56.4247 54.6219 56.4212C55.3066 56.4178 55.9719 56.1932 56.5187 55.781L59.9997 53.219L63.4817 55.778C64.0316 56.1824 64.6955 56.4021 65.3781 56.4054C66.0607 56.4087 66.7267 56.1955 67.2805 55.7965C67.8342 55.3974 68.2472 54.833 68.46 54.1844C68.6728 53.5359 68.6744 52.8365 68.4647 52.187L67.1127 48L70.6727 45.4C71.2218 44.9985 71.6301 44.4337 71.8391 43.7863C72.048 43.139 72.0471 42.4421 71.8364 41.7953C71.6257 41.1485 71.2159 40.5849 70.6657 40.1849C70.1155 39.7848 69.453 39.5689 68.7727 39.568H64.3997L63.0727 35.432C62.864 34.7809 62.454 34.213 61.9017 33.81C61.3494 33.4071 60.6834 33.1899 59.9997 33.1899C59.316 33.1899 58.65 33.4071 58.0977 33.81C57.5454 34.213 57.1354 34.7809 56.9267 35.432L55.5997 39.568H51.2307C50.5504 39.5689 49.8879 39.7848 49.3377 40.1849C48.7875 40.5849 48.3777 41.1485 48.167 41.7953C47.9563 42.4421 47.9554 43.139 48.1644 43.7863C48.3733 44.4337 48.7816 44.9985 49.3307 45.4H49.3267Z"/></g><defs xmlns="http://www.w3.org/2000/svg"><filter id="filter0_d_242_53" width="120" height="120" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="15"/><feGaussianBlur stdDeviation="12.5"/><feColorMatrix values="0 0 0 0 0.133333 0 0 0 0 0.470588 0 0 0 0 0.831373 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_242_53"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_242_53" result="shape"/></filter><clipPath id="clip0_242_53"><path fill="white" d="M0 0H24V24H0z" transform="translate(48 33)"/></clipPath></defs>',
    },
  },
  allIds: [
    "presale-bg-2",
    "green-arrow",
    "blue-arrow",
    "menu-open",
    "menu-closed",
    "logo",
    "github",
    "instagram",
    "medium",
    "reddit",
    "telegram",
    "twitter",
    "purchase-icon-1",
    "purchase-icon-2",
    "goals-blue",
    "goals-green",
    "goals-red",
    "goals-yellow",
    "services-bg-2",
    "creators-crown",
    "folders-star",
    "applogo",
  ],
};

function SVG(props) {
  if (props.isHidden) {
    return (
      <svg display="none" height="0">
        {props.children}
      </svg>
    );
  }

  let file = files.byId[props.id];

  if (!file) return null;

  let width = props.width || file.width || null;
  let height = props.height || file.height || null;
  let viewBox = file.viewBox
    ? file.viewBox.join(" ")
    : `0 0 ${props.width} ${props.height}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      preserveAspectRatio="xMinYMin"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <use href={`#${prefix}-${props.id}`} />
    </svg>
  );
}

function SVGSource(_props) {
  return (
    <SVG isHidden={true}>
      <defs>
        {files.allIds.reduce((defs, fileId, fileIndex) => {
          const file = files.byId[fileId];
          return defs.concat(
            <g
              key={fileIndex}
              id={`${prefix}-${fileId}`}
              dangerouslySetInnerHTML={{ __html: file.data }}
            ></g>
          );
        }, [])}
      </defs>
    </SVG>
  );
}

export { SVG, SVGSource };
