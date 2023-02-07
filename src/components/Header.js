import { MailOutlined, SettingOutlined,AppstoreOutlined ,HomeFilled, ShoppingCartOutlined,Typography} from '@ant-design/icons';
import { Menu } from 'antd';
import { useContext } from 'react';
import { CartContext } from './ProviderCart';
const Header = ({show}) => {
  return (
    <div>
    <Menu
    mode="horizontal"
    items={[
      {
        label: <HomeFilled />,
        key: "",
      },
      {
        label: "Men",
        key: "men",
        children: [
          {
            label: "Men's Shirts",
            key: "mens-shirts",
          },
          {
            label: "Men's Shoes",
            key: "mens-shoes",
          },
          {
            label: "Men's Watches",
            key: "mens-watches",
          },
        ],
      },
      {
        label: "Women",
        key: "women",
        children: [
          {
            label: "Women's Dresses",
            key: "womens-dresses",
          },
          {
            label: "Women's Shoes",
            key: "womens-shoes",
          },
          {
            label: "Women's Watches",
            key: "womens-watches",
          },
          {
            label: "Women's Bags",
            key: "womens-bags",
          },
          {
            label: "Women's Jewellery",
            key: "womens-jewellery",
          },
        ],
      },
      {
        label: "Fragrances",
        key: "fragrances",
      },
      {
        label: <ShoppingCartOutlined onClick={show}/>,
        key: "fragrances",
      },
      
    ]}
    
  />
  </div>
  );
};
export default Header;
