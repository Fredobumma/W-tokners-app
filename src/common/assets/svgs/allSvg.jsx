import { SVGSource, SvgComponent } from "./svgComponent";

const files = {
  byId: {
    namedLogo: {
      width: 188,
      height: 30,
      viewBox: [0, 0, 188, 30],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#0B92D2" d="M8.89937 10.7179H0L9.39378 29.9999H18.2932L8.89937 10.7179Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#137BC0" d="M27.1923 5.7738H18.293L28.346 29.9999H37.2453L27.1923 5.7738Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#0E763F" d="M18.293 5.7738H27.1924L18.293 29.9999H9.39363L18.293 5.7738Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#FFD100" fill-rule="evenodd" d="M13.2192 19.5854L9.39355 29.9998H18.2929L13.2192 19.5854Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="#FFD100" fill-rule="evenodd" d="M9.39355 29.9998H18.2929L13.2192 19.5854L9.39355 29.9998Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="#E20613" d="M38.399 0.500122H47.2983L37.0805 29.9999H28.1812L38.399 0.500122Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#0E4B9C" fill-rule="evenodd" d="M32.3049 18.0944L28.2561 29.7835L28.346 30H37.2453L37.1555 29.7835L32.3049 18.0944Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="#0E4B9C" fill-rule="evenodd" d="M37.0805 30L37.1555 29.7835L32.3049 18.0944L28.2561 29.7835L28.1812 30H37.0805Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M61.8801 13.104H55V9.232H73.7359V13.104H66.8559V29.7653H61.8801V13.104Z"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M82.2585 30C80.518 30 78.9516 29.6578 77.5592 28.9733C76.1873 28.2693 75.1123 27.3013 74.3341 26.0693C73.556 24.8373 73.167 23.4391 73.167 21.8747C73.167 20.3102 73.556 18.912 74.3341 17.68C75.1123 16.448 76.1873 15.4898 77.5592 14.8053C78.9516 14.1013 80.518 13.7493 82.2585 13.7493C83.999 13.7493 85.5552 14.1013 86.9272 14.8053C88.2991 15.4898 89.3741 16.448 90.1522 17.68C90.9303 18.912 91.3193 20.3102 91.3193 21.8747C91.3193 23.4391 90.9303 24.8373 90.1522 26.0693C89.3741 27.3013 88.2991 28.2693 86.9272 28.9733C85.5552 29.6578 83.999 30 82.2585 30ZM82.2585 26.2453C83.4871 26.2453 84.4905 25.8542 85.2686 25.072C86.0671 24.2702 86.4664 23.2044 86.4664 21.8747C86.4664 20.5449 86.0671 19.4889 85.2686 18.7067C84.4905 17.9049 83.4871 17.504 82.2585 17.504C81.0299 17.504 80.0164 17.9049 79.2178 18.7067C78.4192 19.4889 78.0199 20.5449 78.0199 21.8747C78.0199 23.2044 78.4192 24.2702 79.2178 25.072C80.0164 25.8542 81.0299 26.2453 82.2585 26.2453Z"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M101.617 23.576L99.3135 25.7467V29.7653H94.5221V8H99.3135V20.32L106.316 13.984H112.029L105.149 20.672L112.644 29.7653H106.839L101.617 23.576Z"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M124.722 13.7493C126.77 13.7493 128.418 14.336 129.667 15.5093C130.937 16.6827 131.572 18.4231 131.572 20.7307V29.7653H126.78V21.4347C126.78 20.1831 126.493 19.2542 125.92 18.648C125.347 18.0222 124.517 17.7093 123.432 17.7093C122.224 17.7093 121.262 18.0711 120.545 18.7947C119.828 19.4987 119.47 20.5547 119.47 21.9627V29.7653H114.679V13.984H119.255V15.832C119.89 15.1671 120.678 14.6587 121.62 14.3067C122.562 13.9351 123.596 13.7493 124.722 13.7493Z"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M152.281 21.9333C152.281 21.992 152.251 22.4027 152.189 23.1653H139.688C139.914 24.1431 140.446 24.9156 141.286 25.4827C142.125 26.0498 143.169 26.3333 144.418 26.3333C145.278 26.3333 146.036 26.216 146.691 25.9813C147.367 25.7271 147.992 25.336 148.565 24.808L151.114 27.448C149.558 29.1493 147.285 30 144.296 30C142.432 30 140.784 29.6578 139.351 28.9733C137.917 28.2693 136.811 27.3013 136.033 26.0693C135.255 24.8373 134.866 23.4391 134.866 21.8747C134.866 20.3298 135.245 18.9413 136.003 17.7093C136.781 16.4578 137.835 15.4898 139.166 14.8053C140.518 14.1013 142.023 13.7493 143.681 13.7493C145.299 13.7493 146.763 14.0818 148.074 14.7467C149.384 15.4116 150.408 16.3698 151.145 17.6213C151.903 18.8533 152.281 20.2907 152.281 21.9333ZM143.712 17.2107C142.627 17.2107 141.716 17.504 140.978 18.0907C140.241 18.6773 139.791 19.4791 139.627 20.496H147.766C147.603 19.4987 147.152 18.7067 146.415 18.12C145.678 17.5138 144.777 17.2107 143.712 17.2107Z"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M160.048 16.0667C160.621 15.304 161.389 14.7271 162.352 14.336C163.334 13.9449 164.461 13.7493 165.73 13.7493V17.9733C165.198 17.9342 164.839 17.9147 164.655 17.9147C163.283 17.9147 162.208 18.2862 161.43 19.0293C160.652 19.7529 160.263 20.848 160.263 22.3147V29.7653H155.471V13.984H160.048V16.0667Z"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M174.198 30C172.827 30 171.485 29.8436 170.175 29.5307C168.864 29.1982 167.82 28.7876 167.042 28.2987L168.639 25.0133C169.376 25.4631 170.267 25.8347 171.311 26.128C172.356 26.4018 173.379 26.5387 174.383 26.5387C176.41 26.5387 177.424 26.0596 177.424 25.1013C177.424 24.6516 177.147 24.3289 176.594 24.1333C176.041 23.9378 175.192 23.7716 174.045 23.6347C172.693 23.4391 171.577 23.2142 170.697 22.96C169.817 22.7058 169.049 22.256 168.393 21.6107C167.759 20.9653 167.441 20.0462 167.441 18.8533C167.441 17.856 167.738 16.976 168.332 16.2133C168.946 15.4311 169.827 14.8249 170.973 14.3947C172.141 13.9644 173.513 13.7493 175.089 13.7493C176.256 13.7493 177.413 13.8764 178.56 14.1307C179.727 14.3653 180.69 14.6978 181.447 15.128L179.85 18.384C178.396 17.6018 176.809 17.2107 175.089 17.2107C174.065 17.2107 173.298 17.3476 172.786 17.6213C172.274 17.8951 172.018 18.2471 172.018 18.6773C172.018 19.1662 172.294 19.5084 172.847 19.704C173.4 19.8996 174.28 20.0853 175.489 20.2613C176.84 20.4764 177.946 20.7111 178.806 20.9653C179.666 21.2 180.413 21.64 181.048 22.2853C181.683 22.9307 182 23.8302 182 24.984C182 25.9618 181.693 26.832 181.079 27.5947C180.464 28.3573 179.563 28.9538 178.376 29.384C177.209 29.7947 175.816 30 174.198 30Z"/>',
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
      data: '<g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_245_64)"><path fill="currentcolor" d="M25 15.417C19.475 15.417 15 19.817 15 25.2437C15 29.5862 17.865 33.2687 21.8375 34.567C22.3375 34.6595 22.5208 34.3553 22.5208 34.0945C22.5208 33.8612 22.5125 33.2428 22.5083 32.4237C19.7267 33.0162 19.14 31.1053 19.14 31.1053C18.685 29.9712 18.0275 29.6678 18.0275 29.6678C17.1217 29.0587 18.0975 29.0712 18.0975 29.0712C19.1017 29.1395 19.6292 30.0837 19.6292 30.0837C20.5208 31.5862 21.97 31.152 22.5417 30.9012C22.6317 30.2653 22.8892 29.8328 23.175 29.587C20.9542 29.3412 18.62 28.4962 18.62 24.7312C18.62 23.6587 19.0075 22.782 19.6492 22.0945C19.5367 21.8462 19.1992 20.847 19.7367 19.4937C19.7367 19.4937 20.5742 19.2303 22.4867 20.5012C23.2867 20.2828 24.1367 20.1745 24.9867 20.1695C25.8367 20.1745 26.6867 20.2828 27.4867 20.5012C29.3867 19.2303 30.2242 19.4937 30.2242 19.4937C30.7617 20.847 30.4242 21.8462 30.3242 22.0945C30.9617 22.782 31.3492 23.6587 31.3492 24.7312C31.3492 28.5062 29.0117 29.337 26.7867 29.5787C27.1367 29.8737 27.4617 30.4762 27.4617 31.397C27.4617 32.712 27.4492 33.7687 27.4492 34.0878C27.4492 34.3453 27.6242 34.6528 28.1367 34.5545C32.1375 33.2645 35 29.5795 35 25.2437C35 19.817 30.5225 15.417 25 15.417Z"/></g><defs xmlns="http://www.w3.org/2000/svg"><clipPath id="clip0_245_64"><path fill="currentcolor" d="M0 0H20V20H0z" transform="translate(15 15)"/></clipPath></defs>',
    },
    instagram: {
      width: 50,
      height: 50,
      viewBox: [0, 0, 50, 50],
      data: '<circle xmlns="http://www.w3.org/2000/svg" cx="30" cy="20" r="1" fill="currentcolor"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" fill-rule="evenodd" d="M25 29C27.2091 29 29 27.2091 29 25C29 22.7909 27.2091 21 25 21C22.7909 21 21 22.7909 21 25C21 27.2091 22.7909 29 25 29ZM25 27C26.1046 27 27 26.1046 27 25C27 23.8954 26.1046 23 25 23C23.8954 23 23 23.8954 23 25C23 26.1046 23.8954 27 25 27Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" fill-rule="evenodd" d="M35 20.3989C35 17.4172 32.5828 15 29.6011 15H20.3989C17.4172 15 15 17.4172 15 20.3989V29.6011C15 32.5828 17.4172 35 20.3989 35H29.6011C32.5828 35 35 32.5828 35 29.6011V20.3989ZM20.3994 17.3998C18.7426 17.3998 17.3994 18.7429 17.3994 20.3998V29.6007C17.3994 31.2576 18.7426 32.6007 20.3994 32.6007H29.6004C31.2572 32.6007 32.6004 31.2576 32.6004 29.6007V20.3998C32.6004 18.7429 31.2572 17.3998 29.6004 17.3998H20.3994Z" clip-rule="evenodd"/>',
    },
    medium: {
      width: 50,
      height: 50,
      viewBox: [0, 0, 50, 50],
      data: '<g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_245_63)"><path fill="currentcolor" d="M33.4042 18.9438L35 17.4172V17.083H29.4717L25.5317 26.8897L21.0492 17.083H15.2525V17.4172L17.1167 19.6613C17.2983 19.8272 17.3933 20.0697 17.3692 20.3138V29.133C17.4267 29.4505 17.3233 29.7772 17.1 30.008L15 32.553V32.883H20.9542V32.5488L18.8542 30.008C18.6267 29.7763 18.5192 29.4555 18.565 29.133V21.5047L23.7917 32.8872H24.3992L28.8933 21.5047V30.5722C28.8933 30.8113 28.8933 30.8605 28.7367 31.0172L27.12 32.5813V32.9163H34.9633V32.5822L33.405 31.0563C33.2683 30.953 33.1975 30.7797 33.2267 30.6113V19.3888C33.1975 19.2197 33.2675 19.0463 33.4042 18.9438Z"/></g><defs xmlns="http://www.w3.org/2000/svg"><clipPath id="clip0_245_63"><path fill="currentcolor" d="M0 0H20V20H0z" transform="translate(15 15)"/></clipPath></defs>',
    },
    reddit: {
      width: 50,
      height: 50,
      viewBox: [0, 0, 50, 50],
      data: '<g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_245_65)"><path fill="currentcolor" d="M32.7708 22.757C32.1391 22.757 31.5833 23.0228 31.1741 23.437C29.67 22.3803 27.6416 21.7003 25.3941 21.6278L26.5616 16.2895L30.2791 17.1362C30.2791 18.0595 31.0208 18.8137 31.9308 18.8137C32.8583 18.8137 33.6041 18.0395 33.6041 17.1153C33.6041 16.1912 32.8633 15.417 31.9316 15.417C31.2825 15.417 30.7225 15.8145 30.4433 16.3578L26.3375 15.4345C26.1308 15.3787 25.9283 15.5287 25.8733 15.7387L24.5916 21.6237C22.3616 21.7178 20.355 22.397 18.8458 23.4545C18.4366 23.0228 17.8591 22.757 17.2275 22.757C14.8841 22.757 14.1166 25.9478 16.2625 27.0387C16.1866 27.3762 16.1525 27.7362 16.1525 28.0953C16.1525 31.6795 20.1316 34.5837 25.0175 34.5837C29.9241 34.5837 33.9033 31.6795 33.9033 28.0953C33.9033 27.7362 33.8658 27.3595 33.7733 27.0212C35.8758 25.9262 35.1016 22.7587 32.7708 22.757ZM19.6675 27.2653C19.6675 26.3245 20.4091 25.567 21.3408 25.567C22.2508 25.567 22.9933 26.3195 22.9933 27.2653C22.9933 28.1895 22.2516 28.9428 21.3408 28.9428C20.4133 28.947 19.6675 28.1895 19.6675 27.2653ZM28.7 31.2637C27.1658 32.8203 22.8366 32.8203 21.3016 31.2637C21.1325 31.1137 21.1325 30.8487 21.3016 30.6778C21.4491 30.5278 21.7108 30.5278 21.8583 30.6778C23.03 31.897 26.9166 31.9178 28.1391 30.6778C28.2866 30.5278 28.5483 30.5278 28.6958 30.6778C28.8683 30.8495 28.8683 31.1145 28.7 31.2637ZM28.6658 28.9462C27.7558 28.9462 27.0141 28.1937 27.0141 27.2703C27.0141 26.3295 27.7558 25.572 28.6658 25.572C29.5933 25.572 30.3391 26.3245 30.3391 27.2703C30.335 28.1895 29.5933 28.9462 28.6658 28.9462Z"/></g><defs xmlns="http://www.w3.org/2000/svg"><clipPath id="clip0_245_65"><path fill="currentcolor" d="M0 0H20V20H0z" transform="translate(15 15)"/></clipPath></defs>',
    },
    telegram: {
      width: 50,
      height: 50,
      viewBox: [0, 0, 50, 50],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M22.8478 27.9848L22.517 32.6382C22.9903 32.6382 23.1953 32.4349 23.4412 32.1907L25.6604 30.0698L30.2588 33.4374C31.1022 33.9074 31.6964 33.6599 31.9239 32.6615L34.9423 18.5179L34.9431 18.517C35.2106 17.2703 34.4923 16.7828 33.6706 17.0887L15.9285 23.8813C14.7176 24.3513 14.736 25.0264 15.7227 25.3322L20.2586 26.7431L30.7947 20.1504C31.2905 19.8221 31.7414 20.0037 31.3705 20.3321L22.8478 27.9848Z"/>',
    },
    twitter: {
      width: 50,
      height: 50,
      viewBox: [0, 0, 50, 50],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M34.1668 17.5001C33.3688 18.063 32.4853 18.4935 31.5502 18.7751C31.0483 18.198 30.3813 17.789 29.6394 17.6034C28.8974 17.4177 28.1164 17.4644 27.4019 17.7371C26.6874 18.0098 26.0739 18.4954 25.6443 19.1282C25.2148 19.7609 24.9899 20.5104 25.0002 21.2751V22.1084C23.5357 22.1464 22.0846 21.8216 20.776 21.163C19.4674 20.5043 18.3421 19.5323 17.5002 18.3334C17.5002 18.3334 14.1668 25.8334 21.6668 29.1667C19.9506 30.3317 17.9061 30.9159 15.8335 30.8334C23.3335 35.0001 32.5002 30.8334 32.5002 21.2501C32.4994 21.018 32.4771 20.7864 32.4335 20.5584C33.284 19.7197 33.8842 18.6607 34.1668 17.5001Z"/>',
    },
    username: {
      width: 20,
      height: 20,
      viewBox: [0, 0, 24, 24],
      data: '<g xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />',
    },
    email: {
      width: 20,
      height: 20,
      viewBox: [0, 0, 24, 24],
      data: '<g xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />',
    },
    password: {
      width: 20,
      height: 20,
      viewBox: [0, 0, 24, 24],
      data: '<g xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />',
    },
    "harmburger-menu": {
      width: 15,
      height: 15,
      viewBox: [0, 0, 15, 15],
      data: '<path xmlns="http://www.w3.org/2000/svg" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7275 1L0.999617 13.7279"/><path xmlns="http://www.w3.org/2000/svg" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1L13.7279 13.7279"/>',
    },
    reset: {
      width: 24,
      height: 24,
      viewBox: [0, 0, 24, 24],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3s-3 1.331-3 3s1.329 3 3 3z"/><path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219a9.053 9.053 0 0 0-2.43-2.43a8.95 8.95 0 0 0-3.219-1.355a9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053a7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725a7.11 7.11 0 0 1-.644 1.188a7.2 7.2 0 0 1-.858 1.039a7.028 7.028 0 0 1-3.536 1.907a7.13 7.13 0 0 1-2.822 0a6.961 6.961 0 0 1-2.503-1.054a7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034a9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183a9.014 9.014 0 0 0 3.218-1.355a8.886 8.886 0 0 0 1.331-1.099a9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z"/><path xmlns="http://www.w3.org/2000/svg" fill="rgba(0, 0, 0, 0)" d="M0 0H24V24H0z"/>',
    },
    star: {
      width: 16,
      height: 16,
      viewBox: [0, 0, 30, 30],
      data: '<g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_16_420)"><path fill="#808080" d="M22.6583 28.3333C22.2901 28.333 21.9303 28.2227 21.625 28.0167L15.4083 23.85C15.3777 23.8289 15.3414 23.8175 15.3042 23.8175C15.267 23.8175 15.2306 23.8289 15.2 23.85L8.98334 28.0167C8.67117 28.2251 8.30297 28.3337 7.92765 28.3279C7.55233 28.3221 7.18764 28.2023 6.88201 27.9844C6.57637 27.7665 6.34426 27.4608 6.2165 27.1078C6.08873 26.7549 6.07135 26.3714 6.16667 26.0083L8.20834 18.8083C8.21799 18.7721 8.21682 18.7339 8.20497 18.6983C8.19312 18.6628 8.17112 18.6315 8.14167 18.6083L2.25834 13.9833C1.94862 13.7526 1.71888 13.4307 1.60133 13.0628C1.48377 12.6949 1.48431 12.2995 1.60285 11.9319C1.72139 11.5644 1.952 11.2431 2.26233 11.0132C2.57267 10.7833 2.94718 10.6563 3.33334 10.65L10.8333 10.3667C10.8702 10.3641 10.9056 10.351 10.9351 10.3288C10.9647 10.3066 10.9872 10.2764 11 10.2417L13.5833 3.21666C13.7136 2.86053 13.9501 2.55301 14.2608 2.33574C14.5716 2.11848 14.9416 2.00195 15.3208 2.00195C15.7 2.00195 16.0701 2.11848 16.3808 2.33574C16.6916 2.55301 16.9281 2.86053 17.0583 3.21666L19.6417 10.2417C19.6544 10.2764 19.677 10.3066 19.7065 10.3288C19.7361 10.351 19.7715 10.3641 19.8083 10.3667L27.3083 10.65C27.6945 10.6563 28.069 10.7833 28.3793 11.0132C28.6897 11.2431 28.9203 11.5644 29.0388 11.9319C29.1574 12.2995 29.1579 12.6949 29.0403 13.0628C28.9228 13.4307 28.6931 13.7526 28.3833 13.9833L22.5 18.6083C22.4697 18.6308 22.447 18.662 22.435 18.6978C22.4231 18.7336 22.4225 18.7722 22.4333 18.8083L24.475 26.0083C24.5467 26.2845 24.5538 26.5735 24.4958 26.8528C24.4378 27.1322 24.3162 27.3944 24.1406 27.6193C23.9649 27.8441 23.7398 28.0254 23.4828 28.1493C23.2257 28.2731 22.9436 28.3361 22.6583 28.3333ZM15.3083 22.15C15.6774 22.1613 16.0345 22.2832 16.3333 22.5L22.55 26.6667C22.5815 26.6906 22.6199 26.7037 22.6595 26.704C22.6991 26.7043 22.7377 26.6918 22.7695 26.6684C22.8014 26.645 22.8249 26.6118 22.8364 26.574C22.8479 26.5361 22.8468 26.4955 22.8333 26.4583L20.7917 19.2583C20.6912 18.9051 20.6986 18.53 20.813 18.181C20.9273 17.8321 21.1433 17.5253 21.4333 17.3L27.3167 12.675C27.3488 12.6525 27.3728 12.6202 27.3852 12.583C27.3976 12.5458 27.3978 12.5056 27.3857 12.4683C27.3735 12.431 27.3498 12.3986 27.3179 12.3758C27.2859 12.353 27.2476 12.341 27.2083 12.3417L19.7083 12.0583C19.3411 12.044 18.9865 11.9206 18.6896 11.704C18.3928 11.4873 18.1672 11.1871 18.0417 10.8417L15.4583 3.81666C15.4467 3.77936 15.4234 3.74676 15.392 3.72361C15.3605 3.70046 15.3224 3.68797 15.2833 3.68797C15.2443 3.68797 15.2062 3.70046 15.1747 3.72361C15.1432 3.74676 15.12 3.77936 15.1083 3.81666L12.55 10.8333C12.4245 11.1787 12.1989 11.4789 11.9021 11.6956C11.6052 11.9123 11.2506 12.0357 10.8833 12.05L3.38334 12.3333C3.34412 12.3327 3.30574 12.3447 3.27383 12.3674C3.24191 12.3902 3.21815 12.4227 3.20602 12.46C3.1939 12.4973 3.19406 12.5375 3.20648 12.5747C3.21889 12.6119 3.24291 12.6441 3.27501 12.6667L9.16667 17.3C9.45579 17.526 9.67117 17.8328 9.78543 18.1815C9.89969 18.5303 9.90767 18.9051 9.80834 19.2583L7.77501 26.4583C7.76287 26.4944 7.76281 26.5334 7.77484 26.5695C7.78687 26.6056 7.81033 26.6368 7.84167 26.6583C7.87186 26.6842 7.91028 26.6983 7.95001 26.6983C7.98973 26.6983 8.02815 26.6842 8.05834 26.6583L14.275 22.4917C14.5788 22.2901 14.9354 22.1829 15.3 22.1833L15.3083 22.15Z"/></g><defs xmlns="http://www.w3.org/2000/svg"><clipPath id="clip0_16_420"><path fill="white" d="M0 0H30V30H0z"/></clipPath></defs>',
    },
    profile: {
      width: 24,
      height: 24,
      viewBox: [0, 0, 24, 24],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" fill-rule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" clip-rule="evenodd"/>',
    },
    "harmburger-closed": {
      width: 24,
      height: 24,
      viewBox: [0, 0, 24, 24],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" fill-rule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z" clip-rule="evenodd"/>',
    },
    "my-logo": {
      width: 20,
      height: 20,
      viewBox: [0, 0, 20, 20],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" fill-rule="evenodd" d="M8.15609 19.8731C4.49068 17.7553 2.35339 14.6209 3.0133 11.7225C3.94101 7.64795 10.0456 5.5829 16.6483 7.11011C17.424 7.28952 18.172 7.51052 18.8867 7.76747C17.3992 6.90802 15.66 6.21601 13.754 5.77515C7.15128 4.24794 1.04667 6.31299 0.118959 10.3875C-0.699769 13.9834 2.78714 17.9427 8.15609 19.8731Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" fill-rule="evenodd" d="M18.635 7.95619C19.5322 8.41643 19.8722 8.59087 19.9868 7.80357C20.2642 5.89828 16.1311 0.749023 11.1421 0.749023C8.3379 0.749023 6.02369 2.33849 4.30671 3.98153C5.61933 3.73809 7.03033 3.63069 8.49616 3.68408C10.4513 3.7553 12.2903 4.1048 13.914 4.66646C13.1634 4.54976 12.387 4.47468 11.5913 4.4457C7.70288 4.30407 4.07346 4.45766 1.9456 6.59144C1.80602 6.75934 1.67956 6.91061 1.56653 7.04092C0.916115 7.79076 0.623334 8.66984 0.383667 9.38945C0.338944 9.52373 0.296071 9.65246 0.253068 9.77376C0.248765 9.80332 0.236049 9.85912 0.22223 9.91976C0.184674 10.0846 0.138974 10.2851 0.231907 10.0915C0.171136 10.6898 1.58354 9.91866 3.43601 8.90728C5.78189 7.62651 8.83348 5.96046 10.4928 6.20203C14.9636 6.07273 17.361 7.30263 18.635 7.95619Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M9.95569 8.86271L11.0006 7.60221L13.2193 12.2523L11.9694 12.9832L9.95569 8.86271Z"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M8.40906 10.5784L9.48766 9.40552L11.3366 13.2992L10.0127 14.0199L8.40906 10.5784Z"/><path xmlns="http://www.w3.org/2000/svg" fill="#242222" fill-rule="evenodd" d="M13.3887 12.5912L12.1494 13.3327L14.1184 17.4411L14.1785 17.4481L15.2519 16.5012L13.3887 12.5912ZM15.7443 17.5346L15.7836 17.6343L15.7923 17.6353L15.7443 17.5346Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" fill-rule="evenodd" d="M11.4928 13.6504L10.1794 14.3707L11.5216 17.2438L11.5476 17.2462L12.6794 16.3552L11.4928 13.6504Z" clip-rule="evenodd"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M6.8203 12.2944L7.89611 11.1798L9.36214 14.36L8.08194 15.0379L6.8203 12.2944Z"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" fill-rule="evenodd" d="M9.49815 14.6885L8.2197 15.3663L8.93133 17.019L8.94109 17.0198L10.0692 16.082L9.49815 14.6885Z" clip-rule="evenodd"/>',
    },
    "oleg-logo": {
      width: 21,
      height: 22,
      viewBox: [0, 0, 21, 22],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M18.3148 11.1316C17.6938 11.2085 17.0618 11.2481 16.4211 11.2481C12.1493 11.2481 8.2699 9.4886 5.40707 6.62362C7.15259 11.5664 11.0661 15.4078 15.9384 16.8808C16.8092 17.1441 17.7107 17.3317 18.636 17.4364C18.7539 17.4497 18.8722 17.4617 18.9909 17.4724L18.9951 17.4663C20.2561 15.6513 21 13.4167 21 11C21 10.8499 20.9971 10.7005 20.9914 10.5519C20.1277 10.8221 19.2332 11.0177 18.3148 11.1316Z"/><path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M2.68421 11C2.68421 15.5221 6.18346 19.188 10.5 19.188C12.0824 19.188 13.555 18.6953 14.7857 17.8484C15.7603 18.3201 16.8157 18.6398 17.9241 18.7787C16.024 20.769 13.3992 22 10.5 22C4.70101 22 0 17.0751 0 11C0 4.92487 4.70101 0 10.5 0C15.6857 0 19.9933 3.93818 20.8465 9.11543C20.0097 9.40738 19.1262 9.592 18.2106 9.6537C17.5984 5.77135 14.3794 2.81203 10.5 2.81203C6.18346 2.81203 2.68421 6.47791 2.68421 11Z"/>',
    },
    "select-icon": {
      width: 14,
      height: 14,
      viewBox: [0, 0, 14, 14],
      data: '<path xmlns="http://www.w3.org/2000/svg" d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z" fill="currentcolor"/>',
    },
    "search-icon": {
      width: 24,
      height: 24,
      viewBox: [0, 0, 24, 24],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"/>',
    },
    "submit-icon": {
      width: 24,
      height: 24,
      viewBox: [0, 0, 488, 488.858],
      data: '<path xmlns="http://www.w3.org/2000/svg" d="M63.023,18.002c17,10.3,37.7,14.8,58.8,16c50.7,2.9,101.3,7.3,152.3,4c6.3,0.4,12.6,0.8,18.9,1.1c40,1.7,80,2.2,119.8-1.9 c11.3-1.2,20.7-5.8,19.9-14.8c-0.8-8.3-8.8-14.4-20.4-15.3c-20.9-1.8-41.9-3.7-62.9-3.5c-33.7,0.4-67.3,2.4-101,3.7 c-60.3-11.5-122-4.9-183.1-7.3c-2.7-0.1-7,3.4-8.3,5.8C54.323,10.702,57.823,14.902,63.023,18.002z" fill="currentcolor"/><path xmlns="http://www.w3.org/2000/svg" d="M330.723,235.402c7.4,5.8,16.2,8,22.1,1.1c5.4-6.3,5-15.3-1.1-22.8c-11-13.4-21.9-27-34.3-39.1 c-19.9-19.4-41-37.6-61.6-56.4c-0.6-1-1.2-1.9-1.8-2.9v-0.1c-3.1-4.8-9.6-6.2-14.4-3.1l-4.8,3.1c-41.9,27.1-72.7,66.8-109.2,100 c-1.7,1.5-1.7,6.5-0.7,9c1.9,5,6.8,5.9,12.1,5.1c17.2-2.7,32.5-11.6,45.7-23c15.8-13.7,31.7-27.2,47.2-41.3 c-1.2,14.4-2.1,28.8-2,43.2c0.4,32.2,2.4,64.4,3.7,96.6c-11.5,57.7-4.9,116.8-7.3,175.2c-0.1,2.6,3.4,6.7,5.8,8 c4.9,2.5,9-0.8,12.1-5.7c10.3-16.3,14.8-36.1,16-56.2c2.9-48.5,7.3-97,4-145.7c0.4-6,0.8-12.1,1.1-18.1c1.3-30.4,1.9-60.9,0-91.2 C284.323,194.102,306.123,216.202,330.723,235.402z" fill="currentcolor"/>',
    },
    "left-arrow": {
      width: 56,
      height: 56,
      viewBox: [0, 0, 56, 56],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" fill-rule="evenodd" d="M28.7071 21.7071C29.0976 21.3166 29.0976 20.6834 28.7071 20.2929C28.3166 19.9024 27.6834 19.9024 27.2929 20.2929L20.2967 27.2891C20.2837 27.302 20.2709 27.3153 20.2586 27.3289C20.0979 27.5063 20 27.7417 20 28C20 28.001 20 28.002 20 28.003C20.0004 28.134 20.026 28.2591 20.0722 28.3737C20.121 28.495 20.1946 28.6088 20.2929 28.7071L27.2929 35.7071C27.6834 36.0976 28.3166 36.0976 28.7071 35.7071C29.0976 35.3166 29.0976 34.6834 28.7071 34.2929L23.4142 29H35C35.5523 29 36 28.5523 36 28C36 27.4477 35.5523 27 35 27H23.4142L28.7071 21.7071Z" clip-rule="evenodd"/><circle xmlns="http://www.w3.org/2000/svg" cx="28" cy="28" r="27" stroke="currentcolor" stroke-width="2" opacity=".05"/>',
    },
    "right-arrow": {
      width: 56,
      height: 56,
      viewBox: [0, 0, 56, 56],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="currentcolor" fill-rule="evenodd" d="M27.2929 21.7071C26.9024 21.3166 26.9024 20.6834 27.2929 20.2929C27.6834 19.9024 28.3166 19.9024 28.7071 20.2929L35.7033 27.2891C35.7163 27.302 35.7291 27.3153 35.7414 27.3289C35.9021 27.5063 36 27.7417 36 28C36 28.001 36 28.002 36 28.003C35.9996 28.134 35.974 28.2591 35.9278 28.3737C35.879 28.495 35.8054 28.6088 35.7071 28.7071L28.7071 35.7071C28.3166 36.0976 27.6834 36.0976 27.2929 35.7071C26.9024 35.3166 26.9024 34.6834 27.2929 34.2929L32.5858 29H21C20.4477 29 20 28.5523 20 28C20 27.4477 20.4477 27 21 27H32.5858L27.2929 21.7071Z" clip-rule="evenodd"/><circle xmlns="http://www.w3.org/2000/svg" r="27" stroke="currentcolor" stroke-width="2" opacity=".05" transform="matrix(-1 0 0 1 28 28)"/>',
    },
  },

  allIds: [
    "harmburger-menu",
    "harmburger-closed",
    "logo",
    "github",
    "instagram",
    "medium",
    "reddit",
    "telegram",
    "twitter",
    "namedLogo",
    "my-logo",
    "oleg-logo",
    "username",
    "email",
    "password",
    "select-icon",
    "search-icon",
    "submit-icon",
    "reset",
    "star",
    "profile",
    "left-arrow",
    "right-arrow"
  ],
};

const SVG = (props) => (
  <>
    <SVGSource files={files} {...props} />
    <SvgComponent files={files} {...props} />
  </>
);

export default SVG;