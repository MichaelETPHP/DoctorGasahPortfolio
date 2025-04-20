import { d as attr_class, c as pop, p as push, i as ensure_array_like, j as attr_style, k as attr, e as escape_html, l as stringify, h as head } from "../../chunks/index2.js";
function Hero($$payload, $$props) {
  push();
  let ready = false;
  $$payload.out += `<section id="home" class="relative min-h-screen flex items-center bg-gradient-to-r from-blue-900 to-blue-700 text-white svelte-18yxw7p"><div class="absolute inset-0 bg-blue-900 opacity-80 svelte-18yxw7p"></div> <div class="container-custom relative z-10 flex flex-col-reverse md:flex-row items-center svelte-18yxw7p"><div${attr_class("md:w-1/2 pt-8 md:pt-0 md:pr-10 animate-fade-in-up svelte-18yxw7p", void 0, { "opacity-0": true, "opacity-100": ready })}><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight svelte-18yxw7p">Dr. Gasah A</h1> <h2 class="text-2xl md:text-3xl font-medium text-blue-200 mb-6 svelte-18yxw7p">Pediatric Hematology Oncologist</h2> <p class="text-lg md:text-xl mb-8 text-blue-100 max-w-xl svelte-18yxw7p">Dedicated to advancing care and research in pediatric blood cancers and neuroblastoma in Ethiopia.</p> <div class="flex flex-wrap gap-4 svelte-18yxw7p"><a href="#contact" class="btn btn-primary bg-white text-blue-900 hover:bg-blue-50 svelte-18yxw7p">Book Appointment</a> <a href="#about" class="btn btn-outline border-white text-white hover:bg-blue-800 svelte-18yxw7p">Learn More</a></div></div> <div class="md:w-1/2 flex justify-center svelte-18yxw7p"><div${attr_class("w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg transform transition-all duration-700 hover:scale-105 svelte-18yxw7p", void 0, { "opacity-0": true, "opacity-100": ready })}><img src="/images/dr-gasah-profile.jpg" alt="Dr. Gasah A, Pediatric Hematology Oncologist" class="w-full h-full object-cover svelte-18yxw7p"></div></div></div> <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce svelte-18yxw7p"><a href="#about" class="text-white svelte-18yxw7p" aria-label="Scroll to About section"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 svelte-18yxw7p" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" class="svelte-18yxw7p"></path></svg></a></div></section>`;
  pop();
}
function About($$payload, $$props) {
  push();
  let visible = false;
  $$payload.out += `<section id="about" class="section bg-white"><div class="container-custom"><div class="text-center mb-12"><h2 class="section-title">About Dr. Gasah A</h2> <p class="section-subtitle mx-auto">Dedicated to improving children's lives through specialized care and groundbreaking research</p></div> <div class="flex flex-col md:flex-row gap-10 items-center"><div${attr_class("md:w-1/2 transition-all duration-1000 svelte-xgjwzl", void 0, {
    "translate-x-0": visible,
    "-translate-x-16": true,
    "opacity-100": visible,
    "opacity-0": true
  })}><div class="relative rounded-xl overflow-hidden shadow-xl"><img src="/doctor-profile.jpg" alt="Dr. Gasah A in a clinical setting" class="w-full h-auto"> <div class="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div> <div class="absolute bottom-0 p-6 text-white"><h3 class="text-2xl font-bold">Dr. Gasah A</h3> <p class="text-blue-100">Pediatric Hematology Oncologist</p></div></div></div> <div${attr_class("md:w-1/2 transition-all duration-1000 delay-300 svelte-xgjwzl", void 0, {
    "translate-x-0": visible,
    "translate-x-16": true,
    "opacity-100": visible,
    "opacity-0": true
  })}><h3 class="text-2xl font-semibold text-blue-800 mb-4">Professional Background</h3> <p class="mb-6 text-gray-700">Dr. Gasah A is a distinguished pediatric hematology oncologist specializing in childhood blood cancers and neuroblastoma. With years of dedicated training and clinical practice, he has established himself as a leading expert in Ethiopia's medical community.</p> <p class="mb-6 text-gray-700">Dr. Gasah divides his time between Black Lion Hospital, where he serves as a senior consultant, and Betzata Private Clinic, where he provides specialized care in a private setting. His dual role allows him to serve patients across different socioeconomic backgrounds.</p> <h3 class="text-2xl font-semibold text-blue-800 mb-4">Education &amp; Expertise</h3> <ul class="space-y-3 mb-6"><li class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Specialized training in pediatric hematology and oncology</span></li> <li class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Active researcher in childhood blood cancers and neuroblastoma</span></li> <li class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Contributor to international medical journals and conferences</span></li> <li class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Advocate for improved pediatric cancer care in Ethiopia</span></li></ul> <a href="#contact" class="btn btn-primary">Schedule a Consultation</a></div></div></div></section>`;
  pop();
}
function Services($$payload, $$props) {
  push();
  let visible = false;
  const services = [
    {
      icon: "icon-treatment",
      title: "Pediatric Hematology",
      description: "Diagnosis and treatment of blood disorders in children including anemia, hemophilia, and other bleeding disorders."
    },
    {
      icon: "icon-treatment",
      title: "Pediatric Oncology",
      description: "Specialized treatment of various childhood cancers with focus on personalized care and evidence-based protocols."
    },
    {
      icon: "icon-research",
      title: "Blood Cancer Treatment",
      description: "Expert management of leukemia, lymphoma, and other blood-related cancers specific to pediatric patients."
    },
    {
      icon: "icon-research",
      title: "Neuroblastoma Care",
      description: "Advanced diagnostic and treatment approaches for neuroblastoma, including integration with international treatment protocols."
    },
    {
      icon: "icon-consultation",
      title: "Patient Consultations",
      description: "Comprehensive evaluations and second opinions for complex hematological and oncological conditions."
    },
    {
      icon: "icon-support",
      title: "Family Support & Education",
      description: "Guidance and resources for families navigating pediatric cancer diagnosis, treatment, and survivorship."
    }
  ];
  const each_array = ensure_array_like(services);
  $$payload.out += `<section id="services" class="section bg-blue-50"><div class="container-custom"><div class="text-center mb-12"><h2 class="section-title relative inline-block">Services &amp; Specialties <span class="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></span></h2> <p class="section-subtitle mx-auto">Specialized care for children with blood disorders and cancer</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let service = each_array[index];
    $$payload.out += `<div${attr_class("card hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2 svelte-1fyql03", void 0, { "opacity-0": true, "opacity-100": visible })}${attr_style(`transition-delay: ${stringify(index * 100)}ms`)}><div class="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 mx-auto"><svg class="h-10 w-10"><use${attr("href", `/images/service-icons.svg#${stringify(service.icon)}`)}></use></svg></div> <h3 class="text-xl font-semibold text-blue-900 text-center mb-4">${escape_html(service.title)}</h3> <p class="text-gray-600 text-center">${escape_html(service.description)}</p></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="mt-16 text-center"><a href="#contact" class="btn btn-primary flex items-center justify-center mx-auto"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> Book an Appointment</a></div></div></section>`;
  pop();
}
function Research($$payload, $$props) {
  push();
  let visible = false;
  const researchAreas = [
    {
      title: "Blood Cancer Research",
      description: "Dr. Gasah's research on blood cancers focuses on the unique genetic markers and treatment outcomes in Ethiopian children. His work aims to develop protocols optimized for local healthcare resources and genetic profiles.",
      items: [
        "Genetic profiling of pediatric leukemia in Ethiopian populations",
        "Modified treatment protocols adapted to limited-resource settings",
        "Long-term outcomes and survivorship studies"
      ]
    },
    {
      title: "Neuroblastoma Studies",
      description: "As a leading researcher on pediatric neuroblastoma in East Africa, Dr. Gasah conducts studies on early detection methods, regional prevalence patterns, and optimized treatment approaches.",
      items: [
        "Early detection biomarkers for high-risk populations",
        "Regional epidemiological patterns of neuroblastoma",
        "Multi-modal treatment approaches in resource-constrained settings"
      ]
    }
  ];
  const each_array = ensure_array_like(researchAreas);
  $$payload.out += `<section id="research" class="section bg-white"><div class="container-custom"><div class="text-center mb-12"><h2 class="section-title">Research Highlights</h2> <p class="section-subtitle mx-auto">Advancing pediatric oncology through clinical research and innovation</p></div> <div class="flex flex-col md:flex-row gap-12"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let area = each_array[index];
    const each_array_1 = ensure_array_like(area.items);
    $$payload.out += `<div${attr_class("md:w-1/2 card bg-gradient-to-br from-blue-50 to-white transition-all duration-700 svelte-1fyql03", void 0, { "opacity-0": true, "opacity-100": visible })}${attr_style(`transition-delay: ${stringify(index * 200)}ms`)}><h3 class="text-2xl font-semibold text-blue-800 mb-4">${escape_html(area.title)}</h3> <p class="text-gray-700 mb-6">${escape_html(area.description)}</p> <h4 class="text-lg font-medium text-blue-700 mb-3">Key Focus Areas:</h4> <ul class="space-y-2 mb-6"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let item = each_array_1[$$index];
      $$payload.out += `<li class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span class="text-gray-700">${escape_html(item)}</span></li>`;
    }
    $$payload.out += `<!--]--></ul></div>`;
  }
  $$payload.out += `<!--]--></div> <div${attr_class("mt-16 bg-blue-50 p-8 rounded-lg shadow-inner svelte-1fyql03", void 0, { "opacity-0": true, "opacity-100": visible })} style="transition-delay: 400ms"><h3 class="text-xl font-semibold text-blue-900 mb-4 text-center">Research Impact</h3> <p class="text-gray-700 text-center mb-6">Dr. Gasah's research has contributed to improved survival rates for children with blood cancers in Ethiopia through locally-adapted treatment protocols and enhanced diagnostic approaches.</p> <div class="flex flex-wrap gap-4 justify-center"><div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"><span class="text-3xl font-bold text-blue-600">200+</span> <span class="text-gray-600">Patients in Clinical Studies</span></div> <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"><span class="text-3xl font-bold text-blue-600">12</span> <span class="text-gray-600">Published Research Papers</span></div> <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"><span class="text-3xl font-bold text-blue-600">4</span> <span class="text-gray-600">International Collaborations</span></div></div></div></div></section>`;
  pop();
}
function Team($$payload, $$props) {
  push();
  let visible = false;
  const team = [
    {
      name: "Dr. Gasah A",
      role: "Pediatric Hematology Oncologist",
      bio: "Dr. Gasah specializes in pediatric blood cancer and neuroblastoma research. He leads the chemotherapy team at Black Lion Hospital and provides personalized care for children with cancer.",
      image: "/images/dr-gasah-profile.jpg"
    },
    {
      name: "Nurse Anmut T",
      role: "Senior Oncology Nurse",
      bio: "Nurse Anmut is a dedicated pediatric oncology nurse with extensive experience in chemotherapy administration. She provides compassionate care and support for patients and their families.",
      image: "/images/team-member3.svg"
    }
  ];
  const each_array = ensure_array_like(team);
  $$payload.out += `<section id="team" class="section bg-gray-50"><div class="container-custom"><div class="text-center mb-12"><h2 class="section-title relative inline-block">Chemotherapy Team <span class="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></span></h2> <p class="section-subtitle max-w-3xl mx-auto">Our specialized team is dedicated to providing comprehensive care for children with cancer at Black Lion Hospital.</p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let member = each_array[index];
    $$payload.out += `<div${attr_class("bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 svelte-1fyql03", void 0, { "opacity-0": true, "opacity-100": visible })}${attr_style(`transition-delay: ${stringify(index * 200)}ms`)}><div class="h-64 overflow-hidden"><img${attr("src", member.image)}${attr("alt", member.name)} class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"></div> <div class="p-6"><h3 class="text-xl font-semibold text-blue-900 mb-1 relative inline-block">${escape_html(member.name)} <span class="absolute bottom-0 left-0 w-3/4 h-0.5 bg-blue-600"></span></h3> <p class="text-blue-600 font-medium mb-3">${escape_html(member.role)}</p> <p class="text-gray-600">${escape_html(member.bio)}</p></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
  pop();
}
function Locations($$payload, $$props) {
  push();
  let visible = false;
  const locations = [
    {
      name: "Black Lion Hospital",
      role: "Senior Consultant",
      address: "Churchill Avenue, Addis Ababa, Ethiopia",
      hours: "Monday, Wednesday, Friday: 8:00 AM - 4:00 PM",
      description: "Dr. Gasah serves as a senior consultant at Black Lion Hospital, Ethiopia's premier referral and teaching hospital. Here, he leads the pediatric hematology-oncology team and supervises complex cases referred from throughout the country.",
      icon: "home"
    },
    {
      name: "Betzata Private Clinic",
      role: "Specialist Consultant",
      address: "Bole Road, Addis Ababa, Ethiopia",
      hours: "Tuesday, Thursday: 9:00 AM - 6:00 PM, Saturday: 9:00 AM - 1:00 PM",
      description: "At Betzata Private Clinic, Dr. Gasah provides specialized care in a private setting. The clinic offers personalized attention, shorter waiting times, and continuity of care for patients requiring ongoing treatment.",
      icon: "briefcase"
    }
  ];
  const each_array = ensure_array_like(locations);
  $$payload.out += `<section id="locations" class="section bg-blue-900 text-white"><div class="container-custom"><div class="text-center mb-12"><h2 class="section-title text-white">Work Locations</h2> <p class="section-subtitle text-blue-200 mx-auto">Where you can find Dr. Gasah's clinical practice</p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let location = each_array[index];
    $$payload.out += `<div${attr_class("bg-blue-800 rounded-lg shadow-lg p-8 hover:bg-blue-700 transition-all duration-300 svelte-1fyql03", void 0, { "opacity-0": true, "opacity-100": visible })}${attr_style(`transition-delay: ${stringify(index * 200)}ms`)}><div class="flex items-center mb-6"><div class="w-14 h-14 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mr-4"><img src="/images/hospital-icon.svg" alt="Hospital icon" class="w-8 h-8"></div> <div><h3 class="text-2xl font-semibold">${escape_html(location.name)}</h3> <p class="text-blue-200">${escape_html(location.role)}</p></div></div> <p class="mb-4 text-blue-100">${escape_html(location.description)}</p> <div class="mb-4 pt-4 border-t border-blue-700"><div class="flex items-start mb-2"><svg class="feather h-5 w-5 mr-2 text-blue-300 flex-shrink-0 mt-1"><use href="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather-sprite.svg#map-pin"></use></svg> <span>${escape_html(location.address)}</span></div> <div class="flex items-start"><svg class="feather h-5 w-5 mr-2 text-blue-300 flex-shrink-0 mt-1"><use href="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather-sprite.svg#clock"></use></svg> <span>${escape_html(location.hours)}</span></div></div> <a href="#contact" class="inline-block mt-2 text-blue-200 hover:text-white font-medium transition-colors">Book an appointment →</a></div>`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
  pop();
}
function Contact($$payload, $$props) {
  push();
  let visible = false;
  let name = "";
  let email = "";
  let phone = "";
  let message = "";
  $$payload.out += `<section id="contact" class="section bg-white"><div class="container-custom"><div class="text-center mb-12"><h2 class="section-title relative inline-block">Contact Dr. Gasah <span class="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></span></h2> <p class="section-subtitle mx-auto">Get in touch to schedule an appointment or inquire about consultations</p></div> <div class="flex justify-center mb-8"><div class="inline-flex bg-gray-100 rounded-full p-1"><button${attr_class(`px-6 py-2 rounded-full transition-colors ${stringify("bg-blue-600 text-white")}`)}>Contact Info</button> <button${attr_class(`px-6 py-2 rounded-full transition-colors ${stringify("text-gray-700 hover:text-blue-600")}`)}>Book Appointment</button></div></div> <div class="flex flex-col lg:flex-row gap-12"><div${attr_class("lg:w-1/2 transition-all duration-700 svelte-1fyql03", void 0, { "opacity-0": true, "opacity-100": visible })}><div class="bg-blue-50 p-8 rounded-lg shadow-sm"><h3 class="text-2xl font-semibold text-blue-900 mb-6 relative inline-block">Contact Information <span class="absolute bottom-0 left-0 w-3/4 h-1 bg-blue-600"></span></h3> <div class="space-y-8"><div class="flex items-start"><div class="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-4 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div> <div><h4 class="text-lg font-medium text-blue-900 mb-1">Phone</h4> <p class="text-gray-700 font-medium">+251 91 234 5678</p> <p class="text-gray-500 text-sm">Monday to Friday, 9AM-5PM</p></div></div> <div class="flex items-start"><div class="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-4 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div> <div><h4 class="text-lg font-medium text-blue-900 mb-1">Email</h4> <p class="text-gray-700 font-medium">dr.gasah@example.com</p> <p class="text-gray-500 text-sm">For appointments and inquiries</p></div></div> <div class="flex items-start"><div class="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-4 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <div><h4 class="text-lg font-medium text-blue-900 mb-1">Working Hours</h4> <p class="text-gray-700">Black Lion Hospital: Mon, Wed, Fri (8AM-4PM)</p> <p class="text-gray-700">Betzata Clinic: Tue, Thu (9AM-6PM), Sat (9AM-1PM)</p></div></div></div> <div class="mt-8 pt-8 border-t border-blue-100"><h4 class="text-lg font-medium text-blue-900 mb-4 relative">Emergency Contact <span class="absolute bottom-0 left-0 w-16 h-1 bg-blue-600"></span></h4> <p class="text-gray-700">For urgent medical matters, please contact the emergency department at Black Lion Hospital: +251 11 551 3456</p></div></div></div> <div${attr_class("lg:w-1/2 transition-all duration-700 delay-300 svelte-1fyql03", void 0, { "opacity-0": true, "opacity-100": visible })}>`;
  {
    $$payload.out += "<!--[-->";
    {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="bg-white p-8 rounded-lg shadow-md"><h3 class="text-2xl font-semibold text-blue-900 mb-6">Send a Message</h3> `;
      {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> <form class="space-y-6"><div><label for="name" class="block text-gray-700 font-medium mb-2">Full Name *</label> <input type="text" id="name"${attr("value", name)} class="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required></div> <div><label for="email" class="block text-gray-700 font-medium mb-2">Email Address *</label> <input type="email" id="email"${attr("value", email)} class="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required></div> <div><label for="phone" class="block text-gray-700 font-medium mb-2">Phone Number</label> <input type="tel" id="phone"${attr("value", phone)} class="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></div> <div><label for="message" class="block text-gray-700 font-medium mb-2">Message *</label> <textarea id="message" rows="4" class="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none" required>`;
      const $$body = escape_html(message);
      if ($$body) {
        $$payload.out += `${$$body}`;
      }
      $$payload.out += `</textarea></div> <div><button type="submit" class="btn btn-primary w-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> Send Message</button></div></form></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div></div></section>`;
  pop();
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Dr. Gasah A - Pediatric Hematology Oncologist</title>`;
    $$payload2.out += `<meta name="description" content="Professional website of Dr. Gasah A, a pediatric hematology oncologist from Ethiopia specializing in blood cancer and neuroblastoma research.">`;
  });
  Hero($$payload);
  $$payload.out += `<!----> `;
  About($$payload);
  $$payload.out += `<!----> `;
  Services($$payload);
  $$payload.out += `<!----> `;
  Research($$payload);
  $$payload.out += `<!----> `;
  Team($$payload);
  $$payload.out += `<!----> `;
  Locations($$payload);
  $$payload.out += `<!----> `;
  Contact($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
