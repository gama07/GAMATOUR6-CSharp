import styles from './card.module.css';

export default async function Card() {
  const destinations = await fetch('http://localhost:5062/api/GamaTourControllers/Destinations').then(res => res.json());
  console.log(destinations);

  return (
    <div className={styles.container}>
      {destinations?.map((destination) => (
        <div key={destination.id} className={styles.card}>
          <div className={styles.card_title}>
            <h2>{destination.name}</h2>
            <p>Partida: {new Date(destination.departureDate).toLocaleDateString()}</p>
            <p>Retorno: {new Date(destination.returnDate).toLocaleDateString()}</p>
            <p>Passageiros: {destination.numberOfPassengers}</p>
            <p>Preço: R$ {destination.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
