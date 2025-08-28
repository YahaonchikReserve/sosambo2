import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import WashingMachineAnimation from './WashingMachineAnimation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 479)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Проверяем, являе��ся ли текущая страница страницей проблемы
  const isProblemPage = router.pathname && (
    router.pathname.includes('NESLIVAETIVODU') ||
    router.pathname.includes('NEGREETIVODU') ||
    router.pathname.includes('PROTEKAET') ||
    router.pathname.includes('SILNOSHUMIT') ||
    router.pathname.includes('NEVKLUCHAETSA') ||
    router.pathname.includes('ZAVISAETNAPROGRAMME') ||
    router.pathname.includes('NEOTJIMAET') ||
    router.pathname.includes('NENABIRRAETVODU') ||
    router.pathname.includes('NEOTKRIVATSADVERCA')
  )

  return (
    <>
      {/* Изолированный контейнер для хедера */}
      <div className="header-component">
        <header className="frame1196-container101">
          <div className="frame1196-container102">
            <div className="frame1196-container103">
              <WashingMachineAnimation
                className="frame1196-image10"
                width={isMobile ? 141 : 95}
                height={isMobile ? 141 : 92}
              />
              <span className="frame1196-text100">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Ваше название',
                  }}
                ></span>
              </span>
            </div>
          </div>
          <div className="frame1196-container104">
            <img
              alt="image"
              src="/ICONS/dla%20hedera%20trubka.svg"
              className="frame1196-image11"
            />
            <div
              className="frame1196-burger-menu"
              onClick={toggleMenu}
            >
              <div className="frame1196-burger-line"></div>
              <div className="frame1196-burger-line"></div>
              <div className="frame1196-burger-line"></div>
            </div>
          </div>
          <div className="frame1196-obshiy">
            <div className="frame1196-korobki">
              <Link href="/">
                <div className={`${router.pathname === '/' ? 'frame1196-container105' : 'frame1196-container105-inactive'}`}>
                  <span className="frame1196-text101">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Главная',
                      }}
                    ></span>
                  </span>
                </div>
              </Link>
              <Link href="/vikup">
                <div className={`${router.pathname === '/vikup' ? 'frame1196-container105' : 'frame1196-container105-inactive'}`}>
                  <span className="frame1196-text102">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Выкуп б/у машин',
                      }}
                    ></span>
                  </span>
                </div>
              </Link>
              <Link href="/articles">
                <div className={`${isProblemPage ? 'frame1196-container105' : 'frame1196-container105-inactive'}`}>
                  <span className="frame1196-text103">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Ст��тьи',
                      }}
                    ></span>
                  </span>
                </div>
              </Link>
            </div>
            <div className="frame1196-telephonadres">
              <div className="frame1196-container108">
                <img
                  alt="image"
                  src="/ICONS/dla%20hedera%20trubka.svg"
                  className="frame1196-image13"
                />
                <div className="frame1196-container109">
                  <span className="frame1196-text104">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '+38 (067) 123-45-67',
                      }}
                    ></span>
                  </span>
                  <span className="frame1196-text105">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '+38 (067) 123-45-67',
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <div className="frame1196-container110">
                <span className="frame1196-text106">
                  <span className="frame1196-text106-bold">Адрес:</span>
                  <span className="frame1196-text106-normal"> пл. Независимости, 1, Одесса, Одесская область, 65000</span>
                </span>
                <span className="frame1196-text107">
                  <span className="frame1196-text107-bold">Пн-Вс:</span>
                  <span className="frame1196-text107-normal"> 9:00-21:00</span>
                </span>
              </div>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="110"
                viewBox="0 0 20 110"
                preserveAspectRatio="none"
                className="frame1196-icon100"
              >
                <path
                  d="M10 0 V110"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="110"
                viewBox="0 0 20 110"
                preserveAspectRatio="none"
                className="frame1196-icon102"
              >
                <path
                  d="M10 0 V110"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <svg
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="frame1196-icon104"
              >
                <path
                  d="M0 10 H330"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <svg
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="frame1196-icon106"
              >
                <path
                  d="M0 10 H330"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
            </div>
          </div>
        </header>

        {/* Боковое меню */}
        <div className={`frame1196-sidebar ${isMenuOpen ? 'frame1196-sidebar-open' : ''}`}>
          <div className="frame1196-sidebar-overlay" onClick={toggleMenu}></div>
          <div className="frame1196-sidebar-content">
            <div className="frame1196-sidebar-header">
              <button className="frame1196-sidebar-close" onClick={toggleMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <nav className="frame1196-sidebar-nav">
              <Link href="/">
                <a
                  className={`frame1196-sidebar-link ${router.pathname === '/' ? 'frame1196-sidebar-link-active' : ''}`}
                  style={{ color: router.pathname === '/' ? '#87ceeb !important' : 'white !important' }}
                >
                  ГЛАВНАЯ
                </a>
              </Link>
              <Link href="/vikup">
                <a
                  className={`frame1196-sidebar-link ${router.pathname === '/vikup' ? 'frame1196-sidebar-link-active' : ''}`}
                  style={{ color: router.pathname === '/vikup' ? '#87ceeb !important' : 'white !important' }}
                >
                  ВЫКУП Б/У МАШИН
                </a>
              </Link>
              <Link href="/articles">
                <a
                  className={`frame1196-sidebar-link ${isProblemPage ? 'frame1196-sidebar-link-active' : ''}`}
                  style={{ color: isProblemPage ? '#87ceeb !important' : 'white !important' }}
                >
                  СТАТЬИ
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <style jsx global>
        {`
          /* Глобальные стили для принуждения цвета в sidebar */
          .frame1196-sidebar-nav a {
            color: white !important;
          }
          .frame1196-sidebar-nav a.frame1196-sidebar-link-active {
            color: #87ceeb !important;
          }

          /* Глобальные стили для стиральной машины на мобильных */
          @media (max-width: 479px) {
            .frame1196-image10.washing-machine-wrapper {
              position: absolute !important;
              top: 16px !important;
              left: 0 !important;
              right: 0 !important;
              margin: auto !important;
              z-index: 1000 !important;
              display: flex !important;
              justify-content: center !important;
              padding-top: 0 !important;
              background-color: transparent !important;
              width: 148px !important;
              height: 148px !important;
              transform: translateX(10px) !important;
            }
          }
        `}
      </style>
      <style jsx>
        {`
          /* У��икальный контейнер компонента */
          .header-component {
            width: 100%;
          }

          /* Стили для ссылок */
          .frame1196-container105,
          .frame1196-container106,
          .frame1196-container107 {
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .frame1196-container105:hover,
          .frame1196-container106:hover,
          .frame1196-container107:hover {
            background-color: #87ceeb;
          }

          /* Основные стили хе��ера */
          .frame1196-container101 {
            width: 100%;
            height: auto;
            display: flex;
            min-width: 100%;
            max-height: 120px;
            min-height: 115px;
            align-items: center;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            justify-content: space-between;
            background-color: #232020;
          }
          .frame1196-container102 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .frame1196-container103 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 420px;
            height: 91px;
            display: flex;
            position: relative;
            align-items: center;
            white-space: nowrap;
            border-radius: var(--dl-layout-radius-radius4);
            overflow-wrap: break-word;
            flex-direction: row;
            justify-content: flex-start;
            padding: 0 20px;
          }
          .frame1196-text100 {
            color: rgb(255, 255, 255);
            font-size: 23px;
            word-wrap: break-word;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 300;
            white-space: normal;
            letter-spacing: 1.5px;
          }
          .frame1196-image10 {
            width: 95px;
            height: 92px;
            object-fit: cover;
            margin-right: 15px;
          }
          .frame1196-container104 {
            display: none;
            align-items: center;
            justify-content: space-between;
          }
          .frame1196-image11 {
            width: 200px;
            object-fit: cover;
          }
          .frame1196-obshiy {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .frame1196-korobki {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .frame1196-container105 {
            flex: 0 0 auto;
            width: 183px;
            height: 50px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
            background-color: #87ceeb;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .frame1196-container105:hover {
            background-color: #5bb8e8;
            box-shadow: 0 0 15px rgba(135, 206, 235, 0.6);
            transform: translateY(-1px);
          }
          .frame1196-container105-inactive {
            flex: 0 0 auto;
            width: 183px;
            height: 50px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
            background-color: rgba(46, 51, 55, 0.41);
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .frame1196-container105-inactive:hover {
            background-color: #87ceeb;
            box-shadow: 0 0 15px rgba(135, 206, 235, 0.6);
            transform: translateY(-1px);
          }
          .frame1196-text101 {
            color: #ffffff;
            font-size: 15px;
            font-family: 'Roboto';
          }
          .frame1196-container106 {
            flex: 0 0 auto;
            width: 183px;
            height: 50px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
            background-color: rgba(46, 51, 55, 0.41);
          }
          .frame1196-text102 {
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-family: 'Roboto';
          }
          .frame1196-container107 {
            flex: 0 0 auto;
            width: 183px;
            height: 50px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
            background-color: rgba(46, 51, 55, 0.41);
          }
          .frame1196-text103 {
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-family: 'Roboto';
          }
          .frame1196-telephonadres {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 513px;
            height: 75px;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            background-color: rgba(46, 51, 55, 0.41);
          }
          .frame1196-container108 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .frame1196-image13 {
            width: 33px;
            height: 32px;
            align-self: center;
            object-fit: cover;
          }
          .frame1196-container109 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .frame1196-text104 {
            fill: rgb(255, 255, 255);
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-style: normal;
            font-family: 'Roboto';
            font-weight: 400;
            letter-spacing: 1.5px;
          }
          .frame1196-text105 {
            fill: rgb(255, 255, 255);
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-style: normal;
            font-family: 'Roboto';
            font-weight: 400;
            letter-spacing: 1.5px;
          }
          .frame1196-container110 {
            gap: 12px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .frame1196-text106 {
            color: rgb(255, 255, 255);
            font-size: 12px;
            align-self: center;
            font-family: 'Roboto';
            font-weight: 300;
            letter-spacing: 1.5px;
          }
          .frame1196-text106-bold {
            font-weight: 500;
          }
          .frame1196-text106-normal {
            font-weight: 300;
          }
          .frame1196-text107 {
            fill: rgb(255, 255, 255);
            color: rgb(255, 255, 255);
            font-size: 12px;
            align-self: flex-start;
            font-family: 'Roboto';
            font-weight: 300;
            letter-spacing: 1.5px;
            text-align: left;
          }
          .frame1196-text107-bold {
            font-weight: 500;
          }
          .frame1196-text107-normal {
            font-weight: 300;
          }
          .frame1196-icon100 {
            left: -9px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon102 {
            top: -2px;
            right: -8px;
            width: 5px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon104 {
            top: -10px;
            right: -1px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .frame1196-icon106 {
            left: 0px;
            width: 100%;
            bottom: -10px;
            height: 5px;
            position: absolute;
          }

          /* С��или для бургер-меню */
          .frame1196-burger-menu {
            width: 35px;
            height: 35px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            cursor: pointer;
            padding: 5px;
          }

          .frame1196-burger-line {
            width: 100%;
            height: 3px;
            background-color: white;
            border-radius: 2px;
            transition: all 0.3s ease;
          }

          /* Стили для боковой панели */
          .frame1196-sidebar {
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            z-index: 1000;
            pointer-events: none;
            transition: opacity 0.3s ease;
            opacity: 0;
          }

          .frame1196-sidebar-open {
            pointer-events: all;
            opacity: 1;
          }

          .frame1196-sidebar-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
          }

          .frame1196-sidebar-content {
            position: absolute;
            top: 0;
            right: 0;
            width: 300px;
            height: 100%;
            background-color: #232020;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            display: flex;
            flex-direction: column;
          }

          .frame1196-sidebar-open .frame1196-sidebar-content {
            transform: translateX(0);
          }

          .frame1196-sidebar-header {
            padding: 20px;
            display: flex;
            justify-content: flex-end;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .frame1196-sidebar-close {
            background: none;
            border: none;
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .frame1196-sidebar-nav {
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .frame1196-sidebar-link {
            color: white !important;
            text-decoration: none !important;
            font-size: 18px;
            font-family: 'Roboto';
            font-weight: 500;
            padding: 15px 20px;
            border-radius: 8px;
            background-color: rgba(46, 51, 55, 0.41);
            text-align: center;
            transition: all 0.3s ease;
            display: block;
          }

          .frame1196-sidebar-nav a {
            color: white !important;
            text-decoration: none !important;
          }

          .frame1196-sidebar-nav a:visited {
            color: white !important;
          }

          .frame1196-sidebar-nav a:link {
            color: white !important;
          }

          .frame1196-sidebar-link:hover {
            background-color: #87ceeb;
            color: white !important;
          }

          .frame1196-sidebar-link-active {
            color: #87ceeb !important;
            background-color: rgba(135, 206, 235, 0.2) !important;
          }

          .frame1196-sidebar-link-active:hover {
            color: #87ceeb !important;
            background-color: rgba(135, 206, 235, 0.3) !important;
          }

          .frame1196-sidebar-nav a.frame1196-sidebar-link-active {
            color: #87ceeb !important;
          }

          .frame1196-sidebar-nav a.frame1196-sidebar-link-active:visited {
            color: #87ceeb !important;
          }

          /* Медиа-запросы */
          @media (max-width: 1525px) {
            .frame1196-container103 {
              gap: calc(var(--dl-layout-space-oneandhalfunits) + 10px);
              width: 340px;
              padding: 0 15px;
            }
            .frame1196-container104 {
              gap: var(--dl-layout-space-twounits);
              width: 183px;
              height: 62px;
              display: flex;
              align-items: center;
              border-radius: 8px;
              justify-content: center;
              background-color: rgba(46, 51, 55, 0.41);
            }
            .frame1196-image11 {
              width: 30px;
              object-fit: cover;
            }
            .frame1196-burger-menu {
              display: flex;
            }
            .frame1196-obshiy {
              display: none;
            }
          }

          @media (max-width: 767px) {
            .frame1196-container103 {
              gap: var(--dl-layout-space-twounits);
              width: auto;
              height: auto;
              flex-direction: row;
              justify-content: flex-start;
              padding: 0 15px;
              min-width: 280px;
            }
            .frame1196-text100 {
              font-size: 20px;
              flex-shrink: 0;
            }
            .frame1196-container104 {
              width: 111px;
            }
            .frame1196-image11 {
              width: 30px;
              object-fit: cover;
            }
          }

          @media (max-width: 479px) {
            .frame1196-container101 {
              height: auto;
              min-height: 115px;
              padding-left: 16px;
              padding-right: 16px;
              flex-wrap: nowrap;
              justify-content: space-between;
              position: relative;
            }
            .frame1196-container102 {
              flex: 1;
              min-width: 0;
            }
            .frame1196-container103 {
              gap: 8px;
              width: 100%;
              height: auto;
              position: relative;
              align-self: center;
              max-width: none;
              min-width: 0;
              flex-direction: row;
              justify-content: flex-start;
              padding: 0 5px;
              flex: 1;
            }
            .frame1196-text100 {
              width: 88px;
              font-size: 16px;
              max-width: 88px;
              min-width: 0;
              margin-right: 0px;
              flex-shrink: 1;
              white-space: normal;
              overflow: visible;
              text-overflow: clip;
              line-height: 1.2;
            }
            .frame1196-image10 {
              width: 127px !important;
              height: 127px !important;
              position: absolute;
              top: 50% !important;
              left: 50% !important;
              transform: translate(-50%, 7px) !important;
              z-index: 1000 !important;
              flex-shrink: 0;
              display: block !important;
              background-color: transparent;
            }
            .frame1196-container104 {
              gap: 24px;
              width: auto;
              height: auto;
              align-self: center;
              flex-shrink: 0;
              background-color: transparent;
            }
            .frame1196-image11 {
              width: 28px;
              height: 26px;
              object-fit: cover;
            }
            .frame1196-burger-menu {
              width: 30px;
              height: 30px;
              padding: 3px;
            }
          }

          /* Дополнительные стили для очень маленьких экранов */
          @media (max-width: 320px) {
            .frame1196-container101 {
              padding-left: 16px;
              padding-right: 16px;
              min-height: 115px;
              justify-content: space-between;
            }
            .frame1196-container103 {
              gap: 4px;
              padding: 0 2px;
            }
            .frame1196-text100 {
              font-size: 14px;
              width: 88px;
              max-width: 88px;
              white-space: normal;
              line-height: 1.2;
            }
            .frame1196-container104 {
              gap: 24px;
              background-color: transparent;
            }
            .frame1196-image11 {
              width: 28px;
              height: 26px;
            }
            .frame1196-burger-menu {
              width: 30px;
              height: 30px;
              padding: 3px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Header
