import Head from 'next/head';
import styles from '../../styles/SingleProduct.module.css';
import allProducts from '../data/products.json';



export default function Product({ product }) {

	const { id, name, image, price, description, category, sale } = product;

  
  
	return (
	  <div className={styles.single_container}>
		<div className = {styles.left_section}>
		  <div className={styles.left_img}>
			<img src={image.url} alt={name} />
		  </div>
		  </div>
		  
		  	
		  <div className = {styles.right_section}>
			<div className = {styles.title}>
				<h1>
				{ name }
				</h1>
			</div>

			<p className={styles.description}>
			  { description }
			</p>
  
			<p className={styles.price}>
			  ${ price.toFixed(2) }
			</p>
				<button
				className="btn snipcart-add-item"
				data-item-id={product.id}
				data-item-price={product.price}
				data-item-url={`products/${product.slug}`}
				data-item-image={product.image.url}
				data-item-name={product.name}
				>
				Add to cart 🛒
				</button>
		  </div>

	  </div>
	)
  }
  
  export async function getStaticProps({ params = {} }) {
	const product = allProducts.find(({ id }) => `${id}` === `${params.productId}`);
	return {
	  props: {
		product
	  },
	};
  }
  
  export async function getStaticPaths() {
	const paths = allProducts.map((product) => {
	  const { id } = product;
	  return {
		params: {
		  productId: id,
		},
	  };
	});
  
	return {
	  paths,
	  fallback: false
	};
  }










/*
const singleproduct = () => {
	return (
		<>
			<Head>
				<title>Lorem Ipsum </title>
			</Head>
			<div className={styles.single_container}>
				<div className={styles.left_section}>
					<img src="../public../images/BowlProductImage.png" className={styles.left_img} alt="" />
				</div>
				<div className={styles.right_section}>
					<h3 className={styles.title}>Product </h3>
					<p className={styles.price}>$20</p>
					<div className={styles.para}>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Aenean eu porttitor odio, quis aliquam ligula.
						Mauris a commodo nisl. Fusce consequat ultricies lacus a commodo. 
						Nunc fermentum lobortis semper. Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos. 
						Quisque aliquet turpis nisi, ac gravida lorem volutpat commodo. 
						In massa metus, dictum ut nibh auctor, fringilla sodales lacus.
						</p>
					</div>
					<button className="btn">Add to cart 🛒</button>
				</div>
			</div>
		</>
	);
};

export default singleproduct;
*/