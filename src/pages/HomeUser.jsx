import Header from "../components/Header";
import Table from "../components/Table";

export default function HomeUser() {
  return (
    <>
      <section className="container__div flex flex-col items-center justify-center space-y-4">
        <Header header="Home - User Sector" />
      
        <Table />
      </section>
    </>
  );
}
