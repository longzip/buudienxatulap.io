<template>
  <section class="relative py-16 bg-gray-300">
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h1
            class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            HỖ TRỢ TƯ VẤN DỊCH VỤ TIẾT KIỆM BƯU ĐIỆN
          </h1>
          <p class="mb-5 font-bold text-blue-500 sm:text-xl dark:text-gray-400">
            Nhập số tiền gửi 👇
          </p>
          <p class="mb-2">
            <input
            id="grid-first-name"
            v-model="fullName"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Nhập số tiền bạn muốn gửi tiết kiệm"
          />
          </p>
        </div>
        <div
          class="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0"
        >
          <!-- Pricing Card -->
          <div
            v-for="item in bangLaiSuat"
            :key="item.soThang"
            :class="[
              item.tangThem
                ? 'border-indigo-500'
                : 'border-gray-100',
              'flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white',
            ]"
          >
            <h3 class="mb-4 text-2xl font-semibold">
              Gửi {{ item.soThang }} tháng
            </h3>
            <div>
              Lãi suất thông thường: {{ (item.laiSuat*100).toFixed(2) }}%
            </div>
            <div>
                Số tiền quy đổi KHCNUT: {{ parseInt(item.KHCNUT).toLocaleString() }}
            </div>
            <div>
                <em>{{ item.hangUuTien }}</em>
            </div>
            <!-- <div>
                Nhóm ưu tiên: {{ parseInt(item.NhomUT).toLocaleString() }}
            </div> -->
            <div class="font-bold">
                Lãi suất tặng thêm: {{ (item.tangThem*100).toFixed(2) }}%
            </div>
            <a
              target="_blank"
              href="https://m.me/103440001315066"
              :class="[
              item.tangThem
                ? 'bg-indigo-600 hover:bg-indigo-700'
                : 'bg-gray-600 hover:bg-indigo-700',
              'text-white  focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900',
            ]"
              >Lãi suất in trên sổ TK: {{ ((item.laiSuat+item.tangThem)*100).toFixed(2) }}%</a
            >
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
        soTienGui: 20000000,
        laiSuat: [0.06,0.06,0.06,0.06,0.06,0.076,0.076,0.076,0.076,0.076,0.076,0.08,0.083,0.083,0.083,0.083,0.083,0.083,0.083,0.083,0.083],
        laiSuat1: [0,0,0,0,0,0.009,0.009,0.009,0.009,0.009,0.009,0.006,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0,0],
        laiSuat2: [0,0,0,0,0,0.007,0.007,0.007,0.007,0.007,0.007,0.006,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0,0],
        laiSuat3: [0,0,0,0,0,0.005,0.005,0.005,0.005,0.005,0.005,0.005,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006]
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        return `đ ${parseInt(this.soTienGui).toLocaleString()}`;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.soTienGui = parseInt(newValue.replace(/[^\d]*/g, '')) || 0
      }
    },
    bangLaiSuat() {
      return [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,18,24,25,36,48,60].map((soThang,index) => {
        const KHCNUT = (((this.soTienGui*soThang/6/100000).toFixed(0))*100000).toFixed(0)
        const NhomUT = soThang >= 48 ? 0 : KHCNUT >= 3000000000 ? 1 : KHCNUT >= 500000000 ? 2 : KHCNUT >= 100000000 ? 3 : 0
        const tangThem = NhomUT === 1 ? this.laiSuat1[index] : NhomUT === 2 ? this.laiSuat2[index] : NhomUT === 3 ? this.laiSuat3[index] : 0
        const hangUuTien = KHCNUT >= 500000000 && KHCNUT < 1000000000 ? "Hạng Bạc - Nhóm 2" : KHCNUT >= 1000000000 && KHCNUT < 3000000000 ? "Hạng Ti tan - Nhóm 2" :  KHCNUT >= 100000000 && KHCNUT < 500000000 ? "Hạng Tiềm năng - Nhóm 3" : KHCNUT >= 3000000000 && KHCNUT<5000000000 ? "Hạng Vàng - Nhóm 1" : KHCNUT >= 5000000000 && KHCNUT < 10000000000? "Hạng Bạch kim - Nhóm 1" : KHCNUT >= 10000000000? "Hạng Kim cương - Nhóm 1" : "Không đủ Điều kiện"
        return {
        soThang,
        laiSuat: this.laiSuat[index],
        KHCNUT,
        NhomUT,
        tangThem,
        hangUuTien
      }})
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
