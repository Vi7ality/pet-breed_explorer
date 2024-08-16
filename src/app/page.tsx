import Header from './components/header';
import PetList from './components/pet-list';

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Home page</h1>
      <PetList />
    </main>
  );
}
