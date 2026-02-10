/* 
   TMCR IMPORT AND COURIER
   Archivo de Lógica (Versión Final - Inteligencia de Duplicados y Calculadora Flexible)
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
        { name: "Yessenia Calvo", text: "Un poco de fila para retirar pero vale la pena por el precio." }
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

    // --- 6. CARRUSEL INFORMATIVO ---
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

    // --- 7. REGISTRO Y CONEXIÓN GOOGLE SHEETS (INTELIGENTE) ---
    const lockerForm = document.getElementById('locker-form');
    const lockerResult = document.getElementById('locker-result');
    const submitBtn = document.getElementById('submit-btn');
    
    // ENLACE DEL SCRIPT DE GOOGLE
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxYPAN9yX4ewQ5rXvHLRMVVqNLOf9ZJHHflWp1lxqSLWpExN7e6J8bb-3KoU8uhXA5EFA/exec';

    if(lockerForm) {
        lockerForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita recarga
            
            // 1. Mostrar estado de carga
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verificando...';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

            // 2. Preparar los datos
            const formData = new FormData(lockerForm);
            formData.append('Tipo_Casillero', 'Registro Web TMCR');

            const name = document.getElementById('client-name').value;
            const lastname = document.getElementById('client-lastname').value;
            const fullName = name + ' ' + lastname;

            // Función interna para manejar la respuesta
            function handleResponse(data) {
                if (data.result === 'success') {
                    // ÉXITO: Nuevo cliente
                    const nameSpans = document.querySelectorAll('.dynamic-name');
                    nameSpans.forEach(span => {
                        span.textContent = fullName.toUpperCase();
                    });
                    
                    lockerResult.classList.remove('hidden');
                    lockerResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Listo!';
                    alert("¡Registro exitoso! Tus direcciones han sido generadas y enviadas a tu correo.");
                
                } else if (data.result === 'duplicate') {
                    // DUPLICADO: Ya existe
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');

                    // Preguntar al usuario
                    let reenviar = confirm("Este correo ya está afiliado a TMCR. ¿Deseas recibir nuevamente tus datos al correo?");
                    
                    if (reenviar) {
                        // Si dice SÍ, enviamos de nuevo con la bandera "Force"
                        submitBtn.innerHTML = '<i class="fas fa-envelope"></i> Reenviando...';
                        submitBtn.disabled = true;
                        
                        formData.append('Force', 'true'); // Bandera secreta para el robot
                        
                        fetch(SCRIPT_URL, { method: 'POST', body: formData })
                            .then(r => r.json())
                            .then(d => {
                                alert("¡Correo reenviado con éxito! Revisa tu bandeja.");
                                submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado';
                            });
                    } else {
                        // Si dice NO
                        alert("Entendido. Si deseas actualizar tus datos (dirección o teléfono), por favor contáctanos al WhatsApp de servicio al cliente.");
                    }
                }
            }

            // 3. Enviar a Google (Fetch)
            fetch(SCRIPT_URL, { method: 'POST', body: formData })
                .then(response => response.json()) // Importante: Convertir a JSON para leer el resultado
                .then(data => handleResponse(data))
                .catch(error => {
                    console.error('Error:', error);
                    // Si falla la red, mostramos la tarjeta visual de emergencia
                    const nameSpans = document.querySelectorAll('.dynamic-name');
                    nameSpans.forEach(span => { span.textContent = fullName.toUpperCase(); });
                    lockerResult.classList.remove('hidden');
                    lockerResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    alert("Tus direcciones están listas abajo. (Hubo un error de conexión con la base de datos, pero puedes usar estos datos).");
                });
        });
    }

});

// --- 5. LOGICA DE LA CALCULADORA (FLEXIBLE) ---
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

    // A. Solo peso es obligatorio
    if (isNaN(weightInput)) {
        alert("Por favor, ingresa al menos el PESO del paquete.");
        return;
    }

    // B. Cálculo Aéreo
    let weightInLbs = (weightUnit === 'kg') ? weightInput * 2.20462 : weightInput;
    let airPriceUSD = weightInLbs * 7; 
    let airPriceCRC = airPriceUSD * EXCHANGE_RATE;

    // C. Cálculo Marítimo (Verificar si hay medidas)
    let seaPriceUSD = 0;
    let seaPriceCRC = 0;
    let seaReason = "";
    let isSeaCalculated = false;

    if (!isNaN(lInput) && !isNaN(wInput) && !isNaN(hInput)) {
        isSeaCalculated = true;
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

        seaPriceUSD = Math.max(priceByWeight, priceByVolume);
        seaPriceCRC = seaPriceUSD * EXCHANGE_RATE;
        seaReason = (priceByVolume > priceByWeight) ? "Cobrado por Volumen" : "Cobrado por Peso";
    } else {
        seaReason = "Faltan medidas (Largo, Ancho, Alto)";
    }

    // D. Mostrar Resultados
    document.getElementById('result-placeholder').classList.add('hidden');
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('hidden');

    document.getElementById('res-air-usd').innerText = "$" + airPriceUSD.toFixed(2);
    document.getElementById('res-air-crc').innerText = "₡" + Math.round(airPriceCRC).toLocaleString('es-CR');
    
    if (isSeaCalculated) {
        document.getElementById('res-sea-usd').innerText = "$" + seaPriceUSD.toFixed(2);
        document.getElementById('res-sea-crc').innerText = "₡" + Math.round(seaPriceCRC).toLocaleString('es-CR');
        document.getElementById('res-sea-detail').innerText = seaReason;
        document.getElementById('res-sea-detail').classList.remove('text-red-400');
    } else {
        document.getElementById('res-sea-usd').innerText = "---";
        document.getElementById('res-sea-crc').innerText = "---";
        document.getElementById('res-sea-detail').innerText = seaReason;
        document.getElementById('res-sea-detail').classList.add('text-red-400');
    }

    // E. Advertencia WhatsApp
    let warningDiv = document.getElementById('calc-warning-msg');
    if (!warningDiv) {
        warningDiv = document.createElement('div');
        warningDiv.id = 'calc-warning-msg';
        warningDiv.className = 'mt-6 pt-4 border-t border-white/10 text-center animate-[fadeIn_0.5s_ease-out]';
        
        warningDiv.innerHTML = `
            <p class="text-red-400 text-xs font-bold uppercase mb-3 flex items-center justify-center gap-2">
                <i class="fas fa-exclamation-triangle"></i> Montos aproximados sujetos a cambios. <br>Verificación obligatoria.
            </p>
            <a href="https://wa.me/50660103131?text=Hola,%20quisiera%20verificar%20el%20costo%20de%20mi%20envío%20📦" 
               target="_blank"
               class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-lg">
                <i class="fab fa-whatsapp text-lg"></i> Verificar en WhatsApp
            </a>
        `;
        resultContainer.appendChild(warningDiv);
    }
}