import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/image/logo_TSA.png';
import styles from './index.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div
        id="header"
        className={['layout', styles.header, 'sticky', 'top-0', 'z-50'].join(
          ' '
        )}
      >
        <div className="wrap lg:justify-between">
          <div className="cursor-pointer">
            <Link href="/">
              <Image src={Logo} width={220} height={90} alt="logo"></Image>
            </Link>
          </div>
          <Nav />
        </div>
      </div>
      <main>{children}</main>
      {/* Footer */}
      <div id="footer" className="layout">
        <div className="container-fluid">
          <div className={[styles.footerCol, 'flex'].join(' ')}>
            <div
              className={[
                styles.view,
                styles.textBlueLight,
                'relative',
                'items-center',
                'py-4',
                'px-0',
                'flex',
                'justify-center',
                'w-full',
              ].join(' ')}
            >
              <span className="h-ftContent pl-10 relative pt-1 font-semibold">
                瀏覽人次
              </span>
              <b className="pt-1 h-ftContent">╱&ensp;</b>
              <small
                className={[
                  styles.small,
                  'pt-1',
                  'h-ftContent',
                  'font-normal',
                ].join(' ')}
              >
                706,266 人
              </small>
            </div>
            <div
              className={[
                styles.tipCol,
                'w-full',
                'text-center',
                'flex',
                'justify-center',
                'py-4',
                'px-2',
                'flex-initial',
                'text-white',
                'flex',
                'justify-center',
                'lg:text-left',
              ].join(' ')}
            >
              <small className={[styles.small, 'mb-0'].join(' ')}>
                權證為高槓桿投資商品，有機會在短期間獲得極高報酬或蒙受權利金的損失，購買前請先了解相關風險及詳閱公開說明書。
                <span className="md:block">
                  主辦單位：中華民國證券商業同業公會 | 承辦單位：格威傳媒
                </span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Nav: React.FC = () => {
  const NAV_OPTIONS = [
    {
      title: '最新消息',
      link: '/daily-news',
      fontColor: 'black',
    },
    {
      title: '權證懶人包',
      link: '/lazy-read',
      fontColor: 'black',
    },
    {
      title: '市場統計',
      link: '/market-statistic',
      fontColor: 'black',
    },
    {
      title: '模擬交易',
      link: '/imitate-trade',
      fontColor: '#1b487b',
    },
    {
      title: '買權證抽百萬',
      link: '/warrant-lottery',
      fontColor: 'black',
    },
    {
      title: '資源專區',
      link: '/resource-zone',
      fontColor: 'black',
    },
  ];
  return (
    <div className="flex">
      {NAV_OPTIONS.map((option) => (
        <div
          className={styles.navItem}
          key={option.title}
          style={{ color: option.fontColor }}
        >
          <Link href={option.link}>{option.title}</Link>
        </div>
      ))}
      <div className={styles.navItem}>
        <div
          className={[
            'btn',
            styles.memberLogin,
            'text-white',
            'cursor-pointer',
            'mx-4',
          ].join(' ')}
        >
          會員登入
        </div>
      </div>
    </div>
  );
};

export default Layout;
