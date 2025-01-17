// pages/index.js
import Head from "next/head";
import Header from "@/components/shared/NavBar/NavBar";
import HeroSection from "@/components/home/hero";
import RecipesSection from "@/components/home/recipesSection";
import PromoSection from "@/components/home/promoSection";
import HowItWorks from "@/components/home/howitworks";
import ChefSection from "@/components/home/chefsection";
import GalleryMenu from "@/components/home/gallerymenu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Delicious Italian Food</title>
        <meta
          name="description"
          content="Order delicious Italian food online."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
      <RecipesSection />
      <PromoSection />
      <HowItWorks />
      <ChefSection />
      <GalleryMenu />
      {/* <CompanyProfile />
      <ContactSection />
      <Footer /> */}
    </div>
  );
}
