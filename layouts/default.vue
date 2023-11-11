<template>
  <div>
    <div
      class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
      role="alert"
    >
      <svg
        aria-hidden="true"
        class="flex-shrink-0 inline w-5 h-5 mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium"
          >🎁 Hồ Thị Thắm tặng
          <strong class="underline">01 bột canh i-ốt Hải Châu</strong> cho khách
          hàng gia hạn thẻ bảo hiểm y tế tại điểm bưu điện xã Tự Lập!</span
        >

        <a
          target="_blank"
          class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="https://www.hotham.vn/giahanbhyt/"
        >
          <svg
            class="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          Nhận ngay</a
        >
        . Tham gia BHXH tự nguyện cùng
        <a
          class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="https://www.facebook.com/groups/hothitham"
        >
          <svg
            class="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          chị Hồ Thị Thắm
        </a>
        .
      </div>
    </div>
    <div class="relative">
      <Navbar />
    </div>
    <Nuxt />
    <Footer />
    <!-- <div class="zalo-chat-widget" data-oaid="907870636305349915" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="0" data-width="" data-height=""></div> -->
    <!-- Messenger Plugin chat Code -->
    <div id="fb-root"></div>

    <!-- Your Plugin chat code -->
    <div id="fb-customer-chat" class="fb-customerchat"></div>
    <!-- Google tag (gtag.js) -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-QCN6S7BFNG"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', 'G-QCN6S7BFNG')
    </script>
    <script id="mcjs">
      !(function (c, h, i, m, p) {
        ;(m = c.createElement(h)),
          (p = c.getElementsByTagName(h)[0]),
          (m.async = 1),
          (m.src = i),
          p.parentNode.insertBefore(m, p)
      })(
        document,
        'script',
        'https://chimpstatic.com/mcjs-connected/js/users/03e33e3cdd5e422de02a01d6e/a349bd51a875ff4001de83a79.js'
      )
    </script>
    <script src="https://sp.zalo.me/plugins/sdk.js"></script>
  </div>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.min.css'
export default {}
</script>
