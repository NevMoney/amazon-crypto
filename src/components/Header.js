import { PageHeader, Button, Input, Space, Badge } from 'antd'
import { useMoralis } from 'react-moralis'
import { Link } from 'react-router-dom'
import './Header.css'
import Amazon from '../images/logo.png'
import USA from '../images/usa.png'
import BookStore from '../images/bookstore.png'
import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons'

const { Search } = Input
const categories = ['Books', 'Workbooks', 'Videos']

const Header = () => {
  const { authenticate, account } = useMoralis()

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
            <Link to="/">
              <img src={Amazon} className="logo" alt=""></img>
              <img src={BookStore} className="logo" alt=""></img>
            </Link>
            <Search placeholder="Search" enterButton className="searchBar" />
            <Button
              className="login"
              type="primary"
              onClick={() =>
                authenticate({
                  signingMessage: `Welcome to Amazin' Crypto. Login to continue.`,
                })
              }
            >
              {account ? (
                <span>
                  {account.slice(0, 5)}...{account.slice(38, 42)}
                </span>
              ) : (
                <span>Login</span>
              )}
            </Button>
            <Space size={'large'}>
              <Badge count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                  Cart
                </span>
              </Badge>
              <Space className="header-buttons" size={'small'}>
                <img src={USA} alt="region" className="flag"></img>▾
              </Space>
            </Space>
          </>,
        ]}
      ></PageHeader>
      <div className="site-page-subheader-ghost-wrapper">
        <Space size={'middle'}>
          <Space size={'small'} style={{ fontWeight: 'bold' }}>
            <MenuOutlined />
            Categories
          </Space>
          {categories.map((e, i) => {
            return (
              <Link to="/categories" state={e} className="categories" key={i}>
                {e}
              </Link>
            )
          })}
        </Space>
      </div>
    </div>
  )
}

export default Header
