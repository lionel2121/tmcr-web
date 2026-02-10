/* 
   TMCR IMPORT AND COURIER
   Archivo de Lógica (Versión Final - Conectada)
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CONTROL DEL PRELOADER ---
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            if(preloader) {
                preloader.style.opacity = '0';
                setTimeout(() => { preloader.style.display = 'none'; }, 500);
            }
        }, 1500);
    });

    // --- 2. ROTACIÓN DE TIENDAS ---
    const storeElement = document.getElementById('dynamic-store');
    const stores = [
        '<span style="color: #FF9900;">AMAZON <span class="text-sm text-gray-500 align-top ml-2">USA</span></span>',
        '<span style="color: #FFFFFF;">SHEIN <span class="text-sm text-gray-500 align-top ml-2">ASIA</span></span>',
        '<span style="color: #BF0000;">RAKUTEN <span class="text-sm text-gray-500 align-top ml-2">JAPÓN</span></span>',
        '<span style="color: #E53238;">EBAY <span class="text-sm text-gray-500 align-top ml-2">USA</span></span>',
        '<span style="color: #FF6600;">BANGGOOD <span class="text-sm text-gray-500 align-top ml-2">ASIA</span></span>',
        '<span style="color: #0071CE;">WALMART <span class="text-sm text-gray-500 align-top ml-2">USA</span></span>',
        '<span style="color: #A3AAAE;">APPLE <span class="text-sm text-gray-500 align-top ml-2">USA</span></span>',
        '<span style="color: #CC0000;">TARGET <span class="text-sm text-gray-500 align-top ml-2">USA</span></span>',
        '<span style="color: #FFF200;">BEST BUY <span class="text-sm text-gray-500 align-top ml-2">USA</span></span>',
        '<span style="color: #FF6600;">ALIBABA <span class="text-sm text-gray-500 align-top ml-2">ASIA</span></span>',
        '<span style="color: #FF4747;">ALIEXPRESS <span class="text-sm text-gray-500 align-top ml-2">ASIA</span></span>'
    ];
    let storeIndex = 0;
    function rotateStores() {
        if (!storeElement) return;
        storeElement.innerHTML = `<div class="fade-text">${stores[storeIndex]}</div>`;
        storeIndex = (storeIndex + 1) % stores.length;
    }
    if(storeElement) {
        rotateStores();
        setInterval(rotateStores, 4000); 
    }

    // --- 3. TESTIMONIOS MASIVOS ---
    const reviewContainer = document.getElementById('testimonials-container');
    const testimonials = [
        { name: "Carlos Monge", text: "Excelente servicio, mis repuestos llegaron súper rápido." },
        { name: "María Rodríguez", text: "Me encanta que el casillero sea gratis. Muy recomendado." },
        { name: "Luis Vargas", text: "Traje mi celular y llegó perfecto. El seguro vale la pena." },
        { name: "Ana Castillo", text: "Atención al cliente de primera, siempre contestan WhatsApp." },
        { name: "Jorge Jiménez", text: "Los precios por libra son los mejores del mercado." },
        { name: "Sofía Méndez", text: "Compro mucho en Shein y siempre me consolidan todo." },
        { name: "Andrés Mora", text: "El servicio marítimo para cosas grandes es un éxito." },
        { name: "Patricia Solís", text: "Llevo 2 años usándolos y nunca me han fallado." },
        { name: "Diego Rojas", text: "Rápido y seguro, justo lo que buscaba." },
        { name: "Carmen Flores", text: "Me explicaron todo paso a paso, muy pacientes." },
        { name: "Ricardo Salazar", text: "Traje una computadora gamer y llegó intacta." },
        { name: "Laura Brenes", text: "Muy transparentes con los precios, sin sorpresas." },
        { name: "Manuel Castro", text: "Excelente logística, entregaron en mi casa en Heredia." },
        { name: "Elena Cruz", text: "Lo mejor es que no cobran membresía mensual." },
        { name: "Gabriel Araya", text: "Súper confiables para traer repuestos de carros." },
        { name: "Valentina Ruiz", text: "Mis compras de maquillaje llegaron perfectas." },
        { name: "Felipe Soto", text: "Muy buena comunicación durante todo el proceso." },
        { name: "Daniela Campos", text: "Recomendados al 100%, serios y responsables." },
        { name: "Héctor Villalobos", text: "La entrega en el GAM es un gran plus." },
        { name: "Mónica Quirós", text: "Facilidad total para comprar en USA desde aquí." },
        { name: "Roberto Aguilar", text: "Buenos tiempos de entrega, cumplen lo que prometen." },
        { name: "Isabel Navarro", text: "Me ahorré mucho dinero trayendo ropa con ellos." },
        { name: "Javier Cordero", text: "Servicio muy profesional, da gusto tratar con ellos." },
        { name: "Natalia Vega", text: "La página web es clara y el servicio real también." },
        { name: "Oscar Espinoza", text: "Todo llegó bien empacado y seguro." },
        { name: "Carolina Madrigal", text: "Ya no uso otro courier, TMCR es el mejor." },
        { name: "Esteban Zúñiga", text: "Eficiencia pura, mis paquetes vuelan." },
        { name: "Paula Herrera", text: "Me ayudaron a rastrear mi pedido en todo momento." },
        { name: "Alejandro Oviedo", text: "Precios justos y servicio de calidad." },
        { name: "Fernanda Chacón", text: "Compré en eBay y ellos se encargaron de todo." },
        { name: "Victor Umaña", text: "Gran opción para emprendedores que importan." },
        { name: "Gabriela Fonseca", text: "Trato amable y personalizado." },
        { name: "Mario Murillo", text: "Cero complicaciones en aduanas, ellos resuelven." },
        { name: "Lucía Valverde", text: "Mis zapatos llegaron antes de lo esperado." },
        { name: "Rodrigo Calvo", text: "Excelente manejo de carga delicada." },
        { name: "Silvia Granados", text: "Muy ordenados con la facturación." },
        { name: "Gustavo Alfaro", text: "El mejor aliado para mis compras online." },
        { name: "Mariana Lizano", text: "Sencillo, rápido y barato. ¿Qué más pedir?" },
        { name: "Pedro Blanco", text: "La ubicación es conveniente y el servicio top." },
        { name: "Rebeca Zamora", text: "Me siento segura trayendo mis cosas con TMCR." },
        { name: "Cristian Arce", text: "Buenos tiempos incluso en temporada alta." },
        { name: "Tatiana Bolaños", text: "Me encanta el servicio de consolidación." },
        { name: "Hugo Mata", text: "Profesionalismo desde el primer contacto." },
        { name: "Vanessa Cubero", text: "10/10 en atención y logística." },
        { name: "Eduardo Salas", text: "Traje herramientas pesadas por mar y todo bien." },
        { name: "Jimena Loría", text: "Super recomendados para compras de tecnología." },
        { name: "Pablo Centeno", text: "Claridad en las tarifas, eso se agradece." },
        { name: "Adriana Núñez", text: "Son mi primera opción siempre." },
        { name: "Mauricio Retana", text: "Calidad y buen servicio garantizado." },
        { name: "Lorena Picado", text: "Simplemente los mejores en Costa Rica." },
        { name: "Marco Vinicio", text: "Buen servicio, solo duraron un día más de lo esperado pero todo bien." },
        { name: "Teresa Solano", text: "Me ayudaron con la exoneración de mi carro, muy agradecida." },
        { name: "Juan Carlos Porras", text: "El marítimo duró lo que dijeron, 18 días." },
        { name: "Yessenia Calvo", text: "Un poco de fila para retirar pero vale la pena por el precio." },
        { name: "Fabian Rosales", text: "Todo excelente, sigan así." },
        { name: "Karla Venegas", text: "Primera vez que traigo y me explicaron súper bien." },
        { name: "David Guzmán", text: "La carga marítima es la más barata que he encontrado." },
        { name: "Sonia Barboza", text: "Mis cremas llegaron perfectas, gracias TMCR." },
        { name: "Ericka Montoya", text: "Responsables y honestos, eso cuesta verlo hoy en día." },
        { name: "Gilberto Ureña", text: "Recomendado para traer repuestos de moto." }
    ];

    let reviewIndex = 0;
    function rotateReviews() {
        if (!reviewContainer) return;
        const review = testimonials[reviewIndex];
        reviewContainer.innerHTML = `
            <div class="review-card">
                <div class="flex justify-center gap-1 mb-4 text-yellow-400 text-xs">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
                <p class="text-xl md:text-2xl text-gray-200 italic font-light mb-6 leading-relaxed">"${review.text}"</p>
                <p class="text-sky-400 font-bold uppercase tracking-[0.2em] text-sm md:text-base">- ${review.name}</p>
            </div>
        `;
        reviewIndex = (reviewIndex + 1) % testimonials.length;
    }
    if(reviewContainer) {
        setInterval(rotateReviews, 5000); 
    }

    // --- 4. HEADER SCROLL ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-[#030712]/95', 'shadow-2xl');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('bg-[#030712]/95', 'shadow-2xl');
            header.classList.add('bg-[#030712]/80');
        }
    });

    // --- 6. CARRUSEL INFORMATIVO (IMÁGENES RESPALDO) ---
    const infoCarousel = document.getElementById('info-carousel');
    if (infoCarousel) {
        const infoImages = [
            'imagenes/camioneta-servicios.jpeg',
            'imagenes/info-resumen.jpeg',
            'imagenes/dibujo-simple.jpeg'
        ];
        let infoIndex = 0;
        setInterval(() => {
            infoIndex = (infoIndex + 1) % infoImages.length;
            infoCarousel.style.opacity = '0';
            setTimeout(() => {
                infoCarousel.src = infoImages[infoIndex];
                infoCarousel.style.opacity = '1';
            }, 500); 
        }, 20000); 
    }

    // --- 7. REGISTRO Y CONEXIÓN GOOGLE SHEETS (CON ENLACE OFICIAL) ---
    const lockerForm = document.getElementById('locker-form');
    const lockerResult = document.getElementById('locker-result');
    const submitBtn = document.getElementById('submit-btn');
    
    // ENLACE DEL SCRIPT DE GOOGLE (El que tú generaste)
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxYPAN9yX4ewQ5rXvHLRMVVqNLOf9ZJHHflWp1lxqSLWpExN7e6J8bb-3KoU8uhXA5EFA/exec';

    if(lockerForm) {
        lockerForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita recarga de página
            
            // 1. Mostrar estado de carga (Feedback visual)
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Registrando...';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

            // 2. Preparar los datos
            const formData = new FormData(lockerForm);
            // Añadimos datos extra automáticos
            formData.append('Tipo_Casillero', 'Registro Web TMCR');

            // 3. Preparar nombres para visualización
            const name = document.getElementById('client-name').value;
            const lastname = document.getElementById('client-lastname').value;
            const fullName = name + ' ' + lastname;

            // 4. Enviar a Google (Fetch)
            fetch(SCRIPT_URL, { method: 'POST', body: formData })
                .then(response => {
                    // ÉXITO: Google recibió los datos
                    // Actualizamos las tarjetas visuales
                    const nameSpans = document.querySelectorAll('.dynamic-name');
                    nameSpans.forEach(span => {
                        span.textContent = fullName.toUpperCase();
                    });
                    
                    // Mostrar sección de resultados
                    lockerResult.classList.remove('hidden');
                    lockerResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Actualizar botón
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Listo!';
                    
                    // Alerta accesible
                    alert("¡Registro exitoso! Tus direcciones han sido generadas abajo.");
                })
                .catch(error => {
                    // ERROR (Problema de red, pero igual mostramos las direcciones al cliente)
                    console.error('Error enviando a Google:', error);
                    
                    const nameSpans = document.querySelectorAll('.dynamic-name');
                    nameSpans.forEach(span => {
                        span.textContent = fullName.toUpperCase();
                    });
                    
                    lockerResult.classList.remove('hidden');
                    lockerResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                    
                    alert("Tus direcciones están listas abajo. (Nota: Hubo un error guardando en la base de datos, por favor toma captura).");
                });
        });
    }

});

// --- 5. LOGICA DE LA CALCULADORA ---
const EXCHANGE_RATE = 510;

function parseInput(elementId) {
    const rawValue = document.getElementById(elementId).value;
    if (!rawValue) return NaN;
    const cleanValue = rawValue.replace(',', '.');
    return parseFloat(cleanValue);
}

function calculateShipping() {
    const weightInput = parseInput('calc-weight');
    const weightUnit = document.getElementById('calc-weight-unit').value; 
    const lInput = parseInput('calc-l');
    const wInput = parseInput('calc-w');
    const hInput = parseInput('calc-h');
    const dimUnit = document.getElementById('calc-dim-unit').value;

    if (isNaN(weightInput) || isNaN(lInput) || isNaN(wInput) || isNaN(hInput)) {
        alert("Por favor, rellena todos los espacios con números válidos.");
        return;
    }

    let weightInLbs = (weightUnit === 'kg') ? weightInput * 2.20462 : weightInput;
    let airPriceUSD = weightInLbs * 7; 
    let airPriceCRC = airPriceUSD * EXCHANGE_RATE;

    let weightInKg = (weightUnit === 'lb') ? weightInput / 2.20462 : weightInput;
    let l_ft, w_ft, h_ft;
    
    if (dimUnit === 'cm') {
        l_ft = lInput / 30.48; w_ft = wInput / 30.48; h_ft = hInput / 30.48;
    } else {
        l_ft = lInput / 12; w_ft = wInput / 12; h_ft = hInput / 12;
    }
    
    let cubicFeet = l_ft * w_ft * h_ft;
    let priceByWeight = weightInKg * 9;
    let priceByVolume = cubicFeet * 30;

    let seaPriceUSD = Math.max(priceByWeight, priceByVolume);
    let seaPriceCRC = seaPriceUSD * EXCHANGE_RATE;
    let seaReason = (priceByVolume > priceByWeight) ? "Cobrado por Volumen" : "Cobrado por Peso";

    document.getElementById('result-placeholder').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');

    document.getElementById('res-air-usd').innerText = "$" + airPriceUSD.toFixed(2);
    document.getElementById('res-air-crc').innerText = "₡" + Math.round(airPriceCRC).toLocaleString('es-CR');
    
    document.getElementById('res-sea-usd').innerText = "$" + seaPriceUSD.toFixed(2);
    document.getElementById('res-sea-crc').innerText = "₡" + Math.round(seaPriceCRC).toLocaleString('es-CR');
    document.getElementById('res-sea-detail').innerText = seaReason;
}