"use client";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface ProductListCardPropsType {
  img: string;
  name: string;
  price: string;
}

export function ProductListCard({
  img,
  name,
  price,
}: ProductListCardPropsType) {
  return (
    <Card shadow={false} className="border border-gray-300">
      <CardBody className="pb-0">
        <img src={img} alt={img} className="min-w-[280px] w-full" />
        <div className="flex justify-between">
          <div>
            <Typography className="mb-2" color="blue-gray" variant="h5">
              {name}
            </Typography>
          </div>
          <Typography
            variant="h5"
            className="text-gray-600"
          >
            {price}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

const CONTENTS = [
  {
    img: "https://www.srperro.com/media/post/8ac32db5-0872-49c7-99ce-e941a8f9cbce.600x429.jpg",
    name: "Pelotas"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWLyA3XVYm0bElorB9Lsn5PXMTG84-fLJLg&s",
    name: "Alimentos"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsft5NWRscpUo2gUGCMIAmzgp1fjSmA3J60w&s",
    name: "Collares"
  },
];

export function Producto() {
  return (
    <section className="bg-peluditos-gradient-reverse py-10 px-8">
      <div className="mx-auto text-center mb-16">
            <h1 className="text-4xl text-[#1A535C] font-extrabold mb-6 leading-tight">
              Nuestros Productos
            </h1>
      </div>
      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
          {CONTENTS.map(({ img, name, price }, index) => (
            <ProductListCard
              key={index}
              img={img}
              name={name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Producto;