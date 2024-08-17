import Footer from '../components/footer';
import Header from '../components/header';

export default function About() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 text-gray-800">
        <section className="w-full max-w-4xl">
          <h1 className="mb-8 text-center text-4xl font-bold">About Us</h1>
          <p className="mb-4 text-lg leading-relaxed">
            Welcome to our Cat & Dog Breed Explorer website! We are passionate
            about helping you discover and learn about different cat and dog
            breeds from around the world. Whether you’re a pet lover, a breeder,
            or just curious, we aim to provide you with all the information you
            need about your favorite breeds.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Our platform offers a user-friendly interface to explore various
            breeds, complete with detailed descriptions, images, and interesting
            facts. We strive to be your go-to resource for all things related to
            cats and dogs.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Thank you for visiting our site. We hope you enjoy exploring the
            wonderful world of cat and dog breeds with us!
          </p>
          <p className="text-lg leading-relaxed">
            Feel free to contact us for any inquiries or suggestions. We value
            your feedback and are always looking to improve our platform.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
