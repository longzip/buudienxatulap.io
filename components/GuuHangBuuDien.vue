<template>
  <section class="relative py-20">
    <div class="container mx-auto px-4">
      <div class="items-center flex flex-wrap">
        <div v-if="!ketQua" class="w-full md:w-6/12 ml-auto mr-auto px-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-noi-dung"
          >
            Nội dung (tên sản phẩm):
          </label>
          <input
            id="grid-noi-dung"
            v-model="donHang.noiDung"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Ví dụ: quần áo (đổi trả)"
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-so-dien-thoai-nguoi-nhan"
          >
            Số điện thoại của người nhận:
          </label>
          <input
            id="grid-so-dien-thoai-nguoi-nhan"
            v-model="donHang.soDienThoaiNguoiNhan"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Ví dụ: 0978333xxx"
            @keyup="getDiaChiNguoiNhan"
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-ten-nguoi-nhan"
          >
            Tên người nhận:
          </label>
          <input
            id="grid-ten-nguoi-nhan"
            v-model="donHang.hoTenNguoiNhan"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Ví dụ: Hồ Thắm Shop"
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-dia-chi-nguoi-nhan"
          >
            Địa chỉ (thôn xóm, xã/phường, quận/huyện, tỉnh/tp):
          </label>
          <input
            id="grid-dia-chi-nguoi-nhan"
            v-model="donHang.diaChiNguoiNhan"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Ví dụ: Bưu điện xã Tự Lâp"
          />
          <input
            id="grid-dia-chi-nguoi-nhan-2"
            v-model="donHang.diaChiNguoiNhan2"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Ví dụ: phú mỹ, tự lập, mê linh, hà nội"
          />
          <hr class="mb-10" />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-so-dien-thoai-nguoi-gui"
          >
            Người gửi (Số điện thoại,họ tên, địa chỉ):
          </label>
          <input
            id="grid-so-dien-thoai-nguoi-gui"
            v-model="donHang.soDienThoaiNguoiGui"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="0978333963"
            @keyup="getDiaChi"
          />
          <input
            id="grid-ho-ten-nguoi-gui"
            v-model="donHang.hoTenNguoiGui"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Hồ Thị Thắm (Hồ Thắm SHOP)"
          />
          <input
            id="grid-dia-chi-nguoi-gui"
            v-model="donHang.diaChiNguoiGui"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="tự lập, mê linh, hà nội"
          />

          <p v-if="!loi" class="text-red-500 text-xs italic mb-5">
            Điền đầy đủ các thông tin người nhận ở trên và người gửi rồi bấm nút
            gửi ngay.
          </p>
          <p v-if="loi" class="text-red-500 text-2xs italic mb-5">
            {{ loi }}
          </p>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              @click="guiDonHang"
            >
              Gửi ngay
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="tel:0978333963"
            >
              Bạn cần trợ giúp?
            </a>
          </div>
        </div>
        <div v-else class="w-full md:w-6/12 ml-auto mr-auto px-4">
          <div class="text-center mt-12">
            <h3
              class="text-4xl font-semibold leading-normal text-gray-800 mb-2"
            >
              Đơn hàng đã được sao chép vào bộ nhớ.
            </h3>
            <p class="mb-4 text-lg leading-relaxed text-gray-800">
              Bấm nút Chat ở dưới và dán nội dung này (đã được copy) vào tin
              nhắn để gửi đi (chỉ cần mở ứng dụng và gửi tin nhắn đến chị Hồ Thị
              Thắm ở dưới).
            </p>
            <p class="mb-4 text-lg leading-relaxed text-gray-800">
              {{
                `Nội dung: ${donHang.noiDung} \r\n\n
                  Người gửi: ${[
                    donHang.soDienThoaiNguoiGui,
                    donHang.hoTenNguoiGui,
                    donHang.diaChiNguoiGui,
                  ].join('\t')} \r\n
                  \n
                  Người nhận: ${[
                    donHang.soDienThoaiNguoiNhan,
                    donHang.hoTenNguoiNhan,
                    donHang.diaChiNguoiNhan + ', ' + donHang.diaChiNguoiNhan2,
                  ].join('\t')}
              `
              }}
              <a
                class="font-normal text-white shadow-md"
                target="_blank"
                href="https://zalo.me/0978333963"
                ><span class="text-2xl bg-yellow-500"
                  >Bấm vào đây để gửi qua Zalo</span
                >
              </a>
            </p>
          </div>
        </div>
        <div class="w-full md:w-6/12 ml-auto mr-auto px-4"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      donHang: {
        diaChiNguoiGui: 'Tự Lập, Mê Linh, Hà Nội',
        soDienThoaiNguoiGui: '',
        hoTenNguoiGui: '',
        noiDung: '',
        soDienThoaiNguoiNhan: '',
        hoTenNguoiNhan: '',
        diaChiNguoiNhan: '',
        diaChiNguoiNhan2: '',
      },
      ketQua: 0,
      loi: '',
      key: '',
    }
  },
  created() {
    if (this.$route.query.q) {
      this.key = this.$route.query.q
    }
  },
  methods: {
    async fetchAPIByName(searchText) {
      const API_URL = `https://app.hotham.vn/api/khls/${searchText}/dia-chi`
      const res = await fetch(API_URL, {
        method: 'GET',
      })

      const json = await res.json()
      if (json.errors) {
        throw new Error('Failed to fetch API')
      }

      return json
    },
    async postAPIByName() {
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      myHeaders.append('Authentication', `Bearer ${atob(this.key)}`)
      const API_URL = 'https://app.hotham.vn/api/khls/don-hang'
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(this.donHang),
        redirect: 'follow',
      })

      const json = await res.json()
      if (json.errors) {
        throw new Error('Failed to fetch API')
      }

      return json
    },
    async getDiaChi() {
      if (this.donHang.soDienThoaiNguoiGui.length === 10) {
        try {
          const [dc, p] = await this.fetchAPIByName(
            this.donHang.soDienThoaiNguoiGui
          )
          if (dc) this.donHang.diaChiNguoiGui = dc
          if (p) this.donHang.hoTenNguoiGui = p
        } catch (error) {}
      }
    },
    async getDiaChiNguoiNhan() {
      if (this.donHang.soDienThoaiNguoiNhan.length === 10) {
        try {
          const [dc, p] = await this.fetchAPIByName(
            this.donHang.soDienThoaiNguoiNhan
          )
          if (dc) this.donHang.diaChiNguoiNhan = dc
          if (p) this.donHang.hoTenNguoiNhan = p
        } catch (error) {}
      }
    },
    async guiDonHang() {
      const donHang = this.donHang
      if (this.donHang.soDienThoaiNguoiGui) {
        navigator.clipboard.writeText(
          `Nội dung: ${donHang.noiDung} \r\n` +
            `Người gửi: ${[
              donHang.hoTenNguoiGui,

              donHang.diaChiNguoiGui,
              donHang.soDienThoaiNguoiGui,
            ].join('\t')} \r\n` +
            `Người nhận: ${[
              donHang.hoTenNguoiNhan,
              donHang.diaChiNguoiNhan,
              donHang.soDienThoaiNguoiNhan + ', ' + donHang.diaChiNguoiNhan2,
            ].join('\t')}
              `
        )
        try {
          const data = await this.postAPIByName()
          this.ketQua = data
        } catch (error) {
          this.loi = error
        }
      }
    },
  },
}
</script>
