<template>
  <section class="pb-20 bg-yellow-200 -mt-24">
    <div class="container mx-auto px-4">
      <section class="bg-yellow-200 dark:bg-gray-900">
        <div class="flex flex-wrap">
          <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <h6 class="text-xl font-semibold">Hàng tiêu dùng bưu điện</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  Hiện nay tất cả các Bưu cục giao dịch của Bưu điện từ thành
                  thị đến các vùng nông thôn, các điểm Bưu điện văn hóa xã đều
                  có sẵn hàng hóa để cung cấp cho khách hàng.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                </div>
                <h6 class="text-xl font-semibold">Đa dạng sản phẩm</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  Các sản phẩm hàng tiêu dùng đều có nguồn gốc. Hàng hóa đạt
                  tiêu chuẩn chất lượng, đảm bảo an toàn sức khỏe và vệ sinh môi
                  trường.
                </p>
              </div>
            </div>
          </div>
          <div class="pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h6 class="text-xl font-semibold">Bưu điện xã Tự Lập</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  Chuyên cung cấp các sản phẩm luôn cần thiết trong cuộc sống
                  sinh hoạt hàng ngày của mọi gia đình..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
        >
          <h2 class="sr-only">Sản phẩm</h2>
          <div
            class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
            <a
              v-for="product in products"
              :key="product.id"
              :href="`https://store.hotham.vn/cua-hang/${product.slug}/`"
              class="group"
            >
              <div
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
              >
                <img
                  :src="product.featuredImage.node.sourceUrl"
                  :alt="product.featuredImage.node.altText"
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
              <p class="mt-1 text-lg font-medium text-gray-900">
                {{ product.price }}
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import products from '~/data/products'
export default {
  data() {
    return {
      soTienGui: '',
      searchText: '',
      products,
      laiSuat: [
        0.06, 0.06, 0.06, 0.06, 0.06, 0.076, 0.076, 0.076, 0.076, 0.076, 0.076,
        0.08, 0.083, 0.083, 0.083, 0.083, 0.083, 0.083, 0.083, 0.083, 0.083,
      ],
      laiSuat1: [
        0, 0, 0, 0, 0, 0.009, 0.009, 0.009, 0.009, 0.009, 0.009, 0.006, 0.007,
        0.007, 0.007, 0.007, 0.007, 0.007, 0.007, 0, 0,
      ],
      laiSuat2: [
        0, 0, 0, 0, 0, 0.007, 0.007, 0.007, 0.007, 0.007, 0.007, 0.006, 0.007,
        0.007, 0.007, 0.007, 0.007, 0.007, 0.007, 0, 0,
      ],
      laiSuat3: [
        0, 0, 0, 0, 0, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.006,
        0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006, 0.006,
      ],
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        return `đ ${parseInt(this.soTienGui).toLocaleString()}`
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.soTienGui = parseInt(newValue.replace(/[^\d]*/g, '')) || 0
      },
    },
    bangLaiSuat() {
      return [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 18, 24, 25, 36, 48,
        60,
      ].map((soThang, index) => {
        const KHCNUT = (
          ((this.soTienGui * soThang) / 6 / 100000).toFixed(0) * 100000
        ).toFixed(0)
        const NhomUT =
          soThang >= 48
            ? 0
            : KHCNUT >= 3000000000
            ? 1
            : KHCNUT >= 500000000
            ? 2
            : KHCNUT >= 100000000
            ? 3
            : 0
        const tangThem =
          NhomUT === 1
            ? this.laiSuat1[index]
            : NhomUT === 2
            ? this.laiSuat2[index]
            : NhomUT === 3
            ? this.laiSuat3[index]
            : 0
        const hangUuTien =
          KHCNUT >= 500000000 && KHCNUT < 1000000000
            ? 'Hạng Bạc - Nhóm 2'
            : KHCNUT >= 1000000000 && KHCNUT < 3000000000
            ? 'Hạng Ti tan - Nhóm 2'
            : KHCNUT >= 100000000 && KHCNUT < 500000000
            ? 'Hạng Tiềm năng - Nhóm 3'
            : KHCNUT >= 3000000000 && KHCNUT < 5000000000
            ? 'Hạng Vàng - Nhóm 1'
            : KHCNUT >= 5000000000 && KHCNUT < 10000000000
            ? 'Hạng Bạch kim - Nhóm 1'
            : KHCNUT >= 10000000000
            ? 'Hạng Kim cương - Nhóm 1'
            : 'Không đủ Điều kiện'
        return {
          soThang,
          laiSuat: this.laiSuat[index],
          KHCNUT,
          NhomUT,
          tangThem,
          hangUuTien,
        }
      })
    },
  },
  created() {
    if (this.$route.query.q) {
      const q = this.$route.query.q
      this.fullName = q
    }
  },
}
</script>
