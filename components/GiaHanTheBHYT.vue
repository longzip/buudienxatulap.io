<template>
    <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px;"
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
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">

                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Mã số Thẻ BHYT:
                </label>
                <input v-model="searchText" @keydown.enter="timKiem()" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Tên">
                <p class="text-red-500 text-xs italic mb-5">Có thể tìm theo số điện thoại, mã số thẻ BHYT hoặc tên.</p>
                <div class="flex items-center justify-between ">
                    <button @click="timKiem()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Tra cứu
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="tel:0978333963">
                        Bạn cần trợ giúp?
                    </a>
                    </div>
            </div>
            <div class="w-full md:w-8/12 ml-auto mr-auto px-4">
                <div v-if="dsBhyts.length">
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full">
                                <thead class="border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            STT
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Mã thẻ BHYT
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Họ và tên
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Ngày sinh
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Ngày hết hạn
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(bhyt, stt) in dsBhyts" :key="bhyt.maSoBhxh" class="border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {{ stt+1 }}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {{ bhyt.soTheBhyt }}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {{ bhyt.hoTen }}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {{ bhyt.ngaySinhDt | ngayThang }}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {{ bhyt.denNgayDt | ngayThang }}
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                    <p class="text-center text-gray-500 text-xs mt-10">
                        &copy;2022 bởi <a href="https://lovanlong.ga">Lỗ Văn Long</a>.
                    </p>
                </div>
                <div v-else>
                    <p class="text-center text-gray-500 text-xs">
                        Không có kết quả phù hợp!
                    </p>
                </div>
                
                </div>
           
          </div>
        </div>
      </section>
</template>
<script>
export default {
    data() {
       return {
           searchText: "",
            dsBhyts: [],
       } 
    },
    methods:{
        async timKiem() {
            if(!this.searchText) return;
            const name = this.searchText.split(" ").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(" ");
            const regex = /[0-9]/g;
            const maSo = this.searchText.match(regex);
            if(!maSo) return;
            const theBHYTs = await fetch(`https://cmsbudientulap.herokuapp.com/api/bhyts?&name=${maSo ? maSo.join("") : name}`).then(res =>
                res.json()
            );

            for (let index = 0; index < theBHYTs.length; index++) {
                const bhyt = theBHYTs[index];
                let found = this.dsBhyts.find(
                    (x) => x.maSoBhxh === bhyt.maSoBhxh
                );
                if (found) Object.assign(found, bhyt);
                else this.dsBhyts.push(bhyt);
            }
        },
        async getTaiTuc(){
            this.dsBhyts = await fetch("https://cmsbudientulap.herokuapp.com/api/bhyts?thang=2&taiTuc=1&completed=0&disabled=0").then(res =>
                res.json()
            );
        },
        isConHan(value){
            if(!value) return false;
            const diffTime = (new Date(value) - new Date());
            console.log(Math.ceil(diffTime / (1000 * 60 * 60 * 24)) > 30);
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) > 30;
        }
    },
    created(){
        
        if (this.$route.query.q) {
            const q = this.$route.query.q;
            this.searchText = q;
            this.timKiem(q);
        }
    },
    filters: {
        ngayThang: function (value) {
            if (!value) return ''          
            return new Date(value).toLocaleDateString();
        },
        namSinh: function (value) {
            if (!value) return ''          
            return new Date(value).toISOString().slice(0,4);
        },
        ngayThangString: function (value) {
            if (!value) return ''
            if(isNaN(value)) return ''
            return new Date([value.substr(0,4),value.substr(4,2),value.substr(6,2)].join("-")).toLocaleDateString();;
            // value = value.toString()
            // return value.charAt(0).toUpperCase() + value.slice(1)
        },
        soNgay(value){
            if (!value) return ''
            const diffTime = (new Date(value) - new Date());
            return (diffTime < 0 ? 'Đã hết ' : 'Còn ') + Math.abs(Math.ceil(diffTime / (1000 * 60 * 60 * 24))) + ' ngày';
        }
    }
}
</script>