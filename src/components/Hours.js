// Placeholder to host a component
const Hours = () => {
  // Obtén el día de la semana actual (0 = Domingo, 6 = Sábado)
  const today = new Date();
  const dayOfWeek = today.getDay();

  // Configura las horas de apertura
  const weekHours = "10 a.m. - 4 p.m."; // Lunes a Viernes
  const weekendHours = "9 a.m. - 8 p.m."; // Sábado y Domingo

  // Determina las horas que se deben mostrar
  const openHours = (dayOfWeek >= 1 && dayOfWeek <= 5) ? weekHours : weekendHours;

  return (
    <div>
      <h2>Horas de apertura del refugio</h2>
      <p>Hoy el refugio está abierto de {openHours}</p>
    </div>
  );
};

export default Hours;
