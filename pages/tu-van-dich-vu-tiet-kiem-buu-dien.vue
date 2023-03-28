<template>
    <main class="profile-page">
      <section class="relative block pt-16 pb-32" style="min-height: 75vh">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="background-image: url('https://i0.wp.com/store.hotham.vn/wordpress/wp-content/uploads/sites/30/2023/02/gui-tiet-kiem-buu-dien-xa-tu-lap.png')"
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
                  Tư vấn dịch vụ tiết kiệm bưu điện.
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                    Khi cần gửi tiết kiệm bưu điện BẠN chỉ cần trực tiếp đến điểm Bưu điện văn hóa xã Tự Lập cạnh trạm y tế xã gặp chị Hồ Thị Thắm (thay anh Lập nghỉ), xuất trình giấy tờ xác minh và hoàn thiện mẫu biểu theo quy định của Ngân hàng
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
  
      <GuiTietKiemBuuDien />
    </main>
  </template>
  
  <script>
  export default {
    head: {
      title: 'Hỗ trợ tư vấn dịch vụ tiết kiệm bưu điện - Hồ Thị Thắm',
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
            'Hỗ trợ tư vấn dịch vụ tiết kiệm bưu điện | Hồ Thị Thắm',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Khi cần gửi tiết kiệm BẠN chỉ cần trực tiếp đến Điểm Bưu điện văn hóa xã Tự Lập, xuất trình giấy tờ xác minh và hoàn thiện mẫu biểu theo quy định của Ngân hàng.',
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
            'https://i0.wp.com/store.hotham.vn/wordpress/wp-content/uploads/sites/30/2023/02/gui-tiet-kiem-buu-dien-xa-tu-lap.png',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.hotham.vn/tu-van-dich-vu-tiet-kiem-buu-dien/',
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
  