import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import cars from "../cars"; // array
import Car from "./Car"; // component

function Details() {
  const params = useParams();
  // console.log(params); // returns an object such as {name: "Hyundai"}
  // console.log(params.name); // returns "Hyundai" (depends on params)

  const [getCar, setGetCar] = useState({});

  // Sayfa yüklendiğinde yapılacak işlemleri useEffect ile belirtiyoruz.
  useEffect(() => {

    // Eğer gelen bir araba ismi varsa işlemi yap.
    if (params.name) {
      setGetCar(cars.find((car) => car.name == params.name)); // getCar = car that I clicked on it.
    }

  }, [params.name]); // "params.name" her güncellendiğinde useEffect içini yeniden çalıştır.

  // Hata: React Hook useEffect has a missing dependency: 'params.name'.
  // Hata, useEffect'in ikinci parametresine [params.name] yazarak çözüldü.

  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "'Black Ops One', cursive", fontSize: "40px" }}>DETAILS</h1>

      <Car id={getCar?.id} name={getCar?.name} year={getCar?.year} image={getCar?.image} />

      {/* Her bir özellik önce ? ile kontrol edilir. 
          Eğer getCar mevcut değilse veya herhangi bir özelliği mevcut değilse, 
          bu özelliklere erişim hatası vermez ve undefined döner. 
          Bu sayede uygulama çalışmaya devam edebilir ve hata oluşma riski azaltılır. */}
    </div>
  );
}

export default Details;