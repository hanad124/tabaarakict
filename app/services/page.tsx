import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import ServicesCards from "./(components)/ServicesCards";
import HostingPackages from "./(components)/HostingPackages";
import Process from "./(components)/Process";

const Services = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <div className="bg-background min-h-screen">
      <BreadCrumb items={breadcrumbItems} title="Services" />
      <ServicesCards />
      <HostingPackages />
      <Process />
    </div>
  );
};

export default Services;
