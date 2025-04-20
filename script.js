const traducoes = {
    pt: {
      flag_icon: "assets/br_flag.svg",

      local: "Quixadá - CE, Brasil",

      formation: "Formação",
      professional_experience: "Experiência Profissional",
      experience_posistion: "Desenvolvedor FullStack,",
      first_experience: "Desenvolvi e otimizei uma aplicação para gestão de provas.",
      second_experience: "Colaborei na refatoração da interface utilizando Vue.js e Vuetify.",
      third_experience: "No backend, com Spring Boot (Java), implementei novas funcionalidades, realizeia refatoração de módulos existentes e corrigi bugs.",

      competencies_title: "Competências",
      languages: "<b>Linguagens:</b> Java, TypeScript, Python, C++, Kotlin, SQL",
      technologies: "<b>Tecnologias:</b> Spring Boot, Vue, Docker, PostgreSQL",
      languages_spoken: "<b>Idiomas:</b> Português nativo, Inglês fluente.",

      activites: "Atividades Extracurriculares",
      first_position: "<b>Bolsista pesquisador,</b> Insight Lab",
      fposition_activities: "Participei de uma pesquisa envolvendo a coleta, tratamento e uso de dados não rotulados para analisar suas correlações por meio da clusterização.",
      second_position: "<b>Bolsista monitor de programação,</b> Universidade Federal do Ceará",
      sposition_activities: "Participei no auxilio de alunos em programação orientada a objetos e fundamentos com Java e C++."
    },

    en: {
      flag_icon: "assets/us_flag.svg",

      local: "Quixadá - CE, Brazil",

      formation: "Education",
      professional_experience: "Professional Experience",
      experience_posistion: "FullStack Developer,",
      first_experience: "I developed and optimized an exam management application.",
      second_experience: "I collaborated in refactoring the interface using Vue.js and Vuetify.",
      third_experience: "On the backend, using Spring Boot (Java), I implemented new features, refactored existing modules, and fixed bugs.",

      competencies_title: "Skills",
      languages: "<b>Languages:</b> Java, TypeScript, Python, C++, Kotlin, SQL",
      technologies: "<b>Technologies:</b> Spring Boot, Vue, Docker, PostgreSQL",
      languages_spoken: "<b>Languages:</b> Native Portuguese, Fluent English.",

      activites: "Extracurricular Activities",
      first_position: "<b>Research scholarship,</b> Insight Lab",
      fposition_activities: "I participated in a research project involving the collection, processing, and use of unlabeled data to analyze its correlations through clustering.",
      second_position: "<b>Programming monitor scholarship,</b> Federal University of Ceará",
      sposition_activities: "I assisted students in object-oriented programming and fundamentals with Java and C++."
    }
};

let idioma = 'en';

function trocarIdioma() {
idioma = idioma === 'pt' ? 'en' : 'pt';
const t = traducoes[idioma];

document.getElementById('local').textContent = t.local;

document.getElementById('formation').textContent = t.formation;
document.getElementById('professional_experience').textContent = t.professional_experience;
document.getElementById('experience_posistion').textContent = t.experience_posistion;
document.getElementById('first_experience').textContent = t.first_experience;
document.getElementById('second_experience').textContent = t.second_experience;
document.getElementById('third_experience').textContent = t.third_experience;

document.getElementById('competencies_title').textContent = t.competencies_title;
document.getElementById('languages').innerHTML = t.languages;
document.getElementById('technologies').innerHTML = t.technologies;
document.getElementById('languages_spoken').innerHTML = t.languages_spoken;

document.getElementById('activites').textContent = t.activites;
document.getElementById('first_position').innerHTML = t.first_position;
document.getElementById('fposition_activities').innerHTML = t.fposition_activities;
document.getElementById('second_position').innerHTML = t.second_position;
document.getElementById('sposition_activities').innerHTML = t.sposition_activities;

document.getElementById('flag_icon').src = t.flag_icon;
}

window.onload = trocarIdioma;