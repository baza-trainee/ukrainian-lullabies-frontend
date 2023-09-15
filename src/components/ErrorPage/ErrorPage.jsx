import React from "react";
import './ErrorPage.css';
import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <section className="errorPage bg-dark">
    <div className="errorPage__border ">
      <div className="errorPage__element container">
        <h2 className="errorPage__title">
          Page not found
        </h2>
        <div  className="errorPage__svg404">                   
          <svg  
            className="errorPage__numbers"
            width="169" 
            height="175" 
            viewBox="0 0 169 175" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M168.88 106.12V137.2H143.4V121.52L117.08 147.84H134.16V175H95.8V147.84H114.28L87.96 121.52V137.2H16.28L0.6 112.84L107.28 0H134.16V92.96H117.08L143.4 119.28V106.12H168.88ZM96.64 53.2L45.96 106.12H87.96V119.28L114.28 92.96H96.64V53.2Z"
              fill="white"
            />
          </svg>
          <svg
        width="153"
        height="182"
        viewBox="0 0 153 182"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
            <path d="M0.6 73.84C0.6 63.76 2.56 54.24 6.48 45.28C10.5867 36.32 16.0933 28.48 23 21.76C29.9067 15.04 37.9333 9.81332 47.08 6.07999C56.4133 2.15999 66.3067 0.199986 76.76 0.199986C87.2133 0.199986 97.0133 2.15999 106.16 6.07999C115.493 9.81332 123.613 15.04 130.52 21.76C137.427 28.48 142.84 36.32 146.76 45.28C150.867 54.24 152.92 63.76 152.92 73.84V108C152.92 118.08 150.867 127.6 146.76 136.56C142.84 145.52 137.427 153.36 130.52 160.08C123.613 166.8 115.493 172.12 106.16 176.04C97.0133 179.96 87.2133 181.92 76.76 181.92C66.3067 181.92 56.4133 179.96 47.08 176.04C37.9333 172.12 29.9067 166.8 23 160.08C16.0933 153.36 10.5867 145.52 6.48 136.56C2.56 127.6 0.6 118.08 0.6 108V73.84ZM115.4 73.84C115.4 68.8 114.373 64.04 112.32 59.56C110.267 55.08 107.467 51.2533 103.92 48.08C100.56 44.72 96.4533 42.1067 91.6 40.24C86.9333 38.3733 81.9867 37.44 76.76 37.44C71.3467 37.44 66.3067 38.3733 61.64 40.24C56.9733 42.1067 52.8667 44.72 49.32 48.08C45.7733 51.2533 42.9733 55.08 40.92 59.56C39.0533 64.04 38.12 68.8 38.12 73.84V108C38.12 113.04 39.0533 117.8 40.92 122.28C42.9733 126.76 45.7733 130.68 49.32 134.04C52.8667 137.4 56.9733 140.013 61.64 141.88C66.3067 143.747 71.3467 144.68 76.76 144.68C81.9867 144.68 86.9333 143.747 91.6 141.88C96.4533 140.013 100.56 137.4 103.92 134.04C107.467 130.68 110.267 126.76 112.32 122.28C114.373 117.8 115.4 113.04 115.4 108V73.84ZM47.92 90.92L76.76 62.08L105.6 90.92L76.76 119.76L47.92 90.92Z" fill="url(#pattern0)" />
          <path d="M6.48 45.28L6.0254 45.0716L6.02192 45.0796L6.48 45.28ZM47.08 6.07999L47.269 6.54294L47.2736 6.54099L47.08 6.07999ZM106.16 6.07999L105.963 6.5397L105.974 6.54423L106.16 6.07999ZM130.52 21.76L130.869 21.4016L130.52 21.76ZM146.76 45.28L146.302 45.4804L146.305 45.4883L146.76 45.28ZM146.76 136.56L146.305 136.352L146.302 136.36L146.76 136.56ZM130.52 160.08L130.869 160.438L130.52 160.08ZM106.16 176.04L105.966 175.579L105.963 175.58L106.16 176.04ZM47.08 176.04L46.883 176.5L46.8864 176.501L47.08 176.04ZM23 160.08L23.3487 159.722L23 160.08ZM6.48 136.56L6.02185 136.76L6.02547 136.768L6.48 136.56ZM112.32 59.56L111.865 59.7683H111.865L112.32 59.56ZM103.92 48.08L103.566 48.4335L103.576 48.4434L103.587 48.4526L103.92 48.08ZM91.6 40.24L91.4143 40.7043L91.4205 40.7067L91.6 40.24ZM61.64 40.24L61.8257 40.7042L61.64 40.24ZM49.32 48.08L49.6534 48.4526L49.6587 48.4479L49.6639 48.443L49.32 48.08ZM40.92 59.56L40.4655 59.3517L40.4618 59.3596L40.4585 59.3677L40.92 59.56ZM40.92 122.28L40.4585 122.472L40.4618 122.48L40.4655 122.488L40.92 122.28ZM49.32 134.04L48.9761 134.403L49.32 134.04ZM61.64 141.88L61.8257 141.416L61.64 141.88ZM91.6 141.88L91.4205 141.413L91.4143 141.416L91.6 141.88ZM103.92 134.04L103.576 133.677L103.566 133.686L103.92 134.04ZM112.32 122.28L111.865 122.072H111.865L112.32 122.28ZM47.92 90.92L47.5665 90.5664L47.2129 90.92L47.5665 91.2735L47.92 90.92ZM76.76 62.08L77.1136 61.7264L76.76 61.3729L76.4064 61.7264L76.76 62.08ZM105.6 90.92L105.954 91.2735L106.307 90.92L105.954 90.5664L105.6 90.92ZM76.76 119.76L76.4064 120.114L76.76 120.467L77.1136 120.114L76.76 119.76ZM1.1 73.84C1.1 63.8268 3.04658 54.3752 6.93808 45.4804L6.02192 45.0796C2.07342 54.1047 0.1 63.6932 0.1 73.84H1.1ZM6.93453 45.4883C11.0161 36.5831 16.4873 28.7943 23.3487 22.1184L22.6513 21.4016C15.6994 28.1657 10.1573 36.0569 6.02547 45.0717L6.93453 45.4883ZM23.3487 22.1184C30.2081 15.4443 38.1802 10.2526 47.269 6.54292L46.8911 5.61707C37.6865 9.37405 29.6052 14.6357 22.6513 21.4016L23.3487 22.1184ZM47.2736 6.54099C56.5436 2.64757 66.3709 0.699986 76.76 0.699986V-0.300014C66.2424 -0.300014 56.283 1.67241 46.8864 5.619L47.2736 6.54099ZM76.76 0.699986C87.1491 0.699986 96.8817 2.64757 105.963 6.53957L106.357 5.62042C97.1449 1.67241 87.2776 -0.300014 76.76 -0.300014V0.699986ZM105.974 6.54423C115.25 10.2543 123.314 15.4459 130.171 22.1184L130.869 21.4016C123.913 14.6341 115.737 9.37231 106.346 5.61576L105.974 6.54423ZM130.171 22.1184C137.031 28.7926 142.407 36.5787 146.302 45.4804L147.218 45.0796C143.273 36.0613 137.822 28.1674 130.869 21.4016L130.171 22.1184ZM146.305 45.4883C150.381 54.3814 152.42 63.8302 152.42 73.84H153.42C153.42 63.6898 151.352 54.0985 147.215 45.0717L146.305 45.4883ZM152.42 73.84V108H153.42V73.84H152.42ZM152.42 108C152.42 118.01 150.381 127.459 146.305 136.352L147.215 136.768C151.352 127.741 153.42 118.15 153.42 108H152.42ZM146.302 136.36C142.407 145.261 137.031 153.047 130.171 159.722L130.869 160.438C137.822 153.673 143.273 145.779 147.218 136.76L146.302 136.36ZM130.171 159.722C123.312 166.396 115.245 171.682 105.966 175.579L106.354 176.501C115.742 172.558 123.915 167.204 130.869 160.438L130.171 159.722ZM105.963 175.58C96.8817 179.472 87.1491 181.42 76.76 181.42V182.42C87.2776 182.42 97.1449 180.448 106.357 176.5L105.963 175.58ZM76.76 181.42C66.3709 181.42 56.5436 179.472 47.2736 175.579L46.8864 176.501C56.283 180.448 66.2424 182.42 76.76 182.42V181.42ZM47.277 175.58C38.1848 171.684 30.21 166.397 23.3487 159.722L22.6513 160.438C29.6034 167.203 37.6819 172.556 46.883 176.5L47.277 175.58ZM23.3487 159.722C16.4873 153.046 11.0161 145.257 6.93453 136.352L6.02547 136.768C10.1573 145.783 15.6994 153.674 22.6513 160.438L23.3487 159.722ZM6.93808 136.36C3.04658 127.465 1.1 118.013 1.1 108H0.1C0.1 118.147 2.07342 127.735 6.02192 136.76L6.93808 136.36ZM1.1 108V73.84H0.1V108H1.1ZM115.9 73.84C115.9 68.7298 114.859 63.8985 112.775 59.3517L111.865 59.7683C113.888 64.1814 114.9 68.8702 114.9 73.84H115.9ZM112.775 59.3517C110.694 54.8114 107.853 50.9282 104.253 47.7074L103.587 48.4526C107.08 51.5785 109.84 55.3486 111.865 59.7683L112.775 59.3517ZM104.274 47.7264C100.86 44.3125 96.6919 41.6627 91.7795 39.7733L91.4205 40.7067C96.2148 42.5506 100.26 45.1275 103.566 48.4335L104.274 47.7264ZM91.7857 39.7758C87.0576 37.8845 82.0477 36.94 76.76 36.94V37.94C81.9256 37.94 86.8091 38.8621 91.4143 40.7042L91.7857 39.7758ZM76.76 36.94C71.288 36.94 66.1845 37.8837 61.4543 39.7758L61.8257 40.7042C66.4289 38.863 71.4053 37.94 76.76 37.94V36.94ZM61.4543 39.7758C56.7307 41.6652 52.57 44.3123 48.9761 47.717L49.6639 48.443C53.1634 45.1277 57.216 42.5481 61.8257 40.7042L61.4543 39.7758ZM48.9866 47.7074C45.3869 50.9282 42.5464 54.8114 40.4655 59.3517L41.3745 59.7683C43.4003 55.3486 46.1598 51.5785 49.6534 48.4526L48.9866 47.7074ZM40.4585 59.3677C38.5654 63.911 37.62 68.7366 37.62 73.84H38.62C38.62 68.8634 39.5412 64.169 41.3815 59.7523L40.4585 59.3677ZM37.62 73.84V108H38.62V73.84H37.62ZM37.62 108C37.62 113.103 38.5654 117.929 40.4585 122.472L41.3815 122.088C39.5412 117.671 38.62 112.977 38.62 108H37.62ZM40.4655 122.488C42.5452 127.026 45.3826 130.999 48.9761 134.403L49.6639 133.677C46.1641 130.361 43.4015 126.494 41.3745 122.072L40.4655 122.488ZM48.9761 134.403C52.57 137.808 56.7307 140.455 61.4543 142.344L61.8257 141.416C57.216 139.572 53.1634 136.992 49.6639 133.677L48.9761 134.403ZM61.4543 142.344C66.1845 144.236 71.288 145.18 76.76 145.18V144.18C71.4053 144.18 66.4289 143.257 61.8257 141.416L61.4543 142.344ZM76.76 145.18C82.0477 145.18 87.0576 144.235 91.7857 142.344L91.4143 141.416C86.8091 143.258 81.9256 144.18 76.76 144.18V145.18ZM91.7795 142.347C96.6919 140.457 100.86 137.808 104.274 134.394L103.566 133.686C100.26 136.992 96.2148 139.569 91.4205 141.413L91.7795 142.347ZM104.264 134.403C107.857 130.999 110.695 127.026 112.775 122.488L111.865 122.072C109.839 126.494 107.076 130.361 103.576 133.677L104.264 134.403ZM112.775 122.488C114.859 117.941 115.9 113.11 115.9 108H114.9C114.9 112.97 113.888 117.659 111.865 122.072L112.775 122.488ZM115.9 108V73.84H114.9V108H115.9ZM48.2736 91.2735L77.1136 62.4335L76.4064 61.7264L47.5665 90.5664L48.2736 91.2735ZM76.4064 62.4335L105.246 91.2735L105.954 90.5664L77.1136 61.7264L76.4064 62.4335ZM105.246 90.5664L76.4064 119.406L77.1136 120.114L105.954 91.2735L105.246 90.5664ZM77.1136 119.406L48.2736 90.5664L47.5665 91.2735L76.4064 120.114L77.1136 119.406Z" fill="white"/>
            <defs>
          <pattern id="pattern0" patternContentUnits="userSpaceOnUse" width="3" height="3">
            <linearGradient id="paint0_linear_32_2990" x1="280" y1="1.5" x2="54.3127" y2="8.89155" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <image
              id="image1"
              width="300"
              height="300"
              href="https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-09e0ac859b3dc3bb2538e2135f1767d4.png"
            />
          </pattern>
        </defs>
              
            </svg> 
              <svg 
                className="errorPage__numbers"
                width="169" 
                height="175" 
                viewBox="0 0 169 175" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
            <path d="M168.88 106.12V137.2H143.4V121.52L117.08 147.84H134.16V175H95.8V147.84H114.28L87.96 121.52V137.2H16.28L0.6 112.84L107.28 0H134.16V92.96H117.08L143.4 119.28V106.12H168.88ZM96.64 53.2L45.96 106.12H87.96V119.28L114.28 92.96H96.64V53.2Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
    <div className="errorPage__block container">
      <div className="element-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="185" height="44" viewBox="0 0 185 44" fill="none">
  <path d="M24.5 33.0003L20.5 28.0003L24.5 25.0003L33.5 34.0003L25.5 42.0003L1.5 19.0003" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M24.5 11.0003L20.5 16.0003L24.5 19.0003L33.5 10.0003L25.5 2.00032L1.5 25.0003" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M42.5 33.0003L46.5 28.0003L42.5 25.0003L33.5 34.0003L41.5 42.0003L65.5 19.0003" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M42.5 11.0003L46.5 16.0003L42.5 19.0003L33.5 10.0003L41.5 2.00032L65.5 25.0003" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M37.5 22.0003L33.5 18.0003L29.5 22.0003L33.5 26.0003L37.5 22.0003Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M61.5 39.0003L57.5 35.0003L53.5 39.0003L57.5 43.0003L61.5 39.0003Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M61.5 5.00032L57.5 1.00032L53.5 5.00032L57.5 9.00032L61.5 5.00032Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M110.5 39.0003L106.5 35.0003L102.5 39.0003L106.5 43.0003L110.5 39.0003Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M110.5 5.00032L106.5 1.00032L102.5 5.00032L106.5 9.00032L110.5 5.00032Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M158.5 39.0003L154.5 35.0003L150.5 39.0003L154.5 43.0003L158.5 39.0003Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M158.5 5.00032L154.5 1.00032L150.5 5.00032L154.5 9.00032L158.5 5.00032Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M72.5 33.0003L68.5 28.0003L72.5 25.0003L81.5 34.0003L73.5 42.0003L49.5 19.0003" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M72.5 11.0003L68.5 16.0003L72.5 19.0003L81.5 10.0003L73.5 2.00032L49.5 25.0003" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M91.5 33.0003L95.5 28.0003L91.5 25.0003L82.5 34.0003L90.5 42.0003L114.5 19.0003" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M91.5 11.0003L95.5 16.0003L91.5 19.0003L82.5 10.0003L90.5 2.00032L114.5 25.0003" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M86.5 22.0003L82.5 18.0003L78.5 22.0003L82.5 26.0003L86.5 22.0003Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M121.5 33.0003L117.5 28.0003L121.5 25.0003L130.5 34.0003L122.5 42.0003L98.5 19.0003" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M121.5 11.0003L117.5 16.0003L121.5 19.0003L130.5 10.0003L122.5 2.00032L98.5 25.0003" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M139.5 33.0003L143.5 28.0003L139.5 25.0003L130.5 34.0003L138.5 42.0003L162.5 19.0003" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M139.5 11.0003L143.5 16.0003L139.5 19.0003L130.5 10.0003L138.5 2.00032L162.5 25.0003" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M134.5 22.0003L130.5 18.0003L126.5 22.0003L130.5 26.0003L134.5 22.0003Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M169.5 33.0003L165.5 28.0003L169.5 25.0003L178.5 34.0003L170.5 42.0003L146.5 19.0003" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M169.5 11.0003L165.5 16.0003L169.5 19.0003L178.5 10.0003L170.5 2.00032L146.5 25.0003" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M183.5 22.0003L179.5 18.0003L175.5 22.0003L179.5 26.0003L183.5 22.0003Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      </div>
      <p className="element-center">
          It may have been moved or deleted.
      </p>
      <div className="element-left"><svg xmlns="http://www.w3.org/2000/svg" width="185" height="44" viewBox="0 0 185 44" fill="none">
  <path d="M160.5 11.001L164.5 16.001L160.5 19.001L151.5 10.001L159.5 2.00095L183.5 25.001" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M160.5 33.001L164.5 28.001L160.5 25.001L151.5 34.001L159.5 42.001L183.5 19.001" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M142.5 11.001L138.5 16.001L142.5 19.001L151.5 10.001L143.5 2.00095L119.5 25.001" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M142.5 33.001L138.5 28.001L142.5 25.001L151.5 34.001L143.5 42.001L119.5 19.001" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M147.5 22.001L151.5 26.001L155.5 22.001L151.5 18.001L147.5 22.001Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M123.5 5.00064L127.5 9.00064L131.5 5.00064L127.5 1.00064L123.5 5.00064Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M123.5 39.0006L127.5 43.0006L131.5 39.0006L127.5 35.0006L123.5 39.0006Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M74.5 5.00032L78.5 9.00032L82.5 5.00032L78.5 1.00032L74.5 5.00032Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M74.5 39.0003L78.5 43.0003L82.5 39.0003L78.5 35.0003L74.5 39.0003Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M26.5 5L30.5 9L34.5 5L30.5 1L26.5 5Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M26.5 39L30.5 43L34.5 39L30.5 35L26.5 39Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M112.5 11L116.5 16L112.5 19L103.5 10L111.5 2L135.5 25" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M112.5 33L116.5 28L112.5 25L103.5 34L111.5 42L135.5 19" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M93.5 11L89.5 16L93.5 19L102.5 10L94.5 2L70.5 25" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M93.5 33L89.5 28L93.5 25L102.5 34L94.5 42L70.5 19" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M98.5 22L102.5 26L106.5 22L102.5 18L98.5 22Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M63.5 11L67.5 16L63.5 19L54.5 10L62.5 2L86.5 25" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M63.5 33L67.5 28L63.5 25L54.5 34L62.5 42L86.5 19" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M45.5 11L41.5 16L45.5 19L54.5 10L46.5 2L22.5 25" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M45.5 33L41.5 28L45.5 25L54.5 34L46.5 42L22.5 19" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M50.5 22L54.5 26L58.5 22L54.5 18L50.5 22Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.5 11L19.5 16L15.5 19L6.5 10L14.5 2L38.5 25" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.5 33L19.5 28L15.5 25L6.5 34L14.5 42L38.5 19" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.5 22L5.5 26L9.5 22L5.5 18L1.5 22Z" stroke="#C60F18" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
    </div>  
    <div className="container">
      <NavLink to="/" className="button"> На головну </NavLink>
  </div>
  </section>)
};
