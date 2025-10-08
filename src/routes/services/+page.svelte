<script>
  import ImageCarousel from '$lib/components/ImageCarousel.svelte';
  const blueCheck = `<span class=\"mt-0.5 inline-flex w-5 h-5 rounded-full bg-blue-100 text-blue-600 items-center justify-center shadow-inner flex-shrink-0\"><svg class=\"w-3.5 h-3.5\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"M5 13l4 4L19 7\"/></svg></span>`;
  
  // Use local attached_assets images
  const images = [
    '/attached_assets/c1.png',
    '/attached_assets/c2.png'
  ];
</script>

<section class="section bg-gradient-to-b from-white to-blue-50">
  <div class="container mx-auto px-4 sm:px-6 py-16">
    <div class="mb-10 md:mb-12">
      <ImageCarousel {images} />
    </div>
    
    <!-- Amharic Section -->
    <div class="bg-white/90 backdrop-blur rounded-2xl border border-blue-100/70 shadow-md p-6 md:p-10 mb-8 md:mb-12">
      <div class="text-center mb-6">
        <h1 class="text-2xl md:text-3xl font-bold text-blue-900 mb-2">ዶ/ር ጋሻው አረጋ – የህፃናት የደም እና የህፃናት ካንሰር ህክምና ሰብ ስፔሻሊስት</h1>
        <div class="flex justify-center"><span class="h-1 w-24 md:w-28 bg-blue-600 rounded-full"></span></div>
      </div>

      <h2 class="text-xl md:text-2xl font-semibold text-blue-900 mb-4">አገልግሎቶች</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 md:gap-y-4 text-blue-900 text-sm md:text-base mb-8">
        {#each [
          'የ ደም ህመሞች ምርመራ እና ህክምና',
          'የደም ማነስ እና ተዛማች ችግሮች',
          'የመድማትና የመርጋት ህመሞች',
          'የአጥንት መቅኔ ምርመራ እና የደም ካንሰር ህክምና',
          'የደም መቅኒ መስነፍ ወይም ያለማምረት ችግር',
          'የደም ካንሰር ህክምና ና የማማከር አገልግሎት',
          'የተለያዩ የህጻናት የካንሰር ምርመራ እና ህክምና እና ህክምና',
          'የቅድመና ድኅረ ንቅለ ተከላ አገልግሎት',
          'በተፈጥሮ የተከሰተ የሰውነት መድኅን መቀነስ'
        ] as item}
          <li class="flex items-start gap-3">
            {@html blueCheck}
            <span class="leading-relaxed text-blue-900/90">{item}</span>
          </li>
        {/each}
      </ul>

      <h2 class="text-xl md:text-2xl font-semibold text-blue-900 mb-4">የተለመዱ የህፃናት የካንሰር አይነቶች</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 md:gap-y-4 text-blue-900 text-sm md:text-base">
        {#each [
          'የደም ካንሰር',
          'የጭንቅላትና የህብለሰረሰር ዕጢ',
          'የንፍፊት ካንሰር',
          'ኒዮሮብላስቶማ',
          'የኪላሊት ካንሰር',
          'የለስላሳ ህብረህዋስ ካንሰር',
          'የአጥንት ካንሰር',
          'ከዘር ፍሬ የሚነሱ ካንሰር',
          'የህፃናት የጉበት ካንሰር',
          'እና ሌሎችም.......'
        ] as item}
          <li class="flex items-start gap-3">
            {@html blueCheck}
            <span class="leading-relaxed text-blue-900/90">{item}</span>
          </li>
        {/each}
      </ul>
      <p class="mt-6 text-blue-900/90 text-sm md:text-base">በህፃናት የደምና የካንሰር ሰብ-ስፔሻሊስት ሐኪሞች መታከም ና መዳን የሚችሉ ናቸዉ።</p>
    </div>

    <!-- English Section -->
    <div class="bg-white/90 backdrop-blur rounded-2xl border border-blue-100/70 shadow-md p-6 md:p-10">
      <div class="text-center mb-6">
        <h2 class="text-2xl md:text-3xl font-bold text-blue-900 mb-2">Dr. Gashaw Arega – Pediatric Hematology & Oncology Subspecialist</h2>
        <div class="flex justify-center"><span class="h-1 w-24 md:w-28 bg-blue-600 rounded-full"></span></div>
      </div>

      <h3 class="text-xl md:text-2xl font-semibold text-blue-900 mb-4">Services Offered</h3>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 md:gap-y-4 text-blue-900 text-sm md:text-base mb-8">
        {#each [
          'Blood Disorders Diagnosis & Treatment',
          'Anemia & related conditions',
          'Bleeding & thrombosis disorders',
          'Bone Marrow & Blood Cancer Treatment',
          'Bone marrow biopsy & evaluation',
          'Bone marrow failure syndromes Diagnosis and treatment',
          'Pediatric Cancer Diagnosis and Treatment',
          'Leukemia and Lymphoma management & follow-up',
          'Pre- & post-Bone marrow transplant consultation',
          'Primary immunodeficiency diagnosis & management'
        ] as item}
          <li class="flex items-start gap-3">
            {@html blueCheck}
            <span class="leading-relaxed text-blue-900/90">{item}</span>
          </li>
        {/each}
      </ul>

      <h3 class="text-xl md:text-2xl font-semibold text-blue-900 mb-4">Common Childhood Cancers</h3>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 md:gap-y-4 text-blue-900 text-sm md:text-base">
        {#each [
          'Acute Leukemia (ALL/AML)',
          'Brain and Central Nervous System (CNS) Tumors',
          "Lymphoma (Hodgkin's and Non-Hodgkin's Lymphoma)",
          'Neuroblastoma',
          'Wilms Tumor (Nephroblastoma)',
          'Soft Tissue Sarcoma (Rhabdomyosarcoma and non-rhaboid soft tissue sarcoma)',
          'Bone Cancers (Osteosarcoma and Ewing Sarcoma)',
          'Germ cell tumors',
          'Hepatoblastoma',
          'Naso-pharyngeal Carcinoma',
          'And others....'
        ] as item}
          <li class="flex items-start gap-3">
            {@html blueCheck}
            <span class="leading-relaxed text-blue-900/90">{item}</span>
          </li>
        {/each}
      </ul>
      <p class="mt-6 text-blue-900/90 text-sm md:text-base">These childhood cancers can be diagnosed and treated by pediatric hematologists and oncologists.</p>
    </div>
  </div>
</section>
