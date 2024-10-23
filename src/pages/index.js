
import { Inter } from "next/font/google";
//import styles from "@/styles/Home.module.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <ProductCard />
    </>


  );
}
