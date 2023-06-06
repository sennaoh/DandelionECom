import allProducts from './data/products.json';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HomepageImg from '../public/images/PotBackgroundImage.png';
import { Segment } from 'semantic-ui-react';

export default function About() {
	return <Link href="/about">

		<div className = "HomepageHeader">	
				<Image 
				className = "HomepageImage" 
				fill={true}
				src={HomepageImg}
				objectFit='cover'
				alt = "Homepage Banner with Clay Pots"/>
				<h1>About</h1>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Curabitur auctor ornare augue, vitae rhoncus enim porta nec. 
				Ut dui nulla, porttitor sed ultrices sed, tincidunt vel odio.
				Suspendisse faucibus non lacus non malesuada. 
				Aliquam erat volutpat. Pellentesque habitant morbi tristique
				senectus et netus et malesuada fames ac turpis egestas. Sed 
				accumsan suscipit risus vitae euismod. Phasellus consequat 
				mauris vitae sem iaculis fermentum vel vel neque. Pellentesque 
				tincidunt mi eu justo sodales, nec varius sapien mollis.
				Vestibulum at metus consectetur, iaculis libero quis, maximus 
				ante. Maecenas pellentesque tristique diam. Nunc tristique
				nulla tempus tellus venenatis ornare. <br></br><br></br>

				Donec ullamcorper molestie augue, eu varius lacus 
				finibus quis. Morbi magna sem, auctor vel odio nec,
				porttitor laoreet dolor. Etiam mollis facilisis sapien,
				eget pulvinar turpis pretium eget. Fusce feugiat sollicitudin velit,
				sed maximus arcu ultricies ac. Pellentesque in mauris quis 
				mauris finibus pharetra sit amet ac dui. Fusce ex urna, 
				ultrices eget risus eget, condimentum luctus leo. Proin
				luctus elit sit amet justo finibus tempus. Morbi venenatis, 
				ipsum sed pretium facilisis, eros odio suscipit felis, 
				ornare ultrices nisi odio non ipsum. Mauris vehicula
				facilisis arcu, sed scelerisque nulla venenatis sed. 
				Fusce eget pretium lacus. Nulla in condimentum mi. Duis
				ac ipsum leo. Pellentesque id tellus odio. Sed tempor
				accumsan lorem, nec ullamcorper ex sagittis ut. Vestibulum 
				suscipit sodales leo ac feugiat.
			</div>
	</Link>;
  }