<template>
  <section class="relative py-20">
    <div class="container mx-auto px-4">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-6/12 ml-auto mr-auto px-4">
          <ThamBuuDien />
          <!-- <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Họ và tên hoặc mã số BHXH, BHYT:
          </label>
          <input
            id="grid-first-name"
            v-model="searchText"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Tên"
            @keydown.enter="timKiem()"
          />
          <p class="text-red-500 text-xs italic mb-5">
            Tìm kiếm theo họ và tên hoặc nhập mã số thẻ BHYT rồi bấm nút Tra
            cứu.
          </p>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              @click="timKiem()"
            >
              Tra cứu
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="tel:0978333963"
            >
              Bạn cần trợ giúp?
            </a>
          </div> -->
        </div>
        <div class="w-full md:w-6/12 ml-auto mr-auto px-4">
          <div v-if="dsBhyts.length">
            <ul
              v-for="bhyt in dsBhyts"
              :key="bhyt.maSoBhxh"
              class="divide-y divide-gray-200 dark:divide-gray-700 mt-10"
            >
              <li
                :class="[
                  bhyt.coTheUuTienCaoHon
                    ? 'bg-yellow-100 border-yellow-500'
                    : isConHan(bhyt.denNgayDt)
                    ? 'bg-green-100 border-green-500'
                    : 'bg-gray-100 border-gray-500',
                  'py-3 sm:py-4 border-t-4 rounded mb-5 shadow',
                ]"
              >
                <div class="flex-col items-center space-x-4">
                  <div class="min-w-0 mx-5 mb-5">
                    <p
                      class="font-medium text-gray-900 dark:text-white text-xl text-bold mb-2"
                    >
                      {{ bhyt.hoTen }}
                      {{ bhyt.ngaySinhDt | namSinh }}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Số thẻ BHYT: <strong>{{ bhyt.soTheBhyt }}</strong>
                    </p>
                    <p class="text-xl text-gray-500 dark:text-gray-400">
                      Ngày 5 năm liên tục: {{ bhyt.ngay5Nam | ngayThangString }}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Nơi KCB: <em>{{ bhyt.maKCB }}</em>
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Hạn thẻ: {{ bhyt.tuNgayDt | ngayThang }} -
                      {{ bhyt.denNgayDt | ngayThang }}
                    </p>

                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Gia hạn:
                      <strong
                        >{{ bhyt.ngayLap }} -
                        <strong
                          >đ{{
                            parseInt(bhyt.tongTien).toLocaleString()
                          }}</strong
                        ></strong
                      >
                    </p>
                  </div>
                  <div
                    class="flex flex-col justify-center w-full space-y-6 text-center text-base font-semibold text-gray-900 dark:text-white md:flex-row md:space-y-0 md:space-x-4"
                  >
                    <a
                      :href="`/gia-han-the-bhyt-tai-nha?maHoGD=${bhyt.maHoGd}&q=${bhyt.maSoBhxh}`"
                      class="mr-5 bg-gray-300 hover:bg-gray-400 text-green-500 font-bold py-2 px-4 rounded"
                      >{{
                        !isConHan(bhyt.denNgayDt) ? 'Mua ngay' : 'Chi tiết'
                      }}</a
                    >
                    <div>{{ bhyt.denNgayDt | soNgay }}</div>
                  </div>
                </div>
              </li>
            </ul>
            <p class="text-center text-gray-500 text-xs mt-10">
              &copy;2022 bởi
              <a class="text-blue-600" href="https://lamwebsite.hotham.vn/"
                >Lỗ Văn Long</a
              >.
            </p>
            <p class="text-center text-red-500 text-xl mt-10">
              Để gia hạn thẻ BHYT hết hạn, bạn chỉ cần đến Đại lý thu bảo hiểm
              xã hội, bảo hiểm y tế Bưu điện xã Tự Lập gặp chị Hồ Thị Thắm
              0978333963 (thay anh Lập đã nghỉ). Trong trường hợp bạn không có
              điều kiện trực tiếp tới Bưu điện xã Tự Lập, bạn có thể đóng tiền
              gia hạn thẻ BHYT trực tuyến
              <a class="text-blue-600" href="/gia-han-the-bhyt-tai-nha/"
                >tại đây</a
              >.
            </p>
          </div>
          <div v-else>
            <p class="text-center text-yellow-500 text-2xl pt-16"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  filters: {
    ngayThang(value) {
      if (!value) return ''
      return new Date(value).toLocaleDateString()
    },
    namSinh(value) {
      if (!value) return ''
      return new Date(value).toLocaleDateString()
    },
    ngayThangString(value) {
      if (!value) return ''
      if (isNaN(value)) return ''
      return new Date(
        [value.substr(0, 4), value.substr(4, 2), value.substr(6, 2)].join('-')
      ).toLocaleDateString()
    },
    soNgay(value) {
      if (!value) return ''
      const diffTime = new Date(value) - new Date()
      return (
        (diffTime < 0 ? 'Đã hết ' : 'Còn ') +
        Math.abs(Math.ceil(diffTime / (1000 * 60 * 60 * 24))) +
        ' ngày'
      )
    },
  },
  data() {
    return {
      searchText: '',
      dsBhyts: [],
      key: '',
    }
  },
  created() {},
  methods: {},
}
</script>
