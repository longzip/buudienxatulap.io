<template>
  <main class="profile-page">
    <section class="relative block pt-16 pb-32" style="min-height: 75vh">
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        style="background-image: url('/images/chi-tra-luong-huu.png')"
      >
        <span
          id="blackOverlay"
          class="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div class="pr-12">
              <h1 class="text-white font-semibold text-5xl">
                Gửi đồ qua bưu điện.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style="height: 70px"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
    <section class="relative py-16 bg-gray-300">
      <div class="container mx-auto px-4">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
        >
          <div class="px-6">
            <GuuHangBuuDien />
            <HoThiTham />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  head: {
    title: 'Gửi đồ qua bưu điện - Hồ Thị Thắm',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Chỉ cần nhập mã vận đơn của bưu gửi bạn tra cứu được chính xác thông tin định vị bưu gửi.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Gửi đồ qua bưu điện | Hồ Thị Thắm',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Khi bạn đến gửi hàng nhớ giữ lại mã vận đơn và nhập vào ô tra cứu để kiểm tra thông tin định vị của bưu gửi và các thông tin phát hàng.',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:site_name',
        property: 'og:type',
        content: 'Hồ Thị Thắm',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://www.hotham.vn/images/ho-thi-tham-o-buu-dien-xa-tu-lap.jpg',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.hotham.vn/gui-do-qua-buu-dien/',
      },
      {
        property: 'og:locale',
        content: 'vi_VN',
      },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.hotham.vn/gui-do-qua-buu-dien/',
      },
    ],
  },
}
</script>
