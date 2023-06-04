<template>
  <section class="relative py-20">
    <div class="container mx-auto px-1">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-6/12 ml-auto mr-auto px-4">
          <div
            v-if="loading"
            class="text-center text-yellow-500 text-2xl pt-16"
          >
            Đang tìm kiếm định vị bưu gửi {{ searchText }}. Vui lòng chờ trong
            giây lát...
          </div>
          <div v-if="itemCode && itemCode.Code">
            <p
              v-if="itemCode.Code === '99'"
              class="text-center text-yellow-500 text-2xl pt-16"
            >
              Không tìm thấy định vị bưu gửi <strong>{{ searchText }}</strong
              >. Vui lòng liên hệ bưu cục gửi hàng hoặc bấm
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                @click="timKiem(searchText)"
              >
                tìm lại
              </button>
            </p>
          </div>
          <div v-if="itemCode && itemCode.TBL_INFO">
            <p class="text-gray-500 text-xl mt-10">
              Người gửi: {{ itemCode.TBL_INFO.HO_TEN_GUI }}
            </p>
            <p class="text-gray-500 text-xl">
              Gửi đến: {{ itemCode.TBL_INFO.DIA_CHI_NHAN }}
            </p>
            <p class="text-gray-500 text-xl">
              Khối lượng: {{ itemCode.TBL_INFO.KHOI_LUONG }}g
            </p>
            <h3 class="text-blue-500 text-xl mt-16">
              Mã vận đơn:{{ itemCode.TBL_INFO.MAE1 }} -
              {{ itemCode.TBL_INFO.BC_GUI }}
            </h3>
            <ol
              class="pt-12 relative border-l border-gray-200 dark:border-gray-700"
            >
              <li
                v-for="(
                  { NGAY_TRANG_THAI, VI_TRI, TRANG_THAI, DIEN_THOAI }, i
                ) in itemCode.List_TBL_DINH_VI"
                :key="i"
                class="mb-10 ml-4"
              >
                <time
                  class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                  >{{ NGAY_TRANG_THAI }}</time
                >
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  {{ VI_TRI }}
                </h3>
                <p
                  class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                >
                  {{ TRANG_THAI }} {{ DIEN_THOAI }}
                </p>
                <!-- <a href="tel:0978333963" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">{{DIEN_THOAI}} <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> -->
              </li>
            </ol>
            <h3 class="text-lg font-semibold text-blue-900 dark:text-white">
              Thông tin phát
            </h3>
            <ol
              class="pt-12 relative border-l border-gray-200 dark:border-gray-700"
            >
              <li
                v-for="(
                  { NGAY_TRANG_THAI, VI_TRI, TRANG_THAI }, i
                ) in itemCode.List_TBL_DELIVERY"
                :key="i"
                class="mb-10 ml-4"
              >
                <div
                  class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                ></div>
                <time
                  class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                  >{{ NGAY_TRANG_THAI }}</time
                >
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  {{ VI_TRI }}
                </h3>
                <p
                  class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                >
                  {{ TRANG_THAI }}
                </p>
              </li>
            </ol>

            <p class="text-center text-gray-500 text-xs mt-10">
              &copy;2022 bởi
              <a
                class="text-blue-500 hover:text-blue-800"
                href="https://lovanlong.ga"
                >Lỗ Văn Long</a
              >.
            </p>
          </div>
          <div v-if="loi || itemCode.Message === 'An error has occurred.'">
            <p class="text-center text-yellow-500 text-2xl pt-16">
              Không tìm thấy định vị bưu gửi <strong>{{ searchText }}</strong
              >. Hệ thống đang bảo trì, vui lòng kiểm tra lại lúc khác...
            </p>
          </div>
          <div>
            <p class="text-center text-yellow-500 text-2xl pt-16">
              <a class="text-blue-500" href="https://zalo.me/g/mkrjas759"
                >👉 👉 Nhóm Zalo</a
              >
              <a
                class="text-blue-500"
                href="https://www.facebook.com/groups/thambuudien"
                >👉 👉 Nhóm Facebook</a
              >
            </p>
            <p class="text-center text-xl pt-5">
              Nhận thông tin về lịch làm việc và các sản phẩm dịch vụ của bưu
              điện đang triển khai tại điểm Bưu điện văn hóa xã Tự Lập.
            </p>
          </div>
        </div>
        <div class="w-full md:w-6/12 ml-auto mr-auto px-1">
          <ThamBuuDien />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      searchText: '',
      itemCode: {},
      loading: false,
      loi: '',
    }
  },
  created() {
    if (this.$route.query.q) {
      const q = this.$route.query.q
      this.searchText = q
      this.timKiem(q)
    }
  },
  methods: {
    async fetchAPIByName(searchText) {
      const API_URL = `https://api.myems.vn/TrackAndTraceItemCode?itemcode=${searchText}&language=0`
      const res = await fetch(API_URL, {
        method: 'GET',
      })

      const json = await res.json()
      if (json.errors) {
        throw new Error('Failed to fetch API')
      }

      return json
    },

    async timKiem(searchText) {
      this.loading = true
      this.itemCode = {}
      this.loi = ''
      // this.TBL_INFO = {};

      try {
        this.itemCode = await this.fetchAPIByName(searchText)
        this.loading = false
      } catch (error) {
        this.loi = 'Có lỗi.'
        this.loading = false
      }
      // const TBL_INFO = kq;
      // this.TBL_INFO = TBL_INFO;
      // this.itemCode =kq;
    },
  },
}
</script>
