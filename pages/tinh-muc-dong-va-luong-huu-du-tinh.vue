<template>
  <main class="profile-page">
    <section class="relative block pt-16 pb-32" style="min-height: 75vh">
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        style="background-image: url('/images/chi-tra-luong-huu-web.png')"
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
                Tính mức đóng và lương hưu dự tính.
              </h1>
              <p class="mt-4 text-lg text-gray-300">
                Hồ Thị Thắm: Chi trả lương hưu và trợ cấp BHXH BĐ xã Tự Lập.
              </p>
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

    <TinhMucDongVaLuongHuu />
  </main>
</template>

<script>
export default {
  head: {
    title: 'Tính mức đóng BHXH tự nguyện và lương hưu dự tính - Hồ Thị Thắm',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Truy cập ngay để tính mức lương hưu khi tham gia BHXH tự nguyện. Chỉ cần chọn mức thu nhập lựa chọn bạn kiểm tra ngay được mức đóng và lương hưu chính xác nhất.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'Tính mức đóng BHXH tự nguyện và lương hưu dự tính | Hồ Thị Thắm',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Truy cập ngay để tính mức lương hưu khi tham gia BHXH tự nguyện. Chỉ cần chọn mức thu nhập lựa chọn bạn kiểm tra ngay được mức đóng và lương hưu chính xác nhất.',
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
        content: 'https://www.hotham.vn/tinh-muc-dong-va-luong-huu-du-tinh/',
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
        href: 'https://www.hotham.vn/tinh-muc-dong-va-luong-huu-du-tinh/',
      },
    ],
  },
}
</script>
