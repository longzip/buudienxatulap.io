<template>
  <main>
    <TieuDe
      title="Giảm trừ mức đóng, gia hạn BHYT hộ gia đình online"
      desc="Tham gia bảo hiểm y tế hộ gia đình từ người thứ hai trở đi sẽ được giảm trừ mức đóng. Nhập mã số thẻ BHYT của các thành viên trong hộ gia đình để tra cứu mức đóng."
    />
    <!-- <BuuDienXaTuLap /> -->
    <GiaHanTheBHYT />
    <!-- <SanPham />
      <ThongBao />
      <GuiYeuCau /> -->
  </main>
</template>
<script>
export default {
  head: {
    title: 'Gia hạn thẻ BHYT tại nhà - Hồ Thị Thắm',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Gia hạn thẻ BHYT hộ gia đình có giảm trừ mức đóng, người đầu tiên sẽ mua với giá 804.600 đồng, từ người thứ hai, thứ ba, thứ tư sẽ được giảm trừ mức đóng với giá lần lượt bằng 70%, 60%, 50% so với mức đóng của người đầu tiên.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Gia hạn thẻ BHYT hết hạn tại nhà | Hồ Thị Thắm',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Gia hạn thẻ BHYT hộ gia đình có giảm trừ mức đóng, người đầu tiên sẽ mua với giá 804.600 đồng, từ người thứ hai, thứ ba, thứ tư sẽ được giảm trừ mức đóng với giá lần lượt bằng 70%, 60%, 50% so với mức đóng của người đầu tiên.',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:site_name',
        property: 'og:type',
        content: 'Hồ Thị Thắm',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://www.hotham.vn/images/ho-thi-tham-o-buu-dien-xa-tu-lap.jpg',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.hotham.vn/gia-han-the-bhyt-tai-nha/',
      },
      {
        property: 'og:locale',
        content: 'vi_VN',
      },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.hotham.vn/gia-han-the-bhyt-tai-nha/',
      },
    ],
  },
}
</script>
