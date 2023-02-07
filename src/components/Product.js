import {useContext} from 'react'
import {CartContext} from "./ProviderCart"
import { Card,Button,Image,Rate ,message} from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
const { Meta } = Card;
export default function Product({img,title,description, key, imgs,price}) {
    const { addToCart } = useContext(CartContext);
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'the product added to cart !',
        duration: 10,
      });
      // alert("hu")
    };
    const custom = ()=>{
      
      success();
    }    
    return (
      <div key={key} className="col-md-4 col-lg-3">
        {contextHolder}
            <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
          width={200}
          src={imgs[1]}
        />
        }
        extra={<a href="#">More</a>}
        extra={
          <div>
            <Button onClick={() => addToCart({ title, img ,price})}  type="primary">add</Button>
            <Button onClick={success}style={{ marginLeft: 8 }}>Learn More</Button>
          </div>
        }
      >
      <Meta title={title} description={description} />
      <Meta description={<Rate allowHalf defaultValue={(price / 10)} />} />
      <Meta className='mt-3' description={price + "$"} />
      </Card>
      <hr/>
      </div>
    );
  }
