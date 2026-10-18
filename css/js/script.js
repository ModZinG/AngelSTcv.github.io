 const escuelas = [
        {
            nivel: "Secundaria",
            nombre: "Escuela Secundaria Técnica 20",
            descripcion: "Durante mi educación secundaria, cursé una formación técnica en soldadura, donde adquirí conocimientos básicos sobre el manejo de herramientas, el trabajo con metales y la importancia de la precisión y la seguridad. Esta experiencia me permitió desarrollar habilidades prácticas, responsabilidad y disciplina, que hoy considero importantes para continuar aprendiendo y enfrentar nuevos retos académicos y profesionales.",
            foto: "css/img/secundaria.png"
        },
        {
            nivel: "Preparatoria",
            nombre: "CECyTE Plantel Cholula",
            descripcion: "Durante mi educación media superior, estudié la especialidad de programación, donde adquirí conocimientos sobre lógica computacional, desarrollo de programas y fundamentos de programación. Esta etapa me permitió desarrollar el pensamiento lógico, la resolución de problemas y el interés por crear soluciones mediante la tecnología, motivándome a continuar mis estudios en el área de las Tecnologías de la Información y el desarrollo digital..",
            foto: "css/img/preparatoria.png"
        },
        {
            nivel: "Universidad",
            nombre: "Universidad Tecnológica de Huejotzingo",
            descripcion: "Actualmente estudio la carrera de Tecnologías de la Información e Innovación Digital en la Universidad Tecnológica de Huejotzingo (UTH). Durante mi formación, he adquirido conocimientos sobre programación, desarrollo web y herramientas tecnológicas. Mi objetivo es fortalecer mis habilidades, aprender nuevas tecnologías y desarrollar proyectos que combinen funcionalidad, creatividad e innovación, preparándome para crecer profesionalmente en el mundo de la tecnología.",
            foto: "css/img/universidad.png"
        }
    ];

    let actual = 0;

    function cambiar(direccion) {
        actual = (actual + direccion + escuelas.length) % escuelas.length;

        document.getElementById("nivel").textContent = escuelas[actual].nivel;
        document.getElementById("escuela").textContent = escuelas[actual].nombre;
        document.getElementById("descripcion").textContent = escuelas[actual].descripcion;
        document.getElementById("foto").src = escuelas[actual].foto;
        document.getElementById("foto").alt = escuelas[actual].nivel;
    }

