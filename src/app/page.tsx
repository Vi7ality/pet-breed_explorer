import Footer from './components/footer';
import Header from './components/header';
import PetList from './components/pet-list';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PetList />
      </main>
      <Footer />
    </>
  );
}
