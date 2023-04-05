<template>
  <main>
    <TieuDe
      title="Mua hàng tiêu dùng Bưu điện xã Tự Lập"
      desc="Được phân phối bởi tổng công ty bưu điện việt nam"
      bg="https://store.hotham.vn/wordpress/wp-content/uploads/sites/30/2023/03/hang-tieu-dung-buu-dien-xa-tu-lap.jpg"
    />
    <MuaHangTieuDung />
  </main>
</template>
<script>
// import MuaHangTieuDung from '~/components/MuaHangTieuDung.vue';

export default {
  head: {
    title: 'Mua hàng tiêu dùng bưu điện - Hồ Thị Thắm',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Giúp bạn mua các mặt hàng tiêu dùng tại Bưu điện văn hóa xã Tự Lập dễ dàng nhất.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'Bán hàng tiêu dùng tại điểm Bưu điện văn hóa xã Tự Lập | Hồ Thị Thắm',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Chỉ cần tạo đơn hàng trên website chúng tôi sẽ phục vụ bạn ngay.',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://store.hotham.vn/wordpress/wp-content/uploads/sites/30/2023/03/hang-tieu-dung-buu-dien-xa-tu-lap.jpg',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.hotham.vn/',
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
        href: 'https://www.hotham.vn/mua-hang-tieu-dung/',
      },
    ],
  },
  // components: { MuaHangTieuDung },
}
</script>
