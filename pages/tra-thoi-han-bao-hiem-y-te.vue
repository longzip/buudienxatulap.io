<template>
    <main class="profile-page">
      <section class="relative block pt-16 pb-32 " style="min-height: 75vh;">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("/images/chi-tra-luong-huu.png");'
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Tra cứu thẻ BHYT hết hạn ở xã Tự Lập.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px;"
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
              <TraCuuTheBHYT />
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
                >
                  Hồ Thị Thắm
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
                >
                  <i
                    class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                  ></i>
                  Bưu điện văn hóa xã Tự Lập
                </div>
                <div class="mb-2 text-gray-700 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i
                  >Chuyên đề Quản lý Sổ thẻ Bảo hiểm xã hội
                </div>
                <div class="mb-2 text-gray-700">
                  <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                  >Đại Học Khoa Học Tự Nhiên - ĐHQG Hà Nội
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-gray-300 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-gray-800">
                      Xin chào, mình là <a class="font-normal text-yellow-500" target="_blank" href="https://blog.thambuudien.ga/"><span class="text-2xl">Hồ Thị Thắm</span> </a> làm cấp đổi thẻ BHYT hết hạn, thu BHXH tự nguyện ở BĐ xã Tự Lập. <span class="text-4xl text-yellow-500">Bấm vào Chat ngay ở dưới 👇👇👇 để mình hỗ trợ thêm cho bạn nhé!</span>
                    </p>
                    <p class="mb-4 text-lg leading-relaxed text-gray-800">
                      Từ ngày 1.8, Tp.Hà Nội hỗ trợ thêm cho người tham gia BHXH tự nguyện trên địa bàn. Để đăng ký tham gia, bạn chỉ cần đến Đại lý thu bảo hiểm xã hội, bảo hiểm y tế <span class="text-2xl">Bưu điện xã Tự Lập gặp mình - Hồ Thị Thắm 0978333963</span> (thay anh Lập đã nghỉ). Link tham gia nhóm thu BHXH tự nguyện và cấp đổi thẻ BHYT hết hạn ở BĐ xã Tự Lập https://zalo.me/g/wwcmdi831
                    </p>
                    <a target="_blank" href="https://blog.thambuudien.ga/" class="font-normal text-yellow-500"
                      >Tìm hiểu thêm</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>

