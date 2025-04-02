import Header from "../components/Header";
import Table from "../components/Table";
import { useState } from "react";

export default function AdminUser() {


  return (
    <>
      <section className="container__div flex flex-col items-center justify-center space-y-4">
        <Header header="Home - Admin Sector" />
        
        <Table />
      </section>
    </>
  );
}
