<template>
  <main>
    
    <!-- banner -->
    <section>
      <div>
        <swiper
          :modules="modules"
          :navigation="true"
          :pagination="true"
          :autoplay="{
            delay: 4500,
            disableOnInteraction: false,
          }"
          :slides-per-view="1"
          :space-between="0"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <div class="relative lg:pt-28 lg:pb-44 py-14">
              <!-- bg -->
              <img
                alt="bg"
                src="../assets/img/slider2-bg.jpg"
                class="w-full h-full inset-0 absolute"
              />
              <!--  -->
              <div class="container mx-auto px-5">
                <div class="grid grid-cols-12 gap-y-8 sm:gap-8">
                  <div class="lg:col-span-7 col-span-12 relative">
                    <!-- play icon -->
                    <a
                      class="mb-16 w-20 h-20 lg:hidden rounded-full bg-white flex items-center justify-center cursor-pointer m-auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="text-primary bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                        />
                      </svg>
                    </a>
                    <!--  -->
                    <h3
                      class="text-xl text-center lg:text-left font-bold text-white"
                    >
                      #1 Best It <span class="text-primary">Solution</span>
                    </h3>
                    <h1
                      class="text-center lg:text-left md:text-[55px] md:leading-[65px] text-2xl text-white font-bold"
                    >
                      Provide IT Solution <br />
                      & Business.
                    </h1>
                    <p
                      class="text-center lg:text-left text-2xl text-white mt-10 lg:max-w-[332px] w-full"
                    >
                      Businesses across every major industry to make ama
                      products and connect the dots.
                    </p>
                    <a
                      class="transition-all hover:bg-[#191f2d] mx-auto lg:mx-0 font-medium mt-12 cursor-pointer flex items-center justify-center text-lg text-white bg-primary rounded-[30px] w-48 h-16"
                      >Discover More</a
                    >
                  </div>
                  <div class="lg:col-span-5 col-span-12 hidden lg:block">
                    <div class="relative">
                      <!-- play icon -->
                      <a
                        class="w-20 h-20 rounded-full bg-white flex items-center justify-center cursor-pointer absolute inset-0 m-auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          class="text-primary bi bi-caret-right-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                          />
                        </svg>
                      </a>
                      <!--  -->
                      <img
                        alt="img"
                        src="../assets/img/slider-thumb-01.jpg"
                        class="w-full rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative lg:pt-28 lg:pb-44 py-14">
              <!-- bg -->
              <img
                alt="bg"
                src="../assets/img/slider2-bg.jpg"
                class="w-full h-full inset-0 absolute"
              />
              <!--  -->
              <div class="container mx-auto px-5">
                <div class="grid grid-cols-12 gap-y-8 sm:gap-8">
                  <div class="lg:col-span-7 col-span-12 relative">
                    <!-- play icon -->
                    <a
                      class="mb-16 w-20 h-20 lg:hidden rounded-full bg-white flex items-center justify-center cursor-pointer m-auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="text-primary bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                        />
                      </svg>
                    </a>
                    <!--  -->
                    <h3
                      class="text-xl text-center lg:text-left font-bold text-white"
                    >
                      #1 Best It <span class="text-primary">Solution</span>
                    </h3>
                    <h1
                      class="text-center lg:text-left md:text-[55px] md:leading-[65px] text-2xl text-white font-bold"
                    >
                      Provide IT Solution <br />
                      & Business.
                    </h1>
                    <p
                      class="text-center lg:text-left text-2xl text-white mt-10 lg:max-w-[332px] w-full"
                    >
                      Businesses across every major industry to make ama
                      products and connect the dots.
                    </p>
                    <a
                      class="transition-all hover:bg-[#191f2d] mx-auto lg:mx-0 font-medium mt-12 cursor-pointer flex items-center justify-center text-lg text-white bg-primary rounded-[30px] w-48 h-16"
                      >Discover More</a
                    >
                  </div>
                  <div class="lg:col-span-5 col-span-12 hidden lg:block">
                    <div class="relative">
                      <!-- play icon -->
                      <a
                        class="w-20 h-20 rounded-full bg-white flex items-center justify-center cursor-pointer absolute inset-0 m-auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          class="text-primary bi bi-caret-right-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                          />
                        </svg>
                      </a>
                      <!--  -->
                      <img
                        alt="img"
                        src="../assets/img/slider-thumb-01.jpg"
                        class="w-full rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

        </swiper>
      </div>
    </section>

    <!-- services -->
    <section class="relative lg:-top-[73px] top-20 z-10">
      <div
        class="container mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-7"
      >
        <div>
          <div
            class="bg-white rounded-md shadow1 py-9 px-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <img alt="img" src="../assets/img/s1.png" class="w-14 mt-3" />
            <div>
              <h3 class="text-[22px] font-bold text-[#030925] mb-2">
                Data Security
              </h3>
              <p class="text-[#616161] mb-4">
                Lorem Ipsum available, but in the majority form.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            class="bg-white rounded-md shadow1 py-9 px-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <img alt="img" src="../assets/img/s2.png" class="w-14 mt-3" />
            <div>
              <h3 class="text-[22px] font-bold text-[#030925] mb-2">
                UI/UX Design
              </h3>
              <p class="text-[#616161] mb-4">
                Lorem Ipsum available, but in the majority form.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            class="bg-white rounded-md shadow1 py-9 px-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <img alt="img" src="../assets/img/s3.png" class="w-14 mt-3" />
            <div>
              <h3 class="text-[22px] font-bold text-[#030925] mb-2">
                Technology
              </h3>
              <p class="text-[#616161] mb-4">
                Lorem Ipsum available, but in the majority form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- about us -->
    <section>
      <div class="container mx-auto px-5 mt-28 mb-20">
        <div class="grid grid-cols-12 gap-y-9 lg:gap-9">
          <div class="lg:col-span-5 col-span-12">
            <img
              alt="img"
              src="../assets/img/about-02.jpg"
              class="rounded-lg w-full"
            />
          </div>
          <div class="lg:col-span-7 col-span-12">
            <h2 class="text-primary font-bold">MORE ABOUT US __</h2>
            <h3 class="font-bold text-xl md:text-5xl mt-5 md:leading-[60px]">
              We Are Increasing Business Success With
              <span class="text-primary">IT Solutiony</span>
            </h3>
            <p class="text-lg font-medium text-[#030925] mt-10">
              Over 25 years working in IT services developing software
              application and mobile apps for clients all over the world.
            </p>
            <p class="mt-7 text-[#616161]">
              Digital ipsum dolor sit amet, consectetur adipisicing elit, sed do
              iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation.
            </p>
            <div class="flex flex-col sm:flex-row items-start gap-9 mt-7">
              <div class="flex flex-col sm:flex-row items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="flex-shrink-0 w-7 h-7 text-primary mt-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div>
                  <h3 class="text-xl font-semibold text-[#030925] mb-2">
                    Qualifid Consultans
                  </h3>
                  <p class="text-[#616161]">
                    By the charms of pleasure blinded by desire.
                  </p>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="flex-shrink-0 w-7 h-7 text-primary mt-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div>
                  <h3 class="text-xl font-semibold text-[#030925] mb-2">
                    Business Planning
                  </h3>
                  <p class="text-[#616161]">
                    By the charms of pleasure blinded by desire.
                  </p>
                </div>
              </div>
            </div>
            <a
              class="transition-all hover:bg-[#191f2d] font-medium mt-12 cursor-pointer flex items-center justify-center text-lg text-white bg-primary rounded-[30px] w-48 h-16"
              >Discover More</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- our service -->
    <section id="service" class="py-24">
      <div class="container mx-auto px-5">
        <h2 class="text-primary text-center font-bold">__ Our Service __</h2>
        <h3
          class="md:text-4xl text-xl text-center font-bold text-[#030925] my-4"
        >
          Something We Can Help You With
        </h3>
        <p class="text-[#616161] text-center">
          Over 25 years working in IT services developing software applications
          and mobile apps for<br />
          From its medieval origins to the digital era
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-x-28 gap-y-6 mt-14"
        >
          <a
            class="rounded-md bg-white shadow1 py-14 px-9 cursor-pointer transition-all hover:bg-primary group flex items-center justify-center"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                fill="currentColor"
                class="bi bi-layers-half text-primary block mx-auto mb-4 transition-all group-hover:text-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zM8 9.433 1.562 6 8 2.567 14.438 6z"
                />
              </svg>
              <strong
                class="text-primary text-center text-xl group-hover:text-white transition-all"
                >Development</strong
              >
            </div>
          </a>
          <a
            class="rounded-md bg-white shadow1 py-14 px-9 cursor-pointer transition-all hover:bg-primary group flex items-center justify-center"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                fill="currentColor"
                class="bi bi-bar-chart-line text-primary block mx-auto mb-4 transition-all group-hover:text-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z"
                />
              </svg>
              <strong
                class="text-primary text-center text-xl group-hover:text-white transition-all"
                >Web Marketing</strong
              >
            </div>
          </a>
          <a
            class="rounded-md bg-white shadow1 py-14 px-9 cursor-pointer transition-all hover:bg-primary group flex items-center justify-center"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                fill="currentColor"
                class="bi bi-cloud-arrow-down text-primary block mx-auto mb-4 transition-all group-hover:text-white"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"
                />
                <path
                  d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
                />
              </svg>
              <strong
                class="text-primary text-center text-xl group-hover:text-white transition-all"
                >Data Analytic
              </strong>
            </div>
          </a>
          <a
            class="rounded-md bg-white shadow1 py-14 px-9 cursor-pointer transition-all hover:bg-primary group flex items-center justify-center"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                fill="currentColor"
                class="bi bi-coin text-primary block mx-auto mb-4 transition-all group-hover:text-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"
                />
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                />
                <path
                  d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"
                />
              </svg>
              <strong
                class="text-primary text-center text-xl group-hover:text-white transition-all"
                >Web Finalcial</strong
              >
            </div>
          </a>
        </div>
        <div
          class="bg-white py-12 px-6 mt-20 grid grid-cols-12 gap-y-14 lg:gap-y-0 lg:gap-14"
        >
          <div class="lg:col-span-7 col-span-12">
            <h2 class="font-bold text-2xl md:text-3xl text-[#030925]">
              IT Solution Strategy Development<br />
              For Your Bussiness
            </h2>
            <p class="my-10 text-[#616161]">
              Over 25 years working in IT services developing software cations
              and mobile apps for clients all over the world. From its medieval
              origins to the digital learn everything there.
            </p>
            <div>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-check-lg text-primary flex-shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                  />
                </svg>
                <p class="text-[#616161]">Support via E-mail and Phone</p>
              </div>
              <div class="flex items-center gap-2 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-check-lg text-primary flex-shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                  />
                </svg>
                <p class="text-[#616161]">Multi-Language Support</p>
              </div>
            </div>
            <a
              class="transition-all hover:bg-[#191f2d] font-medium mt-12 cursor-pointer flex items-center justify-center text-lg text-white bg-primary rounded-[30px] w-48 h-16"
              >Discover More</a
            >
          </div>
          <div class="lg:col-span-5 col-span-12">
            <img
              alt="img"
              src="../assets/img/tab-thumb.jpg"
              class="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- price plan -->
    <section class="py-24">
      <div class="container mx-auto px-5">
        <h2 class="text-primary text-center font-bold">__ Our Pricing __</h2>
        <h3
          class="md:text-4xl text-xl text-center font-bold text-[#030925] my-4"
        >
          Choose Your Best Plan
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
          <div
            class="bg-white overflow-hidden rounded-md border border-[#DDDDDD] shadow2"
          >
            <div class="py-8 px-6 bg-[#020925] rounded-md">
              <h4 class="font-bold text-3xl text-white">For Team</h4>
              <h5 class="font-bold text-4xl text-white mt-8 mb-1 text-right">
                <span class="text-2xl mr-2">$</span>39.99 <span> </span>
              </h5>
              <p class="text-white text-right">Monthly Package</p>
            </div>
            <div>
              <ul class="pt-14 pl-6 sm:pl-12">
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Powerful Admin Panel</p>
                </li>
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Multi-Language Support</p>
                </li>
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Support via E-mail and Phone</p>
                </li>
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Digital project planning</p>
                </li>
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Planning Solution</p>
                </li>
              </ul>
              <a
                class="transition-all hover:bg-primary font-medium mt-16 mb-14 cursor-pointer flex items-center justify-center mx-auto text-lg text-white bg-[#030925] rounded-[30px] w-44 h-16"
                >Discover More</a
              >
            </div>
          </div>
          <div
            class="bg-white overflow-hidden rounded-md border border-[#DDDDDD] shadow2"
          >
            <div class="py-8 px-6 bg-primary rounded-md">
              <h4 class="font-bold text-3xl text-white">Personal</h4>
              <h5 class="font-bold text-4xl text-white mt-8 mb-1 text-right">
                <span class="text-2xl mr-2">$</span>29.99 <span> </span>
              </h5>
              <p class="text-white text-right">Monthly Package</p>
            </div>
            <div>
              <ul class="pt-14 pl-6 sm:pl-12">
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Powerful Admin Panel</p>
                </li>
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Multi-Language Support</p>
                </li>
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Support via E-mail and Phone</p>
                </li>
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Digital project planning</p>
                </li>
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Planning Solution</p>
                </li>
              </ul>
              <a
                class="transition-all hover:bg-primary font-medium mt-16 mb-14 cursor-pointer flex items-center justify-center mx-auto text-lg text-white bg-[#030925] rounded-[30px] w-44 h-16"
                >Discover More</a
              >
            </div>
          </div>
          <div
            class="bg-white overflow-hidden rounded-md border border-[#DDDDDD] shadow2"
          >
            <div class="py-8 px-6 bg-[#020925] rounded-md">
              <h4 class="font-bold text-3xl text-white">Advance</h4>
              <h5 class="font-bold text-4xl text-white mt-8 mb-1 text-right">
                <span class="text-2xl mr-2">$</span>99.99 <span> </span>
              </h5>
              <p class="text-white text-right">Monthly Package</p>
            </div>
            <div>
              <ul class="pt-14 pl-6 sm:pl-12">
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Powerful Admin Panel</p>
                </li>
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Multi-Language Support</p>
                </li>
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Support via E-mail and Phone</p>
                </li>
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Digital project planning</p>
                </li>
                <li class="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    class="bi bi-check-lg text-#616161 flex-shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                    ></path>
                  </svg>
                  <p class="text-[#616161]">Planning Solution</p>
                </li>
              </ul>
              <a
                class="transition-all hover:bg-primary font-medium mt-16 mb-14 cursor-pointer flex items-center justify-center mx-auto text-lg text-white bg-[#030925] rounded-[30px] w-44 h-16"
                >Discover More</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- statistics -->
    <section>
      <div class="container mx-auto px-5 mb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <img
              alt="img"
              src="../assets/img/agency-thumb.jpg"
              class="w-full"
            />
          </div>
          <div class="bg-[#f8fafc] p-12">
            <h2 class="text-primary font-bold">MORE THAN AGENCY __</h2>
            <h3 class="font-bold text-xl md:text-5xl mt-5 md:leading-[60px]">
              We are Delivering IT Products for You
            </h3>
            <p class="text-lg font-medium text-[#030925] mt-10">
              Over 25 years working in IT services developing software apps for
              clients all over the world.
            </p>
            <div class="md:w-48 mt-7">
              <div class="mb-5">
                <div class="flex items-center justify-between">
                  <p class="text-[#272727] font-bold">Web Solution</p>
                  <p class="font-bold text-primary">80%</p>
                </div>
                <div class="h-1 w-full bg-[#e9ecef] mt-1">
                  <div class="h-full bg-primary w-9/12"></div>
                </div>
              </div>
              <div class="mb-5">
                <div class="flex items-center justify-between">
                  <p class="text-[#272727] font-bold">Mobail Service</p>
                  <p class="font-bold text-primary">60%</p>
                </div>
                <div class="h-1 w-full bg-[#e9ecef] mt-1">
                  <div class="h-full bg-primary w-7/12"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <p class="text-[#272727] font-bold">Technology</p>
                  <p class="font-bold text-primary">70%</p>
                </div>
                <div class="h-1 w-full bg-[#e9ecef] mt-1">
                  <div class="h-full bg-primary w-8/12"></div>
                </div>
              </div>
            </div>
            <a
              class="transition-all hover:bg-[#191f2d] font-medium mt-12 cursor-pointer flex items-center justify-center text-lg text-white bg-primary rounded-[30px] w-48 h-16"
              >Discover More</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- brands -->
    <section class="border-b-2 border-gray-100 pb-12">
      <div class="container mx-auto px-5">
        <div>
          <swiper
            :modules="modules"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :breakpoints="{
              '640': {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              '768': {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              '1024': {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }"
            :slides-per-view="2"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              ><img alt="img" src="../assets/img/brand-01.png"
            /></swiper-slide>
            <swiper-slide
              ><img alt="img" src="../assets/img/brand-02.png"
            /></swiper-slide>
            <swiper-slide
              ><img alt="img" src="../assets/img/brand-03.png"
            /></swiper-slide>
            <swiper-slide
              ><img alt="img" src="../assets/img/brand-04.png"
            /></swiper-slide>
            <swiper-slide
              ><img alt="img" src="../assets/img/brand-05.png"
            /></swiper-slide>
            <swiper-slide
              ><img alt="img" src="../assets/img/brand-031.png"
            /></swiper-slide>
            ...
          </swiper>
        </div>
      </div>
    </section>

    <!-- member -->
    <section class="py-12">
      <div class="container mx-auto px-5">
        <h2 class="text-primary text-center font-bold">__ Our Membar __</h2>
        <h3
          class="md:text-4xl text-xl text-center font-bold text-[#030925] my-4"
        >
          IT Solution Expert Our Company<br />
          Membar
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-12">
          <div
            class="group hover:shadow transition-all duration-500 rounded-lg"
          >
            <div class="relative overflow-hidden">
              <img
                alt="img"
                src="../assets/img/team-06.jpg"
                class="rounded-lg w-full"
              />
              <div
                class="absolute bottom-10 right-6 flex flex-col gap-2 [&>*]:cursor-pointer"
              >
                <div
                  class="flex flex-col gap-2 relative -bottom-72 transition-all duration-500 group-hover:bottom-0"
                >
                  <a
                    class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                      />
                    </svg>
                  </a>
                  <a
                    class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                      />
                    </svg>
                  </a>
                  <a
                    class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
                      />
                    </svg>
                  </a>
                  <a
                    class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-vimeo"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.992 4.204q-.106 2.334-3.262 6.393-3.263 4.243-5.522 4.243-1.4 0-2.367-2.583L3.55 7.523Q2.83 4.939 2.007 4.94q-.178.001-1.254.754L0 4.724a210 210 0 0 0 2.334-2.081q1.581-1.364 2.373-1.437 1.865-.185 2.298 2.553.466 2.952.646 3.666.54 2.447 1.186 2.445.5 0 1.508-1.587 1.006-1.587 1.077-2.415.144-1.37-1.077-1.37a3 3 0 0 0-1.185.261q1.183-3.86 4.508-3.756 2.466.075 2.324 3.2z"
                      />
                    </svg>
                  </a>
                </div>
                <a
                  class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-share-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h5
              class="font-bold text-center text-[#030925] text-[22px] mt-6 mb-0"
            >
              Tones Brown
            </h5>
            <p class="text-primary font-bold text-center mb-6">Devlopment</p>
          </div>
          <div
            class="group hover:shadow transition-all duration-500 rounded-lg"
          >
            <div class="relative overflow-hidden">
              <img
                alt="img"
                src="../assets/img/team-05.jpg"
                class="rounded-lg w-full"
              />
              <div
                class="absolute bottom-10 right-6 flex flex-col gap-2 [&>*]:cursor-pointer"
              >
                <div
                  class="flex flex-col gap-2 relative -bottom-72 transition-all duration-500 group-hover:bottom-0"
                >
                  <a
                    class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                      />
                    </svg>
                  </a>
                  <a
                    class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                      />
                    </svg>
                  </a>
                  <a
                    class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
                      />
                    </svg>
                  </a>
                  <a
                    class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-vimeo"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.992 4.204q-.106 2.334-3.262 6.393-3.263 4.243-5.522 4.243-1.4 0-2.367-2.583L3.55 7.523Q2.83 4.939 2.007 4.94q-.178.001-1.254.754L0 4.724a210 210 0 0 0 2.334-2.081q1.581-1.364 2.373-1.437 1.865-.185 2.298 2.553.466 2.952.646 3.666.54 2.447 1.186 2.445.5 0 1.508-1.587 1.006-1.587 1.077-2.415.144-1.37-1.077-1.37a3 3 0 0 0-1.185.261q1.183-3.86 4.508-3.756 2.466.075 2.324 3.2z"
                      />
                    </svg>
                  </a>
                </div>
                <a
                  class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-share-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h5
              class="font-bold text-center text-[#030925] text-[22px] mt-6 mb-0"
            >
              Tones Brown
            </h5>
            <p class="text-primary font-bold text-center mb-6">Devlopment</p>
          </div>
          <div
            class="group hover:shadow transition-all duration-500 rounded-lg"
          >
            <div class="relative overflow-hidden">
              <img
                alt="img"
                src="../assets/img/team-04.jpg"
                class="rounded-lg w-full"
              />
              <div
                class="absolute bottom-10 right-6 flex flex-col gap-2 [&>*]:cursor-pointer"
              >
                <div
                  class="flex flex-col gap-2 relative -bottom-72 transition-all duration-500 group-hover:bottom-0"
                >
                  <a
                    class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                      />
                    </svg>
                  </a>
                  <a
                    class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                      />
                    </svg>
                  </a>
                  <a
                    class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
                      />
                    </svg>
                  </a>
                  <a
                    class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-vimeo"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.992 4.204q-.106 2.334-3.262 6.393-3.263 4.243-5.522 4.243-1.4 0-2.367-2.583L3.55 7.523Q2.83 4.939 2.007 4.94q-.178.001-1.254.754L0 4.724a210 210 0 0 0 2.334-2.081q1.581-1.364 2.373-1.437 1.865-.185 2.298 2.553.466 2.952.646 3.666.54 2.447 1.186 2.445.5 0 1.508-1.587 1.006-1.587 1.077-2.415.144-1.37-1.077-1.37a3 3 0 0 0-1.185.261q1.183-3.86 4.508-3.756 2.466.075 2.324 3.2z"
                      />
                    </svg>
                  </a>
                </div>
                <a
                  class="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-share-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h5
              class="font-bold text-center text-[#030925] text-[22px] mt-6 mb-0"
            >
              Tones Brown
            </h5>
            <p class="text-primary font-bold text-center mb-6">Devlopment</p>
          </div>
        </div>
      </div>
    </section>

    <!-- contact -->
    <section class="relative z-10">
      <div class="container mx-auto px-5">
        <div
          class="rounded-xl text-white max-w-[1140px] mx-auto py-20 px-2 md:px-10 flex-col lg:flex-row flex items-center gap-5 relative"
        >
          <!-- bg -->
          <img
            alt="bg"
            src="../assets/img/call-to-bg2.jpg"
            class="absolute w-full h-full inset-0"
          />
          <!--  -->
          <div class="relative">
            <h5 class="text-lg mb-4 text-center lg:text-left">
              Limited Period Offer __
            </h5>
            <h2 class="md:text-4xl text-xl font-bold text-center lg:text-left">
              Get 15 Minutes Complimentary Zoom or Skype Session.
            </h2>
          </div>
          <a
            class="relative flex items-center justify-center w-52 h-16 rounded-[30px] cursor-pointer border-2 font-medium border-white text-lg"
            >Contact Us</a
          >
        </div>
      </div>
    </section>

    <!-- more than agency -->
    <section class="-mt-32">
      <div class="container mx-auto px-5 mb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 gap-y-0">
          <div class="bg-[#f8fafc] md:p-12 p-5 pb-12 relative md:pt-44 pt-44">
            <!-- bg -->
            <img
              alt="bg"
              src="../assets/img/choose-thumb-01.jpg"
              class="absolute w-full h-full inset-0"
            />
            <!--  -->
            <h2 class="text-white font-bold relative">MORE THAN AGENCY __</h2>
            <h3
              class="font-bold md:text-5xl text-xl relative mt-5 md:leading-[60px] text-white"
            >
              What Can We Offer for Your Business
            </h3>
            <p class="text-lg relative font-medium text-white mt-10">
              Over 25 years working in IT services developing software apps for
              clients all over the world. the main factor that sets us apart
              from our petition deliver a specialist business.
            </p>
            <div class="relative mt-7">
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-check-lg text-primary flex-shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                  ></path>
                </svg>
                <p class="text-white">Support via E-mail and Phone</p>
              </div>
              <div class="flex items-center gap-2 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-check-lg text-primary flex-shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                  ></path>
                </svg>
                <p class="text-white">Multi-Language Support</p>
              </div>
            </div>
            <a
              class="transition-all hover:bg-[#191f2d] font-medium relative mt-12 cursor-pointer flex items-center justify-center text-lg text-white bg-primary rounded-[30px] w-48 h-16"
              >Discover More</a
            >
          </div>
          <div>
            <img
              alt="img"
              src="../assets/img/choose-thumb-02.jpg"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- our Choose -->
    <section class="py-24">
      <div class="container mx-auto px-5">
        <h2 class="text-primary text-center font-bold">__ Our Choose __</h2>
        <h3
          class="md:text-4xl text-xl text-center font-bold text-[#030925] my-4"
        >
          We Provide Flexible IT Choose
        </h3>
        <p class="text-[#616161] text-center">
          Lorem Ipsum is simply dummy It is a long established fact that a
          reader will be distracted by the<br />
          readable content of a page when looking at its layout.
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-x-10 gap-y-6 mt-14"
        >
          <div
            class="rounded-md bg-white shadow1 py-10 px-8 relative group overflow-hidden"
          >
            <div
              class="absolute top-0 left-0 w-1 h-0 group-hover:h-[40%] bg-primary transition-all duration-500"
            ></div>
            <div
              class="flex items-center justify-center rounded-full bg-primary w-28 h-28 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-vector-pen"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z"
                />
              </svg>
            </div>
            <h3 class="my-5 font-bold text-[22px] text-[#030925]">
              Business Security
            </h3>
            <ul class="mt-4 [&>*]:cursor-pointer">
              <li class="mb-3 group">
                <a
                  class="flex items-center gap-4 text-[#454545] hover:text-primary transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-caret-right-fill text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    />
                  </svg>
                  <p>Powerful Admin Panel</p>
                </a>
              </li>
              <li class="mb-3 group">
                <a
                  class="flex items-center gap-4 text-[#454545] hover:text-primary transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-caret-right-fill text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    />
                  </svg>
                  <p>Multi-Language Support</p>
                </a>
              </li>
              <li class="mb-3 group">
                <a
                  class="flex items-center gap-4 text-[#454545] hover:text-primary transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-caret-right-fill text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    />
                  </svg>
                  <p>Support via E-mail and Phone</p>
                </a>
              </li>
              <li class="mb-3 group">
                <a
                  class="flex items-center gap-4 text-[#454545] hover:text-primary transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-caret-right-fill text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    />
                  </svg>
                  <p>Digital project planning</p>
                </a>
              </li>
            </ul>
          </div>
          <div
            class="rounded-md bg-white shadow1 py-10 px-8 relative group overflow-hidden"
          >
            <div
              class="absolute top-0 left-0 w-1 h-0 group-hover:h-[40%] bg-primary transition-all duration-500"
            ></div>
            <div
              class="flex items-center justify-center rounded-full bg-primary w-28 h-28 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-house-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"
                />
                <path
                  d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"
                />
              </svg>
            </div>
            <h3 class="my-5 font-bold text-[22px] text-[#030925]">
              Finest Quality
            </h3>
            <ul class="mt-4 [&>*]:cursor-pointer">
              <li class="mb-3 group">
                <a
                  class="flex items-center gap-4 text-[#454545] hover:text-primary transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-caret-right-fill text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    />
                  </svg>
                  <p>Powerful Admin Panel</p>
                </a>
              </li>
              <li class="mb-3 group">
                <a
                  class="flex items-center gap-4 text-[#454545] hover:text-primary transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-caret-right-fill text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    />
                  </svg>
                  <p>Multi-Language Support</p>
                </a>
              </li>
              <li class="mb-3 group">
                <a
                  class="flex items-center gap-4 text-[#454545] hover:text-primary transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-caret-right-fill text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    />
                  </svg>
                  <p>Support via E-mail and Phone</p>
                </a>
              </li>
              <li class="mb-3 group">
                <a
                  class="flex items-center gap-4 text-[#454545] hover:text-primary transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-caret-right-fill text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    />
                  </svg>
                  <p>Digital project planning</p>
                </a>
              </li>
            </ul>
          </div>
          <div
            class="rounded-md bg-white shadow1 py-10 px-8 relative group overflow-hidden"
          >
            <div
              class="absolute top-0 left-0 w-1 h-0 group-hover:h-[40%] bg-primary transition-all duration-500"
            ></div>
            <div
              class="flex items-center justify-center rounded-full bg-primary w-28 h-28 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-display"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145"
                />
              </svg>
            </div>
            <h3 class="my-5 font-bold text-[22px] text-[#030925]">
              Perfect Design
            </h3>
            <ul class="mt-4 [&>*]:cursor-pointer">
              <li class="mb-3 group">
                <a
                  class="flex items-center gap-4 text-[#454545] hover:text-primary transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-caret-right-fill text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    />
                  </svg>
                  <p>Powerful Admin Panel</p>
                </a>
              </li>
              <li class="mb-3 group">
                <a
                  class="flex items-center gap-4 text-[#454545] hover:text-primary transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-caret-right-fill text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    />
                  </svg>
                  <p>Multi-Language Support</p>
                </a>
              </li>
              <li class="mb-3 group">
                <a
                  class="flex items-center gap-4 text-[#454545] hover:text-primary transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-caret-right-fill text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    />
                  </svg>
                  <p>Support via E-mail and Phone</p>
                </a>
              </li>
              <li class="mb-3 group">
                <a
                  class="flex items-center gap-4 text-[#454545] hover:text-primary transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-caret-right-fill text-primary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    />
                  </svg>
                  <p>Digital project planning</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- contact us -->
    <section class="py-4">
      <div class="container mx-auto px-5">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-primary font-bold mb-4">Help Us 24/7 __</h2>
            <h2 class="font-bold md:text-3xl text-xl text-[#030925]">
              What Can We Offer for<br />
              Your Business
            </h2>
            <p class="my-10 text-[#616161]">
              Over 25 years working in IT services developing software apps for
              clients all over the world. the main factor that sets us apart
              from our petition deliver a specialist business.
            </p>
            <div>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-check-lg text-primary flex-shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                  ></path>
                </svg>
                <p class="text-[#616161]">Support via E-mail and Phone</p>
              </div>
              <div class="flex items-center gap-2 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-check-lg text-primary flex-shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                  ></path>
                </svg>
                <p class="text-[#616161]">
                  Which don’t Look Even Slightly Believable
                </p>
              </div>
              <div class="flex items-center gap-2 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-check-lg text-primary flex-shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                  ></path>
                </svg>
                <p class="text-[#616161]">Multi-Language Support</p>
              </div>
            </div>
            <div
              class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mt-9"
            >
              <div
                class="w-20 h-20 flex-shrink-0 rounded-full flex items-center justify-center bg-[#FFEBE5] text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-[#616161]">Quick Support Numbar</p>
                <p class="font-bold text-2xl text-[#030925] mt-1">
                  (099 6984 5698 56)
                </p>
              </div>
            </div>
          </div>
          <div>
            <form class="rounded-xl bg-white shadow3 py-16 px-9">
              <h1 class="text-primary text-[17px] font-bold">Our Contact __</h1>
              <h2
                class="font-bold text-2xl md:text-4xl text-[#030925] mt-1 mb-10"
              >
                Request A Quote
              </h2>
              <input
                placeholder="Your Name*"
                class="h-14 rounded-md border outline-none text-[#888] pl-7 pr-3 w-full mb-6"
              />
              <input
                placeholder="Your Email*"
                class="h-14 rounded-md border outline-none text-[#888] pl-7 pr-3 w-full mb-6"
              />
              <textarea
                rows="4"
                placeholder="Your Message*"
                class="rounded-md border outline-none text-[#888] pl-7 p-3 w-full mb-6"
              ></textarea>
              <input
                type="submit"
                value="Send Message"
                class="transition-all hover:bg-[#191f2d] w-44 h-14 cursor-pointer flex items-center justify-center font-semibold rounded-[30px] bg-primary text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- testimonial  -->
    <section id="testimonial" class="py-24 mt-11">
      <div class="container mx-auto px-5">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div></div>
          <div>
            <h2 class="text-white font-bold mb-4">OUR TESTIMONIAL __</h2>
            <h2 class="font-bold text-xl md:text-3xl text-white">
              What Our Clients Say
            </h2>
            <p class="mt-4 text-white">
              Lorem Ipsum is simply dummy It is a long established fact that a
              reader will be distracted by the readable content.
            </p>
            <div>
              <swiper
                :modules="modules"
                :autoplay="{
                  delay: 4500,
                  disableOnInteraction: false,
                }"
                :slides-per-view="1"
                :space-between="50"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
              >
                <swiper-slide>
                  <div class="bg-white rounded-md mt-14 p-8 shadow4">
                    <div class="flex items-center gap-6">
                      <div class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                      </div>
                      <h3 class="text-lg text-primary font-semibold">
                        Execllent!!
                      </h3>
                    </div>
                    <p class="mt-5 text-[#5d5d5d]">
                      Following best practices and pro edures provided by
                      leading orga izations in the industry, our cles
                      disinfecting long established fact that a reader
                    </p>
                    <div class="mt-3 flex items-center gap-4">
                      <img
                        alt="img"
                        src="../assets/img/t1.png"
                        class="w-14 h-14 rounded-full"
                      />
                      <div>
                        <h3 class="text-[22px] text-[#030925] font-bold">
                          Roboto William
                        </h3>
                        <h4 class="text-lg mt-0.5 text-primary font-semibold">
                          UI/UXDesigner
                        </h4>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="bg-white rounded-md mt-14 p-8 shadow4">
                    <div class="flex items-center gap-6">
                      <div class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                      </div>
                      <h3 class="text-lg text-primary font-semibold">
                        Execllent!!
                      </h3>
                    </div>
                    <p class="mt-5 text-[#5d5d5d]">
                      Following best practices and pro edures provided by
                      leading orga izations in the industry, our cles
                      disinfecting long established fact that a reader
                    </p>
                    <div class="mt-3 flex items-center gap-4">
                      <img
                        alt="img"
                        src="../assets/img/t1.png"
                        class="w-14 h-14 rounded-full"
                      />
                      <div>
                        <h3 class="text-[22px] text-[#030925] font-bold">
                          Roboto William
                        </h3>
                        <h4 class="text-lg mt-0.5 text-primary font-semibold">
                          UI/UXDesigner
                        </h4>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="bg-white rounded-md mt-14 p-8 shadow4">
                    <div class="flex items-center gap-6">
                      <div class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-star-fill text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                      </div>
                      <h3 class="text-lg text-primary font-semibold">
                        Execllent!!
                      </h3>
                    </div>
                    <p class="mt-5 text-[#5d5d5d]">
                      Following best practices and pro edures provided by
                      leading orga izations in the industry, our cles
                      disinfecting long established fact that a reader
                    </p>
                    <div class="mt-3 flex items-center gap-4">
                      <img
                        alt="img"
                        src="../assets/img/t1.png"
                        class="w-14 h-14 rounded-full"
                      />
                      <div>
                        <h3 class="text-[22px] text-[#030925] font-bold">
                          Roboto William
                        </h3>
                        <h4 class="text-lg mt-0.5 text-primary font-semibold">
                          UI/UXDesigner
                        </h4>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- blog -->
    <section class="py-20 bg-[#F8FAFC]">
      <div class="container mx-auto px-5">
        <h2 class="text-primary text-center font-bold">OUR BLOG</h2>
        <h3
          class="md:text-4xl text-xl text-center font-bold text-[#030925] my-4"
        >
          Read Our Latest Tips & Tricks
        </h3>
        <div class="mt-9">
          <swiper
            :modules="modules"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :breakpoints="{
              '576': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '1200': {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }"
            :slides-per-view="1"
            :space-between="10"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide class="p-5">
              <div class="hover:bg-white transition-all duration-500 hover:shadow-lg group">
                <div class="relative overflow-hidden">
                  <div
                    class="absolute inset-0 group-hover:w-full group-hover:h-full m-auto h-0 w-0 duration-500 transition-all bg-[rgba(0,0,0,.5)]"
                  ></div>
                  <a
                    class="text-white font-bold top-3 left-3 rounded-md cursor-pointer bg-primary py-1 px-3 absolute"
                    >Developer</a
                  >
                  <img alt="img" src="../assets/img/blog1.jpg" class="w-full" />
                </div>
                <div class="p-5">
                  <div class="flex flex-wrap items-center gap-3">
                    <a class="flex items-center gap-2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-person-fill text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                        />
                      </svg>
                      <p class="text-[#888]">By Admin Poket .</p>
                    </a>
                    <div class="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-clock text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                        />
                        <path
                          d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                        />
                      </svg>
                      <p class="text-[#888]">24 Aug 2021</p>
                    </div>
                  </div>
                  <a
                    class="text-[22px] transition-all hover:text-primary font-bold text-[#030925] mt-3 cursor-pointer block"
                    >Open source job report in enings fewer.</a
                  >
                  <a
                    class="w-10 h-10 hover:text-white text-primary mt-5 cursor-pointer flex items-center justify-center rounded-full bg-[#fb3b0014] transition-all hover:bg-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="p-5">
              <div class="hover:bg-white transition-all duration-500 hover:shadow-lg group">
                <div class="relative overflow-hidden">
                  <div
                    class="absolute inset-0 group-hover:w-full group-hover:h-full m-auto h-0 w-0 duration-500 transition-all bg-[rgba(0,0,0,.5)]"
                  ></div>
                  <a
                    class="text-white font-bold top-3 left-3 rounded-md cursor-pointer bg-primary py-1 px-3 absolute"
                    >Developer</a
                  >
                  <img alt="img" src="../assets/img/blog2.jpg" class="w-full" />
                </div>
                <div class="p-5">
                  <div class="flex flex-wrap items-center gap-3">
                    <a class="flex items-center gap-2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-person-fill text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                        />
                      </svg>
                      <p class="text-[#888]">By Admin Poket .</p>
                    </a>
                    <div class="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-clock text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                        />
                        <path
                          d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                        />
                      </svg>
                      <p class="text-[#888]">24 Aug 2021</p>
                    </div>
                  </div>
                  <a
                    class="text-[22px] transition-all hover:text-primary font-bold text-[#030925] mt-3 cursor-pointer block"
                    >Open source job report in enings fewer.</a
                  >
                  <a
                    class="w-10 h-10 hover:text-white text-primary mt-5 cursor-pointer flex items-center justify-center rounded-full bg-[#fb3b0014] transition-all hover:bg-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="p-5">
              <div class="hover:bg-white transition-all duration-500 hover:shadow-lg group">
                <div class="relative overflow-hidden">
                  <div
                    class="absolute inset-0 group-hover:w-full group-hover:h-full m-auto h-0 w-0 duration-500 transition-all bg-[rgba(0,0,0,.5)]"
                  ></div>
                  <a
                    class="text-white font-bold top-3 left-3 rounded-md cursor-pointer bg-primary py-1 px-3 absolute"
                    >Developer</a
                  >
                  <img alt="img" src="../assets/img/blog5.jpg" class="w-full" />
                </div>
                <div class="p-5">
                  <div class="flex flex-wrap items-center gap-3">
                    <a class="flex items-center gap-2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-person-fill text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                        />
                      </svg>
                      <p class="text-[#888]">By Admin Poket .</p>
                    </a>
                    <div class="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-clock text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                        />
                        <path
                          d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                        />
                      </svg>
                      <p class="text-[#888]">24 Aug 2021</p>
                    </div>
                  </div>
                  <a
                    class="text-[22px] transition-all hover:text-primary font-bold text-[#030925] mt-3 cursor-pointer block"
                    >Open source job report in enings fewer.</a
                  >
                  <a
                    class="w-10 h-10 hover:text-white text-primary mt-5 cursor-pointer flex items-center justify-center rounded-full bg-[#fb3b0014] transition-all hover:bg-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </main>
</template>
  
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>
  
<style></style>