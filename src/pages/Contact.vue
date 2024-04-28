<template>
  <main>


    <!-- contact -->
    <section class="relative pt-20 pb-52" id="contact">
      <!-- overlay -->
       <div class="absolute w-full h-full inset-0 bg-[#030925] opacity-75"></div>
      <!--  -->
      <div class="container mx-auto px-5 mb-20 mt-10 relative">
        <a
          class="w-20 h-20 rounded-full bg-white flex items-center justify-center cursor-pointer mx-auto"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="text-primary bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
            ></path></svg
        ></a>
        <h3 class="text-3xl font-bold text-white mt-9 text-center">
          Our Purpose is to Create Your Own<br />
          Web Masterpiece
        </h3>
      </div>
    </section>

    <!-- form -->
    <section class="relative -top-56 z-10">
      <div class="container px-5 mx-auto">
        <form
          class="rounded-xl overflow-hidden shadow6 bg-white py-14 px-9 grid grid-cols-12 gap-6 mt-16"
        >
          <input
            required
            placeholder="Your Name*"
            class="h-14 md:col-span-6 col-span-12 rounded-md border outline-none text-[#888] pl-7 pr-3 w-full mb-6"
          />
          <input
            required
            placeholder="Your Phone*"
            class="h-14 md:col-span-6 col-span-12 rounded-md border outline-none text-[#888] pl-7 pr-3 w-full mb-6"
          />
          <input
            required
            placeholder="Your Email*"
            class="h-14 md:col-span-6 col-span-12 rounded-md border outline-none text-[#888] pl-7 pr-3 w-full mb-6"
          />
          <input
            required
            placeholder="Your Subject*"
            class="h-14 md:col-span-6 col-span-12 rounded-md border outline-none text-[#888] pl-7 pr-3 w-full mb-6"
          />
          <textarea
            required
            rows="4"
            placeholder="Text Message*"
            class="col-span-12 rounded-md border outline-none text-[#888] pl-7 p-3 w-full mb-6"
          ></textarea>
          <div class="col-span-12">
            <input
              type="submit"
              value="Send Message"
              class="transition-all hover:bg-[#191f2d] w-44 h-14 cursor-pointer mx-auto flex items-center justify-center font-semibold rounded-[30px] bg-primary text-white"
            />
          </div>
        </form>
      </div>
    </section>

    <!-- address -->
    <section class="-mt-32">
      <div class="container mx-auto px-5">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="bg-white py-14 px-8 shadow6 group">
            <div
              class="w-20 h-20 bg-primary mx-auto group-hover:bg-[#111111] transition-all duration-500 flex items-center justify-center rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-geo-alt-fill text-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
                />
              </svg>
            </div>
            <h3 class="font-bold text-[22px] text-[#030925] my-4 text-center">
              Office Location
            </h3>
            <p class="text-[#777777] text-center">
              Riverside Building, County Hall, Bishop's, SE1 7PB, United Kingdom
            </p>
          </div>
          <div class="bg-white py-14 px-8 shadow6 group">
            <div
              class="w-20 h-20 bg-primary mx-auto group-hover:bg-[#111111] transition-all duration-500 flex items-center justify-center rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-telephone text-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
            </div>
            <h3 class="font-bold text-[22px] text-[#030925] my-4 text-center">
              Phone Number
            </h3>
            <p class="text-[#777777] text-center">
              + 588) 1234-567-8922<br />
              + (638) 1234-567-8675
            </p>
          </div>
          <div class="bg-white py-14 px-8 shadow6 group">
            <div
              class="w-20 h-20 bg-primary mx-auto group-hover:bg-[#111111] transition-all duration-500 flex items-center justify-center rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-envelope text-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
                />
              </svg>
            </div>
            <h3 class="font-bold text-[22px] text-[#030925] my-4 text-center">
              E-mail Number
            </h3>
            <p class="text-[#777777] text-center">
              demo@example.com<br />
              info@example.com
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- map -->
    <section class="mt-24">
      <iframe
        class="w-full h-[500px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207344.0754342176!2d51.51246591933516!3d35.707740217686975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2z2KrZh9ix2KfZhtiMINin2LPYqtin2YYg2KrZh9ix2KfZhtiMINin24zYsdin2YY!5e0!3m2!1sfa!2s!4v1708858730182!5m2!1sfa!2s"
        height="200"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>


  </main>
</template>
  
<script>
export default {
  setup() {},
};
</script>
  
<style></style>