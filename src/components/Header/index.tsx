import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/image/logo_TSA.png';

const Header: React.FC = ({ children }) => {
  return (
    <div>
      <div className="layout header sticky top-0 z-50">
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
    </div>
  );
};

const Nav: React.FC = () => {
  const OPTIONS = [
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
      {OPTIONS.map((option) => (
        <div
          className="nav-item"
          key={option.title}
          style={{ color: option.fontColor }}
        >
          <Link href={option.link}>{option.title}</Link>
        </div>
      ))}
      <div className="nav-item ">
        <div className="btn member-login text-white cursor-pointer mx-4">
          會員登入
        </div>
      </div>
    </div>
  );
};

export default Header;
