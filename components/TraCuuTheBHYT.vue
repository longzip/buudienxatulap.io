<template>
  <section class="relative py-20">
    <div class="container mx-auto px-4">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-6/12 ml-auto mr-auto px-4">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Nội dung:
          </label>
          <input
            id="grid-first-name"
            v-model="searchText"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Họ và tên (đầy đủ)"
            @keydown.enter="timKiem()"
          />
          <p class="text-red-500 text-xs italic mb-5">
            Tra cứu theo họ và tên hoặc nhập mã số thẻ BHYT rồi bấm nút Tra cứu.
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
          </div>
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
                      Địa chỉ: <em>{{ bhyt.diaChiLh }}</em>
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Số thẻ BHYT: <strong>{{ bhyt.soTheBhyt }}</strong>
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Sử dụng từ ngày: {{ bhyt.tuNgayDt | ngayThang }}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      đến ngày
                      <strong>{{ bhyt.denNgayDt | ngayThang }}</strong>
                      <span class="text-2xl"
                        >({{ bhyt.denNgayDt | soNgay }})</span
                      >
                    </p>
                    <p class="text-xl text-blue-600 dark:text-gray-400">
                      Ngày 5 năm liên tục: {{ bhyt.ngay5Nam | ngayThangString }}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Nơi KCB: <em>{{ bhyt.maKCB }}</em>
                    </p>

                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Gia hạn:
                      {{ new Date(bhyt.ngayLap).toLocaleDateString() }} -
                      <strong
                        >đ{{ parseInt(bhyt.tongTien).toLocaleString() }}</strong
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
                  </div>
                </div>
              </li>
            </ul>
            <p class="text-center text-gray-500 text-xs mt-10">
              &copy;2022 bởi
              <a class="text-blue-600" href="https://lovanlong.ga"
                >Lỗ Văn Long</a
              >.
            </p>
            <p class="text-center text-red-500 text-xl mt-10">
              Để gia hạn thẻ BHYT hết hạn, bạn chỉ cần đến
              <strong
                >Điểm thu bảo hiểm xã hội, bảo hiểm y tế Bưu điện xã Tự
                Lập</strong
              >
              (cạnh trạm y tế xã) gặp chị Hồ Thị Thắm (thay anh Lập nghỉ). Trong
              trường hợp bạn không có điều kiện trực tiếp tới Bưu điện xã Tự
              Lập, bạn có thể liên hệ
              <a class="text-blue-600" href="https://zalo.me/0978333963"
                >Zalo 0978 333 963</a
              >.
            </p>
          </div>
          <div v-else>
            <p class="text-center text-yellow-500 text-2xl pt-16">
              Người dân chủ động theo dõi, kiểm tra, ghi nhớ quá trình tham gia,
              giá trị sử dụng thẻ BHYT nhằm kịp thời gia hạn thẻ BHYT sau khi
              thẻ BHYT (cũ) hết hạn, đảm bảo quyền lợi khám chữa bệnh BHYT liên
              tục; đồng thời tránh tình trạng gian lận, trục lợi quỹ BHYT (nếu
              có).
              <a
                class="text-blue-600"
                target="_blank"
                href="https://blog.hotham.vn/nhung-cach-theo-doi-qua-trinh-tham-gia-va-gia-tri-su-dung-the-bhyt-nham-dam-bao-quyen-loi-lien-tuc/"
                >Xem thêm</a
              >
            </p>
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
  created() {
    this.getAuth()
    if (this.$route.query.q) {
      const q = this.$route.query.q
      this.searchText = q
      this.timKiem(q)
    }
    if (this.$route.query.maHoGd) {
      const maHoGd = this.$route.query.maHoGd
      this.timKiemHoGd(maHoGd)
    }
  },
  methods: {
    async fetchAPIByName(searchText) {
      if (!this.key) await this.getAuth()
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.key}`,
      }

      // const API_URL = `https://ssm-api.vnpost.vn/api/services/app/TraCuu/TraCuuMaSoBHXH?maTinh=01&maHuyen=250&maXa=08986&hoTen=${searchText}&isCoDau=true&`
      const API_URL = `https://ssm-api.vnpost.vn/api/services/app/TraCuu/TraCuuMaSoBHXH?maTinh=01&maHuyen=250&maXa=null&hoTen=${searchText}&isCoDau=true&`

      const res = await fetch(API_URL, {
        method: 'GET',
        headers,
      })

      const json = await res.json()
      if (json.errors) {
        throw new Error('Failed to fetch API')
      }

      return json.result.value
    },

    async fetchAPIByMaSoBhxh(maSoBhxh) {
      if (!this.key) await this.getAuth()
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.key}`,
      }

      const API_URL = `https://ssm-api.vnpost.vn/api/services/app/TraCuu/TraCuuThongTinBHYT?maSoBhxh=${maSoBhxh.slice(
        maSoBhxh.length - 10
      )}`

      const res = await fetch(API_URL, {
        method: 'GET',
        headers,
      })

      const json = await res.json()
      if (json.errors) {
        throw new Error('Failed to fetch API')
      }
      return json.result
    },

    async fetchUserGhiChu() {
      const headers = {
        'Content-Type': 'application/json',
      }

      const API_URL = 'https://cms.buudienhuyenmelinh.vn/api/user-ghi-chu'

      const res = await fetch(API_URL, {
        method: 'GET',
        headers,
      })
      const text = await res.text()
      return text
    },

    async save(bhyt) {
      const headers = {
        'Content-Type': 'application/json',
      }

      const API_URL = 'https://cms.buudienhuyenmelinh.vn/api/bhyts'

      const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(bhyt),
      })

      const json = await res.json()
      if (json.errors) {
        // console.error(json.errors)
        throw new Error('Failed to fetch API')
      }
      return json
    },

    async getAllBHYTbyName(name) {
      const headers = {
        'Content-Type': 'application/json',
      }

      const API_URL = `https://cms.buudienhuyenmelinh.vn/api/bhyts?name=${name}`

      const res = await fetch(API_URL, {
        method: 'GET',
        headers,
      })

      const json = await res.json()
      if (json.errors) {
        // console.error(json.errors)
        throw new Error('Failed to fetch API')
      }

      this.dsBhyts = [...json]
    },

    async getAllBHYTbyHoGd(maHoGd) {
      const headers = {
        'Content-Type': 'application/json',
      }

      const API_URL = `https://cms.buudienhuyenmelinh.vn/api/bhyts?&maHoGd=${maHoGd}`

      const res = await fetch(API_URL, {
        method: 'GET',
        headers,
      })

      const json = await res.json()
      if (json.errors) {
        // console.error(json.errors)
        throw new Error('Failed to fetch API')
      }

      return [...json]
    },

    async dongBo(maSoBhxh) {
      try {
        const { thongTinTK1, thongTinTheHGD, trangThaiThe } =
          await this.fetchAPIByMaSoBhxh(maSoBhxh)
        const theBHYT = { ...thongTinTheHGD, ...thongTinTK1, ...trangThaiThe }
        const found = this.dsBhyts.find(
          (x) =>
            x.maSoBhxh === theBHYT.maSoBhxh || x.soSoBhxh === theBHYT.soSoBhxh
        )
        if (!found) {
          const bhyt = await this.save(theBHYT)
          this.dsBhyts.push(bhyt)
        }
      } catch (error) {
        await this.getAllBHYTbyName(maSoBhxh)
      }
    },

    async timKiem() {
      if (!this.searchText) return
      const name = this.searchText
        .split(' ')
        .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
        .join(' ')
      const regex = /[0-9]/g
      const maSo = this.searchText.match(regex)

      if (maSo) {
        await this.dongBo(maSo.join(''))
      } else {
        this.dsBhyts = []
        try {
          const dsBhyts = await this.fetchAPIByName(name)
          for (let index = 0; index < dsBhyts.length; index++) {
            const { maSoBhxh } = dsBhyts[index]
            await this.dongBo(maSoBhxh)
          }
        } catch (error) {
          await this.getAllBHYTbyName(name)
        }
      }
    },
    async timKiemHoGd(maHoGd) {
      this.dsBhyts = []
      const dsBhyts = await this.getAllBHYTbyHoGd(maHoGd)
      try {
        for (let index = 0; index < dsBhyts.length; index++) {
          const { maSoBhxh } = dsBhyts[index]
          await this.dongBo(maSoBhxh)
        }
      } catch (error) {
        this.dsBhyts = dsBhyts
      }
    },

    async getTaiTuc() {
      this.dsBhyts = await fetch(
        'https://cms.buudienhuyenmelinh.vn/api/bhyts?thang=2&taiTuc=1&completed=0&disabled=0'
      ).then((res) => res.json())
    },
    isConHan(value) {
      if (!value) return false
      const diffTime = new Date(value) - new Date()
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) > 90
    },
    async getAuth() {
      this.key = await this.fetchUserGhiChu()
    },
  },
}
</script>
