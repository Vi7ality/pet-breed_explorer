import Footer from './components/footer';
import Header from './components/header';
import PetList from './components/pet-list';
import CatSearchAutocomplete from './components/search-breeds';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CatSearchAutocomplete />
        <PetList />
      </main>
      <Footer />
    </>
  );
}
