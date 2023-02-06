import {useContext} from 'react'
import {CartContext} from "./ProviderCart"
import { Card,Button,Image,Rate } from 'antd';
const { Meta } = Card;
export default function Product({img,title,description, key, imgs}) {
    const { addToCart } = useContext(CartContext);
    return (
      <div key={key} className="col-md-3">
        {/* <h3>{title}</h3>
        <p>{description}</p>
        {console.log(title)}
        <img style={{width : "100px"}} src = {imgs[1]}/>
        <button onClick={() => addToCart({ title, img })}>Add to Cart</button>
        <hr/> */}
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
            <Button onClick={() => addToCart({ title, img })}  type="primary">add</Button>
            <Button style={{ marginLeft: 8 }}>Learn More</Button>
          </div>
        }
      >
      <Meta title={title} description={description} />
      <Meta description={<Rate allowHalf defaultValue={2} />} />
      </Card>
      <hr/>
      </div>
    );
  }
