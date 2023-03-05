import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Product Feed */}
        <ProductFeed />
      </main>
    </div>
  );
}
