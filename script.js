const examples = [
    { name: "Botón con estilo incorrecto", description: "Demostración de cómo mejorar el estilo de un botón usando CSS" },
    { name: "Caja de texto sin etiqueta asociada", description: "Corrección de un campo de entrada sin etiqueta para mejorar la accesibilidad" },
    { name: "Uso incorrecto de IDs duplicados", description: "Ejemplo de cómo evitar IDs duplicados en HTML" },
    { name: "Mal uso de elementos semánticos", description: "Corrección del uso incorrecto de elementos HTML para mejorar la semántica" },
    { name: "CSS no responsive", description: "Transformación de CSS estático a responsive" },
    { name: "JavaScript con mala gestión de eventos", description: "Mejora en la gestión de eventos en JavaScript" },
    { name: "Mal uso de unidades en CSS", description: "Corrección del uso incorrecto de unidades en CSS" },
    { name: "Falta de manejo de errores en JavaScript", description: "Implementación de manejo de errores en JavaScript" },
    { name: "Uso incorrecto de atributos ARIA", description: "Corrección del uso inadecuado de atributos ARIA para mejorar la accesibilidad" },
    { name: "Mal uso de selectores CSS", description: "Optimización de selectores CSS para mejorar el rendimiento y la mantenibilidad" }
];

const exampleList = document.getElementById('exampleList');

examples.forEach((example, index) => {
    const li = document.createElement('li');
    li.className = 'example-item';
    li.innerHTML = `
        <a href="ejemplo${index + 1}/ejemplo${index + 1}.html" class="example-link">${index + 1} ${example.name}</a>
        <p class="example-description">${example.description}</p>
    `;
    exampleList.appendChild(li);
});