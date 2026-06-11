function formatoPeso(valor)
{
    return "$" + Math.round(valor).toLocaleString("es-CL");
}

function calcular()
{
    const precioRollo = Number(document.getElementById("precioRollo").value);
    const pesoRollo = Number(document.getElementById("pesoRollo").value);

    const pesoPieza = Number(document.getElementById("pesoPieza").value);

    const horas = Number(document.getElementById("horas").value);
    const minutos = Number(document.getElementById("minutos").value);

    const consumo = Number(document.getElementById("consumo").value);

    const tarifa = Number(document.getElementById("tarifa").value);

    const desperdicio = Number(document.getElementById("desperdicio").value);

    const precioVenta = Number(document.getElementById("precioVenta").value);

    // Material
    const pesoReal =
        pesoPieza * (1 + desperdicio / 100);

    const costoPorGramo =
        precioRollo / pesoRollo;

    const costoMaterial =
        pesoReal * costoPorGramo;

    // Electricidad
    const tiempoHoras =
        horas + minutos / 60;

    const energiaConsumida =
        (consumo / 1000) * tiempoHoras;

    const costoElectricidad =
        energiaConsumida * tarifa;

    // Total
    const costoTotal =
        costoMaterial + costoElectricidad;

    // Ganancia
    const ganancia =
        precioVenta - costoTotal;

    const margen =
        (ganancia / precioVenta) * 100;

    // Mostrar
    document.getElementById("costoMaterial").textContent =
        formatoPeso(costoMaterial);

    document.getElementById("costoElectricidad").textContent =
        formatoPeso(costoElectricidad);

    document.getElementById("costoTotal").textContent =
        formatoPeso(costoTotal);

    document.getElementById("ganancia").textContent =
        formatoPeso(ganancia);

    document.getElementById("margen").textContent =
        margen.toFixed(1) + "%";
}

// cálculo automático al cargar
calcular();