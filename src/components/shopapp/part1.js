import ProductItem from './product';
import classes from './part1.module.css';

const product=[
  {id:'1',price:120,title:'First Product',description:'Best quality of many use, Best price and long lasting'},
  {id:'2',price:800,title:'second Product',description:'Best qualtity of many use, Best price and long lasting'},
  {id:'3',price:250,title:'Third Product',description:'Best qualtity of many use, Best price and long lasting'},
  {id:'4',price:200,title:'Forth Product',description:'Best qualtity of many use, Best price and long lasting'},
  {id:'5',price:250,title:'Fifth Product',description:'Best qualtity of many use, Best price and long lasting'},

]

const Products = (props) => {
  return (
    <div className={classes.products}>
      <h2 >Products Available in Shop</h2>
      <ul>
        {product.map((i)=>(
          <ProductItem key={i.id}
          id={i.id}
          title={i.title}
          price={i.price}
          description={i.description}/>
        ))}
        
      </ul>
    </div>
  );
};

export default Products;
