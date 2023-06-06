import allProducts from './data/products.json';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HomepageImg from '../public/images/PotBackgroundImage.png';
import { Segment } from 'semantic-ui-react';
import {CartSVG} from '../public/images/CartSVG.js';


export default function Home() {
	return (
		<>
			<Head>
				<title>Dandelion | Home</title>
			</Head>
			<div className = "HomepageHeader">	
				<Image 
				className = "HomepageImage" 
				fill={true}
				src={HomepageImg}
				objectFit='cover'
				alt = "Homepage Banner with Clay Pots"/>
				
				
			</div>
			<div className="homepage-container">
				<Segment className = "Product-Title-Container">
				<h1>
				All Products
				</h1>
				</Segment>
			
				{/*products mapping*/}
				<div className={styles.products_container}>
					{allProducts.map((product) => {
						return (
							<div className={styles.product_card} key={product.id}>
								<Link href={{
									pathname: `products/${product.id}`,
									query: {
											id: product.id,
									}
									}}>
									<a>
										<div className={styles.product_img}>
											<img src={product.image.url} alt={product.name} />
										</div>
									</a>
								</Link>
								<div className={styles.product_content}>
									<h3>{product.name}</h3>
									<p>${product.price}</p>
									<button
								className="btn snipcart-add-item"
								data-item-id={product.id}
								data-item-price={product.price}
								data-item-url={`products/${product.slug}`}
								data-item-image={product.image.url}
								data-item-name={product.name}
								>
								Add to cart <CartSVG/>
								</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
