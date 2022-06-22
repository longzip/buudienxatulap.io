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
                    Họ và tên hoặc mã số BHXH, BHYT:
                </label>
                <input v-model="searchText" @keydown.enter="timKiem()" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Tên">
                <p class="text-red-500 text-xs italic mb-5">Tìm kiếm theo họ và tên hoặc nhập mã số thẻ BHYT rồi bấm nút Tra cứu.</p>
                <div class="flex items-center justify-between ">
                    <button @click="timKiem()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Tra cứu
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="tel:0978333963">
                        Bạn cần trợ giúp?
                    </a>
                    </div>
            </div>
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                <div v-if="dsBhyts.length">
                    <ul v-for="bhyt in dsBhyts" :key="bhyt.maSoBhxh"  class="divide-y divide-gray-200 dark:divide-gray-700 mt-10">
                        <li :class="[bhyt.coTheUuTienCaoHon ? 'bg-yellow-100 border-yellow-500': isConHan(bhyt.denNgayDt) ? 'bg-green-100 border-green-500' : 'bg-gray-100 border-gray-500','py-3 sm:py-4 border-t-4 rounded mb-5 shadow']">
                            <div class="flex-col items-center space-x-4">
                                <div class="min-w-0 mx-5 mb-5">
                                    <p class="text-sm font-medium text-gray-900 dark:text-white text-xl text-bold mb-2">
                                        {{bhyt.hoTen}}
                                        {{bhyt.ngaySinhDt | namSinh}}
                                    </p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Số thẻ BHYT: {{bhyt.soTheBhyt}}
                                    </p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Nơi KCB: {{bhyt.maKCB}}
                                    </p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Từ ngày: {{bhyt.tuNgayDt | ngayThang}}
                                    </p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 text-xl">
                                        Đến ngày: {{bhyt.denNgayDt | ngayThang}}
                                    </p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Ngày 5 năm liên tục: {{bhyt.ngay5Nam | ngayThangString}}
                                    </p>
                                </div>
                                <div class="flex items-center justify-between text-base font-semibold text-gray-900 dark:text-white">
                                    <div>{{ bhyt.denNgayDt | soNgay}}</div>
                                    <a target="_blank" v-if="!isConHan(bhyt.denNgayDt)" :href="`/gia-han-the-bhyt-tai-nha?maHoGD=${bhyt.maHoGd}&q=${bhyt.maSoBhxh}`" class="mr-5 bg-gray-300 hover:bg-gray-400 text-green-500 font-bold py-2 px-4 rounded inline-flex items-center">Mua ngay</a>
                                </div>
                            </div>
                        </li>
                    </ul>
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
            key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMxNTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTQyMDEwX2dpYW9kaWNodmllbiIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiNDlmMGM0YWUtNTcyNi0yOTk3LTliYzYtMzlmMzcxYTViYmM5IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMTQyMDEwX2dpYW9kaWNodmllbiIsImlzQ2FzIjoiRmFsc2UiLCJzdWIiOiIzMTUyIiwianRpIjoiYTJmODM0YTktZGE1MC00M2Q2LWE1YjktYmFjOTIyODJkMGQ2IiwiaWF0IjoxNjU1ODU4MjcyLCJuYmYiOjE2NTU4NTgyNzIsImV4cCI6MTY1NTk0NDY3MiwiaXNzIjoiUWxkdiIsImF1ZCI6IlFsZHYifQ.TGWfCVWE0Jj36OF2kn7CxxYqx4HJBrOuLrAfdASNqi8'
       } 
    },
    methods:{
        async fetchAPIByName(searchText){
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.key}`
            }

            const API_URL = `https://ssm-api.vnpost.vn/api/services/app/TraCuu/TraCuuMaSoBHXH?maTinh=01&maHuyen=250&maXa=08986&hoTen=${searchText}&isCoDau=true&`;

            const res = await fetch(API_URL, {
                method: 'GET',
                headers
            })

            const json = await res.json()
            if (json.errors) {
                console.error(json.errors)
                throw new Error('Failed to fetch API')
            }
            
            return json.result.value
        },

        async fetchAPIByMaSoBhxh(maSoBhxh){
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.key}`
            }

            const API_URL = `https://ssm-api.vnpost.vn/api/services/app/TraCuu/TraCuuThongTinBHYT?maSoBhxh=${maSoBhxh.slice(maSoBhxh.length - 10)}`;

            const res = await fetch(API_URL, {
                method: 'GET',
                headers
            })

            const json = await res.json()
            if (json.errors) {
                console.error(json.errors)
                throw new Error('Failed to fetch API')
            }
            return json.result
        },
        
        async save(bhyt){
            const headers = {
                'Content-Type': 'application/json'
            }

            const API_URL = 'https://cmsbudientulap.herokuapp.com/api/bhyts';

            const res = await fetch(API_URL, {
                method: 'POST',
                headers,
                body: JSON.stringify(bhyt)
            })

            const json = await res.json()
            if (json.errors) {
                console.error(json.errors)
                throw new Error('Failed to fetch API')
            }
            return json
        },

        async dongBo(maSoBhxh){
            try {
                    const {thongTinTK1, thongTinTheHGD, trangThaiThe} = await this.fetchAPIByMaSoBhxh(maSoBhxh);
                    const theBHYT = {...thongTinTheHGD, ...thongTinTK1, ...trangThaiThe};
                    let found = this.dsBhyts.find(
                        (x) => x.maSoBhxh === theBHYT.maSoBhxh || x.soSoBhxh === theBHYT.soSoBhxh
                    );
                    if(!found) {
                        const bhyt = await this.save(theBHYT)
                        this.dsBhyts.push(bhyt);
                    }
                } catch (error) {
                    console.log(error);
                }
        },

        async timKiem() {
            if(!this.searchText) return;
            const name = this.searchText.split(" ").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(" ");
            const regex = /[0-9]/g;
            const maSo = this.searchText.match(regex);

            if(maSo){
                await this.dongBo(maSo.join(""));
            }
            else{
                this.dsBhyts = []
                try {
                    const dsBhyts = await this.fetchAPIByName(name);
                    for (let index = 0; index < dsBhyts.length; index++) {
                        const {maSoBhxh} = dsBhyts[index];
                        await this.dongBo(maSoBhxh);
                    }
                } catch (error) {
                    console.log(error);
                }
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
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) > 30;
        }
    },
    created(){
        
        if (this.$route.query.q) {
            const q = this.$route.query.q;
            this.searchText = q;
            this.timKiem(q);
        }
        // else
        // this.getTaiTuc();
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
        },
        soNgay(value){
            if (!value) return ''
            const diffTime = (new Date(value) - new Date());
            return (diffTime < 0 ? 'Đã hết ' : 'Còn ') + Math.abs(Math.ceil(diffTime / (1000 * 60 * 60 * 24))) + ' ngày';
        }
    }
}
</script>