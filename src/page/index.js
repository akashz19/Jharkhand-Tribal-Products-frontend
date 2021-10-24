import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../components/Footer'
import ReactTooltip from 'react-tooltip'
// import Card from '../utils/Card'
import Products from '../components/Products'
import Welcome from '../components/Welcome'
import Blogs from '../components/Blogs'
import lowbg from '../assets/lowbg.svg'
import lowbg2 from '../assets/lowbg2.svg'

export default function Home() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div>
      {/* <Card text="Take a demo of our Product" linkto="product" /> */}
      <ReactTooltip html={true} />
      <Nav />

      {/* Welcome */}
      <Welcome />


      <h1 data-aos="zoom-in-up">Why Vdev.in ?</h1>
      <p data-aos="zoom-in-up">Our Dashboard is built on top of being user friendly. It will help you to customizable your website.</p>
      <div className="boxes why">
        <div data-aos="fade-up-right" className="box">
          <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_413:42" maskUnits="userSpaceOnUse" x="0" y="4" width="75" height="69">
              <path d="M1.91487 45.6651L13.497 65.8046V65.7799C14.7591 67.9606 16.5696 69.7713 18.7478 71.0315C20.926 72.2916 23.3957 72.9572 25.9105 72.9617H49.0895C51.6044 72.9577 54.0743 72.2923 56.2526 71.0321C58.4309 69.7719 60.2413 67.9609 61.5031 65.7799L73.0851 45.6651C74.3397 43.4796 75 41.0023 75 38.4808C75 35.9593 74.3397 33.482 73.0851 31.2966L61.5031 11.1818C60.24 8.99859 58.4273 7.18619 56.2462 5.92585C54.0651 4.6655 51.5922 4.00141 49.0747 4H25.9105C23.3957 4.0045 20.926 4.67002 18.7478 5.93019C16.5696 7.19035 14.7591 9.0011 13.497 11.1818L1.91487 31.2966C0.660299 33.482 0 35.9593 0 38.4808C0 41.0023 0.660299 43.4796 1.91487 45.6651Z" fill="#00DC82" />
            </mask>
            <g mask="url(#mask0_413:42)">
              <path d="M1.91487 45.6651L13.497 65.8046V65.7799C14.7591 67.9606 16.5696 69.7713 18.7478 71.0315C20.926 72.2916 23.3957 72.9572 25.9105 72.9617H49.0895C51.6044 72.9577 54.0743 72.2923 56.2526 71.0321C58.4309 69.7719 60.2413 67.9609 61.5031 65.7799L73.0851 45.6651C74.3397 43.4796 75 41.0023 75 38.4808C75 35.9593 74.3397 33.482 73.0851 31.2966L61.5031 11.1818C60.24 8.99859 58.4273 7.18619 56.2462 5.92585C54.0651 4.6655 51.5922 4.00141 49.0747 4H25.9105C23.3957 4.0045 20.926 4.67002 18.7478 5.93019C16.5696 7.19035 14.7591 9.0011 13.497 11.1818L1.91487 31.2966C0.660299 33.482 0 35.9593 0 38.4808C0 41.0023 0.660299 43.4796 1.91487 45.6651Z" fill="#2EACFF" />
              <path opacity="0.3" d="M-8.08513 45.6668L3.49695 65.8063V65.7816C4.75911 67.9623 6.5696 69.773 8.74778 71.0332C10.926 72.2933 13.3957 72.9589 15.9105 72.9634H39.0895C41.6044 72.9594 44.0743 72.294 46.2526 71.0338C48.4309 69.7736 50.2413 67.9626 51.5031 65.7816L63.0851 45.6668C64.3397 43.4813 65 41.004 65 38.4825C65 35.961 64.3397 33.4837 63.0851 31.2983L51.5031 11.1835C50.24 9.0003 48.4273 7.1879 46.2462 5.92756C44.0651 4.66721 41.5922 4.00312 39.0747 4.00171H15.9105C13.3957 4.0062 10.926 4.67173 8.74778 5.9319C6.5696 7.19206 4.75911 9.00281 3.49695 11.1835L-8.08513 31.2983C-9.3397 33.4837 -10 35.961 -10 38.4825C-10 41.004 -9.3397 43.4813 -8.08513 45.6668Z" fill="white" />
              <path d="M34.1327 23.3796C34.1327 23.7486 34.1737 24.0767 34.2967 24.4457C34.4197 24.8967 34.5427 25.3067 34.6657 25.7577C34.8297 26.4137 34.3377 27.0287 33.6816 27.0287H27.2445C26.0145 27.0287 24.9895 28.0127 24.9895 29.2838V35.6799C24.9895 36.3359 24.3744 36.828 23.7594 36.664C23.3084 36.5819 22.8984 36.4589 22.4474 36.2949C21.8734 36.0899 21.1764 36.0489 20.4794 36.2539C19.2903 36.5409 18.3883 37.484 18.1013 38.673C17.5683 40.9281 19.2083 42.8961 21.3814 42.8961C21.7504 42.8961 22.1194 42.8551 22.4474 42.7321C22.8984 42.6091 23.3084 42.4861 23.7594 42.3631C24.4154 42.1991 25.0305 42.6911 25.0305 43.3471V49.7433C25.0305 50.9733 26.0145 51.9983 27.2855 51.9983H33.6816C34.3377 51.9983 34.8297 52.6133 34.6657 53.2283C34.5837 53.6794 34.4607 54.0894 34.2967 54.5404C34.0917 55.1144 34.0507 55.8114 34.2557 56.5084C34.5427 57.6974 35.4857 58.5995 36.6747 58.8865C38.9298 59.4605 40.8978 57.7795 40.8978 55.6064C40.8978 55.2374 40.8568 54.9094 40.7338 54.5404C40.6108 54.0894 40.4878 53.6794 40.3648 53.2283C40.2008 52.5723 40.6928 51.9573 41.3488 51.9573H47.745C48.975 51.9573 50 50.9733 50 49.7023V43.3881C50 42.7321 49.385 42.2401 48.729 42.4041C48.319 42.4861 47.95 42.6091 47.5809 42.7321C47.2529 42.8551 46.8839 42.8961 46.5149 42.8961C44.3829 42.8961 42.7018 40.8871 43.2349 38.673C43.5219 37.484 44.4239 36.5819 45.6129 36.2539C46.3099 36.0899 46.9659 36.1309 47.5809 36.2949C47.95 36.4179 48.36 36.5409 48.729 36.623C49.385 36.787 49.959 36.2949 49.959 35.6389V29.2428C49.959 28.0127 48.975 26.9877 47.704 26.9877H41.3488C40.6928 26.9877 40.2008 26.3727 40.3648 25.7577C40.4468 25.3067 40.5698 24.8967 40.7338 24.4457C40.9388 23.8716 40.9798 23.1746 40.7748 22.4776C40.4878 21.2886 39.5448 20.3866 38.3557 20.0996C36.1417 19.5665 34.1327 21.2476 34.1327 23.3796Z" fill="#0D3895" />
            </g>
          </svg>
          <h3>Free globle access</h3>
          <p>Your web page will be accessible from everywhere</p>
        </div>
        <div data-aos="fade-up-right" className="box">
          <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_413:56" maskUnits="userSpaceOnUse" x="0" y="4" width="75" height="69">
              <path d="M1.91487 45.6651L13.497 65.8046V65.7799C14.7591 67.9606 16.5696 69.7713 18.7478 71.0315C20.926 72.2916 23.3957 72.9572 25.9105 72.9617H49.0895C51.6044 72.9577 54.0743 72.2923 56.2526 71.0321C58.4309 69.7719 60.2413 67.9609 61.5031 65.7799L73.0851 45.6651C74.3397 43.4796 75 41.0023 75 38.4808C75 35.9593 74.3397 33.482 73.0851 31.2966L61.5031 11.1818C60.24 8.99859 58.4273 7.18619 56.2462 5.92585C54.0651 4.6655 51.5922 4.00141 49.0747 4H25.9105C23.3957 4.0045 20.926 4.67002 18.7478 5.93019C16.5696 7.19035 14.7591 9.0011 13.497 11.1818L1.91487 31.2966C0.660299 33.482 0 35.9593 0 38.4808C0 41.0023 0.660299 43.4796 1.91487 45.6651Z" fill="#00DC82" />
            </mask>
            <g mask="url(#mask0_413:56)">
              <path d="M1.91487 45.6651L13.497 65.8046V65.7799C14.7591 67.9606 16.5696 69.7713 18.7478 71.0315C20.926 72.2916 23.3957 72.9572 25.9105 72.9617H49.0895C51.6044 72.9577 54.0743 72.2923 56.2526 71.0321C58.4309 69.7719 60.2413 67.9609 61.5031 65.7799L73.0851 45.6651C74.3397 43.4796 75 41.0023 75 38.4808C75 35.9593 74.3397 33.482 73.0851 31.2966L61.5031 11.1818C60.24 8.99859 58.4273 7.18619 56.2462 5.92585C54.0651 4.6655 51.5922 4.00141 49.0747 4H25.9105C23.3957 4.0045 20.926 4.67002 18.7478 5.93019C16.5696 7.19035 14.7591 9.0011 13.497 11.1818L1.91487 31.2966C0.660299 33.482 0 35.9593 0 38.4808C0 41.0023 0.660299 43.4796 1.91487 45.6651Z" fill="#2EACFF" />
              <path opacity="0.3" d="M-8.08513 45.6668L3.49695 65.8063V65.7816C4.75911 67.9623 6.5696 69.773 8.74778 71.0332C10.926 72.2933 13.3957 72.9589 15.9105 72.9634H39.0895C41.6044 72.9594 44.0743 72.294 46.2526 71.0338C48.4309 69.7736 50.2413 67.9626 51.5031 65.7816L63.0851 45.6668C64.3397 43.4813 65 41.004 65 38.4825C65 35.961 64.3397 33.4837 63.0851 31.2983L51.5031 11.1835C50.24 9.0003 48.4273 7.1879 46.2462 5.92756C44.0651 4.66721 41.5922 4.00312 39.0747 4.00171H15.9105C13.3957 4.0062 10.926 4.67173 8.74778 5.9319C6.5696 7.19206 4.75911 9.00281 3.49695 11.1835L-8.08513 31.2983C-9.3397 33.4837 -10 35.961 -10 38.4825C-10 41.004 -9.3397 43.4813 -8.08513 45.6668Z" fill="white" />
              <path d="M35.25 30.25L36.125 28.5L37.875 27.625L36.125 26.75L35.25 25L34.375 26.75L32.625 27.625L34.375 28.5L35.25 30.25ZM27.375 33.75L28.833 30.8335L31.75 29.375L28.833 27.9165L27.375 25L25.917 27.9165L23 29.375L25.917 30.8335L27.375 33.75ZM46.625 40.75L45.167 43.6665L42.25 45.125L45.167 46.5835L46.625 49.5L48.083 46.5835L51 45.125L48.083 43.6665L46.625 40.75ZM50.487 30.1532L45.8468 25.513C45.5055 25.1706 45.0577 25 44.6098 25C44.1619 25 43.714 25.1706 43.3722 25.513L23.513 45.3722C22.8294 46.0558 22.8294 47.1637 23.513 47.8468L28.1532 52.487C28.495 52.8288 28.9429 52.9995 29.3902 52.9995C29.8381 52.9995 30.286 52.8288 30.6278 52.487L50.487 32.6273C51.1706 31.9448 51.1706 30.8363 50.487 30.1532ZM42.6574 36.1267L39.8733 33.3426L44.6092 28.6066L47.3934 31.3908L42.6574 36.1267Z" fill="#0D3895" />
            </g>
          </svg>
          <h3>Custom CSS</h3>
          <p>Design your website with your own CSS</p>
        </div>
        <div data-aos="fade-up-right" className="box">
          <svg width="75" height="76" viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_424:41" maskUnits="userSpaceOnUse" x="0" y="5" width="75" height="69">
              <path d="M1.91487 46.6651L13.497 66.8046V66.7799C14.7591 68.9606 16.5696 70.7713 18.7478 72.0315C20.926 73.2916 23.3957 73.9572 25.9105 73.9617H49.0895C51.6044 73.9577 54.0743 73.2923 56.2526 72.0321C58.4309 70.7719 60.2413 68.9609 61.5031 66.7799L73.0851 46.6651C74.3397 44.4796 75 42.0023 75 39.4808C75 36.9593 74.3397 34.482 73.0851 32.2966L61.5031 12.1818C60.24 9.99859 58.4273 8.18619 56.2462 6.92585C54.0651 5.6655 51.5922 5.00141 49.0747 5H25.9105C23.3957 5.0045 20.926 5.67002 18.7478 6.93019C16.5696 8.19035 14.7591 10.0011 13.497 12.1818L1.91487 32.2966C0.660299 34.482 0 36.9593 0 39.4808C0 42.0023 0.660299 44.4796 1.91487 46.6651Z" fill="#00DC82" />
            </mask>
            <g mask="url(#mask0_424:41)">
              <path d="M1.91487 46.6651L13.497 66.8046V66.7799C14.7591 68.9606 16.5696 70.7713 18.7478 72.0315C20.926 73.2916 23.3957 73.9572 25.9105 73.9617H49.0895C51.6044 73.9577 54.0743 73.2923 56.2526 72.0321C58.4309 70.7719 60.2413 68.9609 61.5031 66.7799L73.0851 46.6651C74.3397 44.4796 75 42.0023 75 39.4808C75 36.9593 74.3397 34.482 73.0851 32.2966L61.5031 12.1818C60.24 9.99859 58.4273 8.18619 56.2462 6.92585C54.0651 5.6655 51.5922 5.00141 49.0747 5H25.9105C23.3957 5.0045 20.926 5.67002 18.7478 6.93019C16.5696 8.19035 14.7591 10.0011 13.497 12.1818L1.91487 32.2966C0.660299 34.482 0 36.9593 0 39.4808C0 42.0023 0.660299 44.4796 1.91487 46.6651Z" fill="#2EACFF" />
              <path opacity="0.3" d="M-8.08513 46.6668L3.49695 66.8063V66.7816C4.75911 68.9623 6.5696 70.773 8.74778 72.0332C10.926 73.2933 13.3957 73.9589 15.9105 73.9634H39.0895C41.6044 73.9594 44.0743 73.294 46.2526 72.0338C48.4309 70.7736 50.2413 68.9626 51.5031 66.7816L63.0851 46.6668C64.3397 44.4813 65 42.004 65 39.4825C65 36.961 64.3397 34.4837 63.0851 32.2983L51.5031 12.1835C50.24 10.0003 48.4273 8.1879 46.2462 6.92756C44.0651 5.66721 41.5922 5.00312 39.0747 5.00171H15.9105C13.3957 5.0062 10.926 5.67173 8.74778 6.9319C6.5696 8.19206 4.75911 10.0028 3.49695 12.1835L-8.08513 32.2983C-9.3397 34.4837 -10 36.961 -10 39.4825C-10 42.004 -9.3397 44.4813 -8.08513 46.6668Z" fill="white" />
              <path d="M50.4278 45.867L44.2526 39.6918C43.0345 38.4736 41.2151 38.2363 39.7491 38.9588L34.1276 33.3373V30.0625L27.3776 25L24.0026 28.375L29.0651 35.125H32.3399L37.9614 40.7465C37.2442 42.2125 37.4763 44.0318 38.6944 45.25L44.8696 51.4252C45.6395 52.1951 46.8841 52.1951 47.6487 51.4252L50.4278 48.6461C51.1925 47.8762 51.1925 46.6316 50.4278 45.867V45.867ZM41.4946 36.8652C42.987 36.8652 44.3897 37.4453 45.4444 38.5L46.4675 39.523C47.3007 39.1592 48.0917 38.6529 48.7772 37.9674C50.7337 36.0109 51.3981 33.2582 50.7759 30.7586C50.6599 30.284 50.064 30.1205 49.7159 30.4686L45.7925 34.392L42.2118 33.7961L41.6159 30.2154L45.5393 26.292C45.8874 25.9439 45.7186 25.348 45.2388 25.2268C42.7392 24.6098 39.9864 25.2742 38.0352 27.2254C36.5323 28.7283 35.8257 30.7111 35.8626 32.6887L40.1921 37.0182C40.6192 36.918 41.0622 36.8652 41.4946 36.8652ZM36.0155 41.1895L33.0255 38.1994L24.9888 46.2414C23.6704 47.5598 23.6704 49.6955 24.9888 51.0139C26.3071 52.3322 28.4429 52.3322 29.7612 51.0139L36.2792 44.4959C35.8784 43.4465 35.7571 42.3021 36.0155 41.1895V41.1895ZM27.3776 49.8906C26.6815 49.8906 26.112 49.3211 26.112 48.625C26.112 47.9236 26.6763 47.3594 27.3776 47.3594C28.079 47.3594 28.6433 47.9236 28.6433 48.625C28.6433 49.3211 28.079 49.8906 27.3776 49.8906Z" fill="#0D3895" />
            </g>
          </svg>
          <h3>Highly customizable</h3>
          <p>Everything is customizable on your page</p>
        </div>
        <div data-aos="fade-up-right" className="box">
          <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_413:63" maskUnits="userSpaceOnUse" x="0" y="4" width="75" height="69">
              <path d="M1.91487 45.6651L13.497 65.8046V65.7799C14.7591 67.9606 16.5696 69.7713 18.7478 71.0315C20.926 72.2916 23.3957 72.9572 25.9105 72.9617H49.0895C51.6044 72.9577 54.0743 72.2923 56.2526 71.0321C58.4309 69.7719 60.2413 67.9609 61.5031 65.7799L73.0851 45.6651C74.3397 43.4796 75 41.0023 75 38.4808C75 35.9593 74.3397 33.482 73.0851 31.2966L61.5031 11.1818C60.24 8.99859 58.4273 7.18619 56.2462 5.92585C54.0651 4.6655 51.5922 4.00141 49.0747 4H25.9105C23.3957 4.0045 20.926 4.67002 18.7478 5.93019C16.5696 7.19035 14.7591 9.0011 13.497 11.1818L1.91487 31.2966C0.660299 33.482 0 35.9593 0 38.4808C0 41.0023 0.660299 43.4796 1.91487 45.6651Z" fill="#00DC82" />
            </mask>
            <g mask="url(#mask0_413:63)">
              <path d="M1.91487 45.6651L13.497 65.8046V65.7799C14.7591 67.9606 16.5696 69.7713 18.7478 71.0315C20.926 72.2916 23.3957 72.9572 25.9105 72.9617H49.0895C51.6044 72.9577 54.0743 72.2923 56.2526 71.0321C58.4309 69.7719 60.2413 67.9609 61.5031 65.7799L73.0851 45.6651C74.3397 43.4796 75 41.0023 75 38.4808C75 35.9593 74.3397 33.482 73.0851 31.2966L61.5031 11.1818C60.24 8.99859 58.4273 7.18619 56.2462 5.92585C54.0651 4.6655 51.5922 4.00141 49.0747 4H25.9105C23.3957 4.0045 20.926 4.67002 18.7478 5.93019C16.5696 7.19035 14.7591 9.0011 13.497 11.1818L1.91487 31.2966C0.660299 33.482 0 35.9593 0 38.4808C0 41.0023 0.660299 43.4796 1.91487 45.6651Z" fill="#2EACFF" />
              <path opacity="0.3" d="M-8.08513 45.6668L3.49695 65.8063V65.7816C4.75911 67.9623 6.5696 69.773 8.74778 71.0332C10.926 72.2933 13.3957 72.9589 15.9105 72.9634H39.0895C41.6044 72.9594 44.0743 72.294 46.2526 71.0338C48.4309 69.7736 50.2413 67.9626 51.5031 65.7816L63.0851 45.6668C64.3397 43.4813 65 41.004 65 38.4825C65 35.961 64.3397 33.4837 63.0851 31.2983L51.5031 11.1835C50.24 9.0003 48.4273 7.1879 46.2462 5.92756C44.0651 4.66721 41.5922 4.00312 39.0747 4.00171H15.9105C13.3957 4.0062 10.926 4.67173 8.74778 5.9319C6.5696 7.19206 4.75911 9.00281 3.49695 11.1835L-8.08513 31.2983C-9.3397 33.4837 -10 35.961 -10 38.4825C-10 41.004 -9.3397 43.4813 -8.08513 45.6668Z" fill="white" />
              <path d="M35.6319 38.6312C34.8758 39.3873 34.8758 40.6127 35.6319 41.3681C36.3873 42.1242 37.6133 42.1242 38.3687 41.3681C39.1248 40.6121 39.1248 39.3867 38.3687 38.6312C37.6127 37.8758 36.3873 37.8758 35.6319 38.6312ZM37 25C28.7155 25 22 31.7155 22 40C22 48.2845 28.7155 55 37 55C45.2845 55 52 48.2845 52 40C52 31.7155 45.2845 25 37 25ZM44.6294 33.9546L40.6393 42.6855C40.4463 43.1077 40.1077 43.4463 39.6855 43.6393L30.9552 47.6294C29.9482 48.0897 28.9103 47.0518 29.3706 46.0448L33.3613 37.3139C33.5543 36.8917 33.8929 36.5531 34.3151 36.3601L43.0454 32.37C44.0524 31.9103 45.0897 32.9476 44.6294 33.9546Z" fill="#0D3895" />
            </g>
          </svg>
          <h3>Get your info by API</h3>
          <p>You can access your info using API</p>
        </div>
        <div data-aos="fade-up-right" className="box">
          <svg width="75" height="76" viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_424:48" maskUnits="userSpaceOnUse" x="0" y="5" width="75" height="69">
              <path d="M1.91487 46.6651L13.497 66.8046V66.7799C14.7591 68.9606 16.5696 70.7713 18.7478 72.0315C20.926 73.2916 23.3957 73.9572 25.9105 73.9617H49.0895C51.6044 73.9577 54.0743 73.2923 56.2526 72.0321C58.4309 70.7719 60.2413 68.9609 61.5031 66.7799L73.0851 46.6651C74.3397 44.4796 75 42.0023 75 39.4808C75 36.9593 74.3397 34.482 73.0851 32.2966L61.5031 12.1818C60.24 9.99859 58.4273 8.18619 56.2462 6.92585C54.0651 5.6655 51.5922 5.00141 49.0747 5H25.9105C23.3957 5.0045 20.926 5.67002 18.7478 6.93019C16.5696 8.19035 14.7591 10.0011 13.497 12.1818L1.91487 32.2966C0.660299 34.482 0 36.9593 0 39.4808C0 42.0023 0.660299 44.4796 1.91487 46.6651Z" fill="#00DC82" />
            </mask>
            <g mask="url(#mask0_424:48)">
              <path d="M1.91487 46.6651L13.497 66.8046V66.7799C14.7591 68.9606 16.5696 70.7713 18.7478 72.0315C20.926 73.2916 23.3957 73.9572 25.9105 73.9617H49.0895C51.6044 73.9577 54.0743 73.2923 56.2526 72.0321C58.4309 70.7719 60.2413 68.9609 61.5031 66.7799L73.0851 46.6651C74.3397 44.4796 75 42.0023 75 39.4808C75 36.9593 74.3397 34.482 73.0851 32.2966L61.5031 12.1818C60.24 9.99859 58.4273 8.18619 56.2462 6.92585C54.0651 5.6655 51.5922 5.00141 49.0747 5H25.9105C23.3957 5.0045 20.926 5.67002 18.7478 6.93019C16.5696 8.19035 14.7591 10.0011 13.497 12.1818L1.91487 32.2966C0.660299 34.482 0 36.9593 0 39.4808C0 42.0023 0.660299 44.4796 1.91487 46.6651Z" fill="#2EACFF" />
              <path opacity="0.3" d="M-8.08513 46.6668L3.49695 66.8063V66.7816C4.75911 68.9623 6.5696 70.773 8.74778 72.0332C10.926 73.2933 13.3957 73.9589 15.9105 73.9634H39.0895C41.6044 73.9594 44.0743 73.294 46.2526 72.0338C48.4309 70.7736 50.2413 68.9626 51.5031 66.7816L63.0851 46.6668C64.3397 44.4813 65 42.004 65 39.4825C65 36.961 64.3397 34.4837 63.0851 32.2983L51.5031 12.1835C50.24 10.0003 48.4273 8.1879 46.2462 6.92756C44.0651 5.66721 41.5922 5.00312 39.0747 5.00171H15.9105C13.3957 5.0062 10.926 5.67173 8.74778 6.9319C6.5696 8.19206 4.75911 10.0028 3.49695 12.1835L-8.08513 32.2983C-9.3397 34.4837 -10 36.961 -10 39.4825C-10 42.004 -9.3397 44.4813 -8.08513 46.6668Z" fill="white" />
              <path d="M51.75 29H28.8333C27.747 29 26.8207 29.7054 26.4767 30.6875H24.25C23.5596 30.6875 23 31.2541 23 31.9531V46.2969C23 47.9278 24.3058 49.25 25.9167 49.25H51.75C52.4404 49.25 53 48.6834 53 47.9844V30.2656C53 29.5666 52.4404 29 51.75 29ZM25.5 46.2969V33.2188H26.3333V46.2969C26.3333 46.5295 26.1464 46.7188 25.9167 46.7188C25.6869 46.7188 25.5 46.5295 25.5 46.2969ZM50.5 46.7188H28.8032C28.8227 46.5809 28.8333 46.4402 28.8333 46.2969V31.5312H50.5V46.7188ZM31.9583 40.3906H39.0417C39.3868 40.3906 39.6667 40.1073 39.6667 39.7578V34.6953C39.6667 34.3458 39.3868 34.0625 39.0417 34.0625H31.9583C31.6132 34.0625 31.3333 34.3458 31.3333 34.6953V39.7578C31.3333 40.1073 31.6132 40.3906 31.9583 40.3906ZM33.4167 36.1719H37.5833V38.2812H33.4167V36.1719ZM31.3333 43.5547V42.2891C31.3333 41.9396 31.6132 41.6562 31.9583 41.6562H39.0417C39.3868 41.6562 39.6667 41.9396 39.6667 42.2891V43.5547C39.6667 43.9042 39.3868 44.1875 39.0417 44.1875H31.9583C31.6132 44.1875 31.3333 43.9042 31.3333 43.5547ZM41.3333 43.5547V42.2891C41.3333 41.9396 41.6132 41.6562 41.9583 41.6562H47.375C47.7202 41.6562 48 41.9396 48 42.2891V43.5547C48 43.9042 47.7202 44.1875 47.375 44.1875H41.9583C41.6132 44.1875 41.3333 43.9042 41.3333 43.5547ZM41.3333 35.9609V34.6953C41.3333 34.3458 41.6132 34.0625 41.9583 34.0625H47.375C47.7202 34.0625 48 34.3458 48 34.6953V35.9609C48 36.3104 47.7202 36.5938 47.375 36.5938H41.9583C41.6132 36.5938 41.3333 36.3104 41.3333 35.9609ZM41.3333 39.7578V38.4922C41.3333 38.1427 41.6132 37.8594 41.9583 37.8594H47.375C47.7202 37.8594 48 38.1427 48 38.4922V39.7578C48 40.1073 47.7202 40.3906 47.375 40.3906H41.9583C41.6132 40.3906 41.3333 40.1073 41.3333 39.7578Z" fill="#0D3895" />
            </g>
          </svg>
          <h3>Bloging features</h3>
          <p>You can Write blog with amazing editor</p>
        </div>
        <div data-aos="fade-up-right" className="box">
          <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_413:70" maskUnits="userSpaceOnUse" x="0" y="4" width="75" height="69">
              <path d="M1.91487 45.6651L13.497 65.8046V65.7799C14.7591 67.9606 16.5696 69.7713 18.7478 71.0315C20.926 72.2916 23.3957 72.9572 25.9105 72.9617H49.0895C51.6044 72.9577 54.0743 72.2923 56.2526 71.0321C58.4309 69.7719 60.2413 67.9609 61.5031 65.7799L73.0851 45.6651C74.3397 43.4796 75 41.0023 75 38.4808C75 35.9593 74.3397 33.482 73.0851 31.2966L61.5031 11.1818C60.24 8.99859 58.4273 7.18619 56.2462 5.92585C54.0651 4.6655 51.5922 4.00141 49.0747 4H25.9105C23.3957 4.0045 20.926 4.67002 18.7478 5.93019C16.5696 7.19035 14.7591 9.0011 13.497 11.1818L1.91487 31.2966C0.660299 33.482 0 35.9593 0 38.4808C0 41.0023 0.660299 43.4796 1.91487 45.6651Z" fill="#00DC82" />
            </mask>
            <g mask="url(#mask0_413:70)">
              <path d="M1.91487 45.6651L13.497 65.8046V65.7799C14.7591 67.9606 16.5696 69.7713 18.7478 71.0315C20.926 72.2916 23.3957 72.9572 25.9105 72.9617H49.0895C51.6044 72.9577 54.0743 72.2923 56.2526 71.0321C58.4309 69.7719 60.2413 67.9609 61.5031 65.7799L73.0851 45.6651C74.3397 43.4796 75 41.0023 75 38.4808C75 35.9593 74.3397 33.482 73.0851 31.2966L61.5031 11.1818C60.24 8.99859 58.4273 7.18619 56.2462 5.92585C54.0651 4.6655 51.5922 4.00141 49.0747 4H25.9105C23.3957 4.0045 20.926 4.67002 18.7478 5.93019C16.5696 7.19035 14.7591 9.0011 13.497 11.1818L1.91487 31.2966C0.660299 33.482 0 35.9593 0 38.4808C0 41.0023 0.660299 43.4796 1.91487 45.6651Z" fill="#2EACFF" />
              <path opacity="0.3" d="M-8.08513 45.6668L3.49695 65.8063V65.7816C4.75911 67.9623 6.5696 69.773 8.74778 71.0332C10.926 72.2933 13.3957 72.9589 15.9105 72.9634H39.0895C41.6044 72.9594 44.0743 72.294 46.2526 71.0338C48.4309 69.7736 50.2413 67.9626 51.5031 65.7816L63.0851 45.6668C64.3397 43.4813 65 41.004 65 38.4825C65 35.961 64.3397 33.4837 63.0851 31.2983L51.5031 11.1835C50.24 9.0003 48.4273 7.1879 46.2462 5.92756C44.0651 4.66721 41.5922 4.00312 39.0747 4.00171H15.9105C13.3957 4.0062 10.926 4.67173 8.74778 5.9319C6.5696 7.19206 4.75911 9.00281 3.49695 11.1835L-8.08513 31.2983C-9.3397 33.4837 -10 35.961 -10 38.4825C-10 41.004 -9.3397 43.4813 -8.08513 45.6668Z" fill="white" />
              <path d="M45.5803 33.865H38.3678L41.0303 25.597C41.2803 24.6288 40.5615 23.6733 39.5803 23.6733H30.5803C29.8303 23.6733 29.1928 24.2403 29.0928 24.9983L27.0928 40.2858C26.974 41.2031 27.674 42.0184 28.5803 42.0184H35.999L33.1178 54.4077C32.8928 55.3759 33.6178 56.2868 34.574 56.2868C35.099 56.2868 35.599 56.0065 35.874 55.5224L46.874 36.1582C47.4553 35.1454 46.7365 33.865 45.5803 33.865Z" fill="#0D3895" />
            </g>
          </svg>
          <h3>High Performance</h3>
          <p>We are taking care of your pages Performance</p>
        </div>
        <div data-aos="fade-up-right" className="box">
          <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_413:77" maskUnits="userSpaceOnUse" x="0" y="4" width="75" height="69">
              <path d="M1.91487 45.6651L13.497 65.8046V65.7799C14.7591 67.9606 16.5696 69.7713 18.7478 71.0315C20.926 72.2916 23.3957 72.9572 25.9105 72.9617H49.0895C51.6044 72.9577 54.0743 72.2923 56.2526 71.0321C58.4309 69.7719 60.2413 67.9609 61.5031 65.7799L73.0851 45.6651C74.3397 43.4796 75 41.0023 75 38.4808C75 35.9593 74.3397 33.482 73.0851 31.2966L61.5031 11.1818C60.24 8.99859 58.4273 7.18619 56.2462 5.92585C54.0651 4.6655 51.5922 4.00141 49.0747 4H25.9105C23.3957 4.0045 20.926 4.67002 18.7478 5.93019C16.5696 7.19035 14.7591 9.0011 13.497 11.1818L1.91487 31.2966C0.660299 33.482 0 35.9593 0 38.4808C0 41.0023 0.660299 43.4796 1.91487 45.6651Z" fill="#00DC82" />
            </mask>
            <g mask="url(#mask0_413:77)">
              <path d="M1.91487 45.6651L13.497 65.8046V65.7799C14.7591 67.9606 16.5696 69.7713 18.7478 71.0315C20.926 72.2916 23.3957 72.9572 25.9105 72.9617H49.0895C51.6044 72.9577 54.0743 72.2923 56.2526 71.0321C58.4309 69.7719 60.2413 67.9609 61.5031 65.7799L73.0851 45.6651C74.3397 43.4796 75 41.0023 75 38.4808C75 35.9593 74.3397 33.482 73.0851 31.2966L61.5031 11.1818C60.24 8.99859 58.4273 7.18619 56.2462 5.92585C54.0651 4.6655 51.5922 4.00141 49.0747 4H25.9105C23.3957 4.0045 20.926 4.67002 18.7478 5.93019C16.5696 7.19035 14.7591 9.0011 13.497 11.1818L1.91487 31.2966C0.660299 33.482 0 35.9593 0 38.4808C0 41.0023 0.660299 43.4796 1.91487 45.6651Z" fill="#2EACFF" />
              <path opacity="0.3" d="M-8.08513 45.6668L3.49695 65.8063V65.7816C4.75911 67.9623 6.5696 69.773 8.74778 71.0332C10.926 72.2933 13.3957 72.9589 15.9105 72.9634H39.0895C41.6044 72.9594 44.0743 72.294 46.2526 71.0338C48.4309 69.7736 50.2413 67.9626 51.5031 65.7816L63.0851 45.6668C64.3397 43.4813 65 41.004 65 38.4825C65 35.961 64.3397 33.4837 63.0851 31.2983L51.5031 11.1835C50.24 9.0003 48.4273 7.1879 46.2462 5.92756C44.0651 4.66721 41.5922 4.00312 39.0747 4.00171H15.9105C13.3957 4.0062 10.926 4.67173 8.74778 5.9319C6.5696 7.19206 4.75911 9.00281 3.49695 11.1835L-8.08513 31.2983C-9.3397 33.4837 -10 35.961 -10 38.4825C-10 41.004 -9.3397 43.4813 -8.08513 45.6668Z" fill="white" />
              <path d="M51.592 50.9369L45.7498 45.0957C45.4861 44.832 45.1286 44.6856 44.7536 44.6856H43.7985C45.4158 42.6174 46.3768 40.0161 46.3768 37.1863C46.3768 30.4545 40.9213 25 34.1884 25C27.4555 25 22 30.4545 22 37.1863C22 43.9181 27.4555 49.3726 34.1884 49.3726C37.0187 49.3726 39.6204 48.4118 41.6889 46.7947V47.7497C41.6889 48.1247 41.8354 48.4821 42.0991 48.7457L47.9414 54.587C48.4922 55.1377 49.3829 55.1377 49.9278 54.587L51.5861 52.9289C52.137 52.3782 52.137 51.4876 51.592 50.9369ZM34.1884 44.6856C30.0455 44.6856 26.6878 41.3343 26.6878 37.1863C26.6878 33.0441 30.0397 29.687 34.1884 29.687C38.3313 29.687 41.6889 33.0383 41.6889 37.1863C41.6889 41.3285 38.3371 44.6856 34.1884 44.6856Z" fill="#0D3895" />
            </g>
          </svg>
          <h3>SEO friendly</h3>
          <p>We are taking care of your pages SEO</p>
        </div>
        <div data-aos="fade-up-right" className="box">
          <svg width="75" height="76" viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_413:112" maskUnits="userSpaceOnUse" x="0" y="5" width="75" height="69">
              <path d="M1.91487 46.6651L13.497 66.8046V66.7799C14.7591 68.9606 16.5696 70.7713 18.7478 72.0315C20.926 73.2916 23.3957 73.9572 25.9105 73.9617H49.0895C51.6044 73.9577 54.0743 73.2923 56.2526 72.0321C58.4309 70.7719 60.2413 68.9609 61.5031 66.7799L73.0851 46.6651C74.3397 44.4796 75 42.0023 75 39.4808C75 36.9593 74.3397 34.482 73.0851 32.2966L61.5031 12.1818C60.24 9.99859 58.4273 8.18619 56.2462 6.92585C54.0651 5.6655 51.5922 5.00141 49.0747 5H25.9105C23.3957 5.0045 20.926 5.67002 18.7478 6.93019C16.5696 8.19035 14.7591 10.0011 13.497 12.1818L1.91487 32.2966C0.660299 34.482 0 36.9593 0 39.4808C0 42.0023 0.660299 44.4796 1.91487 46.6651Z" fill="#00DC82" />
            </mask>
            <g mask="url(#mask0_413:112)">
              <path d="M1.91487 46.6651L13.497 66.8046V66.7799C14.7591 68.9606 16.5696 70.7713 18.7478 72.0315C20.926 73.2916 23.3957 73.9572 25.9105 73.9617H49.0895C51.6044 73.9577 54.0743 73.2923 56.2526 72.0321C58.4309 70.7719 60.2413 68.9609 61.5031 66.7799L73.0851 46.6651C74.3397 44.4796 75 42.0023 75 39.4808C75 36.9593 74.3397 34.482 73.0851 32.2966L61.5031 12.1818C60.24 9.99859 58.4273 8.18619 56.2462 6.92585C54.0651 5.6655 51.5922 5.00141 49.0747 5H25.9105C23.3957 5.0045 20.926 5.67002 18.7478 6.93019C16.5696 8.19035 14.7591 10.0011 13.497 12.1818L1.91487 32.2966C0.660299 34.482 0 36.9593 0 39.4808C0 42.0023 0.660299 44.4796 1.91487 46.6651Z" fill="#2EACFF" />
              <path opacity="0.3" d="M-8.08513 46.6668L3.49695 66.8063V66.7816C4.75911 68.9623 6.5696 70.773 8.74778 72.0332C10.926 73.2933 13.3957 73.9589 15.9105 73.9634H39.0895C41.6044 73.9594 44.0743 73.294 46.2526 72.0338C48.4309 70.7736 50.2413 68.9626 51.5031 66.7816L63.0851 46.6668C64.3397 44.4813 65 42.004 65 39.4825C65 36.961 64.3397 34.4837 63.0851 32.2983L51.5031 12.1835C50.24 10.0003 48.4273 8.1879 46.2462 6.92756C44.0651 5.66721 41.5922 5.00312 39.0747 5.00171H15.9105C13.3957 5.0062 10.926 5.67173 8.74778 6.9319C6.5696 8.19206 4.75911 10.0028 3.49695 12.1835L-8.08513 32.2983C-9.3397 34.4837 -10 36.961 -10 39.4825C-10 42.004 -9.3397 44.4813 -8.08513 46.6668Z" fill="white" />
              <path d="M48.4688 27H31.5938C30.1963 27 29.0625 28.1338 29.0625 29.5312V32.0625H26.5312C25.1338 32.0625 24 33.1963 24 34.5938V51.4688C24 52.8662 25.1338 54 26.5312 54H43.4062C44.8037 54 45.9375 52.8662 45.9375 51.4688V48.9375H48.4688C49.8662 48.9375 51 47.8037 51 46.4062V29.5312C51 28.1338 49.8662 27 48.4688 27ZM43.4062 51.4688H26.5312V40.5H43.4062V51.4688ZM48.4688 46.4062H45.9375V34.5938C45.9375 33.1963 44.8037 32.0625 43.4062 32.0625H31.5938V29.5312H48.4688V46.4062Z" fill="#0D3895" />
            </g>
          </svg>
          <h3>Fully responsive</h3>
          <p>Your website will be responsive</p>
        </div>
        <div data-aos="fade-up-right" className="box">
          <svg width="75" height="76" viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_424:55" maskUnits="userSpaceOnUse" x="0" y="5" width="75" height="69">
              <path d="M1.91487 46.6651L13.497 66.8046V66.7799C14.7591 68.9606 16.5696 70.7713 18.7478 72.0315C20.926 73.2916 23.3957 73.9572 25.9105 73.9617H49.0895C51.6044 73.9577 54.0743 73.2923 56.2526 72.0321C58.4309 70.7719 60.2413 68.9609 61.5031 66.7799L73.0851 46.6651C74.3397 44.4796 75 42.0023 75 39.4808C75 36.9593 74.3397 34.482 73.0851 32.2966L61.5031 12.1818C60.24 9.99859 58.4273 8.18619 56.2462 6.92585C54.0651 5.6655 51.5922 5.00141 49.0747 5H25.9105C23.3957 5.0045 20.926 5.67002 18.7478 6.93019C16.5696 8.19035 14.7591 10.0011 13.497 12.1818L1.91487 32.2966C0.660299 34.482 0 36.9593 0 39.4808C0 42.0023 0.660299 44.4796 1.91487 46.6651Z" fill="#00DC82" />
            </mask>
            <g mask="url(#mask0_424:55)">
              <path d="M1.91487 46.6651L13.497 66.8046V66.7799C14.7591 68.9606 16.5696 70.7713 18.7478 72.0315C20.926 73.2916 23.3957 73.9572 25.9105 73.9617H49.0895C51.6044 73.9577 54.0743 73.2923 56.2526 72.0321C58.4309 70.7719 60.2413 68.9609 61.5031 66.7799L73.0851 46.6651C74.3397 44.4796 75 42.0023 75 39.4808C75 36.9593 74.3397 34.482 73.0851 32.2966L61.5031 12.1818C60.24 9.99859 58.4273 8.18619 56.2462 6.92585C54.0651 5.6655 51.5922 5.00141 49.0747 5H25.9105C23.3957 5.0045 20.926 5.67002 18.7478 6.93019C16.5696 8.19035 14.7591 10.0011 13.497 12.1818L1.91487 32.2966C0.660299 34.482 0 36.9593 0 39.4808C0 42.0023 0.660299 44.4796 1.91487 46.6651Z" fill="#2EACFF" />
              <path opacity="0.3" d="M-8.08513 46.6668L3.49695 66.8063V66.7816C4.75911 68.9623 6.5696 70.773 8.74778 72.0332C10.926 73.2933 13.3957 73.9589 15.9105 73.9634H39.0895C41.6044 73.9594 44.0743 73.294 46.2526 72.0338C48.4309 70.7736 50.2413 68.9626 51.5031 66.7816L63.0851 46.6668C64.3397 44.4813 65 42.004 65 39.4825C65 36.961 64.3397 34.4837 63.0851 32.2983L51.5031 12.1835C50.24 10.0003 48.4273 8.1879 46.2462 6.92756C44.0651 5.66721 41.5922 5.00312 39.0747 5.00171H15.9105C13.3957 5.0062 10.926 5.67173 8.74778 6.9319C6.5696 8.19206 4.75911 10.0028 3.49695 12.1835L-8.08513 32.2983C-9.3397 34.4837 -10 36.961 -10 39.4825C-10 42.004 -9.3397 44.4813 -8.08513 46.6668Z" fill="white" />
              <path d="M31.3113 44.8314C30.8361 44.3561 31.0838 44.4901 29.9376 44.1833C29.4175 44.0439 28.9603 43.7759 28.5469 43.4549L26.0657 49.5382C25.8257 50.1272 26.2741 50.767 26.9096 50.743L29.791 50.6331L31.7729 52.7265C32.2104 53.188 32.9782 53.0442 33.2182 52.4552L36.0647 45.4761C35.4719 45.8064 34.814 46 34.1337 46C33.0673 46 32.0654 45.585 31.3113 44.8314V44.8314ZM46.9343 49.5382L44.4531 43.4549C44.0397 43.7765 43.5825 44.0439 43.0624 44.1833C41.9102 44.4918 42.1628 44.3572 41.6887 44.8314C40.9346 45.585 39.9322 46 38.8658 46C38.1855 46 37.5276 45.8059 36.9348 45.4761L39.7812 52.4552C40.0213 53.0442 40.7896 53.188 41.2266 52.7265L43.209 50.6331L46.0904 50.743C46.7259 50.767 47.1743 50.1267 46.9343 49.5382V49.5382ZM40.3828 43.5938C41.2184 42.7434 41.3141 42.8167 42.5041 42.4924C43.2637 42.2852 43.8576 41.6809 44.061 40.9076C44.4701 39.3545 44.364 39.5421 45.4801 38.4057C46.0363 37.8397 46.2534 37.0145 46.05 36.2412C45.6415 34.6892 45.6409 34.9058 46.05 33.3521C46.2534 32.5789 46.0363 31.7537 45.4801 31.1877C44.364 30.0513 44.4701 30.2383 44.061 28.6858C43.8576 27.9125 43.2637 27.3082 42.5041 27.1009C40.9794 26.6848 41.1632 26.7936 40.0459 25.6567C39.4897 25.0907 38.6787 24.8692 37.9191 25.0765C36.395 25.4921 36.6077 25.4926 35.0809 25.0765C34.3213 24.8692 33.5103 25.0901 32.9541 25.6567C31.8379 26.7931 32.0217 26.6848 30.4965 27.1009C29.7369 27.3082 29.143 27.9125 28.9395 28.6858C28.531 30.2383 28.6366 30.0513 27.5204 31.1877C26.9642 31.7537 26.7466 32.5789 26.9506 33.3521C27.3591 34.9031 27.3596 34.6865 26.9506 36.2407C26.7471 37.014 26.9642 37.8392 27.5204 38.4057C28.6366 39.5421 28.5305 39.3545 28.9395 40.9076C29.143 41.6809 29.7369 42.2852 30.4965 42.4924C31.7204 42.826 31.8117 42.7735 32.6172 43.5938C33.3407 44.3304 34.4678 44.4622 35.3374 43.9121C35.6851 43.6914 36.0884 43.5741 36.5003 43.5741C36.9121 43.5741 37.3155 43.6914 37.6632 43.9121C38.5322 44.4622 39.6593 44.3304 40.3828 43.5938ZM31.3408 34.6231C31.3408 31.723 33.6508 29.3721 36.5 29.3721C39.3492 29.3721 41.6592 31.723 41.6592 34.6231C41.6592 37.5231 39.3492 39.8741 36.5 39.8741C33.6508 39.8741 31.3408 37.5231 31.3408 34.6231V34.6231Z" fill="#0D3895" />
            </g>
          </svg>
          <h3>Self Host</h3>
          <p>You can use VDEV Api in your website and host anywhere</p>
        </div>
        <div data-aos="fade-up-right" className="box">
          <svg width="75" height="76" viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_424:69" maskUnits="userSpaceOnUse" x="0" y="5" width="75" height="69">
              <path d="M1.91487 46.6651L13.497 66.8046V66.7799C14.7591 68.9606 16.5696 70.7713 18.7478 72.0315C20.926 73.2916 23.3957 73.9572 25.9105 73.9617H49.0895C51.6044 73.9577 54.0743 73.2923 56.2526 72.0321C58.4309 70.7719 60.2413 68.9609 61.5031 66.7799L73.0851 46.6651C74.3397 44.4796 75 42.0023 75 39.4808C75 36.9593 74.3397 34.482 73.0851 32.2966L61.5031 12.1818C60.24 9.99859 58.4273 8.18619 56.2462 6.92585C54.0651 5.6655 51.5922 5.00141 49.0747 5H25.9105C23.3957 5.0045 20.926 5.67002 18.7478 6.93019C16.5696 8.19035 14.7591 10.0011 13.497 12.1818L1.91487 32.2966C0.660299 34.482 0 36.9593 0 39.4808C0 42.0023 0.660299 44.4796 1.91487 46.6651Z" fill="#00DC82" />
            </mask>
            <g mask="url(#mask0_424:69)">
              <path d="M1.91487 46.6651L13.497 66.8046V66.7799C14.7591 68.9606 16.5696 70.7713 18.7478 72.0315C20.926 73.2916 23.3957 73.9572 25.9105 73.9617H49.0895C51.6044 73.9577 54.0743 73.2923 56.2526 72.0321C58.4309 70.7719 60.2413 68.9609 61.5031 66.7799L73.0851 46.6651C74.3397 44.4796 75 42.0023 75 39.4808C75 36.9593 74.3397 34.482 73.0851 32.2966L61.5031 12.1818C60.24 9.99859 58.4273 8.18619 56.2462 6.92585C54.0651 5.6655 51.5922 5.00141 49.0747 5H25.9105C23.3957 5.0045 20.926 5.67002 18.7478 6.93019C16.5696 8.19035 14.7591 10.0011 13.497 12.1818L1.91487 32.2966C0.660299 34.482 0 36.9593 0 39.4808C0 42.0023 0.660299 44.4796 1.91487 46.6651Z" fill="#2EACFF" />
              <path opacity="0.3" d="M-8.08513 46.6668L3.49695 66.8063V66.7816C4.75911 68.9623 6.5696 70.773 8.74778 72.0332C10.926 73.2933 13.3957 73.9589 15.9105 73.9634H39.0895C41.6044 73.9594 44.0743 73.294 46.2526 72.0338C48.4309 70.7736 50.2413 68.9626 51.5031 66.7816L63.0851 46.6668C64.3397 44.4813 65 42.004 65 39.4825C65 36.961 64.3397 34.4837 63.0851 32.2983L51.5031 12.1835C50.24 10.0003 48.4273 8.1879 46.2462 6.92756C44.0651 5.66721 41.5922 5.00312 39.0747 5.00171H15.9105C13.3957 5.0062 10.926 5.67173 8.74778 6.9319C6.5696 8.19206 4.75911 10.0028 3.49695 12.1835L-8.08513 32.2983C-9.3397 34.4837 -10 36.961 -10 39.4825C-10 42.004 -9.3397 44.4813 -8.08513 46.6668Z" fill="white" />
              <path d="M44.6667 35.4375C44.6667 30.7758 39.8177 27 33.8333 27C27.849 27 23 30.7758 23 35.4375C23 37.2463 23.7344 38.9127 24.9792 40.2891C24.2812 41.8816 23.1302 43.1473 23.1146 43.1631C23 43.2844 22.9688 43.4637 23.0365 43.6219C23.1042 43.7801 23.25 43.875 23.4167 43.875C25.3229 43.875 26.901 43.2264 28.0365 42.5566C29.7135 43.3846 31.6979 43.875 33.8333 43.875C39.8177 43.875 44.6667 40.0992 44.6667 35.4375ZM51.0208 47.0391C52.2656 45.668 53 43.9963 53 42.1875C53 38.6596 50.2135 35.6379 46.2656 34.3775C46.3125 34.7256 46.3333 35.0789 46.3333 35.4375C46.3333 41.0221 40.724 45.5625 33.8333 45.5625C33.2708 45.5625 32.724 45.5203 32.1823 45.4623C33.8229 48.4945 37.6771 50.625 42.1667 50.625C44.3021 50.625 46.2865 50.1398 47.9635 49.3066C49.099 49.9764 50.6771 50.625 52.5833 50.625C52.75 50.625 52.901 50.5248 52.9635 50.3719C53.0312 50.2189 53 50.0396 52.8854 49.9131C52.8698 49.8973 51.7187 48.6369 51.0208 47.0391Z" fill="#0D3895" />
            </g>
          </svg>
          <h3>Recive Message From audience</h3>
          <p>Your audience can send you message</p>
        </div>
      </div>
      <img src={lowbg} alt="bg" style={{ width: '100%', position: 'relative', bottom: '-10px' }} />

      <div style={{ backgroundColor: '#e5f9ff', paddingTop: '10px' }}>
        {/* Products */}
        <h1 data-aos="zoom-in-up">Products</h1>
        <Products limit="10" />
        <Link to="/product">
          <button>
            More Products <i class="fas fa-arrow-right"></i>{' '}
          </button>
        </Link>

        {/* Blogs */}
        <h1 data-aos="zoom-in-up">Blogs</h1>
        <Blogs />
        <Link to="/blog">
          <button>
            More Blogs <i class="fas fa-arrow-right"></i>{' '}
          </button>
        </Link>

      </div>
      <img src={lowbg2} alt="bg" style={{ width: '100%', position: 'relative', marginBottom: '-10px', zIndex: '-1', backgroundColor: '#e5f9ff' }} />
      <Footer />
    </div>
  )
}
